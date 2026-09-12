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