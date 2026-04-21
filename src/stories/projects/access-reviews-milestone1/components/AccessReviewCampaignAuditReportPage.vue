<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';
import type { AccessReviewCampaign } from '../types';
import {
  buildAccessReviewAuditReport,
  buildCanonicalReportPayloadForHash,
  sha256HexUtf8,
  type AccessReviewAuditReportPayload,
} from '../accessReviewAuditReport';

defineOptions({ name: 'AccessReviewCampaignAuditReportPage' });

const props = defineProps<{
  campaign: AccessReviewCampaign;
}>();

const emit = defineEmits<{
  back: [];
}>();

const documentHash = ref('');
const hashLoading = ref(false);
const hashError = ref('');

const payload = computed((): AccessReviewAuditReportPayload => buildAccessReviewAuditReport(props.campaign));

async function computeDocumentHash() {
  hashLoading.value = true;
  hashError.value = '';
  try {
    const p = buildAccessReviewAuditReport(props.campaign);
    const canonical = buildCanonicalReportPayloadForHash(p);
    documentHash.value = await sha256HexUtf8(canonical);
  } catch {
    hashError.value = 'Unable to compute document hash in this environment.';
    documentHash.value = '';
  } finally {
    hashLoading.value = false;
  }
}

onMounted(() => {
  void computeDocumentHash();
});

watch(
  () => props.campaign.id,
  () => {
    void computeDocumentHash();
  },
);
</script>

<template>
  <div class="flex flex-col gap-lg w-full max-w-5xl">
    <div class="flex flex-col gap-xs">
      <div class="flex items-center gap-sm">
        <Button
          label="Back to campaign"
          severity="secondary"
          variant="outlined"
          @click="emit('back')"
        >
          <template #icon="iconProps">
            <ArrowLeftIcon :class="iconProps.class" />
          </template>
        </Button>
      </div>
      <h1 class="text-heading-2 text-neutral-base m-0">Access review audit report</h1>
      <p class="text-body-sm text-neutral-subtle m-0">
        {{ payload.campaignName }} · <span class="text-neutral-base">{{ payload.campaignId }}</span>
      </p>
    </div>

    <div class="flex flex-col gap-lg">
      <section class="flex flex-col gap-md">
        <h2 class="text-heading-3 text-neutral-base m-0">Report generation &amp; integrity</h2>
        <p class="text-body-md text-neutral-subtle m-0">
          {{ payload.integrityDescription }}
        </p>
        <div
          class="rounded-md border border-neutral-default_solid bg-neutral-surface_raised p-md flex flex-col gap-sm"
        >
          <DetailsKeyValue label="Generated at" :value="payload.generatedAtDisplayUtc" />
          <DetailsKeyValue label="Algorithm" :value="payload.algorithm" />
          <div class="flex flex-col gap-xs min-w-0">
            <span class="text-body-sm text-neutral-subtle">Document hash</span>
            <code
              v-if="hashLoading"
              class="text-body-sm text-neutral-subtle font-mono break-all"
              aria-live="polite"
            >
              Computing SHA-256…
            </code>
            <code
              v-else-if="hashError"
              class="text-body-sm text-button-danger-base font-mono break-all"
            >
              {{ hashError }}
            </code>
            <code v-else class="text-body-sm text-neutral-base font-mono break-all">{{
              documentHash
            }}</code>
          </div>
        </div>
      </section>

      <Divider />

      <section class="flex flex-col gap-md pb-lg">
        <h2 class="text-heading-3 text-neutral-base m-0">Review outcomes by user and group</h2>
        <p class="text-body-md text-neutral-subtle m-0">
          {{ payload.outcomesDescription }}
        </p>

        <div
          v-for="(user, uIdx) in payload.users"
          :key="`${user.email}-${uIdx}`"
          class="rounded-md border border-neutral-default_solid overflow-hidden bg-neutral-surface"
        >
          <div
            class="px-md py-sm bg-neutral-surface_raised border-b border-neutral-default_solid"
          >
            <span class="text-body-md-bold text-neutral-base">{{ user.name }}</span>
            <span class="text-body-md text-neutral-subtle"> · {{ user.email }}</span>
          </div>

          <div class="p-md flex flex-col gap-sm border-b border-neutral-default_solid">
            <DetailsKeyValue label="Company" :value="user.company" />
            <DetailsKeyValue label="Department" :value="user.department" />
            <DetailsKeyValue label="Title" :value="user.title" />
            <DetailsKeyValue label="Manager" :value="user.manager" />
            <DetailsKeyValue label="Subject decided at" :value="user.subjectDecidedAtUtc" />
          </div>

          <div
            v-for="(outcome, oIdx) in user.outcomes"
            :key="`${user.email}-${outcome.accessTarget}-${oIdx}`"
            class="p-md border-b border-neutral-default_solid last:border-b-0 flex flex-col gap-md"
          >
            <div class="flex flex-wrap items-start justify-between gap-md">
              <div class="flex flex-col gap-xs min-w-0 flex-1">
                <span class="text-body-sm text-neutral-subtle">Access target</span>
                <span class="text-body-md-bold text-neutral-base">{{ outcome.accessTarget }}</span>
              </div>
              <div class="flex flex-col gap-xs shrink-0">
                <span class="text-body-sm text-neutral-subtle">Decision</span>
                <span
                  class="text-body-md-bold"
                  :class="
                    outcome.decision === 'revoke'
                      ? 'text-button-danger-base'
                      : 'text-success-base'
                  "
                >
                  {{ outcome.decision === 'revoke' ? 'Revoke' : 'Approve' }}
                </span>
              </div>
              <div class="flex flex-col gap-xs shrink-0">
                <span class="text-body-sm text-neutral-subtle">Status</span>
                <Tag value="Completed" severity="success" />
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-md">
              <div class="lg:col-span-5 flex flex-col gap-md">
                <span class="text-body-md-bold text-neutral-base">Reviewer details</span>
                <div
                  v-for="(rev, rIdx) in outcome.reviewers"
                  :key="rIdx"
                  class="flex flex-col gap-xs rounded-sm border border-neutral-default_solid p-sm bg-neutral-surface_raised"
                >
                  <span class="text-body-md text-neutral-base">
                    {{ rev.name }}
                    <span class="text-body-sm text-neutral-subtle">({{ rev.role }})</span>
                  </span>
                  <span class="text-body-sm text-neutral-subtle">
                    Decision recorded · {{ rev.decisionRecordedUtc }}
                  </span>
                  <span class="text-body-xs text-neutral-subtle break-all font-mono">
                    Directory Insights log ID · {{ rev.directoryInsightsLogId }}
                  </span>
                </div>
              </div>
              <div class="lg:col-span-4 flex flex-col gap-xs min-w-0">
                <span class="text-body-md-bold text-neutral-base">Comments</span>
                <div class="flex flex-col gap-sm">
                  <p
                    v-for="(rev, rIdx) in outcome.reviewers"
                    :key="`c-${rIdx}`"
                    class="text-body-md text-neutral-base m-0 whitespace-pre-wrap"
                  >
                    <span class="text-body-sm text-neutral-subtle">{{ rev.name }}: </span>
                    {{ rev.comment ?? '—' }}
                  </p>
                </div>
              </div>
              <div class="lg:col-span-3 flex flex-col gap-xs min-w-0">
                <span class="text-body-md-bold text-neutral-base">Final audit log</span>
                <span class="text-body-sm text-neutral-subtle">Executed · {{ outcome.finalExecutedUtc }}</span>
                <span class="text-body-xs text-neutral-subtle break-all font-mono">{{
                  outcome.finalLogId
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
