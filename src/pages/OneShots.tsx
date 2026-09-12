import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Zap } from 'lucide-react';
import { Badge, Card, EmptyState, PageHeader, SourceNote, cx } from '../components/ui';
import { FLAT_TOPICS, getSubject } from '../data/curriculum';
import { ytSearch } from '../data/yt';
import type { ResourceKind } from '../types';

const KIND_REQUESTED: ResourceKind = 'one-shot';

export default function OneShots() {
  const [subjectId, setSubjectId] = useState('');

  const rows = useMemo(
    () =>
      FLAT_TOPICS.map((t) => ({
        topic: t,
        shorts: t.resources.filter((r) => r.kind === KIND_REQUESTED),
      })).filter((r) => r.shorts.length > 0),
    [],
  );

  const subjectIds = [...new Set(rows.map((r) => r.topic.subjectId))];
  const filtered = subjectId ? rows.filter((r) => r.topic.subjectId === subjectId) : rows;

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Quick revision"
        title="One-Shot Library"
        subtitle="Every topic that has a one-shot — complete unit coverage in a single sitting. Perfect for last-mile revision."
      >
        <div className="inline-flex items-center gap-1.5 self-end rounded-xl bg-mint-500/10 px-3 py-1.5 text-xs font-bold text-mint-600 dark:text-mint-400">
          <Zap className="h-3.5 w-3.5" />
          {rows.length} topics with one-shots
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

      {filtered.length === 0 ? (
        <EmptyState
          icon={<Zap className="h-5 w-5" />}
          title="No one-shots here yet"
          body="Try another subject filter, or open the full topic page for deep and playlist resources."
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ topic, shorts }) => {
            const s = getSubject(topic.subjectId);
            const firstQuery = shorts[0].query;
            return (
              <Card key={topic.id} className="flex flex-col p-5 transition hover:shadow-cardHover">
                <div className="flex items-center justify-between gap-2">
                  <Badge tone="mint">
                    <Zap className="h-3 w-3" />
                    {shorts.length} one-shot{shorts.length === 1 ? '' : 's'}
                  </Badge>
                  {s ? <Badge tone="ink">Semester {s.semester}</Badge> : null}
                </div>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink-950 dark:text-white">
                  {topic.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-ink-400">
                  {s?.shortName}
                  {shorts[0]?.language ? ` · ${shorts[0].language}` : ''}
                  {shorts[0]?.duration ? ` · ${shorts[0].duration}` : ''}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <a
                    href={ytSearch(firstQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white transition hover:bg-accent-600"
                  >
                    Watch one-shot
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <Link
                    to={`/topic/${topic.id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-3 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
                  >
                    Full topic
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}