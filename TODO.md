# TODO — BTEUP CSE Hub → Platform Plan

> **Maintainer:** @Tauseef666-ctrl · **Created:** 2026-11-14 · **Horizon:** Nov 2026 → Mar 2027
> **Live:** https://2nd-year-lateral.vercel.app · **Repo:** `github.com/Tauseef666-ctrl/2nd-year-lateral`
>
> **How to use this doc:** work top-down, phase by phase. Each phase has a **Gate** (definition of
> done) — do not start the next phase until the gate passes. One PR per checked box where sensible.
> Commit style follows `CONTRIBUTING.md` (`feat:` / `fix:` / `docs:` / `chore:`).
> Effort: **S** ≤ half day · **M** 1–2 days · **L** 3+ days.

---

## 0 · North star

> **"The everything-station for BTEUP CSE lateral students: syllabus → videos → notes →
> previous-year papers → results → quizzes. Zero hunting."**

### Why now (the timing wedge)

Odd-semester (Sem 3 / 5) BTEUP exams land **Dec 2026 – Jan 2027**. In those weeks the #1 thing
students hunt for is **previous-year papers**, and nobody maintains a clean public index for them.
This site already owns the syllabus for this exact batch → papers is the wedge that brings the
first wave of real users.

### Success metrics (review monthly, write actual numbers in)

| Metric | Dec 2026 target | Feb 2027 target (even-sem season) |
| --- | --- | --- |
| Weekly active visitors | 100 | 500 |
| Papers indexed (count) | 25 | 60 |
| Quiz questions in bank | 150 | 400 |
| GitHub stars | 10 | 25 |
| Contributors besides me | 1 | 3 |

---

## 1 · Architecture decisions (small ADR log — update as you go)

- **ADR-1 — Stay client-only until Phase 6.** All content ships as typed data in the repo.
  No backend, no accounts. Rationale: zero-ops, free hosting, offline-friendly.
- **ADR-2 — Primary hosting = Vercel; GitHub Pages stays a mirror.** Vercel handles SPA rewrites
  out of the box; add `vercel.json` rewrite rule so deep links (`/papers`, `/exam-desk`) don't 404.
- **ADR-3 — Paper PDFs live in `public/papers/<year>/`** (≤ ~8 MB each; keep repo < 250 MB).
  Oversized scans go to a GitHub **Release** asset on this repo; only the URL is stored in data.
- **ADR-4 — Never proxy or scrape official BTEUP result pages.** We deep-link out and explain.
  Hosting other people's live results = ban risk + maintenance hell. Link only.
- **ADR-5 — Keep Vite + prerender, don't migrate frameworks.** SEO solved by prerendering
  static routes + per-route meta. A Next.js rewrite is a non-goal this season.
- **ADR-6 — All user progress stays local** (zustand `persist`) with JSON export/import.
  Accounts are a non-goal unless a real need appears after launch.

---

## 2 · Phase 0 — Foundations & hygiene *(before any new feature)* · ~2 days

Why first: everything later (papers search, quiz progress, SEO) sits on these rails.

- [x] **0.1 (S) Audit where "mark as read" progress is stored.** README promises it; the only
      zustand store (`src/store/useStore.ts`) holds just `theme`. Find the mechanism, then
      consolidate ALL progress into one persisted store.
      *(Audit: ticks lived as raw `localStorage` keys `bteup-note-progress:<sid>:<mid>` in
      `ChapterNotes.tsx`; quiz state was never persisted. Both now live in the store.)*
- [x] **0.2 (S) Extend `src/store/useStore.ts`** with durable learning state:
      ```ts
      readModules: Record<string, true>            // moduleId → read
      quizAttempts: QuizAttemptRecord[]            // see Phase 3 type
      papersOpened: Record<string, number>         // paperId → open count
      ```
      Keep persist key `bteup-library-storage` (pre-React theme boot in `index.html` reads it — don't break that contract).
- [x] **0.3 (S) Add `vercel.json`** with SPA rewrite (`"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`).
- [x] **0.4 (M) Route-level code splitting.** `React.lazy()` the heavy pages (`Notes`, `Papers`,
      `Practicals`, `Quiz`). `src/data/chapterNotes.ts` wires *all* subject notes statically —
      verify the bundle cost; if large, lazy-import notes per subject.
      *(Done: Subject/Topic/Notes/Practicals/Quiz/OneShots/Playlists/Search/CollegeAssignments
      lazy + vendor chunk. Notes measured at 115 kB gzip in one shared async chunk — per-subject
      splitting NOT justified (notes are small; curriculum ~141 kB gzip in the eager chunk is the
      real weight, Home needs it). Home's notes stat now lazy-hydrates via dynamic import so
      notes leave the initial graph. Initial load ≈ 205 kB gzip.)*
- [x] **0.5 (S) Error boundary** component wrapping `<Routes>` in `src/App.tsx` + friendly
      recovery screen (dark/light aware).
- [x] **0.6 (S) Analytics:** Vercel Web Analytics (one script tag) + track 3 events only:
      `paper_open`, `quiz_complete`, `search_query`. Nothing else. (Decision: Vercel Analytics
      over self-hosted umami for v1 — zero-ops wins.)
      *(Wired: `quiz_complete` on result, debounced `search_query`. `paper_open` wires in
      Phase 1 when the Papers page exists.)*
- [x] **0.7 (S) `robots.txt` + placeholder `sitemap.xml`** in `public/` (generator comes in Phase 5).

**Gate 0:** `npm run lint` + `npx tsc -b` + `npm run build` pass · deep link `/quiz` works on
production URL · analytics sees events · bundle < 450 kB gzipped (check with `vite build --mode production` report).

---

## 3 · Phase 1 — Previous-Year Papers engine *(the launch wedge)* · ~1.5 weeks

The single highest-impact feature. Prioritize **Semester 3 and 5** papers first (their exams are
imminent), then 4/6, then Foundation.

### Data model (add to `src/types.ts`)

```ts
export interface Paper {
  id: string;                       // '2024-odd-s3-os'
  year: number;                     // exam year
  session: 'odd' | 'even';
  semester: number;                 // 1,3,4,5,6 (lateral scheme)
  subjectId: string;                // must match Subject.id (e.g. 'os', 'dbms')
  kind: 'regular' | 'back' | 'special';
  fileUrl: string;                  // local /papers/... or Release asset URL
  pages?: number;
  extractedTextUrl?: string;        // /data/papers/text/<id>.json (search index)
  source: 'official' | 'contributed';
  contributedBy?: string;
  verified: boolean;                // you checked it matches syllabus scheme
}

export interface PaperQuestion {
  paperId: string;
  moduleId?: string;                // tag → powers "important questions" (Phase 4)
  text: string;
  marks?: number;
  type: 'theory' | 'numerical' | 'code' | 'mcq';
}
```

### Tasks

- [x] **1.1 (S)** Create `src/data/papers/index.ts` + one file per year (`2023.ts`, `2024.ts`…)
      exporting `PAPERS: Paper[]`; helper `getPapersBySubject(subjectId)`.
- [ ] **1.2 (M)** Collect & seed **first 10 papers by hand**: BTEUP official site old-paper
      section + seniors' WhatsApp archives. Save PDFs to `public/papers/<year>/`. Verify each
      (`verified: true`) before commit.
- [x] **1.3 (M)** Build `src/pages/Papers.tsx` + route `/papers` in `src/App.tsx`:
      filter by semester → subject → year/session/kind; mobile-first list; each paper card:
      [View] [Download] [size] [verified ✓ badge].
- [x] **1.4 (S)** Viewer: `<iframe src="<fileUrl>#view=FitH">` inline (works on Android WebView &
      Chrome). Fallback button "Open in new tab". No pdf.js dependency for v1.
- [ ] **1.5 (L)** Text extraction pipeline: `scripts/extract-paper-text.mjs` using `pdf-parse`
      (BTEUP papers are mostly typed PDFs; scanned ones skipped, flagged in data). Output →
      `src/data/papers/text/<paperId>.json` (array of PaperQuestion, raw). Run manually per batch.
      *(Deferred until the first real PDFs exist — build and test against actual scans.)*
- [x] **1.6 (M)** **Paper search**: extend `searchResourceText` (in `src/data/curriculum.ts`) or
      add `searchPapers(q)` — search question text; result card links straight to the paper +
      page anchor. Also surface papers on the existing `/search` page.
      *(Plumbing live: `src/data/papers/search.ts` fetches per-paper text JSON chunks at
      runtime (never bundled) with caching; `/search` shows a "Previous year papers" group
      linking to `/papers?subject=<id>&paper=<id>`. Activates the moment 1.5 output exists.)*
- [ ] **1.7 (M)** Unit tagging pass: for each extracted question set `moduleId` by hand
      (30 min/subject max). This is the seed of Phase 4 — don't skip.
- [x] **1.8 (M)** Contribution flow: new GitHub **issue template `paper-submission.yml`** (year,
      semester, subject dropdowns + photo attach instructions). Moderation checklist lives in
      `CONTRIBUTING.md`: verify vs official scheme → rename file → run OCR script → PR.
- [x] **1.9 (S)** Cross-link: on every `Subject` page add a "Previous papers" chip →
      `/papers?subject=<id>`; on Topic pages link questions tagged to that topic.
      *(Chip live on Subject pages + sidebar nav + Home quick access. Topic-page question
      links follow once 1.7 tagging data exists.)*
- [x] **1.10 (S)** Copyright hygiene: add a short "Papers & takedown" note to README — BTEUP
      question papers are public exam documents; we index + credit; takedown honored via issue.

**Gate 1:** ≥ 10 verified papers live for Sem 3/5 · `/papers` usable on a mid-range Android phone
on 3G (lazy-load PDFs, no giant bundle) · paper text searchable from global search · one classmate
has submitted a paper through the issue template.

**Launch moment (do at gate):** share `/papers` link in your class + lateral-entry WhatsApp
groups with a one-line pitch. This is where first users come from.

---

## 4 · Phase 2 — Exam desk: results, admit cards, notifications · ~3 days

- [ ] **2.1 (S)** New page `src/pages/ExamDesk.tsx` + route `/exam-desk`. Sections:
      **Exam calendar · Admit card · Results · Revaluation**.
- [ ] **2.2 (M)** Data: `src/data/examEvents.ts` → `ExamEvent { id, title, kind: 'exam'|'admit'|'result'|'reval', dateStart, dateEnd, link, notes }`. Seed with current odd-sem cycle dates.
- [ ] **2.3 (S)** Results & admit card: curated deep links to official BTEUP portal pages
      (research exact URLs once, store here) + step-by-step "how to check" per event.
      Per ADR-4: link out only.
- [ ] **2.4 (S)** "Get notified" = Telegram channel invite CTA + join buttons (no backend).
      Pin latest events in channel; update `examEvents.ts` as BTEUP publishes.
- [ ] **2.5 (S)** Home page card: "Exam desk" entry point with next upcoming event ("Sem-3 exam
      starts in N days" — computed client-side).
- [ ] **2.6 (M)** RSS-lite: expose `/updates` as a simple JSON/`feed.xml` generated from
      `examEvents.ts` so power users can subscribe (also good GitHub Discussions hygiene).

**Gate 2:** exam calendar live with current cycle · admit-card walkthrough tested end-to-end ·
Telegram channel has ≥ 20 members from the Phase-1 WhatsApp share.

---

## 5 · Phase 3 — Quiz & practice engine v2 · ~1 week

Current state: `src/data/quiz.ts` has a small MCQ bank; `src/pages/Quiz.tsx` supports
subject-select → shuffle → reveal → score. Nothing persists.

- [ ] **3.1 (S)** Extend `QuizQuestion` with `moduleId?` and `difficulty?`; backfill existing bank.
- [ ] **3.2 (M)** Persist in `useStore`: `QuizAttemptRecord { id, date, subjectIds, total, score, wrongIds }` + per-question wrong-answer log.
- [ ] **3.3 (M)** Three modes on `/quiz`: **Unit quiz** (pick subject → module), **Timed mock**
      (BTEUP-style 25 MCQ / 20 min, uses tagged questions), **Retest wrong answers** (from stored wrongIds).
- [ ] **3.4 (M)** Result screen v2: score %, per-unit breakdown bar, "weakest module" callout
      linking to that module's notes + its PYQ questions.
- [ ] **3.5 (M)** Bank growth: derive MCQs from extracted paper questions (Phase 1.5 output) +
      chapter notes. Target ≥ 25/core subject. Quality bar: every question keeps an `explanation`.
- [ ] **3.6 (S)** Streaks: days-practiced counter in store; show flame on Home. (Cheap dopamine,
      real retention.)
- [ ] **3.7 (S)** Progress export/import JSON button (device switch without accounts).

**Gate 3:** ≥ 150 questions · mock mode timed & persisted · retest loop works · one friend has a
7-day streak (proof of retention).

---

## 6 · Phase 4 — Content depth: important questions & viva · ~4 days

- [ ] **4.1 (M)** Build-time script `scripts/gen-important-questions.mjs`: aggregate
      `PaperQuestion` tags by `moduleId` → frequency → `src/data/generated/importantQuestions.ts`
      (top N per module). Run in CI after papers change.
- [ ] **4.2 (M)** On every `Module`/`Topic` page: "Most asked in exams" block (from generated
      data) + link to the source papers.
- [ ] **4.3 (S)** Viva bank: per lab (`PracticalLab`), add `viva: string[]` to type + render in
      Practicals page. Seed for Sem 3–5 labs.
- [ ] **4.4 (S)** Hindi/English glossary hints on heavy jargon topics (exams are bilingual;
      small win, big love).

**Gate 4:** every core subject has "most asked" generated from ≥ 3 papers · viva Qs for all labs.

---

## 7 · Phase 5 — SEO & distribution *(this is how strangers find the site)* · ~1 week, partly parallel

- [ ] **5.1 (M)** Per-route meta: `react-helmet-async` + `useMeta()` hook (title, description,
      canonical, OG). Apply to Subject/Topic/Papers/Quiz/ExamDesk pages.
- [ ] **5.2 (L)** Prerender static routes at build (`react-snap` or manual `vite` SSG script):
      `/`, `/subjects`, `/semester/:id`, `/subject/:id`, `/papers`, `/exam-desk`. Goal: crawler
      sees real HTML without a JS framework migration (ADR-5).
- [ ] **5.3 (S)** `scripts/build-sitemap.mjs` (enumerates routes above from curriculum data) →
      `public/sitemap.xml`, wired into CI after build; submit in Google Search Console.
- [ ] **5.4 (S)** JSON-LD: `WebSite` on home, `LearningResource` on subject pages, `FAQPage` on
      quiz/exam-desk FAQ blocks.
- [ ] **5.5 (M)** Keyword-intent pages (real utility, no doorway spam):
      `/papers` targets "bteup previous year paper cse <sem>"; `/exam-desk` targets
      "bteup result <year>" + "bteup admit card". Write honest 2-para intros on those pages.
- [ ] **5.6 (S)** OG images: generate per-subject share cards (script or hand-made 6 SVG/PNG) so
      WhatsApp shares look good — shares ARE the distribution channel.
- [ ] **5.7 (S)** GitHub-facing polish: README GIF of `/papers` + `/quiz`, repo topics
      (`bteup`, `previous-year-papers`, `students`…), enable Discussions, first Release tag `v1.1`.

**Gate 5:** sitemap submitted · Google indexes ≥ 20 URLs · share-card looks good in WhatsApp ·
`site:` search shows the site.

---

## 8 · Phase 6 — Community & contributors · ongoing

- [ ] **6.1 (S)** `all-contributors` table in README (starts with you + first paper contributor).
- [ ] **6.2 (M)** Good-first-issue pipeline: keep 3–5 beginner issues open ("add 2022 dbms paper",
      "verify java one-shot link") — classmates can PR without reading the codebase.
- [ ] **6.3 (S)** Moderation ritual: weekly 30-min triage of paper-submission issues (photo →
      crop → commit → OCR → verify).
- [ ] **6.4 (S)** Monthly changelog post in Discussions ("what's new for exam season").

---

## 9 · Phase 7 — PWA & mobile shell *(only after web traction)*

- [ ] **7.1 (M)** `vite-plugin-pwa`: manifest + icons + offline cache of visited pages & quiz
      bank; "Add to home screen" prompt. (Study-from-phone with patchy hostel WiFi = the point.)
- [ ] **7.2 (L, optional)** Capacitor wrapper for Play Store listing — reuse your Noorul-Quran
      pipeline. Only if weekly users justify it.

---

## 10 · Ops rituals (calendar)

| Cadence | Ritual |
| --- | --- |
| Weekly | Triage contribution issues · update exam events · check analytics numbers |
| Every 2 days during exam season (Dec–Jan, Feb–Mar) | Content updates + group announcements |
| Monthly | Metrics table update in this file · changelog post · release tag |

## 11 · Non-goals for v1 (write these down to avoid drift)

Accounts/auth · backend server · comments/chat · auto-scraping BTEUP · hosting results or
admit cards ourselves · new frameworks (Next/Astro migration) · Android app before web traction.

## 12 · Risks & mitigations

| Risk | Mitigation |
| --- | --- |
| Paper copyright complaints | Public exam docs + credit + instant takedown via issue (1.10) |
| Official URLs change (results/admit) | Links centralized in `examEvents.ts`; weekly check ritual |
| Bundle bloat (notes + paper text) | Lazy per-subject data (0.4); keep text as separate JSON chunks |
| Single-maintainer burnout | Small phases, ship weekly, contributors pipeline (6.2) |
| Prerender breaks interactive pages | Only prerender static routes list (5.2); test each release |

## 13 · First session checklist (tomorrow)

1. [x] Clone: `git clone https://github.com/Tauseef666-ctrl/2nd-year-lateral.git` into `git\web`
2. [x] `npm install` · `npm run dev` — confirm it runs
3. [x] Move this plan into the repo root as `TODO.md` (it lives here now)
4. [x] Ship Phase 0.1–0.3 (store audit + extend, vercel.json) — small PR, same day
5. [ ] Start 1.2: message 3 seniors/classmates asking for last year's Sem-3 papers — collection starts now, not at the keyboard
6. [ ] End of day: push, Vercel preview, screenshot for the log

---
*Plan v1.0 — review after Gate 1 and after each exam season.*
