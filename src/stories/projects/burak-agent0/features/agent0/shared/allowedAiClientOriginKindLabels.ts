import type { AllowedAiClientOriginKind } from './types';

/** Single source of truth for match-type labels (table, filters, forms). */
export const ALLOWED_AI_CLIENT_KIND_LABELS: Record<AllowedAiClientOriginKind, string> = {
  single_domain: 'Single domain',
  pattern: 'Pattern',
  local_dev: 'Local development',
  custom_protocol: 'Custom protocol',
};

/** Stable ordering for selects, filters, and forms — add new kinds here once. */
export const ALLOWED_AI_CLIENT_KIND_ORDER: AllowedAiClientOriginKind[] = [
  'single_domain',
  'pattern',
  'local_dev',
  'custom_protocol',
];

export function getAllowedAiClientKindLabel(kind: AllowedAiClientOriginKind): string {
  return ALLOWED_AI_CLIENT_KIND_LABELS[kind] ?? String(kind);
}

/** Select / MultiSelect options — order matches add-origin form. */
export const ALLOWED_AI_CLIENT_KIND_MODE_OPTIONS: { label: string; value: AllowedAiClientOriginKind }[] =
  ALLOWED_AI_CLIENT_KIND_ORDER.map((value) => ({
    label: ALLOWED_AI_CLIENT_KIND_LABELS[value],
    value,
  }));
