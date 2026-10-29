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
