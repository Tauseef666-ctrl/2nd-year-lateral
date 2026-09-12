import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Hammer,
  ListChecks,
  ListVideo,
  Map,
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
  getSubjectTopics,
  getTopic,
} from '../data/curriculum';
import type { Semester } from '../types';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, ProgressBar, cx } from '../components/ui';

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
  const completed = useLearningStore((s) => s.completed);
  const subjectIds = semester.subjectIds;
  const topics = FLAT_TOPICS.filter((t) => subjectIds.includes(t.subjectId));
  const done = topics.filter((t) => completed.includes(t.id)).length;
  const pct = topics.length === 0 ? 0 : Math.round((done / topics.length) * 100);

  return (
    <Card className="group relative overflow-hidden p-6 transition hover:shadow-cardHover">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-ink-400">Semester {semester.id}</p>
        <Badge tone={pct === 100 ? 'mint' : 'ink'}>{pct}%</Badge>
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
              <Badge
                tone={completed.length ? 'accent' : 'ink'}
                className="transition hover:bg-accent hover:text-white"
              >
                {s.shortName}
              </Badge>
            </Link>
          );
        })}
      </div>

      <div className="mt-5">
        <ProgressBar value={done} max={topics.length} />
        <p className="mt-2 text-xs text-ink-400">
          {done} of {topics.length} topics completed
        </p>
      </div>
    </Card>
  );
}

export default function Home() {
  const completed = useLearningStore((s) => s.completed);
  const last = useLearningStore((s) => s.last);

  const overallPct =
    TOTAL_TOPICS === 0 ? 0 : Math.round((completed.length / TOTAL_TOPICS) * 100);

  const contSubject = last ? getSubject(last.subjectId) : undefined;
  const contTopic = last ? getTopic(last.topicId) : undefined;
  const contSubjectTopics = contSubject ? getSubjectTopics(contSubject.id) : [];
  const contDone = contSubject
    ? contSubjectTopics.filter((t) => completed.includes(t.id)).length
    : 0;

  const pick = FLAT_TOPICS.find((t) => !completed.includes(t.id));
  const pickSubject = pick ? getSubject(pick.subjectId) : undefined;

  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white px-6 py-8 dark:border-ink-800 dark:bg-ink-900 sm:px-8">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-mint-400/10 blur-3xl" />
        <div className="relative animate-fade-up">
          <Badge className="mb-4">NEP-2020 · Lateral Entry · Sem 3 &amp; 4</Badge>
          <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight text-ink-950 dark:text-white sm:text-4xl">
            Master your BTEUP CSE syllabus,{' '}
            <span className="bg-gradient-to-r from-accent to-mint-400 bg-clip-text text-transparent">
              one topic at a time.
            </span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Every official topic with curated YouTube resources — deep lectures, one-shots,
            playlists and exam revision — plus practical labs, progress tracking and bookmarks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/semester/3"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-accent-600"
            >
              <Play className="h-4 w-4" />
              Start Semester 3
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-accent dark:hover:text-accent-300"
            >
              <Map className="h-4 w-4" />
              View roadmap
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Subjects" value={String(ALL_SUBJECTS.length)} icon={<BookOpen className="h-4 w-4" />} />
        <Stat label="Topics" value={String(TOTAL_TOPICS)} icon={<ListChecks className="h-4 w-4" />} />
        <Stat label="Labs" value={String(TOTAL_LABS)} icon={<FlaskConical className="h-4 w-4" />} />
        <Stat label="Completed" value={`${overallPct}%`} icon={<CheckCircle2 className="h-4 w-4" />} />
      </div>

      {contSubject && contTopic && last ? (
        <Card className="overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-mint-400 text-white shadow-glow">
                <Play className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-300">
                  {contSubject.semester === 3 ? 'Semester 3' : 'Semester 4'} · {contSubject.shortName}
                </p>
                <h3 className="mt-0.5 font-display text-lg font-bold text-ink-950 dark:text-white">
                  {contTopic.title}
                </h3>
              </div>
            </div>
            <Link
              to={`/topic/${last.topicId}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent-600"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="px-6 pb-6">
            <ProgressBar value={contDone} max={contSubjectTopics.length} />
            <p className="mt-1.5 text-xs text-ink-400">
              {contDone} of {contSubjectTopics.length} topics done in {contSubject.shortName}
            </p>
          </div>
        </Card>
      ) : (
        <Card className="flex items-center gap-4 p-6">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold text-ink-950 dark:text-white">
              Pick your first topic
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              Your last studied topic will appear here so you can continue seamlessly.
            </p>
          </div>
          <Link
            to="/subject/os"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-600"
          >
            Start
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      )}

      {pick ? (
        <Card className="overflow-hidden">
          <div className="border-b border-ink-100 bg-gradient-to-r from-accent/10 to-mint-400/10 px-6 py-3 dark:border-ink-800">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-300">
              <Sparkles className="h-3.5 w-3.5" />
              Today's pick
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-ink-400">
                Next up · {pickSubject ? `${pickSubject.shortName} · Semester ${pickSubject.semester}` : 'Your syllabus'}
              </p>
              <h3 className="mt-0.5 font-display text-lg font-bold text-ink-950 dark:text-white">
                {pick.title}
              </h3>
              <Badge tone="ink" className="mt-2">Not started</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to={`/deep-learning?topic=${pick.id}`}
                className="inline-flex items-center gap-2 rounded-xl bg-mint-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-mint-600"
              >
                <Play className="h-4 w-4" />
                Deep focus
              </Link>
              <Link
                to={`/topic/${pick.id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
              >
                Open topic
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="flex items-center gap-4 border-mint-500/40 bg-mint-500/5 p-6">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint-500/15 text-mint-600 dark:text-mint-400">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-ink-950 dark:text-white">
              Every topic completed
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              Amazing — you covered the whole syllabus. Time to grind Exam Mode and the Quiz Bank.
            </p>
          </div>
        </Card>
      )}

      <div>
        <h2 className="mb-4 font-display text-xl font-bold text-ink-950 dark:text-white">
          Quick access
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { to: '/one-shots', label: 'One-Shots', icon: <Zap className="h-4 w-4" /> },
            { to: '/playlists', label: 'Playlists', icon: <ListVideo className="h-4 w-4" /> },
            { to: '/quiz', label: 'Quiz Bank', icon: <ListChecks className="h-4 w-4" /> },
            { to: '/practicals', label: 'Practicals', icon: <FlaskConical className="h-4 w-4" /> },
            { to: '/exam', label: 'Exam Mode', icon: <GraduationCap className="h-4 w-4" /> },
            { to: '/minor-project', label: 'Minor Project', icon: <Hammer className="h-4 w-4" /> },
            { to: '/certification', label: 'Skill Dev', icon: <BadgeCheck className="h-4 w-4" /> },
            { to: '/roadmap', label: 'Roadmap', icon: <Map className="h-4 w-4" /> },
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