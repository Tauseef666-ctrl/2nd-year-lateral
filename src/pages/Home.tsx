import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BookOpen,
  Clapperboard,
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
import { Badge, Card, cx } from '../components/ui';

function Stat({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <Card className="flex items-center gap-3 px-4 py-3.5">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
        {icon}
      </div>
      <div className="leading-none">
        <p className="font-display text-lg font-bold text-ink-950 dark:text-white">{value}</p>
        <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{label}</p>
      </div>
    </Card>
  );
}

function SemesterCard({ semester }: { semester: Semester }) {
  const subjectIds = semester.subjectIds;
  const topics = FLAT_TOPICS.filter((t) => subjectIds.includes(t.subjectId));

  return (
    <Card className="group relative overflow-hidden p-6 transition hover:shadow-cardHover">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
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
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition group-hover:gap-2.5 dark:text-accent-300"
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
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-ink-100/80 bg-white/60 px-6 py-8 backdrop-blur-2xl dark:border-ink-800/80 dark:bg-ink-900/50 sm:px-8">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-mint-400/10 blur-3xl" />
        <div className="relative animate-fade-up">
          <Badge className="mb-4">NEP-2020 · Lateral Entry · Foundation + Sem 3–6</Badge>
          <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight text-ink-950 dark:text-white sm:text-4xl">
            Your BTEUP CSE study{' '}
            <span className="bg-gradient-to-r from-accent to-mint-400 bg-clip-text text-transparent">
              library.
            </span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Built by a fellow 2nd-year student for the lateral-entry batch: every official topic
            lands with a curated YouTube one-shot, full-course playlists and chapter notes — plus
            practical labs and a college assignments hub. Study with intent, not fuss.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/subjects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-accent-600"
            >
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
            <a
              href="https://github.com/Tauseef666-ctrl/2nd-year-lateral"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-ink-300 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-ink-600 dark:hover:text-white"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <Stat label="Subjects" value={String(ALL_SUBJECTS.length)} icon={<BookOpen className="h-4 w-4" />} />
        <Stat label="Topics" value={String(TOTAL_TOPICS)} icon={<ListChecks className="h-4 w-4" />} />
        <Stat label="Labs" value={String(TOTAL_LABS)} icon={<FlaskConical className="h-4 w-4" />} />
        <Stat label="Chapter notes" value={String(TOTAL_CHAPTER_NOTES)} icon={<NotebookPen className="h-4 w-4" />} />
        <Stat label="Topics with study notes" value={String(notesCount)} icon={<FileText className="h-4 w-4" />} />
      </div>

      <div className="rounded-2xl border border-ink-100/80 bg-white/50 px-6 py-5 backdrop-blur dark:border-ink-800/80 dark:bg-ink-900/40">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-400 dark:text-ink-500">
          How it works
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Pick your semester',
              body: 'Start from your current semester or jump straight into any subject.',
            },
            {
              step: '02',
              title: 'Study with one-shots & playlists',
              body: 'Curated YouTube one-shots for rapid revision plus full playlists for deeper study.',
            },
            {
              step: '03',
              title: 'Practice labs & notes',
              body: 'Follow step-by-step practicals, then reinforce with handwritten chapter notes.',
            },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-3">
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
          ))}
        </div>
      </div>

      <Card className="overflow-hidden border-accent/25">
        <div className="border-b border-ink-100 bg-gradient-to-r from-accent/10 to-mint-400/10 px-6 py-3 dark:border-ink-800">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-300">
            <Sparkles className="h-3.5 w-3.5" />
            Jump right in
          </p>
        </div>
        <div className="grid gap-5 p-6 sm:grid-cols-3">
          {SEMESTERS.map((sem) => (
            <Link key={sem.id} to={`/semester/${sem.id}`} className="group block">
              <p className="font-display text-sm font-semibold text-ink-400">
                Semester {sem.id}
              </p>
              <h3 className="mt-0.5 font-display text-base font-bold text-ink-950 dark:text-white">
                {sem.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                {sem.tagline}
              </p>
              <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-accent transition group-hover:gap-2 dark:text-accent-300">
                Explore
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </Card>

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
            { to: '/college-assignments', label: 'Assignments', icon: <GraduationCap className="h-4 w-4" /> },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3.5 py-3 text-sm font-semibold text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white dark:bg-accent/15">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

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
        <div className={cx('grid gap-4 lg:grid-cols-2')}>
          {SEMESTERS.map((sem) => (
            <SemesterCard key={sem.id} semester={sem} />
          ))}
        </div>
      </div>
    </section>
  );
}