import {
  Briefcase,
  CheckCircle2,
  Circle,
  ClipboardList,
  ExternalLink,
  Flag,
  Hammer,
  Lightbulb,
} from 'lucide-react';
import { useLearningStore } from '../store/useStore';
import { ytSearch } from '../data/yt';
import { Badge, Card, PageHeader, ProgressBar, cx } from '../components/ui';

const PLANNER_STEPS = [
  {
    id: 'problem-statement',
    title: 'Problem statement',
    hint: 'One paragraph: who has the problem, what it is, and why it matters.',
  },
  {
    id: 'objectives',
    title: 'Objectives',
    hint: '2–4 measurable goals the project must achieve.',
  },
  {
    id: 'features',
    title: 'Feature list',
    hint: 'Must-haves vs nice-to-haves. Keep the MVP tight.',
  },
  {
    id: 'tech-stack',
    title: 'Technology stack',
    hint: 'Languages, frameworks, database and hosting you plan to use.',
  },
  {
    id: 'db-design',
    title: 'Database design',
    hint: 'Entities, relationships and key tables for your data.',
  },
  {
    id: 'ui-design',
    title: 'UI / wireframes',
    hint: 'Sketch the screens before writing code.',
  },
  {
    id: 'dev-stages',
    title: 'Development stages',
    hint: 'Break the build into weekly milestones.',
  },
  {
    id: 'testing',
    title: 'Testing plan',
    hint: 'Happy path, edge cases, and user acceptance checks.',
  },
  {
    id: 'documentation',
    title: 'Documentation',
    hint: 'README, setup steps, architecture notes.',
  },
  {
    id: 'presentation',
    title: 'Presentation',
    hint: 'Demo flow, slides and the 5-minute story of your project.',
  },
];

const IDEA_CATEGORIES = [
  { title: 'Web', ideas: ['College library portal', 'Attendance tracker', 'Hostel management system', 'Online job-portal clone'] },
  { title: 'Mobile', ideas: ['Canteen ordering app', 'Reminder & habit tracker', 'Bus-timetable app for students', 'Expense splitter'] },
  { title: 'AI/ML', ideas: ['Spam message classifier', 'Marks predictor', 'FAQ chatbot', 'Handwritten-digit recogniser'] },
  { title: 'Database', ideas: ['Inventory system', 'Blood-donation directory', 'Farm produce marketplace'] },
  { title: 'Networking', ideas: ['Small-office network topology builder', 'Bandwidth usage dashboard'] },
  { title: 'Automation', ideas: ['Bulk file-renamer & organiser', 'Web scrape → spreadsheet pipeline'] },
  { title: 'IoT', ideas: ['Smart notice board', 'Room occupancy sensor dashboard'] },
  { title: 'Education', ideas: ['Quiz platform (like this hub)', 'Study-group planner', 'Notes sharing board'] },
  { title: 'Utility', ideas: ['Electricity bill calculator', 'PG/rent finder', 'Exam timetable scheduler'] },
];

export default function MinorProject() {
  const projectSteps = useLearningStore((s) => s.projectSteps);
  const toggleProjectStep = useLearningStore((s) => s.toggleProjectStep);
  const done = PLANNER_STEPS.filter((s) => projectSteps.includes(s.id)).length;

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow="Semester 3"
        title="Minor Project Workspace"
        subtitle="Plan, build and present your minor project — with the official BTEUP requirement clearly separated from recommended guidance."
      />

      <Card className="border-accent/30 bg-accent/5 p-5">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent dark:bg-accent/20">
            <Flag className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
              Official BTEUP requirement
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              The 2026–27 lateral-entry scheme lists a Minor Project in Semester 3 (with a
              presentation). A Summer Internship occurs after the fourth-semester examination —
              record that experience on this page too.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
          <ClipboardList className="h-5 w-5 text-accent" />
          Project planner
        </h2>
        <ProgressBar value={done} max={PLANNER_STEPS.length} className="mb-3" />
        <div className="space-y-2.5">
          {PLANNER_STEPS.map((step, i) => {
            const isDone = projectSteps.includes(step.id);
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => toggleProjectStep(step.id)}
                className={cx(
                  'flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                  isDone
                    ? 'border-mint-500/50 bg-mint-500/10'
                    : 'border-ink-100 bg-white hover:border-accent dark:border-ink-800 dark:bg-ink-900',
                )}
              >
                <span
                  className={cx(
                    'grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold',
                    isDone
                      ? 'bg-mint-500/15 text-mint-600 dark:text-mint-400'
                      : 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-300',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cx(
                      'block text-sm font-semibold',
                      isDone ? 'text-mint-600 dark:text-mint-400' : 'text-ink-800 dark:text-ink-100',
                    )}
                  >
                    {step.title}
                  </span>
                  <span className="block text-xs text-ink-400">{step.hint}</span>
                </span>
                {isDone ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-mint-500" />
                ) : (
                  <Circle className="h-5 w-5 shrink-0 text-ink-200 dark:text-ink-700" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
          <Lightbulb className="h-5 w-5 text-mint-500" />
          Project ideas
        </h2>
        <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-ink-400">
          <Badge tone="mint">Recommended guidance</Badge>
          Not part of the official syllabus — use as inspiration only.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {IDEA_CATEGORIES.map((cat) => (
            <Card key={cat.title} className="p-4">
              <h3 className="text-sm font-bold text-ink-900 dark:text-ink-100">{cat.title}</h3>
              <ul className="mt-2 space-y-1.5">
                {cat.ideas.map((idea) => (
                  <li key={idea} className="flex gap-2 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint-500" />
                    {idea}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <button
          type="button"
          onClick={() => window.open(ytSearch('diploma computer science minor project ideas'), '_blank')}
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300"
        >
          <ExternalLink className="h-4 w-4" />
          Search YouTube for more project ideas
        </button>
      </div>

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint-500/10 text-mint-600 dark:text-mint-400">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink-950 dark:text-white">
                Summer internship
              </p>
              <p className="text-xs text-ink-400">
                Scheduled after the fourth-semester examination — prepare your CV and pick 2–3
                target domains early.
              </p>
            </div>
          </div>
          <a
            href={ytSearch('diploma cse internship preparation portfolio')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-mint-500 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-mint-600"
          >
            <Hammer className="h-4 w-4" />
            Look up internship prep
          </a>
        </div>
      </Card>
    </section>
  );
}