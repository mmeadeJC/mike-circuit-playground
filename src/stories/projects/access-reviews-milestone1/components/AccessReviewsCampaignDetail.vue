<script setup lang="ts">
import { computed, inject, nextTick, onUnmounted, ref, watch } from 'vue';
import {
  CollapsiblePanel,
  FormField,
  MessageNotification,
  SeverityDialog,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Select from 'primevue/select';
import Tag from 'primevue/tag';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  PencilSquareIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';
import type { AccessReviewCampaign } from '../types';
import {
  completionCriteriaLabels,
  noResponseGroupActionLabels,
  remediationModeLabels,
  remediationTimelineRadioLabels,
  reviewerAssignmentLabels,
  revokeGroupActionLabels,
} from '../types';
import type { AccessReviewM1Store } from '../accessReviewM1Store';
import { ACCESS_REVIEW_M1_STORE_KEY } from '../accessReviewM1Store';
import {
  buildAccessReviewAuditReport,
  buildCanonicalReportPayloadForHash,
  formatAuditReportAsPlainText,
  sha256HexUtf8,
} from '../accessReviewAuditReport';
import { inclusiveDurationDays } from '../campaignDateUtils';
import { displaySlackChannelFromCampaign, labelForFallbackApprover } from '../mockData';
import AccessReviewsCampaignUsersPanel from './AccessReviewsCampaignUsersPanel.vue';

defineOptions({ name: 'AccessReviewsCampaignDetail' });

const props = defineProps<{
  campaign: AccessReviewCampaign;
  /** When opening from Pending Remediation (user row), land on Users in scope. */
  initialDetailTab?: 'configuration' | 'users';
}>();

const emit = defineEmits<{
  back: [];
  edit: [payload: { campaign: AccessReviewCampaign; initialWizardStep: '1' | '2' | '3' }];
  'view-report': [];
}>();

const store = inject(ACCESS_REVIEW_M1_STORE_KEY) as AccessReviewM1Store;

const showEndDialog = ref(false);
const detailTab = ref<'configuration' | 'users'>('configuration');
const collapsedScope = ref(false);
const collapsedReviewers = ref(false);
const reportFlash = ref('');
let reportFlashTimer: ReturnType<typeof setTimeout> | undefined;

const reportActionOptions = [
  { label: 'View report', value: 'view' as const },
  { label: 'Export report', value: 'export' as const },
];

const reportSelectValue = ref<'view' | 'export' | null>(null);

function showReportMessage(detail: string) {
  if (reportFlashTimer) clearTimeout(reportFlashTimer);
  reportFlash.value = detail;
  reportFlashTimer = setTimeout(() => {
    reportFlash.value = '';
    reportFlashTimer = undefined;
  }, 4500);
}

function viewReport() {
  emit('view-report');
}

async function exportReport() {
  const payload = buildAccessReviewAuditReport(props.campaign);
  const hash = await sha256HexUtf8(buildCanonicalReportPayloadForHash(payload));
  const text = formatAuditReportAsPlainText(payload, hash);
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `access-review-audit-${props.campaign.id}.txt`;
  a.rel = 'noopener';
  a.click();
  URL.revokeObjectURL(url);
  showReportMessage(`Exported audit report for “${props.campaign.name}” (plain text).`);
}

async function handleReportSelect(value: 'view' | 'export' | string | null) {
  if (value !== 'view' && value !== 'export') {
    reportSelectValue.value = null;
    return;
  }
  reportSelectValue.value = value;
  if (value === 'view') viewReport();
  else await exportReport();
  void nextTick(() => {
    reportSelectValue.value = null;
  });
}

onUnmounted(() => {
  if (reportFlashTimer) clearTimeout(reportFlashTimer);
});

watch(
  () => [props.campaign.id, props.initialDetailTab] as const,
  ([, tab]) => {
    detailTab.value = tab ?? 'configuration';
  },
  { immediate: true },
);

function confirmEndCampaign() {
  store.endCampaign(props.campaign.id);
  showEndDialog.value = false;
}

const scopeTypeLabel = computed(() =>
  props.campaign.scopeType === 'application' ? 'Application access' : 'Group membership',
);

const approverTargetsDisplay = computed(() => {
  const specs = props.campaign.approverSpecifications;
  if (!specs?.length) return '';
  return specs
    .map((s) => {
      let line = `${reviewerAssignmentLabels[s.assignment]}: ${s.spec.trim() ? s.spec.trim() : '—'}`;
      if (s.assignment === 'users_manager') {
        const fb = labelForFallbackApprover(s.managerFallbackApprover);
        if (fb) line += ` · Fallback: ${fb}`;
      }
      return line;
    })
    .join(' · ');
});

const showScheduledEditActions = computed(() => props.campaign.status === 'scheduled');

const remediationTimingDisplay = computed(() => {
  const c = props.campaign;
  const opt = c.remediationTimeline;
  if (opt != null) {
    const label = remediationTimelineRadioLabels[opt];
    if (opt === 'custom_after_close') {
      const iso = c.remediationCustomAfterCloseAtIso?.trim() ?? c.revocationScheduledAtIso?.trim();
      if (iso) {
        const d = new Date(iso);
        if (!Number.isNaN(d.getTime())) {
          const datePart = d.toLocaleDateString('en-US', { dateStyle: 'medium' });
          const timePart = d.toLocaleTimeString('en-US', { timeStyle: 'short' });
          return `${label} · ${datePart} @ ${timePart}`;
        }
      }
    }
    return label;
  }
  const mode = c.revocationTimingMode ?? 'campaign_end';
  const iso = c.revocationScheduledAtIso?.trim();
  if (mode === 'scheduled' && iso) {
    const d = new Date(iso);
    if (!Number.isNaN(d.getTime())) {
      const datePart = d.toLocaleDateString('en-US', { dateStyle: 'medium' });
      const timePart = d.toLocaleTimeString('en-US', { timeStyle: 'short' });
      return `${datePart} @ ${timePart}`;
    }
    return iso;
  }
  return 'End of campaign (remediation batch)';
});

const campaignDurationDisplay = computed(() => {
  const c = props.campaign;
  const n = c.campaignDurationDays ?? inclusiveDurationDays(c.startDate, c.dueDate);
  return `${n} calendar days`;
});

const reminderNotificationsDisplay = computed(() => {
  const c = props.campaign;
  const freq = c.reminderFrequency;
  const email = c.emailNotificationsEnabled ? 'Email on' : 'Email off';
  const parts: string[] = [`${freq}`, email];
  if (c.slackNotificationsEnabled) {
    const slackMode = c.slackReviewerNotificationMode ?? 'direct_message';
    if (slackMode === 'channel') {
      const ch = displaySlackChannelFromCampaign(c);
      parts.push(`Slack: channel (${ch})`);
    } else {
      parts.push('Slack: direct messages to approvers');
    }
  }
  return parts.join(' · ');
});
</script>

<template>
  <div class="flex flex-col gap-lg min-h-0 flex-1">
    <div class="flex items-center gap-sm">
      <Button
        label="Back to campaigns"
        severity="secondary"
        variant="outlined"
        @click="emit('back')"
      >
        <template #icon="iconProps">
          <ArrowLeftIcon :class="iconProps.class" />
        </template>
      </Button>
    </div>

    <MessageNotification
      v-if="reportFlash"
      severity="info"
      title="Report"
      :detail="reportFlash"
      class="shrink-0"
    />

    <div class="flex flex-col gap-xs">
      <div class="flex flex-wrap items-start justify-between gap-md">
        <h1 class="text-heading-2 text-neutral-base min-w-0 flex-1">{{ campaign.name }}</h1>
        <FormField
          v-if="campaign.status === 'completed'"
          label="Report options"
          class="shrink-0 min-w-63.5 max-w-full"
        >
          <template #default="{ inputId }">
            <Select
              :id="inputId"
              :model-value="reportSelectValue"
              :options="reportActionOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select report action…"
              class="w-full!"
              @update:model-value="handleReportSelect"
            />
          </template>
        </FormField>
        <Button
          v-else-if="campaign.status === 'in_progress'"
          label="End campaign early"
          severity="danger"
          class="shrink-0"
          @click="showEndDialog = true"
        >
          <template #icon="iconProps">
            <ShieldExclamationIcon :class="iconProps.class" />
          </template>
        </Button>
      </div>
      <div class="flex flex-wrap items-center gap-sm">
        <Tag
          :value="scopeTypeLabel"
          :severity="campaign.scopeType === 'application' ? 'info' : 'success'"
        />
        <Tag
          :value="campaign.status === 'in_progress' ? 'In progress' : campaign.status === 'completed' ? 'Completed' : 'Not started'"
          :severity="campaign.status === 'in_progress' ? 'warn' : campaign.status === 'completed' ? 'success' : 'info'"
        />
      </div>
      <p
        v-if="campaign.status === 'in_progress'"
        class="text-body-sm text-neutral-subtle m-0 max-w-3xl"
      >
        Triggers final remediation for all items marked revoke (simulated).
      </p>
    </div>

    <div class="flex flex-col flex-1 min-h-0">
      <div class="px-6 py-3 border-b border-neutral-default_solid shrink-0 bg-neutral-surface">
        <div
          class="inline-flex rounded-sm border border-neutral-default_solid overflow-hidden"
          role="tablist"
          aria-label="Campaign detail sections"
        >
          <Button
            label="Campaign configuration"
            severity="secondary"
            :variant="detailTab === 'configuration' ? 'filled' : 'outlined'"
            class="rounded-none border-0 shadow-none min-w-0"
            role="tab"
            :aria-selected="detailTab === 'configuration'"
            @click="detailTab = 'configuration'"
          />
          <Button
            label="Users in scope"
            severity="secondary"
            :variant="detailTab === 'users' ? 'filled' : 'outlined'"
            class="rounded-none border-0 shadow-none min-w-0 -ms-px"
            role="tab"
            :aria-selected="detailTab === 'users'"
            @click="detailTab = 'users'"
          />
        </div>
      </div>
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden pt-md">
        <div
          v-show="detailTab === 'configuration'"
          class="flex flex-col gap-lg p-0 min-h-0 overflow-y-auto"
        >
          <MessageNotification
            v-if="campaign.revocationSummary"
            severity="success"
            title="Remediation completed"
            :detail="`Removed ${campaign.revocationSummary.usersRemovedFromApp} application assignments and ${campaign.revocationSummary.usersRemovedFromGroups} group memberships (simulated).`"
          />

          <CollapsiblePanel v-model:collapsed="collapsedScope" header="Scope & timeline" toggleable>
      <template #titleicon="iconProps">
        <ClipboardDocumentListIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>
      <template v-if="showScheduledEditActions" #actions>
        <!-- Wizard step 1 Scope — schedule/reminders are step 2 (Next) -->
        <Button
          label="Edit"
          severity="secondary"
          variant="outlined"
          size="small"
          @click="emit('edit', { campaign, initialWizardStep: '1' })"
        >
          <template #icon="iconProps">
            <PencilSquareIcon :class="iconProps.class" />
          </template>
        </Button>
      </template>
      <div class="flex flex-col gap-md">
        <DetailsKeyValue label="Scope" :value="campaign.scopeSummary" />
        <DetailsKeyValue
          v-if="campaign.scopeType === 'application' && campaign.applicationIncludedGroups?.length"
          label="Included user groups"
          :value="campaign.applicationIncludedGroups.join(', ')"
        />
        <DetailsKeyValue label="Campaign duration" :value="campaignDurationDisplay" />
        <DetailsKeyValue
          label="Schedule"
          :value="campaign.scheduleMode === 'one_time' ? 'One-time' : `Recurring · ${campaign.cadence?.replace('_', ' ') ?? ''}`"
        />
        <DetailsKeyValue
          v-if="campaign.nextRunDisplay"
          label="Next run"
          :value="campaign.nextRunDisplay"
        />
        <DetailsKeyValue label="Reminders & channels" :value="reminderNotificationsDisplay" />
      </div>
    </CollapsiblePanel>

    <CollapsiblePanel v-model:collapsed="collapsedReviewers" header="Reviewer assignments & completion" toggleable>
      <template #titleicon="iconProps">
        <UserGroupIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>
      <template v-if="showScheduledEditActions" #actions>
        <!-- Wizard step 3 Reviewers & policy -->
        <Button
          label="Edit"
          severity="secondary"
          variant="outlined"
          size="small"
          @click="emit('edit', { campaign, initialWizardStep: '3' })"
        >
          <template #icon="iconProps">
            <PencilSquareIcon :class="iconProps.class" />
          </template>
        </Button>
      </template>
      <div class="flex flex-col gap-md">
        <DetailsKeyValue
          label="Approver type"
          :value="reviewerAssignmentLabels[campaign.reviewerAssignment]"
        />
        <DetailsKeyValue
          v-if="approverTargetsDisplay"
          label="Approver targets"
          :value="approverTargetsDisplay"
        />
        <DetailsKeyValue
          v-if="campaign.reviewers.length > 1"
          label="Approver requirement"
          :value="completionCriteriaLabels[campaign.completionCriteria]"
        />
        <DetailsKeyValue
          label="Justification"
          :value="campaign.mandatoryJustification ? 'Required for approve and revoke' : 'Optional'"
        />
        <DetailsKeyValue
          label="Remediation"
          :value="remediationModeLabels[campaign.revocationMode]"
        />
        <DetailsKeyValue label="Remediation timing" :value="remediationTimingDisplay" />
        <div
          v-if="campaign.remediationPerGroupSettings?.length"
          class="flex flex-col gap-sm rounded-md border border-neutral-default_solid p-md"
        >
          <span class="text-body-sm-bold text-neutral-base">Per user group</span>
          <ul class="flex flex-col gap-sm list-none p-0 m-0">
            <li
              v-for="row in campaign.remediationPerGroupSettings"
              :key="row.groupName"
              class="text-body-md text-neutral-base"
            >
              <span class="text-body-md-bold text-neutral-base">{{ row.groupName }}</span>
              · Revoke:
              {{ revokeGroupActionLabels[row.revokeAction] }} · No response:
              {{ noResponseGroupActionLabels[row.noResponseAction] }}
            </li>
          </ul>
        </div>
        <div class="rounded-md border border-neutral-default_solid p-md flex flex-col gap-sm">
          <span class="text-body-sm text-neutral-subtle">Overall completion</span>
          <div class="flex items-center gap-sm">
            <span class="text-heading-3 text-neutral-base">{{ campaign.completionPercent }}%</span>
            <Tag :value="`${campaign.completionPercent}% complete`" severity="info" />
          </div>
        </div>
        <ul class="flex flex-col gap-sm list-none p-0 m-0">
          <li
            v-for="(r, idx) in campaign.reviewers"
            :key="idx"
            class="flex justify-between gap-md text-body-md text-neutral-base border-b border-neutral-default_solid pb-sm last:border-0"
          >
            <span>{{ r.name }}</span>
            <span class="text-neutral-subtle">{{ r.role }} · {{ r.completed }}/{{ r.total }}</span>
          </li>
        </ul>
      </div>
    </CollapsiblePanel>
        </div>

        <div
          v-show="detailTab === 'users'"
          class="flex flex-col flex-1 min-h-0 p-0 gap-sm overflow-hidden"
        >
          <p class="text-body-sm text-neutral-subtle m-0 shrink-0">
            Directory users whose group memberships are included in this campaign’s review.
          </p>
          <div class="flex flex-col flex-1 min-h-0">
            <AccessReviewsCampaignUsersPanel :key="campaign.id" :campaign="campaign" />
          </div>
        </div>
      </div>
    </div>

    <SeverityDialog
      v-model:visible="showEndDialog"
      dialogTitle="End campaign before due date?"
      variant="sev2"
      messageTitle="Final remediation will run"
      messageContent="Ending now closes the campaign and runs batch remediation for access marked revoke."
      :showMessageIcon="true"
      dialogContent="All **revoke** decisions will be applied when the campaign ends. This playground simulates the remediation engine."
      actionText="End campaign"
      cancelText="Cancel"
      @action="confirmEndCampaign"
      @cancel="showEndDialog = false"
    />

  </div>
</template>
