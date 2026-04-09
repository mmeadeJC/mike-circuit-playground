import type { AllowedAiClientDialogSnapshot, AllowedAiClientOriginKind } from '../shared/types';

export function computeOriginPreview(snapshot: AllowedAiClientDialogSnapshot): string {
  const { mode, protocol, singleHost, singlePort, patternValue, localPreset, localCustom, customProtocolName, customDomainValue } =
    snapshot;

  if (mode === 'single_domain') {
    const host = singleHost.trim();
    if (!host) return '';
    const port = singlePort.trim();
    return `${protocol}://${host}${port ? `:${port}` : ''}`;
  }

  if (mode === 'pattern') {
    const p = patternValue.trim();
    if (!p) return '';
    return `${protocol}://${p.replace(/^\/*/, '')}`;
  }

  if (mode === 'local_dev') {
    if (localPreset === 'localhost') return 'http://localhost:*/**';
    if (localPreset === '127') return 'http://127.0.0.1:*/**';
    return localCustom.trim();
  }

  if (mode === 'custom_protocol') {
    const name = customProtocolName.trim();
    const val = customDomainValue.trim();
    if (!name || !val) return '';
    return `${name}://${val}`;
  }

  return '';
}

export function isSnapshotValid(snapshot: AllowedAiClientDialogSnapshot): boolean {
  if (snapshot.mode === 'local_dev' && snapshot.localPreset === 'custom') {
    return snapshot.localCustom.trim().length > 0;
  }
  const origin = computeOriginPreview(snapshot);
  return origin.length > 0;
}

export function defaultSnapshot(mode: AllowedAiClientOriginKind = 'single_domain'): AllowedAiClientDialogSnapshot {
  return {
    mode,
    protocol: 'https',
    singleHost: '',
    singlePort: '',
    patternValue: '',
    localPreset: 'localhost',
    localCustom: '',
    customProtocolName: '',
    customDomainValue: '',
    note: '',
  };
}
