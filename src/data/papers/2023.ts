import type { Paper } from '../../types';

/**
 * BTEUP previous-year question papers — 2023.
 *
 * Add entries as PDFs are collected and verified against the official scheme
 * (ADR-3): files live in `public/papers/<year>/` (≤ ~8 MB each; oversized
 * scans go to a GitHub Release asset — store only the URL here).
 *
 * Entry shape (keep ids stable — they are referenced by the store and search):
 * {
 *   id: '2023-odd-s3-os',
 *   year: 2023,
 *   session: 'odd',
 *   semester: 3,
 *   subjectId: 'os',
 *   kind: 'regular',
 *   fileUrl: '/papers/2023/2023-odd-s3-os.pdf',
 *   pages: 4,
 *   sizeKb: 620,
 *   source: 'official',
 *   verified: true,          // ← only after checking it against the scheme
 * }
 */
export const PAPERS_2023: Paper[] = [];
