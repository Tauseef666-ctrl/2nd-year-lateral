import { Link } from 'react-router-dom';
import { ArrowRight, BookMarked, BookOpen } from 'lucide-react';
import { ALL_SUBJECTS, getSubjectTopics } from '../data/curriculum';
import type { Subject } from '../types';
import { Badge, Card, PageHeader, SourceNote } from '../components/ui';

const categoryLabels: Record<Subject['category'], string> = {
  theory: 'Theory',
  practicum: 'Practicum',
  practical: 'Lab',
  elective: 'Elective',
  audit: 'Audit',
  project: 'Project',
};

export default function Subjects() {
  const semesters = [...new Set(ALL_SUBJECTS.map((s) => s.semester))].sort((a, b) => a - b);

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Curriculum"
        title="All subjects"
        subtitle="Foundation subjects plus the full Semester 3 and Semester 4 syllabus — each with curated video one-shots, playlists and chapter notes."
      >
        <div className="inline-flex items-center gap-1.5 self-end rounded-xl bg-mint-500/10 px-3 py-1.5 text-xs font-bold text-mint-600 dark:text-mint-400">
          <BookMarked className="h-3.5 w-3.5" />
          {ALL_SUBJECTS.length} subjects
        </div>
      </PageHeader>
      <SourceNote />

      {semesters.map((sem) => {
        const subjects = ALL_SUBJECTS.filter((s) => s.semester === sem);
        const label = sem === 1 || sem === 2 ? `Foundation · Semester ${sem}` : `Semester ${sem}`;
        return (
          <div key={sem}>
            <div className="mb-3 flex items-center gap-2">
              <h2 className="font-display text-xl font-bold text-ink-950 dark:text-white">{label}</h2>
              <span className="text-xs font-medium text-ink-400">{subjects.length} subjects</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((s) => {
                const topics = getSubjectTopics(s.id);
                const isFoundation = sem === 1 || sem === 2;
                return (
                  <Link
                    key={s.id}
                    to={`/subject/${s.id}`}
                    className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-5 transition hover:border-accent hover:shadow-cardHover dark:border-ink-800 dark:bg-ink-900"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white dark:bg-accent/15 dark:text-accent-300">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="flex flex-wrap justify-end gap-1.5">
                        <Badge tone={s.category === 'elective' ? 'mint' : 'ink'}>
                          {categoryLabels[s.category]}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink-950 dark:text-white">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-ink-400">
                      {s.code} · {s.periods} · {s.credits} cr
                    </p>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                      {s.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                      <span>{topics.length} topics</span>
                      {isFoundation ? <Badge tone="accent">Foundation</Badge> : null}
                      <span className="font-medium text-accent opacity-0 transition group-hover:opacity-100">
                        Open →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      <Card className="flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
            Looking for a specific topic?
          </p>
          <p className="mt-1 text-xs text-ink-400">
            Search across every subject, module and one-shot.
          </p>
        </div>
        <Link
          to="/search"
          className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-600"
        >
          Search everything
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Card>
    </section>
  );
}