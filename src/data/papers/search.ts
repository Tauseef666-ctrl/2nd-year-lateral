import type { Paper, PaperQuestion } from '../../types';
import { PAPERS } from './index';

/**
 * Paper search (TODO 1.6). Extracted question text ships as separate JSON
 * chunks (`extractedTextUrl`) and is fetched at runtime — never bundled —
 * per the bundle-bloat mitigation in the plan (§12).
 */

const textCache = new Map<string, PaperQuestion[]>();

async function getPaperQuestions(
  paperId: string,
  extractedTextUrl: string,
): Promise<PaperQuestion[]> {
  const cached = textCache.get(paperId);
  if (cached) return cached;
  try {
    const res = await fetch(extractedTextUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as PaperQuestion[];
    textCache.set(paperId, data);
    return data;
  } catch {
    // Missing or broken chunk — treat as no text, don't poison future tries.
    textCache.delete(paperId);
    return [];
  }
}

export interface PaperHit {
  paper: Paper;
  question: PaperQuestion;
}

/** Search extracted paper questions; empty until Phase 1.5 text lands. */
export async function searchPapers(q: string): Promise<PaperHit[]> {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  const withText = PAPERS.filter((p) => p.extractedTextUrl);
  const perPaper = await Promise.all(
    withText.map(async (paper) => {
      const questions = await getPaperQuestions(paper.id, paper.extractedTextUrl!);
      return questions
        .filter((question) => question.text.toLowerCase().includes(needle))
        .map((question) => ({ paper, question }));
    }),
  );
  return perPaper.flat();
}
