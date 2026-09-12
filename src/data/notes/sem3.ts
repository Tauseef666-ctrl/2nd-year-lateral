import type { ChapterNote } from '../../types';
import { CN_NOTES } from './cn';
import { CPROG_NOTES } from './cprog';
import { DBMS_NOTES } from './dbms';
import { OS_NOTES } from './os';
import { WEB_NOTES } from './web';

export const SEMESTER_3_NOTES: Record<string, ChapterNote[]> = {
  os: OS_NOTES,
  dbms: DBMS_NOTES,
  cn: CN_NOTES,
  web: WEB_NOTES,
  cprog: CPROG_NOTES,
};