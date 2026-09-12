import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  ListChecks,
  Target,
} from 'lucide-react';
import { getSubject, getSubjectTopics } from '../data/curriculum';
import type { Subject as SubjectT } from '../types';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, EmptyState, PageHeader, ProgressBar, cx } from '../components/ui';

const categoryLabels: Record<SubjectT['category'], string> = {
  theory: 'Theory',
  practicum: 'Practicum',
  practical: 'Lab',
  elective: 'Elective',
  audit: 'Audit (Qualifying)',
  project: 'Project',
};

const difficultyLabels: Record<SubjectT['difficulty'], string> = {
  beginner: 'Foundation',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const examTone: Record<SubjectT['examImportance'], 'accent' | 'mint' | 'ink'> = {
  critical: 'accent',
  high: 'accent',
  medium: 'ink',
  low: 'mint',
};

export default function Subject() {
  const { subjectId } = useParams();
  const subject = getSubject(subjectId);
  const completed = useLearningStore((s) => s.completed);

  if (!subject) {
    return (
      <section>
        <PageHeader eyebrow="Curriculum" title="Subject not found" />
        <EmptyState
          icon={<BookOpen className="h-6 w-6" />}
          title="Unknown subject"
          body="This subject does not exist in the syllabus."
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

  const topics = getSubjectTopics(subject.id);
  const done = topics.filter((t) => completed.includes(t.id)).length;
  const labs = subject.labs ?? [];
  const labExercises = labs.reduce((n, l) => n + l.exercises.length, 0);

  return (
    <section className="space-y-8">
      <PageHeader eyebrow={`Semester ${subject.semester}`} title={subject.name}>
        <Link
          to={`/semester/${subject.semester}`}
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
        >
          <ArrowLeft className="h-4 w-4" />
          {`Semester ${subject.semester}`}
        </Link>
      </PageHeader>

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">{categoryLabels[subject.category]}</Badge>
        <Badge tone="ink">{difficultyLabels[subject.difficulty]}</Badge>
        <Badge tone={examTone[subject.examImportance]}>
          Exam: {subject.examImportance.toUpperCase()}
        </Badge>
        <Badge tone="ink">{subject.code}</Badge>
        <Badge tone="ink">{subject.periods}</Badge>
        <Badge tone="ink">{subject.credits} cr</Badge>
      </div>

      <Card className="p-6">
        <p className="max-w-3xl text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
          {subject.description}
        </p>
        <div className="mt-5">
          <ProgressBar value={done} max={topics.length} />
          <div className="mt-1.5 flex justify-between text-xs text-ink-400">
            <span>{topics.length} topics · {done} completed</span>
            <span>{topics.length === 0 ? 0 : Math.round((done / topics.length) * 100)}%</span>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink-950 dark:text-white">
            <Target className="h-4 w-4 text-accent" />
            What you’ll learn to do
          </h2>
          <ul className="mt-3 space-y-2">
            {subject.objectives.map((o) => (
              <li key={o} className="flex gap-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {o}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink-950 dark:text-white">
            <ListChecks className="h-4 w-4 text-mint-500" />
            Course outcomes
          </h2>
          <ul className="mt-3 space-y-2">
            {subject.outcomes.map((o) => (
              <li key={o} className="flex gap-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
                {o}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div>
        <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
          <BookOpen className="h-5 w-5 text-accent" />
          Modules &amp; topics
        </h2>
        <div className="space-y-4">
          {subject.modules.map((module) => (
            <Card key={module.id} className="overflow-hidden">
              <div className="border-b border-ink-100 bg-ink-50/60 px-5 py-3.5 dark:border-ink-800 dark:bg-ink-800/30">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-sm font-bold text-ink-900 dark:text-ink-100">
                    {module.title}
                  </h3>
                  <span className="shrink-0 text-xs font-medium text-ink-400">
                    {module.topics.length} topics
                  </span>
                </div>
              </div>
              <ul className="divide-y divide-ink-100 dark:divide-ink-800">
                {module.topics.map((t, ti) => {
                  const isDone = completed.includes(t.id);
                  return (
                    <li key={t.id}>
                      <Link
                        to={`/topic/${t.id}`}
                        className="flex items-center gap-3 px-5 py-3 transition hover:bg-accent/5"
                      >
                        <span
                          className={cx(
                            'grid h-6 w-6 shrink-0 place-items-center rounded-md text-[11px] font-bold',
                            isDone
                              ? 'bg-mint-500/15 text-mint-600 dark:text-mint-400'
                              : 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400',
                          )}
                        >
                          {ti + 1}
                        </span>
                        <span
                          className={cx(
                            'flex-1 text-sm leading-snug',
                            isDone
                              ? 'text-ink-400 line-through dark:text-ink-500'
                              : 'text-ink-800 dark:text-ink-100',
                          )}
                        >
                          {t.title}
                        </span>
                        <span className="hidden shrink-0 text-xs text-ink-400 sm:block">
                          {t.marks} marks · {t.periods}p
                        </span>
                        {isDone ? (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-mint-500" />
                        ) : (
                          <ArrowRight className="h-4 w-4 shrink-0 text-ink-300" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {labExercises > 0 ? (
          <Card className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-mint-500/10 text-mint-600 dark:text-mint-400">
                <FlaskConical className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                  Practical labs
                </p>
                <p className="text-xs text-ink-400">
                  {labs.length} labs · {labExercises} exercises
                </p>
              </div>
            </div>
            <Link
              to={`/practicals?subject=${subject.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-mint-500 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-mint-600"
            >
              Open labs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ) : null}
        <Card className="p-6">
          <h2 className="font-display text-sm font-bold text-ink-950 dark:text-white">
            Learning order
          </h2>
          <ol className="mt-3 space-y-2">
            {subject.learningOrder.map((step, i) => (
              <li key={step} className="flex gap-2 text-sm text-ink-500 dark:text-ink-400">
                <span className="font-mono text-xs font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <h2 className="mt-5 font-display text-sm font-bold text-ink-950 dark:text-white">
            References
          </h2>
          <ul className="mt-2 space-y-1.5">
            {subject.references.map((ref) => (
              <li key={ref} className="flex gap-2 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                {ref}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}