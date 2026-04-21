<script setup lang="ts">
import type { InjectionKey } from 'vue';
import type { PropType } from 'vue';
import { computed, defineComponent, h, inject, markRaw, provide, ref } from 'vue';
import {
  DataTable,
  DataTableToolbar,
  DataTableCellText,
  FormField,
  LinkText,
  MessageNotification,
  SeverityDialog,
  ToggleSwitch,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Tag from 'primevue/tag';
import Menu from 'primevue/menu';
import Select from 'primevue/select';
import type { MenuItem } from 'primevue/menuitem';
import { EllipsisVerticalIcon, InformationCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import {
  type AccessReviewCampaign,
  type AccessReviewsCampaignHubTab,
  type PendingRemediationRevocationStatus,
  remediationTimelineRadioLabels,
} from '../types';
import { parseYmdLocal } from '../campaignDateUtils';
import type { AccessReviewM1Store } from '../accessReviewM1Store';
import { ACCESS_REVIEW_M1_STORE_KEY } from '../accessReviewM1Store';
import { mockCampaignReviewUserRows } from '../mockData';
import { pendingRemediationRevokeRemovals } from '../pendingRemediationRevokePreview';

interface AccessReviewHubRowActions {
  openEdit: (c: AccessReviewCampaign) => void;
  requestDelete: (c: AccessReviewCampaign) => void;
  requestEndCampaignEarly: (c: AccessReviewCampaign) => void;
  requestRevokeNowRemediation: (c: AccessReviewCampaign) => void;
  flashCopy: (detail: string) => void;
}

const accessReviewHubRowActionsKey: InjectionKey<AccessReviewHubRowActions> = Symbol(
  'accessReviewHubRowActions',
);

defineOptions({ name: 'AccessReviewsCampaignHub' });

const props = withDefaults(
  defineProps<{ campaignTab: AccessReviewsCampaignHubTab }>(),
  { campaignTab: 'all' },
);

const emit = defineEmits<{
  select: [campaign: AccessReviewCampaign, options?: { openUsersInScopeTab?: boolean }];
  edit: [campaign: AccessReviewCampaign];
  create: [];
}>();

const store = inject(ACCESS_REVIEW_M1_STORE_KEY) as AccessReviewM1Store;

const copyFlashMessage = ref('');
let copyFlashTimer: ReturnType<typeof setTimeout> | undefined;
const deleteTarget = ref<AccessReviewCampaign | null>(null);
const showDeleteCampaignDialog = ref(false);

const endCampaignEarlyTarget = ref<AccessReviewCampaign | null>(null);
const showEndCampaignEarlyDialog = ref(false);

const revokeNowTarget = ref<AccessReviewCampaign | null>(null);
const showRevokeNowDialog = ref(false);

const revokeNowRemovals = computed(() =>
  revokeNowTarget.value ? pendingRemediationRevokeRemovals(revokeNowTarget.value) : [],
);

/** Long lists use a full-viewport dialog so the roster scrolls in a dedicated, focusable region. */
const REVOKE_DIALOG_FULL_PAGE_AT = 10;

const revokeNowDialogFullPage = computed(
  () => revokeNowRemovals.value.length > REVOKE_DIALOG_FULL_PAGE_AT,
);

const revokeNowDialogStyle = computed(() => {
  if (revokeNowDialogFullPage.value) {
    return {
      width: '100vw',
      maxWidth: '100vw',
      height: '100dvh',
      maxHeight: '100dvh',
      margin: '0',
      borderRadius: '0',
      display: 'flex',
      flexDirection: 'column',
    };
  }
  return { width: 'min(560px, 100vw)' };
});

const revokeNowDialogContentStyle = computed(() =>
  revokeNowDialogFullPage.value
    ? {
        flex: '1 1 auto',
        minHeight: '0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }
    : undefined,
);

const deleteDialogMarkdown = computed(() => {
  const t = deleteTarget.value;
  if (!t) return '';
  return `Permanently delete **${t.name}**? Review queue items for this campaign will also be removed from the playground.`;
});

const endCampaignEarlyDialogMarkdown = computed(() => {
  const t = endCampaignEarlyTarget.value;
  if (!t) return '';
  return `End **${t.name}** now? The campaign will be marked **completed**, a mock **remediation summary** will be recorded in this playground, and the campaign will leave active lists.`;
});

function flashCopyDetail(detail: string) {
  copyFlashMessage.value = detail;
  if (copyFlashTimer) clearTimeout(copyFlashTimer);
  copyFlashTimer = setTimeout(() => {
    copyFlashMessage.value = '';
  }, 3500);
}

function confirmDeleteCampaign() {
  const t = deleteTarget.value;
  if (t) store.removeCampaign(t.id);
  deleteTarget.value = null;
  showDeleteCampaignDialog.value = false;
}

function cancelDeleteCampaignDialog() {
  showDeleteCampaignDialog.value = false;
  deleteTarget.value = null;
}

function openEndCampaignEarlyDialog(c: AccessReviewCampaign) {
  if (c.status !== 'in_progress') return;
  endCampaignEarlyTarget.value = c;
  showEndCampaignEarlyDialog.value = true;
}

function confirmEndCampaignEarly() {
  const t = endCampaignEarlyTarget.value;
  if (t && t.status === 'in_progress') {
    store.endCampaign(t.id);
  }
  endCampaignEarlyTarget.value = null;
  showEndCampaignEarlyDialog.value = false;
}

function cancelEndCampaignEarlyDialog() {
  showEndCampaignEarlyDialog.value = false;
  endCampaignEarlyTarget.value = null;
}

function cancelRevokeNowDialog() {
  showRevokeNowDialog.value = false;
  revokeNowTarget.value = null;
}

function confirmRevokeNowRemediation() {
  const c = revokeNowTarget.value;
  showRevokeNowDialog.value = false;
  revokeNowTarget.value = null;
  if (!c) return;
  store.runRemediation(c.id);
  flashCopyDetail(`Remediation recorded for “${c.name}” (playground).`);
}

provide(accessReviewHubRowActionsKey, {
  openEdit(c) {
    emit('edit', c);
  },
  requestDelete(c) {
    deleteTarget.value = c;
    showDeleteCampaignDialog.value = true;
  },
  requestEndCampaignEarly(c) {
    openEndCampaignEarlyDialog(c);
  },
  requestRevokeNowRemediation(c) {
    revokeNowTarget.value = c;
    showRevokeNowDialog.value = true;
  },
  flashCopy: flashCopyDetail,
});

function scopeLinkLabel(c: AccessReviewCampaign): string {
  if (c.scopeType === 'application') {
    const name = c.applicationName?.trim();
    if (name) return name;
    return c.scopeSummary.split('·')[0]?.trim() || c.scopeSummary;
  }
  const name = c.groupName?.trim();
  if (name) return name;
  return c.scopeSummary.replace(/^User group ·\s*/i, '').split('·')[0]?.trim() || c.scopeSummary;
}

const ScopeCell = markRaw(
  defineComponent({
    name: 'ArM1ScopeCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const c = props.data as AccessReviewCampaign;
        const isApp = c.scopeType === 'application';
        const prefix = isApp ? 'Application: ' : 'User Group: ';
        const label = scopeLinkLabel(c);
        return h('div', { class: 'flex items-center gap-xs p-2 min-h-12 flex-wrap' }, [
          h('span', { class: 'text-body-md text-neutral-base shrink-0' }, prefix),
          h(LinkText, {
            label,
            href: '#',
            class: 'text-body-md',
            onClick: (e: MouseEvent) => {
              e.preventDefault();
              emit('select', c);
            },
          }),
        ]);
      };
    },
  }),
);

type ScopeFilterValue = 'all' | 'application' | 'group';
type StatusFilterValue = 'all' | 'enabled' | 'disabled';

const showFilterDialog = ref(false);
const appliedScopeFilter = ref<ScopeFilterValue>('all');
const draftScopeFilter = ref<ScopeFilterValue>('all');
const appliedStatusFilter = ref<StatusFilterValue>('all');
const draftStatusFilter = ref<StatusFilterValue>('all');


function isCampaignEnabled(c: AccessReviewCampaign): boolean {
  return c.status === 'in_progress';
}

function startOfTodayLocal(): Date {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

/** Calendar date from `dueDate` (YYYY-MM-DD) in local time; invalid → null. */
function parseDueDateLocal(c: AccessReviewCampaign): Date | null {
  const raw = c.dueDate?.trim();
  if (!raw) return null;
  const parts = raw.split('-').map(Number);
  if (parts.length !== 3) return null;
  const [y, m, d] = parts;
  if (!Number.isFinite(y) || !Number.isFinite(m) || !Number.isFinite(d)) return null;
  const dt = new Date(y, m - 1, d);
  return Number.isNaN(dt.getTime()) ? null : dt;
}

/** In-progress campaign whose due date is strictly before today. */
function isCampaignOverdue(c: AccessReviewCampaign): boolean {
  if (c.status !== 'in_progress') return false;
  const due = parseDueDateLocal(c);
  if (!due) return false;
  return due < startOfTodayLocal();
}

function matchesCampaignTab(c: AccessReviewCampaign, tab: AccessReviewsCampaignHubTab): boolean {
  switch (tab) {
    case 'all':
      return true;
    // Active > All: in-progress campaigns plus completed campaigns still awaiting remediation.
    case 'active':
      return (
        c.status === 'in_progress' ||
        (c.status === 'completed' && !c.revocationSummary)
      );
    case 'overdue':
      return c.status === 'in_progress' && isCampaignOverdue(c);
    case 'pending_remediation':
      return c.status === 'completed' && !c.revocationSummary;
    case 'completed':
      return c.status === 'completed' && Boolean(c.revocationSummary);
    default:
      return true;
  }
}

function statusToggleLabel(c: AccessReviewCampaign): 'Enabled' | 'Disabled' {
  return isCampaignEnabled(c) ? 'Enabled' : 'Disabled';
}

function statusToggleTooltip(c: AccessReviewCampaign): string {
  if (isCampaignEnabled(c)) {
    return 'Campaign is enabled and active. Turn off to disable (playground).';
  }
  if (c.status === 'completed') {
    return 'Campaign has ended and is disabled. Open the campaign for details.';
  }
  return 'Campaign is disabled. Turn on to enable (playground).';
}

function formatScheduleColumnDate(iso: string): string {
  if (!iso?.trim()) return '—';
  const d = new Date(`${iso.trim()}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function scheduleColumnPrimary(c: AccessReviewCampaign): string {
  if (c.scheduleMode === 'one_time') return 'N/A';
  return c.status === 'in_progress' ? 'Running now' : 'Not running';
}

function scheduleColumnSecondary(c: AccessReviewCampaign): string {
  if (c.scheduleMode === 'one_time') return 'No recurring schedule';
  const last = formatScheduleColumnDate(c.startDate);
  const next = c.nextRunDisplay?.trim() || formatScheduleColumnDate(c.dueDate);
  return `Last: ${last} · Next: ${next}`;
}

const ScheduleCell = markRaw(
  defineComponent({
    name: 'ArM1ScheduleCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const c = props.data as AccessReviewCampaign;
        return h(
          'div',
          { class: 'flex flex-col gap-xs p-2 min-h-12 justify-center min-w-0' },
          [
            h('span', { class: 'text-body-md-bold text-neutral-base' }, scheduleColumnPrimary(c)),
            h('span', { class: 'text-body-sm text-neutral-subtle' }, scheduleColumnSecondary(c)),
          ],
        );
      };
    },
  }),
);

const StatusToggleCell = markRaw(
  defineComponent({
    name: 'ArM1StatusToggleCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const c = props.data as AccessReviewCampaign;
        const completed = c.status === 'completed';
        const enabled = isCampaignEnabled(c);
        return h(
          'div',
          {
            class: 'flex items-center gap-sm p-2 min-h-12 flex-wrap',
            onClick: (e: MouseEvent) => e.stopPropagation(),
          },
          [
            h(ToggleSwitch, {
              modelValue: enabled,
              disabled: completed,
              'onUpdate:modelValue': (v: boolean) => {
                if (completed) return;
                c.status = v ? 'in_progress' : 'scheduled';
              },
            }),
            h('span', { class: 'text-body-md text-neutral-base' }, statusToggleLabel(c)),
            h(InformationCircleIcon, {
              class: 'size-5 shrink-0 text-neutral-subtle',
              'aria-label': 'About campaign status',
              title: statusToggleTooltip(c),
            }),
          ],
        );
      };
    },
  }),
);

/** Total users in the campaign review scope (playground: reviewer queue total, else derived user rows). */
function totalUsersInCampaignForHub(c: AccessReviewCampaign): number {
  if (c.reviewers?.length) {
    return Math.max(...c.reviewers.map((r) => r.total));
  }
  return mockCampaignReviewUserRows(c).length;
}

const PendingRemediationUsersInScopeLinkCell = markRaw(
  defineComponent({
    name: 'ArM1PendingRemediationUsersInScopeLinkCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const c = props.data as AccessReviewCampaign;
        const n = c.usersInScopeTotal ?? totalUsersInCampaignForHub(c);
        const label = String(n);
        return h('div', { class: 'flex items-center p-2 min-h-12' }, [
          h(LinkText, {
            label,
            href: '#',
            class: 'text-body-md tabular-nums',
            'aria-label': `View users in scope, ${label} total`,
            onClick: (e: MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              emit('select', c, { openUsersInScopeTab: true });
            },
          }),
        ]);
      };
    },
  }),
);

function revocationStatusForCampaign(c: AccessReviewCampaign): PendingRemediationRevocationStatus {
  const first = c.remediationPerGroupSettings?.[0];
  if (first) {
    if (first.revokeAction === 'manual_review_queue' || first.revokeAction === 'create_ticket_only') {
      return 'Manual';
    }
    return 'Scheduled';
  }
  return 'Scheduled';
}

/** Single-line date/time for scheduled remediation (matches detail page conventions). */
function formatRemediationInstantLine(iso: string): string | undefined {
  const d = new Date(iso.trim());
  if (Number.isNaN(d.getTime())) return undefined;
  const datePart = d.toLocaleDateString('en-US', { dateStyle: 'medium' });
  const timePart = d.toLocaleTimeString('en-US', { timeStyle: 'short' });
  return `${datePart} · ${timePart}`;
}

/** Secondary line under the Scheduled badge: concrete instant, timeline label, or review end date. */
function remediationDateSecondaryForHub(c: AccessReviewCampaign): string | undefined {
  if (revocationStatusForCampaign(c) !== 'Scheduled') return undefined;

  const opt = c.remediationTimeline;
  if (opt === 'custom_after_close') {
    const iso = c.remediationCustomAfterCloseAtIso?.trim() ?? c.revocationScheduledAtIso?.trim();
    if (iso) {
      const line = formatRemediationInstantLine(iso);
      if (line) return line;
    }
  }

  const mode = c.revocationTimingMode ?? 'campaign_end';
  const scheduledIso = c.revocationScheduledAtIso?.trim();
  if (mode === 'scheduled' && scheduledIso) {
    const line = formatRemediationInstantLine(scheduledIso);
    if (line) return line;
  }

  if (opt != null && opt !== 'custom_after_close') {
    return remediationTimelineRadioLabels[opt];
  }

  const due = parseYmdLocal(c.dueDate);
  if (!due) return undefined;
  return due.toLocaleDateString('en-US', { dateStyle: 'medium' });
}

const RevocationStatusCell = markRaw(
  defineComponent({
    name: 'ArM1RevocationStatusCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const c = props.data as AccessReviewCampaign;
        const s = revocationStatusForCampaign(c);
        const description = s === 'Scheduled' ? remediationDateSecondaryForHub(c) : undefined;
        // DataTableCellStatus places description beside the tag; stack for date under the badge.
        return h(
          'div',
          {
            class: 'flex flex-col items-start justify-center gap-0.5 p-2 min-h-12',
            onClick: (e: MouseEvent) => e.stopPropagation(),
          },
          [
            h(
              Tag,
              { severity: s === 'Manual' ? 'info' : 'secondary', class: 'shrink-0' },
              { default: () => s },
            ),
            ...(description
              ? [
                  h(
                    'span',
                    { class: 'text-body-sm text-neutral-subtle text-left max-w-full' },
                    description,
                  ),
                ]
              : []),
          ],
        );
      };
    },
  }),
);

const PendingRemediationRevokeNowCell = markRaw(
  defineComponent({
    name: 'ArM1PendingRemediationRevokeNowCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      const hubActions = inject(accessReviewHubRowActionsKey);
      return () => {
        const c = props.data as AccessReviewCampaign;
        return h(
          'div',
          {
            class: 'flex items-center justify-start gap-sm p-2 min-h-12',
            onClick: (e: MouseEvent) => e.stopPropagation(),
          },
          [
            h(Button, {
              label: 'Revoke Access',
              size: 'small',
              severity: 'secondary',
              variant: 'outlined',
              onClick: (e: MouseEvent) => {
                e.stopPropagation();
                hubActions?.requestRevokeNowRemediation(c);
              },
            }),
          ],
        );
      };
    },
  }),
);

const RowActionsCell = markRaw(
  defineComponent({
    name: 'ArM1RowActionsCell',
    props: {
      data: { type: Object, default: () => ({}) },
      campaignTab: {
        type: String as PropType<AccessReviewsCampaignHubTab>,
        required: true,
      },
    },
    setup(props) {
      const menuRef = ref<InstanceType<typeof Menu> | null>(null);
      const hubActions = inject(accessReviewHubRowActionsKey);

      async function copyCampaign(c: AccessReviewCampaign) {
        const line = `${c.name}\t${c.id}`;
        try {
          await navigator.clipboard.writeText(line);
          hubActions?.flashCopy('Campaign name and ID copied to clipboard.');
        } catch {
          hubActions?.flashCopy('Could not copy. Check browser clipboard permissions.');
        }
      }

      function buildMenuItems(c: AccessReviewCampaign): MenuItem[] {
        if (!hubActions) return [];
        if (c.status === 'completed') {
          return [
            { label: 'Edit', command: () => hubActions.openEdit(c) },
            { label: 'Copy', command: () => void copyCampaign(c) },
            { separator: true },
            {
              label: 'Delete',
              class: 'text-button-danger-base',
              command: () => hubActions.requestDelete(c),
            },
          ];
        }
        const items: MenuItem[] = [
          { label: 'Edit', command: () => hubActions.openEdit(c) },
          { label: 'Copy', command: () => void copyCampaign(c) },
        ];
        if (c.status === 'in_progress') {
          items.push({
            label: 'End campaign',
            command: () => hubActions.requestEndCampaignEarly(c),
          });
        }
        if (c.status === 'scheduled') {
          items.push({
            label: 'Start campaign',
            command: () => {
              c.status = 'in_progress';
            },
          });
        }
        items.push(
          { separator: true },
          {
            label: 'Delete',
            class: 'text-button-danger-base',
            command: () => hubActions.requestDelete(c),
          },
        );
        return items;
      }

      return () => {
        const c = props.data as AccessReviewCampaign;
        return h(
          'div',
          {
            class: 'flex items-center justify-end p-2 min-h-12',
            onClick: (e: MouseEvent) => e.stopPropagation(),
          },
          [
            h(
              Button,
              {
                variant: 'text',
                severity: 'secondary',
                size: 'small',
                'aria-label': 'Open row actions',
                onClick: (e: MouseEvent) => {
                  e.stopPropagation();
                  menuRef.value?.toggle(e);
                },
              },
              {
                icon: (iconProps: { class: string }) =>
                  h(EllipsisVerticalIcon, { class: iconProps.class }),
              },
            ),
            h(Menu, {
              ref: menuRef,
              model: buildMenuItems(c),
              popup: true,
            }),
          ],
        );
      };
    },
  }),
);

const hubColumns = markRaw([
  {
    field: 'name',
    header: 'Campaign',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AccessReviewCampaign }) => ({
      label: sp.data.name,
    }),
  },
  {
    field: 'scopeSummary',
    header: 'Scope',
    sortable: true,
    component: ScopeCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({ data: sp.data }),
  },
  {
    field: 'scheduleMode',
    header: 'Schedule',
    sortable: true,
    width: '260px',
    component: ScheduleCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({ data: sp.data }),
  },
  {
    field: 'cadence',
    header: 'Frequency',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AccessReviewCampaign }) => ({
      label: campaignFrequencyLabel(sp.data),
    }),
  },
  {
    field: 'completionPercent',
    header: 'Completion',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AccessReviewCampaign }) => ({
      label: `${sp.data.completionPercent}%`,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '240px',
    component: StatusToggleCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({ data: sp.data }),
  },
  {
    field: 'rowActions',
    header: '',
    sortable: false,
    width: '52px',
    component: RowActionsCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({
      data: sp.data,
      campaignTab: props.campaignTab,
    }),
  },
]);

/** Completed campaigns awaiting remediation batch — campaign rows with revocation mode badges. */
const pendingRemediationColumns = markRaw([
  {
    field: 'name',
    header: 'Campaign',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AccessReviewCampaign }) => ({
      label: sp.data.name,
    }),
  },
  {
    field: 'scopeSummary',
    header: 'Scope',
    sortable: true,
    component: ScopeCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({ data: sp.data }),
  },
  {
    field: 'usersInScopeTotal',
    header: 'Users',
    sortable: true,
    width: '100px',
    component: PendingRemediationUsersInScopeLinkCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({ data: sp.data }),
  },
  {
    field: 'completionPercent',
    header: 'Completion',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AccessReviewCampaign }) => ({
      label: `${sp.data.completionPercent}%`,
    }),
  },
  {
    field: 'revocationStatus',
    header: 'Remediation',
    sortable: false,
    width: '260px',
    component: RevocationStatusCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({ data: sp.data }),
  },
  {
    field: 'revokeNow',
    header: 'Actions',
    sortable: false,
    width: '140px',
    component: PendingRemediationRevokeNowCell,
    componentProps: (sp: { data: AccessReviewCampaign }) => ({ data: sp.data }),
  },
]);

const filteredCampaigns = computed(() => {
  let list = [...store.campaigns].filter((c) => matchesCampaignTab(c, props.campaignTab));
  if (appliedScopeFilter.value === 'application') {
    list = list.filter((c) => c.scopeType === 'application');
  } else if (appliedScopeFilter.value === 'group') {
    list = list.filter((c) => c.scopeType === 'group');
  }
  const applyStatusFilter = props.campaignTab !== 'pending_remediation';
  if (applyStatusFilter && appliedStatusFilter.value === 'enabled') {
    list = list.filter((c) => isCampaignEnabled(c));
  } else if (applyStatusFilter && appliedStatusFilter.value === 'disabled') {
    list = list.filter((c) => !isCampaignEnabled(c));
  }
  return list;
});

/** Pending Remediation augments rows with `usersInScopeTotal` so the Users column sorts correctly. */
const hubTableData = computed(() => {
  if (props.campaignTab !== 'pending_remediation') {
    return filteredCampaigns.value;
  }
  return filteredCampaigns.value.map((c) => ({
    ...c,
    usersInScopeTotal: totalUsersInCampaignForHub(c),
  }));
});

const hubTableColumns = computed(() => {
  if (props.campaignTab === 'pending_remediation') {
    return pendingRemediationColumns;
  }
  return hubColumns;
});

function openFilterDialog() {
  draftScopeFilter.value = appliedScopeFilter.value;
  draftStatusFilter.value = appliedStatusFilter.value;
  showFilterDialog.value = true;
}

function applyFilters() {
  appliedScopeFilter.value = draftScopeFilter.value;
  appliedStatusFilter.value = draftStatusFilter.value;
  showFilterDialog.value = false;
}

function cancelFilterDialog() {
  showFilterDialog.value = false;
}

function clearAllFilters() {
  appliedScopeFilter.value = 'all';
  draftScopeFilter.value = 'all';
  appliedStatusFilter.value = 'all';
  draftStatusFilter.value = 'all';
}

function removeFilterChip(chip: { id?: string }) {
  if (chip.id === 'scope') {
    appliedScopeFilter.value = 'all';
  } else if (chip.id === 'status') {
    appliedStatusFilter.value = 'all';
  }
}

const scopeFilterOptions = [
  { label: 'All types', value: 'all' as const },
  { label: 'Application', value: 'application' as const },
  { label: 'Group', value: 'group' as const },
];

const statusFilterOptions = [
  { label: 'All statuses', value: 'all' as const },
  { label: 'Enabled', value: 'enabled' as const },
  { label: 'Disabled', value: 'disabled' as const },
];

const activeFilterChips = computed(() => {
  const chips: { id: string; key: string; operator: string; value: string }[] = [];
  if (appliedScopeFilter.value !== 'all') {
    chips.push({
      id: 'scope',
      key: 'Scope type',
      operator: 'is',
      value: appliedScopeFilter.value === 'application' ? 'Application' : 'Group',
    });
  }
  if (appliedStatusFilter.value !== 'all' && props.campaignTab !== 'pending_remediation') {
    chips.push({
      id: 'status',
      key: 'Status',
      operator: 'is',
      value: appliedStatusFilter.value === 'enabled' ? 'Enabled' : 'Disabled',
    });
  }
  return chips;
});

const draftFilterCount = computed(() => {
  let n = 0;
  if (draftScopeFilter.value !== 'all') n += 1;
  if (props.campaignTab !== 'pending_remediation' && draftStatusFilter.value !== 'all') n += 1;
  return n;
});

function clearDraftFilters() {
  draftScopeFilter.value = 'all';
  draftStatusFilter.value = 'all';
}

function onRowClick(payload: { data: AccessReviewCampaign }) {
  emit('select', payload.data);
}

const hubSearchPlaceholder = computed(() => 'Search campaigns…');

const emptyFilterMessage = computed(() => 'No campaigns match your filters');

const emptyInitialTitle = computed(() =>
  props.campaignTab === 'pending_remediation'
    ? 'No campaigns pending remediation'
    : 'No campaigns yet',
);

const emptyInitialSubMessage = computed(() =>
  props.campaignTab === 'pending_remediation'
    ? 'Completed campaigns without a remediation run appear here.'
    : 'Create a campaign to get started',
);

/** Table column: Annually, Quarterly, Semi-annual, Monthly, or Ad-hoc. */
function campaignFrequencyLabel(c: AccessReviewCampaign): string {
  if (c.scheduleMode === 'one_time') return 'Ad-hoc';
  switch (c.cadence) {
    case 'annual':
      return 'Annually';
    case 'quarterly':
      return 'Quarterly';
    case 'semi_annual':
      return 'Semi-annual';
    case 'monthly':
      return 'Monthly';
    default:
      return '—';
  }
}

</script>

<template>
  <div class="flex flex-col h-full relative min-h-0 gap-md">
    <MessageNotification
      v-if="!store.globalSettings.featureEnabled"
      severity="warn"
      title="Access Reviews is disabled"
      detail="Enable the feature under Settings to run new campaigns."
      class="shrink-0"
    />
    <MessageNotification
      v-if="copyFlashMessage"
      severity="success"
      title="Clipboard"
      :detail="copyFlashMessage"
      class="shrink-0"
    />
    <DataTable
      :data="hubTableData"
      :columns="hubTableColumns"
      :loading="false"
      :paginator="true"
      :rows="10"
      data-key="id"
      scrollable
      scroll-height="flex"
      @row-click="onRowClick"
    >
      <template #toolbar>
        <DataTableToolbar
          :searchPlaceholder="hubSearchPlaceholder"
          :showAddButton="campaignTab === 'all'"
          addButtonLabel="Add campaign"
          :showFilterButton="true"
          :showSaveViewButton="false"
          :showRefreshButton="true"
          :showColumnsButton="false"
          :showDownloadButton="false"
          :activeFilters="activeFilterChips"
          :maxVisibleFilters="5"
          @add="emit('create')"
          @filter="openFilterDialog"
          @clear-all="clearAllFilters"
          @filter-remove="removeFilterChip"
          @refresh="() => {}"
        />
      </template>
      <template #empty>
        <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
          <span class="text-body-md">{{ emptyFilterMessage }}</span>
        </div>
      </template>
      <template #initialEmpty>
        <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
          <span class="text-body-md">{{ emptyInitialTitle }}</span>
          <span class="text-body-sm mt-1">{{ emptyInitialSubMessage }}</span>
        </div>
      </template>
    </DataTable>

    <Dialog
      v-model:visible="showRevokeNowDialog"
      :draggable="false"
      modal
      header="Revoke Access"
      :style="revokeNowDialogStyle"
      :content-style="revokeNowDialogContentStyle"
      @update:visible="(v: boolean) => !v && cancelRevokeNowDialog()"
    >
      <template #closeicon>
        <XMarkIcon />
      </template>

      <div
        class="flex flex-col gap-md"
        :class="{ 'min-h-0 flex-1': revokeNowDialogFullPage }"
      >
        <p class="text-body-md text-neutral-base">
          Users who received a revoke decision from an approver during the campaign will be removed from the user
          group(s). This action removes all access to resources granted through the user group(s).
        </p>
        <section
          v-if="revokeNowRemovals.length"
          class="flex min-h-0 flex-col gap-xs"
          :class="{ 'min-h-0 flex-1': revokeNowDialogFullPage }"
          aria-labelledby="revoke-users-heading"
        >
          <h2 id="revoke-users-heading" class="text-body-sm font-medium text-neutral-base">
            Users to be removed
          </h2>
          <div
            class="min-h-0 overflow-y-auto overscroll-contain rounded-md border border-neutral-default_solid outline-none"
            :class="revokeNowDialogFullPage ? 'flex-1' : 'max-h-48'"
            tabindex="0"
            :aria-label="`Users to be removed: ${revokeNowRemovals.length} people. Use arrow keys to scroll.`"
          >
            <ul class="m-0 list-none space-y-0 p-0" role="list">
              <li
                v-for="(row, idx) in revokeNowRemovals"
                :key="idx"
                class="border-neutral-default_solid border-b px-2 py-1.5 last:border-b-0"
                role="listitem"
              >
                <div class="text-body-sm font-medium leading-tight text-neutral-base">{{ row.userName }}</div>
                <div class="mt-0.5 pl-2 text-body-sm leading-snug text-neutral-subtle">
                  <span class="text-neutral-subtle">Groups: </span>
                  <span class="text-neutral-base">{{ row.groups.join(' · ') }}</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <p v-else class="text-body-sm text-neutral-subtle">
          No revoke decisions are present in the playground data for this campaign. You can still run remediation to
          simulate results.
        </p>
      </div>

      <template #footer>
        <div
          class="flex w-full justify-end gap-sm"
          :class="{ 'border-t border-neutral-default_solid pt-md': revokeNowDialogFullPage }"
        >
          <Button label="Cancel" severity="secondary" variant="text" @click="cancelRevokeNowDialog" />
          <Button label="Revoke now" @click="confirmRevokeNowRemediation" />
        </div>
      </template>
    </Dialog>

    <Dialog
      v-model:visible="showFilterDialog"
      :draggable="false"
      modal
      header="Apply filters"
      :style="{ width: '560px' }"
      @update:visible="!$event && cancelFilterDialog()"
    >
      <template #closeicon>
        <XMarkIcon />
      </template>

      <div class="flex flex-col gap-md">
        <FormField label="Scope type">
          <template #default="{ inputId }">
            <Select
              :id="inputId"
              :model-value="draftScopeFilter"
              :options="scopeFilterOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full!"
              @update:model-value="draftScopeFilter = $event"
            />
          </template>
        </FormField>
        <FormField v-if="campaignTab !== 'pending_remediation'" label="Status">
          <template #default="{ inputId }">
            <Select
              :id="inputId"
              :model-value="draftStatusFilter"
              :options="statusFilterOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full!"
              @update:model-value="draftStatusFilter = $event"
            />
          </template>
        </FormField>
      </div>

      <template #footer>
        <div class="flex items-center flex-1 min-w-0">
          <span class="text-body-sm text-neutral-subtle">
            {{ draftFilterCount }} {{ draftFilterCount === 1 ? 'filter' : 'filters' }} selected
          </span>
        </div>
        <div class="flex gap-sm shrink-0">
          <Button
            label="Cancel"
            severity="secondary"
            variant="text"
            @click="cancelFilterDialog"
          />
          <Button label="Clear all" severity="secondary" variant="outlined" @click="clearDraftFilters" />
          <Button label="Apply" @click="applyFilters" />
        </div>
      </template>
    </Dialog>

    <SeverityDialog
      v-model:visible="showDeleteCampaignDialog"
      dialogTitle="Delete campaign"
      variant="sev2"
      messageTitle="Warning"
      messageContent="This removes the campaign from the playground dataset."
      :showMessageIcon="true"
      :dialogContent="deleteDialogMarkdown"
      actionText="Delete"
      cancelText="Cancel"
      @action="confirmDeleteCampaign"
      @cancel="cancelDeleteCampaignDialog"
    />

    <SeverityDialog
      v-model:visible="showEndCampaignEarlyDialog"
      dialogTitle="End campaign early"
      variant="sev2"
      messageTitle="Campaign in progress"
      messageContent="Reviewers may still have pending work. This completes the campaign and triggers mock remediation in the playground."
      :showMessageIcon="true"
      :dialogContent="endCampaignEarlyDialogMarkdown"
      actionText="End campaign"
      cancelText="Cancel"
      @action="confirmEndCampaignEarly"
      @cancel="cancelEndCampaignEarlyDialog"
    />
  </div>
</template>
