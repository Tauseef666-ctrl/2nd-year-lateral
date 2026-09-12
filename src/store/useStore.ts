import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface LastPosition {
  subjectId: string;
  topicId: string;
}

interface LearningState {
  theme: 'light' | 'dark';
  completed: string[];
  bookmarks: string[];
  watched: string[];
  last: LastPosition | null;
  projectSteps: string[];
  certifications: string[];
  quizzes: string[];
  notes: Record<string, string>;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setLast: (position: LastPosition) => void;
  toggleComplete: (topicId: string) => void;
  toggleBookmark: (topicId: string) => void;
  toggleWatched: (resourceId: string) => void;
  toggleProjectStep: (stepId: string) => void;
  toggleCertification: (certId: string) => void;
  markQuizDone: (quizId: string) => void;
  setNote: (topicId: string, text: string) => void;
  resetProgress: () => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      theme: 'dark',
      completed: [],
      bookmarks: [],
      watched: [],
      last: null,
      projectSteps: [],
      certifications: [],
      quizzes: [],
      notes: {},
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      setLast: (last) => set({ last }),
      toggleComplete: (topicId) =>
        set((s) => ({
          completed: s.completed.includes(topicId)
            ? s.completed.filter((x) => x !== topicId)
            : [...s.completed, topicId],
        })),
      toggleBookmark: (topicId) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(topicId)
            ? s.bookmarks.filter((x) => x !== topicId)
            : [...s.bookmarks, topicId],
        })),
      toggleWatched: (resourceId) =>
        set((s) => ({
          watched: s.watched.includes(resourceId)
            ? s.watched.filter((x) => x !== resourceId)
            : [...s.watched, resourceId],
        })),
      toggleProjectStep: (stepId) =>
        set((s) => ({
          projectSteps: s.projectSteps.includes(stepId)
            ? s.projectSteps.filter((x) => x !== stepId)
            : [...s.projectSteps, stepId],
        })),
      toggleCertification: (certId) =>
        set((s) => ({
          certifications: s.certifications.includes(certId)
            ? s.certifications.filter((x) => x !== certId)
            : [...s.certifications, certId],
        })),
      markQuizDone: (quizId) =>
        set((s) => ({
          quizzes: s.quizzes.includes(quizId) ? s.quizzes : [...s.quizzes, quizId],
        })),
      setNote: (topicId, text) => set((s) => ({ notes: { ...s.notes, [topicId]: text } })),
      resetProgress: () =>
        set({ completed: [], bookmarks: [], watched: [], last: null, projectSteps: [], certifications: [], quizzes: [] }),
    }),
    { name: 'bteup-learn-storage' },
  ),
);