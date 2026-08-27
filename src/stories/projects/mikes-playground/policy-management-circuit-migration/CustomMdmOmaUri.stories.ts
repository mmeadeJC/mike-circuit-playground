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
  MessageNotification,
  DetailPageLayout,
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

interface OmaUriRow {
  id: number;
  omaUri: string;
  format: string;
  value: string;
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const formatOptions = [
  { label: 'int', value: 'int' },
  { label: 'string', value: 'string' },
  { label: 'bool', value: 'bool' },
  { label: 'float', value: 'float' },
  { label: 'date', value: 'date' },
  { label: 'xml', value: 'xml' },
  { label: 'chr', value: 'chr' },
];

const INITIAL_POLICY_NAME = 'Custom MDM (OMA-URI)';
const INITIAL_POLICY_NOTES = '';
const INITIAL_OMA_URI_ROWS: OmaUriRow[] = [
  { id: 1, omaUri: '', format: 'int', value: '' },
];

const POLICY_DESCRIPTION =
  'This policy allows administrators to create custom settings not covered in built-in MDM policies.';

const POLICY_BEHAVIOR =
  'The behavior of this policy depends on the specific OMA-URI and its associated data type (string, integer, boolean, etc.).';

const POLICY_ACTIVATION =
  'The device must be MDM enrolled to activate the policy.';

const PRO_TIP_DETAIL =
  'This is an advanced feature. Configuring custom OMA-URI policies incorrectly can cause unexpected device behavior, so we recommend testing thoroughly before applying to a large number of devices. See our ';

const MINIMUM_SUPPORTED_VERSION = 'Windows 10, 11 or later';

const SUPPORTED_EDITIONS = [
  'Pro',
  'Enterprise',
  'Education',
  'Windows SE',
  'IoT Enterprise',
  'IoT Enterprise LTSC',
];

// ─── Page Component ────────────────────────────────────────────────

const CustomMdmOmaUriPage = defineComponent({
  name: 'CustomMdmOmaUriPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    LinkText,
    MessageNotification,
    DetailPageLayout,
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
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/custom-mdm-oma-uri');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const omaUriRows = ref<OmaUriRow[]>(
      INITIAL_OMA_URI_ROWS.map((row) => ({ ...row })),
    );

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      omaUriRows: INITIAL_OMA_URI_ROWS.map((row) => ({ ...row })),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);
    let nextRowId = 2;

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;
      if (omaUriRows.value.length !== baseline.value.omaUriRows.length) return true;
      return omaUriRows.value.some((row, index) => {
        const base = baseline.value.omaUriRows[index];
        if (!base) return true;
        return row.omaUri !== base.omaUri || row.format !== base.format || row.value !== base.value;
      });
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function addOmaUriRow() {
      omaUriRows.value.push({
        id: nextRowId++,
        omaUri: '',
        format: 'int',
        value: '',
      });
    }

    function removeOmaUriRow(id: number) {
      if (omaUriRows.value.length <= 1) {
        omaUriRows.value = [{ id: nextRowId++, omaUri: '', format: 'int', value: '' }];
        return;
      }
      omaUriRows.value = omaUriRows.value.filter((row) => row.id !== id);
    }

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      omaUriRows.value = baseline.value.omaUriRows.map((row) => ({ ...row }));
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        omaUriRows: omaUriRows.value.map((row) => ({ ...row })),
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
      omaUriRows,
      formatOptions,
      POLICY_DESCRIPTION,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      PRO_TIP_DETAIL,
      MINIMUM_SUPPORTED_VERSION,
      SUPPORTED_EDITIONS,
      isDirty,
      isSaving,
      showSavedConfirmation,
      addOmaUriRow,
      removeOmaUriRow,
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
          title="Custom MDM (OMA-URI)"
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
          <DetailPageLayout
            v-if="activeTab === 'details'"
            class="w-full! h-full!"
            max-width="1440"
            :show-sidebar="true"
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
                  <div
                    class="flex grow items-start content-start rounded gap-2 p-2 w-full bg-notification-info shadow-message-info text-notification-info-content"
                  >
                    <span class="flex h-6 items-center justify-center shrink-0">
                      <InformationCircleIcon class="w-5 h-5 text-notification-info-content" />
                    </span>
                    <div class="flex grow flex-col py-0.5 min-w-0 gap-0.5 min-h-6 justify-center">
                      <span class="font-bold">Pro Tip</span>
                      <p class="text-body-sm m-0">
                        {{ PRO_TIP_DETAIL }}<LinkText
                          href="#"
                          target="_blank"
                          :showIcon="false"
                          customClass="inline-flex items-center gap-xs align-baseline"
                        >
                          KB article
                          <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                        </LinkText>
                      </p>
                    </div>
                  </div>

                  <div
                    v-for="row in omaUriRows"
                    :key="row.id"
                    class="flex items-start gap-md"
                  >
                    <FormField
                      label="OMA URI"
                      label-tooltip="The OMA-URI path for the custom MDM setting."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.omaUri"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Format"
                      label-tooltip="The data type for this OMA-URI value."
                      class="w-40 shrink-0"
                    >
                      <template #default="{ inputId }">
                        <PvSelect
                          :id="inputId"
                          v-model="row.format"
                          :options="formatOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-full!"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Value"
                      label-tooltip="The value to apply for this OMA-URI setting."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvTextarea
                          :id="inputId"
                          v-model="row.value"
                          :rows="2"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <div class="pt-7 shrink-0">
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Delete OMA URI row"
                        @click="removeOmaUriRow(row.id)"
                      >
                        <template #icon>
                          <TrashIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>
                  </div>

                  <div>
                    <PvButton
                      label="Add OMA URI"
                      severity="secondary"
                      variant="outlined"
                      size="small"
                      @click="addOmaUriRow"
                    >
                      <template #icon>
                        <PlusIcon class="size-4" />
                      </template>
                    </PvButton>
                  </div>
                </div>
              </CollapsiblePanel>
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <MessageNotification
                  severity="info"
                  detail="JumpCloud MDM enrollment"
                >
                  <template #button>
                    <LinkText label="Learn more" href="#" target="_blank" />
                  </template>
                </MessageNotification>

                <div class="flex flex-col gap-md">
                  <h3 class="text-heading-3 text-neutral-base">Windows</h3>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                    <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                  </div>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base">Supported Editions</span>
                    <ul class="flex flex-col gap-xs list-disc pl-5 m-0">
                      <li
                        v-for="edition in SUPPORTED_EDITIONS"
                        :key="edition"
                        class="text-body-md text-neutral-base"
                      >
                        {{ edition }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
          </DetailPageLayout>

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


export { CustomMdmOmaUriPage };

const meta: Meta<typeof CustomMdmOmaUriPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Custom MDM (OMA-URI)",
  component: CustomMdmOmaUriPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CustomMdmOmaUriPage>;

export const Default: Story = {};
