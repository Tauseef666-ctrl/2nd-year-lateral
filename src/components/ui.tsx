import type { ReactNode } from 'react';

export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ');

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-ink-100 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900',
        className,
      )}
    >
      {children}
    </div>
  );
}

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
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-ink-200 bg-white/60 px-6 py-14 text-center dark:border-ink-700 dark:bg-ink-900/40">
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
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-ink-100 bg-white px-4 py-3 text-xs leading-relaxed text-ink-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400">
      <Badge tone="accent">Official BTEUP syllabus</Badge>
      <Badge tone="mint">Curated YouTube links</Badge>
      <span>Video links are search-based resources for each official topic — they are not official BTEUP study material.</span>
    </div>
  );
}