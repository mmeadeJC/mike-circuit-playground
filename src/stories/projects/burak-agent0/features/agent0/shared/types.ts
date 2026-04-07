export interface Server {
  id: number;
  name: string;
  slug: string;
  url: string;
  connectionType: string;
  connectionTypeSeverity: string;
  status: string;
  statusConnected: boolean;
  createdAt: string;
  authConfig: string;
}

export interface Profile {
  id: number;
  name: string;
  profileId: string;
  label: string;
  serverIds: string[];
  createdAt: string;
}

export interface UserGroup {
  id: number;
  name: string;
  slug: string;
  memberCount: number;
  createdAt: string;
}

export interface ActivityLogEntry {
  id: number;
  timestamp: string;
  user: string;
  action: string;
  actionCategory: string;
  server: string;
  detail: string;
  tokensUsed: number;
  status: string;
  statusSeverity: string;
}

export interface AgentInstruction {
  id: number;
  name: string;
  enabled: boolean;
  content: string;
}

export interface LlmProvider {
  id: string;
  name: string;
  subtitle: string;
  model: string;
}

export interface ServerFormState {
  targetId: string;
  name: string;
  url: string;
  authStyle: string;
  authConfig: string;
}

/** Phase 01 server add/edit dialog — no JSON auth config; prefix replaces target ID */
export interface Phase01ServerFormState {
  prefix: string;
  name: string;
  url: string;
  authStyle: string;
  /** Optional; shown when auth uses API token/key — link for user portal setup help */
  apiDocumentationUrl: string;
  /** OAuth advanced — Client ID */
  oauthClientId: string;
  /** OAuth advanced — scope string */
  oauthScope: string;
}

export interface ActivityFilter {
  id?: string | number;
  key: string;
  operator: string;
  value: string;
}

export type AllowedAiClientOriginKind = 'single_domain' | 'pattern' | 'local_dev' | 'custom_protocol';

/** Persisted form shape so edit can reopen the add dialog prefilled (demo). */
export interface AllowedAiClientDialogSnapshot {
  mode: AllowedAiClientOriginKind;
  protocol: 'http' | 'https';
  singleHost: string;
  singlePort: string;
  patternValue: string;
  /** Preset key for local dev: localhost preset, 127 preset, or custom */
  localPreset: 'localhost' | '127' | 'custom';
  localCustom: string;
  customProtocolName: string;
  customDomainValue: string;
  note: string;
}

/** One allowed AI client row (origin / pattern + metadata). */
export interface AllowedAiClient {
  id: number;
  kind: AllowedAiClientOriginKind;
  origin: string;
  note?: string;
  /** ISO 8601 (preferred) or legacy `M/D/YYYY`; shown as `Mar 1, 2026 @ 09:44am` in the table. */
  createdAt: string;
  snapshot: AllowedAiClientDialogSnapshot;
}

export interface AllowedAiClientSubmitPayload {
  id?: number;
  kind: AllowedAiClientOriginKind;
  origin: string;
  note?: string;
  snapshot: AllowedAiClientDialogSnapshot;
}
