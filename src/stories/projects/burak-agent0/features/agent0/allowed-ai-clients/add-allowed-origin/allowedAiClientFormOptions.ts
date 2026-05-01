import { ALLOWED_AI_CLIENT_KIND_MODE_OPTIONS } from '../../shared/allowedAiClientOriginKindLabels';

export const modeOptions = ALLOWED_AI_CLIENT_KIND_MODE_OPTIONS;

export const protocolOptions = [
  { label: 'https', value: 'https' as const },
  { label: 'http', value: 'http' as const },
];

export const localPresetOptions = [
  { label: 'localhost', value: 'localhost' as const },
  { label: '127.0.0.1', value: '127' as const },
  { label: 'Custom', value: 'custom' as const },
];
