import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { QuizAttemptRecord } from '../types';

/** Cap the persisted quiz history so the storage blob can never grow unbounded. */
const MAX_QUIZ_ATTEMPTS = 200;

interface LearningState {
  theme: 'light' | 'dark';
  /** moduleId → read (module ids are subject-prefixed, so globally unique). */
  readModules: Record<string, true>;
  /** Completed quiz sessions, newest first (Phase 3 wires the UI). */
  quizAttempts: QuizAttemptRecord[];
  /** paperId → open count (papers page lands in Phase 1). */
  papersOpened: Record<string, number>;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setModuleRead: (moduleId: string, read: boolean) => void;
  recordQuizAttempt: (attempt: QuizAttemptRecord) => void;
  recordPaperOpen: (paperId: string) => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      theme: 'dark',
      readModules: {},
      quizAttempts: [],
      papersOpened: {},
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      setModuleRead: (moduleId, read) =>
        set((s) => {
          const next = { ...s.readModules };
          if (read) next[moduleId] = true;
          else delete next[moduleId];
          return { readModules: next };
        }),
      recordQuizAttempt: (attempt) =>
        set((s) => ({
          quizAttempts: [attempt, ...s.quizAttempts].slice(0, MAX_QUIZ_ATTEMPTS),
        })),
      recordPaperOpen: (paperId) =>
        set((s) => ({
          papersOpened: { ...s.papersOpened, [paperId]: (s.papersOpened[paperId] ?? 0) + 1 },
        })),
    }),
    // Persist key contract: the pre-React theme boot in index.html reads
    // `bteup-library-storage` → `state.theme`. Do NOT rename.
    { name: 'bteup-library-storage' },
  ),
);

/* ───────────── One-time migration of legacy "mark as read" ticks ───────────── */

const LEGACY_PREFIX = 'bteup-note-progress:';

/**
 * Before TODO 0.1, chapter "mark as read" ticks were stored as raw localStorage
 * keys (`bteup-note-progress:<subjectId>:<moduleId>`) instead of the persisted
 * store. Import any leftover ticks into `readModules`, then drop the legacy keys.
 * Called once before React renders (src/main.tsx).
 */
export function migrateLegacyNoteProgress() {
  try {
    const legacyKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(LEGACY_PREFIX)) legacyKeys.push(key);
    }
    if (legacyKeys.length === 0) return;

    const readModules = { ...useLearningStore.getState().readModules };
    for (const key of legacyKeys) {
      // Key shape: `bteup-note-progress:<subjectId>:<moduleId>` — strip the
      // subjectId (module ids themselves contain no colons).
      const moduleId = key.slice(LEGACY_PREFIX.length).split(':').slice(1).join(':');
      readModules[moduleId] = true;
      localStorage.removeItem(key);
    }
    useLearningStore.setState({ readModules });
  } catch {
    /* storage unavailable — nothing to migrate */
  }
}
