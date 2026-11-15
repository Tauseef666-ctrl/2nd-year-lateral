import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Download,
  ExternalLink,
  FileText,
  FolderOpen,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react';
import { track } from '@vercel/analytics';
import { PAPERS, PAPER_YEARS, PAPERS_VERIFIED_COUNT } from '../data/papers';
import { getSubject } from '../data/curriculum';
import { useLearningStore } from '../store/useStore';
import { Badge, Card, EmptyState, PageHeader, REPO_URL, cx } from '../components/ui';
import type { Paper } from '../types';

const KIND_LABEL: Record<Paper['kind'], string> = {
  regular: 'Regular',
  back: 'Back paper',
  special: 'Special/carry',
};

const SESSION_LABEL: Record<Paper['session'], string> = {
  odd: 'Odd (Dec–Jan)',
  even: 'Even (May–Jun)',
};

const CONTRIBUTE_URL = `${REPO_URL}/issues/new?template=paper-submission.yml`;

function chipClass(active: boolean) {
  return cx(
    'rounded-full border px-3 py-1 text-xs font-medium transition',
    active
      ? 'border-accent bg-accent text-white shadow-glow dark:border-accent-300 dark:bg-accent-300 dark:text-ink-950'
      : 'border-ink-200 bg-white text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300 dark:hover:border-accent-300 dark:hover:text-accent-300',
  );
}

function formatSize(sizeKb?: number) {
  if (!sizeKb) return undefined;
  return sizeKb >= 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;
}

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="mr-0.5 w-14 shrink-0 text-[10px] font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
        {label}
      </span>
      {children}
    </div>
  );
}

function PaperCard({
  paper,
  open,
  onToggle,
}: {
  paper: Paper;
  open: boolean;
  onToggle: () => void;
}) {
  const subject = getSubject(paper.subjectId);
  const size = formatSize(paper.sizeKb);

  return (
    <Card className={cx('overflow-hidden transition-all', open && 'sm:col-span-2')}>
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-300">
          <FileText className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink-900 dark:text-ink-100">
            {subject?.shortName ?? paper.subjectId.toUpperCase()}
            <span className="ml-1.5 text-xs font-medium text-ink-400">
              {subject?.name ?? ''}
            </span>
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <Badge tone="accent">{paper.year}</Badge>
            <Badge tone="ink">Sem {paper.semester}</Badge>
            <Badge tone="ink">{KIND_LABEL[paper.kind]}</Badge>
            {size ? <Badge tone="ink">{size}</Badge> : null}
            {paper.verified ? (
              <Badge tone="mint">
                <ShieldCheck className="h-3 w-3" />
                verified
              </Badge>
            ) : null}
            {paper.source === 'contributed' && paper.contributedBy ? (
              <Badge tone="ink">
                <Users className="h-3 w-3" />
                {paper.contributedBy}
              </Badge>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggle}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition',
              open
                ? 'border border-ink-200 text-ink-500 hover:text-ink-900 dark:border-ink-700 dark:text-ink-300'
                : 'bg-accent text-white shadow-glow hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200',
            )}
          >
            {open ? (
              <>
                <X className="h-4 w-4" />
                Close
              </>
            ) : (
              <>
                <FileText className="h-4 w-4" />
                View
              </>
            )}
          </button>
          <a
            href={paper.fileUrl}
            download
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-600 transition hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink-100 bg-ink-50/60 p-3 dark:border-ink-800 dark:bg-ink-950/40">
          <iframe
            src={`${paper.fileUrl}#view=FitH`}
            title={`BTEUP ${paper.year} ${subject?.name ?? paper.subjectId} question paper`}
            loading="lazy"
            className="h-[70vh] min-h-[420px] w-full rounded-xl border border-ink-100 bg-white dark:border-ink-800"
          />
          <p className="mt-2 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-ink-400 dark:text-ink-500">
            <span>Preview not loading? Some browsers block inline PDFs.</span>
            <a
              href={paper.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-accent hover:text-accent-600 dark:text-accent-300"
            >
              Open in new tab
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      ) : null}
    </Card>
  );
}

export default function Papers() {
  const [searchParams] = useSearchParams();
  const recordPaperOpen = useLearningStore((s) => s.recordPaperOpen);

  const [semester, setSemester] = useState<'all' | number>(() => {
    const s = Number(searchParams.get('semester'));
    return Number.isFinite(s) && s > 0 ? s : 'all';
  });
  const [subjectId, setSubjectId] = useState<string>(() => searchParams.get('subject') ?? 'all');
  const [year, setYear] = useState<'all' | number>('all');
  const [kind, setKind] = useState<'all' | Paper['kind']>('all');
  const [session, setSession] = useState<'all' | Paper['session']>('all');
  const [openId, setOpenId] = useState<string | null>(() => searchParams.get('paper'));

  /* React to chip links (`/papers?subject=os`, search hits) while mounted. */
  useEffect(() => {
    const s = searchParams.get('subject');
    if (s) setSubjectId(s);
    const p = searchParams.get('paper');
    if (p) setOpenId(p);
  }, [searchParams]);

  /* Subject options follow the semester filter — only subjects that actually have papers. */
  const subjectOptions = useMemo(
    () =>
      [...new Set(PAPERS.filter((p) => semester === 'all' || p.semester === semester).map((p) => p.subjectId))].sort(),
    [semester],
  );

  const filtered = useMemo(() => {
    return PAPERS.filter(
      (p) =>
        (semester === 'all' || p.semester === semester) &&
        (subjectId === 'all' || p.subjectId === subjectId) &&
        (year === 'all' || p.year === year) &&
        (kind === 'all' || p.kind === kind) &&
        (session === 'all' || p.session === session),
    );
  }, [semester, subjectId, year, kind, session]);

  const openPaper = (paper: Paper) => {
    const next = openId === paper.id ? null : paper.id;
    setOpenId(next);
    if (next) {
      recordPaperOpen(paper.id);
      track('paper_open', { subjectId: paper.subjectId, year: paper.year });
    }
  };

  const hasFilters = semester !== 'all' || subjectId !== 'all' || year !== 'all' || kind !== 'all' || session !== 'all';
  const clearFilters = () => {
    setSemester('all');
    setSubjectId('all');
    setYear('all');
    setKind('all');
    setSession('all');
  };

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Exam prep"
        title="Previous year papers"
        subtitle="BTEUP question papers indexed per subject — filter, preview inline, download. Odd-sem papers (Sem 3 / 5) are the priority: those exams land Dec 2026 – Jan 2027."
      >
        <a
          href={CONTRIBUTE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3.5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
        >
          <FolderOpen className="h-4 w-4" />
          Share a paper
        </a>
      </PageHeader>

      {PAPERS.length === 0 ? (
        <EmptyState
          icon={<FileText className="h-6 w-6" />}
          title="Papers are being collected"
          body="The bank fills as classmates share last year's papers — BTEUP hardly keeps a public archive, so this index is built by students, for students. Have a Sem-3 or Sem-5 paper from last year? Photograph it and submit via the template — takes two minutes."
          action={
            <a
              href={CONTRIBUTE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-600 dark:bg-accent-300 dark:text-ink-950 dark:hover:bg-accent-200"
            >
              <FolderOpen className="h-4 w-4" />
              Submit a paper
            </a>
          }
        />
      ) : (
        <>
          <div className="space-y-2.5 rounded-2xl border border-ink-100/80 bg-white/60 p-4 backdrop-blur-xl dark:border-ink-800/80 dark:bg-ink-900/50">
            <FilterRow label="Sem">
              <button type="button" onClick={() => { setSemester('all'); setSubjectId('all'); }} className={chipClass(semester === 'all')}>All</button>
              {[1, 3, 4, 5, 6].map((n) => (
                <button key={n} type="button" onClick={() => { setSemester(n); setSubjectId('all'); }} className={chipClass(semester === n)}>{n}</button>
              ))}
            </FilterRow>
            {subjectOptions.length > 0 ? (
              <FilterRow label="Subj">
                <button type="button" onClick={() => setSubjectId('all')} className={chipClass(subjectId === 'all')}>All</button>
                {subjectOptions.map((id) => (
                  <button key={id} type="button" onClick={() => setSubjectId(id)} className={chipClass(subjectId === id)}>
                    {getSubject(id)?.shortName ?? id}
                  </button>
                ))}
              </FilterRow>
            ) : null}
            <FilterRow label="Year">
              <button type="button" onClick={() => setYear('all')} className={chipClass(year === 'all')}>All</button>
              {PAPER_YEARS.map((y) => (
                <button key={y} type="button" onClick={() => setYear(y)} className={chipClass(year === y)}>{y}</button>
              ))}
            </FilterRow>
            <FilterRow label="Kind">
              <button type="button" onClick={() => { setKind('all'); setSession('all'); }} className={chipClass(kind === 'all' && session === 'all')}>All</button>
              {(Object.keys(KIND_LABEL) as Paper['kind'][]).map((k) => (
                <button key={k} type="button" onClick={() => setKind(k)} className={chipClass(kind === k)}>{KIND_LABEL[k]}</button>
              ))}
            </FilterRow>
            <FilterRow label="Session">
              <button type="button" onClick={() => setSession('all')} className={chipClass(session === 'all')}>All</button>
              {(Object.keys(SESSION_LABEL) as Paper['session'][]).map((s) => (
                <button key={s} type="button" onClick={() => setSession(s)} className={chipClass(session === s)}>{SESSION_LABEL[s]}</button>
              ))}
            </FilterRow>
          </div>

          <p className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-400 dark:text-ink-500">
            <span>
              {filtered.length === PAPERS.length
                ? `${PAPERS.length} paper${PAPERS.length === 1 ? '' : 's'} · ${PAPERS_VERIFIED_COUNT} verified`
                : `${filtered.length} of ${PAPERS.length} papers match`}
            </span>
            {hasFilters ? (
              <button type="button" onClick={clearFilters} className="font-semibold text-accent hover:text-accent-600 dark:text-accent-300">
                Clear filters
              </button>
            ) : null}
          </p>

          {filtered.length === 0 ? (
            <EmptyState
              icon={<FileText className="h-6 w-6" />}
              title="No papers match those filters"
              body="Try a different semester, subject or year — or share the missing paper yourself."
            />
          ) : (
            <div className="grid items-start gap-3 sm:grid-cols-2">
              {filtered.map((paper) => (
                <PaperCard
                  key={paper.id}
                  paper={paper}
                  open={openId === paper.id}
                  onToggle={() => openPaper(paper)}
                />
              ))}
            </div>
          )}
        </>
      )}

      <p className="text-[11px] leading-relaxed text-ink-400 dark:text-ink-500">
        BTEUP question papers are public exam documents. This index credits contributors and
        honours takedown requests via a GitHub issue — see{' '}
        <a href={`${REPO_URL}#papers--takedown`} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:text-accent-600 dark:text-accent-300">
          Papers &amp; takedown
        </a>{' '}
        in the README.
      </p>
    </section>
  );
}
