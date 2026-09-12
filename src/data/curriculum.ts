import type { PracticalLab, Semester, Subject, Topic } from '../types';
import { SEMESTER_3_SUBJECTS } from './semester3';
import { SEMESTER_4_SUBJECTS } from './semester4';

export const SEMESTERS: Semester[] = [
  {
    id: 3,
    title: 'Semester 3',
    tagline:
      'Systems foundation — Operating Systems, Databases, Networks, Web Technologies and C Programming (with Summer Internship-I).',
    subjectIds: SEMESTER_3_SUBJECTS.map((s) => s.id),
  },
  {
    id: 4,
    title: 'Semester 4',
    tagline:
      'Advanced core + electives — Data Structures, Software Engineering, E-Governance, Python and Program/Open Electives.',
    subjectIds: SEMESTER_4_SUBJECTS.map((s) => s.id),
  },
];

export const ALL_SUBJECTS: Subject[] = [...SEMESTER_3_SUBJECTS, ...SEMESTER_4_SUBJECTS];

export const getSubjectsBySemester = (semester: number): Subject[] =>
  ALL_SUBJECTS.filter((s) => s.semester === semester);

export const CORE_SUBJECTS = (semester: number): Subject[] =>
  getSubjectsBySemester(semester).filter((s) => s.category !== 'elective');

export const ELECTIVE_SUBJECTS = (semester: number): Subject[] =>
  getSubjectsBySemester(semester).filter((s) => s.category === 'elective');

const subjectById = new Map<string, Subject>(ALL_SUBJECTS.map((s) => [s.id, s]));
const topicById = new Map<string, Topic>();

for (const s of ALL_SUBJECTS) {
  for (const m of s.modules) {
    for (const t of m.topics) {
      topicById.set(t.id, t);
    }
  }
}

export const getSubject = (id?: string): Subject | undefined =>
  id ? subjectById.get(id) : undefined;

export const getTopic = (id: string): Topic | undefined => topicById.get(id);

export interface FlatTopic extends Topic {
  subjectId: string;
  subjectName: string;
  semester: number;
  moduleId: string;
  moduleTitle: string;
}

export const FLAT_TOPICS: FlatTopic[] = ALL_SUBJECTS.flatMap((s) =>
  s.modules.flatMap((m) =>
    m.topics.map((t) => ({
      ...t,
      subjectId: s.id,
      subjectName: s.shortName,
      semester: s.semester,
      moduleId: m.id,
      moduleTitle: m.title,
    })),
  ),
);

export const TOTAL_TOPICS = FLAT_TOPICS.length;

export interface FlatLab extends PracticalLab {
  subjectId: string;
  subjectName: string;
  semester: number;
}

export const FLAT_LABS: FlatLab[] = ALL_SUBJECTS.flatMap((s) =>
  (s.labs ?? []).map((lab) => ({
    ...lab,
    subjectId: s.id,
    subjectName: s.shortName,
    semester: s.semester,
  })),
);

export const TOTAL_LABS = FLAT_LABS.length;

export const searchResourceText = (q: string): FlatTopic[] => {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return FLAT_TOPICS.filter((t) =>
    `${t.subjectName} ${t.title} ${t.description} ${t.subtopics.join(' ')}`
      .toLowerCase()
      .includes(needle),
  );
};