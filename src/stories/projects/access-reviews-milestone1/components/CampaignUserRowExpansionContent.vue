<script setup lang="ts">
import { computed } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import {
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  MinusCircleIcon,
  PencilSquareIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import type {
  CampaignReviewGroupApproverRow,
  CampaignReviewUserExpandedMeta,
  CampaignReviewUserRow,
  GroupReviewDecisionState,
} from '../types';

defineOptions({ name: 'CampaignUserRowExpansionContent' });

const props = defineProps<{
  row: CampaignReviewUserRow;
}>();

const meta = computed((): CampaignReviewUserExpandedMeta => {
  return (
    props.row.expandedMeta ?? {
      managerName: '—',
      department: props.row.department,
      lastAccessedDisplay: '—',
      accessGrantedDisplay: '—',
    }
  );
});

function decisionTagSeverity(
  d: GroupReviewDecisionState,
): 'success' | 'danger' | 'secondary' {
  if (d === 'keep') return 'success';
  if (d === 'revoke') return 'danger';
  return 'secondary';
}

function decisionTagLabel(d: GroupReviewDecisionState): string {
  if (d === 'keep') return 'Approve';
  if (d === 'revoke') return 'Revoke';
  return 'Pending';
}

function approverDecisionStatusKey(
  approver: CampaignReviewGroupApproverRow,
): 'keep' | 'revoke' | 'pending' {
  if (!approver.reviewerDecided || approver.groupDecision === 'pending') return 'pending';
  if (approver.groupDecision === 'revoke') return 'revoke';
  return 'keep';
}
</script>

<template>
  <div class="flex flex-col gap-lg px-lg py-lg bg-neutral-surface_raised border-t border-neutral-default_solid">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-md gap-x-lg">
      <div class="flex flex-col gap-0 min-w-0">
        <span class="text-body-md-bold text-neutral-base">Manager</span>
        <span class="text-body-sm text-neutral-subtle">{{ meta.managerName }}</span>
      </div>
      <div class="flex flex-col gap-0 min-w-0">
        <span class="text-body-md-bold text-neutral-base">Department</span>
        <span class="text-body-sm text-neutral-subtle">{{ meta.department }}</span>
      </div>
      <div class="flex flex-col gap-0 min-w-0">
        <span class="text-body-md-bold text-neutral-base">Last accessed</span>
        <span class="text-body-sm text-neutral-subtle">{{ meta.lastAccessedDisplay }}</span>
      </div>
      <div class="flex flex-col gap-0 min-w-0">
        <span class="text-body-md-bold text-neutral-base">Access granted</span>
        <span class="text-body-sm text-neutral-subtle">{{ meta.accessGrantedDisplay }}</span>
      </div>
    </div>

    <Divider />

    <div class="flex flex-col gap-sm">
      <h3 class="text-body-md-bold text-neutral-base m-0">Access review by group</h3>
      <p class="text-body-sm text-neutral-subtle m-0">
        Decisions are recorded per group membership included in this campaign.
      </p>
    </div>

    <div class="flex flex-col gap-md">
      <div
        v-for="(group, idx) in props.row.groupDetails"
        :key="`${group.groupName}-${idx}`"
        class="rounded-md border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md"
      >
        <div class="flex flex-wrap items-start justify-between gap-md">
          <div class="flex items-center gap-sm min-w-0">
            <UserGroupIcon class="size-5 shrink-0 text-neutral-subtle" aria-hidden="true" />
            <span class="text-body-md-bold text-neutral-base truncate">{{ group.groupName }}</span>
          </div>

          <div class="flex flex-wrap items-center gap-sm shrink-0">
            <template v-if="group.reviewerDecided">
              <Tag
                :value="decisionTagLabel(group.groupDecision)"
                :severity="decisionTagSeverity(group.groupDecision)"
              />
              <Divider layout="vertical" class="my-0.5! h-6 shrink-0 self-center" />
              <Button
                label="Override"
                severity="secondary"
                variant="outlined"
                size="small"
              >
                <template #icon="iconProps">
                  <PencilSquareIcon :class="iconProps.class" />
                </template>
              </Button>
            </template>
            <template v-else>
              <Tag value="Pending" severity="secondary" />
              <Divider layout="vertical" class="my-0.5! h-6 shrink-0 self-center" />
              <Button
                label="Approve"
                severity="secondary"
                variant="outlined"
                size="small"
                aria-label="Approve access"
              >
                <template #icon="iconProps">
                  <CheckIcon :class="iconProps.class" />
                </template>
              </Button>
              <Button
                label="Revoke"
                severity="secondary"
                variant="outlined"
                size="small"
                aria-label="Revoke access"
              >
                <template #icon="iconProps">
                  <XMarkIcon :class="iconProps.class" />
                </template>
              </Button>
            </template>
          </div>
        </div>

        <div
          class="flex flex-col gap-md min-w-0 mt-md border-t border-neutral-default_solid pt-md"
        >
          <div
            v-for="(approver, aidx) in group.approvers"
            :key="`${group.groupName}-approver-${aidx}`"
            class="flex flex-col gap-md"
            :class="{ 'pt-md border-t border-neutral-default_solid': aidx > 0 }"
          >
            <div class="flex flex-wrap gap-md items-start">
              <div
                class="shrink-0 flex items-start justify-center pt-0.5"
                :aria-label="`Review status: ${decisionTagLabel(approver.groupDecision)}`"
                role="img"
              >
                <CheckCircleIcon
                  v-if="approverDecisionStatusKey(approver) === 'keep'"
                  class="size-4 text-success-base"
                  aria-hidden="true"
                />
                <MinusCircleIcon
                  v-else-if="approverDecisionStatusKey(approver) === 'revoke'"
                  class="size-4 text-neutral-base"
                  aria-hidden="true"
                />
                <ClockIcon
                  v-else
                  class="size-4 text-neutral-base"
                  aria-hidden="true"
                />
              </div>
              <div class="flex flex-col gap-xs min-w-0 flex-1">
                <span class="text-body-md-bold text-neutral-base">{{ approver.name }}</span>
                <span class="text-body-sm text-neutral-subtle">{{ approver.role }}</span>

                <div
                  v-if="approver.reviewerDecided && approver.groupDecision !== 'pending'"
                  class="flex flex-col gap-sm mt-sm pt-sm border-t border-neutral-default_solid"
                >
                  <div class="flex flex-wrap items-center gap-sm">
                    <Tag
                      :value="decisionTagLabel(approver.groupDecision)"
                      :severity="decisionTagSeverity(approver.groupDecision)"
                    />
                    <span
                      v-if="approver.decidedAtDisplay"
                      class="text-body-sm text-neutral-subtle"
                    >
                      {{ approver.decidedAtDisplay }}
                    </span>
                  </div>
                  <blockquote
                    v-if="approver.justification"
                    class="m-0 pl-md border-l-2 border-neutral-default_solid text-body-md text-neutral-base italic"
                  >
                    {{ approver.justification }}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
