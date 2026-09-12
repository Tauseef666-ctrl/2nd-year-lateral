import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search as SearchIcon, Sparkles } from 'lucide-react';
import { ALL_SUBJECTS, FLAT_TOPICS, searchResourceText } from '../data/curriculum';
import { Badge, Card, EmptyState, PageHeader, cx } from '../components/ui';

const SUGGESTIONS = [
  'Deadlock',
  'Normalisation',
  'Sorting algorithms',
  'TCP/IP',
  'Recursion',
  'SQL Joins',
  'Scheduling',
  'Linked list',
];

export default function Search() {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => (q.trim() ? searchResourceText(q) : []), [q]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof FLAT_TOPICS>();
    for (const t of results) {
      const list = map.get(t.subjectId) ?? [];
      list.push(t);
      map.set(t.subjectId, list);
    }
    return map;
  }, [results]);

  const focusInput = () => inputRef.current?.focus();

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Explore"
        title="Search"
        subtitle="Search every topic, subtopic and YouTube resource across the whole syllabus."
      />

      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="e.g. deadlock, normalisation, sorting, SQL joins…"
          autoFocus
          className="w-full rounded-2xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 shadow-card outline-none transition placeholder:text-ink-400 focus:border-accent focus:shadow-glow dark:border-ink-700 dark:bg-ink-900 dark:text-white"
        />
      </div>

      {!q.trim() ? (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">
              Try
            </span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQ(s)}
                className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
              >
                {s}
              </button>
            ))}
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-bold text-ink-950 dark:text-white">
              Browse by subject
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_SUBJECTS.map((s) => (
                <Link key={s.id} to={`/subject/${s.id}`} className="group block">
                  <Card className="flex items-center gap-3 p-4 transition hover:shadow-cardHover">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink-900 dark:text-ink-100">
                        {s.shortName}
                      </p>
                      <p className="text-xs text-ink-400">
                        Sem {s.semester} · {s.code}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-accent" />
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : results.length === 0 ? (
        <EmptyState
          icon={<SearchIcon className="h-6 w-6" />}
          title={`Nothing found for “${q}”`}
          body="Try a broader term, or search a topic you remember from the classroom."
        />
      ) : (
        <p className="text-xs font-medium text-ink-400">
          {results.length} result{results.length === 1 ? '' : 's'} for “{q}”
        </p>
      )}

      {q.trim() && results.length > 0 ? (
        <div className="space-y-8">
          {[...grouped.entries()].map(([sid, topics]) => {
            const s = ALL_SUBJECTS.find((x) => x.id === sid);
            return (
              <div key={sid}>
                <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-ink-950 dark:text-white">
                  <Sparkles className="h-4 w-4 text-accent" />
                  {s?.shortName ?? sid}
                  <span className="text-xs font-medium text-ink-400">
                    Sem {s?.semester ?? ''} · {topics.length}
                  </span>
                </h2>
                <div className="space-y-2.5">
                  {topics.map((t) => (
                    <Link key={t.id} to={`/topic/${t.id}`} onClick={focusInput} className="group block">
                      <Card
                        className={cx(
                          'flex items-center gap-3 p-4 transition hover:shadow-cardHover',
                        )}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-ink-900 transition group-hover:text-accent dark:text-ink-100">
                            {t.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                            {t.description}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            <Badge tone="ink">{t.marks} marks</Badge>
                            <Badge tone="ink">{t.difficulty}</Badge>
                            {t.subtopics[0] ? <Badge tone="accent">{t.subtopics[0]}</Badge> : null}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-accent" />
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}