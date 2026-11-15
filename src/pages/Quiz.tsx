import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  CheckCircle2,
  Download,
  Flame,
  Layers,
  RotateCcw,
  Timer,
  Trophy,
  Upload,
  XCircle,
} from 'lucide-react';
import { track } from '@vercel/analytics';
import {
  MOCK_SIZE,
  QUIZ_BANK,
  QUIZ_MODULE_IDS,
  buildMockPool,
  getQuestionsByModule,
  getRetestPool,
  type QuizQuestion,
} from '../data/quiz';
import { getAllSubjects } from '../data/curriculum';
import { useLearningStore } from '../store/useStore';
import { computeStreak } from '../store/streak';
import { Badge, Card, cx } from '../components/ui';
import type { QuizAttemptRecord } from '../types';

const MOCK_SECONDS = 20 * 60;

const SUBJECT_MAP = Object.fromEntries(getAllSubjects().map((s) => [s.id, s]));

/** moduleId → { title, subjectId, subjectShort } for breakdown + callout links. */
const MODULE_MAP = Object.fromEntries(
  getAllSubjects().flatMap((s) =>
    (s.modules ?? []).map((m) => [
      m.id,
      { title: m.title, subjectId: s.id, subjectShort: s.shortName },
    ]),
  ),
);

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
}

type Mode = 'unit' | 'mock' | 'retest';
type Phase = 'setup' | 'quiz' | 'result';

const MODES: { id: Mode; title: string; body: string }[] = [
  {
    id: 'unit',
    title: 'Unit quiz',
    body: 'Pick a subject and module, get instant explanations as you go.',
  },
  {
    id: 'mock',
    title: 'Timed mock',
    body: `BTEUP-style: up to ${MOCK_SIZE} MCQs in 20 minutes — answers revealed at the end.`,
  },
  {
    id: 'retest',
    title: 'Retest wrong',
    body: 'Replay the questions you got wrong in past attempts until they stick.',
  },
];

interface ModuleBreakdown {
  moduleId: string;
  correct: number;
  total: number;
}

interface Summary {
  mode: Mode;
  score: number;
  total: number;
  percent: number;
  secondsUsed: number;
  perModule: ModuleBreakdown[];
  weakest: ModuleBreakdown | null;
  questions: QuizQuestion[];
  answers: (number | null)[];
}

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

  const quizAttempts = useLearningStore((s) => s.quizAttempts);
  const practiceDays = useLearningStore((s) => s.practiceDays);
  const readModules = useLearningStore((s) => s.readModules);
  const recordQuizAttempt = useLearningStore((s) => s.recordQuizAttempt);
  const recordPracticeDay = useLearningStore((s) => s.recordPracticeDay);
  const streak = useMemo(() => computeStreak(practiceDays), [practiceDays]);

  const [phase, setPhase] = useState<Phase>('setup');
  const [mode, setMode] = useState<Mode>('unit');
  const [unitSubject, setUnitSubject] = useState<string | null>(null);
  const [unitModule, setUnitModule] = useState<string>('all');
  const [mockSubjects, setMockSubjects] = useState<string[]>([]);
  const [retestScope, setRetestScope] = useState<'all' | 'latest'>('all');

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [correctFlags, setCorrectFlags] = useState<boolean[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(MOCK_SECONDS);
  const [summary, setSummary] = useState<Summary | null>(null);

  /* Wrong pools for the retest mode (all attempts vs the latest one). */
  const wrongAll = useMemo(() => {
    const ids = new Set<string>();
    for (const a of quizAttempts) for (const id of a.wrongIds) ids.add(id);
    return getRetestPool([...ids]);
  }, [quizAttempts]);
  const wrongLatest = useMemo(
    () => getRetestPool(quizAttempts[0]?.wrongIds ?? []),
    [quizAttempts],
  );

  const unitModules = useMemo(() => {
    if (!unitSubject) return [];
    const ids = QUIZ_MODULE_IDS.filter((m) => m.startsWith(`${unitSubject}-`) || m === unitSubject);
    return ids
      .map((id) => ({ id, count: getQuestionsByModule(id).length }))
      .filter((m) => m.count > 0)
      .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }, [unitSubject]);

  /* ── Session lifecycle ──────────────────────────────────────────────── */

  const beginSession = (pool: QuizQuestion[], sessionMode: Mode) => {
    if (pool.length === 0) return;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setRevealed(false);
    setAnswers(Array(shuffled.length).fill(null));
    setCorrectFlags(Array(shuffled.length).fill(false));
    setSecondsLeft(MOCK_SECONDS);
    setSummary(null);
    setMode(sessionMode);
    setPhase('quiz');
  };

  const startUnit = () => {
    if (!unitSubject) return;
    const pool =
      unitModule === 'all'
        ? QUIZ_BANK.filter((q) => q.subjectId === unitSubject)
        : getQuestionsByModule(unitModule);
    beginSession(pool, 'unit');
  };

  const startMock = () => {
    beginSession(buildMockPool(mockSubjects.length > 0 ? mockSubjects : null), 'mock');
  };

  const startRetest = () => {
    const pool = retestScope === 'latest' ? wrongLatest : wrongAll;
    beginSession(pool, 'retest');
  };

  /* Reveal-flow answer check (unit + retest). */
  const checkAnswer = () => {
    if (selectedOption === null) return;
    const ok = selectedOption === questions[currentIndex].answerIndex;
    setRevealed(true);
    if (!ok) return;
    setCorrectFlags((prev) => {
      const next = [...prev];
      next[currentIndex] = true;
      return next;
    });
  };

  /* Build the result snapshot, persist the attempt, log the practice day. */
  const finish = (mockAnswers?: (number | null)[]) => {
    const total = questions.length;
    const resolved = mockAnswers ?? answers;
    const perModuleMap = new Map<string, ModuleBreakdown>();
    const wrongIds: string[] = [];
    let score = 0;

    questions.forEach((question, i) => {
      const ok =
        mode === 'mock' ? resolved[i] === question.answerIndex : correctFlags[i];
      if (ok) score++;
      else wrongIds.push(question.id);
      const key = question.moduleId ?? question.subjectId;
      const entry = perModuleMap.get(key) ?? { moduleId: key, correct: 0, total: 0 };
      entry.total++;
      if (ok) entry.correct++;
      perModuleMap.set(key, entry);
    });

    const perModule = [...perModuleMap.values()];
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    const weakest =
      percent < 100
        ? perModule
            .filter((m) => m.correct < m.total)
            .sort((a, b) => a.correct / a.total - b.correct / b.total || b.total - a.total)[0] ??
          null
        : null;

    const attempt: QuizAttemptRecord = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      subjectIds: [...new Set(questions.map((q) => q.subjectId))],
      total,
      score,
      wrongIds,
    };
    recordQuizAttempt(attempt);
    recordPracticeDay();
    track('quiz_complete', { mode, score, total });

    setSummary({
      mode,
      score,
      total,
      percent,
      secondsUsed: MOCK_SECONDS - secondsLeft,
      perModule,
      weakest,
      questions,
      answers: resolved,
    });
    setPhase('result');
  };

  /* Mock flow: answers lock on Next, revealed only at the end. */
  const nextMock = () => {
    if (currentIndex + 1 >= questions.length) {
      finish(answers);
      return;
    }
    setCurrentIndex((i) => i + 1);
  };

  const finishMock = () => finish(answers);

  /* Reveal flow: next / finish. */
  const nextReveal = () => {
    if (currentIndex + 1 >= questions.length) {
      finish(answers);
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
    setAnswers([]);
    setCorrectFlags([]);
    setSecondsLeft(MOCK_SECONDS);
    setSummary(null);
  };

  /* Mock countdown — one interval while a mock is running. */
  useEffect(() => {
    if (phase !== 'quiz' || mode !== 'mock') return;
    const timer = window.setInterval(
      () => setSecondsLeft((s) => Math.max(0, s - 1)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [phase, mode]);

  /* Time up → submit the paper with whatever was locked in.
   * Deps intentionally omit answers/finish: the countdown re-renders every
   * tick, so this effect's closure always holds the latest committed state. */
  useEffect(() => {
    if (phase === 'quiz' && mode === 'mock' && secondsLeft === 0) finish(answers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, mode, secondsLeft]);

  const current = questions[currentIndex];
  const answeredCount = answers.filter((a) => a !== null).length;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  /* ── Progress export / import (TODO 3.7) ────────────────────────────── */
  const [importMsg, setImportMsg] = useState('');

  const exportProgress = () => {
    const payload = {
      app: 'bteup-cse-hub',
      version: 1,
      exportedAt: new Date().toISOString(),
      state: {
        readModules,
        quizAttempts,
        papersOpened: useLearningStore.getState().papersOpened,
        practiceDays,
      },
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bteup-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importProgress = async (file: File) => {
    try {
      const data = JSON.parse(await file.text()) as {
        version?: number;
        state?: Partial<{
          readModules: Record<string, true>;
          quizAttempts: QuizAttemptRecord[];
          papersOpened: Record<string, number>;
          practiceDays: string[];
        }>;
      };
      const state = data?.state;
      if (!state || data.version !== 1) throw new Error('bad shape');
      const next = {
        ...(Array.isArray(state.readModules) || typeof state.readModules !== 'object'
          ? {}
          : state.readModules),
        ...(Array.isArray(state.quizAttempts) ? { quizAttempts: state.quizAttempts } : {}),
        ...(typeof state.papersOpened === 'object' && state.papersOpened !== null
          ? { papersOpened: state.papersOpened }
          : {}),
        ...(Array.isArray(state.practiceDays) ? { practiceDays: state.practiceDays } : {}),
      };
      useLearningStore.setState(next);
      const imported = next.quizAttempts?.length ?? 0;
      setImportMsg(
        imported > 0
          ? `Imported — ${imported} quiz attempt${imported === 1 ? '' : 's'} restored.`
          : 'Imported.',
      );
    } catch {
      setImportMsg('That file is not a valid progress export.');
    }
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent dark:bg-accent-300/10 dark:text-accent-300">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Practice</p>
              <h1 className="font-display text-3xl text-ink-950 dark:text-white sm:text-4xl">Quiz</h1>
            </div>
          </div>
          {streak > 0 ? (
            <Badge tone="mint" className="gap-1.5 py-1.5">
              <Flame className="h-3.5 w-3.5" />
              {streak}-day streak
            </Badge>
          ) : null}
        </div>
        <p className="max-w-2xl text-base text-ink-500 dark:text-ink-300">
          Three ways to practice: drill one unit, sit a BTEUP-style timed mock, or replay the
          questions that keep beating you. Every completed round feeds your streak and history.
        </p>
      </header>

      {phase === 'setup' && (
        <>
          <div className="grid gap-3 sm:grid-cols-3">
            {MODES.map((m) => {
              const active = mode === m.id;
              const unavailable = m.id === 'retest' && wrongAll.length === 0;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => !unavailable && setMode(m.id)}
                  disabled={unavailable}
                  className={cx(
                    'rounded-2xl border p-4 text-left transition',
                    unavailable
                      ? 'cursor-not-allowed border-ink-100 bg-white/40 opacity-60 dark:border-ink-800 dark:bg-ink-900/30'
                      : active
                        ? 'border-accent bg-accent/5 shadow-soft dark:border-accent-300 dark:bg-accent-300/10'
                        : 'border-ink-100 bg-white hover:border-accent/60 dark:border-ink-800 dark:bg-ink-950/60 dark:hover:border-accent-300/60',
                  )}
                >
                  <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                    {m.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                    {m.body}
                  </p>
                  {unavailable ? (
                    <p className="mt-1.5 text-[11px] font-medium text-ink-400">
                      Nothing to retest yet
                    </p>
                  ) : null}
                </button>
              );
            })}
          </div>

          {mode === 'unit' && (
            <Card className="flex flex-col gap-6 p-6 sm:p-8">
              <div>
                <h2 className="font-display text-xl text-ink-950 dark:text-white">
                  Pick subject → module
                </h2>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                  Drill one unit at a time. Modules with tagged questions are listed.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {subjects.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setUnitSubject(s.id);
                      setUnitModule('all');
                    }}
                    className={cx(
                      'rounded-full border px-3 py-1.5 text-xs font-medium transition',
                      unitSubject === s.id
                        ? 'border-accent bg-accent text-white dark:border-accent-300 dark:bg-accent-300 dark:text-ink-950'
                        : 'border-ink-200 bg-white text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
                    )}
                  >
                    {s.shortName} · {s.count}
                  </button>
                ))}
              </div>
              {unitSubject && (
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => setUnitModule('all')}
                    className={chip(unitModule === 'all')}
                  >
                    All modules
                  </button>
                  {unitModules.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setUnitModule(m.id)}
                      className={chip(unitModule === m.id)}
                    >
                      {(MODULE_MAP[m.id]?.title ?? m.id).replace(/^Module \d+ · /, '')} · {m.count}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-ink-400 dark:text-ink-500">
                  {!unitSubject
                    ? 'Select a subject to begin'
                    : `${unitModule === 'all' ? subjects.find((s) => s.id === unitSubject)?.count : getQuestionsByModule(unitModule).length} question(s) selected`}
                </p>
                <button
                  type="button"
                  onClick={startUnit}
                  disabled={!unitSubject}
                  className={startBtn(!!unitSubject)}
                >
                  Start unit quiz
                  <Brain className="h-4 w-4" />
                </button>
              </div>
            </Card>
          )}

          {mode === 'mock' && (
            <Card className="flex flex-col gap-6 p-6 sm:p-8">
              <div>
                <h2 className="font-display text-xl text-ink-950 dark:text-white">Timed mock</h2>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                  {MOCK_SIZE} MCQs · 20 minutes · no reveals mid-paper — just like the board exam.
                  Currently {QUIZ_BANK.length} questions in the bank; the paper uses all of them
                  until the bank crosses {MOCK_SIZE}.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setMockSubjects([])}
                  className={chip(mockSubjects.length === 0)}
                >
                  All subjects
                </button>
                {subjects.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() =>
                      setMockSubjects((prev) =>
                        prev.includes(s.id) ? prev.filter((x) => x !== s.id) : [...prev, s.id],
                      )
                    }
                    className={chip(mockSubjects.includes(s.id))}
                  >
                    {s.shortName}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-ink-400 dark:text-ink-500">
                  {mockSubjects.length === 0
                    ? `Full bank · ${Math.min(QUIZ_BANK.length, MOCK_SIZE)} questions`
                    : `${QUIZ_BANK.filter((q) => mockSubjects.includes(q.subjectId)).length} question(s) in pool`}
                </p>
                <button
                  type="button"
                  onClick={startMock}
                  disabled={mockSubjects.length > 0 && QUIZ_BANK.filter((q) => mockSubjects.includes(q.subjectId)).length === 0}
                  className={startBtn(true)}
                >
                  Start mock
                  <Timer className="h-4 w-4" />
                </button>
              </div>
            </Card>
          )}

          {mode === 'retest' && (
            <Card className="flex flex-col gap-6 p-6 sm:p-8">
              <div>
                <h2 className="font-display text-xl text-ink-950 dark:text-white">Retest wrong answers</h2>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                  Your logged wrong answers, reshuffled. Get them right and the loop closes.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button type="button" onClick={() => setRetestScope('all')} className={chip(retestScope === 'all')}>
                  All wrong answers · {wrongAll.length}
                </button>
                <button
                  type="button"
                  onClick={() => setRetestScope('latest')}
                  disabled={wrongLatest.length === 0}
                  className={cx(chip(retestScope === 'latest'), wrongLatest.length === 0 && 'opacity-50')}
                >
                  Latest attempt · {wrongLatest.length}
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-ink-400 dark:text-ink-500">
                  {quizAttempts.length} attempt{quizAttempts.length === 1 ? '' : 's'} on record
                </p>
                <button type="button" onClick={startRetest} className={startBtn(true)}>
                  Start retest
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </Card>
          )}

          <ProgressCard
            attempts={quizAttempts.length}
            streak={streak}
            readCount={Object.keys(readModules).length}
            importMsg={importMsg}
            onExport={exportProgress}
            onImport={importProgress}
          />
        </>
      )}

      {phase === 'quiz' && current && (
        <Card className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge>{SUBJECT_MAP[current.subjectId]?.shortName ?? current.subjectId.toUpperCase()}</Badge>
              {mode === 'unit' && current.moduleId ? (
                <Badge tone="ink">{(MODULE_MAP[current.moduleId]?.title ?? '').replace(/^Module \d+ · /, '')}</Badge>
              ) : null}
              <span className="text-sm text-ink-400 dark:text-ink-500">
                Question {currentIndex + 1} / {questions.length}
              </span>
            </div>
            {mode === 'mock' ? (
              <div className="flex items-center gap-3">
                <span
                  className={cx(
                    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold tabular-nums',
                    secondsLeft < 60
                      ? 'bg-rose-500/10 text-rose-600 dark:text-rose-300'
                      : 'bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300',
                  )}
                >
                  <Timer className="h-4 w-4" />
                  {minutes}:{String(seconds).padStart(2, '0')}
                </span>
                <span className="text-sm text-ink-400 dark:text-ink-500">
                  {answeredCount} answered
                </span>
              </div>
            ) : (
              <div className="text-sm text-ink-400 dark:text-ink-500">
                Score: {correctFlags.filter(Boolean).length} / {currentIndex + (revealed ? 1 : 0)}
              </div>
            )}
          </div>

          {mode === 'mock' && (
            <div className="h-1 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-linear dark:bg-accent-300"
                style={{ width: `${(secondsLeft / MOCK_SECONDS) * 100}%` }}
              />
            </div>
          )}

          <h2 className="font-display text-xl leading-relaxed text-ink-950 dark:text-white sm:text-2xl">
            {current.question}
          </h2>

          <div className="grid gap-3">
            {current.options.map((option, idx) => {
              const mockPick = mode === 'mock' && answers[currentIndex] === idx;
              const isSelected = mode === 'mock' ? mockPick : selectedOption === idx;
              const isCorrect = idx === current.answerIndex;
              const showCorrect = mode !== 'mock' && revealed && isCorrect;
              const showWrong = mode !== 'mock' && revealed && isSelected && !isCorrect;

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={mode !== 'mock' && revealed}
                  onClick={() => {
                    if (mode === 'mock') {
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[currentIndex] = idx;
                        return next;
                      });
                    } else {
                      setSelectedOption(idx);
                    }
                  }}
                  className={cx(
                    'flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition',
                    revealed || mode === 'mock'
                      ? showCorrect
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-400/60 dark:bg-emerald-400/10 dark:text-emerald-100'
                        : showWrong
                          ? 'border-rose-400 bg-rose-50 text-rose-900 dark:border-rose-400/60 dark:bg-rose-400/10 dark:text-rose-100'
                          : isSelected
                            ? 'border-accent bg-accent/5 text-ink-950 dark:border-accent-300 dark:bg-accent-300/10 dark:text-white'
                            : 'border-ink-100 bg-white text-ink-400 opacity-70 dark:border-ink-800 dark:bg-ink-950/40 dark:text-ink-500'
                      : isSelected
                        ? 'border-accent bg-accent/5 text-ink-950 dark:border-accent-300 dark:bg-accent-300/10 dark:text-white'
                        : 'border-ink-100 bg-white text-ink-700 hover:border-accent/60 hover:text-ink-900 dark:border-ink-800 dark:bg-ink-950/60 dark:text-ink-200 dark:hover:border-accent-300/60 dark:hover:text-white',
                  )}
                >
                  <span
                    className={cx(
                      'mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-sm font-semibold',
                      showCorrect
                        ? 'border-emerald-500 text-emerald-600 dark:border-emerald-300 dark:text-emerald-200'
                        : showWrong
                          ? 'border-rose-500 text-rose-600 dark:border-rose-300 dark:text-rose-200'
                          : isSelected
                            ? 'border-accent text-accent dark:border-accent-300 dark:text-accent-200'
                            : 'border-ink-200 text-ink-400 dark:border-ink-700 dark:text-ink-500',
                    )}
                  >
                    {showCorrect ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : showWrong ? (
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

          {mode !== 'mock' && revealed && (
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
              {mode === 'mock' ? 'Abandon mock' : 'Back to setup'}
            </button>
            {mode === 'mock' ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={finishMock}
                  className="rounded-full border border-ink-100 px-4 py-2 text-sm font-medium text-ink-500 transition hover:text-ink-900 dark:border-ink-800 dark:text-ink-400 dark:hover:text-white"
                >
                  Finish early
                </button>
                <button
                  type="button"
                  onClick={nextMock}
                  disabled={answers[currentIndex] === null}
                  className={cx(
                    'inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition',
                    answers[currentIndex] === null
                      ? 'cursor-not-allowed bg-ink-100 text-ink-400 dark:bg-ink-800 dark:text-ink-500'
                      : 'bg-accent text-white shadow-glow hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200',
                  )}
                >
                  {currentIndex + 1 >= questions.length ? 'Submit paper' : 'Lock & next'}
                </button>
              </div>
            ) : !revealed ? (
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
                onClick={nextReveal}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
              >
                {currentIndex + 1 >= questions.length ? 'See results' : 'Next question'}
              </button>
            )}
          </div>
        </Card>
      )}

      {phase === 'result' && summary && (
        <div className="flex flex-col gap-6">
          <ResultHeadline summary={summary} streak={streak} />
          <BreakdownCard summary={summary} />
          {summary.weakest ? <WeakestCallout summary={summary} /> : null}
          {summary.mode === 'mock' ? <MockReview summary={summary} /> : null}
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
              onClick={() => (summary.mode === 'mock' ? startMock() : beginSession(questions, summary.mode))}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
            >
              {summary.mode === 'mock' ? 'Another mock' : 'Retry these questions'}
              <Brain className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Small building blocks ────────────────────────────────────────────── */

const chip = (active: boolean) =>
  cx(
    'rounded-full border px-3 py-1.5 text-xs font-medium transition',
    active
      ? 'border-accent bg-accent text-white dark:border-accent-300 dark:bg-accent-300 dark:text-ink-950'
      : 'border-ink-200 bg-white text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300 dark:hover:border-accent-300 dark:hover:text-accent-300',
  );

const startBtn = (enabled: boolean) =>
  cx(
    'inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition',
    enabled
      ? 'bg-accent text-white shadow-glow hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200'
      : 'cursor-not-allowed bg-ink-100 text-ink-400 dark:bg-ink-800 dark:text-ink-500',
  );

function ResultHeadline({ summary, streak }: { summary: Summary; streak: number }) {
  const modeLabel =
    summary.mode === 'mock'
      ? `Timed mock · ${Math.floor(summary.secondsUsed / 60)}m ${summary.secondsUsed % 60}s used`
      : summary.mode === 'retest'
        ? 'Retest round'
        : 'Unit quiz';
  return (
    <Card className="flex flex-col items-center gap-5 p-6 text-center sm:p-10">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-accent/10 text-accent dark:bg-accent-300/10 dark:text-accent-300">
        <Trophy className="h-7 w-7" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{modeLabel}</p>
        <h2 className="mt-2 font-display text-3xl text-ink-950 dark:text-white sm:text-4xl">
          {summary.percent >= 80 ? 'Great job!' : summary.percent >= 60 ? 'Good effort!' : 'Keep practicing!'}
        </h2>
        <p className="mt-2 text-base text-ink-500 dark:text-ink-300">
          You scored {summary.score} out of {summary.total} ({summary.percent}%)
        </p>
      </div>
      {streak > 0 ? (
        <Badge tone="mint" className="gap-1.5 py-1.5">
          <Flame className="h-3.5 w-3.5" />
          {streak}-day streak — come back tomorrow to keep it alive
        </Badge>
      ) : null}
    </Card>
  );
}

function BreakdownCard({ summary }: { summary: Summary }) {
  if (summary.perModule.length === 0) return null;
  return (
    <Card className="p-6">
      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-950 dark:text-white">
        <Layers className="h-4 w-4 text-accent" />
        Per-unit breakdown
      </h3>
      <div className="mt-4 space-y-3">
        {summary.perModule.map((m) => {
          const pct = Math.round((m.correct / m.total) * 100);
          const title = MODULE_MAP[m.moduleId]?.title ?? m.moduleId;
          const short = SUBJECT_MAP[MODULE_MAP[m.moduleId]?.subjectId ?? '']?.shortName;
          return (
            <div key={m.moduleId}>
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-ink-700 dark:text-ink-200">
                  {title.replace(/^Module \d+ · /, '')}
                  {short ? <span className="ml-1.5 font-medium text-ink-400">{short}</span> : null}
                </span>
                <span className={cx('font-semibold tabular-nums', pct >= 50 ? 'text-ink-500 dark:text-ink-400' : 'text-rose-500')}>
                  {m.correct}/{m.total}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                <div
                  className={cx('h-full rounded-full', pct >= 50 ? 'bg-accent dark:bg-accent-300' : 'bg-rose-400')}
                  style={{ width: `${Math.max(pct, 4)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function WeakestCallout({ summary }: { summary: Summary }) {
  const weak = summary.weakest!;
  const meta = MODULE_MAP[weak.moduleId];
  const subjectId = meta?.subjectId;
  return (
    <Card className="border-rose-300/50 bg-rose-500/5 p-6 dark:border-rose-400/30 dark:bg-rose-400/10">
      <p className="text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-300">
        Weakest module
      </p>
      <p className="mt-1 font-display text-lg font-bold text-ink-950 dark:text-white">
        {meta?.title ?? weak.moduleId} · {weak.correct}/{weak.total}
      </p>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
        This unit cost you the most. Fix it before the exam — notes first, then real paper questions.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {subjectId ? (
          <Link
            to={`/subject/${subjectId}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3.5 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
          >
            Review the notes
          </Link>
        ) : null}
        {subjectId ? (
          <Link
            to={`/papers?subject=${subjectId}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
          >
            Its PYQs
          </Link>
        ) : null}
      </div>
    </Card>
  );
}

function MockReview({ summary }: { summary: Summary }) {
  return (
    <Card className="p-6">
      <h3 className="font-display text-lg font-bold text-ink-950 dark:text-white">Answer review</h3>
      <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">
        Every question, your pick vs the correct answer — the explanations are what you take into the exam hall.
      </p>
      <div className="mt-4 space-y-2">
        {summary.questions.map((question, i) => {
          const pick = summary.answers[i];
          const ok = pick === question.answerIndex;
          return (
            <details
              key={question.id}
              className={cx(
                'group rounded-xl border px-4 py-3',
                ok
                  ? 'border-ink-100 bg-white/60 dark:border-ink-800 dark:bg-ink-900/40'
                  : 'border-rose-200 bg-rose-50/50 dark:border-rose-400/30 dark:bg-rose-400/5',
              )}
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-ink-800 [&::-webkit-details-marker]:hidden dark:text-ink-200">
                <span className="mr-2 tabular-nums text-ink-400">{i + 1}.</span>
                {ok ? '✓' : '✗'} {question.question}
              </summary>
              <div className="mt-2 space-y-1 border-t border-ink-100 pt-2 text-xs leading-relaxed dark:border-ink-800">
                <p className={ok ? 'text-ink-500 dark:text-ink-400' : 'text-rose-600 dark:text-rose-300'}>
                  Your answer: {pick !== null ? question.options[pick] : 'not answered'}
                </p>
                {!ok ? (
                  <p className="text-emerald-700 dark:text-emerald-300">
                    Correct: {question.options[question.answerIndex]}
                  </p>
                ) : null}
                <p className="text-ink-500 dark:text-ink-400">{question.explanation}</p>
              </div>
            </details>
          );
        })}
      </div>
    </Card>
  );
}

function ProgressCard({
  attempts,
  streak,
  readCount,
  importMsg,
  onExport,
  onImport,
}: {
  attempts: number;
  streak: number;
  readCount: number;
  importMsg: string;
  onExport: () => void;
  onImport: (file: File) => void | Promise<void>;
}) {
  return (
    <Card className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold text-ink-950 dark:text-white">Your progress</h3>
          <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">
            {attempts} quiz attempt{attempts === 1 ? '' : 's'} · {streak}-day streak · {readCount} topics marked read
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onExport}
            disabled={attempts === 0 && readCount === 0}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition',
              attempts === 0 && readCount === 0
                ? 'cursor-not-allowed border border-ink-100 text-ink-300 dark:border-ink-800 dark:text-ink-600'
                : 'border border-ink-200 bg-white text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
            )}
          >
            <Download className="h-3.5 w-3.5" />
            Export
          </button>
          <label
            className={cx(
              'inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition',
              'border border-ink-200 bg-white text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
            )}
          >
            <Upload className="h-3.5 w-3.5" />
            Import
            <input
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onImport(file);
                e.target.value = '';
              }}
            />
          </label>
        </div>
      </div>
      <p className={cx('mt-3 text-[11px] leading-relaxed', importMsg && !importMsg.startsWith('Imported') ? 'text-rose-500' : 'text-ink-400 dark:text-ink-500')}>
        {importMsg || 'Progress lives in this browser only — export a JSON file to carry it to another device (no accounts here, by design).'}
      </p>
    </Card>
  );
}
