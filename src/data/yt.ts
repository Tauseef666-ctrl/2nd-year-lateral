import type { Language, Resource, ResourceKind } from '../types';

export const ytSearch = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const ytPlaylistSearch = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=EgIQAw%253D%253D`;

/** Official reference search per subject name. */
export const officialSyllabusSearch = () =>
  `https://bteup.ac.in/syllabus.html`;

interface RArgs {
  kind: ResourceKind;
  title: string;
  channel?: string;
  query?: string;
  fallback?: string;
  duration?: string;
  language?: Language;
  rec?: 1 | 2 | 3;
  why?: string;
  videoId?: string;
  playlistId?: string;
}

let resCounter = 0;

/** Builds a Resource. Queries are always pre-verified strings — never fabricated video IDs. */
export function r(args: RArgs): Resource {
  resCounter += 1;
  return {
    id: `res-${resCounter}`,
    kind: args.kind,
    title: args.title,
    channel: args.channel,
    query: args.query,
    fallback: args.fallback,
    duration: args.duration,
    language: args.language ?? 'hinglish',
    rec: args.rec ?? 2,
    why: args.why,
    videoId: args.videoId,
    playlistId: args.playlistId,
  };
}