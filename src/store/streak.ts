/** Streak helpers for the days-practiced counter (TODO 3.6). */

const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/**
 * Consecutive-day streak over the practiced ISO days.
 * Grace rule: if today hasn't been practiced yet but yesterday has, the
 * streak is still alive (it counts from yesterday backwards) — otherwise a
 * morning visitor would watch their streak die the moment they open the app.
 */
export function computeStreak(practiceDays: string[], now = new Date()): number {
  if (practiceDays.length === 0) return 0;
  const set = new Set(practiceDays);
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (!set.has(toISO(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (set.has(toISO(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
