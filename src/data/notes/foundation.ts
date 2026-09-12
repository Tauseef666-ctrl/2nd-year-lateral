import type { ChapterNote } from '../../types';
import { PHYSICS1_NOTES } from './physics1';
import { CHEM1_NOTES } from './chem1';
import { COMM1_NOTES } from './comm1';
import { MATH1_NOTES } from './math1';

export const FOUNDATION_NOTES: Record<string, ChapterNote[]> = {
  math1: MATH1_NOTES,
  physics1: PHYSICS1_NOTES,
  chem1: CHEM1_NOTES,
  comm1: COMM1_NOTES,
};