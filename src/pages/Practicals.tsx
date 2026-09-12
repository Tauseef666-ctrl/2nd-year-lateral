import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Code2,
  FlaskConical,
  Info,
  Layers,
  ListChecks,
  Target,
  Terminal,
} from 'lucide-react';
import { FLAT_LABS, getSubject } from '../data/curriculum';
import type { FlatLab } from '../data/curriculum';
import type { PracticalExercise } from '../types';
import { Badge, Card, EmptyState, PageHeader, cx } from '../components/ui';
import VideoCard from '../components/VideoCard';

function ExerciseCard({ exercise, n }: { exercise: PracticalExercise; n: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-5 py-3.5 text-left transition hover:bg-accent/5"
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ink-100 font-mono text-xs font-bold text-ink-500 dark:bg-ink-800 dark:text-ink-300">
          {String(n).padStart(2, '0')}
        </span>
        <span className="flex-1 text-sm font-medium text-ink-800 dark:text-ink-100">
          {exercise.name}
        </span>
        {open ? (
          <ChevronDown className="h-4 w-4 shrink-0 text-ink-300" />
        ) : (
          <ChevronRight className="h-4 w-4 shrink-0 text-ink-300" />
        )}
      </button>

      {open ? (
        <div className="space-y-4 border-t border-ink-100 px-5 py-4 dark:border-ink-800">
          <p className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {exercise.concept}
          </p>

          <div>
            <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
              <ListChecks className="h-3.5 w-3.5" />
              Algorithm
            </h4>
            <ol className="mt-2 space-y-1.5">
              {exercise.algorithm.map((step, i) => (
                <li key={i} className="flex gap-2.5 font-mono text-[13px] leading-relaxed text-ink-600 dark:text-ink-300">
                  <span className="shrink-0 text-accent">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {exercise.program ? (
            <div>
              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
                <Code2 className="h-3.5 w-3.5" />
                Program
              </h4>
              <pre className="mt-2 overflow-x-auto rounded-xl bg-ink-950 p-4 font-mono text-[12.5px] leading-relaxed text-emerald-300 dark:bg-black/40">
                {exercise.program}
              </pre>
            </div>
          ) : null}

          {exercise.expectedOutput ? (
            <div>
              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
                <Terminal className="h-3.5 w-3.5" />
                Expected output
              </h4>
              <pre className="mt-2 overflow-x-auto rounded-xl bg-ink-100 p-3 font-mono text-[12.5px] leading-relaxed text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                {exercise.expectedOutput}
              </pre>
            </div>
          ) : null}

          {exercise.commonErrors.length > 0 ? (
            <div>
              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                Common errors
              </h4>
              <ul className="mt-2 space-y-1.5">
                {exercise.commonErrors.map((err) => (
                  <li key={err} className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {err}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {exercise.variation ? (
            <div>
              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
                <Target className="h-3.5 w-3.5 text-mint-500" />
                Try a variation
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {exercise.variation}
              </p>
            </div>
          ) : null}

          {exercise.resources.length > 0 ? (
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
                Guides
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {exercise.resources.map((r) => (
                  <VideoCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}

export default function Practicals() {
  const [params, setParams] = useSearchParams();
  const subjectId = params.get('subject') ?? '';

  const filtered = useMemo(
    () => FLAT_LABS.filter((l) => !subjectId || l.subjectId === subjectId),
    [subjectId],
  );

  const bySubject = useMemo(() => {
    const map = new Map<string, FlatLab[]>();
    for (const lab of filtered) {
      const list = map.get(lab.subjectId) ?? [];
      list.push(lab);
      map.set(lab.subjectId, list);
    }
    return map;
  }, [filtered]);

  const subjectIds = FLAT_LABS.map((l) => l.subjectId).filter(
    (v, i, arr) => arr.indexOf(v) === i,
  );

  const totalExercises = FLAT_LABS.reduce((n, l) => n + l.exercises.length, 0);
  const official = FLAT_LABS.filter((l) => l.source === 'official').length;
  const recommended = FLAT_LABS.length - official;

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Hands-on"
        title="Practical Labs"
        subtitle="The official BTEUP lab list (plus recommended booster exercises) with algorithms, expected outputs, common errors and video guides."
      />

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Labs', value: String(FLAT_LABS.length) },
          { label: 'Exercises', value: String(totalExercises) },
          { label: 'Official labs', value: String(official) },
        ].map((s) => (
          <Card key={s.label} className="px-4 py-3.5 text-center">
            <p className="font-display text-xl font-bold text-ink-950 dark:text-white">{s.value}</p>
            <p className="mt-0.5 text-[11px] text-ink-400">{s.label}</p>
          </Card>
        ))}
      </div>
      {recommended > 0 ? (
        <p className="-mt-4 text-xs text-ink-400">
          Plus {recommended} recommended booster lab
          {recommended > 1 ? 's' : ''} beyond the official list.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setParams({})}
          className={cx(
            'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
            subjectId === ''
              ? 'border-accent bg-accent text-white'
              : 'border-ink-200 bg-white text-ink-500 hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
          )}
        >
          All labs
        </button>
        {subjectIds.map((sid) => {
          const s = getSubject(sid);
          return (
            <button
              key={sid}
              type="button"
              onClick={() => setParams({ subject: sid })}
              className={cx(
                'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
                subjectId === sid
                  ? 'border-accent bg-accent text-white'
                  : 'border-ink-200 bg-white text-ink-500 hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
              )}
            >
              {s?.shortName ?? sid}
            </button>
          );
        })}
      </div>

      {bySubject.size === 0 ? (
        <EmptyState
          icon={<FlaskConical className="h-6 w-6" />}
          title="No labs here"
          body="This subject has no practical exercises."
        />
      ) : (
        [...bySubject.entries()].map(([sid, labs]) => {
          const s = getSubject(sid);
          return (
            <section key={sid}>
              <div className="mb-3 flex items-baseline gap-2">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink-950 dark:text-white">
                  <Layers className="h-4 w-4 text-accent" />
                  {s?.name ?? sid}
                </h2>
                <Link
                  to={`/subject/${sid}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-600 dark:text-accent-300"
                >
                  Subject page
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="space-y-4">
                {labs.map((lab) => (
                  <div key={lab.id}>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-sm font-bold text-ink-900 dark:text-ink-100">
                        {lab.name}
                      </h3>
                      <Badge tone={lab.source === 'official' ? 'accent' : 'mint'}>
                        {lab.source === 'official' ? 'Official syllabus' : 'Recommended'}
                      </Badge>
                      <span className="text-xs text-ink-400">{lab.exercises.length} exercises</span>
                    </div>
                    <div className="space-y-2.5">
                      {lab.exercises.map((ex, i) => (
                        <ExerciseCard key={ex.id} exercise={ex} n={i + 1} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })
      )}
    </section>
  );
}