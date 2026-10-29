import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Clapperboard,
  Download,
  FileText,
  FlaskConical,
  GraduationCap,
  ListChecks,
  ListVideo,
  NotebookPen,
  Play,
  Search,
  Sparkles,
  Zap,
} from 'lucide-react';
import {
  ALL_SUBJECTS,
  FLAT_TOPICS,
  SEMESTERS,
  TOTAL_LABS,
  TOTAL_TOPICS,
  getSubject,
} from '../data/curriculum';
import { TOTAL_CHAPTER_NOTES } from '../data/chapterNotes';
import type { Semester } from '../types';
import { Badge, CountUp, Reveal, REPO_URL, Card, cx } from '../components/ui';

const TRUSTED_CHANNELS = [
  'Gate Smashers',
  'CodeWithHarry',
  'Neso Academy',
  'KnowledgeGATE',
  'CampusX',
  'Krish Naik',
  'Engineering Funda',
  "Tikle's Academy",
];

function Stat({
  label,
  value,
  icon,
  delay,
}: {
  label: string;
  value: number;
  icon: ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <Card className="group flex h-full items-center gap-3 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-cardHover">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white dark:bg-accent/15 dark:text-accent-300">
          {icon}
        </div>
        <div className="leading-none">
          <p className="font-display text-lg font-bold text-ink-950 dark:text-white">
            <CountUp value={value} />
          </p>
          <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{label}</p>
        </div>
      </Card>
    </Reveal>
  );
}

function SemesterCard({ semester }: { semester: Semester }) {
  const subjectIds = semester.subjectIds;
  const topics = FLAT_TOPICS.filter((t) => subjectIds.includes(t.subjectId));

  return (
    <Card className="group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition duration-500 group-hover:bg-accent/25" />
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-ink-400">Semester {semester.id}</p>
        <Badge tone="ink">{topics.length} topics</Badge>
      </div>
      <h3 className="mt-1 font-display text-xl font-bold text-ink-950 dark:text-white">
        {semester.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
        {semester.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {subjectIds.map((sid) => {
          const s = getSubject(sid);
          if (!s) return null;
          return (
            <Link key={sid} to={`/subject/${sid}`}>
              <Badge tone="ink" className="transition hover:bg-accent hover:text-white">
                {s.shortName}
              </Badge>
            </Link>
          );
        })}
      </div>

      <Link
        to={`/semester/${semester.id}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5 dark:text-accent-300"
      >
        Open semester
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}

export default function Home() {
  const notesCount = FLAT_TOPICS.filter((t) => t.notes && t.notes.length > 0).length;

  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-ink-100/80 bg-white/60 px-6 py-10 backdrop-blur-2xl dark:border-ink-800/80 dark:bg-ink-900/50 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accent/15 blob" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 h-60 w-60 rounded-full bg-mint-400/10 blob blob-b" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 rounded-full bg-accent-200/20 blob" style={{ animationDelay: '-6s' }} />

        <div className="relative">
          <Reveal>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>NEP-2020 · Lateral Entry · Foundation + Sem 3–6</Badge>
              <Badge tone="mint">
                <BadgeCheck className="h-3 w-3" />
                Link-audited {new Date().getFullYear()}
              </Badge>
            </div>
            <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-ink-950 dark:text-white sm:text-4xl lg:text-5xl">
              Your BTEUP CSE study{' '}
              <span className="bg-gradient-to-r from-accent via-accent to-mint-400 bg-clip-text text-transparent">
                library.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 dark:text-ink-400 sm:text-[15px]">
              The official lateral-entry syllabus (Foundation + Semesters 3–6) mapped to curated
              YouTube one-shots, full playlists, embedded click-to-play videos, chapter-wise
              notes <strong className="font-semibold text-ink-700 dark:text-ink-200">with PDF download for every chapter</strong>,
              practical labs and MCQ quizzes. Built for the 2026–2027 batch by a fellow student —
              so you study with intent, not fuss.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/subjects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-accent-600"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]" />
                <Play className="h-4 w-4" />
                Browse subjects
              </Link>
              <Link
                to="/one-shots"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-accent dark:hover:text-accent-300"
              >
                <Clapperboard className="h-4 w-4" />
                Watch one-shots
              </Link>
              <Link
                to="/notes"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-accent dark:hover:text-accent-300"
              >
                <Download className="h-4 w-4" />
                Chapter notes → PDF
              </Link>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-ink-300 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-ink-600 dark:hover:text-white"
              >
                Star on GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold text-ink-400">
              <span className="uppercase tracking-[0.16em]">Trusted by lecturers</span>
              {TRUSTED_CHANNELS.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-ink-100 bg-white/70 px-2.5 py-0.5 transition hover:border-accent hover:text-accent dark:border-ink-800 dark:bg-ink-900/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <Stat label="Subjects" value={ALL_SUBJECTS.length} icon={<BookOpen className="h-4 w-4" />} delay={40} />
        <Stat label="Topics" value={TOTAL_TOPICS} icon={<ListChecks className="h-4 w-4" />} delay={90} />
        <Stat label="Labs" value={TOTAL_LABS} icon={<FlaskConical className="h-4 w-4" />} delay={140} />
        <Stat
          label="Chapter notes"
          value={TOTAL_CHAPTER_NOTES}
          icon={<NotebookPen className="h-4 w-4" />}
          delay={190}
        />
        <Stat
          label="Topics with study notes"
          value={notesCount}
          icon={<FileText className="h-4 w-4" />}
          delay={240}
        />
      </div>

      {/* How it works */}
      <Reveal>
        <Card className="rounded-2xl border border-ink-100/80 bg-white/50 px-6 py-6 backdrop-blur dark:border-ink-800/80 dark:bg-ink-900/40">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-400 dark:text-ink-500">
            How it works
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Pick your semester',
                body: 'Start at your current semester or jump straight into any subject from the sidebar.',
              },
              {
                step: '02',
                title: 'Watch & click to play',
                body: 'Tap any thumbnail — videos play right on the page, playlists open on YouTube.',
              },
              {
                step: '03',
                title: 'Reinforce with notes & PDF',
                body: 'Read chapter notes, tick them as read, then export to PDF for offline revision.',
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-[11px] font-bold text-accent dark:bg-accent/15 dark:text-accent-300">
                    <Zap className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                      {s.step}
                    </p>
                    <h3 className="mt-0.5 font-display text-sm font-bold text-ink-950 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* Curation policy */}
      <Reveal>
        <Card className="border-accent/25 overflow-hidden">
          <div className="border-b border-ink-100 bg-gradient-to-r from-accent/10 to-mint-400/10 px-6 py-3 dark:border-ink-800">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-300">
              <Sparkles className="h-3.5 w-3.5" />
              Main subjects only
            </p>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              The scheme offers one elective per slot — the hub curates the strongest pick for each
              and removes the rest of the noise, so every path you see here is exam-tested, the
              official BTEUP way. All core subjects of every semester are kept.
            </p>
            <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
              Removed per official alternate options: FOSS · Industrial Robotics · Project
              Management · Product Design · Engineering Economics · Multimedia Tech · Advanced
              Networks · Data Science &amp; ML. Swapping a pick back in is a one-line change — see
              README → Curation policy.
            </p>
          </div>

          <div className="border-t bg-ink-50/60 p-6 dark:border-ink-800 dark:bg-ink-800/30">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-300">
              Jump right in
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {SEMESTERS.map((sem, i) => (
                <Reveal key={sem.id} delay={i * 80}>
                  <Link to={`/semester/${sem.id}`} className="group block">
                    <p className="font-display text-sm font-semibold text-ink-400">
                      Semester {sem.id}
                    </p>
                    <h3 className="mt-0.5 font-display text-base font-bold text-ink-950 dark:text-white">
                      {sem.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                      {sem.tagline}
                    </p>
                    <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-all group-hover:gap-2 dark:text-accent-300">
                      Explore
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Quick access */}
      <div>
        <h2 className="mb-4 font-display text-xl font-bold text-ink-950 dark:text-white">
          Quick access
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { to: '/one-shots', label: 'One-Shots', icon: <Clapperboard className="h-4 w-4" /> },
            { to: '/playlists', label: 'Playlists', icon: <ListVideo className="h-4 w-4" /> },
            { to: '/notes', label: 'Notes', icon: <NotebookPen className="h-4 w-4" /> },
            { to: '/practicals', label: 'Practicals', icon: <FlaskConical className="h-4 w-4" /> },
            { to: '/subjects', label: 'Subjects', icon: <BookOpen className="h-4 w-4" /> },
            {
              to: '/college-assignments',
              label: 'Assignments',
              icon: <GraduationCap className="h-4 w-4" />,
            },
          ].map((item, i) => (
            <Reveal key={item.to} delay={i * 45}>
              <Link
                to={item.to}
                className={cx(
                  'group flex h-full items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3.5 py-3 text-sm font-semibold text-ink-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200',
                )}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white dark:bg-accent/15">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Semesters grid */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-ink-950 dark:text-white">Semesters</h2>
          <Link
            to="/search"
            className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-600 dark:text-accent-300"
          >
            <Search className="h-3.5 w-3.5" />
            Search
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {SEMESTERS.map((sem, i) => (
            <Reveal key={sem.id} delay={i * 70}>
              <SemesterCard semester={sem} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}