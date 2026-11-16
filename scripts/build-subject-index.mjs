/**
 * Builds scripts/generated/subject-index.json — the validation list for the
 * Telegram paper inbox (TODO 1.11).
 *
 * Reads the semester data files as TEXT and regex-extracts subject-level
 * `id`/`code`/`shortName`. We deliberately do NOT import the data modules:
 * their `./yt` value imports are extensionless (fine for Vite, rejected by
 * native Node ESM), and subject ids sit immediately before a `code:` line —
 * module/topic ids do not, which makes the anchor reliable.
 *
 * Runs inside telegram-inbox.yml right before the inbox script. Not needed
 * by the app itself.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const FILES = [
  { file: 'src/data/foundation.ts', semester: 1, exportName: 'FOUNDATION_SUBJECTS' },
  { file: 'src/data/semester3.ts', semester: 3, exportName: 'SEMESTER_3_SUBJECTS' },
  { file: 'src/data/semester4.ts', semester: 4, exportName: 'SEMESTER_4_SUBJECTS' },
  { file: 'src/data/semester5.ts', semester: 5, exportName: 'SEMESTER_5_SUBJECTS' },
  { file: 'src/data/semester6.ts', semester: 6, exportName: 'SEMESTER_6_SUBJECTS' },
];

/** Subject objects are identifiable by `id:` immediately followed by `code:`.
 *  Module/topic ids are never followed by `code:`, so this anchor is safe. */
const SUBJECT_RE =
  /id:\s*'([^']+)',\s*\n\s*code:\s*'([^']+)',[\s\S]{0,2000}?shortName:\s*'((?:[^'\\]|\\.)*)'/g;

const subjects = [];
for (const { file, semester } of FILES) {
  const text = readFileSync(join(root, file), 'utf8');
  let match;
  while ((match = SUBJECT_RE.exec(text)) !== null) {
    const [, id, code, shortNameRaw] = match;
    subjects.push({
      id,
      code,
      shortName: shortNameRaw.replace(/\\'/g, "'"),
      semester,
    });
  }
}

if (subjects.length === 0) {
  console.error('[subject-index] extracted 0 subjects — data shape changed? Aborting.');
  process.exit(1);
}

mkdirSync(join(root, 'scripts', 'generated'), { recursive: true });
writeFileSync(
  join(root, 'scripts', 'generated', 'subject-index.json'),
  `${JSON.stringify(subjects, null, 2)}\n`,
);
console.log(`[subject-index] wrote ${subjects.length} subjects across ${FILES.length} files`);
