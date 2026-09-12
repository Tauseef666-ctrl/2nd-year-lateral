import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Globe,
  NotebookPen,
  Youtube,
} from 'lucide-react';
import { Badge, Card, EmptyState, PageHeader, SourceNote, cx } from '../components/ui';
import { FLAT_TOPICS, getSubject } from '../data/curriculum';
import type { StudyNote } from '../types';

const NOTE_META: Record<StudyNote['format'], { label: string; icon: ReactNode }> = {
  notes: { label: 'Notes', icon: <NotebookPen className="h-4 w-4" /> },
  pdf: { label: 'PDF', icon: <FileText className="h-4 w-4" /> },
  website: { label: 'Website', icon: <Globe className="h-4 w-4" /> },
  youtube: { label: 'Video', icon: <Youtube className="h-4 w-4" /> },
};

export default function Notes() {
  const [subjectId, setSubjectId] = useState('');
  const [format, setFormat] = useState<'all' | StudyNote['format']>('all');

  const rows = useMemo(
    () =>
      FLAT_TOPICS.map((t) => ({
        topic: t,
        notes: t.notes ?? [],
      })).filter((r) => r.notes.length > 0),
    [],
  );

  const subjectIds = [...new Set(rows.map((r) => r.topic.subjectId))];
  const filtered = rows.filter(
    (r) =>
      (!subjectId || r.topic.subjectId === subjectId) &&
      (format === 'all' || r.notes.some((n) => n.format === format)),
  );

  const totalNotes = rows.reduce((n, r) => n + r.notes.length, 0);

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Study material"
        title="Notes Library"
        subtitle="Reviewed official PDFs and supplementary notes for every chapter — curated, not scraped."
      >
        <div className="inline-flex items-center gap-1.5 self-end rounded-xl bg-mint-500/10 px-3 py-1.5 text-xs font-bold text-mint-600 dark:text-mint-400">
          <NotebookPen className="h-3.5 w-3.5" />
          {totalNotes} notes
        </div>
      </PageHeader>
      <SourceNote />

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSubjectId('')}
          className={cx(
            'rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition',
            subjectId === ''
              ? 'border-accent bg-accent text-white'
              : 'border-ink-200 text-ink-500 hover:border-accent dark:border-ink-700 dark:text-ink-300',
          )}
        >
          All subjects
        </button>
        {subjectIds.map((sid) => {
          const s = getSubject(sid);
          const isActive = subjectId === sid;
          return (
            <button
              key={sid}
              type="button"
              onClick={() => setSubjectId(isActive ? '' : sid)}
              className={cx(
                'rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition',
                isActive
                  ? 'border-accent bg-accent text-white'
                  : 'border-ink-200 text-ink-500 hover:border-accent dark:border-ink-700 dark:text-ink-300',
              )}
            >
              {s?.shortName ?? sid}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-ink-400">Format:</span>
        {(['all', 'pdf', 'notes', 'website', 'youtube'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFormat(f)}
            className={cx(
              'rounded-lg border px-2.5 py-1 text-xs font-semibold capitalize transition',
              format === f
                ? 'border-accent bg-accent text-white'
                : 'border-ink-200 text-ink-500 hover:border-accent dark:border-ink-700 dark:text-ink-300',
            )}
          >
            {f === 'all' ? 'All' : NOTE_META[f].label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<NotebookPen className="h-5 w-5" />}
          title="No notes match these filters"
          body="Try another subject or format."
        />
      ) : (
        filtered.map(({ topic, notes }) => {
          const s = getSubject(topic.subjectId);
          return (
            <Card key={topic.id} className="overflow-hidden">
              <div className="border-b border-ink-100 bg-ink-50/60 px-5 py-3.5 dark:border-ink-800 dark:bg-ink-800/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <NotebookPen className="h-4 w-4 text-accent" />
                    <h3 className="font-display text-sm font-bold text-ink-900 dark:text-ink-100">
                      {topic.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge tone="ink">
                      {s ? `${s.shortName} · Semester ${s.semester}` : topic.subjectId}
                    </Badge>
                    <span className="text-xs font-medium text-ink-400">{notes.length} note{notes.length === 1 ? '' : 's'}</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {notes.map((note) => {
                  const meta = NOTE_META[note.format];
                  return (
                    <a
                      key={note.id}
                      href={note.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-4 transition hover:border-accent hover:shadow-cardHover dark:border-ink-800 dark:bg-ink-900"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
                          {meta.icon}
                        </span>
                        <Badge tone={note.source === 'official' ? 'accent' : 'ink'}>
                          {note.source === 'official' ? 'Official' : 'Supplementary'}
                        </Badge>
                      </div>
                      <p className="mt-3 font-display text-sm font-bold leading-snug text-ink-900 dark:text-ink-100">
                        {note.title}
                      </p>
                      <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                        {note.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent dark:text-accent-300">
                        {meta.label}
                        <ExternalLink className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="border-t border-ink-100 px-5 py-2.5 dark:border-ink-800">
                <Link
                  to={`/topic/${topic.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent transition hover:gap-2 dark:text-accent-300"
                >
                  Chapter resources &amp; practice
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Card>
          );
        })
      )}
    </section>
  );
}