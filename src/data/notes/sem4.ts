import type { ChapterNote } from '../../types';
import { DS_NOTES } from './ds';
import { SE_NOTES } from './se';
import { EGO_NOTES } from './ego';
import { PY_NOTES } from './py';
import { EIKT_NOTES } from './eikt';
import { CSO_NOTES } from './cso';
import { FOSS_NOTES } from './foss';
import { PM_NOTES } from './pm';
import { ROB_NOTES } from './rob';
import { AIML_NOTES } from './aiml';
import { PD_NOTES } from './pd';
import { EE_NOTES } from './ee';

export const SEMESTER_4_NOTES: Record<string, ChapterNote[]> = {
  ds: DS_NOTES,
  se: SE_NOTES,
  egovernance: EGO_NOTES,
  python: PY_NOTES,
  eikt: EIKT_NOTES,
  cso: CSO_NOTES,
  foss: FOSS_NOTES,
  'project-mgmt': PM_NOTES,
  robotics: ROB_NOTES,
  'ai-ml': AIML_NOTES,
  'product-design': PD_NOTES,
  'engineering-economics': EE_NOTES,
};