import type { Language, Resource, ResourceKind } from '../types';

export const ytSearch = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const ytPlaylistSearch = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=EgIQAw%253D%253D`;

/** Official reference search per subject name. */
export const officialSyllabusSearch = () => `https://bteup.ac.in/`;

/**
 * Playlist thumbnail registry.
 * YouTube has no public oEmbed that resolves playlist art without an API key,
 * so each playlist's first video ID was captured from the live playlist page
 * (verified during the link-audit). It doubles as a preview frame for cards.
 */
export const PLAYLIST_PREVIEWS: Record<string, string> = {
  // Foundation · Sem 1
  PLfq4fiRrJSn6YBuo7o7NEJX_lWsrwnnnA: 'KkdXCtMUJkY',
  PLNKD1qB9ppttx4WuHV0TWRy5dWuVSKEtT: 'A6Ad7VnSlZE',
  PLNKD1qB9ppttrZnL4h6h-WdAOXXCT1VTv: 'hiG6naACUeI',
  PLT3bOBUU3L9imMlPeqnVYZqKqycvSK_ms: 'LGe0xwz5cv4',
  PLU6SqdYcYsfI3sh-ho_iiTkCGsTbVh_Sw: 't9xW7UaZwZ0',
  PLev-MfB_WiONdAzYllhUFjeW04nITRgkC: '4LxrzD-MRBk',
  PLfq4fiRrJSn4rbFoCX4zaRBgEOIKcU34H: 'lmEG4kVJM5M',
  PL3akonMLTLXDdiWzF6PQrNDb0x9hyrjoL: 'wSVb3AG7a2I',
  PL2xF3HCNxGM9XUg8-o8sfN_4aDQ4snGCK: 'fLeufnY1AwU',
  PLfq4fiRrJSn4677Ypls_cxsEC_aZaS2Ev: 'dkseOH4bDJ8',
  PLLf6O8XdGj03gLo6znlqJbMzgIgt8tSU1: 'XCZakSI-M0I',
  PLLf6O8XdGj02SJgvTg8kiwSL8atdHC5vb: '1BB0RKm-30A',
  PLkZFXMjtq0D04SV-rkHVyHD7z_Y_NHunp: 'J9_hvkLIBFU',
  PLp6GWG1kYMCKCgaCm9QmqZBME1llFHM6G: 'bKwEiY8ILLk',
  PLfq4fiRrJSn7u1Ixw8Wa-54g7eQHwOxNI: 'fjbfLYhLcoM',
  PLjF1oT5sngjtzZZ3mN09Ye2XLWuzy3ilA: 'cWvntDwAgBg',
  PL9RcWoqXmzaKWxaNoDhW4O1kA0hK9AYys: 'UudSwjqFdNM',
  PLsXdBvuJ5ox7U8HipGaQoS95fFcIhKRRS: 'k-HGtlkKkW4',
  // Semester 3
  PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p: 'bkSWJJZNgf8',
  PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y: 'kBdlM6hNDAE',
  PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_: 'JFF2vJaN0Cw',
  PLgwJf8NK-2e5qUxCaKtewCHtsrVQg_AJG: 'GWndIql2cXo',
  PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w: 'tVzUXW6siu0',
  PLJsQjWpPQDp2AZE8s9JJfdRo-F0WtLv9N: 'DHEsMBnvbJA',
  PLBV6VAQlom0lBDRVOjgdPfLfizOO87Q1Z: '7gcyS3_e4fM',
  PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt: 'rQoqCP7LX60',
  PLqleLpAMfxGBn9v-K17ztBfNXHzPnX5sN: 'C5GCFEMcIGQ',
  PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR: '7Dh73z3icd8',
  PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR: 'rLf3jnHxSmU',
  // Semester 4
  PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi: '5_5oE5lgrhw',
  PLBlnK6fEyqRgWh1emltdMOz8O2m5X3YYn: 'I37kGX-nZEI',
  PLBlnK6fEyqRi3-lvwLGzcaquOs5OBTCww: 'R9PTBwOzceo',
  PLkIpj7mL1E7uSElwIoJpgBnOQ8RJrYKzX: 'I_JuQ5ayPmc',
  PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2: 'uJpQlyT_CK4',
  PL8PvmC2cEsGQ-bBpqr4pZBxD57qJsnC2t: 'yYTQggON93c',
  PLYwrDCC_pg4ELtD7hfmo9XtceC3IYiOxn: 'owzw8TZCIL8',
  PLqleLpAMfxGD-KFajIKzH24p6bgG5R_aN: 'qYhrd2Lhq0g',
  PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT: '6i3EGqOBRiU',
  PLI4OVrCFuY55ZrOMkfYNt7CQGEkskxJlj: 'uEtG9TclzKE',
  PLFD-frM9CeFtF7IL99dHXX4UUrEZwzxn5: 'ybXlOJmHW1Y',
  PLu0W_9lII9agwh1XjRt242xIpHhPT2llg: '7wnove7K-ZQ',
  PLsUxyMdqwSZykj9ApuzPW6APEdu5t28HB: 'bzSZxSxgw7U',
  PL_JQUKZbOIhEzhZH40lHYOBF6QHauZrBw: 'iENckDnudIc',
  PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX: 'L9X7XXfHYdU',
  PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe: 'O0gtKDu_cJc',
  PLV8vIYTIdSnar4uzz-4TIlgyFJ2m18NE3: 'B6rqMbArcew',
  PLNiD0MJqUzyFUWvkquMNIckIrLIh4RuTf: 'AOQSUo8Mefw',
  PL0tP8lerTbX3eUtBFS0Ir4_aFqKuXWjYZ: 'rrw-Pv3rc0E',
  PLeUIXA68NobWh-CAopnDKlEaMKeUDSvsC: 'pFk8W0isFzM',
  PL9Cd7H8NFRQyiRZFJN66a0SN4TEA1ccv3: '6rEWxsRoQw0',
  PLxl7lAttKeamJUoy-_yoZAQV0-aeMzJTH: '86t937d8kA0',
  PLLy_2iUCG87CBuNhvti0h6W54ZmqrSDMJ: 'gnkjcRDQkw0',
  PLGs0VKk2DiYxkoe2XNxDvVHqL5XG4dMWi: 'eqXQ80vlgqE',
  PLWF9TXck7O_xtginyRk5DMGHN0cHKAcur: 'x3MUGVKWXdw',
  PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5: '1L420xXpDTg',
  PLEiEAq2VkUUIz01StTtLRDtXwNVwjj-Nc: '4nTh3AP6knM',
  PL9FuOtXibFjW3cONv7t08tt1jAoYcsvod: 'Uu58ZsZzFtM',
  // Semester 5
  PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q: 'ntLJmHOJ0ME',
  PLuAADu3OvBt4SUxlYPu_xJogSmVfSLZF0: 'NSUj_NMV5t0',
  // Semester 6
  PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI: 'uB3i-qV6VdM',
  PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH: 'ZftI2fEz0Fw',
  PLsh2FvSr3n7fQlIDbfKutmSL26TsWitGQ: 'rA4uKIy5gO0',
  PLROvODCYkEM8MtwEVIMMZrCan5rHsLQVn: 'z8VDdZxEG2M',
  PLLy_2iUCG87A7TdFpl6_xdgo-aYskxjXb: 'wsz-LEFuLdc',
};

/** Thumbnail image URL for a resource — videos use their own ID, playlists use the registry. */
export const ytThumbFor = (videoId?: string, playlistId?: string): string => {
  const preview = videoId ?? (playlistId ? PLAYLIST_PREVIEWS[playlistId] : undefined);
  return preview
    ? `https://i.ytimg.com/vi/${preview}/hqdefault.jpg`
    : '';
};

export const ytPlaylistUrl = (pid: string) => `https://www.youtube.com/playlist?list=${pid}`;

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