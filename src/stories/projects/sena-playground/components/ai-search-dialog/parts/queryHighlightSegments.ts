export type QueryHighlightSegment = {
  text: string;
  highlight: boolean;
};

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Split text into plain vs highlighted segments for case-insensitive `searchQuery` (safe for text nodes, no HTML). */
export function splitTextByQueryHighlight(
  text: string,
  searchQuery: string | undefined
): QueryHighlightSegment[] {
  const q = searchQuery?.trim();
  if (!q) {
    return [{ text, highlight: false }];
  }
  const segments: QueryHighlightSegment[] = [];
  let lastIndex = 0;
  const re = new RegExp(`(${escapeRegExp(q)})`, 'gi');
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        text: text.slice(lastIndex, match.index),
        highlight: false,
      });
    }
    segments.push({ text: match[0], highlight: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), highlight: false });
  }
  return segments.length > 0 ? segments : [{ text, highlight: false }];
}
