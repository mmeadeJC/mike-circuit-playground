import type { Meta, StoryObj } from '@storybook/vue3';
import { linkTo } from '@storybook/addon-links';
import { usePolicyMigrationBackNavigation } from './demo/storybookPolicyMigrationNav';
import { ref, markRaw, defineComponent, computed, watch } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  FormField,
  LinkText,
  ConfigPageLayout,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Divider from 'primevue/divider';

import {
  RocketLaunchIcon,
  HomeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  BellIcon,
  UserIcon,
  UsersIcon,
  CommandLineIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ComputerDesktopIcon,
  InformationCircleIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

import TopBar from '@/components/AdminTopBar.vue';

import { menuItems, profileMenuItems } from './demo/policyMigrationMenuItems';

// ─── Types & Constants ─────────────────────────────────────────────

interface RegistryKeyRow {
  id: number;
  location: string;
  valueName: string;
  type: string;
  data: string;
}

const registryTypeOptions = [
  { label: 'String', value: 'String' },
  { label: 'DWORD', value: 'DWORD' },
  { label: 'QWORD', value: 'QWORD' },
  { label: 'Binary', value: 'Binary' },
  { label: 'Multi-String', value: 'Multi-String' },
  { label: 'Expandable String', value: 'Expandable String' },
];

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const INITIAL_POLICY_NAME = 'Advanced: Custom Registry Keys';
const INITIAL_POLICY_NOTES = '';
const INITIAL_REGISTRY_KEYS: RegistryKeyRow[] = [
  { id: 1, location: '', valueName: '', type: 'DWORD', data: '' },
];

const POLICY_DESCRIPTION =
  'These policies allow you to configure any system settings that we may not offer in our standard policies. Custom policies allow for even further customization of policy settings on your systems.';

const POLICY_BEHAVIOR =
  'Any settings added to this policy will override the same settings that may already exist on your system(s). It is recommended you test this policy against a single system prior to applying to your organization\'s entire fleet.';

const POLICY_ACTIVATION =
  'This policy will take effect when all systems where this is policy is enabled have rebooted.';

const PRO_TIP_BODY =
  'Editing registry settings can cause poor system performance or invalidate Windows licensing. We recommend testing thoroughly before applying to a large number of systems.';

// ─── Page Component ────────────────────────────────────────────────

const CustomRegistryKeysPage = defineComponent({
  name: 'CustomRegistryKeysPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    LinkText,
    ConfigPageLayout,
    PageSaveBar,
    TopBar,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    InformationCircleIcon,
    ArrowTopRightOnSquareIcon,
    PlusIcon,
    TrashIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/custom-registry-keys');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const registryKeys = ref<RegistryKeyRow[]>(
      INITIAL_REGISTRY_KEYS.map((row) => ({ ...row })),
    );

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      registryKeys: INITIAL_REGISTRY_KEYS.map((row) => ({ ...row })),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);
    let nextRegistryId = 2;

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;
      if (registryKeys.value.length !== baseline.value.registryKeys.length) return true;
      return registryKeys.value.some((row, index) => {
        const base = baseline.value.registryKeys[index];
        if (!base) return true;
        return (
          row.location !== base.location
          || row.valueName !== base.valueName
          || row.type !== base.type
          || row.data !== base.data
        );
      });
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function addRegistryKey() {
      registryKeys.value.push({
        id: nextRegistryId++,
        location: '',
        valueName: '',
        type: 'DWORD',
        data: '',
      });
    }

    function removeRegistryKey(id: number) {
      if (registryKeys.value.length <= 1) {
        registryKeys.value = [{ id: nextRegistryId++, location: '', valueName: '', type: 'DWORD', data: '' }];
        return;
      }
      registryKeys.value = registryKeys.value.filter((row) => row.id !== id);
    }

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      registryKeys.value = baseline.value.registryKeys.map((row) => ({ ...row }));
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        registryKeys: registryKeys.value.map((row) => ({ ...row })),
      };
      isSaving.value = false;
      showSavedConfirmation.value = true;
      setTimeout(() => {
        showSavedConfirmation.value = false;
      }, 2000);
    }

    return {
      menuItems,
      profileMenuItems,
      detailTabs,
      activeTab,
      activeTabLabel,
      policyName,
      policyNotes,
      registryKeys,
      registryTypeOptions,
      POLICY_DESCRIPTION,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      PRO_TIP_BODY,
      isDirty,
      isSaving,
      showSavedConfirmation,
      addRegistryKey,
      removeRegistryKey,
      handleDiscard,
      handleSave,
      goBack,

      backButtonLabel,
      shieldIcon: markRaw(ShieldCheckIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopBar
          showBackButton
          :backButtonLabel="backButtonLabel"
          @back="goBack"
        />

        <PageHeader
          title="Advanced: Custom Registry Keys"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="Device" severity="accent-purple">
                <template #icon>
                  <ComputerDesktopIcon class="w-3.5 h-3.5" />
                </template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">
                Configure the policy below, then select the target groups or devices to apply it.
              </span>
            </div>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-auto bg-neutral-surface min-h-0">
          <ConfigPageLayout
            v-if="activeTab === 'details'"
            class="w-full! min-h-full"
            maxWidth="1024"
          >
            <div class="flex flex-col gap-md">
              <CollapsiblePanel header="Windows Device Policy">
                <template #titleicon="iconProps">
                  <ShieldCheckIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField label="Policy Name">
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="policyName"
                        class="w-full"
                      />
                    </template>
                  </FormField>

                  <FormField label="Policy Notes">
                    <template #default="{ inputId }">
                      <PvTextarea
                        :id="inputId"
                        v-model="policyNotes"
                        rows="3"
                        autoResize
                        class="w-full"
                        placeholder="Add notes about this policy"
                      />
                    </template>
                  </FormField>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Description</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_DESCRIPTION }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_BEHAVIOR }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_ACTIVATION }}</p>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <div class="flex grow items-start content-start rounded gap-2 p-2 w-full bg-notification-info shadow-message-info text-notification-info-content">
                    <span class="flex h-6 items-center justify-center shrink-0">
                      <InformationCircleIcon class="w-5 h-5 text-notification-info-content" />
                    </span>
                    <div class="flex grow flex-col py-0.5 min-w-0 gap-sm min-h-6">
                      <span class="text-body-sm font-bold">Pro Tip</span>
                      <p class="text-body-sm m-0">{{ PRO_TIP_BODY }}</p>
                      <p class="text-body-sm m-0">
                        For more information, please reference our
                        <LinkText
                          href="#"
                          target="_blank"
                          :showIcon="false"
                          customClass="inline-flex items-center gap-xs align-baseline ml-xs"
                        >
                          KB Article
                          <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                        </LinkText>.
                      </p>
                    </div>
                  </div>

                  <div
                    v-for="row in registryKeys"
                    :key="row.id"
                    class="flex items-start gap-md"
                  >
                    <FormField
                      label="Registry Key Location"
                      label-tooltip="Enter the full registry path, for example HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Company\\\\App."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.location"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Value Name"
                      label-tooltip="The name of the registry value to create or update."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.valueName"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Type"
                      label-tooltip="Select the registry value type."
                      class="w-40 shrink-0"
                    >
                      <template #default="{ inputId }">
                        <PvSelect
                          :id="inputId"
                          v-model="row.type"
                          :options="registryTypeOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-full!"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Data"
                      label-tooltip="The data to write for this registry value."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvTextarea
                          :id="inputId"
                          v-model="row.data"
                          :rows="2"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <div class="flex items-center gap-xs pt-7 shrink-0">
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Delete registry key"
                        @click="removeRegistryKey(row.id)"
                      >
                        <template #icon>
                          <TrashIcon class="size-4" />
                        </template>
                      </PvButton>
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Add registry key"
                        @click="addRegistryKey"
                      >
                        <template #icon>
                          <PlusIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>
          </ConfigPageLayout>

          <div
            v-else
            class="flex flex-col items-center justify-center h-full gap-sm text-neutral-subtle p-md"
          >
            <span class="text-body-md">{{ activeTabLabel }}</span>
            <span class="text-body-sm">Binding content is not included in this Details tab exploration.</span>
          </div>
        </div>

        <PageSaveBar
          :visible="isDirty"
          :saving="isSaving"
          :saved="showSavedConfirmation"
          message="You have unsaved changes"
          saveLabel="Create Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    </div>
  `,
});


export { CustomRegistryKeysPage };

const meta: Meta<typeof CustomRegistryKeysPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Advanced: Custom Registry Keys",
  component: CustomRegistryKeysPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CustomRegistryKeysPage>;

export const Default: Story = {};
