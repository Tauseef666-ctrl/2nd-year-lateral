/**
 * TODO 2.4 — Telegram digest bot: posts the exam-desk status to the site's
 * Telegram channel automatically. Zero dependencies.
 *
 * Runs on `node scripts/telegram-digest.mjs` via `.github/workflows/telegram.yml`:
 *   - daily 07:00 IST (cron) while an exam countdown is active → digest post
 *   - on push touching papers/examEvents data → "content updated" post
 *   - workflow_dispatch → manual test run
 *
 * Reads the TypeScript data directly (Node strips erasable types natively;
 * examEvents.ts / papers files only use `import type`, erased before execution)
 * — same trick as `build-updates.mjs`. Single source of truth, no duplicated data.
 *
 * Required repository secrets (Settings → Secrets and variables → Actions):
 *   TELEGRAM_BOT_TOKEN — from @BotFather
 *   TELEGRAM_CHAT_ID   — public channel handle, e.g. `@bteup_cse_hub`
 *
 * Soft-fail contract: missing secrets exit 0 with a log note, so CI never
 * goes red before the channel is configured.
 */
import {
  EXAM_EVENTS,
  SITE_URL,
  getExamCountdown,
} from '../src/data/examEvents.ts';
// Leaf year files only — they import nothing but erased types. Do NOT import
// papers/index.ts here: its `./2023` value imports are extensionless (fine for
// Vite, rejected by native Node ESM resolution → the workflow would crash).
import { PAPERS_2023 } from '../src/data/papers/2023.ts';
import { PAPERS_2024 } from '../src/data/papers/2024.ts';

const PAPERS = [...PAPERS_2024, ...PAPERS_2023];
const PAPERS_VERIFIED_COUNT = PAPERS.filter((p) => p.verified).length;

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const eventName = process.env.GITHUB_EVENT_NAME ?? 'workflow_dispatch';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ── decide whether this run should post ──────────────────────────────── */

const countdown = getExamCountdown();
const isPush = eventName === 'push';

if (!token || !chatId) {
  console.log('[telegram-digest] secrets not set (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID) — skipping. Configure them once under repo Settings → Secrets → Actions.');
  process.exit(0);
}

// Daily digest only while an exam countdown is live (exam season).
// Push runs always post — the data changed, subscribers want to know.
if (!isPush && !countdown) {
  console.log('[telegram-digest] no active countdown and not a data push — nothing to post.');
  process.exit(0);
}

/* ── build the message (Telegram HTML) ────────────────────────────────── */

const KIND_ICON = {
  form: '📝',
  admit: '🎫',
  exam: '✍️',
  result: '📊',
  reval: '🔁',
};

const fmtRange = (e) => {
  const opts = { day: 'numeric', month: 'short' };
  const start = e.dateStart ? new Date(`${e.dateStart}T09:00:00+05:30`).toLocaleDateString('en-IN', opts) : null;
  const end = e.dateEnd ? new Date(`${e.dateEnd}T09:00:00+05:30`).toLocaleDateString('en-IN', opts) : null;
  if (!start) return 'to be announced';
  return end ? `${start} → ${end}` : start;
};

const lines = ['📅 <b>BTEUP exam desk update</b>', ''];

if (countdown) {
  const { event, days, ongoing } = countdown;
  const when = ongoing
    ? `happening now — ends in ${days} day${days === 1 ? '' : 's'}`
    : days === 0
      ? 'starts today'
      : `starts in ${days} day${days === 1 ? '' : 's'}`;
  lines.push(`⏳ <b>${esc(event.title)}</b> — ${when} (${esc(fmtRange(event))})`);
  if (event.link) lines.push(esc(event.link));
  lines.push('');
}

// The most relevant events: current/next cycle first, max three.
// Drop only CLOSED ranges (e.g. last month's form window); open-ended events
// (admit cards, TBA results) stay relevant until replaced in the data file.
const todayIso = new Date().toISOString().slice(0, 10);
const relevant = [...EXAM_EVENTS]
  .filter((e) => {
    const end = e.dateEnd;
    return !end || end >= todayIso;
  })
  .sort((a, b) => ((b.dateStart ?? '9999') < (a.dateStart ?? '9999') ? -1 : 1))
  .slice(0, 3);

for (const e of relevant) {
  const icon = KIND_ICON[e.kind] ?? '•';
  const link = e.link ? ` → ${e.link}` : '';
  lines.push(`${icon} <b>${esc(e.title)}</b> — ${esc(fmtRange(e))}${link}`);
}

lines.push('');
if (PAPERS.length > 0) {
  lines.push(
    `📚 <b>${PAPERS.length} previous-year papers</b> on the hub (${PAPERS_VERIFIED_COUNT} verified) → ${SITE_URL}/papers`,
  );
}
lines.push(`🔗 Full exam desk → ${SITE_URL}/exam-desk`);

const text = lines.filter((l) => l !== undefined).join('\n').slice(0, 4000);

/* ── post ─────────────────────────────────────────────────────────────── */

const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  }),
});

if (!res.ok) {
  console.error(`[telegram-digest] Telegram API ${res.status}: ${await res.text()}`);
  process.exit(1);
}

console.log(`[telegram-digest] posted to ${chatId} (${eventName}).`);
