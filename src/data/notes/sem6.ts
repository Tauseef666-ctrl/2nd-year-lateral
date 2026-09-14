import type { ChapterNote } from '../../types';
import { AI_NOTES } from './ai';
import { DSML_NOTES } from './dsml';
import { ENT_NOTES } from './ent';
import { DM_NOTES } from './dm';
import { REN_NOTES } from './ren';

export const SEMESTER_6_NOTES: Record<string, ChapterNote[]> = {
  ai: AI_NOTES,
  dsml: DSML_NOTES,
  ent: ENT_NOTES,
  dm: DM_NOTES,
  ren: REN_NOTES,
};