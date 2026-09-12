import { useState } from 'react';
import { BadgeCheck, CheckCircle2, ChevronRight, RotateCcw, Trophy, XCircle } from 'lucide-react';
import type { QuizQuestion } from '../data/quiz';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, ProgressBar, cx } from './ui';

interface Props {
  quizId: string;
  questions: QuizQuestion[];
  compact?: boolean;
  title?: string;
}

export default function QuizPlayer({ quizId, questions, compact, title }: Props) {
  const quizzes = useLearningStore((s) => s.quizzes);
  const markQuizDone = useLearningStore((s) => s.markQuizDone);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const recorded = quizzes.includes(quizId);
  const current = questions[index];
  const last = questions.length;

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.answerIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= last) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  if (questions.length === 0) return null;

  if (finished) {
    const pct = Math.round((score / last) * 100);
    return (
      <Card className={cx('p-6 text-center', compact && 'p-5')}>
        <Trophy className="mx-auto h-8 w-8 text-mint-500" />
        <h3 className="mt-3 font-display text-xl font-bold text-ink-950 dark:text-white">
          {score}/{last} correct
        </h3>
        <p className="text-sm text-ink-500 dark:text-ink-400">
          {pct >= 80
            ? 'Great job — you are exam ready for this one.'
            : pct >= 50
              ? 'Solid attempt. Review the explanations and try again.'
              : 'Tough one — revisit the topic videos, then retake.'}
        </p>
        <ProgressBar value={score} max={last} className="mx-auto mt-4 max-w-xs" />
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIndex(0);
              setSelected(null);
              setScore(0);
              setFinished(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
          >
            <RotateCcw className="h-4 w-4" />
            Retake quiz
          </button>
          <button
            type="button"
            onClick={() => markQuizDone(quizId)}
            disabled={recorded}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition',
              recorded
                ? 'cursor-default bg-mint-500/10 text-mint-600 dark:text-mint-400'
                : 'bg-mint-500 text-white hover:bg-mint-600',
            )}
          >
            <BadgeCheck className="h-4 w-4" />
            {recorded ? 'Recorded in progress' : 'Record result'}
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cx('p-5', compact && 'p-4')}>
      {title ? (
        <h3 className="mb-1 font-display text-sm font-bold text-ink-950 dark:text-white">{title}</h3>
      ) : null}
      <div className="mb-3 flex items-center justify-between">
        <Badge tone="accent">
          Question {index + 1} of {last}
        </Badge>
        <span className="text-xs font-semibold text-ink-400">Score {score}</span>
      </div>
      <ProgressBar value={index + (selected !== null ? 1 : 0)} max={last} className="mb-4" />
      <p className="text-sm font-semibold leading-relaxed text-ink-900 dark:text-ink-100">
        {current.question}
      </p>
      <div className="mt-4 space-y-2">
        {current.options.map((opt, i) => {
          const isAnswer = i === current.answerIndex;
          const isPicked = i === selected;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => pick(i)}
              disabled={selected !== null}
              className={cx(
                'flex w-full items-start gap-2 rounded-xl border px-4 py-3 text-left text-sm transition',
                selected === null &&
                  'border-ink-100 bg-white hover:border-accent dark:border-ink-800 dark:bg-ink-900',
                selected !== null && isAnswer && 'border-mint-500 bg-mint-500/10 text-mint-700 dark:text-mint-300',
                selected !== null && isPicked && !isAnswer && 'border-red-500 bg-red-500/10 text-red-600 dark:text-red-400',
                selected !== null && !isPicked && !isAnswer && 'opacity-50',
              )}
            >
              <span className="mt-0.5 font-mono text-[11px] font-bold text-ink-400">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
              {selected !== null && isAnswer ? (
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-mint-500" />
              ) : null}
              {selected !== null && isPicked && !isAnswer ? (
                <XCircle className="ml-auto h-4 w-4 shrink-0 text-red-500" />
              ) : null}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div
          className={cx(
            'mt-4 rounded-xl border p-4 text-sm leading-relaxed',
            selected === current.answerIndex
              ? 'border-mint-500/30 bg-mint-500/5 text-ink-700 dark:text-ink-200'
              : 'border-red-500/30 bg-red-500/5 text-ink-700 dark:text-ink-200',
          )}
        >
          <p className="font-bold text-ink-900 dark:text-ink-100">
            {selected === current.answerIndex ? 'Correct!' : `Not quite — answer: ${current.options[current.answerIndex]}`}
          </p>
          <p className="mt-1">{current.explanation}</p>
          <button
            type="button"
            onClick={next}
            className={cx(
              'mt-4 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition bg-accent text-white hover:bg-accent/90',
            )}
          >
            {index + 1 >= last ? 'Finish quiz' : 'Next question'}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </Card>
  );
}