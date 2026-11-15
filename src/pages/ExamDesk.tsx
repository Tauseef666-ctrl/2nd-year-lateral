import { useMemo } from 'react';
import {
  BadgeCheck,
  CalendarClock,
  ClipboardList,
  ExternalLink,
  FileText,
  Radio,
  RotateCcw,
  Send,
  Trophy,
} from 'lucide-react';
import {
  EXAM_EVENTS,
  SITE_URL,
  getExamCountdown,
} from '../data/examEvents';
import { Badge, Card, PageHeader, cx } from '../components/ui';
import type { ExamEvent } from '../types';

/* Set the Telegram invite URL once the channel is live (TODO 2.4).
 * Empty string = the CTA renders as a "setting up" note instead of a dead link. */
const TELEGRAM_URL = '';

const KIND_META: Record<ExamEvent['kind'], { label: string; icon: typeof CalendarClock }> = {
  exam: { label: 'Exam', icon: CalendarClock },
  admit: { label: 'Admit card', icon: BadgeCheck },
  result: { label: 'Result', icon: Trophy },
  reval: { label: 'Revaluation', icon: RotateCcw },
  form: { label: 'Exam form', icon: ClipboardList },
};

function fmtDate(iso?: string) {
  if (!iso) return 'TBA';
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function eventStatus(e: ExamEvent, today: Date) {
  if (!e.dateStart) return { label: 'To be announced', tone: 'ink' as const };
  const start = new Date(`${e.dateStart}T00:00:00`);
  const end = new Date(`${e.dateEnd ?? e.dateStart}T23:59:59`);
  if (today < start) {
    const d = Math.ceil((start.getTime() - today.getTime()) / 86_400_000);
    return {
      label: d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : `In ${d} days`,
      tone: 'mint' as const,
    };
  }
  if (today <= end) return { label: 'Ongoing', tone: 'mint' as const };
  return {
    label: e.kind === 'form' ? 'Closed' : 'Done',
    tone: 'ink' as const,
  };
}

function EventCard({ event, today }: { event: ExamEvent; today: Date }) {
  const status = eventStatus(event, today);
  const meta = KIND_META[event.kind];
  const Icon = meta.icon;

  return (
    <Card className="p-4">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-ink-900 dark:text-ink-100">{event.title}</p>
            <Badge tone={status.tone}>{status.label}</Badge>
            <Badge tone="ink">{meta.label}</Badge>
          </div>
          <p className="mt-1 text-xs font-medium text-ink-500 dark:text-ink-400">
            {event.dateEnd
              ? `${fmtDate(event.dateStart)} → ${fmtDate(event.dateEnd)}`
              : fmtDate(event.dateStart)}
          </p>
          {event.notes ? (
            <p className="mt-1.5 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
              {event.notes}
            </p>
          ) : null}
          {event.attachments?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {event.attachments.map((a) => (
                <a
                  key={a.url}
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-ink-200 px-2.5 py-1 text-[11px] font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
                >
                  <FileText className="h-3 w-3" />
                  {a.label}
                </a>
              ))}
            </div>
          ) : null}
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 rounded-xl bg-accent px-3.5 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
            >
              Official portal
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function Walkthrough({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-2.5">
      {steps.map((step, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-[11px] font-bold text-accent dark:bg-accent/15 dark:text-accent-300">
            {i + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}

export default function ExamDesk() {
  const today = useMemo(() => new Date(), []);
  const countdown = useMemo(() => getExamCountdown(today), [today]);
  const events = useMemo(
    () =>
      [...EXAM_EVENTS].sort((a, b) => ((a.dateStart ?? '9999') > (b.dateStart ?? '9999') ? -1 : 1)),
    [ ],
  );

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Exam desk"
        title="Exams, admit cards & results"
        subtitle="The current BTEUP exam cycle in one place: dates, official links and walkthroughs. We never host results or admit cards — every button goes to the official portal (ADR-4: your data stays yours)."
      />

      {/* Countdown hero */}
      {countdown ? (
        <Card className="border-accent/30 bg-gradient-to-r from-accent/10 to-mint-400/10 p-6 dark:border-accent-300/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent dark:text-accent-300">
                {countdown.ongoing ? 'Happening now' : 'Next up'}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-ink-950 dark:text-white">
                {countdown.event.title}
              </p>
              <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">
                {countdown.event.dateEnd
                  ? `${fmtDate(countdown.event.dateStart)} → ${fmtDate(countdown.event.dateEnd)}`
                  : fmtDate(countdown.event.dateStart)}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-4xl font-bold text-accent dark:text-accent-300">
                {countdown.ongoing
                  ? countdown.days === 0
                    ? 'Final day'
                    : `${countdown.days}d`
                  : countdown.days === 0
                    ? 'Today'
                    : countdown.days === 1
                      ? '1 day'
                      : `${countdown.days} days`}
              </p>
              <p className="text-xs font-medium text-ink-400 dark:text-ink-500">
                {countdown.ongoing ? 'left in this window' : 'to go'}
              </p>
            </div>
          </div>
        </Card>
      ) : null}

      {/* Exam calendar */}
      <div className="space-y-3">
        <h2 className="font-display text-xl font-bold text-ink-950 dark:text-white">
          Exam calendar
        </h2>
        <div className="grid gap-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} today={today} />
          ))}
        </div>
        <p className="text-[11px] leading-relaxed text-ink-400 dark:text-ink-500">
          Dates come from the official BTEUP date sheets (linked above). BTEUP occasionally
          shifts papers last-minute — always cross-check with the PDF before the exam day.
        </p>
      </div>

      {/* Admit card walkthrough */}
      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <BadgeCheck className="h-5 w-5 text-accent" />
            Download your admit card
          </h2>
          <Badge tone="mint">Released · odd-sem 2026</Badge>
        </div>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <Walkthrough
            steps={[
              'Open the official student login (button on the right).',
              'Log in with your enrollment number and password — the same credentials you used for the exam form.',
              'Find the admit-card download link for the odd semester / special back exam.',
              'Open the PDF and check your name, roll number, subject codes and exam centre immediately — report errors to your college the same day.',
              'Print 2 copies. Carry one to every paper, plus your college ID.',
            ]}
          />
          <div className="space-y-3">
            <a
              href="https://bteup.ac.in/Eseva/Outerpages/StudentLogin.aspx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
            >
              <ExternalLink className="h-4 w-4" />
              Official student login
            </a>
            <div className="rounded-xl border border-ink-100 bg-ink-50/60 p-4 text-xs leading-relaxed text-ink-500 dark:border-ink-800 dark:bg-ink-800/30 dark:text-ink-400">
              <p className="font-semibold text-ink-700 dark:text-ink-200">On the admit card:</p>
              <p className="mt-1">
                Name · roll number · exam centre &amp; address · subject codes with dates · photo &amp;
                signature · reporting time. Lost password? Your college's exam cell can reset it.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Results + revaluation */}
      <div className="grid gap-3 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <Trophy className="h-5 w-5 text-accent" />
            Checking results
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Odd-sem results (Nov–Dec 2026 exams) are expected Jan–Feb 2027. The direct portal
            link lands here the day it goes live — meanwhile the board's news page is where it
            surfaces first. You only need your <strong className="text-ink-700 dark:text-ink-200">enrollment number</strong> — no login.
          </p>
          <Walkthrough
            steps={[
              'Wait for the "result declared" event in the calendar above (or the Telegram channel).',
              'Open the official result portal — link will appear on this page.',
              'Enter your enrollment number exactly as printed on your admit card.',
              'Download and save the PDF marksheet — the portal link goes quiet after a few weeks.',
            ]}
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://bteup.ac.in/webapp/AllNews.aspx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
            >
              BTEUP news page
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://result.bteexam.com/EVEN/main/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
            >
              Result portal (even-sem example)
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <RotateCcw className="h-5 w-5 text-accent" />
            Revaluation &amp; scrutiny
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Unhappy with a mark? Revaluation (re-checking) and scrutiny (photocopy of the
            answer sheet) open for a <strong className="text-ink-700 dark:text-ink-200">short window</strong> right after results — usually a few
            days. Applications go through your college with a per-subject fee, so decide fast
            and talk to the exam cell.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
            <li>· Window opens shortly after the result notice — dates land in the calendar above.</li>
            <li>· Keep the fee ready per subject; your college forwards the form to BTEUP.</li>
            <li>· Reval results surface on the same result portal later in the cycle.</li>
          </ul>
        </Card>
      </div>

      {/* Get notified */}
      <Card className="p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
          <Send className="h-5 w-5 text-accent" />
          Get notified
        </h2>
        {TELEGRAM_URL ? (
          <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Every admit-card release, date-sheet change and result declaration gets pinned in
            the Telegram channel — usually within the hour. No spam, exam season only.
          </p>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            A Telegram channel for instant exam-cycle alerts is being set up — the invite link
            lands here. Until then, this page and the feeds below stay current.
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          {TELEGRAM_URL ? (
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
            >
              <Send className="h-4 w-4" />
              Join the Telegram channel
            </a>
          ) : null}
          <a
            href={`${SITE_URL}/feed.xml`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
          >
            <Radio className="h-3 w-3" />
            RSS feed
          </a>
          <a
            href={`${SITE_URL}/updates.json`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
          >
            <FileText className="h-3 w-3" />
            JSON updates
          </a>
        </div>
      </Card>

      <p className={cx('text-[11px] leading-relaxed text-ink-400 dark:text-ink-500')}>
        Exam desk follows the official BTEUP portals only — links out, no proxying, no hosted
        results (that's how this site stays safe and up). Something out of date? Open an issue.
      </p>
    </section>
  );
}
