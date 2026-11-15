/**
 * TODO 2.6 — RSS-lite: generates public/feed.xml (RSS 2.0) and
 * public/updates.json from the single-source exam events data.
 *
 * Runs on `npm run build` via the prebuild hook. Reads the TypeScript data
 * directly (Node ≥23.6 strips erasable types natively; examEvents.ts only
 * uses `import type`, which is erased before execution).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { EXAM_EVENTS, SITE_URL } from '../src/data/examEvents.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const fmtDate = (iso) => (iso ? new Date(`${iso}T09:00:00+05:30`).toUTCString() : '');

/* ── updates.json ─────────────────────────────────────────────────────── */
const json = {
  generator: 'bteup-cse-hub exam desk',
  site: SITE_URL,
  updated: new Date().toISOString(),
  events: EXAM_EVENTS.map((e) => ({
    id: e.id,
    title: e.title,
    kind: e.kind,
    dateStart: e.dateStart,
    dateEnd: e.dateEnd,
    link: e.link,
    notes: e.notes,
    attachments: e.attachments,
  })),
};
writeFileSync(join(root, 'public', 'updates.json'), `${JSON.stringify(json, null, 2)}\n`);

/* ── feed.xml (RSS 2.0) ───────────────────────────────────────────────── */
const items = [...EXAM_EVENTS]
  .sort((a, b) => ((b.dateStart ?? '') > (a.dateStart ?? '') ? 1 : -1))
  .map((e) => {
    const when = e.dateEnd
      ? `${e.dateStart ?? 'TBA'} → ${e.dateEnd}`
      : (e.dateStart ?? 'to be announced');
    const desc = [e.notes, `Window: ${when}`, e.link ? `Official link: ${e.link}` : '']
      .filter(Boolean)
      .map(esc)
      .join(' — ');
    const pubDate = e.dateStart ? `<pubDate>${fmtDate(e.dateStart)}</pubDate>` : '';
    return [
      '    <item>',
      `      <title>${esc(e.title)}</title>`,
      `      <link>${esc(e.link ?? `${SITE_URL}/exam-desk`)}</link>`,
      `      <guid isPermaLink="false">${esc(e.id)}</guid>`,
      pubDate,
      `      <description>${desc}</description>`,
      '    </item>',
    ]
      .filter(Boolean)
      .join('\n');
  })
  .join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>BTEUP CSE Hub — exam desk updates</title>
    <link>${SITE_URL}/exam-desk</link>
    <description>Exam calendar, admit cards, results and revaluation windows for BTEUP diploma CSE (lateral entry). Links go to the official portal only.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
writeFileSync(join(root, 'public', 'feed.xml'), feed);

console.log(`[build-updates] wrote public/updates.json and public/feed.xml (${EXAM_EVENTS.length} events)`);
