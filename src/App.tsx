import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Semester from './pages/Semester';
import Subject from './pages/Subject';
import Topic from './pages/Topic';
import Search from './pages/Search';
import Subjects from './pages/Subjects';
import Practicals from './pages/Practicals';
import OneShots from './pages/OneShots';
import Playlists from './pages/Playlists';
import Notes from './pages/Notes';
import CollegeAssignments from './pages/CollegeAssignments';
import NotFound from './pages/NotFound';
import { useLearningStore } from './store/useStore';

function ThemeSync() {
  const theme = useLearningStore((s) => s.theme);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  return null;
}

export default function App() {
  return (
    <>
      <ThemeSync />
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
          <Route path="college-assignments" element={<CollegeAssignments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}