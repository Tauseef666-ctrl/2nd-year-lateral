export type ResourceKind =
  | 'deep'
  | 'one-shot'
  | 'playlist'
  | 'revision'
  | 'practical'
  | 'exam';

export type Language = 'hindi' | 'english' | 'hinglish';

/** Internal educational recommendation (not YouTube's rating). */
export type Recommendation = 1 | 2 | 3;

export interface Resource {
  id: string;
  kind: ResourceKind;
  title: string;
  channel?: string;
  query?: string;
  videoId?: string;
  playlistId?: string;
  duration?: string;
  language: Language;
  rec: Recommendation;
  why?: string;
  fallback?: string;
}

export interface PracticeQuestion {
  question: string;
  hint?: string;
}

export interface StudyNote {
  id: string;
  title: string;
  source: 'official' | 'supplementary';
  format: 'notes' | 'pdf' | 'website' | 'youtube';
  description: string;
  href: string;
}

/** A single headed block of bullet points inside a chapter note. */
export interface NoteSection {
  h: string;
  items: string[];
}

/** Full structured notes for one module (chapter) of a subject. */
export interface ChapterNote {
  moduleId: string;
  title: string;
  sections: NoteSection[];
}

export interface TopicLink {
  id: string;
  title: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  subtopics: string[];
  periods: number;
  marks: number;
  resources: Resource[];
  practice: PracticeQuestion[];
  notes?: StudyNote[];
  related?: TopicLink[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface PracticalExercise {
  id: string;
  name: string;
  concept: string;
  algorithm: string[];
  program?: string;
  expectedOutput?: string;
  commonErrors: string[];
  variation: string;
  resources: Resource[];
}

export interface PracticalLab {
  id: string;
  name: string;
  source: 'official' | 'recommended';
  exercises: PracticalExercise[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  shortName: string;
  semester: number;
  category: 'theory' | 'practicum' | 'practical' | 'elective' | 'audit' | 'project';
  credits: number;
  periods: string;
  description: string;
  whyMatters: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  examImportance: 'low' | 'medium' | 'high' | 'critical';
  learningOrder: string[];
  objectives: string[];
  outcomes: string[];
  totalPeriods: number;
  modules: Module[];
  references: string[];
  playlists?: Resource[];
  labs?: PracticalLab[];
  skillCertification?: boolean;
  officialSearch?: string;
}

export interface Semester {
  id: number;
  title: string;
  tagline: string;
  subjectIds: string[];
}

/** One completed quiz session — persisted for history, streaks and retest (Phase 3). */
export interface QuizAttemptRecord {
  id: string;
  date: string; // ISO timestamp of completion
  subjectIds: string[];
  total: number;
  score: number;
  wrongIds: string[]; // question ids answered wrong — powers "retest wrong answers"
}

/** A BTEUP previous-year question paper (Phase 1 — the launch wedge). */
export interface Paper {
  id: string; // '2024-odd-s3-os'
  year: number; // exam year
  session: 'odd' | 'even';
  semester: number; // 1, 3, 4, 5, 6 (lateral scheme)
  subjectId: string; // must match Subject.id (e.g. 'os', 'dbms')
  kind: 'regular' | 'back' | 'special';
  fileUrl: string; // local /papers/... or a GitHub Release asset URL (ADR-3)
  pages?: number;
  sizeKb?: number; // shown on the paper card
  extractedTextUrl?: string; // /data/papers/text/<id>.json — powers paper search
  source: 'official' | 'contributed';
  contributedBy?: string;
  verified: boolean; // checked against the official scheme before commit
}

/** One extracted question from a paper (build-time pipeline output, Phase 1.5). */
export interface PaperQuestion {
  paperId: string;
  moduleId?: string; // tag → powers "important questions" (Phase 4)
  text: string;
  marks?: number;
  type: 'theory' | 'numerical' | 'code' | 'mcq';
}