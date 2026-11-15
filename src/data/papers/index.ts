import type { Paper } from '../../types';
import { PAPERS_2023 } from './2023';
import { PAPERS_2024 } from './2024';

/** All indexed papers — newest year first. Add future years to the spread. */
export const PAPERS: Paper[] = [...PAPERS_2024, ...PAPERS_2023];

/** Distinct exam years present in the bank, newest first (filter chips). */
export const PAPER_YEARS: number[] = [...new Set(PAPERS.map((p) => p.year))].sort(
  (a, b) => b - a,
);

export const getPapersBySubject = (subjectId: string): Paper[] =>
  PAPERS.filter((p) => p.subjectId === subjectId);

export const PAPERS_VERIFIED_COUNT = PAPERS.filter((p) => p.verified).length;
