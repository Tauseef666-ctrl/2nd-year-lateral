import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Play, ExternalLink, ListVideo } from 'lucide-react';
import { PLAYLIST_PREVIEWS, ytThumbFor } from '../data/yt';

export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ');

export const REPO_URL = 'https://github.com/Tauseef666-ctrl/2nd-year-lateral';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-ink-100/80 bg-white/70 shadow-card backdrop-blur-xl transition-shadow duration-300 dark:border-ink-800/80 dark:bg-ink-900/50',
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────── Scroll reveal ─────────────────────────── */

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  y?: number;
}

/** Fades content up when it first scrolls into view (respects reduced motion). */
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cx('reveal', shown && 'reveal-in', className)}
      style={{ transitionDelay: `${delay}ms`, ['--reveal-y' as string]: `${y}px` }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────── Animated number ─────────────────────────── */

export function CountUp({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setN(value);
          return;
        }
        const t0 = performance.now();
        const dur = 950;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={cx('tabular-nums', className)}>
      {n}
    </span>
  );
}

/* ─────────────────────────── Print portal ─────────────────────────── */

interface PrintPortalProps {
  /** Content of the printable document. Rendered only while printing. */
  children: ReactNode;
  onDone: () => void;
  /** Unique mount key so repeated opens retrigger cleanly. */
  askedAt: number;
}

/**
 * Mounts a print-only document and opens the browser print dialog.
 * Users "Save as PDF" from there — real PDF for every chapter, zero
 * dependencies, works offline.
 */
export function PrintPortal({ children, onDone, askedAt }: PrintPortalProps) {
  useEffect(() => {
    if (!askedAt) return;
    const root = document.documentElement;
    root.classList.add('printing');
    const timer = window.setTimeout(() => window.print(), 120);
    const cleanup = () => {
      root.classList.remove('printing');
      onDone();
    };
    window.addEventListener('afterprint', cleanup, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('afterprint', cleanup);
      root.classList.remove('printing');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [askedAt]);

  if (!askedAt) return null;

  return (
    <div data-print-root className="print-doc">
      {children}
    </div>
  );
}

/* ─────────────────────────── Link that animates ─────────────────────────── */

export type BadgeTone = 'accent' | 'mint' | 'ink';

const badgeTones: Record<BadgeTone, string> = {
  accent:
    'bg-accent-50 text-accent-700 ring-accent/30 dark:bg-accent-500/15 dark:text-accent-300',
  mint: 'bg-mint-500/10 text-mint-600 ring-mint-500/30 dark:text-mint-400',
  ink: 'bg-ink-100 text-ink-600 ring-ink-200 dark:bg-ink-800 dark:text-ink-300 dark:ring-ink-700',
};

export interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
}

export function Badge({ children, className, tone = 'accent' }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1 ring-inset',
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, max === 0 ? 0 : (value / max) * 100));
  return (
    <div
      className={cx(
        'h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800',
        className,
      )}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-accent to-mint-400 transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="animate-fade-up">
        {eyebrow ? (
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-accent-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display text-2xl font-bold text-ink-950 dark:text-white sm:text-3xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children ? <div className="animate-fade-up flex gap-2">{children}</div> : null}
    </header>
  );
}

export interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  body?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, body, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-ink-200/80 bg-white/50 px-6 py-14 text-center backdrop-blur-sm dark:border-ink-700/80 dark:bg-ink-900/30">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent dark:bg-accent/15">
        {icon}
      </div>
      <p className="font-display font-semibold text-ink-900 dark:text-ink-100">{title}</p>
      {body ? <p className="max-w-sm text-sm text-ink-500 dark:text-ink-400">{body}</p> : null}
      {action}
    </div>
  );
}

export function SourceNote() {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-ink-100/80 bg-white/60 px-4 py-3 text-xs leading-relaxed text-ink-500 backdrop-blur-xl dark:border-ink-800/80 dark:bg-ink-900/50 dark:text-ink-400">
      <Badge tone="accent">Official BTEUP syllabus</Badge>
      <Badge tone="mint">oEmbed-verified links</Badge>
      <span>Every video opens (and plays) on YouTube. Resources are curated for the official topics — they are not official BTEUP study material.</span>
    </div>
  );
}

/* ──────────────── Media thumbnails (videos + playlists) ──────────────── */

export function ThumbImg({ src, title, className }: { src: string; title: string; className?: string }) {
  const [ready, setReady] = useState(false);
  return (
    <>
      {!ready ? (
        <span className="absolute inset-0 animate-pulse bg-ink-200 dark:bg-ink-800" aria-hidden="true" />
      ) : null}
      <img
        src={src}
        alt={title}
        loading="lazy"
        onLoad={() => setReady(true)}
        onError={(e) => {
          // graceful fallback: swap to a neutral 16:9 placeholder image
          e.currentTarget.style.display = 'none';
          setReady(true);
        }}
        className={cx(
          'h-full w-full object-cover transition-transform duration-500 group-hover/frame:scale-[1.06]',
          !ready && 'opacity-0',
          className,
        )}
      />
    </>
  );
}

/** Small playlist cover tile (uses first-video frame captured per playlist). */
export function PlaylistThumb({ playlistId, title }: { playlistId?: string; title: string }) {
  const preview = playlistId ? PLAYLIST_PREVIEWS[playlistId] : undefined;
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-accent-950">
      {preview ? (
        <ThumbImg src={ytThumbFor(undefined, playlistId)} title={title} />
      ) : (
        <span className="absolute inset-0 grid place-items-center text-ink-400">
          <ListVideo className="h-8 w-8" />
        </span>
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
      <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white">
        <ListVideo className="h-3 w-3" />
        Playlist
      </span>
    </div>
  );
}

export interface VideoThumbProps {
  videoId?: string;
  playlistId?: string;
  title: string;
  className?: string;
  onClick?: () => void;
  /** render as inline-embed trigger instead of an <a> */
  interactive?: boolean;
}

/** 16:9 video frame with real thumbnail. Click plays inline or opens YouTube. */
export function YouTubeThumb({
  videoId,
  playlistId,
  title,
  className,
  onClick,
  interactive = false,
}: VideoThumbProps) {
  const preview = videoId ?? (playlistId ? PLAYLIST_PREVIEWS[playlistId] : undefined);

  const frame = (
    <div
      className={cx(
        'group/frame relative block aspect-video w-full overflow-hidden bg-ink-100 dark:bg-ink-800',
        className,
      )}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (!interactive) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      onClick={() => (interactive ? onClick?.() : undefined)}
    >
      {preview ? (
        <>
          <ThumbImg src={`https://i.ytimg.com/vi/${preview}/hqdefault.jpg`} title={title} />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover/frame:scale-110 group-hover/frame:bg-accent">
              {playlistId ? (
                <ListVideo className="h-5 w-5 text-accent" />
              ) : (
                <Play className="h-6 w-6 translate-x-0.5 text-red-600" />
              )}
            </span>
          </span>
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white">
            {playlistId ? 'Playlist' : 'Play'}
            <ExternalLink className="h-3 w-3" />
          </span>
        </>
      ) : (
        <span className="grid h-full place-items-center gap-1 text-xs text-ink-400">
          <Play className="h-5 w-5" />
          Watch on YouTube
        </span>
      )}
    </div>
  );

  if (interactive) return frame;

  const watchUrl = playlistId
    ? `https://www.youtube.com/playlist?list=${playlistId}`
    : `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch "${title}" on YouTube`}
      className={cx(
        'group/frame relative block aspect-video w-full overflow-hidden bg-ink-100 dark:bg-ink-800',
        className,
      )}
    >
      {preview ? (
        <ThumbImg src={`https://i.ytimg.com/vi/${preview}/hqdefault.jpg`} title={title} />
      ) : null}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <span className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover/frame:scale-110 group-hover/frame:bg-accent">
          {playlistId ? (
            <ListVideo className="h-5 w-5 text-accent" />
          ) : (
            <Play className="h-6 w-6 translate-x-0.5 text-red-600" />
          )}
        </span>
      </span>
      <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white">
        {playlistId ? 'Playlist' : 'Play'}
        <ExternalLink className="h-3 w-3" />
      </span>
    </a>
  );
}