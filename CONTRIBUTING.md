# Contributing to BTEUP CSE Learning Hub

Thanks for taking the time to contribute! This project is a community-built study companion for
the BTEUP Diploma CSE lateral-entry batch. Any help — fixing a typo in the syllabus, verifying a
video link, translating a note, or improving the UI — is very welcome.

Maintainer contact: **tauseefbrh11** — [tauseefbrh11@gmail.com](mailto:tauseefbrh11@gmail.com)

## Getting started

1. Fork the repository and clone your fork.
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`
4. Before submitting, make sure everything passes:
   ```sh
   npm run lint      # oxlint static analysis
   npx tsc -b        # type-check
   npm run build     # production build
   ```

## How the project is organised

- **Syllabus data** lives in `src/data/foundation.ts` and `src/data/semester3.ts` …
  `semester6.ts`. Each subject contains modules, topics, objectives, outcomes, labs,
  references and playlists. Each semester file exports both `SEMESTER_<n>_RAW` (full official
  list) and a curated `SEMESTER_<n>_SUBJECTS` array (see `src/data/mains.ts` for the curation
  policy — swapping an elective pick is a one-line change).
- **One-shot video links** are registered in `src/data/one-shots.ts` per module (keyed by the
  exact `moduleId`).
- **Chapter notes** live in `src/data/notes/` and are wired through `src/data/chapterNotes.ts`.
- **Thumbnail plumbing**: `src/data/yt.ts` exposes `PLAYLIST_PREVIEWS` (playlistId → first
  video id) used by `PlaylistThumb`; video thumbnails come straight from `i.ytimg.com`.
- **Shared UI** is in `src/components/` — `ui.tsx` holds the primitives (`Reveal`, `CountUp`,
  `PrintPortal`, thumbs); page-level routing is in `src/pages/` and `src/App.tsx`.

### Commit style

Keep commits small and descriptive, for example:

```
feat: add one-shot video link for java-m3
fix: correct marks distribution for java-m1
docs: expand chapter notes for isec-m4
```

## Adding or verifying video links

Please follow the same verification discipline the project already uses:

- **One-shots** — verify the video ID via the YouTube oEmbed endpoint
  (`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ID&format=json`) before
  adding it to `src/data/one-shots.ts`.
- **Playlists** — verify the playlist exists with an actual playlist payload (a bare redirect or
  an empty/unavailable playlist is not acceptable).

Do not guess or fabricate IDs — the project explicitly never links to broken videos.

## Adding chapter notes

- Title the file after the subject id, e.g. `src/data/notes/java.ts`.
- Export an entry that matches the `ChapterNote` shape used by `chapterNotes.ts`
  (`{ moduleId, title, sections: [{ h, items: [...] }] }`) — the PDF export and the
  chapter-notes accordion render directly from it.
- Keep notes focused, accurate and consistent with the official syllabus. Note files are
  only exposed for the curated subject set in `src/data/mains.ts`.

## Pull requests

- Base PRs against the `main` branch.
- Describe what you changed and why, and reference any related issue.
- Keep PRs small and reviewable; split large changes into multiple PRs.
- Ensure the CI checks (lint + type-check + build) pass before requesting a review.

## Reporting issues

Use the issue templates if available; otherwise give a clear title, the steps to reproduce (for
bugs), and the expected vs. actual behaviour. Screenshots and the browser/OS you used help a lot.

## Code of conduct

Be respectful and constructive. This project is maintained by students for students — please
keep discussions kind and focused on learning.