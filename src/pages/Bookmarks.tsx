import { Link } from 'react-router-dom';
import { ArrowRight, Bookmark as BookmarkIcon, Trash2 } from 'lucide-react';
import { FLAT_TOPICS, getSubject } from '../data/curriculum';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, EmptyState, PageHeader } from '../components/ui';

export default function Bookmarks() {
  const bookmarks = useLearningStore((s) => s.bookmarks);
  const completed = useLearningStore((s) => s.completed);
  const toggleBookmark = useLearningStore((s) => s.toggleBookmark);

  const items = FLAT_TOPICS.filter((t) => bookmarks.includes(t.id));

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Saved"
        title="Bookmarks"
        subtitle={`${items.length} saved topic${items.length === 1 ? '' : 's'} for quick return.`}
      />

      {items.length === 0 ? (
        <EmptyState
          icon={<BookmarkIcon className="h-6 w-6" />}
          title="No bookmarks yet"
          body="Hit the Save button on any topic page and it will appear here for fast access."
          action={
            <Link
              to="/search"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-600"
            >
              Find a topic
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
      ) : (
        <div className="space-y-2.5">
          {items.map((t) => {
            const s = getSubject(t.subjectId);
            const isDone = completed.includes(t.id);
            return (
              <Card key={t.id} className="flex items-center gap-3 p-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {s ? <Badge tone="accent">{s.shortName}</Badge> : null}
                    <Badge tone="ink">{t.marks} marks</Badge>
                    {isDone ? <Badge tone="mint">Completed</Badge> : null}
                  </div>
                  <Link
                    to={`/topic/${t.id}`}
                    className="mt-1.5 block truncate text-sm font-semibold text-ink-900 transition hover:text-accent dark:text-ink-100"
                  >
                    {t.title}
                  </Link>
                  <p className="mt-0.5 line-clamp-1 text-xs text-ink-500 dark:text-ink-400">
                    {t.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    to={`/topic/${t.id}`}
                    className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent transition hover:bg-accent hover:text-white dark:bg-accent/15"
                    aria-label="Open topic"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleBookmark(t.id)}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-ink-200 text-ink-400 transition hover:border-red-300 hover:text-red-500 dark:border-ink-700"
                    aria-label="Remove bookmark"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}