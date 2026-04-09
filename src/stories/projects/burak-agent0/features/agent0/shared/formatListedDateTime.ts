const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

/**
 * Parses `createdAt` strings: ISO 8601, or legacy `M/D/YYYY` (local midnight).
 */
export function parseListedDateInput(s: string): Date | null {
  const trimmed = s.trim();
  if (!trimmed) return null;

  const fromIso = Date.parse(trimmed);
  if (!Number.isNaN(fromIso)) {
    const d = new Date(fromIso);
    if (!Number.isNaN(d.getTime())) return d;
  }

  const mdy = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (mdy) {
    const month = Number(mdy[1]) - 1;
    const day = Number(mdy[2]);
    const year = Number(mdy[3]);
    return new Date(year, month, day, 0, 0, 0, 0);
  }

  return null;
}

/**
 * Formats for list tables: `Jul 25, 2025 @ 09:44am` (3-letter month, 12h, zero-padded hour, lowercase am/pm).
 */
export function formatListedDateTime(input: string | Date): string {
  const date = typeof input === 'string' ? parseListedDateInput(input) : input;
  if (!date || Number.isNaN(date.getTime())) {
    return typeof input === 'string' ? input : '';
  }

  const mon = MONTHS[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let h24 = date.getHours();
  const min = date.getMinutes();
  const ampm = h24 >= 12 ? 'pm' : 'am';
  let h12 = h24 % 12;
  if (h12 === 0) h12 = 12;

  const hh = String(h12).padStart(2, '0');
  const mm = String(min).padStart(2, '0');

  return `${mon} ${day}, ${year} @ ${hh}:${mm}${ampm}`;
}
