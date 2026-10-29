import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowUp,
  BookMarked,
  Brain,
  Clapperboard,
  FlaskConical,
  GraduationCap,
  Home,
  Layers,
  ListVideo,
  Moon,
  NotebookPen,
  Search,
  Sun,
} from 'lucide-react';
import { useLearningStore } from '../store/useStore';
import { cx, REPO_URL } from './ui';
import { Logo } from './Logo';

function ThemeToggle() {
  const theme = useLearningStore((s) => s.theme);
  const toggleTheme = useLearningStore((s) => s.toggleTheme);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="grid h-9 w-9 place-items-center rounded-xl border border-ink-100 bg-white text-ink-500 transition hover:text-accent dark:border-ink-700 dark:bg-ink-900 dark:text-ink-400 dark:hover:text-accent-300"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

const navGroups = [
  {
    label: 'Library',
    items: [
      { to: '/one-shots', label: 'One-Shots', icon: Clapperboard },
      { to: '/playlists', label: 'Playlists', icon: ListVideo },
      { to: '/notes', label: 'Notes', icon: NotebookPen },
    ],
  },
  {
    label: 'Syllabus',
    items: [
      { to: '/subjects', label: 'All Subjects', icon: BookMarked },
      { to: '/semester/3', label: 'Semester 3', icon: Layers },
      { to: '/semester/4', label: 'Semester 4', icon: Layers },
      { to: '/semester/5', label: 'Semester 5', icon: Layers },
      { to: '/semester/6', label: 'Semester 6', icon: Layers },
    ],
  },
  {
    label: 'Extras',
    items: [
      { to: '/practicals', label: 'Practicals', icon: FlaskConical },
      { to: '/quiz', label: 'Quiz', icon: Brain },
      { to: '/college-assignments', label: 'College Assignments', icon: GraduationCap },
    ],
  },
];

const mobileItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/subjects', label: 'Subjects', icon: BookMarked },
  { to: '/one-shots', label: 'One-Shots', icon: Clapperboard },
  { to: '/playlists', label: 'Playlists', icon: ListVideo },
  { to: '/quiz', label: 'Quiz', icon: Brain },
  { to: '/notes', label: 'Notes', icon: NotebookPen },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <Logo />
      <div className="leading-none">
        <p className="font-display text-sm font-semibold text-ink-950 dark:text-white">
          BTEUP CSE Hub
        </p>
        <p className="mt-1 text-[11px] font-medium text-ink-400">
          lateral · CSE · 2026-27
        </p>
      </div>
    </div>
  );
}

function navClass({ isActive }: { isActive: boolean }) {
  return cx(
    'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
    isActive
      ? 'bg-accent text-white shadow-glow'
      : 'text-ink-600 hover:translate-x-1 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white',
  );
}

/** Thin animated bar shown while a route is rendering. */
function RouteProgress({ pathname }: { pathname: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(true);
    const t = window.setTimeout(() => setOn(false), 750);
    return () => window.clearTimeout(t);
  }, [pathname]);
  return <div aria-hidden className={cx('route-progress', on && 'on')} key={pathname} />;
}

/** Floating back-to-top button. */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cx(
        'fixed bottom-20 right-4 z-40 grid h-11 w-11 place-items-center rounded-2xl border border-ink-100 bg-white/90 text-ink-500 shadow-card backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-900/90 dark:text-ink-300 lg:bottom-6',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

function LayoutFooter() {
  return (
    <footer className="mt-12 border-t border-ink-100/70 pt-6 dark:border-ink-800/70">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ink-400">
        <p>
          Built for the 2nd-year lateral batch (2026-27 · branch code 389). Maintainer:{' '}
          <a
            href="mailto:tauseefbrh11@gmail.com"
            className="font-semibold text-ink-600 underline-offset-4 hover:text-accent dark:text-ink-200"
          >
            tauseefbrh11@gmail.com
          </a>
        </p>
        <div className="flex items-center gap-3">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium transition hover:text-accent"
          >
            GitHub repo
          </a>
          <a
            href={`${REPO_URL}/issues`}
            target="_blank"
            rel="noreferrer"
            className="font-medium transition hover:text-accent"
          >
            Found a dead link? Report it
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  /* Press "/" anywhere to jump to search */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tgt = e.target as HTMLElement | null;
      const typing =
        tgt &&
        (tgt.tagName === 'INPUT' || tgt.tagName === 'TEXTAREA' || tgt.isContentEditable);
      if (!typing && (e.key === '/' || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)))) {
        e.preventDefault();
        navigate('/search');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  return (
    <div className="min-h-svh">
      <RouteProgress pathname={pathname} />

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-ink-100/70 bg-white/60 backdrop-blur-2xl dark:border-ink-800/70 dark:bg-ink-900/60 lg:flex">
        <div className="px-5 py-6">
          <NavLink to="/">
            <Brand />
          </NavLink>
        </div>

        <nav className="flex-1 space-y-5 overflow-y-auto px-3">
          <NavLink to="/" end className={navClass}>
            <Home className="h-[18px] w-[18px]" />
            Home
          </NavLink>

          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                {group.label}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink key={item.to} to={item.to} className={navClass}>
                      <Icon className="h-[18px] w-[18px]" />
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="space-y-3 border-t border-ink-100 p-4 dark:border-ink-800">
          <NavLink
            to="/search"
            className="flex items-center gap-2 rounded-xl border border-ink-100 bg-ink-50 px-3 py-2 text-sm text-ink-400 transition hover:text-accent dark:border-ink-700 dark:bg-ink-800/60 dark:text-ink-400 dark:hover:text-accent-300"
          >
            <Search className="h-4 w-4" />
            Search…
            <kbd className="ml-auto rounded-md border border-ink-200 bg-white px-1.5 font-mono text-[10px] text-ink-400 dark:border-ink-700 dark:bg-ink-900">
              /
            </kbd>
          </NavLink>
          <div className="flex items-center justify-between">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-ink-400 transition hover:text-accent dark:text-ink-400"
            >
              GitHub · contribute
            </a>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-ink-100/70 bg-white/60 px-4 py-3 backdrop-blur-2xl dark:border-ink-800/70 dark:bg-ink-950/70 lg:hidden">
        <NavLink to="/">
          <Brand />
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink
            to="/search"
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-xl border border-ink-100 bg-white text-ink-500 transition hover:text-accent dark:border-ink-700 dark:bg-ink-900 dark:text-ink-400"
          >
            <Search className="h-4 w-4" />
          </NavLink>
          <ThemeToggle />
        </div>
      </header>

      <div className="lg:pl-64">
        <main className="mx-auto max-w-5xl px-4 pb-28 pt-5 lg:pb-14 lg:pt-8" key={pathname}>
          <div className="page-in">
            <Outlet />
            <LayoutFooter />
          </div>
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100/70 bg-white/70 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl dark:border-ink-800/70 dark:bg-ink-950/70 lg:hidden">
        <div className="grid grid-cols-6">
          {mobileItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cx(
                    'flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition',
                    isActive
                      ? 'text-accent [&>svg]:scale-110'
                      : 'text-ink-400 hover:text-ink-600 dark:text-ink-400 dark:hover:text-ink-200',
                  )
                }
              >
                <Icon className="h-5 w-5 transition-transform" />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </nav>

      <BackToTop />
    </div>
  );
}