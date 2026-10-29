import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, Download, NotebookPen } from 'lucide-react';
import { CHAPTER_NOTES } from '../data/chapterNotes';
import type { ChapterNote, NoteSection } from '../types';
import { PrintPortal, cx } from './ui';

export function renderInline(text: string): ReactNode {
  const parts = text.split('**');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-ink-950 print:text-black">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/* ───────────────────── Print document pieces ───────────────────── */

function PrintBlocks({ note }: { note: ChapterNote }) {
  return (
    <>
      {note.sections.map((s) => (
        <section key={s.h} className="print-block">
          <h3>{s.h}</h3>
          <ul>
            {s.items.map((it, i) => (
              <li key={i}>{it.replace(/\*\*/g, '')}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

export function PrintDocHeader({ title, meta }: { title: string; meta: string }) {
  return (
    <header className="print-doc-header">
      <p className="print-doc-brand">BTEUP CSE Learning Hub · bteup-cse-hub</p>
      <h2>{title}</h2>
      <p>{meta}</p>
      <hr />
    </header>
  );
}

/* ───────────────────── Single chapter accordion ───────────────────── */

function SectionCard({ section }: { section: NoteSection }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="overflow-hidden rounded-xl border border-ink-100 bg-white/60 dark:border-ink-800 dark:bg-ink-900/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left"
      >
        <span className="text-sm font-bold text-accent dark:text-accent-300">{section.h}</span>
        <ChevronDown
          className={cx('h-4 w-4 shrink-0 text-ink-400 transition-transform', open ? 'rotate-180' : '')}
        />
      </button>
      <div
        className={cx(
          'grid transition-all duration-300 ease-in-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1.5 px-4 pb-3.5">
            {section.items.map((it, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                <span className="mt-0.5 shrink-0 text-mint-500">•</span>
                <span>{renderInline(it)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const PROGRESS_KEY = (sid: string, moduleId: string) => `bteup-note-progress:${sid}:${moduleId}`;

function readProgress(sid: string, moduleId: string): boolean {
  try {
    return localStorage.getItem(PROGRESS_KEY(sid, moduleId)) === 'done';
  } catch {
    return false;
  }
}

function writeProgress(sid: string, moduleId: string, done: boolean) {
  try {
    if (done) localStorage.setItem(PROGRESS_KEY(sid, moduleId), 'done');
    else localStorage.removeItem(PROGRESS_KEY(sid, moduleId));
  } catch {
    /* storage unavailable — ticks stay session-only */
  }
}

export function ChapterNotes({
  subjectId,
  moduleId,
  subjectName,
  defaultOpen = false,
}: {
  subjectId: string;
  moduleId: string;
  subjectName?: string;
  defaultOpen?: boolean;
}) {
  const note = useMemo(
    () => CHAPTER_NOTES[subjectId]?.find((n) => n.moduleId === moduleId),
    [subjectId, moduleId],
  );
  const [open, setOpen] = useState(defaultOpen);
  const [done, setDone] = useState(() => readProgress(subjectId, moduleId));
  const [printAt, setPrintAt] = useState(0);

  if (!note) return null;

  const shortTitle = note.title.replace(/.*?·\s*/, '');

  return (
    <div id="chapter-notes" className="space-y-3">
      <div
        className={cx(
          'flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 transition',
          done
            ? 'border-mint-400/60 bg-mint-500/10'
            : 'border-ink-100 bg-white hover:border-accent dark:border-ink-800 dark:bg-ink-900',
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex flex-1 items-center gap-3 text-left"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
            <NotebookPen className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-2 font-display text-sm font-bold text-ink-950 dark:text-white">
              Chapter notes
              {done ? <span className="text-xs font-bold text-mint-500">✓ done</span> : null}
            </span>
            <span className="text-xs font-medium text-ink-400">
              {note.sections.length} sections · full {shortTitle} coverage
            </span>
          </span>
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const next = !done;
              setDone(next);
              writeProgress(subjectId, moduleId, next);
            }}
            className={cx(
              'rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold transition',
              done
                ? 'border-mint-400 bg-mint-500/15 text-mint-700 dark:text-mint-300'
                : 'border-ink-200 text-ink-500 hover:border-mint-400 hover:text-mint-600 dark:border-ink-700 dark:text-ink-300',
            )}
          >
            {done ? '✓ Read' : 'Mark read'}
          </button>
          <button
            type="button"
            onClick={() => setPrintAt(Date.now())}
            title="Opens the print dialog — choose “Save as PDF”"
            className="inline-flex items-center gap-1 rounded-lg border border-ink-200 px-2.5 py-1.5 text-[11px] font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
          >
            <Download className="h-3 w-3" />
            PDF
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle chapter notes"
            className="grid h-7 w-7 place-items-center rounded-lg text-ink-400 transition hover:text-accent"
          >
            <ChevronDown className={cx('h-4 w-4 transition-transform', open ? 'rotate-180' : '')} />
          </button>
        </div>
      </div>

      <div
        className={cx(
          'grid transition-all duration-300 ease-in-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-2.5 rounded-2xl border border-ink-100 bg-white/50 p-4 dark:border-ink-800 dark:bg-ink-900/40">
            {note.sections.map((s) => (
              <SectionCard key={s.h} section={s} />
            ))}
            <p className="pt-1 text-[11px] leading-relaxed text-ink-400">
              Tip — tap <strong className="font-semibold text-ink-500">PDF</strong> to save this
              chapter as a PDF, or <strong className="font-semibold text-ink-500">Mark read</strong>{' '}
              to tick it off your revision list (saved on this device).
            </p>
          </div>
        </div>
      </div>

      <PrintPortal askedAt={printAt} onDone={() => setPrintAt(0)}>
        <PrintDocHeader
          title={`Chapter notes — ${shortTitle}`}
          meta={`${subjectName ?? subjectId} · ${note.sections.length} sections · BTEUP lateral-entry diploma`}
        />
        <PrintBlocks note={note} />
        <footer className="print-doc-footer">
          Generated from BTEUP CSE Learning Hub · {new Date().toLocaleDateString()}
        </footer>
      </PrintPortal>
    </div>
  );
}

/* ───────────────── Whole-subject printable (all chapters) ───────────────── */

export function SubjectNotesPrintButton({
  subjectId,
  subjectName,
  semester,
  className,
}: {
  subjectId: string;
  subjectName: string;
  semester: string;
  className?: string;
}) {
  const notes = CHAPTER_NOTES[subjectId] ?? [];
  const [printAt, setPrintAt] = useState(0);
  if (notes.length === 0) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setPrintAt(Date.now())}
        className={cx(
          'inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300',
          className,
        )}
      >
        <Download className="h-4 w-4" />
        Save all {notes.length} chapters as PDF
      </button>

      <PrintPortal askedAt={printAt} onDone={() => setPrintAt(0)}>
        {notes.map((n, i) => (
          <section key={n.moduleId} className="print-sheet">
            <PrintDocHeader
              title={`Chapter notes — ${n.title.replace(/.*?·\s*/, '')}`}
              meta={`${subjectName} · ${semester} · chapter ${i + 1} of ${notes.length}`}
            />
            <PrintBlocks note={n} />
            <footer className="print-doc-footer">
              Generated from BTEUP CSE Learning Hub · {new Date().toLocaleDateString()}
            </footer>
          </section>
        ))}
      </PrintPortal>
    </>
  );
}