import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Circle,
  Clock,
  Play,
  RefreshCw,
  Sparkles,
  Target,
} from 'lucide-react';
import { ALL_SUBJECTS, FLAT_TOPICS, getSubject, getSubjectTopics } from '../data/curriculum';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, EmptyState, PageHeader, cx } from '../components/ui';
import VideoCard from '../components/VideoCard';
import PracticeCard from '../components/PracticeCard';

function FocusTimer() {
  const TOTAL = 25 * 60;
  const [remaining, setRemaining] = useState(TOTAL);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setRemaining((r) => (r <= 0 ? 0 : r - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');
  const finished = remaining === 0;

  return (
    <Card className="p-6 text-center">
      <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-400">
        <Clock className="h-3.5 w-3.5" />
        Focus session
      </p>
      <p
        className={cx(
          'mt-3 font-mono text-5xl font-semibold tracking-tight',
          finished ? 'text-mint-500' : 'text-ink-950 dark:text-white',
        )}
      >
        {mm}:{ss}
      </p>
      <div className="mt-4 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          {running ? 'Pause' : remaining === 0 ? 'Restart' : 'Start session'}
          {running ? null : <Play className="h-3.5 w-3.5" />}
        </button>
        <button
          type="button"
          onClick={() => {
            setRunning(false);
            setRemaining(TOTAL);
          }}
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-600 transition hover:text-accent dark:border-ink-700 dark:text-ink-300"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>
    </Card>
  );
}

function FocusSession({ topicId }: { topicId: string }) {
  const navigate = useNavigate();
  const flat = FLAT_TOPICS.find((t) => t.id === topicId);
  const subject = flat ? getSubject(flat.subjectId) : undefined;
  const [done, setDone] = useState<boolean[]>([false, false, false]);

  const completed = useLearningStore((s) => s.completed);
  const toggleComplete = useLearningStore((s) => s.toggleComplete);
  const setLast = useLearningStore((s) => s.setLast);

  useEffect(() => {
    if (flat && subject) setLast({ subjectId: flat.subjectId, topicId: flat.id });
  }, [flat, subject, setLast]);

  if (!flat || !subject) {
    return (
      <EmptyState
        icon={<Brain className="h-6 w-6" />}
        title="Topic not found"
        body="Pick a topic from the list to begin a focus session."
      />
    );
  }

  const deep = flat.resources.filter((r) => r.kind === 'deep');
  const primary = deep.find((r) => r.rec === 3) ?? deep[0] ?? flat.resources[0];
  const bonus = flat.resources.filter((r) => r.id !== primary?.id);

  const allDone = done.every(Boolean);
  const isCompleted = completed.includes(flat.id);

  const subjectTopics = getSubjectTopics(subject.id);
  const idx = subjectTopics.findIndex((t) => t.id === flat.id);
  const next = idx >= 0 ? subjectTopics[idx + 1] : undefined;

  const toggle = (i: number) =>
    setDone((d) => d.map((v, j) => (j === i ? !v : v)));

  const steps = [
    { label: 'Watch the deep lecture', hint: primary?.title ?? 'Watch a deep dive on this topic.' },
    { label: 'Read the concept & subtopics', hint: `${flat.subtopics.length} subtopics to master.` },
    { label: 'Attempt practice questions', hint: `${flat.practice.length} questions to answer.` },
  ];

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow={`Deep Learning · ${subject.shortName}`}
        title={flat.title}
      >
        <Link
          to={`/topic/${flat.id}`}
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Open full topic
        </Link>
      </PageHeader>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink-950 dark:text-white">
                <Sparkles className="h-4 w-4 text-accent" />
                Session steps
              </h2>
              <Badge tone="ink">{flat.marks} marks</Badge>
            </div>
            <div className="mt-4 space-y-2.5">
              {steps.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => toggle(i)}
                  className={cx(
                    'flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                    done[i]
                      ? 'border-mint-500/50 bg-mint-500/10'
                      : 'border-ink-100 bg-white hover:border-accent dark:border-ink-800 dark:bg-ink-900',
                  )}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-100 font-mono text-xs font-bold text-ink-500 dark:bg-ink-800 dark:text-ink-300">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cx(
                        'block text-sm font-semibold',
                        done[i] ? 'text-mint-600 dark:text-mint-400' : 'text-ink-800 dark:text-ink-100',
                      )}
                    >
                      {s.label}
                    </span>
                    <span className="block truncate text-xs text-ink-400">{s.hint}</span>
                  </span>
                  {done[i] ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-mint-500" />
                  ) : (
                    <Circle className="h-5 w-5 shrink-0 text-ink-200 dark:text-ink-700" />
                  )}
                </button>
              ))}
            </div>

            {allDone ? (
              <div className="mt-5 rounded-2xl border border-mint-500/40 bg-mint-500/10 p-5">
                <p className="font-display text-sm font-bold text-mint-600 dark:text-mint-400">
                  Session complete — nicely done!
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => toggleComplete(flat.id)}
                    className={cx(
                      'inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white transition',
                      isCompleted ? 'bg-mint-500' : 'bg-accent hover:bg-accent-600',
                    )}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {isCompleted ? 'Already marked complete' : 'Mark this topic complete'}
                  </button>
                  {next ? (
                    <button
                      type="button"
                      onClick={() => navigate(`/deep-learning?subject=${subject.id}&topic=${next.id}`)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
                    >
                      Next: {next.title}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
              </div>
            ) : null}
          </Card>

          {primary ? (
            <div className="mt-4">
              <h3 className="mb-2 font-display text-sm font-bold text-ink-950 dark:text-white">
                Primary lecture
              </h3>
              <VideoCard resource={primary} />
            </div>
          ) : null}

          {bonus.length > 0 ? (
            <div className="mt-4">
              <h3 className="mb-2 font-display text-sm font-bold text-ink-950 dark:text-white">
                Bonus material
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {bonus.map((r) => (
                  <VideoCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          ) : null}

          {flat.practice.length > 0 ? (
            <div className="mt-6">
              <h3 className="mb-2 flex items-center gap-2 font-display text-sm font-bold text-ink-950 dark:text-white">
                <Target className="h-4 w-4 text-accent" />
                Practice set
              </h3>
              <div className="space-y-3">
                {flat.practice.map((q, qi) => (
                  <PracticeCard key={qi} question={q.question} hint={q.hint} n={qi + 1} />
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="space-y-4">
          <FocusTimer />
          <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
              About this mode
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Deep learning means fewer inputs, full attention. Start a 25-minute session, watch the
              deep lecture without distractions, read the subtopics, then attempt every practice
              question. Close the loop by marking the topic complete.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function DeepLearning() {
  const [params] = useSearchParams();
  const [subjectFilter, setSubjectFilter] = useState<string>('');

  const topicParam = params.get('topic');
  if (topicParam) return <FocusSession topicId={topicParam} />;

  const pool = FLAT_TOPICS.filter(
    (t) => !subjectFilter || t.subjectId === subjectFilter,
  )
    .filter((t) => t.practice.length > 0)
    .sort((a, b) => b.marks - a.marks || (a.difficulty === 'advanced' ? 1 : 0) - (b.difficulty === 'advanced' ? 1 : 0))
    .slice(0, 8);

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Focus"
        title="Deep Learning Mode"
        subtitle="Pick a high-weight topic and work through a focused listen–read–practice session."
      />

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setSubjectFilter('')}
          className={cx(
            'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
            subjectFilter === ''
              ? 'border-accent bg-accent text-white'
              : 'border-ink-200 bg-white text-ink-500 hover:text-accent dark:border-ink-700 dark:bg-ink-800',
          )}
        >
          All subjects
        </button>
        {ALL_SUBJECTS.filter((s) => s.category !== 'elective' || s.semester === 4).map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSubjectFilter(s.id)}
            className={cx(
              'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
              subjectFilter === s.id
                ? 'border-accent bg-accent text-white'
                : 'border-ink-200 bg-white text-ink-500 hover:text-accent dark:border-ink-700 dark:bg-ink-800',
            )}
          >
            {s.shortName}
          </button>
        ))}
      </div>

      {pool.length === 0 ? (
        <EmptyState
          icon={<Brain className="h-6 w-6" />}
          title="No deep-dive topics here"
          body="Try another subject from the filter above."
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pool.map((t) => {
            const s = getSubject(t.subjectId);
            return (
              <Link key={t.id} to={`/deep-learning?subject=${t.subjectId}&topic=${t.id}`} className="group block">
                <Card className="flex h-full flex-col p-5 transition hover:shadow-cardHover">
                  <div className="flex items-center justify-between gap-2">
                    <Badge tone="accent">{`${s?.shortName ?? t.subjectName}`}</Badge>
                    <Badge tone="ink">{t.marks} marks</Badge>
                  </div>
                  <p className="mt-3 flex-1 font-display text-sm font-bold leading-snug text-ink-900 dark:text-ink-100">
                    {t.title}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 transition group-hover:opacity-100">
                    <Play className="h-3 w-3" />
                    Start focus session
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}