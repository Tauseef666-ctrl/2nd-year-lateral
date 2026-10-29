<div align="center">

# BTEUP CSE Learning Hub

**Your BTEUP CSE study library** — the complete lateral-entry diploma syllabus for Computer
Science (Foundation + Semesters 3–6), paired with click-to-play YouTube videos, verified
one-shots, full-course playlists, chapter notes with **PDF export for every chapter**,
practical labs and a college assignments hub.

_Made for the 2026–2027 lateral batch. Built and maintained by
[tauseefbrh11](mailto:tauseefbrh11@gmail.com)._

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Links](https://img.shields.io/badge/video_links-oEmbed_verified-14b8a6)](#data-integrity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Features](#features) · [Curation policy](#curation-policy) · [Getting started](#getting-started) · [Project structure](#project-structure) · [Data integrity](#data-integrity) · [Contributing](#contributing) · [License](#license)

</div>

## Purpose

This is a study companion built on the official BTEUP (Board of Technical Education, Uttar
Pradesh) diploma syllabus for Computer Science — branch code **389**, session **2026–27**. It
covers the **Foundation year** plus **Semesters 3 to 6**, mapping every official module and
topic to curated learning material so you can stop hunting for resources and focus on studying.

## Features

- **Official syllabus as the source of truth** — subjects, modules, topics, marks distribution,
  class periods, objectives, outcomes, learning order and references, straight from the scheme.
- **Click-to-play video thumbnails** — every video and playlist resource shows its real YouTube
  thumbnail; tap it and the video plays right on the page (privacy-enhanced
  `youtube-nocookie` embed) instead of bouncing you to another tab. Playlists open directly on
  YouTube.
- **Verified one-shots** — every module links to an exact YouTube video (oEmbed-verified ID)
  for complete unit coverage in a single sitting.
- **Full-course playlists with thumbnails** — curated, verified playlist IDs per subject,
  previewed via a first-frame registry so the cards render real cover art.
- **Chapter notes with PDF export for every chapter** — full notes for every chapter across all
  semesters, rendered inline with collapsible sections, "mark as read" progress tracking, and
  a one-tap **PDF** button (browser print → "Save as PDF", zero extra dependencies — works
  offline). Subjects also offer **"Save all chapters as PDF"**.
- **Practicals** — step-by-step lab exercises with concept, algorithm, expected output and
  common errors; plus an aggregate practicals page.
- **Animated, responsive UI** — scroll-reveal animations, route-transition progress bar,
  reading-progress on topic pages, count-up stats, back-to-top, `/` (or `Ctrl/Cmd + K`) to
  search, light & dark themes with no theme flash on load.
- **Search** — search across subjects, topics, subtopics and study notes.
- **One-Shot & Playlist libraries** — quick-revision indexes across the whole curriculum,
  filterable by subject, with play-here and open-on-YouTube actions.
- **Coastal light & dark themes** — peaceful teal-and-sand palette, fully mobile-first.

## Curation policy

The official scheme lets a college pick **one** subject from each elective/program-elective
slot. This hub curates the strongest pick per slot and keeps **all core subjects**, so the site
stays focused:

| Slot | Kept | Official alternative (available in `_RAW` data) |
| ---- | ---- | ------------------------------------------------ |
| Sem 4 · PE-1 | Computer System Organization | FOSS |
| Sem 4 · PE-2 | AI & ML (TATA certification) | Product Design, Engineering Economics, Project Management, Industrial Robotics |
| Sem 5 · PE-2 | Mobile App Development | Multimedia Technologies |
| Sem 5 · PE-3 | Information Security | Advanced Computer Networks |
| Sem 6 · PE-4 | Artificial Intelligence | Data Science & Machine Learning |
| Sem 6 · OE-3 | Disaster Management **and** Renewable Energy | — (both kept; colleges rotate these) |

Every semester file keeps two exports: `SEMESTER_<n>_RAW` (the complete official list) and
`SEMESTER_<n>_SUBJECTS` (the curated set produced by an `EXCLUDED_<n>` filter). To swap a
pick back in, edit one line in `src/data/mains.ts` or the semester file — no data is deleted.

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
| `/` | Home — animated hero, count-up stats, curation panel, quick access, semester cards |
| `/semester/:id` | Semester overview (1, 3, 4, 5, 6) |
| `/subjects` | All subjects index |
| `/subject/:id` | Subject detail — modules, playlists (with thumbnails), objectives, labs, notes + "save all chapters as PDF" |
| `/topic/:id` | Topic detail — click-to-play video resources, chapter notes + PDF, practice, related topics |
| `/one-shots` | One-shot library (play-here embeds) |
| `/playlists` | Playlist library (real thumbnails, direct links) |
| `/notes` | Chapter notes index |
| `/practicals` | Practical labs index |
| `/college-assignments` | Assignments reference |
| `/search` | Global search (`/` or `Ctrl/Cmd + K` from anywhere) |

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
├─ components/   # shared UI (Card, Reveal, YouTubeThumb, PlaylistThumb,
│                #  VideoCard, ChapterNotes + PrintPortal, Layout, ThankYouCard …)
├─ data/
│  ├─ foundation.ts, semester3..6.ts   # official curriculum (subjects/modules/topics/labs)
│  ├─ curriculum.ts                    # aggregator: subjects, topics, labs, search
│  ├─ mains.ts                         # curated "main subjects" map (curation policy)
│  ├─ one-shots.ts                     # verified one-shot video IDs per module
│  ├─ chapterNotes.ts + notes/         # chapter notes for every subject
│  ├─ quiz.ts                          # topic-wise MCQ bank
│  └─ yt.ts                            # YouTube helpers, playlist preview registry
└─ store/useStore.ts   # zustand persisted store (theme, …)
```

## Data integrity

- **Video links** — during the October 2026 link audit, all 178 unique video IDs were verified
  live via the YouTube oEmbed API (`status 200 = alive`); dead/private videos were replaced
  with the best currently-available pick. IDs are never guessed or fabricated.
- **Playlists** — every `playlistId` was verified to resolve a live playlist page; each
  playlist's first video is captured in `src/data/yt.ts → PLAYLIST_PREVIEWS`, which doubles as
  the thumbnail source (YouTube exposes no API-key-free playlist art).
- **Notes & PDF** — chapter notes are original summaries aligned to the official module
  breakdown; PDF export happens locally in your browser via the print dialog — nothing leaves
  your device.
- **Syllabus** — curriculum data mirrors the official BTEUP scheme; where guidance differs
  from the official requirement this is labelled explicitly in the UI.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md), open an issue for
discussions or bug reports (especially dead video links — YouTube moves fast), and keep pull
requests focused and well-described.

## Contact & License

Maintainer: **tauseefbrh11** · [tauseefbrh11@gmail.com](mailto:tauseefbrh11@gmail.com)

[MIT](LICENSE) © 2026 tauseefbrh11