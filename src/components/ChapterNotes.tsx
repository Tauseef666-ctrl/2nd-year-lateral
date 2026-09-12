import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, NotebookPen } from 'lucide-react';
import { CHAPTER_NOTES } from '../data/chapterNotes';
import type { NoteSection } from '../types';

function renderInline(text: string): ReactNode {
  const parts = text.split('**');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-ink-950 dark:text-white">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function SectionBlock({ section }: { section: NoteSection }) {
  return (
    <div>
      <h4 className="mb-1.5 text-sm font-bold text-accent dark:text-accent-300">{section.h}</h4>
      <ul className="space-y-1">
        {section.items.map((it, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            <span className="mt-0.5 shrink-0 text-mint-500">•</span>
            <span>{renderInline(it)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChapterNotes({
  subjectId,
  moduleId,
  defaultOpen = false,
}: {
  subjectId: string;
  moduleId: string;
  defaultOpen?: boolean;
}) {
  const note = useMemo(
    () => CHAPTER_NOTES[subjectId]?.find((n) => n.moduleId === moduleId),
    [subjectId, moduleId],
  );
  const [open, setOpen] = useState(defaultOpen);

  if (!note) return null;

  return (
    <div id="chapter-notes" className="space-y-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 rounded-2xl border border-ink-100 bg-white p-4 text-left transition hover:border-accent dark:border-ink-800 dark:bg-ink-900"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
            <NotebookPen className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-sm font-bold text-ink-950 dark:text-white">Chapter notes</p>
            <p className="text-xs font-medium text-ink-400">
              {note.sections.length} sections · full {note.title.replace(/.*?·\s*/, '')} coverage
            </p>
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 text-ink-400 transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open ? (
        <div className="grid gap-4 rounded-2xl border border-ink-100 bg-white p-5 sm:grid-cols-2 dark:border-ink-800 dark:bg-ink-900">
          {note.sections.map((s) => (
            <SectionBlock key={s.h} section={s} />
          ))}
        </div>
      ) : null}
    </div>
  );
}