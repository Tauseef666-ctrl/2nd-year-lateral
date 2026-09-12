import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { SEMESTERS, getSubject, getSubjectTopics } from '../data/curriculum';
import type { Subject } from '../types';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, EmptyState, PageHeader, ProgressBar } from '../components/ui';

const categoryLabels: Record<Subject['category'], string> = {
  theory: 'Theory',
  practicum: 'Practicum',
  practical: 'Lab',
  elective: 'Elective',
  audit: 'Audit',
  project: 'Project',
};

function SubjectCard({ subject }: { subject: Subject }) {
  const completed = useLearningStore((s) => s.completed);
  const topics = getSubjectTopics(subject.id);
  const done = topics.filter((t) => completed.includes(t.id)).length;

  return (
    <Link to={`/subject/${subject.id}`} className="group block">
      <Card className="flex h-full flex-col p-5 transition hover:shadow-cardHover">
        <div className="flex items-start justify-between gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white dark:bg-accent/15 dark:text-accent-300">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="flex flex-wrap justify-end gap-1.5">
            <Badge tone={subject.category === 'elective' ? 'mint' : 'ink'}>{categoryLabels[subject.category]}</Badge>
          </div>
        </div>
        <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink-950 dark:text-white">
          {subject.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-ink-400">
          {subject.code} · {subject.periods} · {subject.credits} cr
        </p>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          {subject.description}
        </p>
        <div className="mt-4">
          <ProgressBar value={done} max={topics.length} />
          <div className="mt-1.5 flex items-center justify-between text-xs text-ink-400">
            <span>
              {done}/{topics.length} topics
            </span>
            <span className="font-medium text-accent opacity-0 transition group-hover:opacity-100">
              Open →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default function Semester() {
  const { semesterId } = useParams();
  const semester = SEMESTERS.find((s) => String(s.id) === semesterId);

  if (!semester) {
    return (
      <section>
        <PageHeader eyebrow="Curriculum" title="Semester not found" />
        <EmptyState
          icon={<Layers className="h-6 w-6" />}
          title="Unknown semester"
          body="Only Semester 3 and Semester 4 exist in this syllabus."
          action={
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          }
        />
      </section>
    );
  }

  const subjects = semester.subjectIds
    .map((id) => getSubject(id))
    .filter((s): s is Subject => Boolean(s));

  return (
    <section>
      <PageHeader
        eyebrow="Curriculum"
        title={semester.title}
        subtitle={semester.tagline}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
        >
          <ArrowLeft className="h-4 w-4" />
          All semesters
        </Link>
      </PageHeader>

      <div className="flex items-center gap-2 pb-4 text-sm font-medium text-ink-400">
        <ArrowRight className="h-4 w-4 text-accent" />
        {subjects.length} subjects in this semester
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s) => (
          <SubjectCard key={s.id} subject={s} />
        ))}
      </div>
    </section>
  );
}