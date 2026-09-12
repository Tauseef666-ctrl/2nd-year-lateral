import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FlaskConical,
  GraduationCap,
  Info,
  NotebookPen,
} from 'lucide-react';
import { ALL_SUBJECTS, getSubjectTopics } from '../data/curriculum';
import { Badge, Card, PageHeader } from '../components/ui';

export default function CollegeAssignments() {
  const semesters = [...new Set(ALL_SUBJECTS.map((s) => s.semester))].sort((a, b) => a - b);

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="College work"
        title="College Assignments"
        subtitle="One place for every subject's assignment briefs once they're rolled out by your faculty."
      >
        <div className="inline-flex items-center gap-1.5 self-end rounded-xl bg-mint-500/10 px-3 py-1.5 text-xs font-bold text-mint-600 dark:text-mint-400">
          <GraduationCap className="h-3.5 w-3.5" />
          {ALL_SUBJECTS.length} subjects
        </div>
      </PageHeader>

      <Card className="flex flex-wrap items-center gap-4 border-accent/25 p-5">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
          <Info className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
            Assignment sets coming soon
          </p>
          <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
            Assignment briefs (with problems, formats and marking schemes) will be added here as
            faculty releases them. Until then, use each subject's page for videos, notes and
            practical exercises.
          </p>
        </div>
      </Card>

      {semesters.map((sem) => {
        const label = sem === 1 || sem === 2 ? `Foundation · Semester ${sem}` : `Semester ${sem}`;
        const subjects = ALL_SUBJECTS.filter((s) => s.semester === sem && s.category !== 'project');
        return (
          <div key={sem}>
            <div className="mb-3 flex items-center gap-2">
              <h2 className="font-display text-xl font-bold text-ink-950 dark:text-white">{label}</h2>
              <span className="text-xs font-medium text-ink-400">{subjects.length} subjects</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((s) => {
                const labs = s.labs ?? [];
                const topics = getSubjectTopics(s.id);
                return (
                  <Card key={s.id} className="flex flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-base font-bold leading-snug text-ink-950 dark:text-white">
                          {s.shortName}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-ink-400">{s.code} · {s.name}</p>
                      </div>
                      <Badge tone="ink">{s.credits} cr</Badge>
                    </div>
                    <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-ink-500 dark:text-ink-400">
                      <NotebookPen className="h-3.5 w-3.5 text-accent" />
                      Assignment sets — pending faculty release
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <Link
                        to={`/subject/${s.id}`}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white transition hover:bg-accent-600"
                      >
                        {topics.length} topics
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      {labs.length > 0 ? (
                        <Link
                          to={`/practicals?subject=${s.id}`}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-3 py-2 text-xs font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
                        >
                          <FlaskConical className="h-3 w-3" />
                          Labs
                        </Link>
                      ) : null}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}