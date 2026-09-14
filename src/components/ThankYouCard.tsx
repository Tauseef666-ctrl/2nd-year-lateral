import { Heart, Star } from 'lucide-react';

const GITHUB_URL = 'https://github.com/Tauseef666-ctrl/2nd-year-lateral';

export function ThankYouCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-white/60 to-mint-400/10 px-6 py-6 text-center dark:from-accent/15 dark:via-ink-900/40 dark:to-mint-400/10">
      <p className="text-2xl" aria-hidden="true">🙏</p>
      <p className="mt-2 font-display text-base font-bold text-ink-950 dark:text-white">
        Thank you for studying with the BTEUP CSE Hub
      </p>
      <p className="mx-auto mt-1.5 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
        This hub is built and maintained by a fellow student for the 2nd-year lateral batch — every
        single topic, one-shot and note is here to make your diploma easier.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl bg-ink-950 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-ink-950 dark:hover:bg-accent dark:hover:text-white"
        >
          <Star className="h-3.5 w-3.5 fill-current" />
          Star this repo on GitHub
        </a>
        <a
          href={`${GITHUB_URL}/issues/new`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
        >
          <Heart className="h-3.5 w-3.5" />
          Report an issue or request
        </a>
      </div>
    </div>
  );
}