// Lookup-value library for DP-582 (Dynamic/Lookup Values in Policy Management).
// Syntax: {object.attribute} — objects are user, device, organization.

export type VariableContext = 'user' | 'device' | 'organization';

export interface PolicyVariable {
  token: string;
  context: VariableContext;
  description: string;
}

export interface PreviewContext {
  id: string;
  label: string;
  values: Record<string, string>;
}

export const VARIABLE_CONTEXT_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'User', value: 'user' },
  { label: 'Device', value: 'device' },
  { label: 'Organization', value: 'organization' },
];

export const POLICY_VARIABLES: PolicyVariable[] = [
  { token: '{user.username}', context: 'user', description: 'Username of the user bound to the device' },
  { token: '{user.email}', context: 'user', description: 'Primary email address of the bound user' },
  { token: '{user.firstName}', context: 'user', description: 'First name of the bound user' },
  { token: '{user.lastName}', context: 'user', description: 'Last name of the bound user' },
  { token: '{user.department}', context: 'user', description: 'Department attribute on the user record' },
  { token: '{device.id}', context: 'device', description: 'JumpCloud system ID of the device' },
  { token: '{device.hostname}', context: 'device', description: 'Hostname reported by the device' },
  { token: '{device.serialNumber}', context: 'device', description: 'Hardware serial number' },
  { token: '{device.model}', context: 'device', description: 'Hardware model name' },
  { token: '{device.os}', context: 'device', description: 'Operating system name and version' },
  { token: '{organization.id}', context: 'organization', description: 'JumpCloud organization ID' },
  { token: '{organization.name}', context: 'organization', description: 'Display name of the organization' },
];

export const PREVIEW_CONTEXTS: PreviewContext[] = [
  {
    id: 'jane',
    label: 'MacBook Pro 14" — Jane Cooper',
    values: {
      '{user.username}': 'jcooper',
      '{user.email}': 'jane.cooper@acme.com',
      '{user.firstName}': 'Jane',
      '{user.lastName}': 'Cooper',
      '{user.department}': 'Engineering',
      '{device.id}': '66f1a2b3c4d5e6f708192a3b',
      '{device.hostname}': 'jcooper-mbp',
      '{device.serialNumber}': 'C02XK0YDJGH5',
      '{device.model}': 'MacBookPro18,3',
      '{device.os}': 'macOS 15.3',
      '{organization.id}': '5a9d7b2e1c3f4a6b8d0e1f2a',
      '{organization.name}': 'Acme Corp',
    },
  },
  {
    id: 'marcus',
    label: 'Surface Laptop 5 — Marcus Lee',
    values: {
      '{user.username}': 'mlee',
      '{user.email}': 'marcus.lee@acme.com',
      '{user.firstName}': 'Marcus',
      '{user.lastName}': 'Lee',
      '{user.department}': 'Sales',
      '{device.id}': '67a3b4c5d6e7f8091a2b3c4d',
      '{device.hostname}': 'mlee-surface',
      '{device.serialNumber}': '0F61839A2214',
      '{device.model}': 'Surface Laptop 5',
      '{device.os}': 'Windows 11 23H2',
      '{organization.id}': '5a9d7b2e1c3f4a6b8d0e1f2a',
      '{organization.name}': 'Acme Corp',
    },
  },
];

const VARIABLE_PATTERN = /\{[A-Za-z]+\.[A-Za-z]+\}/g;

/** Finds every `{object.attribute}` token in the given strings, de-duplicated in order of appearance. */
export function findVariableTokens(texts: string[]): string[] {
  const found: string[] = [];
  for (const text of texts) {
    for (const match of text.match(VARIABLE_PATTERN) ?? []) {
      if (!found.includes(match)) found.push(match);
    }
  }
  return found;
}

export function isKnownVariable(token: string): boolean {
  return POLICY_VARIABLES.some((variable) => variable.token === token);
}
