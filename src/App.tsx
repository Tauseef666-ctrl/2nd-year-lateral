import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Semester from './pages/Semester';
import Subjects from './pages/Subjects';
import NotFound from './pages/NotFound';
import { useLearningStore } from './store/useStore';

/* Route-level code splitting (TODO 0.4) — pages that pull heavy data
 * (chapter notes, labs, quiz bank, one-shot registry) load on demand.
 * Home, Semester and Subjects stay eager: they share the curriculum data
 * that the landing page needs anyway. */
const Subject = lazy(() => import('./pages/Subject'));
const Topic = lazy(() => import('./pages/Topic'));
const Search = lazy(() => import('./pages/Search'));
const Practicals = lazy(() => import('./pages/Practicals'));
const OneShots = lazy(() => import('./pages/OneShots'));
const Playlists = lazy(() => import('./pages/Playlists'));
const Notes = lazy(() => import('./pages/Notes'));
const Quiz = lazy(() => import('./pages/Quiz'));
const CollegeAssignments = lazy(() => import('./pages/CollegeAssignments'));
const Papers = lazy(() => import('./pages/Papers'));

function ThemeSync() {
  const theme = useLearningStore((s) => s.theme);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  return null;
}

function RouteFallback() {
  return (
    <div className="grid min-h-[50vh] place-items-center" aria-busy="true">
      <span
        className="h-7 w-7 animate-spin rounded-full border-2 border-accent/30 border-t-accent dark:border-accent-300/30 dark:border-t-accent-300"
        role="status"
        aria-label="Loading page"
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ThemeSync />
      <ErrorBoundary>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="semester/:semesterId" element={<Semester />} />
              <Route path="subject/:subjectId" element={<Subject />} />
              <Route path="topic/:topicId" element={<Topic />} />
              <Route path="search" element={<Search />} />
              <Route path="subjects" element={<Subjects />} />
              <Route path="practicals" element={<Practicals />} />
              <Route path="one-shots" element={<OneShots />} />
              <Route path="playlists" element={<Playlists />} />
              <Route path="notes" element={<Notes />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="papers" element={<Papers />} />
              <Route path="college-assignments" element={<CollegeAssignments />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
