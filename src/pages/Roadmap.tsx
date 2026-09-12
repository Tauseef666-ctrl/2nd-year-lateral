import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  CircleDot,
  FlaskConical,
  Flag,
  GraduationCap,
} from 'lucide-react';
import { FLAT_TOPICS, SEMESTERS, getSubject } from '../data/curriculum';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, PageHeader, ProgressBar } from '../components/ui';

interface Phase {
  title: string;
  caption: string;
  subjectIds: string[];
  link?: { to: string; label: string };
}

function buildPhases(): Phase[] {
  const sem3core = SEMESTERS.find((s) => s.id === 3)?.subjectIds.filter(
    (id) => {
      const s = getSubject(id);
      return s ? s.category !== 'elective' : false;
    },
  ) ?? [];
  return [
    {
      title: 'Semester 3 · Foundation',
      caption: 'Operating systems, databases, networks, web technologies and C programming.',
      subjectIds: sem3core,
    },
    {
      title: 'Semester 4 · Advanced core',
      caption: 'Data structures, software engineering, e-governance and Python.',
      subjectIds: ['ds', 'se', 'egovernance', 'python'],
    },
    {
      title: 'Program Elective-1 (choose one)',
      caption: 'Computer System Organization or Free & Open Source Software.',
      subjectIds: ['cso', 'foss'],
    },
    {
      title: 'Open Elective-1 (choose one)',
      caption: 'Project Management or Industrial Robotics.',
      subjectIds: ['project-mgmt', 'robotics'],
    },
    {
      title: 'Open Elective-2 · Industry track',
      caption: 'AI & ML (TATA certification), Product Design, or Engineering Economics.',
      subjectIds: ['ai-ml', 'product-design', 'engineering-economics'],
    },
    {
      title: 'Practical labs & internships',
      caption: 'Every official lab with algorithms, outputs and error guides, plus Summer Internship-1.',
      subjectIds: [],
      link: { to: '/practicals', label: 'Open all labs' },
    },
    {
      title: 'Exam season',
      caption: 'One-shots, question banks and quick revision per subject, plus random practice.',
      subjectIds: [],
      link: { to: '/exam', label: 'Enter exam mode' },
    },
  ];
}

const PHASES = buildPhases();

function PhaseRow({ phase, index }: { phase: Phase; index: number }) {
  const completed = useLearningStore((s) => s.completed);
  const topics = FLAT_TOPICS.filter((t) => phase.subjectIds.includes(t.subjectId));
  const done = topics.filter((t) => completed.includes(t.id)).length;
  const isLast = index === PHASES.length - 1;

  const status =
    topics.length === 0
      ? 'done'
      : done === topics.length
        ? 'done'
        : done > 0
          ? 'progress'
          : 'todo';

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={
            status === 'done'
              ? 'text-mint-500'
              : status === 'progress'
                ? 'text-accent'
                : 'text-ink-300 dark:text-ink-600'
          }
        >
          {status === 'done' ? (
            <CheckCircle2 className="h-6 w-6" />
          ) : status === 'progress' ? (
            <CircleDot className="h-6 w-6" />
          ) : (
            <Circle className="h-6 w-6" />
          )}
        </div>
        {!isLast ? (
          <div className="w-px flex-1 bg-ink-100 dark:bg-ink-800" />
        ) : null}
      </div>

      <Card className="mb-4 flex-1 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
              Step {index + 1}
            </p>
            <h3 className="mt-0.5 font-display text-sm font-bold text-ink-950 dark:text-white">
              {phase.title}
            </h3>
          </div>
          {topics.length > 0 ? (
            <Badge
              tone={status === 'done' ? 'mint' : status === 'progress' ? 'accent' : 'ink'}
            >
              {done}/{topics.length} topics
            </Badge>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          {phase.caption}
        </p>

        {topics.length > 0 ? (
          <div className="mt-3">
            <ProgressBar value={done} max={topics.length} />
          </div>
        ) : null}

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {phase.subjectIds.map((id) => {
            const s = getSubject(id);
            if (!s) return null;
            const t = FLAT_TOPICS.filter((x) => x.subjectId === id);
            const d = t.filter((x) => completed.includes(x.id)).length;
            return (
              <Link
                key={id}
                to={`/subject/${id}`}
                className="inline-flex items-center gap-1 rounded-xl border border-ink-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
              >
                {d === t.length && t.length > 0 ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-mint-500" />
                ) : null}
                {s.shortName}
              </Link>
            );
          })}
          {phase.link ? (
            <Link
              to={phase.link.to}
              className="inline-flex items-center gap-1 rounded-xl bg-accent px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-accent-600"
            >
              {phase.link.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
      </Card>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Journey"
        title="Learning Roadmap"
        subtitle="A suggested route through both semesters. Work top to bottom — each phase unlocks confidence for the next."
      />

      <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-4 py-3">
        <Flag className="h-4 w-4 shrink-0 text-accent" />
        <p className="text-xs leading-relaxed text-ink-600 dark:text-ink-300">
          Finish a phase by completing every topic. Electives are choose-one — explore both options
          before committing.
        </p>
      </div>

      <div className="mt-2">
        {PHASES.map((p, i) => (
          <PhaseRow key={p.title} phase={p} index={i} />
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          to="/semester/3"
          className="group flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-5 transition hover:border-accent hover:shadow-cardHover dark:border-ink-800 dark:bg-ink-900"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-accent" />
            <p className="font-display text-sm font-bold text-ink-900 dark:text-ink-100">
              Start Semester 3
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-ink-300 transition group-hover:text-accent" />
        </Link>
        <Link
          to="/practicals"
          className="group flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-5 transition hover:border-accent hover:shadow-cardHover dark:border-ink-800 dark:bg-ink-900"
        >
          <div className="flex items-center gap-3">
            <FlaskConical className="h-5 w-5 text-mint-500" />
            <p className="font-display text-sm font-bold text-ink-900 dark:text-ink-100">
              Jump to practicals
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-ink-300 transition group-hover:text-accent" />
        </Link>
      </div>
    </section>
  );
}