# BTEUP CSE Learning Hub — 2nd Year Lateral Entry

A mobile-first, offline-first study companion for the BTEUP Diploma CSE (branch code 389,
session 2026-27) — Semesters 3 & 4. Every official topic is mapped to curated, search-based
YouTube resources with deep lectures, one-shots, playlists, revision and exam prep.

> Live syllabus source: BTEUP official PDF (extracted to `syllabus.txt` for reference).

## Features

- **Official syllabus as source of truth** — subjects, modules, topics, labs and electives.
- **Curated YouTube resources** — `deep / one-shot / playlist / revision / practical / exam`
  kinds with language badges, durations and "Best Pick" notes. Links are search-based
  (`src/data/yt.ts`), never fabricated video IDs.
- **Deep Learning mode** — 25-minute focus timer + primary/bonus videos + practice + short quiz.
- **Exam Mode** — exam/one-shot/revision matrix per subject + random "Deal 5 questions".
- **Practicals** — labs with exercises, algorithms, expected output and common errors.
- **Quiz Bank** — curated MCQ bank (`src/data/quiz.ts`) with explanations and persisted results.
- **Topic notes** — per-topic scratchpad stored locally.
- **Minor Project workspace & Certification tracker** — BTEUP requirements clearly separated
  from recommended guidance, including the ≥20 h Advanced Skill Development requirement and
  summer internship.
- **One-Shot & Playlist libraries** — aggregate quick-revision indexes.
- **Progress tracking, bookmarks, search, roadmap and dark mode** — all persisted via
  `localStorage` (zustand + persist, key `bteup-learn-storage`).

## Stack

React 18 · TypeScript 5.8 · Vite 6 · Tailwind CSS 3 · react-router-dom 6 · zustand 5 · lucide-react

## Commands

```sh
npm install
npm run dev        # start dev server
npm run build      # type-check (tsc -b) + production build
npm run preview    # preview the production build
npm run lint       # oxlint static analysis
```

## Data & Resources

- `src/data/semester3.ts` / `src/data/semester4.ts` — full curriculum incl. electives.
- `src/data/curriculum.ts` — aggregator (subjects, topics, labs, search).
- `src/data/yt.ts` — `ytSearch` / `ytPlaylistSearch` helpers used everywhere instead of
  hard-coded video IDs (no external API key required).
- `src/data/quiz.ts` — MCQ bank used by the Quiz Player.

Video links open on YouTube and are curated for the official topic list; they are not
official BTEUP study material, and supplementary content is labelled as such in the UI.