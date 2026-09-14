import type { ChapterNote } from '../../types';
import { JAVA_NOTES } from './java';
import { IOT_NOTES } from './iot';
import { MAD_NOTES } from './mad';
import { MTECH_NOTES } from './mtech';
import { ISEC_NOTES } from './isec';
import { ACN_NOTES } from './acn';
import { ICON_NOTES } from './icon';

export const SEMESTER_5_NOTES: Record<string, ChapterNote[]> = {
  java: JAVA_NOTES,
  iot: IOT_NOTES,
  mad: MAD_NOTES,
  mtech: MTECH_NOTES,
  isec: ISEC_NOTES,
  acn: ACN_NOTES,
  iconstitution: ICON_NOTES,
};