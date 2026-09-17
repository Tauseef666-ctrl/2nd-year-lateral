<div align="center">

# BTEUP CSE Learning Hub

**Your BTEUP CSE study library** — the complete lateral-entry diploma syllabus for Computer
Science (Foundation + Semesters 3–6), paired with curated YouTube one-shots, full-course
playlists, chapter notes, practical labs and a college assignments hub.

_Made for the 2026–2027 lateral batch by a fellow 2nd-year student._

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

[Features](#features) · [Pages](#pages) · [Getting started](#getting-started) · [Project structure](#project-structure) · [Data integrity](#data-integrity) · [Contributing](#contributing) · [License](#license)

</div>

## Purpose

This is a study companion built on the official BTEUP (Board of Technical Education, Uttar
Pradesh) diploma syllabus for Computer Science — branch code **389**, session **2026–27**. It
covers the **Foundation year** plus **Semesters 3 to 6**, mapping every official module and
topic to curated learning material so you can stop hunting for resources and focus on studying.

## Features

- **Official syllabus as the source of truth** — subjects, modules, topics, marks distribution,
  class periods, objectives, outcomes, learning order and references, straight from the scheme.
- **Verified one-shots** — every module links to an exact YouTube video (oEmbed-verified ID)
  for complete unit coverage in a single sitting. Real thumbnails, direct playback.
- **Full-course playlists** — curated, verified playlist IDs per subject for deeper study.
- **Comprehensive chapter notes** — handwritten-style notes for every chapter across all
  semesters, rendered inline on subject and topic pages.
- **Practicals** — step-by-step lab exercises with concept, algorithm, expected output and
  common errors; plus an aggregate practicals page.
- **College assignments hub** — student-built reference for the assignment/assessment workload.
- **Search** — search across subjects, topics, subtopics and study notes.
- **One-Shot & Playlist libraries** — quick-revision indexes across the whole curriculum,
  filterable by subject.
- **Coastal light & dark themes** — peaceful teal-and-sand palette, animated micro-interactions,
  fully responsive and mobile-first.

## Stack

| Tool | Version |
| ---- | ------- |
| React | 18 |
| TypeScript | 5.8 |
| Vite | 6 |
| Tailwind CSS | 3 |
| react-router-dom | 6 |
| zustand (persist) | 5 |
| lucide-react | icons |

## Pages

| Route | Page |
| ----- | ---- |
| `/` | Home — stats, "how it works", quick access, semester cards |
| `/semester/:id` | Semester overview (1, 3, 4, 5, 6) |
| `/subjects` | All subjects index |
| `/subject/:id` | Subject detail — modules, playlists, objectives, labs, notes |
| `/topic/:id` | Topic detail — video resources, chapter notes, practice, related topics |
| `/one-shots` | One-shot library |
| `/playlists` | Playlist library |
| `/notes` | Chapter notes index |
| `/practicals` | Practical labs index |
| `/college-assignments` | Assignments reference |
| `/search` | Global search |

## Getting started

Requires [Node.js](https://nodejs.org/) ≥ 18.

```sh
npm install
npm run dev        # start the dev server
npm run build      # type-check (tsc -b) + production build
npm run preview    # preview the production build
npm run lint       # oxlint static analysis
```

## Project structure

```
src/
├─ pages/        # route-level pages
├─ components/   # shared UI (Card, Logo, VideoCard, ChapterNotes, ThankYouCard …)
├─ data/
│  ├─ foundation.ts, semester3..6.ts   # official curriculum (subjects/modules/topics/labs)
│  ├─ curriculum.ts                    # aggregator: subjects, topics, labs, search
│  ├─ one-shots.ts                     # verified one-shot video IDs per module
│  ├─ chapterNotes.ts + notes/         # chapter notes for every subject
│  ├─ quiz.ts                          # topic-wise MCQ bank
│  └─ yt.ts                            # YouTube helpers (watch/search/thumb URLs)
└─ store/useStore.ts   # zustand persisted store (theme, …)
```

## Data integrity

- **One-shots** — each module `videoId` is verified against the YouTube oEmbed API before it is
  added; IDs are never guessed or fabricated.
- **Playlists** — each `playlistId` is verified to hold an active playlist (YouTube `lockup`
  metadata) before inclusion.
- **Syllabus** — curriculum data mirrors the official BTEUP scheme/PDF; where guidance differs
  from the official requirement this is labelled explicitly in the UI.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md), open an issue for
discussions or bug reports, and keep pull requests focused and well-described.

## License

[MIT](LICENSE) © 2026 Tauseef Khan