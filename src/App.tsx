import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Semester from './pages/Semester';
import Subject from './pages/Subject';
import Topic from './pages/Topic';
import Search from './pages/Search';
import Bookmarks from './pages/Bookmarks';
import Progress from './pages/Progress';
import Roadmap from './pages/Roadmap';
import ExamMode from './pages/ExamMode';
import Practicals from './pages/Practicals';
import DeepLearning from './pages/DeepLearning';
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
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="progress" element={<Progress />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="exam" element={<ExamMode />} />
          <Route path="practicals" element={<Practicals />} />
          <Route path="deep-learning" element={<DeepLearning />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}