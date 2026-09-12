import { useMemo, useState } from 'react';
import { ListChecks } from 'lucide-react';
import QuizPlayer from '../components/QuizPlayer';
import { Badge, Card, PageHeader, cx } from '../components/ui';
import { getSubject } from '../data/curriculum';
import { getQuizzesForSubject, QUIZ_SUBJECT_IDS } from '../data/quiz';

export default function QuizBank() {
  const [active, setActive] = useState<string | null>(null);
  const rows = useMemo(
    () =>
      QUIZ_SUBJECT_IDS.map((sid) => ({
        id: sid,
        name: getSubject(sid)?.shortName ?? sid,
        count: getQuizzesForSubject(sid).length,
      })),
    [],
  );

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Practice"
        title="Quiz Bank"
        subtitle="Short multiple-choice quizzes mapped to your subjects. Questions are supplementary practice — not official BTEUP questions."
      />

      {active === null ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={() => setActive(row.id)}
              className="group text-left"
            >
              <Card className="flex h-full items-center justify-between gap-3 p-5 transition hover:border-accent hover:shadow-cardHover">
                <div>
                  <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                    {row.name}
                  </p>
                  <p className="mt-1 text-xs text-ink-400">
                    {row.count} question{row.count === 1 ? '' : 's'}
                  </p>
                </div>
                <Badge tone="accent">Play</Badge>
              </Card>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-lg font-bold text-ink-950 dark:text-white">
              {getSubject(active)?.shortName}
            </h2>
            <button
              type="button"
              onClick={() => {
                setActive(null);
              }}
              className="rounded-xl border border-ink-200 px-3.5 py-1.5 text-xs font-semibold text-ink-500 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
            >
              ← Choose another subject
            </button>
          </div>
          <div className={cx('flex items-center gap-2')}>
            <ListChecks className="h-4 w-4 text-mint-500" />
            <p className="text-xs font-medium text-ink-400">
              For each subject, a fresh quiz shuffles ideas from the topic list.
            </p>
          </div>
          <QuizPlayer
            quizId={`quiz-${active}`}
            questions={getQuizzesForSubject(active)}
            title="Questions"
          />
        </div>
      )}
    </section>
  );
}