import { useEffect, useMemo, useState } from 'react';
import { Brain, CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react';
import { QUIZ_BANK, type QuizQuestion } from '../data/quiz';
import { getAllSubjects } from '../data/curriculum';
import { Badge, Card, cx } from '../components/ui';

const SUBJECT_MAP = Object.fromEntries(getAllSubjects().map((s) => [s.id, s]));

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
}

type Phase = 'setup' | 'quiz' | 'result';

export default function Quiz() {
  useScrollToTop();

  const subjects = useMemo(() => {
    const ids = Array.from(new Set(QUIZ_BANK.map((q) => q.subjectId)));
    return ids
      .map((id) => ({
        id,
        name: SUBJECT_MAP[id]?.name ?? id.toUpperCase(),
        shortName: SUBJECT_MAP[id]?.shortName ?? id.toUpperCase(),
        count: QUIZ_BANK.filter((q) => q.subjectId === id).length,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const [phase, setPhase] = useState<Phase>('setup');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const toggleSubject = (id: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const startQuiz = () => {
    if (selectedSubjects.length === 0) return;
    const pool = QUIZ_BANK.filter((q) => selectedSubjects.includes(q.subjectId));
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setRevealed(false);
    setScore(0);
    setPhase('quiz');
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;
    setRevealed(true);
    if (selectedOption === questions[currentIndex].answerIndex) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      setPhase('result');
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedOption(null);
    setRevealed(false);
  };

  const restart = () => {
    setPhase('setup');
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setRevealed(false);
    setScore(0);
  };

  const current = questions[currentIndex];
  const percent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent dark:bg-accent-300/10 dark:text-accent-300">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Practice</p>
            <h1 className="font-display text-3xl text-ink-950 dark:text-white sm:text-4xl">Quiz</h1>
          </div>
        </div>
        <p className="max-w-2xl text-base text-ink-500 dark:text-ink-300">
          Test your BTEUP CSE knowledge with topic-wise MCQs pulled from the curated quiz bank. Pick one
          or more subjects, attempt shuffled questions, and review explanations on the spot.
        </p>
      </header>

      {phase === 'setup' && (
        <Card className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-xl text-ink-950 dark:text-white">Select subjects</h2>
            <p className="text-sm text-ink-500 dark:text-ink-300">
              Choose the subjects you want to practice. Mix multiple for a combined revision round.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {subjects.map((sub) => {
              const active = selectedSubjects.includes(sub.id);
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => toggleSubject(sub.id)}
                  className={cx(
                    'flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition',
                    active
                      ? 'border-accent bg-accent/5 text-ink-950 shadow-soft dark:border-accent-300 dark:bg-accent-300/10 dark:text-white'
                      : 'border-ink-100 bg-white text-ink-600 hover:border-accent/60 hover:text-ink-900 dark:border-ink-800 dark:bg-ink-950/60 dark:text-ink-300 dark:hover:border-accent-300/60 dark:hover:text-white',
                  )}
                >
                  <div>
                    <p className="font-medium">{sub.name}</p>
                    <p className="text-xs text-ink-400 dark:text-ink-500">{sub.shortName}</p>
                  </div>
                  <Badge>{sub.count} Qs</Badge>
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-ink-400 dark:text-ink-500">
              {selectedSubjects.length === 0
                ? 'Select at least one subject to start'
                : QUIZ_BANK.filter((q) => selectedSubjects.includes(q.subjectId)).length + ' question(s) selected'}
            </p>
            <button
              type="button"
              onClick={startQuiz}
              disabled={selectedSubjects.length === 0}
              className={cx(
                'inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition',
                selectedSubjects.length === 0
                  ? 'cursor-not-allowed bg-ink-100 text-ink-400 dark:bg-ink-800 dark:text-ink-500'
                  : 'bg-accent text-white shadow-glow hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200',
              )}
            >
              Start quiz
              <Brain className="h-4 w-4" />
            </button>
          </div>
        </Card>
      )}

      {phase === 'quiz' && current && (
        <Card className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge>{SUBJECT_MAP[current.subjectId]?.shortName ?? current.subjectId.toUpperCase()}</Badge>
              <span className="text-sm text-ink-400 dark:text-ink-500">
                Question {currentIndex + 1} / {questions.length}
              </span>
            </div>
            <div className="text-sm text-ink-400 dark:text-ink-500">
              Score: {score} / {currentIndex + (revealed ? 1 : 0)}
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl leading-relaxed text-ink-950 dark:text-white sm:text-2xl">
              {current.question}
            </h2>
          </div>
          <div className="grid gap-3">
            {current.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === current.answerIndex;
              const showCorrect = revealed && isCorrect;
              const showWrong = revealed && isSelected && !isCorrect;

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={revealed}
                  onClick={() => setSelectedOption(idx)}
                  className={cx(
                    'flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition',
                    revealed
                      ? showCorrect
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-400/60 dark:bg-emerald-400/10 dark:text-emerald-100'
                        : showWrong
                          ? 'border-rose-400 bg-rose-50 text-rose-900 dark:border-rose-400/60 dark:bg-rose-400/10 dark:text-rose-100'
                          : 'border-ink-100 bg-white text-ink-400 opacity-70 dark:border-ink-800 dark:bg-ink-950/40 dark:text-ink-500'
                      : isSelected
                        ? 'border-accent bg-accent/5 text-ink-950 dark:border-accent-300 dark:bg-accent-300/10 dark:text-white'
                        : 'border-ink-100 bg-white text-ink-700 hover:border-accent/60 hover:text-ink-900 dark:border-ink-800 dark:bg-ink-950/60 dark:text-ink-200 dark:hover:border-accent-300/60 dark:hover:text-white',
                  )}
                >
                  <span
                    className={cx(
                      'mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-sm font-semibold',
                      revealed && isCorrect
                        ? 'border-emerald-500 text-emerald-600 dark:border-emerald-300 dark:text-emerald-200'
                        : revealed && showWrong
                          ? 'border-rose-500 text-rose-600 dark:border-rose-300 dark:text-rose-200'
                          : isSelected
                            ? 'border-accent text-accent dark:border-accent-300 dark:text-accent-200'
                            : 'border-ink-200 text-ink-400 dark:border-ink-700 dark:text-ink-500',
                    )}
                  >
                    {revealed && isCorrect ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : revealed && showWrong ? (
                      <XCircle className="h-4 w-4" />
                    ) : (
                      String.fromCharCode(65 + idx)
                    )}
                  </span>
                  <span className="flex-1 leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>
          {revealed && (
            <Card className="border-accent/30 bg-accent/5 p-4 dark:border-accent-300/30 dark:bg-accent-300/10">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">Explanation</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                {current.explanation}
              </p>
            </Card>
          )}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center gap-2 rounded-full border border-ink-100 px-4 py-2 text-sm font-medium text-ink-500 transition hover:text-ink-900 dark:border-ink-800 dark:text-ink-400 dark:hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
              Back to setup
            </button>
            {!revealed ? (
              <button
                type="button"
                onClick={checkAnswer}
                disabled={selectedOption === null}
                className={cx(
                  'inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition',
                  selectedOption === null
                    ? 'cursor-not-allowed bg-ink-100 text-ink-400 dark:bg-ink-800 dark:text-ink-500'
                    : 'bg-accent text-white shadow-glow hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200',
                )}
              >
                Check answer
              </button>
            ) : (
              <button
                type="button"
                onClick={nextQuestion}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
              >
                {currentIndex + 1 >= questions.length ? 'See results' : 'Next question'}
              </button>
            )}
          </div>
        </Card>
      )}

      {phase === 'result' && (
        <Card className="flex flex-col items-center gap-6 p-6 text-center sm:p-10">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-accent/10 text-accent dark:bg-accent-300/10 dark:text-accent-300">
            <Trophy className="h-7 w-7" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Completed</p>
            <h2 className="mt-2 font-display text-3xl text-ink-950 dark:text-white sm:text-4xl">
              {percent >= 80 ? 'Great job!' : percent >= 60 ? 'Good effort!' : 'Keep practicing!'}
            </h2>
            <p className="mt-2 text-base text-ink-500 dark:text-ink-300">
              You scored {score} out of {questions.length} ({percent}%)
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center gap-2 rounded-full border border-ink-100 px-5 py-2.5 text-sm font-medium text-ink-600 transition hover:text-ink-900 dark:border-ink-800 dark:text-ink-300 dark:hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
              Practice again
            </button>
            <button
              type="button"
              onClick={startQuiz}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
            >
              Shuffle & retry
              <Brain className="h-4 w-4" />
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}
