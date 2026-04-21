/** Milestone 1 Access Reviews — shared types (playground). */

export type CampaignStatus = 'in_progress' | 'completed' | 'scheduled';

/** Campaign list filter key passed to `AccessReviewsCampaignHub` (playground). */
export const ACCESS_REVIEWS_CAMPAIGN_HUB_TABS = [
  'all',
  'active',
  'overdue',
  'pending_remediation',
  'completed',
] as const;

export type AccessReviewsCampaignHubTab = (typeof ACCESS_REVIEWS_CAMPAIGN_HUB_TABS)[number];

/** Top-level admin campaign tabs (playground). */
export const ACCESS_REVIEWS_ADMIN_TOP_TABS = ['all', 'active', 'completed', 'templates'] as const;

export type AccessReviewsAdminTopTab = (typeof ACCESS_REVIEWS_ADMIN_TOP_TABS)[number];

/** Sub-tabs under the Active top-level tab. */
export const ACCESS_REVIEWS_ACTIVE_SUB_TABS = ['active', 'pending_remediation', 'overdue'] as const;

export type AccessReviewsActiveSubTab = (typeof ACCESS_REVIEWS_ACTIVE_SUB_TABS)[number];

export type ScopeType = 'application' | 'group';

export type ScheduleMode = 'one_time' | 'recurring';

export type RecurrenceCadence = 'monthly' | 'quarterly' | 'semi_annual' | 'annual';

export type ReminderFrequency = 'daily' | 'weekly';

/** When Slack is enabled: notify approvers via DM or post to a designated channel. */
export type SlackReviewerNotificationMode = 'direct_message' | 'channel';

/** Who completes the review (approver type). */
export type ReviewerAssignment =
  | 'administrator'
  | 'users_manager'
  | 'resource_owner'
  | 'user_group';

export const reviewerAssignmentLabels: Record<ReviewerAssignment, string> = {
  administrator: 'Administrator',
  users_manager: 'Users Manager',
  resource_owner: 'Resource Owner',
  user_group: 'User Group',
};

/** One approver row from campaign configuration (type + admin-entered path or target). */
export interface CampaignApproverSpecification {
  assignment: ReviewerAssignment;
  spec: string;
  /**
   * When `assignment` is `users_manager`: directory user selected as reviewer when a user has no manager attribute.
   * Playground stores the select option value (stable id).
   */
  managerFallbackApprover?: string;
}

export type CompletionCriteria = 'any' | 'all' | 'sequential';

export type RevocationMode = 'scheduled' | 'automatic';

export const remediationModeLabels: Record<RevocationMode, string> = {
  scheduled: 'Scheduled',
  automatic: 'Automatic',
};

/** When batch remediation runs relative to campaign completion (playground). */
export type RevocationTimingMode = 'campaign_end' | 'scheduled';

/** When access marked revoke is remediated relative to review cycle close (wizard). */
export type RemediationTimelineOption =
  | 'immediate_after_review'
  | 'delay_1d_after_close'
  | 'delay_3d_after_close'
  | 'delay_5d_after_close'
  | 'delay_10d_after_close'
  | 'custom_after_close';

export const remediationTimelineOptionOrder: RemediationTimelineOption[] = [
  'immediate_after_review',
  'delay_1d_after_close',
  'delay_3d_after_close',
  'delay_5d_after_close',
  'delay_10d_after_close',
  'custom_after_close',
];

/** Short labels for timeline radios (full line shown as description in wizard). */
export const remediationTimelineRadioLabels: Record<RemediationTimelineOption, string> = {
  immediate_after_review: 'Immediately after the reviewer submits the review (before review ends)',
  delay_1d_after_close: '1 day after review closes',
  delay_3d_after_close: '3 days after review closes',
  delay_5d_after_close: '5 days after review closes',
  delay_10d_after_close: '10 days after review closes',
  custom_after_close: 'Custom date',
};

/** Per user group: action when reviewer revokes access. */
export type RevokeGroupAction = 'automatic_removal' | 'manual_review_queue' | 'create_ticket_only';

/** Per user group: action when there is no reviewer response. */
export type NoResponseGroupAction = 'no_action' | 'automatic_removal' | 'escalate_to_owner';

export const revokeGroupActionLabels: Record<RevokeGroupAction, string> = {
  automatic_removal: 'Automatic removal',
  manual_review_queue: 'Manual review queue',
  create_ticket_only: 'Create ticket only',
};

export const noResponseGroupActionLabels: Record<NoResponseGroupAction, string> = {
  no_action: 'No action',
  automatic_removal: 'Automatic removal',
  escalate_to_owner: 'Escalate to owner',
};

export const REVOKE_GROUP_ACTION_VALUES: RevokeGroupAction[] = [
  'automatic_removal',
  'manual_review_queue',
  'create_ticket_only',
];

export const NO_RESPONSE_GROUP_ACTION_VALUES: NoResponseGroupAction[] = [
  'no_action',
  'automatic_removal',
  'escalate_to_owner',
];

/** Scope wizard: one line under Applications / Directories / Vault in the group resources panel (playground). */
export interface CampaignScopeAssignedResourceLine {
  id: string;
  label: string;
  /** Two-letter placeholder for the logo tile */
  abbreviation: string;
}

/** Scope wizard: nested content when expanding a selected user group row. */
export interface CampaignScopeGroupExpansionSections {
  applications: CampaignScopeAssignedResourceLine[];
  directories: CampaignScopeAssignedResourceLine[];
  vault: CampaignScopeAssignedResourceLine[];
}

/** Scope wizard: DataTable row for selected user groups and linked resource counts. */
export interface CampaignScopeGroupTableRow {
  id: string;
  groupName: string;
  userGroupType: 'dynamic' | 'static';
  usersCount: number;
  otherResourcesCount: number;
  assigned: CampaignScopeGroupExpansionSections;
}

/** Per–user-group remediation policy row (application scope groups or single group scope). */
export interface CampaignRemediationGroupSetting {
  groupName: string;
  userGroupType: 'dynamic' | 'static';
  /** Playground display count */
  usersInGroupCount: number;
  /** Playground: number of linked resources for “Other resources” */
  otherResourcesCount: number;
  revokeAction: RevokeGroupAction;
  noResponseAction: NoResponseGroupAction;
}

/** Shown when multiple approvers exist; configured at campaign create or edit. */
export const completionCriteriaLabels: Record<CompletionCriteria, string> = {
  all: 'All reviewers must approve',
  any: 'At least one must approve',
  sequential: 'All approvers must approve sequentially',
};

export interface AttributeFilterRow {
  attribute: string;
  operator: 'equals' | 'contains';
  value: string;
}

export interface CampaignReviewerSummary {
  name: string;
  role: string;
  completed: number;
  total: number;
}

/** Reviewer decision counts after a campaign completes (hub expansion summary). */
export interface CampaignReviewResultsBreakdown {
  kept: number;
  revoked: number;
  delegated: number;
  pending: number;
}

export interface AccessReviewCampaign {
  id: string;
  name: string;
  status: CampaignStatus;
  scopeType: ScopeType;
  /** Human-readable scope, e.g. "Salesforce · department = Finance" */
  scopeSummary: string;
  applicationName?: string;
  /** When `scopeType` is `application`, user groups with app access that are included in this review. */
  applicationIncludedGroups?: string[];
  groupName?: string;
  attributeFilters: AttributeFilterRow[];
  startDate: string;
  dueDate: string;
  /** Inclusive calendar-day length of the review window (mirrors start/due when set). */
  campaignDurationDays?: number;
  scheduleMode: ScheduleMode;
  cadence?: RecurrenceCadence;
  /** Display string for next occurrence when recurring */
  nextRunDisplay?: string;
  reminderFrequency: ReminderFrequency;
  emailNotificationsEnabled: boolean;
  /** Slack notifications (alongside email when both enabled). */
  slackNotificationsEnabled?: boolean;
  /** Meaningful when Slack is enabled. */
  slackReviewerNotificationMode?: SlackReviewerNotificationMode;
  /** When mode is `channel`, selected Slack channel ID from the workspace directory (playground mock list). */
  slackChannelId?: string;
  /** Display label for the selected channel (e.g. `#access-reviews`); optional legacy free-text when `slackChannelId` is absent. */
  slackChannelDesignation?: string;
  reviewerAssignment: ReviewerAssignment;
  /** Configured approver targets when set in the create flow (one entry per row). */
  approverSpecifications?: CampaignApproverSpecification[];
  completionCriteria: CompletionCriteria;
  mandatoryJustification: boolean;
  /** Remediation execution mode: automatic or scheduled. */
  revocationMode: RevocationMode;
  /** When the remediation batch runs: at campaign end or at a scheduled instant. */
  revocationTimingMode: RevocationTimingMode;
  /** When `revocationTimingMode` is `scheduled`, ISO 8601 time for the remediation batch. */
  revocationScheduledAtIso?: string;
  /** Preferred remediation schedule (wizard); legacy campaigns may omit. */
  remediationTimeline?: RemediationTimelineOption;
  /** When `remediationTimeline` is `custom_after_close`, instant for remediation (ISO). */
  remediationCustomAfterCloseAtIso?: string;
  /** Per user group revoke / no-response actions. */
  remediationPerGroupSettings?: CampaignRemediationGroupSetting[];
  endOfCampaignRevocation: boolean;
  completionPercent: number;
  /** Hub pending-remediation table: derived total users in scope (for sort/display). */
  usersInScopeTotal?: number;
  reviewers: CampaignReviewerSummary[];
  /** When the review phase finished (ISO). Optional; used in hub expansion for pending-remediation state. */
  approvalCompletedAtIso?: string;
  /** Present when status is completed — counts for expansion results breakdown. */
  reviewResultsBreakdown?: CampaignReviewResultsBreakdown;
  /** Populated when campaign ends — mock remediation engine */
  revocationSummary?: {
    usersRemovedFromApp: number;
    usersRemovedFromGroups: number;
    completedAt: string;
  };
  /**
   * Users in scope for this campaign (in-app review list). When omitted, the UI derives playground rows.
   */
  reviewUserRows?: CampaignReviewUserRow[];
}

/** Pending Remediation hub: revocation mode shown as a badge (“Manual” vs “Scheduled”). */
export type PendingRemediationRevocationStatus = 'Manual' | 'Scheduled';

/** Aggregate decision for a user across in-scope groups (campaign detail table). */
export type CampaignUserRowDecision = 'keep' | 'revoke' | 'pending';

/** Per-group decision in the expanded row (reviewer vs admin view). */
export type GroupReviewDecisionState = 'keep' | 'revoke' | 'pending';

export interface CampaignReviewUserExpandedMeta {
  managerName: string;
  department: string;
  lastAccessedDisplay: string;
  accessGrantedDisplay: string;
}

/** One approver row inside a group card (there may be several per group). */
export interface CampaignReviewGroupApproverRow {
  name: string;
  role: string;
  groupDecision: GroupReviewDecisionState;
  reviewerDecided: boolean;
  decidedAtDisplay: string | null;
  justification: string | null;
}

/** One group’s access review block inside an expanded user row. */
export interface CampaignReviewGroupExpansion {
  groupName: string;
  /** Summary for the group header (tags / admin actions). */
  groupDecision: GroupReviewDecisionState;
  reviewerDecided: boolean;
  approvers: CampaignReviewGroupApproverRow[];
}

export interface CampaignReviewUserRow {
  id: string;
  name: string;
  email: string;
  department: string;
  /** How many directory groups are in scope for this user in this campaign. */
  groupsInReviewCount: number;
  decision: CampaignUserRowDecision;
  groupsDecided: number;
  groupsTotal: number;
  /** e.g. "Jan 18, 2025", or null while pending overall. */
  decidedAtDisplay: string | null;
  /** Directory context shown above “Access review by group” (playground; optional for legacy rows). */
  expandedMeta?: CampaignReviewUserExpandedMeta;
  /** Expanded row: per-group review cards. */
  groupDetails: CampaignReviewGroupExpansion[];
}

/** Directory Insights–compatible mock event (subset of real DI envelope). */
export type DiEventCategory =
  | 'access_review.campaign_created'
  | 'access_review.campaign_ended'
  | 'access_review.reviewer_decision'
  | 'access_review.remediation_executed'
  | 'access_review.notification_sent';

export interface DirectoryInsightsAccessReviewEvent {
  event_id: string;
  timestamp_iso: string;
  category: DiEventCategory;
  org_id: string;
  actor: { type: 'admin' | 'system' | 'reviewer'; id: string; display_name: string };
  resource: { type: 'campaign' | 'user' | 'application' | 'user_group'; id: string; name?: string };
  payload: Record<string, string | number | boolean | null>;
}

export interface GlobalAccessReviewSettings {
  featureEnabled: boolean;
  emailOnCampaignStart: boolean;
  emailOnDueReminder: boolean;
  emailOnCampaignComplete: boolean;
}

export type ReviewItemStatus = 'pending' | 'complete' | 'overdue';

export type ReviewDecision = 'keep' | 'revoke' | null;

export interface ReviewSubjectUser {
  id: string;
  name: string;
  email: string;
  title: string;
  department: string;
}

/** Simplified access path for UI graph */
export interface AccessGraphEdge {
  from: string;
  to: string;
  relationship: string;
}

export interface ReviewQueueItem {
  id: string;
  campaignId: string;
  campaignName: string;
  scopeType: ScopeType;
  subjectUser: ReviewSubjectUser;
  applicationName?: string;
  groupName?: string;
  accessGraph: AccessGraphEdge[];
  status: ReviewItemStatus;
  decision: ReviewDecision;
  justification: string;
  /** For sequential completion criteria — stage 0 = first reviewer */
  stageIndex: number;
  stageLabel: string;
}
