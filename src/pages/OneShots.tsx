import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Play, Zap } from 'lucide-react';
import { Badge, Card, EmptyState, PageHeader, SourceNote, cx } from '../components/ui';
import { FLAT_TOPICS, getSubject, type FlatTopic } from '../data/curriculum';
import { MODULE_ONE_SHOTS } from '../data/one-shots';
import { ytSearch } from '../data/yt';
import type { Resource, ResourceKind } from '../types';

const KIND_REQUESTED: ResourceKind = 'one-shot';

const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;

const semesterLabel = (sem: number) =>
  sem === 1 || sem === 2 ? `Foundation · Semester ${sem}` : `Semester ${sem}`;

function pickBest(shorts: Resource[]): Resource {
  const withId = shorts.find((r) => r.videoId) ?? shorts[0];
  const id = withId.videoId;
  return {
    ...withId,
    ...(id ? { videoId: id } : {}),
  };
}

function ThumbFallback({ topic }: { topic: FlatTopic }) {
  return (
    <a
      href={ytSearch(topic.title)}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full w-full flex-col justify-end bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900 p-4 text-white"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-mint-300">One-shot</p>
      <p className="mt-1 font-display text-sm font-bold leading-snug">{topic.title}</p>
      <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-white/85">
        Open on YouTube
        <ExternalLink className="h-3 w-3" />
      </p>
    </a>
  );
}

function OneShotCard({ topic, shorts }: { topic: FlatTopic; shorts: Resource[] }) {
  const s = getSubject(topic.subjectId);
  const best = pickBest(shorts);
  const href = best.videoId ? ytWatch(best.videoId) : ytSearch(best.query ?? topic.title);
  const label = best.videoId ? 'Watch on YouTube' : 'Search on YouTube';

  return (
    <Card className="group overflow-hidden p-0 transition hover:shadow-cardHover">
      <div className="relative aspect-video w-full overflow-hidden bg-ink-100 dark:bg-ink-900">
        {best.videoId ? (
          <>
            <img
              src={ytThumb(best.videoId)}
              alt={best.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/20 transition group-hover:from-black/70" />
          </>
        ) : (
          <ThumbFallback topic={topic} />
        )}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Play ${best.title}`}
          className="absolute inset-0 grid place-items-center"
        >
          {best.videoId ? (
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-accent-700 shadow-card transition group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            </span>
          ) : null}
        </a>
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold text-ink-800 backdrop-blur dark:bg-ink-950/80 dark:text-white">
          <Zap className="h-3 w-3 text-mint-500" />
          One-shot
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {s ? <Badge tone="ink">{s.shortName}</Badge> : null}
          <Badge tone="accent">{semesterLabel(topic.semester)}</Badge>
        </div>
        <Link to={`/topic/${topic.id}`} className="font-display text-[15px] font-bold leading-snug text-ink-950 transition hover:text-accent dark:text-white dark:hover:text-accent-300">
          {topic.title}
        </Link>
        <p className="text-[11px] font-medium capitalize text-ink-400">
          {shorts.length} one-shot{shorts.length === 1 ? '' : 's'}
          {best.language ? ` · ${best.language}` : ''}
          {best.duration ? ` · ${best.duration}` : ''}
        </p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-xl bg-accent px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-accent-600"
          >
            <ExternalLink className="h-3 w-3" />
            {label}
          </a>
          <Link
            to={`/topic/${topic.id}`}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-500 transition hover:text-accent dark:text-ink-300"
          >
            Full topic
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default function OneShots() {
  const [subjectId, setSubjectId] = useState('');

  const rows = useMemo(
    () =>
      FLAT_TOPICS.map((t) => {
        const inline = t.resources.filter((r) => r.kind === KIND_REQUESTED);
        const moduleOneShot = MODULE_ONE_SHOTS[t.moduleId];
        return {
          topic: t,
          shorts:
            inline.length > 0
              ? inline
              : moduleOneShot
                ? [moduleOneShot]
                : [],
        };
      }).filter((r) => r.shorts.length > 0),
    [],
  );

  const subjectIds = [...new Set(rows.map((r) => r.topic.subjectId))];
  const filtered = subjectId ? rows.filter((r) => r.topic.subjectId === subjectId) : rows;
  const semesters = [...new Set(filtered.map((r) => r.topic.semester))].sort((a, b) => a - b);

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Quick revision"
        title="One-Shot Library"
        subtitle="The best one-shot video for each chapter — complete unit coverage in a single sitting. Browsed semester by semester, perfect for last-mile revision."
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
          All semesters
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
        semesters.map((sem) => {
          const semRows = filtered.filter((r) => r.topic.semester === sem);
          return (
            <div key={sem}>
              <div className="mb-3 flex items-center gap-2">
                <h2 className="font-display text-xl font-bold text-ink-950 dark:text-white">
                  {semesterLabel(sem)}
                </h2>
                <span className="text-xs font-medium text-ink-400">
                  {semRows.length} topic{semRows.length === 1 ? '' : 's'}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {semRows.map(({ topic, shorts }, i) => (
                  <div key={topic.id} className="animate-fade-up" style={{ animationDelay: `${(i % 6) * 50}ms` }}>
                    <OneShotCard topic={topic} shorts={shorts} />
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}