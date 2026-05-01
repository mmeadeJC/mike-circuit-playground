import type {
  AccessReviewCampaign,
  CampaignReviewGroupApproverRow,
  CampaignReviewGroupExpansion,
  CampaignReviewUserExpandedMeta,
  CampaignReviewUserRow,
  CampaignScopeAssignedResourceLine,
  CampaignScopeGroupExpansionSections,
  CampaignScopeGroupTableRow,
  DirectoryInsightsAccessReviewEvent,
  GlobalAccessReviewSettings,
  ReviewQueueItem,
  ScopeType,
} from './types';

/** Deterministic mock member count for campaign remediation table demos. */
export function mockUserCountForGroupName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h + name.charCodeAt(i) * (i + 3)) % 500;
  }
  return 12 + (h % 200);
}

/** Deterministic mock “other resources” count per group. */
export function mockOtherResourcesCountForGroup(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h + name.charCodeAt(i)) % 24;
  }
  return 1 + h;
}

/** Playground Slack channels the integration can post to (campaign Slack channel picker). */
export interface SlackChannelSelectOption {
  label: string;
  value: string;
}

export const MOCK_SLACK_CHANNEL_SELECT_OPTIONS: SlackChannelSelectOption[] = [
  { label: '#access-reviews', value: 'C07ARV001' },
  { label: '#it-security', value: 'C07ITSEC02' },
  { label: '#compliance-alerts', value: 'C07COMP03' },
  { label: '#general', value: 'C07GENRL04' },
  { label: '#team-hr-notices', value: 'C07HRNT05' },
];

/** Directory users offered as fallback reviewers when “Users Manager” is selected but a user has no manager attribute. */
export const MOCK_FALLBACK_APPROVER_OPTIONS: { label: string; value: string }[] = [
  { label: 'Alex Rivera (alex.rivera@acme.test)', value: 'user_alex_rivera' },
  { label: 'Jordan Lee (jordan.lee@acme.test)', value: 'user_jordan_lee' },
  { label: 'Morgan Patel (morgan.patel@acme.test)', value: 'user_morgan_patel' },
  { label: 'Sam Okonkwo (sam.okonkwo@acme.test)', value: 'user_sam_okonkwo' },
  { label: 'Taylor Chen (taylor.chen@acme.test)', value: 'user_taylor_chen' },
];

export function labelForFallbackApprover(value: string | undefined): string {
  const v = value?.trim();
  if (!v) return '';
  const opt = MOCK_FALLBACK_APPROVER_OPTIONS.find((o) => o.value === v);
  return opt?.label ?? v;
}

/** Resolve channel label for detail / summaries (prefers ID lookup, then legacy designation). */
export function displaySlackChannelFromCampaign(c: {
  slackChannelId?: string;
  slackChannelDesignation?: string;
}): string {
  const id = c.slackChannelId?.trim();
  if (id) {
    const opt = MOCK_SLACK_CHANNEL_SELECT_OPTIONS.find((o) => o.value === id);
    if (opt) return opt.label;
    return id;
  }
  const legacy = c.slackChannelDesignation?.trim();
  return legacy || '—';
}

function mapGroupExpansionToPending(g: CampaignReviewGroupExpansion): CampaignReviewGroupExpansion {
  return {
    ...g,
    groupDecision: 'pending',
    reviewerDecided: false,
    approvers: g.approvers.map((a) => ({
      ...a,
      groupDecision: 'pending',
      reviewerDecided: false,
      decidedAtDisplay: null,
      justification: null,
    })),
  };
}

/** Not-started campaigns have no reviewer decisions yet — table + expansion stay pending. */
function applyScheduledPendingToUserRows(rows: CampaignReviewUserRow[]): CampaignReviewUserRow[] {
  return rows.map((r) => ({
    ...r,
    decision: 'pending',
    groupsDecided: 0,
    decidedAtDisplay: null,
    groupDetails: r.groupDetails.map(mapGroupExpansionToPending),
  }));
}

function formatApprovalDisplayDate(iso: string | undefined): string {
  if (!iso?.trim()) return 'Feb 10, 2026';
  const d = new Date(iso.trim());
  if (Number.isNaN(d.getTime())) return 'Feb 10, 2026';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/**
 * Completed campaigns: user rows and per-group review blocks show final outcomes only (no pending).
 */
function applyCompletedResolvedToUserRows(
  rows: CampaignReviewUserRow[],
  campaign: AccessReviewCampaign,
): CampaignReviewUserRow[] {
  const displayDate = formatApprovalDisplayDate(campaign.approvalCompletedAtIso);
  return rows.map((row, idx) => {
    const fallbackOverall: 'keep' | 'revoke' = idx % 2 === 0 ? 'keep' : 'revoke';
    const overall: 'keep' | 'revoke' =
      row.decision === 'pending' ? fallbackOverall : row.decision;

    const groupDetails = row.groupDetails.map((g) => {
      const groupDecision: 'keep' | 'revoke' =
        g.groupDecision === 'pending' ? overall : g.groupDecision;

      return {
        ...g,
        groupDecision,
        reviewerDecided: true,
        approvers: g.approvers.map((a) => ({
          ...a,
          groupDecision,
          reviewerDecided: true,
          decidedAtDisplay: a.decidedAtDisplay ?? displayDate,
          justification:
            a.justification ??
            (groupDecision === 'keep'
              ? 'Confirmed during completed access review.'
              : 'Access removed following completed review.'),
        })),
      };
    });

    return {
      ...row,
      decision: overall,
      groupsDecided: row.groupsTotal,
      decidedAtDisplay: row.decidedAtDisplay ?? displayDate,
      groupDetails,
    };
  });
}

export const defaultGlobalSettings: GlobalAccessReviewSettings = {
  featureEnabled: true,
  emailOnCampaignStart: true,
  emailOnDueReminder: true,
  emailOnCampaignComplete: true,
};

/** Directory groups for campaign scope — long list for search + virtual scroll in the playground. */
const MOCK_USER_GROUP_NAMES = [
  'All Employees',
  'Analytics',
  'Contractors',
  'Customer Success',
  'Data Platform',
  'Design',
  'Dev Contractors',
  'Developers',
  'East Region',
  'Engineering',
  'Executive',
  'Finance',
  'HR',
  'IT Operations',
  'Legal',
  'Marketing',
  'Partners',
  'Product',
  'Professional Services',
  'QA',
  'Research',
  'Sales',
  'Security',
  'Support',
  'West Region',
] as const;

export const MOCK_USER_GROUP_SELECT_OPTIONS: { label: string; value: string }[] = [...MOCK_USER_GROUP_NAMES]
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  .map((name) => ({ label: name, value: name }));

export type MockApplicationAccessGroup = { name: string; isDynamic: boolean };

/** SSO applications — long list for search + virtual scroll in campaign scope. */
const MOCK_SSO_APPLICATION_NAMES = [
  'Asana',
  'Box',
  'Confluence',
  'DocuSign',
  'Dropbox Business',
  'Figma',
  'GitHub Enterprise',
  'Google Drive',
  'Google Workspace',
  'HubSpot',
  'Jira',
  'Microsoft 365',
  'Miro',
  'Monday.com',
  'Notion',
  'Salesforce',
  'ServiceNow',
  'Slack',
  'Zendesk',
  'Zoom',
] as const;

export const MOCK_APPLICATION_SELECT_OPTIONS: { label: string; value: string }[] = [...MOCK_SSO_APPLICATION_NAMES]
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  .map((name) => ({ label: name, value: name }));

/** Curated groups per app for demos; other apps get a generic template via `mockApplicationAccessGroupsForApp`. */
const MOCK_APPLICATION_ACCESS_GROUPS_DETAIL: Record<string, MockApplicationAccessGroup[]> = {
  Salesforce: [
    { name: 'Sales — SSO', isDynamic: true },
    { name: 'Finance', isDynamic: false },
    { name: 'Engineering', isDynamic: false },
    { name: 'All Employees', isDynamic: true },
  ],
  'GitHub Enterprise': [
    { name: 'Engineering', isDynamic: false },
    { name: 'DevOps', isDynamic: false },
    { name: 'Contractors SSO', isDynamic: true },
    { name: 'Security', isDynamic: false },
  ],
  Slack: [
    { name: 'Organization-wide — Slack', isDynamic: true },
    { name: 'Engineering', isDynamic: false },
    { name: 'Marketing', isDynamic: false },
    { name: 'External collaborators', isDynamic: false },
  ],
  Jira: [
    { name: 'Product & Design', isDynamic: false },
    { name: 'Engineering', isDynamic: false },
    { name: 'Jira — Cloud site access', isDynamic: true },
  ],
  'Google Drive': [
    { name: 'Marketing Shared Drive', isDynamic: false },
    { name: 'Company — Drive', isDynamic: true },
    { name: 'All Employees', isDynamic: false },
  ],
};

export function mockApplicationAccessGroupsForApp(appName: string): MockApplicationAccessGroup[] {
  const custom = MOCK_APPLICATION_ACCESS_GROUPS_DETAIL[appName];
  if (custom?.length) return custom;
  return [
    { name: `${appName} — Organization`, isDynamic: true },
    { name: 'Engineering', isDynamic: false },
    { name: 'General access', isDynamic: false },
  ];
}

function scopeGroupRowId(groupName: string): string {
  return `scope_grp_${groupName.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '')}_${simpleScopeHash(groupName)}`;
}

function simpleScopeHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h + s.charCodeAt(i) * (i + 3)) % 997;
  }
  return h;
}

function inferUserGroupTypeFromNameWhenUnknown(groupName: string): 'dynamic' | 'static' {
  const lower = groupName.toLowerCase();
  if (
    lower.includes('organization') ||
    lower.includes('all employees') ||
    lower.includes('company') ||
    lower.includes('org-wide') ||
    lower.includes('organization-wide')
  ) {
    return 'dynamic';
  }
  return 'static';
}

/** Mock linked resources for the scope-step expandable panel (counts match list lengths). */
export function mockAssignedResourcesForScopeGroup(
  applicationName: string | undefined,
  groupName: string,
): CampaignScopeGroupExpansionSections {
  const h = simpleScopeHash(`${applicationName ?? ''}|${groupName}`);
  const apps: CampaignScopeAssignedResourceLine[] = [];
  let n = 0;
  const addApp = (label: string, abbreviation: string) => {
    apps.push({ id: `app-${n++}`, label, abbreviation });
  };

  if (applicationName?.trim()) {
    const abbr = applicationName
      .replace(/[^a-zA-Z]/g, '')
      .slice(0, 2)
      .toUpperCase();
    addApp(
      `${applicationName} — ${['Primary connection', 'Org default', 'Production tenant'][h % 3]}`,
      abbr || 'AP',
    );
  }

  const pool: { label: string; abbreviation: string }[] = [
    { label: 'GitHub Enterprise — Engineering workspace', abbreviation: 'GH' },
    { label: 'Slack — Workspace Acme Corp (Primary)', abbreviation: 'SL' },
    { label: 'Jira Cloud — ITSM project site', abbreviation: 'JI' },
    { label: 'Datadog — Observability org (US1)', abbreviation: 'DD' },
    { label: 'AWS — Account 439436368966 (Production)', abbreviation: 'AW' },
  ];
  const extraCount = 3 + (h % 3);
  for (let i = 0; i < extraCount; i++) {
    const p = pool[(i + h) % pool.length];
    if (!apps.some((a) => a.label === p.label)) addApp(p.label, p.abbreviation);
  }

  const directories: CampaignScopeAssignedResourceLine[] = [
    { id: 'dir-0', label: 'JumpCloud LDAP Directory', abbreviation: 'JC' },
    { id: 'dir-1', label: 'Google Workspace', abbreviation: 'GW' },
  ].slice(0, 1 + (h % 2));

  const vault: CampaignScopeAssignedResourceLine[] = [
    { id: 'vault-0', label: 'HashiCorp Vault — Engineering namespace', abbreviation: 'HV' },
  ];

  return {
    applications: apps,
    directories,
    vault,
  };
}

function totalAssignedLines(sections: CampaignScopeGroupExpansionSections): number {
  return sections.applications.length + sections.directories.length + sections.vault.length;
}

/**
 * Builds rows for the scope-step “selected user groups” table (application or group membership target).
 */
export function buildCampaignScopeGroupTableRows(options: {
  scopeType: ScopeType;
  applicationName: string;
  groupNames: string[];
}): CampaignScopeGroupTableRow[] {
  const { scopeType, applicationName, groupNames } = options;
  const metaByName =
    scopeType === 'application'
      ? new Map(mockApplicationAccessGroupsForApp(applicationName).map((g) => [g.name, g]))
      : null;

  return groupNames.map((groupName) => {
    const meta = metaByName?.get(groupName);
    const userGroupType: 'dynamic' | 'static' = meta
      ? meta.isDynamic
        ? 'dynamic'
        : 'static'
      : inferUserGroupTypeFromNameWhenUnknown(groupName);
    const assigned = mockAssignedResourcesForScopeGroup(
      scopeType === 'application' ? applicationName : undefined,
      groupName,
    );
    const otherResourcesCount = totalAssignedLines(assigned);

    return {
      id: scopeGroupRowId(groupName),
      groupName,
      userGroupType,
      usersCount: mockUserCountForGroupName(groupName),
      otherResourcesCount,
      assigned,
    };
  });
}

const orgId = 'org_mock_001';

function diEvent(
  partial: Omit<DirectoryInsightsAccessReviewEvent, 'event_id' | 'timestamp_iso' | 'org_id'> & {
    event_id?: string;
    timestamp_iso?: string;
  },
): DirectoryInsightsAccessReviewEvent {
  const now = new Date().toISOString();
  return {
    event_id: partial.event_id ?? `evt_${Math.random().toString(36).slice(2, 11)}`,
    timestamp_iso: partial.timestamp_iso ?? now,
    org_id: orgId,
    category: partial.category,
    actor: partial.actor,
    resource: partial.resource,
    payload: partial.payload,
  };
}

/** Seed campaigns — hero UC1 (Finance + app) and UC2 (Contractors). */
export const seedCampaigns: AccessReviewCampaign[] = [
  {
    id: 'camp_finance_sf',
    name: 'Salesforce access — Finance',
    status: 'in_progress',
    scopeType: 'application',
    scopeSummary: 'Salesforce · department = Finance',
    applicationName: 'Salesforce',
    applicationIncludedGroups: ['Sales — SSO', 'Finance'],
    attributeFilters: [{ attribute: 'department', operator: 'equals', value: 'Finance' }],
    startDate: '2026-03-15',
    dueDate: '2026-04-15',
    campaignDurationDays: 32,
    scheduleMode: 'recurring',
    cadence: 'semi_annual',
    nextRunDisplay: 'Oct 15, 2026',
    reminderFrequency: 'weekly',
    emailNotificationsEnabled: true,
    reviewerAssignment: 'users_manager',
    completionCriteria: 'sequential',
    mandatoryJustification: true,
    revocationMode: 'automatic',
    revocationTimingMode: 'campaign_end',
    endOfCampaignRevocation: true,
    completionPercent: 42,
    reviewers: [
      { name: 'Tom Wilson', role: 'Resource owner', completed: 1, total: 8 },
      { name: 'Managers (per user)', role: 'Manager', completed: 2, total: 8 },
    ],
  },
  {
    id: 'camp_contractors',
    name: 'Contractors group membership',
    status: 'in_progress',
    scopeType: 'group',
    scopeSummary: 'User group · Contractors',
    groupName: 'Contractors',
    attributeFilters: [],
    startDate: '2026-03-01',
    dueDate: '2026-03-31',
    campaignDurationDays: 31,
    scheduleMode: 'recurring',
    cadence: 'quarterly',
    nextRunDisplay: 'Jun 30, 2026',
    reminderFrequency: 'daily',
    emailNotificationsEnabled: true,
    reviewerAssignment: 'resource_owner',
    completionCriteria: 'any',
    mandatoryJustification: false,
    revocationMode: 'scheduled',
    revocationTimingMode: 'campaign_end',
    endOfCampaignRevocation: true,
    completionPercent: 67,
    reviewers: [{ name: 'Diana Lopez', role: 'Group owner', completed: 12, total: 18 }],
  },
  /** Not started yet — start date in the future; reviewers have not been activated. */
  {
    id: 'camp_jira_not_started',
    name: 'Jira — Product & Design (not started)',
    status: 'scheduled',
    scopeType: 'application',
    scopeSummary: 'Jira Cloud · department = Product',
    applicationName: 'Jira',
    attributeFilters: [{ attribute: 'department', operator: 'equals', value: 'Product' }],
    startDate: '2026-05-01',
    dueDate: '2026-05-31',
    campaignDurationDays: 31,
    scheduleMode: 'one_time',
    reminderFrequency: 'weekly',
    emailNotificationsEnabled: true,
    reviewerAssignment: 'users_manager',
    completionCriteria: 'any',
    mandatoryJustification: true,
    revocationMode: 'automatic',
    revocationTimingMode: 'campaign_end',
    endOfCampaignRevocation: true,
    completionPercent: 0,
    reviewers: [{ name: 'Managers (per user)', role: 'Manager', completed: 0, total: 24 }],
  },
  {
    id: 'camp_github_eng',
    name: 'GitHub Enterprise — Engineering',
    status: 'scheduled',
    scopeType: 'application',
    scopeSummary: 'GitHub Enterprise · department = Engineering',
    applicationName: 'GitHub Enterprise',
    attributeFilters: [{ attribute: 'department', operator: 'equals', value: 'Engineering' }],
    startDate: '2026-04-01',
    dueDate: '2026-04-30',
    campaignDurationDays: 30,
    scheduleMode: 'one_time',
    reminderFrequency: 'weekly',
    emailNotificationsEnabled: true,
    reviewerAssignment: 'resource_owner',
    completionCriteria: 'all',
    mandatoryJustification: true,
    revocationMode: 'scheduled',
    revocationTimingMode: 'campaign_end',
    endOfCampaignRevocation: true,
    completionPercent: 0,
    reviewers: [{ name: 'Lisa Park', role: 'Application owner', completed: 0, total: 12 }],
  },
  /** Finished campaign — batch remediation already simulated. */
  {
    id: 'camp_slack_completed',
    name: 'Slack — Org-wide access',
    status: 'completed',
    scopeType: 'application',
    scopeSummary: 'Slack · all provisioned users',
    applicationName: 'Slack',
    attributeFilters: [],
    startDate: '2026-01-10',
    dueDate: '2026-02-10',
    campaignDurationDays: 32,
    scheduleMode: 'one_time',
    reminderFrequency: 'daily',
    emailNotificationsEnabled: true,
    reviewerAssignment: 'resource_owner',
    completionCriteria: 'sequential',
    mandatoryJustification: true,
    revocationMode: 'automatic',
    revocationTimingMode: 'campaign_end',
    endOfCampaignRevocation: true,
    completionPercent: 100,
    approvalCompletedAtIso: '2026-02-10T18:45:00.000Z',
    reviewers: [{ name: 'Diana Lopez', role: 'Application owner', completed: 195, total: 195 }],
    reviewResultsBreakdown: { kept: 78, revoked: 11, delegated: 0, pending: 0 },
    revocationSummary: {
      usersRemovedFromApp: 14,
      usersRemovedFromGroups: 0,
      completedAt: '2026-02-10T23:59:00.000Z',
    },
  },
  /** Completed — remediation summary not recorded yet (Pending Remediation tab). */
  {
    id: 'camp_gdrive_pending_revoke',
    name: 'Google Drive — Marketing cleanup',
    status: 'completed',
    scopeType: 'application',
    scopeSummary: 'Google Drive · department = Marketing',
    applicationName: 'Google Drive',
    attributeFilters: [{ attribute: 'department', operator: 'equals', value: 'Marketing' }],
    startDate: '2026-02-01',
    dueDate: '2026-03-01',
    campaignDurationDays: 29,
    scheduleMode: 'one_time',
    reminderFrequency: 'weekly',
    emailNotificationsEnabled: true,
    reviewerAssignment: 'resource_owner',
    completionCriteria: 'all',
    mandatoryJustification: true,
    revocationMode: 'scheduled',
    revocationTimingMode: 'campaign_end',
    endOfCampaignRevocation: true,
    completionPercent: 100,
    approvalCompletedAtIso: '2026-03-02T16:14:00.000Z',
    reviewers: [{ name: 'Alex Rivera', role: 'Application owner', completed: 48, total: 48 }],
    reviewResultsBreakdown: { kept: 40, revoked: 6, delegated: 2, pending: 0 },
    remediationPerGroupSettings: [
      {
        groupName: 'Marketing Team',
        userGroupType: 'static',
        usersInGroupCount: 24,
        otherResourcesCount: 4,
        revokeAction: 'manual_review_queue',
        noResponseAction: 'no_action',
      },
    ],
  },
  /** Completed — no remediation batch yet; revocation status Scheduled (automatic removal per group). */
  {
    id: 'camp_notion_pending_scheduled',
    name: 'Notion — Sales workspace',
    status: 'completed',
    scopeType: 'application',
    scopeSummary: 'Notion · department = Sales',
    applicationName: 'Notion',
    applicationIncludedGroups: ['Sales — SSO', 'East Region'],
    attributeFilters: [{ attribute: 'department', operator: 'equals', value: 'Sales' }],
    startDate: '2026-02-10',
    dueDate: '2026-03-10',
    campaignDurationDays: 29,
    scheduleMode: 'one_time',
    reminderFrequency: 'weekly',
    emailNotificationsEnabled: true,
    reviewerAssignment: 'resource_owner',
    completionCriteria: 'any',
    mandatoryJustification: false,
    revocationMode: 'automatic',
    revocationTimingMode: 'campaign_end',
    endOfCampaignRevocation: true,
    completionPercent: 100,
    approvalCompletedAtIso: '2026-03-12T09:30:00.000Z',
    reviewers: [{ name: 'Priya Shah', role: 'Application owner', completed: 32, total: 32 }],
    reviewResultsBreakdown: { kept: 22, revoked: 4, delegated: 0, pending: 0 },
    remediationPerGroupSettings: [
      {
        groupName: 'Sales — SSO',
        userGroupType: 'dynamic',
        usersInGroupCount: 118,
        otherResourcesCount: 6,
        revokeAction: 'automatic_removal',
        noResponseAction: 'no_action',
      },
    ],
  },
];

function playgroundExpandedMeta(dept: string): CampaignReviewUserExpandedMeta {
  return {
    managerName: 'Sarah Chen',
    department: dept,
    lastAccessedDisplay: 'Jan 21, 2025',
    accessGrantedDisplay: 'Jun 1, 2024',
  };
}

/** Playground rows for campaign detail “users in scope” table; override per campaign via `reviewUserRows`. */
export function mockCampaignReviewUserRows(campaign: AccessReviewCampaign): CampaignReviewUserRow[] {
  if (campaign.reviewUserRows?.length) {
    if (campaign.status === 'scheduled') {
      return applyScheduledPendingToUserRows(campaign.reviewUserRows);
    }
    if (campaign.status === 'completed') {
      return applyCompletedResolvedToUserRows(campaign.reviewUserRows, campaign);
    }
    return campaign.reviewUserRows;
  }

  const dept =
    campaign.attributeFilters.find((a) => a.attribute.toLowerCase() === 'department')?.value?.trim() ||
    'Finance';

  const inScopeGroups =
    campaign.scopeType === 'application'
      ? campaign.applicationIncludedGroups?.length
        ? [...campaign.applicationIncludedGroups]
        : ['Sales — SSO', 'Finance']
      : [campaign.groupName ?? 'Contractors', 'Dev Contractors'];

  const groupsTotal = Math.min(2, Math.max(1, inScopeGroups.length));
  const appLabel = campaign.applicationName?.trim();
  const groupLabelPrimary =
    groupsTotal >= 1 ? `${dept} Team` : inScopeGroups[0] ?? 'Team';
  const groupLabelSecondary =
    groupsTotal >= 2
      ? appLabel
        ? `${appLabel} Users`
        : inScopeGroups[1] ?? 'Secondary group'
      : '';

  const meta = playgroundExpandedMeta(dept);

  const baseGroupCard = (
    partial: Pick<CampaignReviewGroupExpansion, 'groupName'> &
      Partial<
        Pick<CampaignReviewGroupExpansion, 'groupDecision' | 'reviewerDecided' | 'approvers'> & {
          decidedAtDisplay?: string | null;
          justification?: string | null;
        }
      >,
  ): CampaignReviewGroupExpansion => {
    const gd = partial.groupDecision ?? 'pending';
    const decided = partial.reviewerDecided ?? false;
    const approvers: CampaignReviewGroupApproverRow[] =
      partial.approvers ??
      [
        {
          name: 'Sarah Chen',
          role: 'Manager',
          groupDecision: gd,
          reviewerDecided: decided,
          decidedAtDisplay: partial.decidedAtDisplay ?? null,
          justification: partial.justification ?? null,
        },
      ];
    return {
      groupName: partial.groupName,
      groupDecision: gd,
      reviewerDecided: decided,
      approvers,
    };
  };

  /** Two-group demo: Lisa — all decided approve; first group shows two approvers as an example. */
  const detailsLisa: CampaignReviewGroupExpansion[] =
    groupsTotal === 1
      ? [
          baseGroupCard({
            groupName: groupLabelPrimary,
            groupDecision: 'keep',
            reviewerDecided: true,
            decidedAtDisplay: 'Jan 18, 2025',
            justification: 'Ongoing access aligns with current role responsibilities.',
          }),
        ]
      : [
          {
            groupName: groupLabelPrimary,
            groupDecision: 'keep',
            reviewerDecided: true,
            approvers: [
              {
                name: 'Sarah Chen',
                role: 'Manager',
                groupDecision: 'keep',
                reviewerDecided: true,
                decidedAtDisplay: 'Jan 18, 2025',
                justification: 'Confirmed need for reporting tools in this team.',
              },
              {
                name: 'Tom Wilson',
                role: 'Resource owner',
                groupDecision: 'keep',
                reviewerDecided: true,
                decidedAtDisplay: 'Jan 19, 2025',
                justification: 'Validated with Finance leadership.',
              },
            ],
          },
          baseGroupCard({
            groupName: groupLabelSecondary,
            groupDecision: 'keep',
            reviewerDecided: true,
            decidedAtDisplay: 'Jan 18, 2025',
            justification: 'CRM access still required for customer pipeline.',
          }),
        ];

  const detailsMaria: CampaignReviewGroupExpansion[] =
    groupsTotal === 1
      ? [
          baseGroupCard({
            groupName: groupLabelPrimary,
            groupDecision: 'revoke',
            reviewerDecided: true,
            decidedAtDisplay: 'Jan 17, 2025',
            justification: 'Role change — access no longer required.',
          }),
        ]
      : [
          baseGroupCard({
            groupName: groupLabelPrimary,
            groupDecision: 'revoke',
            reviewerDecided: true,
            decidedAtDisplay: 'Jan 17, 2025',
            justification: 'Moved to a team without this application.',
          }),
          baseGroupCard({
            groupName: groupLabelSecondary,
            groupDecision: 'revoke',
            reviewerDecided: true,
            decidedAtDisplay: 'Jan 17, 2025',
            justification: 'Duplicate access via another group.',
          }),
        ];

  /** Amanda — first group decided approve; second still in review (matches hero mock). */
  const detailsAmanda: CampaignReviewGroupExpansion[] =
    groupsTotal === 1
      ? [
          baseGroupCard({
            groupName: groupLabelPrimary,
            groupDecision: 'pending',
            reviewerDecided: false,
          }),
        ]
      : [
          baseGroupCard({
            groupName: groupLabelPrimary,
            groupDecision: 'keep',
            reviewerDecided: true,
            decidedAtDisplay: 'Jan 20, 2025',
            justification: 'Revenue reporting requires Finance Team membership.',
          }),
          baseGroupCard({
            groupName: groupLabelSecondary,
            groupDecision: 'pending',
            reviewerDecided: false,
          }),
        ];

  const detailsDerek: CampaignReviewGroupExpansion[] =
    groupsTotal === 1
      ? [
          baseGroupCard({
            groupName: groupLabelPrimary,
            groupDecision: 'pending',
            reviewerDecided: false,
          }),
        ]
      : [
          baseGroupCard({
            groupName: groupLabelPrimary,
            groupDecision: 'pending',
            reviewerDecided: false,
          }),
          baseGroupCard({
            groupName: groupLabelSecondary,
            groupDecision: 'pending',
            reviewerDecided: false,
          }),
        ];

  const rows: CampaignReviewUserRow[] = [
    {
      id: `${campaign.id}_ru_1`,
      name: 'Lisa Nguyen',
      email: 'lisa.nguyen@company.com',
      department: dept,
      groupsInReviewCount: groupsTotal,
      decision: 'keep',
      groupsDecided: groupsTotal,
      groupsTotal,
      decidedAtDisplay: 'Jan 18, 2025',
      expandedMeta: meta,
      groupDetails: detailsLisa,
    },
    {
      id: `${campaign.id}_ru_2`,
      name: 'Maria Santos',
      email: 'maria.santos@company.com',
      department: dept,
      groupsInReviewCount: groupsTotal,
      decision: 'revoke',
      groupsDecided: groupsTotal,
      groupsTotal,
      decidedAtDisplay: 'Jan 17, 2025',
      expandedMeta: meta,
      groupDetails: detailsMaria,
    },
    {
      id: `${campaign.id}_ru_3`,
      name: 'Amanda Foster',
      email: 'amanda.foster@company.com',
      department: dept,
      groupsInReviewCount: groupsTotal,
      decision: 'pending',
      groupsDecided: groupsTotal > 1 ? 1 : 0,
      groupsTotal,
      decidedAtDisplay: null,
      expandedMeta: meta,
      groupDetails: detailsAmanda,
    },
    {
      id: `${campaign.id}_ru_4`,
      name: 'Derek Chang',
      email: 'derek.chang@company.com',
      department: dept,
      groupsInReviewCount: groupsTotal,
      decision: 'pending',
      groupsDecided: 0,
      groupsTotal,
      decidedAtDisplay: null,
      expandedMeta: meta,
      groupDetails: detailsDerek,
    },
  ];

  if (campaign.status === 'scheduled') {
    return applyScheduledPendingToUserRows(rows);
  }
  if (campaign.status === 'completed') {
    return applyCompletedResolvedToUserRows(rows, campaign);
  }
  return rows;
}

export const seedDiEvents: DirectoryInsightsAccessReviewEvent[] = [
  diEvent({
    category: 'access_review.campaign_created',
    actor: { type: 'admin', id: 'admin_1', display_name: 'Admin IT' },
    resource: { type: 'campaign', id: 'camp_finance_sf', name: 'Salesforce access — Finance' },
    payload: { scope_type: 'application', application: 'Salesforce' },
  }),
  diEvent({
    category: 'access_review.campaign_created',
    actor: { type: 'admin', id: 'admin_1', display_name: 'Admin IT' },
    resource: { type: 'campaign', id: 'camp_contractors', name: 'Contractors group membership' },
    payload: { scope_type: 'group', group: 'Contractors' },
  }),
  diEvent({
    category: 'access_review.notification_sent',
    actor: { type: 'system', id: 'system', display_name: 'Access Reviews' },
    resource: { type: 'campaign', id: 'camp_finance_sf', name: 'Salesforce access — Finance' },
    payload: { channel: 'email', template: 'campaign_start' },
  }),
  diEvent({
    category: 'access_review.reviewer_decision',
    actor: { type: 'reviewer', id: 'mgr_1', display_name: 'Tom Wilson' },
    resource: { type: 'user', id: 'user_1', name: 'Sarah Chen' },
    payload: { campaign_id: 'camp_finance_sf', decision: 'keep', stage: 'owner' },
  }),
  diEvent({
    category: 'access_review.campaign_created',
    actor: { type: 'admin', id: 'admin_1', display_name: 'Admin IT' },
    resource: { type: 'campaign', id: 'camp_jira_not_started', name: 'Jira — Product & Design (not started)' },
    payload: { scope_type: 'application', status: 'scheduled' },
  }),
  diEvent({
    category: 'access_review.campaign_ended',
    actor: { type: 'system', id: 'system', display_name: 'Access Reviews' },
    resource: { type: 'campaign', id: 'camp_slack_completed', name: 'Slack — Org-wide access' },
    payload: { outcome: 'completed' },
  }),
  diEvent({
    category: 'access_review.remediation_executed',
    actor: { type: 'system', id: 'system', display_name: 'Access Reviews' },
    resource: { type: 'campaign', id: 'camp_slack_completed', name: 'Slack — Org-wide access' },
    payload: { removed_app: 14 },
  }),
  diEvent({
    category: 'access_review.campaign_created',
    actor: { type: 'admin', id: 'admin_1', display_name: 'Admin IT' },
    resource: { type: 'campaign', id: 'camp_gdrive_pending_revoke', name: 'Google Drive — Marketing cleanup' },
    payload: { scope_type: 'application', application: 'Google Drive' },
  }),
  diEvent({
    category: 'access_review.campaign_ended',
    actor: { type: 'system', id: 'system', display_name: 'Access Reviews' },
    resource: { type: 'campaign', id: 'camp_gdrive_pending_revoke', name: 'Google Drive — Marketing cleanup' },
    payload: { outcome: 'completed', remediation_pending: true },
  }),
];

export const seedReviewQueue: ReviewQueueItem[] = [
  {
    id: 'rq_1',
    campaignId: 'camp_finance_sf',
    campaignName: 'Salesforce access — Finance',
    scopeType: 'application',
    subjectUser: {
      id: 'u1',
      name: 'Sarah Chen',
      email: 'sarah.chen@acme.com',
      title: 'Account Executive',
      department: 'Finance',
    },
    applicationName: 'Salesforce',
    accessGraph: [
      { from: 'Sarah Chen', to: 'Finance Team', relationship: 'member_of' },
      { from: 'Finance Team', to: 'Salesforce', relationship: 'grants_sso' },
    ],
    status: 'pending',
    decision: null,
    justification: '',
    stageIndex: 0,
    stageLabel: 'Manager review',
  },
  {
    id: 'rq_2',
    campaignId: 'camp_finance_sf',
    campaignName: 'Salesforce access — Finance',
    scopeType: 'application',
    subjectUser: {
      id: 'u2',
      name: 'James Kim',
      email: 'james.k@acme.com',
      title: 'Financial Analyst',
      department: 'Finance',
    },
    applicationName: 'Salesforce',
    accessGraph: [
      { from: 'James Kim', to: 'All Employees', relationship: 'member_of' },
      { from: 'All Employees', to: 'Salesforce', relationship: 'grants_sso' },
    ],
    status: 'overdue',
    decision: null,
    justification: '',
    stageIndex: 0,
    stageLabel: 'Manager review',
  },
  {
    id: 'rq_3',
    campaignId: 'camp_contractors',
    campaignName: 'Contractors group membership',
    scopeType: 'group',
    subjectUser: {
      id: 'u3',
      name: 'Alex Rivera',
      email: 'alex.r@contractor.com',
      title: 'Security Consultant',
      department: 'External',
    },
    groupName: 'Contractors',
    accessGraph: [{ from: 'Alex Rivera', to: 'Contractors', relationship: 'direct_member' }],
    status: 'pending',
    decision: null,
    justification: '',
    stageIndex: 0,
    stageLabel: 'Group owner review',
  },
  {
    id: 'rq_4',
    campaignId: 'camp_contractors',
    campaignName: 'Contractors group membership',
    scopeType: 'group',
    subjectUser: {
      id: 'u4',
      name: 'Jordan Lee',
      email: 'jordan.l@contractor.com',
      title: 'Developer',
      department: 'External',
    },
    groupName: 'Contractors',
    accessGraph: [
      { from: 'Jordan Lee', to: 'Dev Contractors', relationship: 'member_of' },
      { from: 'Dev Contractors', to: 'Contractors', relationship: 'nested_group' },
    ],
    status: 'complete',
    decision: 'revoke',
    justification: 'Project ended last month.',
    stageIndex: 0,
    stageLabel: 'Group owner review',
  },
];
