import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Circle,
  Lightbulb,
  Play,
  Sparkles,
} from 'lucide-react';
import { FLAT_TOPICS, getSubject } from '../data/curriculum';
import type { Language, ResourceKind } from '../types';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, EmptyState, ProgressBar, PageHeader, cx } from '../components/ui';
import VideoCard from '../components/VideoCard';
import PracticeCard from '../components/PracticeCard';

const DIFF_LABELS: Record<string, string> = {
  beginner: 'Foundation',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const ORDER: ResourceKind[] = ['deep', 'one-shot', 'playlist', 'revision', 'practical', 'exam'];

const GROUP_CAPTIONS: Record<ResourceKind, { title: string; caption: string }> = {
  deep: { title: 'Deep lectures', caption: 'Understand the concept thoroughly from the ground up.' },
  'one-shot': { title: 'One-shot revision', caption: 'Complete topic coverage in a single session.' },
  playlist: { title: 'Playlists', caption: 'Multi-video courses spanning several hours.' },
  revision: { title: 'Quick revision', caption: 'Fast re-runs right before an exam or test.' },
  practical: { title: 'Practical guidance', caption: 'Tutorials and walk-throughs for hands-on work.' },
  exam: { title: 'Exam prep', caption: 'Questions, answers and model paper practice.' },
};

const langOptions: Array<{ value: Language | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'hindi', label: 'हिंदी' },
  { value: 'hinglish', label: 'EN+हिं' },
  { value: 'english', label: 'EN' },
];

export default function Topic() {
  const { topicId } = useParams();
  const [lang, setLang] = useState<Language | 'all'>('all');
  const [hideWatched, setHideWatched] = useState(false);

  const flat = FLAT_TOPICS.find((t) => t.id === topicId);
  const subject = flat ? getSubject(flat.subjectId) : undefined;

  const completed = useLearningStore((s) => s.completed);
  const watched = useLearningStore((s) => s.watched);
  const bookmarks = useLearningStore((s) => s.bookmarks);
  const toggleComplete = useLearningStore((s) => s.toggleComplete);
  const toggleBookmark = useLearningStore((s) => s.toggleBookmark);
  const setLast = useLearningStore((s) => s.setLast);

  useEffect(() => {
    if (flat && subject) setLast({ subjectId: flat.subjectId, topicId: flat.id });
  }, [flat, subject, setLast]);

  if (!flat || !subject) {
    return (
      <section>
        <PageHeader eyebrow="Topic" title="Topic not found" />
        <EmptyState
          icon={<Sparkles className="h-6 w-6" />}
          title="Unknown topic"
          body="This topic does not exist in the syllabus."
          action={
            <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          }
        />
      </section>
    );
  }

  const isDone = completed.includes(flat.id);
  const isSaved = bookmarks.includes(flat.id);

  const subjectTopics = FLAT_TOPICS.filter((t) => t.subjectId === flat.subjectId);
  const idx = subjectTopics.findIndex((t) => t.id === flat.id);
  const prev = idx > 0 ? subjectTopics[idx - 1] : undefined;
  const next = idx < subjectTopics.length - 1 ? subjectTopics[idx + 1] : undefined;
  const doneInSubject = subjectTopics.filter((t) => completed.includes(t.id)).length;

  const groups = ORDER.map((kind) => ({
    kind,
    items: flat.resources.filter(
      (r) =>
        r.kind === kind &&
        (lang === 'all' || r.language === lang) &&
        (!hideWatched || !watched.includes(r.id)),
    ),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow={`Semester ${subject.semester} · ${subject.shortName}`}
        title={flat.title}
      >
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => toggleBookmark(flat.id)}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition',
              isSaved
                ? 'border-accent bg-accent/10 text-accent dark:text-accent-300'
                : 'border-ink-200 bg-white text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
            )}
          >
            {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            {isSaved ? 'Saved' : 'Save'}
          </button>
          <button
            type="button"
            onClick={() => toggleComplete(flat.id)}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition',
              isDone
                ? 'bg-mint-500 text-white'
                : 'bg-accent text-white hover:bg-accent-600',
            )}
          >
            {isDone ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            {isDone ? 'Completed' : 'Mark complete'}
          </button>
        </div>
      </PageHeader>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {flat.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {flat.subtopics.map((s) => (
              <span
                key={s}
                className="rounded-lg bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge tone="accent">{DIFF_LABELS[flat.difficulty]}</Badge>
            <Badge tone="ink">{flat.marks} marks</Badge>
            <Badge tone="ink">{flat.periods} periods</Badge>
          </div>
          <div className="mt-4">
            <p className="mb-1.5 text-xs font-medium text-ink-400">Subject progress</p>
            <ProgressBar value={doneInSubject} max={subjectTopics.length} />
          </div>
          <Link
            to={`/subject/${subject.id}`}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-600 dark:text-accent-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to {subject.shortName}
          </Link>
        </Card>
      </div>

      <Card className="flex flex-wrap items-center justify-between gap-3 p-5">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
            <Play className="h-4 w-4" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
              Deep Learning Mode
            </p>
            <p className="text-xs text-ink-400">Watch deep lectures first, then practice.</p>
          </div>
        </div>
        <Link
          to={`/deep-learning?subject=${subject.id}&topic=${flat.id}`}
          className="inline-flex items-center gap-1.5 rounded-xl border border-accent px-3.5 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white dark:text-accent-300"
        >
          Enter focus mode
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Card>

      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <Sparkles className="h-5 w-5 text-accent" />
            Video resources
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-xl border border-ink-200 bg-white p-0.5 dark:border-ink-700 dark:bg-ink-800">
              {langOptions.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => setLang(o.value)}
                  className={cx(
                    'rounded-[10px] px-2.5 py-1 text-xs font-medium transition',
                    lang === o.value
                      ? 'bg-accent text-white'
                      : 'text-ink-500 hover:text-accent dark:text-ink-400',
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-ink-500 dark:text-ink-400">
              <input
                type="checkbox"
                checked={hideWatched}
                onChange={(e) => setHideWatched(e.target.checked)}
                className="h-3.5 w-3.5 accent-accent"
              />
              Hide watched
            </label>
          </div>
        </div>

        {groups.length === 0 ? (
          <EmptyState
            icon={<Sparkles className="h-6 w-6" />}
            title="No videos match these filters"
            body="Try switching language or un-hiding watched videos."
          />
        ) : null}

        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.kind}>
              <div className="mb-3 flex items-baseline gap-2">
                <h3 className="font-display text-base font-bold text-ink-900 dark:text-ink-100">
                  {GROUP_CAPTIONS[g.kind].title}
                </h3>
                <span className="text-xs font-medium text-ink-400">
                  {g.items.length} · {GROUP_CAPTIONS[g.kind].caption}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((r) => (
                  <VideoCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {flat.practice.length > 0 ? (
        <div>
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <Lightbulb className="h-5 w-5 text-mint-500" />
            Practice questions
          </h2>
          <div className="space-y-3">
            {flat.practice.map((q, qi) => (
              <PracticeCard key={qi} question={q.question} hint={q.hint} n={qi + 1} />
            ))}
          </div>
        </div>
      ) : null}

      {flat.related && flat.related.length > 0 ? (
        <div>
          <h2 className="mb-3 font-display text-xl font-bold text-ink-950 dark:text-white">
            Related topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {flat.related.map((r) => {
              const target = FLAT_TOPICS.find((t) => t.id === r.id);
              return (
                <Link
                  key={r.id}
                  to={`/topic/${r.id}`}
                  className="group inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
                >
                  {target?.title ?? r.title}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      {prev || next ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/topic/${prev.id}`}
              className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 transition hover:border-accent dark:border-ink-800 dark:bg-ink-900"
            >
              <ArrowLeft className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-accent" />
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-400">
                  Previous
                </span>
                <span className="block truncate text-sm font-medium text-ink-700 dark:text-ink-200">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/topic/${next.id}`}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-ink-100 bg-white p-4 text-right transition hover:border-accent dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-400">
                  Next
                </span>
                <span className="block truncate text-sm font-medium text-ink-700 dark:text-ink-200">
                  {next.title}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-accent" />
            </Link>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}