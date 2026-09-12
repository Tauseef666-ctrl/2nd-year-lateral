import type { ChapterNote } from '../types';
import { SEMESTER_3_NOTES } from './notes/sem3';
import { SEMESTER_4_NOTES } from './notes/sem4';
import { FOUNDATION_NOTES } from './notes/foundation';

export const CHAPTER_NOTES: Record<string, ChapterNote[]> = {
  ...FOUNDATION_NOTES,
  ...SEMESTER_3_NOTES,
  ...SEMESTER_4_NOTES,
};

export const TOTAL_CHAPTER_NOTES = Object.values(CHAPTER_NOTES).reduce(
  (n, arr) => n + arr.length,
  0,
);

export const getChapterNote = (
  subjectId: string,
  moduleId?: string,
): ChapterNote | undefined =>
  moduleId ? CHAPTER_NOTES[subjectId]?.find((n) => n.moduleId === moduleId) : undefined;