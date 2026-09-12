import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  ExternalLink,
  Flag,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, PageHeader, ProgressBar, cx } from '../components/ui';

const TRACKS = [
  {
    id: 'cert-aiml',
    title: 'AI & ML (TATA track)',
    provider: 'Open Elective-2 · TATA',
    note: 'Aligns with the AI/ML elective offered in the 2026–27 scheme.',
    href: '/subject/ai-ml',
    internal: true,
  },
  {
    id: 'cert-nptel-swayam',
    title: 'NPTEL / SWAYAM courses',
    provider: 'swayam.gov.in',
    note: 'e.g. Programming in Python, Operating System Fundamentals, Cloud Computing.',
    href: 'https://swayam.gov.in',
    internal: false,
  },
  {
    id: 'cert-neat',
    title: 'AICTE NEAT catalogue',
    provider: 'neat.aicte-india.org',
    note: 'AICTE’s own platform of industry-certification courses.',
    href: 'https://neat.aicte-india.org',
    internal: false,
  },
  {
    id: 'cert-cisco',
    title: 'Cisco Networking Academy',
    provider: 'netacad.com',
    note: 'Networking Essentials directly supports the Computer Network syllabus.',
    href: 'https://www.netacad.com',
    internal: false,
  },
  {
    id: 'cert-mslearn',
    title: 'Microsoft Learn',
    provider: 'learn.microsoft.com',
    note: 'Free learning paths with completion certificates.',
    href: 'https://learn.microsoft.com',
    internal: false,
  },
  {
    id: 'cert-google',
    title: 'Google Skill Shop',
    provider: 'skills.google.com',
    note: 'Digital skills tracks with shareable certificates.',
    href: 'https://skills.google.com',
    internal: false,
  },
  {
    id: 'cert-cyber',
    title: 'Cybersecurity fundamentals',
    provider: 'Search based',
    note: 'Free starters from TryHackMe or Cisco — a strong portfolio add-on.',
    href: 'https://tryhackme.com',
    internal: false,
  },
];

export default function Certification() {
  const certifications = useLearningStore((s) => s.certifications);
  const toggleCertification = useLearningStore((s) => s.toggleCertification);
  const done = TRACKS.filter((t) => certifications.includes(t.id)).length;

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Semester 4"
        title="Advanced Skill Development"
        subtitle="Certification tracker for the Open Elective-1 / skill-development requirement."
      />

      <Card className="border-accent/30 bg-accent/5 p-5">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent dark:bg-accent/20">
            <Flag className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
              Official BTEUP requirement
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              The 2026–27 scheme lists Advanced Skill Development as Open Elective-1 /{' '}
              <strong>Advance Skill Development Certification</strong> in Semester 4 — a minimum of
              20 hours of recognised skill certification.
            </p>
            <p className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-ink-400">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              A certificate from an arbitrary online course does not automatically satisfy BTEUP
              requirements — verify the recognised list with your institute before paying for
              anything.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <BadgeCheck className="h-5 w-5 text-mint-500" />
            Suggested certification tracks
          </h2>
          <Badge tone="ink">
            {done}/{TRACKS.length} marked
          </Badge>
        </div>
        <ProgressBar value={done} max={TRACKS.length} className="mb-4" />
        <div className="space-y-2.5">
          {TRACKS.map((track) => {
            const isDone = certifications.includes(track.id);
            return (
              <Card key={track.id} className={cx('transition', isDone && 'opacity-80')}>
                <div
                  className={cx(
                    'flex flex-wrap items-center gap-3 rounded-2xl p-4',
                    isDone && 'bg-mint-500/5',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleCertification(track.id)}
                    className={cx(
                      'grid h-5 w-5 shrink-0 place-items-center rounded-md border transition',
                      isDone
                        ? 'border-mint-500 bg-mint-500 text-white'
                        : 'border-ink-300 dark:border-ink-600',
                    )}
                    aria-label={isDone ? 'Mark not done' : 'Mark certified'}
                  >
                    {isDone ? <BadgeCheck className="h-3.5 w-3.5" /> : null}
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className={cx('text-sm font-semibold', isDone ? 'text-mint-600 line-through dark:text-mint-400' : 'text-ink-900 dark:text-ink-100')}>
                      {track.title}
                    </p>
                    <p className="text-xs text-ink-400">{track.provider}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                      {track.note}
                    </p>
                  </div>
                  {track.internal ? (
                    <Link
                      to={track.href}
                      className="inline-flex items-center gap-1 rounded-xl border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
                    >
                      <GraduationCap className="h-3.5 w-3.5" />
                      Open track
                    </Link>
                  ) : (
                    <a
                      href={track.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
                    >
                      Visit platform
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="p-5">
        <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          Keep your certificate PDF safe locally — you will usually need to show it to your
          institute to claim the Advanced Skill Development requirement. Mark a track{' '}
          <Badge tone="mint">certified</Badge> once you have the document in hand.
        </p>
      </Card>
    </section>
  );
}