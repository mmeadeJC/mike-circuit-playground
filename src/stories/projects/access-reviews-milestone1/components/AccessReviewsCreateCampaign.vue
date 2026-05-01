<script setup lang="ts">
import { computed, inject, markRaw, nextTick, ref, watch } from 'vue';
import {
  CheckboxWithLabel,
  CollapsiblePanel,
  FormField,
  MessageNotification,
  RadioButtonWithLabel,
  Stepper,
  ToggleSwitch,
} from '@jumpcloud/circuit/components';
import type { StepDefinition } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import InputText from 'primevue/inputtext';
import Tag from 'primevue/tag';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import {
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import {
  NO_RESPONSE_GROUP_ACTION_VALUES,
  REVOKE_GROUP_ACTION_VALUES,
  completionCriteriaLabels,
  noResponseGroupActionLabels,
  remediationTimelineOptionOrder,
  remediationTimelineRadioLabels,
  reviewerAssignmentLabels,
  revokeGroupActionLabels,
  type AccessReviewCampaign,
  type CampaignRemediationGroupSetting,
  type CampaignScopeGroupTableRow,
  type CampaignReviewerSummary,
  type CompletionCriteria,
  type RecurrenceCadence,
  type RemediationTimelineOption,
  type ReminderFrequency,
  type RevocationTimingMode,
  type ReviewerAssignment,
  type ScheduleMode,
  type ScopeType,
  type SlackReviewerNotificationMode,
} from '../types';
import type { AccessReviewM1Store } from '../accessReviewM1Store';
import { ACCESS_REVIEW_M1_STORE_KEY } from '../accessReviewM1Store';
import {
  MOCK_APPLICATION_SELECT_OPTIONS,
  MOCK_FALLBACK_APPROVER_OPTIONS,
  MOCK_SLACK_CHANNEL_SELECT_OPTIONS,
  MOCK_USER_GROUP_SELECT_OPTIONS,
  buildCampaignScopeGroupTableRows,
  mockApplicationAccessGroupsForApp,
  mockOtherResourcesCountForGroup,
  mockUserCountForGroupName,
} from '../mockData';
import CampaignScopeSelectedGroupsTable from './CampaignScopeSelectedGroupsTable.vue';
import {
  dueYmdFromStartAndDuration,
  inclusiveDurationDays,
  parseYmdLocal,
  todayYmd,
} from '../campaignDateUtils';

defineOptions({ name: 'AccessReviewsCreateCampaign' });

const props = withDefaults(
  defineProps<{
    initialCampaign?: AccessReviewCampaign | null;
    /** When editing, which Stepper step to open (Scope / Schedule & reminders / Reviewers & policy). */
    initialWizardStep?: '1' | '2' | '3';
  }>(),
  { initialCampaign: null, initialWizardStep: undefined },
);

const emit = defineEmits<{
  done: [];
  cancel: [];
}>();

const store = inject(ACCESS_REVIEW_M1_STORE_KEY) as AccessReviewM1Store;

/** When set, save updates this id instead of adding a new campaign. */
const editingCampaignId = ref<string | null>(null);
const isHydratingCampaign = ref(false);

const activeStep = ref('1');

const campaignName = ref('');
const scopeType = ref<ScopeType>('application');
const applicationName = ref('Salesforce');
const groupName = ref('Contractors');

const scheduleMode = ref<ScheduleMode>('one_time');
/** First calendar day of the review window (set from today for new campaigns; preserved when editing). */
const campaignStartDate = ref(todayYmd());
/** Inclusive calendar-day length of the review window. */
const campaignDurationDays = ref(30);

const campaignDurationPresets = [7, 14, 21, 30, 45, 60, 90] as const;

const durationSelectOptions = computed(() => {
  const d = campaignDurationDays.value;
  const set = new Set<number>([...campaignDurationPresets]);
  if (Number.isFinite(d) && d >= 1) set.add(Math.floor(d));
  return [...set]
    .sort((a, b) => a - b)
    .map((n) => ({ label: `${n} days`, value: n }));
});

const effectiveDueDate = computed(() =>
  dueYmdFromStartAndDuration(campaignStartDate.value, campaignDurationDays.value),
);

const cadence = ref<RecurrenceCadence>('quarterly');

const reminderFrequency = ref<ReminderFrequency>('weekly');
const emailNotificationsEnabled = ref(true);
const slackNotificationsEnabled = ref(false);
const slackReviewerNotificationMode = ref<SlackReviewerNotificationMode>('direct_message');
/** Selected Slack channel ID when posting to a channel (from workspace mock list). */
const slackChannelId = ref('');

watch(slackReviewerNotificationMode, (m) => {
  if (m !== 'channel') slackChannelId.value = '';
});

type ApproverRow = {
  assignment: ReviewerAssignment | null;
  spec: string;
  /** When `assignment` is `users_manager`, selected fallback reviewer (directory user id). */
  managerFallbackApprover: string;
};

const ADMINISTRATOR_APPROVER_SPEC =
  'Settings > Administrators > Administrator with Billing & Administrator';

const approverRows = ref<ApproverRow[]>([
  { assignment: 'administrator', spec: ADMINISTRATOR_APPROVER_SPEC, managerFallbackApprover: '' },
]);

const MAX_APPROVER_ROWS = 3;

const approverTypeSelectOptions: { label: string; value: ReviewerAssignment }[] = [
  { value: 'administrator', label: reviewerAssignmentLabels.administrator },
  { value: 'users_manager', label: reviewerAssignmentLabels.users_manager },
  { value: 'resource_owner', label: reviewerAssignmentLabels.resource_owner },
  { value: 'user_group', label: reviewerAssignmentLabels.user_group },
];

/**
 * Administrator approvers are a separate flow: one row only, JumpCloud admins as approvers.
 * With multiple approver rows, Administrator cannot be selected until only one row remains.
 */
const isAdminOnlyApproverFlow = computed(() =>
  approverRows.value.some((r) => r.assignment === 'administrator'),
);

function approverTypeOptionsForRow(rowIndex: number): { label: string; value: ReviewerAssignment }[] {
  const rows = approverRows.value;
  const allowAdministratorOption = rows.length === 1;
  let opts = approverTypeSelectOptions;
  if (!allowAdministratorOption) {
    opts = opts.filter((o) => o.value !== 'administrator');
  }
  const usedElsewhere = new Set(
    rows
      .map((r, i) => (i !== rowIndex && r.assignment != null ? r.assignment : null))
      .filter((v): v is ReviewerAssignment => v != null),
  );
  const current = rows[rowIndex]?.assignment;
  return opts.filter((o) => o.value === current || !usedElsewhere.has(o.value));
}

function approverFieldPlaceholder(assignment: ReviewerAssignment): string {
  switch (assignment) {
    case 'users_manager':
      return 'User > Employment Info > Manager Attribute';
    case 'resource_owner':
      return 'e.g. Application or resource owner';
    case 'user_group':
      return 'e.g. Group Name';
    case 'administrator':
      return '';
  }
}

function reviewersForApproverType(assignment: ReviewerAssignment): CampaignReviewerSummary[] {
  switch (assignment) {
    case 'administrator':
      return [{ name: 'JumpCloud administrators', role: 'Administrator', completed: 0, total: 1 }];
    case 'users_manager':
      return [{ name: 'Managers (per user)', role: 'Manager', completed: 0, total: 1 }];
    case 'resource_owner':
      return [{ name: 'Resource owner', role: 'Resource Owner', completed: 0, total: 1 }];
    case 'user_group':
      return [{ name: 'Designated user group', role: 'User Group', completed: 0, total: 1 }];
  }
}

function defaultReviewerName(assignment: ReviewerAssignment): string {
  switch (assignment) {
    case 'administrator':
      return 'JumpCloud administrators';
    case 'users_manager':
      return 'Managers (per user)';
    case 'resource_owner':
      return 'Resource owner';
    case 'user_group':
      return 'Designated user group';
  }
}

function rowsWithAssignment(rows: ApproverRow[]): ApproverRow[] {
  return rows.filter((r): r is ApproverRow & { assignment: ReviewerAssignment } => r.assignment != null);
}

function buildReviewersFromApproverRows(rows: ApproverRow[]): CampaignReviewerSummary[] {
  const configured = rowsWithAssignment(rows);
  if (configured.length === 0) {
    return reviewersForApproverType('administrator');
  }
  return configured.map((r) => ({
    name: r.spec.trim() || defaultReviewerName(r.assignment),
    role: reviewerAssignmentLabels[r.assignment],
    completed: 0,
    total: 1,
  }));
}

function primaryReviewerAssignment(rows: ApproverRow[]): ReviewerAssignment {
  const configured = rowsWithAssignment(rows);
  return configured[0]?.assignment ?? 'administrator';
}

function normalizeApproverRowsForUi(rows: ApproverRow[]): ApproverRow[] {
  if (rows.some((r) => r.assignment === 'administrator')) {
    const ar = rows.find((r) => r.assignment === 'administrator')!;
    const spec = ar.spec.trim();
    return [
      {
        assignment: 'administrator',
        spec: spec || ADMINISTRATOR_APPROVER_SPEC,
        managerFallbackApprover: '',
      },
    ];
  }
  return rows.length > 0
    ? rows
    : [{ assignment: 'administrator', spec: ADMINISTRATOR_APPROVER_SPEC, managerFallbackApprover: '' }];
}

function addApproverRow() {
  if (isAdminOnlyApproverFlow.value) return;
  if (approverRows.value.length >= MAX_APPROVER_ROWS) return;
  approverRows.value.push({ assignment: null, spec: '', managerFallbackApprover: '' });
}

function removeApproverRow(idx: number) {
  if (approverRows.value.length <= 1) return;
  approverRows.value.splice(idx, 1);
}

function setApproverRowType(
  row: ApproverRow,
  rowIndex: number,
  value: ReviewerAssignment | null | undefined,
) {
  const next = value ?? null;
  if (next === 'administrator') {
    approverRows.value = [
      { assignment: 'administrator', spec: ADMINISTRATOR_APPROVER_SPEC, managerFallbackApprover: '' },
    ];
    return;
  }
  if (next != null) {
    const takenElsewhere = approverRows.value.some(
      (r, i) => i !== rowIndex && r.assignment === next,
    );
    if (takenElsewhere) return;
  }
  if (row.assignment !== next) {
    row.spec = '';
    row.managerFallbackApprover = '';
  }
  row.assignment = next;
}
const completionCriteria = ref<CompletionCriteria>('all');
const mandatoryJustification = ref(true);

const remediationSectionCollapsed = ref(false);
const remediationTimeline = ref<RemediationTimelineOption>('delay_3d_after_close');
/** `datetime-local` when timeline is custom (measured from when the review cycle closes). */
const remediationCustomLocal = ref('');

const remediationGroupRows = ref<CampaignRemediationGroupSetting[]>([]);

watch([remediationTimeline, effectiveDueDate], () => {
  if (remediationTimeline.value === 'custom_after_close' && !remediationCustomLocal.value.trim()) {
    remediationCustomLocal.value = `${effectiveDueDate.value}T17:00`;
  }
});

function remediationCustomLocalValid(): boolean {
  if (remediationTimeline.value !== 'custom_after_close') return true;
  const v = remediationCustomLocal.value?.trim();
  if (!v) return false;
  const d = new Date(v);
  return !Number.isNaN(d.getTime());
}

function createDefaultRemediationGroupRow(name: string, isDynamic: boolean): CampaignRemediationGroupSetting {
  return {
    groupName: name,
    userGroupType: isDynamic ? 'dynamic' : 'static',
    usersInGroupCount: mockUserCountForGroupName(name),
    otherResourcesCount: mockOtherResourcesCountForGroup(name),
    revokeAction: 'automatic_removal',
    noResponseAction: 'no_action',
  };
}

/** PrimeVue MultiSelect may bind primitive values or full option objects depending on config; normalize to group name strings. */
function coerceApplicationGroupSelection(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const out: string[] = [];
  for (const item of raw) {
    if (typeof item === 'string' && item.trim()) {
      out.push(item.trim());
    } else if (
      item &&
      typeof item === 'object' &&
      'value' in item &&
      typeof (item as { value: unknown }).value === 'string' &&
      (item as { value: string }).value.trim()
    ) {
      out.push((item as { value: string }).value.trim());
    }
  }
  return out;
}

function syncRemediationGroupRowsFromScope() {
  const existingByName = new Map(remediationGroupRows.value.map((r) => [r.groupName, r]));
  if (scopeType.value === 'application') {
    const groupNames = coerceApplicationGroupSelection(selectedApplicationGroups.value);
    remediationGroupRows.value = groupNames.map((name) => {
      const prev = existingByName.get(name);
      const meta = mockApplicationAccessGroupsForApp(applicationName.value).find((g) => g.name === name);
      const isDynamic = meta?.isDynamic ?? false;
      if (prev) {
        return {
          ...prev,
          userGroupType: isDynamic ? 'dynamic' : 'static',
          usersInGroupCount: prev.usersInGroupCount || mockUserCountForGroupName(name),
          otherResourcesCount: prev.otherResourcesCount ?? mockOtherResourcesCountForGroup(name),
        };
      }
      return createDefaultRemediationGroupRow(name, isDynamic);
    });
  } else {
    const gn = groupName.value.trim() || 'User group';
    const prev = existingByName.get(gn);
    remediationGroupRows.value = [
      prev
        ? { ...prev, groupName: gn, userGroupType: 'static' }
        : createDefaultRemediationGroupRow(gn, false),
    ];
  }
}

const revokeGroupSelectOptions = computed(() =>
  REVOKE_GROUP_ACTION_VALUES.map((value) => ({
    label: revokeGroupActionLabels[value],
    value,
  })),
);

const noResponseGroupSelectOptions = computed(() =>
  NO_RESPONSE_GROUP_ACTION_VALUES.map((value) => ({
    label: noResponseGroupActionLabels[value],
    value,
  })),
);

function userGroupTypeLabel(t: 'dynamic' | 'static'): string {
  return t === 'dynamic' ? 'Dynamic' : 'Static';
}

const hasMultipleConfiguredApprovers = computed(
  () => rowsWithAssignment(approverRows.value).length > 1,
);

const applicationOptions = MOCK_APPLICATION_SELECT_OPTIONS;

const selectedApplicationGroups = ref<string[]>([]);

const selectedApplicationGroupNames = computed(() =>
  coerceApplicationGroupSelection(selectedApplicationGroups.value),
);

/** Directory groups with access to the selected application (rows in the scope table). */
const applicationGroupSelectOptions = computed(() => {
  const rows = mockApplicationAccessGroupsForApp(applicationName.value);
  return rows.map((g) => ({
    label: g.name,
    value: g.name,
    isDynamic: g.isDynamic,
  }));
});

/** Application scope: show table listing every group with app access (selection via checkboxes). */
const showApplicationGroupsTable = computed(
  () => scopeType.value === 'application' && applicationGroupSelectOptions.value.length > 0,
);

/** Group membership scope: preview table for the chosen directory group. */
const showGroupMembershipTable = computed(
  () => scopeType.value === 'group' && groupName.value.trim().length > 0,
);

/** All groups for the selected application — one row each; admin selects via table checkboxes. */
const applicationScopeGroupTableRows = computed((): CampaignScopeGroupTableRow[] => {
  if (!showApplicationGroupsTable.value) return [];
  const names = applicationGroupSelectOptions.value.map((o) => o.value);
  return buildCampaignScopeGroupTableRows({
    scopeType: 'application',
    applicationName: applicationName.value,
    groupNames: names,
  });
});

/** Single-group scope: one row for the selected group (read-only table). */
const groupMembershipTableRows = computed((): CampaignScopeGroupTableRow[] => {
  if (!showGroupMembershipTable.value) return [];
  return buildCampaignScopeGroupTableRows({
    scopeType: 'group',
    applicationName: '',
    groupNames: [groupName.value.trim()],
  });
});

watch(
  () => [scopeType.value, applicationName.value] as const,
  (next, prev) => {
    if (isHydratingCampaign.value) return;
    const [st, app] = next;
    const prevTuple = prev as [ScopeType, string] | undefined;
    const prevSt = prevTuple?.[0];
    const prevApp = prevTuple?.[1];
    if (st === 'application') {
      const isFirstRun = prevTuple === undefined;
      const enteredApplicationScope = prevSt !== undefined && prevSt !== 'application';
      const applicationChanged = prevApp !== undefined && prevApp !== app;
      if (isFirstRun || enteredApplicationScope || applicationChanged) {
        selectedApplicationGroups.value = [
          ...mockApplicationAccessGroupsForApp(app).map((g) => g.name),
        ];
      }
    } else {
      selectedApplicationGroups.value = [];
    }
  },
  { immediate: true },
);

watch(
  () => [scopeType.value, applicationName.value, selectedApplicationGroups.value, groupName.value] as const,
  () => {
    if (isHydratingCampaign.value) return;
    syncRemediationGroupRowsFromScope();
  },
  { deep: true },
);

function isoToDatetimeLocalValue(iso: string | undefined): string {
  if (!iso?.trim()) return '';
  const d = new Date(iso.trim());
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function hydrateFromCampaign(c: AccessReviewCampaign, stepAfterHydrate: '1' | '2' | '3' = '1') {
  isHydratingCampaign.value = true;
  editingCampaignId.value = c.id;
  try {
    campaignName.value = c.name;
    scopeType.value = c.scopeType;
    if (c.scopeType === 'application') {
      applicationName.value = c.applicationName ?? 'Salesforce';
      selectedApplicationGroups.value = [...(c.applicationIncludedGroups ?? [])];
      if (selectedApplicationGroups.value.length === 0) {
        selectedApplicationGroups.value = [
          ...mockApplicationAccessGroupsForApp(applicationName.value).map((g) => g.name),
        ];
      }
    } else {
      groupName.value = c.groupName ?? 'Contractors';
    }
    scheduleMode.value = c.scheduleMode;
    campaignStartDate.value = c.startDate;
    campaignDurationDays.value = c.campaignDurationDays ?? inclusiveDurationDays(c.startDate, c.dueDate);
    cadence.value = c.cadence ?? 'quarterly';
    reminderFrequency.value = c.reminderFrequency;
    emailNotificationsEnabled.value = c.emailNotificationsEnabled;
    slackNotificationsEnabled.value = c.slackNotificationsEnabled ?? false;
    slackReviewerNotificationMode.value = c.slackReviewerNotificationMode ?? 'direct_message';
    slackChannelId.value = c.slackChannelId?.trim() ?? '';
    if (!slackChannelId.value && c.slackChannelDesignation?.trim()) {
      const legacy = c.slackChannelDesignation.trim();
      const byId = MOCK_SLACK_CHANNEL_SELECT_OPTIONS.find((o) => o.value === legacy);
      const normalized = legacy.startsWith('#') ? legacy : `#${legacy}`;
      const byLabel = MOCK_SLACK_CHANNEL_SELECT_OPTIONS.find((o) => o.label === normalized);
      slackChannelId.value = byId?.value ?? byLabel?.value ?? '';
    }
    let loadedApproverRows: ApproverRow[];
    if (c.approverSpecifications && c.approverSpecifications.length > 0) {
      loadedApproverRows = c.approverSpecifications.map((s) => ({
        assignment: s.assignment,
        spec: s.spec,
        managerFallbackApprover: s.managerFallbackApprover?.trim() ?? '',
      }));
    } else {
      loadedApproverRows = [
        {
          assignment: c.reviewerAssignment,
          spec:
            c.reviewerAssignment === 'administrator'
              ? ADMINISTRATOR_APPROVER_SPEC
              : c.reviewers[0]?.name ?? '',
          managerFallbackApprover: '',
        },
      ];
    }
    approverRows.value = normalizeApproverRowsForUi(loadedApproverRows);
    completionCriteria.value = c.completionCriteria;
    mandatoryJustification.value = c.mandatoryJustification;
    remediationTimeline.value =
      c.remediationTimeline ??
      (c.revocationTimingMode === 'scheduled' && c.revocationScheduledAtIso?.trim()
        ? 'custom_after_close'
        : 'delay_3d_after_close');
    remediationCustomLocal.value = isoToDatetimeLocalValue(
      c.remediationCustomAfterCloseAtIso ?? c.revocationScheduledAtIso,
    );
    syncRemediationGroupRowsFromScope();
    if (c.remediationPerGroupSettings?.length) {
      const byName = new Map(c.remediationPerGroupSettings.map((x) => [x.groupName, x]));
      remediationGroupRows.value = remediationGroupRows.value.map((row) => {
        const saved = byName.get(row.groupName);
        if (!saved) return row;
        return {
          ...row,
          revokeAction: saved.revokeAction,
          noResponseAction: saved.noResponseAction,
          usersInGroupCount: saved.usersInGroupCount,
          otherResourcesCount: saved.otherResourcesCount,
          userGroupType: saved.userGroupType,
        };
      });
    }
    activeStep.value = stepAfterHydrate;
  } finally {
    void nextTick(() => {
      isHydratingCampaign.value = false;
    });
  }
}

watch(
  () => [props.initialCampaign, props.initialWizardStep] as const,
  ([c, step]) => {
    if (c) {
      hydrateFromCampaign(c, step ?? '1');
    } else {
      editingCampaignId.value = null;
      activeStep.value = '1';
      campaignStartDate.value = todayYmd();
      campaignDurationDays.value = 30;
      remediationTimeline.value = 'delay_3d_after_close';
      remediationCustomLocal.value = '';
      remediationSectionCollapsed.value = false;
      slackChannelId.value = '';
      approverRows.value = [
        { assignment: 'administrator', spec: ADMINISTRATOR_APPROVER_SPEC, managerFallbackApprover: '' },
      ];
      void nextTick(() => syncRemediationGroupRowsFromScope());
    }
  },
  { immediate: true },
);

watch(activeStep, (s) => {
  if (isHydratingCampaign.value) return;
  if (s === '2' && !editingCampaignId.value && !props.initialCampaign) {
    campaignStartDate.value = todayYmd();
  }
});

const groupOptions = MOCK_USER_GROUP_SELECT_OPTIONS;

const cadenceOptions = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
  { label: 'Semi-annual', value: 'semi_annual' },
  { label: 'Annual', value: 'annual' },
];

const reminderOptions = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
];

const steps: StepDefinition[] = [
  { value: '1', label: 'Scope', icon: markRaw(ClipboardDocumentListIcon) },
  { value: '2', label: 'Schedule & reminders', icon: markRaw(CalendarDaysIcon) },
  { value: '3', label: 'Reviewers & policy', icon: markRaw(UserGroupIcon) },
];

const scopeSummary = computed(() => {
  const parts: string[] = [];
  if (scopeType.value === 'application') {
    parts.push(applicationName.value);
    if (selectedApplicationGroupNames.value.length > 0) {
      parts.push(`Included groups: ${selectedApplicationGroupNames.value.join(', ')}`);
    }
  } else {
    parts.push(groupName.value);
  }
  return parts.join(' · ');
});

const nextRunMock = computed(() => {
  if (scheduleMode.value !== 'recurring') return undefined;
  const base = parseYmdLocal(effectiveDueDate.value);
  if (!base) return undefined;
  const d = new Date(base.getFullYear(), base.getMonth(), base.getDate());
  d.setMonth(
    d.getMonth() +
      (cadence.value === 'monthly' ? 1 : cadence.value === 'quarterly' ? 3 : cadence.value === 'semi_annual' ? 6 : 12),
  );
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
});

const nextDisabled = computed(() => {
  if (activeStep.value === '1') {
    if (!campaignName.value.trim()) return true;
    if (scopeType.value === 'application' && !applicationName.value) return true;
    if (
      scopeType.value === 'application' &&
      applicationGroupSelectOptions.value.length > 0 &&
      selectedApplicationGroupNames.value.length === 0
    ) {
      return true;
    }
    if (scopeType.value === 'group' && !groupName.value) return true;
  }
  if (activeStep.value === '2') {
    if (
      !Number.isFinite(campaignDurationDays.value) ||
      campaignDurationDays.value < 1 ||
      campaignDurationDays.value > 366
    ) {
      return true;
    }
    if (!emailNotificationsEnabled.value && !slackNotificationsEnabled.value) return true;
    if (
      slackNotificationsEnabled.value &&
      slackReviewerNotificationMode.value === 'channel' &&
      !slackChannelId.value.trim()
    ) {
      return true;
    }
  }
  if (activeStep.value === '3') {
    if (!approverRows.value.some((r) => r.assignment != null)) return true;
    if (
      approverRows.value.some(
        (r) => r.assignment === 'users_manager' && !r.managerFallbackApprover?.trim(),
      )
    ) {
      return true;
    }
    if (!remediationCustomLocalValid()) return true;
  }
  return false;
});

function buildCampaign(): AccessReviewCampaign {
  const isEdit = Boolean(editingCampaignId.value);
  const id = editingCampaignId.value ?? `camp_${Date.now()}`;
  const base = props.initialCampaign;
  const configured = rowsWithAssignment(approverRows.value);
  const specs = configured.map((r) => {
    const base = { assignment: r.assignment, spec: r.spec.trim() };
    if (r.assignment === 'users_manager' && r.managerFallbackApprover?.trim()) {
      return { ...base, managerFallbackApprover: r.managerFallbackApprover.trim() };
    }
    return base;
  });
  return {
    id,
    name: campaignName.value.trim(),
    status: isEdit ? 'scheduled' : 'in_progress',
    scopeType: scopeType.value,
    scopeSummary: scopeSummary.value,
    applicationName: scopeType.value === 'application' ? applicationName.value : undefined,
    applicationIncludedGroups:
      scopeType.value === 'application' && selectedApplicationGroupNames.value.length > 0
        ? [...selectedApplicationGroupNames.value]
        : undefined,
    groupName: scopeType.value === 'group' ? groupName.value : undefined,
    attributeFilters: isEdit && base ? [...base.attributeFilters] : [],
    startDate: campaignStartDate.value.trim(),
    dueDate: dueYmdFromStartAndDuration(campaignStartDate.value.trim(), campaignDurationDays.value),
    campaignDurationDays: campaignDurationDays.value,
    scheduleMode: scheduleMode.value,
    cadence: scheduleMode.value === 'recurring' ? cadence.value : undefined,
    nextRunDisplay: nextRunMock.value,
    reminderFrequency: reminderFrequency.value,
    emailNotificationsEnabled: emailNotificationsEnabled.value,
    slackNotificationsEnabled: slackNotificationsEnabled.value,
    ...(slackNotificationsEnabled.value
      ? {
          slackReviewerNotificationMode: slackReviewerNotificationMode.value,
          slackChannelId:
            slackReviewerNotificationMode.value === 'channel' && slackChannelId.value.trim()
              ? slackChannelId.value.trim()
              : undefined,
          slackChannelDesignation:
            slackReviewerNotificationMode.value === 'channel' && slackChannelId.value.trim()
              ? MOCK_SLACK_CHANNEL_SELECT_OPTIONS.find((o) => o.value === slackChannelId.value.trim())?.label
              : undefined,
        }
      : {}),
    reviewerAssignment: primaryReviewerAssignment(approverRows.value),
    approverSpecifications: specs.length > 0 ? specs : undefined,
    completionCriteria: hasMultipleConfiguredApprovers.value
      ? completionCriteria.value
      : 'any',
    mandatoryJustification: mandatoryJustification.value,
    revocationMode: isEdit && base ? base.revocationMode : 'automatic',
    ...(() => {
      const customIso =
        remediationTimeline.value === 'custom_after_close' && remediationCustomLocalValid()
          ? new Date(remediationCustomLocal.value.trim()).toISOString()
          : undefined;
      const revocationTimingMode: RevocationTimingMode =
        customIso != null ? 'scheduled' : 'campaign_end';
      return {
        remediationTimeline: remediationTimeline.value,
        remediationCustomAfterCloseAtIso: customIso,
        remediationPerGroupSettings:
          remediationGroupRows.value.length > 0
            ? remediationGroupRows.value.map((r) => ({ ...r }))
            : undefined,
        revocationTimingMode,
        revocationScheduledAtIso: customIso,
      };
    })(),
    endOfCampaignRevocation: true,
    completionPercent: isEdit && base ? base.completionPercent : 0,
    reviewers: buildReviewersFromApproverRows(approverRows.value),
    approvalCompletedAtIso: isEdit ? base?.approvalCompletedAtIso : undefined,
    reviewResultsBreakdown: isEdit ? base?.reviewResultsBreakdown : undefined,
    revocationSummary: isEdit ? base?.revocationSummary : undefined,
    reviewUserRows: isEdit && base?.reviewUserRows ? base.reviewUserRows : undefined,
  };
}

const stepperSaveLabel = computed(() => (editingCampaignId.value ? 'Save changes' : 'Add campaign'));

function handleSave() {
  const built = buildCampaign();
  if (editingCampaignId.value) {
    store.updateCampaign(built);
  } else {
    store.addCampaign(built);
  }
  emit('done');
}

function handleCancel() {
  emit('cancel');
}
</script>

<template>
  <div class="flex flex-col gap-md min-h-0">
    <Stepper
      :steps="steps"
      v-model:value="activeStep"
      linear
      :save-label="stepperSaveLabel"
      :nextDisabled="nextDisabled"
      @cancel="handleCancel"
      @save="handleSave"
    >
      <template #step-1>
        <div class="flex flex-col gap-lg w-full min-w-0">
          <div class="flex flex-col gap-lg max-w-3xl">
          <p class="text-body-md text-neutral-subtle">
            Target application access or user group membership for this review.
          </p>
          <FormField label="Campaign name">
            <template #default="{ inputId }">
              <InputText :id="inputId" v-model="campaignName" placeholder="e.g. Q2 Salesforce review" class="w-full" />
            </template>
          </FormField>

          <div class="flex flex-col gap-sm">
            <span class="text-body-md-bold text-neutral-base">Review target</span>
            <RadioButtonGroup v-model="scopeType" name="scopeType" class="flex-col gap-sm">
              <RadioButtonWithLabel value="application" name="scopeType">
                <template #label>Application access</template>
                <template #description>Review users who have access to a specific SSO application.</template>
              </RadioButtonWithLabel>
              <RadioButtonWithLabel value="group" name="scopeType">
                <template #label>User group membership</template>
                <template #description>Review members of a directory group (e.g. Contractors).</template>
              </RadioButtonWithLabel>
            </RadioButtonGroup>
          </div>

          <FormField
            v-if="scopeType === 'application'"
            label="Application"
            label-tooltip="Open the list and type in the search field to filter applications by name. The list uses virtual scrolling for large catalogs."
          >
            <template #default="{ inputId }">
              <Select
                :id="inputId"
                v-model="applicationName"
                :options="applicationOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Select an application…"
                filter
                filterPlaceholder="Search applications by name…"
                :autoFilterFocus="true"
                :virtualScrollerOptions="{ itemSize: 40 }"
                class="w-full!"
              >
                <template #filtericon>
                  <MagnifyingGlassIcon />
                </template>
              </Select>
            </template>
          </FormField>

          <FormField
            v-if="scopeType === 'group'"
            label="User group"
            label-tooltip="Open the list and type in the search field to filter groups by name. The list uses virtual scrolling for large directories."
          >
            <template #default="{ inputId }">
              <Select
                :id="inputId"
                v-model="groupName"
                :options="groupOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Select a user group…"
                filter
                filterPlaceholder="Search groups by name…"
                :autoFilterFocus="true"
                :virtualScrollerOptions="{ itemSize: 40 }"
                class="w-full!"
              >
                <template #filtericon>
                  <MagnifyingGlassIcon />
                </template>
              </Select>
            </template>
          </FormField>
          </div>

          <div v-if="showApplicationGroupsTable" class="w-full shrink-0 min-w-0 pt-md">
            <CampaignScopeSelectedGroupsTable
              v-model="selectedApplicationGroups"
              :rows="applicationScopeGroupTableRows"
              :selectable="true"
            />
          </div>
          <div v-else-if="showGroupMembershipTable" class="w-full shrink-0 min-w-0 pt-md">
            <CampaignScopeSelectedGroupsTable
              :rows="groupMembershipTableRows"
              :selectable="false"
            />
          </div>
        </div>
      </template>

      <template #step-2>
        <div class="flex flex-col gap-lg max-w-3xl">
          <p class="text-body-md text-neutral-subtle m-0">
            Set how long the review window runs and how reviewers are reminded before it closes.
          </p>

          <div class="flex flex-col gap-md">
            <span class="text-body-md-bold text-neutral-base">Dates & frequency</span>
            <div class="flex flex-col gap-sm">
              <span class="text-body-sm text-neutral-subtle">One-time or recurring review window</span>
              <SelectButton
                v-model="scheduleMode"
                :options="[
                  { label: 'One-time', value: 'one_time' },
                  { label: 'Recurring', value: 'recurring' },
                ]"
                optionLabel="label"
                optionValue="value"
                :allowEmpty="false"
              />
            </div>
            <FormField v-if="scheduleMode === 'recurring'" label="Cadence">
              <template #default="{ inputId }">
                <Select
                  :id="inputId"
                  v-model="cadence"
                  :options="cadenceOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full!"
                />
              </template>
            </FormField>
            <div class="max-w-48 w-full min-w-0">
              <FormField label="Campaign duration">
                <template #default="{ inputId }">
                  <Select
                    :id="inputId"
                    v-model="campaignDurationDays"
                    :options="durationSelectOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Select duration"
                    class="w-full!"
                  />
                </template>
              </FormField>
            </div>
            <p class="text-body-sm text-neutral-subtle m-0">
              Review window:
              <span class="text-neutral-base">{{ campaignStartDate }}</span>
              through
              <span class="text-neutral-base">{{ effectiveDueDate }}</span>
              ({{ campaignDurationDays }} calendar days).
            </p>
            <p v-if="scheduleMode === 'recurring'" class="text-body-sm text-neutral-subtle m-0">
              Next run after this cycle (preview): {{ nextRunMock ?? '—' }}
            </p>
          </div>

          <div class="flex flex-col gap-md">
            <span class="text-body-md-bold text-neutral-base">Reminders & channels</span>
            <FormField label="Reviewer reminder frequency">
              <template #default="{ inputId }">
                <SelectButton
                  :id="inputId"
                  v-model="reminderFrequency"
                  :options="reminderOptions"
                  optionLabel="label"
                  optionValue="value"
                  :allowEmpty="false"
                />
              </template>
            </FormField>
            <div class="flex flex-col gap-xs">
              <span class="text-body-sm text-neutral-subtle">
                Reviewers receive campaign start, reminder, and completion notices. Enable at least one channel below.
              </span>
            </div>
            <CheckboxWithLabel v-model="emailNotificationsEnabled" :binary="true">
              <template #label>Email</template>
              <template #description>
                Deliver notifications to reviewers’ work email addresses from the directory.
              </template>
            </CheckboxWithLabel>
            <div class="rounded-md border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md">
              <CheckboxWithLabel v-model="slackNotificationsEnabled" :binary="true">
                <template #label>Slack</template>
                <template #description>
                  Send notifications through your connected Slack workspace (requires the Slack integration).
                </template>
              </CheckboxWithLabel>
              <div v-if="slackNotificationsEnabled" class="flex flex-col gap-md pl-0 md:pl-md border-l-0 md:border-l border-neutral-default_solid">
                <span class="text-body-md-bold text-neutral-base">Slack delivery</span>
                <RadioButtonGroup
                  v-model="slackReviewerNotificationMode"
                  name="slackReviewerNotificationMode"
                  class="flex-col gap-sm"
                >
                  <RadioButtonWithLabel value="direct_message" name="slackReviewerNotificationMode">
                    <template #label>Direct messages to approvers</template>
                    <template #description>
                      Send Slack DMs to each listed approver using their directory-linked Slack identity.
                    </template>
                  </RadioButtonWithLabel>
                  <RadioButtonWithLabel value="channel" name="slackReviewerNotificationMode">
                    <template #label>Channel message</template>
                    <template #description>
                      Post reminders to a single Slack channel your workspace can access.
                    </template>
                  </RadioButtonWithLabel>
                </RadioButtonGroup>
                <div v-if="slackReviewerNotificationMode === 'channel'" class="flex flex-col gap-sm">
                  <FormField label="Slack channel">
                    <template #default="{ inputId }">
                      <Select
                        :id="inputId"
                        v-model="slackChannelId"
                        :options="MOCK_SLACK_CHANNEL_SELECT_OPTIONS"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Select a Slack channel…"
                        filter
                        filterPlaceholder="Search channels…"
                        class="w-full!"
                      >
                        <template #filtericon>
                          <MagnifyingGlassIcon />
                        </template>
                      </Select>
                    </template>
                  </FormField>
                  <span class="text-body-sm text-neutral-subtle">
                    Only channels your Access Reviews Slack app can post to are listed (connected workspace).
                  </span>
                </div>
              </div>
              <CheckboxWithLabel :model-value="false" :binary="true" disabled>
                <template #label>Microsoft Teams</template>
                <template #description>Coming soon — notify reviewers in Teams.</template>
              </CheckboxWithLabel>
            </div>
          </div>
        </div>
      </template>

      <template #step-3>
        <div class="flex flex-col gap-lg max-w-5xl">
          <div class="flex flex-col gap-md">
            <p class="text-body-sm text-neutral-subtle">
              Choose between two flows:
              <span class="text-neutral-base">Administrator</span>
              — JumpCloud admins approve alone (one approver row, no other approver types).
              <span class="text-neutral-base"> Other approver types</span>
              — up to three rows (manager, resource owner, or user group); each type can only be used once. Specify the
              directory path, group, or target for each row after you pick its type. For
              <span class="text-neutral-base">Users Manager</span>, also choose a fallback approver when a user has no
              manager attribute.
            </p>
            <div v-for="(row, idx) in approverRows" :key="idx" class="flex flex-col gap-sm min-w-0 w-full">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-md items-end">
                <FormField label="Approver Type" class="md:col-span-3">
                  <template #default="{ inputId }">
                    <Select
                      :id="inputId"
                      :model-value="row.assignment"
                      :options="approverTypeOptionsForRow(idx)"
                      optionLabel="label"
                      optionValue="value"
                      placeholder="Select type"
                      class="w-full!"
                      @update:model-value="setApproverRowType(row, idx, $event)"
                    />
                  </template>
                </FormField>
                <FormField v-if="row.assignment != null" label="Approver" class="md:col-span-8">
                  <template #default="{ inputId }">
                    <InputText
                      :id="inputId"
                      v-model="row.spec"
                      :disabled="row.assignment === 'administrator'"
                      :placeholder="approverFieldPlaceholder(row.assignment)"
                      class="w-full"
                    />
                  </template>
                </FormField>
                <div v-else class="hidden md:block md:col-span-8" aria-hidden="true" />

                <div class="flex items-end gap-sm md:col-span-1 pb-2 justify-end md:justify-start">
                  <Button
                    v-if="approverRows.length > 1"
                    severity="secondary"
                    variant="text"
                    rounded
                    :aria-label="`Remove approver row ${idx + 1}`"
                    @click="removeApproverRow(idx)"
                  >
                    <template #icon="iconProps">
                      <XMarkIcon :class="iconProps.class" />
                    </template>
                  </Button>
                  <Button
                    v-if="
                      idx === approverRows.length - 1 &&
                      approverRows.length < MAX_APPROVER_ROWS &&
                      !isAdminOnlyApproverFlow
                    "
                    severity="secondary"
                    variant="text"
                    rounded
                    aria-label="Add approver row"
                    @click="addApproverRow"
                  >
                    <template #icon="iconProps">
                      <PlusIcon :class="iconProps.class" />
                    </template>
                  </Button>
                </div>
              </div>
              <div
                v-if="row.assignment === 'users_manager'"
                class="w-full min-w-0 max-w-3xl flex flex-col gap-sm pt-sm mt-xs ml-md border-l-2 border-neutral-default_solid pl-md md:ml-lg md:pl-lg"
              >
                <FormField
                  class="w-full min-w-0"
                  label="Fallback approver"
                  :required="true"
                  label-tooltip="If a reviewed user has no manager in directory employment attributes, this person is assigned as the reviewer instead."
                  help-text="Used when a user’s manager attribute is not set in directory employment info."
                >
                  <template #default="{ inputId }">
                    <div class="w-full min-w-0">
                      <Select
                        :id="inputId"
                        v-model="row.managerFallbackApprover"
                        :options="MOCK_FALLBACK_APPROVER_OPTIONS"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Select a fallback approver…"
                        filter
                        filterPlaceholder="Search users…"
                        class="w-full!"
                      >
                        <template #filtericon>
                          <MagnifyingGlassIcon />
                        </template>
                      </Select>
                    </div>
                  </template>
                </FormField>
              </div>
            </div>
          </div>

          <div v-if="hasMultipleConfiguredApprovers" class="flex flex-col gap-sm">
            <span class="text-body-md-bold text-neutral-base">Approver requirement</span>
            <p class="text-body-sm text-neutral-subtle m-0">
              Set how approvals work when this campaign has multiple approvers. You can change this later when editing
              the campaign.
            </p>
            <RadioButtonGroup v-model="completionCriteria" name="completionCriteria" class="flex-col gap-sm">
              <RadioButtonWithLabel value="all" name="completionCriteria">
                <template #label>{{ completionCriteriaLabels.all }}</template>
                <template #description>
                  Every approver in the flow must complete a review before the campaign can finish.
                </template>
              </RadioButtonWithLabel>
              <RadioButtonWithLabel value="any" name="completionCriteria">
                <template #label>{{ completionCriteriaLabels.any }}</template>
                <template #description>
                  The campaign can progress after any single approver completes their review.
                </template>
              </RadioButtonWithLabel>
              <RadioButtonWithLabel value="sequential" name="completionCriteria">
                <template #label>{{ completionCriteriaLabels.sequential }}</template>
                <template #description>
                  Approvers complete reviews in order; each step must finish before the next begins.
                </template>
              </RadioButtonWithLabel>
            </RadioButtonGroup>
          </div>

          <ToggleSwitch
            v-model="mandatoryJustification"
            label="Require justification"
            description="Reviewers must comment when choosing approve or revoke."
          />

          <CollapsiblePanel
            v-model:collapsed="remediationSectionCollapsed"
            toggleable
            header="Remediation"
            class="max-w-5xl"
          >
            <template #titleicon="iconProps">
              <ShieldCheckIcon :class="iconProps.class" />
            </template>
            <template #toggleicon="iconProps">
              <ChevronRightIcon :class="iconProps.class" />
            </template>
            <div class="flex flex-col gap-lg">
              <MessageNotification
                severity="info"
                title="Remediation behaviors"
                detail="Approve decisions always leave access unchanged. For each group in scope, configure Revoke action and No response action. Timeline applies after the review cycle closes unless you choose to run when a reviewer submits."
              />

              <div class="overflow-x-auto rounded-md border border-neutral-default_solid">
                <table class="w-full border-collapse min-w-0">
                  <thead>
                    <tr class="border-b border-neutral-default_solid bg-neutral-surface">
                      <th class="text-body-sm-bold text-neutral-subtle p-md text-left">User group</th>
                      <th class="text-body-sm-bold text-neutral-subtle p-md text-left">User group type</th>
                      <th class="text-body-sm-bold text-neutral-subtle p-md text-left">Users</th>
                      <th class="text-body-sm-bold text-neutral-subtle p-md text-left">Other resources</th>
                      <th class="text-body-sm-bold text-neutral-subtle p-md text-left min-w-63.5">Revoke action</th>
                      <th class="text-body-sm-bold text-neutral-subtle p-md text-left min-w-63.5">No response action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(gRow, gIdx) in remediationGroupRows"
                      :key="`${gRow.groupName}-${gIdx}`"
                      class="border-b border-neutral-default_solid last:border-0"
                    >
                      <td class="p-md text-body-md text-neutral-base align-top">{{ gRow.groupName }}</td>
                      <td class="p-md text-body-md text-neutral-base align-top">
                        {{ userGroupTypeLabel(gRow.userGroupType) }}
                      </td>
                      <td class="p-md text-body-md text-neutral-base align-top">{{ gRow.usersInGroupCount }}</td>
                      <td class="p-md text-body-md text-neutral-base align-top">
                        <div class="flex flex-wrap items-center gap-xs">
                          <span>{{ gRow.otherResourcesCount }}</span>
                          <button
                            type="button"
                            class="text-body-md text-button-primary-base bg-transparent border-0 cursor-pointer p-0"
                          >
                            View all
                          </button>
                        </div>
                      </td>
                      <td class="p-md align-top">
                        <Select
                          v-model="gRow.revokeAction"
                          :options="revokeGroupSelectOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-full!"
                        />
                      </td>
                      <td class="p-md align-top">
                        <Select
                          v-model="gRow.noResponseAction"
                          :options="noResponseGroupSelectOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-full!"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                class="rounded-md border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md"
              >
                <span class="text-body-md-bold text-neutral-base">Remediation timeline</span>
                <p class="text-body-sm text-neutral-subtle m-0">
                  Choose when remediation runs: right after a reviewer submits their review, or after the cycle closes
                  with an optional delay or custom date.
                </p>
                <RadioButtonGroup v-model="remediationTimeline" name="remediationTimeline" class="flex-col gap-sm">
                  <RadioButtonWithLabel
                    v-for="opt in remediationTimelineOptionOrder"
                    :key="opt"
                    :value="opt"
                    name="remediationTimeline"
                  >
                    <template #label>{{ remediationTimelineRadioLabels[opt] }}</template>
                  </RadioButtonWithLabel>
                </RadioButtonGroup>
                <FormField v-if="remediationTimeline === 'custom_after_close'" label="Custom remediation time">
                  <template #default="{ inputId }">
                    <InputText
                      :id="inputId"
                      v-model="remediationCustomLocal"
                      type="datetime-local"
                      class="w-full"
                    />
                  </template>
                </FormField>
                <p class="text-body-sm text-neutral-subtle m-0">
                  Delay and custom date are measured from when the review cycle closes.
                </p>
              </div>
            </div>
          </CollapsiblePanel>
        </div>
      </template>
    </Stepper>
  </div>
</template>
