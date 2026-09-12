import type { ReactNode } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  BookOpen,
  FileQuestion,
  ListVideo,
  RefreshCw,
  Wrench,
  Zap,
} from 'lucide-react';
import type { Resource, ResourceKind } from '../types';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, cx, YouTubeThumb } from './ui';
import type { BadgeTone } from './ui';
import { ytSearch } from '../data/yt';

const KIND_META: Record<ResourceKind, { label: string; tone: BadgeTone }> = {
  deep: { label: 'Deep Lecture', tone: 'accent' },
  'one-shot': { label: 'One-Shot', tone: 'mint' },
  playlist: { label: 'Playlist', tone: 'ink' },
  revision: { label: 'Revision', tone: 'accent' },
  practical: { label: 'Practical', tone: 'mint' },
  exam: { label: 'Exam Prep', tone: 'ink' },
};

const KIND_ICONS: Record<ResourceKind, ReactNode> = {
  deep: <BookOpen className="h-4 w-4" />,
  'one-shot': <Zap className="h-4 w-4" />,
  playlist: <ListVideo className="h-4 w-4" />,
  revision: <RefreshCw className="h-4 w-4" />,
  practical: <Wrench className="h-4 w-4" />,
  exam: <FileQuestion className="h-4 w-4" />,
};

const languageLabels: Record<string, string> = {
  hindi: 'हिंदी',
  english: 'EN',
  hinglish: 'EN + हिं',
};

export interface VideoCardProps {
  resource: Resource;
}

export default function VideoCard({ resource }: VideoCardProps) {
  const watchedIds = useLearningStore((s) => s.watched);
  const toggleWatched = useLearningStore((s) => s.toggleWatched);

  const isWatched = watchedIds.includes(resource.id);
  const meta = KIND_META[resource.kind];
  const hasFrame = Boolean(resource.videoId || resource.playlistId);
  const href = resource.playlistId
    ? `https://www.youtube.com/playlist?list=${resource.playlistId}`
    : resource.videoId
      ? `https://www.youtube.com/watch?v=${resource.videoId}`
      : ytSearch(resource.query);

  return (
    <Card
      className={cx(
        'group overflow-hidden transition hover:shadow-cardHover',
        isWatched && 'opacity-70',
      )}
    >
      {hasFrame ? (
        <YouTubeThumb
          videoId={resource.videoId}
          playlistId={resource.playlistId}
          title={resource.title}
        />
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between gap-3 border-b border-ink-100 px-4 py-3 dark:border-ink-800"
        >
          <span className="flex items-center gap-2 font-medium text-ink-700 dark:text-ink-200">
            <span className="text-accent">{KIND_ICONS[resource.kind]}</span>
            <span className="truncate">{resource.title}</span>
          </span>
          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-ink-300 transition group-hover:text-accent" />
        </a>
      )}

      <div className="p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge tone={meta.tone}>{meta.label}</Badge>
          <Badge tone="ink">{languageLabels[resource.language] ?? resource.language}</Badge>
          {resource.duration ? <Badge tone="ink">{resource.duration}</Badge> : null}
          {resource.rec === 3 && resource.why ? (
            <Badge tone="mint">Best Pick</Badge>
          ) : null}
        </div>

        {resource.channel ? (
          <p className="mt-2 text-xs font-medium text-ink-400">{resource.channel}</p>
        ) : null}

        {resource.why ? (
          <p
            className={cx(
              'mt-2 text-xs leading-relaxed',
              resource.rec === 3 ? 'text-mint-600 dark:text-mint-400' : 'text-ink-500 dark:text-ink-400',
            )}
          >
            {resource.why}
          </p>
        ) : null}

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-accent-600"
          >
            Watch on YouTube
            <ExternalLink className="h-3 w-3" />
          </a>
          <button
            type="button"
            onClick={() => toggleWatched(resource.id)}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition',
              isWatched
                ? 'border-mint-500/40 bg-mint-500/10 text-mint-600 dark:text-mint-400'
                : 'border-ink-200 text-ink-500 hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-400',
            )}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            {isWatched ? 'Watched' : 'Mark watched'}
          </button>
        </div>
      </div>
    </Card>
  );
}