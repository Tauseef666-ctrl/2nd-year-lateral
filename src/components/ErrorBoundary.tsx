import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, House, RefreshCw, RotateCcw } from 'lucide-react';
import { cx } from './ui';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/** Catches render/route-chunk errors and shows a friendly, theme-aware
 * recovery screen instead of a blank page (TODO 0.5). */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Keep diagnostics in the console for bug reports — never shown in prod UI.
    console.error('[bteup] render error:', error, info.componentStack);
  }

  private reset = () => this.setState({ error: null });

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="grid min-h-[70vh] place-items-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-ink-100 bg-white p-8 text-center shadow-card dark:border-ink-800 dark:bg-ink-900">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-rose-500/10 text-rose-500 dark:bg-rose-400/10 dark:text-rose-300">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h1 className="mt-4 font-display text-xl font-bold text-ink-950 dark:text-white">
            Something went wrong
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
            The page hit an unexpected error — your saved progress is untouched. Try again, or
            reload if it keeps happening.
          </p>
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-xs font-semibold text-ink-400 hover:text-accent dark:text-ink-500">
              Error details
            </summary>
            <pre className="mt-2 max-h-32 overflow-auto rounded-lg bg-ink-50 p-3 text-left text-[11px] leading-relaxed text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
              {error.message}
            </pre>
          </details>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={this.reset}
              className={cx(
                'inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600',
                'dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200',
              )}
            >
              <RotateCcw className="h-4 w-4" />
              Try again
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-accent dark:hover:text-accent-300"
            >
              <RefreshCw className="h-4 w-4" />
              Reload page
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-500 transition hover:text-accent dark:text-ink-400 dark:hover:text-accent-300"
            >
              <House className="h-4 w-4" />
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
