import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Hammer,
  Layers,
  Users,
} from 'lucide-react';
import { SEMESTERS, getSubject, getSubjectTopics } from '../data/curriculum';
import type { Subject } from '../types';
import { Badge, Card, EmptyState, PageHeader } from '../components/ui';

const categoryLabels: Record<Subject['category'], string> = {
  theory: 'Theory',
  practicum: 'Practicum',
  practical: 'Lab',
  elective: 'Elective',
  audit: 'Audit',
  project: 'Project',
};

function SubjectCard({ subject }: { subject: Subject }) {
  const topics = getSubjectTopics(subject.id);

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
        <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
          <span>{topics.length} topics</span>
          <span className="font-medium text-accent opacity-0 transition group-hover:opacity-100">
            Open →
          </span>
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

      <div>
        <h2 className="mb-3 font-display text-xl font-bold text-ink-950 dark:text-white">
          Beyond the classroom
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {semester.id === 3 ? (
            <>
              <Card className="flex flex-col gap-2 p-5">
                <Users className="h-5 w-5 text-accent" />
                <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                  Student-Centred Activities
                </p>
                <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                  Weekly activities across the semester — technical quizzes, seminars, soft-skill
                  and community sessions.
                </p>
              </Card>
              <Card className="flex flex-col gap-2 p-5">
                <Hammer className="h-5 w-5 text-accent" />
                <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                  Minor Project
                </p>
                <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                  Official Semester 3 requirement with presentation. Plan and document it alongside
                  your subject modules.
                </p>
              </Card>
              <Card className="flex flex-col gap-2 p-5">
                <BookOpen className="h-5 w-5 text-mint-500" />
                <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                  Summer Internship
                </p>
                <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                  Scheduled after the fourth-semester examination — start preparing your portfolio
                  during this semester.
                </p>
              </Card>
            </>
          ) : (
            <>
              <Card className="flex flex-col gap-2 p-5">
                <Users className="h-5 w-5 text-accent" />
                <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                  Student-Centred Activities
                </p>
                <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                  Continued weekly activities — Industry 4.0 exposure, hackathons and soft skills.
                </p>
              </Card>
              <Card className="flex flex-col gap-2 p-5">
                <BadgeCheck className="h-5 w-5 text-mint-500" />
                <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                  Advanced Skill Development
                </p>
                <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                  Min. 20 hours of recognised certification (Open Elective-1) — pick a track and
                  keep your certificates safe.
                </p>
              </Card>
              <Card className="flex flex-col gap-2 p-5">
                <Layers className="h-5 w-5 text-ink-400" />
                <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                  Electives choice
                </p>
                <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                  Pick one Program Elective (CSO / FOSS) and one Open Elective (Project Management /
                  Robotics) from the subject cards above.
                </p>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  );
}