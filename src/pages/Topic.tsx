import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileText,
  Globe,
  Lightbulb,
  NotebookPen,
  Sparkles,
  Youtube,
} from 'lucide-react';
import { FLAT_TOPICS, getSubject } from '../data/curriculum';
import { getChapterNote } from '../data/chapterNotes';
import type { Language, ResourceKind, StudyNote } from '../types';
import { Badge, Card, EmptyState, PageHeader, SourceNote, cx } from '../components/ui';
import VideoCard from '../components/VideoCard';
import PracticeCard from '../components/PracticeCard';
import { ChapterNotes } from '../components/ChapterNotes';
import { ThankYouCard } from '../components/ThankYouCard';

const DIFF_LABELS: Record<string, string> = {
  beginner: 'Foundation',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const ORDER: ResourceKind[] = ['deep', 'one-shot', 'playlist', 'revision', 'practical', 'exam'];

const GROUP_CAPTIONS: Record<ResourceKind, { title: string; caption: string }> = {
  deep: { title: 'Deep lectures', caption: 'Understand the concept thoroughly from the ground up.' },
  'one-shot': { title: 'One-shot revision', caption: 'Complete topic coverage in a single session.' },
  playlist: { title: 'Playlists', caption: 'Multi-video courses spanning several hours.' },
  revision: { title: 'Quick revision', caption: 'Fast re-runs right before an exam or test.' },
  practical: { title: 'Practical guidance', caption: 'Tutorials and walk-throughs for hands-on work.' },
  exam: { title: 'Exam prep', caption: 'Questions, answers and model paper practice.' },
};

const langOptions: Array<{ value: Language | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'hindi', label: 'हिंदी' },
  { value: 'hinglish', label: 'EN+हिं' },
  { value: 'english', label: 'EN' },
];

const NOTE_META: Record<StudyNote['format'], { label: string; icon: ReactNode }> = {
  notes: { label: 'Notes', icon: <NotebookPen className="h-4 w-4" /> },
  pdf: { label: 'PDF', icon: <FileText className="h-4 w-4" /> },
  website: { label: 'Website', icon: <Globe className="h-4 w-4" /> },
  youtube: { label: 'Video', icon: <Youtube className="h-4 w-4" /> },
};

export default function Topic() {
  const { topicId } = useParams();
  const [lang, setLang] = useState<Language | 'all'>('all');

  const flat = FLAT_TOPICS.find((t) => t.id === topicId);
  const subject = flat ? getSubject(flat.subjectId) : undefined;

  if (!flat || !subject) {
    return (
      <section>
        <PageHeader eyebrow="Topic" title="Topic not found" />
        <EmptyState
          icon={<Sparkles className="h-6 w-6" />}
          title="Unknown topic"
          body="This topic does not exist in the syllabus."
          action={
            <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          }
        />
      </section>
    );
  }

  const subjectTopics = FLAT_TOPICS.filter((t) => t.subjectId === flat.subjectId);
  const idx = subjectTopics.findIndex((t) => t.id === flat.id);
  const prev = idx > 0 ? subjectTopics[idx - 1] : undefined;
  const next = idx < subjectTopics.length - 1 ? subjectTopics[idx + 1] : undefined;

  const chapterNote = getChapterNote(flat.subjectId, flat.moduleId);
  const hasStudyNotes = !!flat.notes && flat.notes.length > 0;

  const groups = ORDER.map((kind) => ({
    kind,
    items: flat.resources.filter((r) => r.kind === kind && (lang === 'all' || r.language === lang)),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="space-y-8">
      <PageHeader
        eyebrow={`Semester ${subject.semester} · ${subject.shortName}`}
        title={flat.title}
      >
        <Link
          to={`/subject/${subject.id}`}
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to subject
        </Link>
      </PageHeader>
      <SourceNote />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {flat.description}
          </p>
          <p className="mt-3 text-xs font-medium text-ink-400 dark:text-ink-500">
            Curated by a fellow 2nd-year student, Tauseef Khan (2026-2027).
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {flat.subtopics.map((s) => (
              <span
                key={s}
                className="rounded-lg bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge tone="accent">{DIFF_LABELS[flat.difficulty]}</Badge>
            <Badge tone="ink">{flat.marks} marks</Badge>
            <Badge tone="ink">{flat.periods} periods</Badge>
          </div>
          <div className="mt-4 space-y-2">
            <a
              href="#video-resources"
              className="flex items-center justify-between rounded-xl border border-ink-100 bg-ink-50/60 px-3.5 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-800 dark:bg-ink-800/30 dark:text-ink-200"
            >
              Video resources
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            {chapterNote || hasStudyNotes ? (
              <a
                href={chapterNote ? '#chapter-notes' : '#study-notes'}
                className="flex items-center justify-between rounded-xl border border-ink-100 bg-ink-50/60 px-3.5 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-800 dark:bg-ink-800/30 dark:text-ink-200"
              >
                {chapterNote ? 'Chapter notes' : 'Study notes'}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
            <Link
              to={`/subject/${subject.id}`}
              className="flex items-center justify-between rounded-xl border border-ink-100 bg-ink-50/60 px-3.5 py-2.5 text-sm font-medium text-ink-700 transition hover:border-accent hover:text-accent dark:border-ink-800 dark:bg-ink-800/30 dark:text-ink-200"
            >
              All {subject.shortName} topics
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Card>
      </div>

      <div id="video-resources">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <Sparkles className="h-5 w-5 text-accent" />
            Video resources
          </h2>
          <div className="flex rounded-xl border border-ink-200 bg-white p-0.5 dark:border-ink-700 dark:bg-ink-800">
            {langOptions.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setLang(o.value)}
                className={cx(
                  'rounded-[10px] px-2.5 py-1 text-xs font-medium transition',
                  lang === o.value
                    ? 'bg-accent text-white'
                    : 'text-ink-500 hover:text-accent dark:text-ink-400',
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {groups.length === 0 ? (
          <EmptyState
            icon={<Sparkles className="h-6 w-6" />}
            title="No videos in this language"
            body="Try switching the language filter to see more resources."
          />
        ) : null}

        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.kind}>
              <div className="mb-3 flex items-baseline gap-2">
                <h3 className="font-display text-base font-bold text-ink-900 dark:text-ink-100">
                  {GROUP_CAPTIONS[g.kind].title}
                </h3>
                <span className="text-xs font-medium text-ink-400">
                  {g.items.length} · {GROUP_CAPTIONS[g.kind].caption}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((r) => (
                  <VideoCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {chapterNote ? (
        <div>
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <NotebookPen className="h-5 w-5 text-mint-500" />
            Chapter notes
          </h2>
          <ChapterNotes subjectId={flat.subjectId} moduleId={flat.moduleId} defaultOpen />
        </div>
      ) : null}

      {hasStudyNotes ? (
        <div id="study-notes">
          <h2 className="mb-1 flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <NotebookPen className="h-5 w-5 text-mint-500" />
            External study notes
          </h2>
          <p className="mb-3 text-xs text-ink-400">
            Reviewed study material — official PDFs and trusted supplementary sources.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {flat.notes.map((note) => {
              const meta = NOTE_META[note.format];
              return (
                <a
                  key={note.id}
                  href={note.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-4 transition hover:border-accent hover:shadow-cardHover dark:border-ink-800 dark:bg-ink-900"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
                      {meta.icon}
                    </span>
                    <Badge tone={note.source === 'official' ? 'accent' : 'ink'}>
                      {note.source === 'official' ? 'Official' : 'Supplementary'}
                    </Badge>
                  </div>
                  <p className="mt-3 font-display text-sm font-bold leading-snug text-ink-900 dark:text-ink-100">
                    {note.title}
                  </p>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                    {note.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent dark:text-accent-300">
                    {meta.label}
                    <ExternalLink className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      ) : null}

      {flat.practice.length > 0 ? (
        <div>
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white">
            <Lightbulb className="h-5 w-5 text-mint-500" />
            Practice questions
          </h2>
          <div className="space-y-3">
            {flat.practice.map((q, qi) => (
              <PracticeCard key={qi} question={q.question} hint={q.hint} n={qi + 1} />
            ))}
          </div>
        </div>
      ) : null}

      {flat.related && flat.related.length > 0 ? (
        <div>
          <h2 className="mb-3 font-display text-xl font-bold text-ink-950 dark:text-white">
            Related topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {flat.related.map((r) => {
              const target = FLAT_TOPICS.find((t) => t.id === r.id);
              return (
                <Link
                  key={r.id}
                  to={`/topic/${r.id}`}
                  className="group inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
                >
                  {target?.title ?? r.title}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      {prev || next ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/topic/${prev.id}`}
              className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 transition hover:border-accent dark:border-ink-800 dark:bg-ink-900"
            >
              <ArrowLeft className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-accent" />
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-400">
                  Previous
                </span>
                <span className="block truncate text-sm font-medium text-ink-700 dark:text-ink-200">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/topic/${next.id}`}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-ink-100 bg-white p-4 text-right transition hover:border-accent dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-400">
                  Next
                </span>
                <span className="block truncate text-sm font-medium text-ink-700 dark:text-ink-200">
                  {next.title}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-accent" />
            </Link>
          ) : null}
        </div>
      ) : null}

      <ThankYouCard />
    </section>
  );
}