<script setup lang="ts">
import { FormField, LinkText } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import { PhotoIcon } from '@heroicons/vue/24/outline';
import PolicySettingCheckbox from './PolicySettingCheckbox.vue';
import {
  NOTIFICATION_PREVIEW_OPTIONS,
  type NotificationPreviewTab,
} from './macOsLegacyPolicySettings';

const enableCustomNotifications = defineModel<boolean>('enableCustomNotifications', {
  required: true,
});
const notificationMessage = defineModel<string>('notificationMessage', { required: true });
const notificationPreviewTab = defineModel<NotificationPreviewTab>('notificationPreviewTab', {
  required: true,
});
</script>

<template>
  <div class="flex flex-col gap-md">
    <PolicySettingCheckbox
      v-model="enableCustomNotifications"
      label="Enable Custom Minor Update Notifications"
      tooltip="Shows a custom JumpCloud notification when minor updates are available."
      inputId="mac-legacy-enable-custom-notifications"
    />

    <FormField
      label="Update Notification Message"
      labelTooltip="Message shown to users in the custom minor update notification."
    >
      <template #default="{ inputId }">
        <InputText
          :id="inputId"
          v-model="notificationMessage"
          class="w-full"
          :disabled="!enableCustomNotifications"
        />
      </template>
    </FormField>

    <div class="grid grid-cols-1 gap-lg lg:grid-cols-2">
      <div class="flex flex-col gap-sm">
        <span class="text-body-md-bold text-neutral-base">Logo</span>
        <div
          class="flex h-[250px] w-full items-center justify-center rounded-sm border border-neutral-default_solid bg-neutral-base p-md box-border"
        >
          <div
            class="flex size-24 flex-col items-center justify-center rounded-sm border border-neutral-default_solid bg-neutral-surface p-sm text-center"
            aria-hidden="true"
          >
            <span class="text-body-sm-bold text-neutral-base">A.F.C.</span>
            <span class="text-body-xs text-neutral-subtle">RICHMOND</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-md">
        <span class="text-body-md-bold text-neutral-base">Notification Preview</span>

        <SelectButton
          v-model="notificationPreviewTab"
          :options="NOTIFICATION_PREVIEW_OPTIONS"
          optionLabel="label"
          optionValue="value"
          :allowEmpty="false"
        />

        <div
          class="flex h-48 w-full flex-col items-center justify-center gap-sm rounded-sm border border-dashed border-neutral-default_solid bg-neutral-base p-md text-center box-border"
        >
          <PhotoIcon class="size-10 shrink-0 text-neutral-subtle" aria-hidden="true" />
          <span class="text-body-md text-neutral-subtle">Notification preview placeholder</span>
        </div>
      </div>
    </div>

    <p class="text-body-sm m-0 text-neutral-subtle lg:max-w-[calc(50%-0.75rem)]">
      If you haven't uploaded a logo for your organization, the JumpCloud logo is used by default.
      Go to
      <LinkText label="Settings" href="#" :showIcon="false" customClass="inline!" />
      to upload your logo.
    </p>
  </div>
</template>
