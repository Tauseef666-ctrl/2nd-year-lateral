import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  ExternalLink,
  BookOpen,
  FileQuestion,
  ListVideo,
  RefreshCw,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import type { Resource, ResourceKind } from '../types';
import { Badge, Card, cx, YouTubeThumb } from './ui';
import type { BadgeTone } from './ui';
import { ytPlaylistUrl, ytSearch } from '../data/yt';

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
  const meta = KIND_META[resource.kind];
  const [playing, setPlaying] = useState(false);

  const watchUrl = resource.playlistId
    ? ytPlaylistUrl(resource.playlistId)
    : resource.videoId
      ? `https://www.youtube.com/watch?v=${resource.videoId}`
      : ytSearch(resource.query);

  /* Inline click-to-play for direct videos (privacy-enhanced embed). */
  if (playing && resource.videoId) {
    return (
      <Card className="group overflow-hidden">
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${resource.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={resource.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
          <button
            type="button"
            onClick={() => setPlaying(false)}
            aria-label="Close player"
            className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-red-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4">
          <p className="font-display text-sm font-bold leading-snug text-ink-950 dark:text-white">
            {resource.title}
          </p>
          {resource.channel ? (
            <p className="mt-1 text-xs font-medium text-ink-400">{resource.channel}</p>
          ) : null}
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition hover:text-accent-600 dark:text-accent-300"
          >
            Open on YouTube
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </Card>
    );
  }

  const hasFrame = Boolean(resource.videoId || resource.playlistId);
  const isEmbeddableVideo = Boolean(resource.videoId);

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-cardHover">
      {hasFrame ? (
        /* Click-to-play: videos play inline, playlists open on YouTube */
        <YouTubeThumb
          videoId={resource.videoId}
          playlistId={resource.playlistId}
          title={resource.title}
          interactive={isEmbeddableVideo}
          onClick={() => setPlaying(true)}
          className={cx('cursor-pointer', !isEmbeddableVideo && 'block')}
        />
      ) : (
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-accent-600 via-accent-700 to-accent-950">
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
              {KIND_ICONS[resource.kind]}
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-2.5">
            <span className="line-clamp-1 text-xs font-semibold text-white">{resource.title}</span>
          </span>
        </div>
      )}

      <div className="p-4">
        {resource.title ? (
          <p className="line-clamp-1 font-medium text-ink-800 dark:text-ink-100">
            {resource.title}
          </p>
        ) : null}

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <Badge tone={meta.tone}>{meta.label}</Badge>
          <Badge tone="ink">{languageLabels[resource.language] ?? resource.language}</Badge>
          {resource.duration ? <Badge tone="ink">{resource.duration}</Badge> : null}
          {resource.rec === 3 && resource.why ? <Badge tone="mint">Best Pick</Badge> : null}
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

        <div className="mt-3 flex items-center gap-2">
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-accent-600"
          >
            {resource.playlistId ? 'Open playlist' : 'Play on YouTube'}
            <ExternalLink className="h-3 w-3" />
          </a>
          {isEmbeddableVideo ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
            >
              ▶ Play here
            </button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}