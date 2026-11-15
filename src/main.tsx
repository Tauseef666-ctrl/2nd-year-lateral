import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { migrateLegacyNoteProgress } from './store/useStore';

// One-time import of pre-store "mark as read" ticks into the persisted store.
migrateLegacyNoteProgress();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);