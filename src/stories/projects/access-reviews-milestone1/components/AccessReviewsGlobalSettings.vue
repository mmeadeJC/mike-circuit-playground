<script setup lang="ts">
import { inject } from 'vue';
import { CheckboxWithLabel, MessageNotification, ToggleSwitch } from '@jumpcloud/circuit/components';
import type { AccessReviewM1Store } from '../accessReviewM1Store';
import { ACCESS_REVIEW_M1_STORE_KEY } from '../accessReviewM1Store';

defineOptions({ name: 'AccessReviewsGlobalSettings' });

const store = inject(ACCESS_REVIEW_M1_STORE_KEY) as AccessReviewM1Store;
</script>

<template>
  <div class="flex flex-col gap-lg max-w-3xl">
    <MessageNotification
      v-if="!store.globalSettings.featureEnabled"
      severity="warn"
      title="Access Reviews is turned off"
      detail="Administrators and reviewers cannot see campaigns until the feature is enabled."
    />

    <div class="flex flex-col gap-md">
      <h2 class="text-heading-3 text-neutral-base">Feature</h2>
      <ToggleSwitch
        :model-value="store.globalSettings.featureEnabled"
        label="Enable Access Reviews"
        description="Globally enable or disable Access Reviews for this organization."
        @update:model-value="store.updateGlobalSettings({ featureEnabled: $event })"
      />
    </div>

    <div class="flex flex-col gap-md border-t border-neutral-default_solid pt-lg">
      <h2 class="text-heading-3 text-neutral-base">Email notifications</h2>
      <p class="text-body-md text-neutral-subtle">
        System-wide defaults for campaign events. Per-campaign reminder schedules are configured when creating a campaign.
      </p>

      <CheckboxWithLabel
        :model-value="store.globalSettings.emailOnCampaignStart"
        :binary="true"
        @update:model-value="store.updateGlobalSettings({ emailOnCampaignStart: $event })"
      >
        <template #label>
          <span class="text-body-md-bold text-neutral-base">Campaign start</span>
        </template>
        <template #description>
          <span class="text-body-sm text-neutral-subtle">
            Send email when a campaign starts
          </span>
        </template>
      </CheckboxWithLabel>

      <CheckboxWithLabel
        :model-value="store.globalSettings.emailOnDueReminder"
        :binary="true"
        @update:model-value="store.updateGlobalSettings({ emailOnDueReminder: $event })"
      >
        <template #label>
          <span class="text-body-md-bold text-neutral-base">Due date reminders</span>
        </template>
        <template #description>
          <span class="text-body-sm text-neutral-subtle">
            Send due date reminder emails (uses each campaign’s reminder schedule)
          </span>
        </template>
      </CheckboxWithLabel>

      <CheckboxWithLabel
        :model-value="store.globalSettings.emailOnCampaignComplete"
        :binary="true"
        @update:model-value="store.updateGlobalSettings({ emailOnCampaignComplete: $event })"
      >
        <template #label>
          <span class="text-body-md-bold text-neutral-base">Campaign complete</span>
        </template>
        <template #description>
          <span class="text-body-sm text-neutral-subtle">
            Send email when a campaign completes
          </span>
        </template>
      </CheckboxWithLabel>
    </div>
  </div>
</template>
