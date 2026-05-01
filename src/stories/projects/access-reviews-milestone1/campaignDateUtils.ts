/** Local calendar helpers for campaign duration (YYYY-MM-DD). */

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

export function todayYmd(): string {
  const n = new Date();
  return `${n.getFullYear()}-${pad2(n.getMonth() + 1)}-${pad2(n.getDate())}`;
}

export function parseYmdLocal(ymd: string): Date | null {
  const raw = ymd?.trim();
  if (!raw) return null;
  const p = raw.split('-').map(Number);
  if (p.length !== 3 || p.some((x) => !Number.isFinite(x))) return null;
  const d = new Date(p[0], p[1] - 1, p[2]);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** Inclusive calendar-day count between start and end (minimum 1). */
export function inclusiveDurationDays(startYmd: string, endYmd: string): number {
  const s = parseYmdLocal(startYmd);
  const e = parseYmdLocal(endYmd);
  if (!s || !e) return 1;
  const diff = Math.round((e.getTime() - s.getTime()) / 86400000);
  return Math.max(1, diff + 1);
}

/** Last calendar day of the window: start + (durationDays - 1). */
export function dueYmdFromStartAndDuration(startYmd: string, durationDays: number): string {
  const s = parseYmdLocal(startYmd);
  if (!s || !Number.isFinite(durationDays) || durationDays < 1) return startYmd.trim();
  const d = new Date(s.getFullYear(), s.getMonth(), s.getDate() + (Math.floor(durationDays) - 1));
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
