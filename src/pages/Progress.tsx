import { Link } from 'react-router-dom';
import { AlertTriangle, BarChart3, BookOpen, CheckCircle2, Timer, Trash2 } from 'lucide-react';
import {
  ALL_SUBJECTS,
  FLAT_TOPICS,
  TOTAL_TOPICS,
  getSubjectTopics,
} from '../data/curriculum';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, EmptyState, PageHeader, ProgressBar } from '../components/ui';

export default function Progress() {
  const completed = useLearningStore((s) => s.completed);
  const watched = useLearningStore((s) => s.watched);
  const bookmarks = useLearningStore((s) => s.bookmarks);
  const last = useLearningStore((s) => s.last);
  const resetProgress = useLearningStore((s) => s.resetProgress);

  const overallPct = TOTAL_TOPICS === 0 ? 0 : Math.round((completed.length / TOTAL_TOPICS) * 100);

  const lastSummary =
    last === null
      ? null
      : FLAT_TOPICS.find((t) => t.id === last.topicId);

  return (
    <section className="space-y-8">
      <PageHeader eyebrow="Analytics" title="Your Progress">
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Reset all progress, bookmarks and watched videos?')) resetProgress();
          }}
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-3 py-2 text-sm font-medium text-ink-500 transition hover:border-red-300 hover:text-red-500 dark:border-ink-700 dark:text-ink-300"
        >
          <Trash2 className="h-4 w-4" />
          Reset
        </button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: 'Topics done', value: `${completed.length}`, icon: <CheckCircle2 className="h-4 w-4" /> },
          { label: 'Videos watched', value: `${watched.length}`, icon: <Timer className="h-4 w-4" /> },
          { label: 'Bookmarks', value: `${bookmarks.length}`, icon: <BookOpen className="h-4 w-4" /> },
          { label: 'Overall', value: `${overallPct}%`, icon: <BarChart3 className="h-4 w-4" /> },
        ].map((s) => (
          <Card key={s.label} className="flex items-center gap-3 px-4 py-3.5">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
              {s.icon}
            </div>
            <div className="leading-none">
              <p className="font-display text-lg font-bold text-ink-950 dark:text-white">{s.value}</p>
              <p className="mt-1 text-xs text-ink-400">{s.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {lastSummary ? (
        <Card className="flex flex-wrap items-center justify-between gap-3 p-5">
          <p className="text-sm text-ink-600 dark:text-ink-300">
            Last studied:{' '}
            <Link to={`/topic/${lastSummary.id}`} className="font-semibold text-accent hover:text-accent-600 dark:text-accent-300">
              {lastSummary.title}
            </Link>
          </p>
          <Link
            to={`/topic/${lastSummary.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Resume
          </Link>
        </Card>
      ) : null}

      <div>
        <h2 className="mb-3 font-display text-xl font-bold text-ink-950 dark:text-white">
          By semester
        </h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {[3, 4].map((sem) => {
            const topTopics = FLAT_TOPICS.filter((t) => t.semester === sem);
            const done = topTopics.filter((t) => completed.includes(t.id)).length;
            return (
              <Card key={sem} className="p-5">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                    Semester {sem}
                  </p>
                  <Badge tone="ink">{topTopics.length === 0 ? 0 : Math.round((done / topTopics.length) * 100)}%</Badge>
                </div>
                <div className="mt-3">
                  <ProgressBar value={done} max={topTopics.length} />
                  <p className="mt-1.5 text-xs text-ink-400">
                    {done} of {topTopics.length} topics completed
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="mb-3 font-display text-xl font-bold text-ink-950 dark:text-white">
          By subject
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SUBJECTS.map((s) => {
            const topics = getSubjectTopics(s.id);
            const done = topics.filter((t) => completed.includes(t.id)).length;
            const pct = topics.length === 0 ? 0 : Math.round((done / topics.length) * 100);
            return (
              <Link key={s.id} to={`/subject/${s.id}`} className="group block">
                <Card className="p-4 transition hover:shadow-cardHover">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-semibold text-ink-900 group-hover:text-accent dark:text-ink-100">
                      {s.shortName}
                    </p>
                    <Badge tone={pct === 100 ? 'mint' : pct > 0 ? 'accent' : 'ink'}>
                      {pct}%
                    </Badge>
                  </div>
                  <div className="mt-2.5">
                    <ProgressBar value={done} max={topics.length} />
                    <p className="mt-1.5 text-xs text-ink-400">
                      {done}/{topics.length} topics
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {completed.length > 0 ? (
        <div>
          <h2 className="mb-3 font-display text-xl font-bold text-ink-950 dark:text-white">
            Recently completed
          </h2>
          <div className="flex flex-wrap gap-2">
            {[...completed].reverse().slice(0, 12).map((id) => {
              const t = FLAT_TOPICS.find((x) => x.id === id);
              if (!t) return null;
              return (
                <Link
                  key={id}
                  to={`/topic/${id}`}
                  className="flex items-center gap-1.5 rounded-xl border border-mint-500/30 bg-mint-500/10 px-3 py-1.5 text-xs font-medium text-mint-600 transition hover:bg-mint-500 hover:text-white dark:text-mint-400"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {t.title}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyState
          icon={<AlertTriangle className="h-6 w-6" />}
          title="Nothing completed yet"
          body="Start with Semester 3 — even one topic a day adds up fast."
          action={
            <Link
              to="/semester/3"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-600"
            >
              Start Semester 3
            </Link>
          }
        />
      )}
    </section>
  );
}