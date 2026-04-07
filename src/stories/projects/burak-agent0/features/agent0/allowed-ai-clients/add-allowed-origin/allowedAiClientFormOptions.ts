import type { AllowedAiClientOriginKind } from '../../shared/types';

export const modeOptions: { label: string; value: AllowedAiClientOriginKind }[] = [
  { label: 'Single domain', value: 'single_domain' },
  { label: 'Pattern', value: 'pattern' },
  { label: 'Local development', value: 'local_dev' },
  { label: 'Custom protocol', value: 'custom_protocol' },
];

export const protocolOptions = [
  { label: 'https', value: 'https' as const },
  { label: 'http', value: 'http' as const },
];

export const localPresetOptions = [
  { label: 'localhost', value: 'localhost' as const },
  { label: '127.0.0.1', value: '127' as const },
  { label: 'Custom', value: 'custom' as const },
];
