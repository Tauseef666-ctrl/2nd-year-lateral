import type { ExamEvent } from '../types';

export const SITE_URL = 'https://2nd-year-lateral.vercel.app';

/**
 * Exam-desk events (TODO 2.2). Single source of truth — also consumed by
 * `scripts/build-updates.mjs` (RSS/JSON feed) via Node type-stripping, so
 * keep this file erasable-TS only (type imports, no runtime deps).
 *
 * Sourcing rule (ADR-4): every `link` points at an official BTEUP portal page
 * or document that was verified live (HTTP 200) when it was added. Results and
 * admit cards are NEVER hosted or proxied here — deep links out only.
 *
 * Current cycle: odd semester + special back, Nov–Dec 2026
 * (source: bteup.ac.in date sheets, verified 2026-11-15).
 */
export const EXAM_EVENTS: ExamEvent[] = [
  {
    id: 'odd-2026-form',
    kind: 'form',
    title: 'Odd-sem & special-back exam form',
    dateStart: '2026-10-24',
    dateEnd: '2026-10-31',
    notes:
      'Closed on Oct 31, 2026. Missed it? Contact your college exam cell immediately — late submission goes through the college, not this site.',
  },
  {
    id: 'odd-2026-admit',
    kind: 'admit',
    title: 'Odd-sem & special-back admit cards',
    dateStart: '2026-11-12',
    link: 'https://bteup.ac.in/Eseva/Outerpages/StudentLogin.aspx',
    notes:
      'Released Nov 12, 2026. Log in with your enrollment number and password, download the PDF and print 2 copies. Check your name, roll number and exam centre the same day — errors take days to fix.',
  },
  {
    id: 'odd-2026-exam',
    kind: 'exam',
    title: 'Odd-semester & special-back exams',
    dateStart: '2026-11-17',
    dateEnd: '2026-12-05',
    link: 'https://bteup.ac.in/PDFFILES/NEWS_639300327915482491.pdf',
    attachments: [
      { label: 'Odd-sem date sheet (PDF)', url: 'https://bteup.ac.in/PDFFILES/NEWS_639300327915482491.pdf' },
      { label: 'Special back date sheet (PDF)', url: 'https://bteup.ac.in/PDFFILES/NEWS_639300329462542668.pdf' },
    ],
    notes:
      'Nov 17 – Dec 5, 2026 for diploma odd semesters and special back papers. Reach the centre 30 minutes early; carry the printed admit card and college ID.',
  },
  {
    id: 'odd-2026-result',
    kind: 'result',
    title: 'Odd-semester & special-back results',
    link: 'https://bteup.ac.in/webapp/AllNews.aspx',
    notes:
      'To be announced — BTEUP usually declares odd-sem results 4–6 weeks after exams end (expect Jan–Feb 2027). We add the direct portal link here the day it goes live; this news page is where it will surface first.',
  },
  {
    id: 'odd-2026-reval',
    kind: 'reval',
    title: 'Revaluation / scrutiny window',
    notes:
      'Opens shortly after results, via your college with a per-subject fee. Decide within days of the marksheet — the window is short. Link will be added when the notice is out.',
  },
];

/** The single most relevant upcoming/ongoing event, for the Home banner. */
export function getExamCountdown(now = new Date()): {
  event: ExamEvent;
  days: number; // negative while the event is ongoing, relative to dateEnd
  ongoing: boolean;
} | null {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const upcoming = [...EXAM_EVENTS]
    .filter((e) => e.dateStart)
    .sort((a, b) => (a.dateStart! < b.dateStart! ? -1 : 1))
    .find((e) => {
      const end = new Date(e.dateEnd ?? e.dateStart!);
      end.setHours(23, 59, 59, 999);
      return end >= today;
    });
  if (!upcoming) return null;
  const start = new Date(upcoming.dateStart!);
  const end = new Date(upcoming.dateEnd ?? upcoming.dateStart!);
  end.setHours(23, 59, 59, 999);
  const daysToStart = Math.round((start.getTime() - today.getTime()) / 86_400_000);
  const daysToEnd = Math.round((end.getTime() - today.getTime()) / 86_400_000);
  const ongoing = daysToStart <= 0 && daysToEnd >= 0;
  return { event: upcoming, days: ongoing ? daysToEnd : daysToStart, ongoing };
}
