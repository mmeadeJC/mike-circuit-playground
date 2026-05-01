<script setup lang="ts">
import { provide } from 'vue';
import { PageHeader } from '@jumpcloud/circuit/components';
import AdminTopBar from '@/components/AdminTopBar.vue';
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline';
import { markRaw } from 'vue';
import {
  ACCESS_REVIEW_M1_STORE_KEY,
  createAccessReviewM1Store,
} from '../accessReviewM1Store';
import AccessReviewsReviewerPortal from '../components/AccessReviewsReviewerPortal.vue';

defineOptions({ name: 'AccessReviewsReviewerPage' });

const store = createAccessReviewM1Store();
provide(ACCESS_REVIEW_M1_STORE_KEY, store);

const headerIcon = markRaw(ClipboardDocumentCheckIcon);
</script>

<template>
  <div class="flex h-screen overflow-hidden flex-col bg-neutral-surface">
    <AdminTopBar />
    <PageHeader
      title="My access reviews"
      subtitle="Reviewer workspace (user portal) — Milestone 1 playground"
      :icon="headerIcon"
      class="shrink-0"
    />
    <div class="flex-1 min-h-0 overflow-auto px-6 py-md">
      <AccessReviewsReviewerPortal />
    </div>
  </div>
</template>
