import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dices,
  FileQuestion,
  GraduationCap,
  Lightbulb,
  RefreshCw,
  Zap,
} from 'lucide-react';
import { ALL_SUBJECTS, FLAT_TOPICS, getSubjectTopics } from '../data/curriculum';
import type { PracticeQuestion, Resource, ResourceKind } from '../types';
import { Card, EmptyState, PageHeader, cx } from '../components/ui';
import VideoCard from '../components/VideoCard';
import PracticeCard from '../components/PracticeCard';

const ROUTES: Array<{ kind: ResourceKind; label: string }> = [
  { kind: 'exam', label: 'Question bank & model papers' },
  { kind: 'one-shot', label: 'One-shot coverage' },
  { kind: 'revision', label: 'Quick revision' },
];

const EXAM_KINDS: ResourceKind[] = ['exam', 'one-shot', 'revision'];

export default function ExamMode() {
  const [subjectFilter, setSubjectFilter] = useState('');
  const [practiceFrom, setPracticeFrom] = useState('');
  const [set, setSet] = useState<PracticeQuestion[]>([]);

  const generate = () => {
    const pool = FLAT_TOPICS.filter((t) => !practiceFrom || t.subjectId === practiceFrom)
      .flatMap((t) => t.practice);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);
    setSet(shuffled);
  };

  const subjectsWithExam = ALL_SUBJECTS.filter((s) => {
    const topics = getSubjectTopics(s.id);
    return topics.some((t) =>
      t.resources.some((r) => EXAM_KINDS.includes(r.kind)),
    );
  });

  const shownSubjects = subjectsWithExam.filter(
    (s) => !subjectFilter || s.id === subjectFilter,
  );

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Prep"
        title="Exam Mode"
        subtitle="The semester is a sprint to the last mile. Filter exam-focused resources per subject, then grind random practice questions."
      />

      <Card className="flex flex-wrap items-center gap-3 border-accent/30 bg-accent/5 p-5">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent dark:bg-accent/20">
          <Lightbulb className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          Strategy: revise the one-shots first, then run question banks, then drill questions you
          can’t yet answer. Mark each video as{' '}
          <strong className="text-ink-900 dark:text-white">watched</strong> so revision only shows
          what’s left.
        </p>
      </Card>

      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSubjectFilter('')}
            className={cx(
              'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
              subjectFilter === ''
                ? 'border-accent bg-accent text-white'
                : 'border-ink-200 bg-white text-ink-500 hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
            )}
          >
            All subjects
          </button>
          {subjectsWithExam.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSubjectFilter(s.id)}
              className={cx(
                'rounded-xl border px-3 py-1.5 text-xs font-semibold transition',
                subjectFilter === s.id
                  ? 'border-accent bg-accent text-white'
                  : 'border-ink-200 bg-white text-ink-500 hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
              )}
            >
              {s.shortName}
            </button>
          ))}
        </div>

        {shownSubjects.length === 0 ? (
          <EmptyState
            icon={<GraduationCap className="h-6 w-6" />}
            title="Nothing to revise here"
            body="No exam-ready resources for this subject yet."
          />
        ) : (
          <div className="space-y-10">
            {shownSubjects.map((s) => {
              const resources: Resource[] = getSubjectTopics(s.id).flatMap((t) =>
                t.resources.filter((r) => EXAM_KINDS.includes(r.kind)),
              );
              if (resources.length === 0) return null;
              return (
                <section key={s.id}>
                  <div className="mb-3 flex items-baseline gap-2">
                    <LinkSubject subjectId={s.id} shortName={s.shortName} />
                    <span className="text-xs text-ink-400">
                      {s.code} · {resources.length} videos
                    </span>
                  </div>
                  <div className="space-y-6">
                    {ROUTES.map((route) => {
                      const items = resources
                        .filter((r) => r.kind === route.kind)
                        .sort((a, b) => b.rec - a.rec);
                      if (items.length === 0) return null;
                      return (
                        <div key={route.kind}>
                          <h3 className="mb-2 flex items-center gap-1.5 font-display text-sm font-bold text-ink-900 dark:text-ink-100">
                            <FileQuestion className="h-3.5 w-3.5 text-accent" />
                            {route.label}
                            <span className="text-xs font-medium text-ink-400">
                              · {items.length}
                            </span>
                          </h3>
                          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {items.map((r) => (
                              <VideoCard key={r.id} resource={r} />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <Zap className="h-5 w-5 text-mint-500" />
            Instant practice
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={practiceFrom}
              onChange={(e) => setPracticeFrom(e.target.value)}
              className="rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-700 outline-none transition focus:border-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
            >
              <option value="">All subjects</option>
              {ALL_SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.shortName}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={generate}
              className="inline-flex items-center gap-1.5 rounded-xl bg-mint-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-mint-600"
            >
              <Dices className="h-4 w-4" />
              Deal 5 questions
            </button>
            {set.length > 0 ? (
              <button
                type="button"
                onClick={generate}
                className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-3 py-2 text-sm font-semibold text-ink-600 transition hover:text-accent dark:border-ink-700 dark:text-ink-300"
              >
                <RefreshCw className="h-4 w-4" />
                Reshuffle
              </button>
            ) : null}
          </div>
        </div>

        {set.length === 0 ? (
          <EmptyState
            icon={<Dices className="h-6 w-6" />}
            title="Deal yourself a hand"
            body="Pull five random questions from the syllabus and answer them with the timer running."
          />
        ) : (
          <div className="space-y-3">
            {set.map((q, i) => (
              <PracticeCard key={`${q.question}-${i}`} question={q.question} hint={q.hint} n={i + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function LinkSubject({ subjectId, shortName }: { subjectId: string; shortName: string }) {
  return (
    <Link
      to={`/subject/${subjectId}`}
      className="font-display text-lg font-bold text-ink-950 transition hover:text-accent dark:text-white"
    >
      {shortName}
    </Link>
  );
}