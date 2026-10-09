<script setup lang="ts">
import { ref } from 'vue';
import {
  CollapsiblePanel,
  ConfigPageLayout,
  FormField,
  LinkText,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import { ChevronRightIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';
import { usePatchPolicyEditor } from './shared/usePatchPolicyEditor';

/** Details tab for the Linux (Ubuntu) patch policy. */

type Option = { label: string; value: string };

const SUBSCRIBE_OPTIONS: Option[] = [
  { label: 'All updates', value: 'all' },
  { label: 'Security updates only', value: 'security' },
  { label: 'Security and recommended updates', value: 'security-recommended' },
];

const CHECK_FREQUENCY_OPTIONS: Option[] = [
  { label: 'Daily', value: 'daily' },
  { label: 'Every two days', value: 'every-two-days' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Every two weeks', value: 'every-two-weeks' },
  { label: 'Never', value: 'never' },
];

const SECURITY_UPDATE_OPTIONS: Option[] = [
  { label: 'Download and install automatically', value: 'download-install' },
  { label: 'Download automatically', value: 'download' },
  { label: 'Display immediately', value: 'display-immediately' },
  { label: 'Display weekly', value: 'display-weekly' },
  { label: 'Display every two weeks', value: 'display-every-two-weeks' },
];

const OTHER_UPDATE_OPTIONS: Option[] = [
  { label: 'Display immediately', value: 'display-immediately' },
  { label: 'Display weekly', value: 'display-weekly' },
  { label: 'Display every two weeks', value: 'display-every-two-weeks' },
  { label: 'Download automatically', value: 'download' },
  { label: 'Download and install automatically', value: 'download-install' },
];

const RELEASE_UPGRADE_OPTIONS: Option[] = [
  { label: 'Never', value: 'never' },
  { label: 'For long-term support versions', value: 'lts' },
  { label: 'For any new version', value: 'any' },
];

const SETTING_FIELDS: {
  key: 'subscribeTo' | 'checkFrequency' | 'securityUpdates' | 'otherUpdates' | 'releaseUpgrades';
  label: string;
  tooltip: string;
  options: Option[];
}[] = [
  {
    key: 'subscribeTo',
    label: 'Subscribe to',
    tooltip: 'Choose which categories of package updates devices subscribe to.',
    options: SUBSCRIBE_OPTIONS,
  },
  {
    key: 'checkFrequency',
    label: 'Automatically check for updates',
    tooltip: 'How often devices check the Ubuntu repositories for new updates.',
    options: CHECK_FREQUENCY_OPTIONS,
  },
  {
    key: 'securityUpdates',
    label: 'When there are security updates',
    tooltip: 'What devices do when security updates are available.',
    options: SECURITY_UPDATE_OPTIONS,
  },
  {
    key: 'otherUpdates',
    label: 'When there are other updates',
    tooltip: 'What devices do when non-security updates are available.',
    options: OTHER_UPDATE_OPTIONS,
  },
  {
    key: 'releaseUpgrades',
    label: 'Notify me of a new Ubuntu version',
    tooltip: 'Controls whether devices are offered OS release upgrades (e.g. 18.04 to 20.04).',
    options: RELEASE_UPGRADE_OPTIONS,
  },
];

const props = withDefaults(defineProps<{ initialPolicyName?: string }>(), {
  initialPolicyName: 'Configure Ubuntu Updates',
});

const policyName = ref(props.initialPolicyName);
const policyNotes = ref('');
const settings = ref<Record<string, string>>({
  subscribeTo: 'security',
  checkFrequency: 'weekly',
  securityUpdates: 'download-install',
  otherUpdates: 'display-weekly',
  releaseUpgrades: 'lts',
});

const settingsCollapsed = ref(false);

type PolicySnapshot = {
  policyName: string;
  policyNotes: string;
  settings: Record<string, string>;
};

function currentSnapshot(): PolicySnapshot {
  return {
    policyName: policyName.value,
    policyNotes: policyNotes.value,
    settings: { ...settings.value },
  };
}

function restoreFromSnapshot(snapshot: PolicySnapshot) {
  policyName.value = snapshot.policyName;
  policyNotes.value = snapshot.policyNotes;
  settings.value = { ...snapshot.settings };
}

const {
  isDirty,
  isSaving,
  showSavedConfirmation,
  handleDiscard,
  handleSave,
} = usePatchPolicyEditor(currentSnapshot, restoreFromSnapshot);
</script>

<template>
  <div class="flex h-full min-h-0 flex-col">
    <ConfigPageLayout class="patch-policy-config-layout w-full! h-full! min-h-0 flex-1" max-width="1024">
      <div class="flex flex-col gap-md pb-32">
        <CollapsiblePanel header="Linux Device Policy">
          <template #titleicon="iconProps">
            <ShieldCheckIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField label="Policy Name" required>
              <template #default="{ inputId }">
                <InputText :id="inputId" v-model="policyName" class="w-full" />
              </template>
            </FormField>

            <FormField label="Policy Notes">
              <template #default="{ inputId }">
                <Textarea
                  :id="inputId"
                  v-model="policyNotes"
                  class="w-full"
                  :rows="3"
                  placeholder="Add notes about this policy"
                />
              </template>
            </FormField>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Description</h4>
              <p class="text-body-md m-0 text-neutral-subtle">
                This policy works on
                <LinkText label="Ubuntu Linux" href="#" :showIcon="false" customClass="inline!" />.
                This policy enables admins to defer the availability of OS release upgrades
                (e.g. upgrading from 18.04 to 20.04), as well as restricting updates to only
                LTS releases. It provides functionality equivalent to the "Software and
                Updates" desktop program on the device, plus the additional ability to delay
                OS release upgrades. This policy requires python3 which is installed by
                default on all supported Ubuntu versions. If the python3-apt package is not
                already installed this policy will install it, however this package is
                installed by default on desktop versions of Ubuntu.
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Behavior</h4>
              <p class="text-body-md m-0 text-neutral-subtle">
                This policy manages package updates and OS release upgrades.
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Activation</h4>
              <p class="text-body-md m-0 text-neutral-subtle">
                No action is needed for the policy to be activated.
              </p>
            </div>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel v-model:collapsed="settingsCollapsed" toggleable header="Settings">
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField
              v-for="field in SETTING_FIELDS"
              :key="field.key"
              :label="field.label"
              :labelTooltip="field.tooltip"
            >
              <template #default="{ inputId }">
                <Select
                  :id="inputId"
                  v-model="settings[field.key]"
                  :options="field.options"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full!"
                />
              </template>
            </FormField>
          </div>
        </CollapsiblePanel>

        <div class="h-36 shrink-0" aria-hidden="true" />
      </div>
    </ConfigPageLayout>

    <PageSaveBar
      :visible="isDirty"
      :saving="isSaving"
      :saved="showSavedConfirmation"
      message="You have unsaved changes"
      saveLabel="Save Policy"
      discardLabel="Cancel"
      savedLabel="Policy saved"
      @save="handleSave"
      @discard="handleDiscard"
    />
  </div>
</template>
