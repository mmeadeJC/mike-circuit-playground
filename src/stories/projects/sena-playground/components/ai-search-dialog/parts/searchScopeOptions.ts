/** Shared mock scope filter options for AI / default search dialogs (Storybook). */
export const SCOPE_FILTER_OPTIONS = [
  { value: 'all', label: 'All', count: 17 },
  { value: 'users', label: 'Users', count: 1 },
  { value: 'devices', label: 'Devices', count: 3 },
  { value: 'groups', label: 'Groups', count: 4 },
  { value: 'policies', label: 'Policies', count: 3 },
  { value: 'apps', label: 'Apps', count: 4 },
] as const;

export type SearchScopeValue = (typeof SCOPE_FILTER_OPTIONS)[number]['value'];
