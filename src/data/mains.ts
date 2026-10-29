/**
 * Curation policy — the honest "main subjects" map (see README → Curation policy).
 *
 * The official BTEUP scheme makes students choose ONE subject from each
 * elective/program-elective slot. This hub curates the picks below (best
 * resources + notes coverage + exam weight) and hides the other official
 * options rather than deleting the compiled data — see the `_RAW` arrays in
 * each semester file.
 *
 * Kept per slot:
 *   • Sem 4  PE-1  → Computer System Organization (over FOSS)
 *   • Sem 4  OE-1  → (none exposed; PM & Robotics options excluded)
 *   • Sem 4  OE-2  → AI & ML · TATA Certification (over Product Design / Engg Economics)
 *   • Sem 5  PE-2  → Mobile App Development (over Multimedia Technologies)
 *   • Sem 5  PE-3  → Information Security (over Advanced Computer Networks)
 *   • Sem 6  PE    → Artificial Intelligence (over Data Science & ML)
 *   • Sem 6  OE-3  → Disaster Management + Renewable Energy (both kept — most colleges cover both)
 */
const EXCLUDED_SUBJECT_IDS = new Set([
  // Sem 4
  'foss',
  'project-mgmt',
  'robotics',
  'product-design',
  'engineering-economics',
  // Sem 5
  'mtech',
  'acn',
  // Sem 6
  'dsml',
]);

/** subjectId → true for the curated (exposed) subject set. */
export const ALL_SUBJECT_IDS: Record<string, boolean> = {
  math1: true,
  physics1: true,
  chem1: true,
  comm1: true,
  os: true,
  dbms: true,
  cn: true,
  web: true,
  cprog: true,
  ds: true,
  se: true,
  egovernance: true,
  python: true,
  eikt: true,
  cso: true,
  'ai-ml': true,
  java: true,
  iot: true,
  mad: true,
  isec: true,
  iconstitution: true,
  ai: true,
  ent: true,
  dm: true,
  ren: true,
};

export const isCuratedSubject = (id: string): boolean =>
  !EXCLUDED_SUBJECT_IDS.has(id);