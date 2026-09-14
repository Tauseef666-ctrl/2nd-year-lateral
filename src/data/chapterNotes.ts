import type { ChapterNote } from '../types';
import { SEMESTER_3_NOTES } from './notes/sem3';
import { SEMESTER_4_NOTES } from './notes/sem4';
import { SEMESTER_5_NOTES } from './notes/sem5';
import { SEMESTER_6_NOTES } from './notes/sem6';
import { FOUNDATION_NOTES } from './notes/foundation';

export const CHAPTER_NOTES: Record<string, ChapterNote[]> = {
  ...FOUNDATION_NOTES,
  ...SEMESTER_3_NOTES,
  ...SEMESTER_4_NOTES,
  ...SEMESTER_5_NOTES,
  ...SEMESTER_6_NOTES,
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