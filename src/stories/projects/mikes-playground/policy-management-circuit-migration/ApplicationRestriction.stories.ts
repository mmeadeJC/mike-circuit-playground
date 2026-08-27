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
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
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
  ChevronRightIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  PlusIcon,
  NoSymbolIcon,
  CubeIcon,
  FolderIcon,
  BuildingStorefrontIcon,
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

type EditPreference = 'run' | 'block';

interface FileDimensionRow {
  id: number;
  vendorName: string;
  productName: string;
  binaryName: string;
  editPreference: EditPreference;
}

interface FilePathRow {
  id: number;
  path: string;
}

interface RestrictionSettingsState {
  inlineAppsSearch: string;
  fileDimensions: FileDimensionRow[];
  filePaths: FilePathRow[];
  storeAppsSearch: string;
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const editPreferenceOptions = [
  { label: 'Run', value: 'run' },
  { label: 'Block', value: 'block' },
];

let nextFileDimensionId = 2;
let nextFilePathId = 2;

function createFileDimensionRow(): FileDimensionRow {
  const row: FileDimensionRow = {
    id: nextFileDimensionId,
    vendorName: '',
    productName: '',
    binaryName: '',
    editPreference: 'run',
  };
  nextFileDimensionId += 1;
  return row;
}

function createFilePathRow(): FilePathRow {
  const row: FilePathRow = { id: nextFilePathId, path: '' };
  nextFilePathId += 1;
  return row;
}

const INITIAL_POLICY_NAME = 'Application Restriction';
const INITIAL_POLICY_NOTES = '';

const INITIAL_SETTINGS: RestrictionSettingsState = {
  inlineAppsSearch: '',
  fileDimensions: [{ id: 1, vendorName: '', productName: '', binaryName: '', editPreference: 'run' }],
  filePaths: [{ id: 1, path: '' }],
  storeAppsSearch: '',
};

const POLICY_DESCRIPTION =
  'This policy restricts application execution from common locations on Windows devices. Use it to block specific inline apps, file dimensions, file paths, or Microsoft Store apps from running.';

const POLICY_BEHAVIOR =
  'Users are blocked from accessing applications and components included in the policy list.';

const POLICY_ACTIVATION =
  'The policy takes effect upon the next device check-in after it is applied.';

const MINIMUM_SUPPORTED_VERSION = 'Windows 10 version 1809 (10.0.17763) or later';

const SUPPORTED_EDITIONS = [
  'Pro',
  'Enterprise',
  'Enterprise LTSC',
  'Education',
  'Windows SE',
  'IoT Enterprise',
  'IoT Enterprise LTSC',
];

function cloneFileDimensions(rows: FileDimensionRow[]): FileDimensionRow[] {
  return rows.map((row) => ({ ...row }));
}

function cloneFilePaths(rows: FilePathRow[]): FilePathRow[] {
  return rows.map((row) => ({ ...row }));
}

function cloneSettings(settings: RestrictionSettingsState): RestrictionSettingsState {
  return {
    inlineAppsSearch: settings.inlineAppsSearch,
    fileDimensions: cloneFileDimensions(settings.fileDimensions),
    filePaths: cloneFilePaths(settings.filePaths),
    storeAppsSearch: settings.storeAppsSearch,
  };
}

function fileDimensionsEqual(a: FileDimensionRow[], b: FileDimensionRow[]) {
  if (a.length !== b.length) return false;
  return a.every((row, index) => {
    const other = b[index];
    return row.vendorName === other.vendorName
      && row.productName === other.productName
      && row.binaryName === other.binaryName
      && row.editPreference === other.editPreference;
  });
}

function filePathsEqual(a: FilePathRow[], b: FilePathRow[]) {
  if (a.length !== b.length) return false;
  return a.every((row, index) => row.path === b[index].path);
}

// ─── Page Component ────────────────────────────────────────────────

const ApplicationRestrictionPage = defineComponent({
  name: 'ApplicationRestrictionPage',
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
    PvIconField: IconField,
    PvInputIcon: InputIcon,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
    TrashIcon,
    PlusIcon,
    NoSymbolIcon,
    CubeIcon,
    FolderIcon,
    BuildingStorefrontIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/application-restriction');

    const activeTab = ref('details');
    const inlineAppsCollapsed = ref(false);
    const fileDimensionsCollapsed = ref(false);
    const filePathsCollapsed = ref(false);
    const storeAppsCollapsed = ref(false);

    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const inlineAppsSearch = ref(INITIAL_SETTINGS.inlineAppsSearch);
    const fileDimensions = ref<FileDimensionRow[]>(cloneFileDimensions(INITIAL_SETTINGS.fileDimensions));
    const filePaths = ref<FilePathRow[]>(cloneFilePaths(INITIAL_SETTINGS.filePaths));
    const storeAppsSearch = ref(INITIAL_SETTINGS.storeAppsSearch);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      settings: cloneSettings(INITIAL_SETTINGS),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;

      const base = baseline.value.settings;
      if (inlineAppsSearch.value !== base.inlineAppsSearch) return true;
      if (storeAppsSearch.value !== base.storeAppsSearch) return true;
      if (!fileDimensionsEqual(fileDimensions.value, base.fileDimensions)) return true;
      if (!filePathsEqual(filePaths.value, base.filePaths)) return true;
      return false;
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function addFileDimension() {
      fileDimensions.value = [...fileDimensions.value, createFileDimensionRow()];
    }

    function removeFileDimension(id: number) {
      if (fileDimensions.value.length <= 1) {
        fileDimensions.value = [{ ...fileDimensions.value[0], vendorName: '', productName: '', binaryName: '', editPreference: 'run' }];
        return;
      }
      fileDimensions.value = fileDimensions.value.filter((row) => row.id !== id);
    }

    function addFilePath() {
      filePaths.value = [...filePaths.value, createFilePathRow()];
    }

    function removeFilePath(id: number) {
      if (filePaths.value.length <= 1) {
        filePaths.value = [{ ...filePaths.value[0], path: '' }];
        return;
      }
      filePaths.value = filePaths.value.filter((row) => row.id !== id);
    }

    function restoreSettings(settings: RestrictionSettingsState) {
      inlineAppsSearch.value = settings.inlineAppsSearch;
      storeAppsSearch.value = settings.storeAppsSearch;
      fileDimensions.value = cloneFileDimensions(settings.fileDimensions);
      filePaths.value = cloneFilePaths(settings.filePaths);
    }

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      restoreSettings(baseline.value.settings);
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        settings: cloneSettings({
          inlineAppsSearch: inlineAppsSearch.value,
          fileDimensions: fileDimensions.value,
          filePaths: filePaths.value,
          storeAppsSearch: storeAppsSearch.value,
        }),
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
      inlineAppsCollapsed,
      fileDimensionsCollapsed,
      filePathsCollapsed,
      storeAppsCollapsed,
      policyName,
      policyNotes,
      inlineAppsSearch,
      fileDimensions,
      filePaths,
      storeAppsSearch,
      editPreferenceOptions,
      POLICY_DESCRIPTION,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      MINIMUM_SUPPORTED_VERSION,
      SUPPORTED_EDITIONS,
      isDirty,
      isSaving,
      showSavedConfirmation,
      addFileDimension,
      removeFileDimension,
      addFilePath,
      removeFilePath,
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
          title="Application Restriction"
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
                Configure the policy below, then select the target groups and devices to apply it.
              </span>
            </div>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-auto bg-neutral-surface min-h-0">
          <DetailPageLayout
            v-if="activeTab === 'details'"
            class="w-full! min-h-full"
            max-width="1440"
            :show-sidebar="true"
          >
            <div class="flex flex-col gap-md pb-32">
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

              <CollapsiblePanel
                v-model:collapsed="inlineAppsCollapsed"
                toggleable
                header="Blocked Inline Apps &amp; Components"
              >
                <template #titleicon="iconProps">
                  <NoSymbolIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <FormField
                  label="Search Inline Apps &amp; Components"
                  label-tooltip="Search for inline apps and components to block."
                >
                  <template #default="{ inputId }">
                    <PvIconField>
                      <PvInputIcon>
                        <MagnifyingGlassIcon />
                      </PvInputIcon>
                      <PvInputText
                        :id="inputId"
                        v-model="inlineAppsSearch"
                        placeholder="Search"
                        class="w-full"
                      />
                    </PvIconField>
                  </template>
                </FormField>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="fileDimensionsCollapsed"
                toggleable
                header="Blocked File Dimensions"
              >
                <template #titleicon="iconProps">
                  <CubeIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <FormField
                  label="Add File Dimensions"
                  label-tooltip="Add vendor, product, and binary name dimensions to block matching applications."
                >
                  <template #default>
                    <div class="flex flex-col gap-md">
                      <div
                        v-for="row in fileDimensions"
                        :key="row.id"
                        class="flex items-start gap-sm"
                      >
                        <div class="grid flex-1 min-w-0 grid-cols-1 gap-md md:grid-cols-4">
                          <FormField label="Vendor Name">
                            <template #default="{ inputId }">
                              <PvInputText
                                :id="inputId"
                                v-model="row.vendorName"
                                class="w-full"
                              />
                            </template>
                          </FormField>

                          <FormField label="Product Name">
                            <template #default="{ inputId }">
                              <PvInputText
                                :id="inputId"
                                v-model="row.productName"
                                class="w-full"
                              />
                            </template>
                          </FormField>

                          <FormField label="Binary Name">
                            <template #default="{ inputId }">
                              <PvInputText
                                :id="inputId"
                                v-model="row.binaryName"
                                class="w-full"
                              />
                            </template>
                          </FormField>

                          <FormField
                            label="Edit Preference"
                            label-tooltip="Choose whether matching binaries are allowed to run or blocked."
                          >
                            <template #default="{ inputId }">
                              <PvSelect
                                :id="inputId"
                                v-model="row.editPreference"
                                :options="editPreferenceOptions"
                                optionLabel="label"
                                optionValue="value"
                                class="w-full!"
                              />
                            </template>
                          </FormField>
                        </div>

                        <div class="flex items-center gap-xs pt-7 shrink-0">
                          <PvButton
                            severity="secondary"
                            variant="text"
                            size="small"
                            aria-label="Delete file dimension"
                            @click="removeFileDimension(row.id)"
                          >
                            <template #icon>
                              <TrashIcon class="size-4" />
                            </template>
                          </PvButton>
                          <PvButton
                            severity="secondary"
                            variant="text"
                            size="small"
                            aria-label="Add file dimension"
                            @click="addFileDimension"
                          >
                            <template #icon>
                              <PlusIcon class="size-4" />
                            </template>
                          </PvButton>
                        </div>
                      </div>
                    </div>
                  </template>
                </FormField>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="filePathsCollapsed"
                toggleable
                header="Blocked File Paths"
              >
                <template #titleicon="iconProps">
                  <FolderIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <div
                    v-for="row in filePaths"
                    :key="row.id"
                    class="flex items-start gap-sm"
                  >
                    <FormField
                      label="File Path"
                      label-tooltip="Enter a file path to block."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.path"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <div class="flex items-center gap-xs pt-7 shrink-0">
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Delete file path"
                        @click="removeFilePath(row.id)"
                      >
                        <template #icon>
                          <TrashIcon class="size-4" />
                        </template>
                      </PvButton>
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Add file path"
                        @click="addFilePath"
                      >
                        <template #icon>
                          <PlusIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="storeAppsCollapsed"
                toggleable
                header="Blocked Microsoft Store Apps"
              >
                <template #titleicon="iconProps">
                  <BuildingStorefrontIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <FormField
                  label="Search Microsoft Store Apps"
                  label-tooltip="Search for Microsoft Store apps to block."
                >
                  <template #default="{ inputId }">
                    <PvIconField>
                      <PvInputIcon>
                        <MagnifyingGlassIcon />
                      </PvInputIcon>
                      <PvInputText
                        :id="inputId"
                        v-model="storeAppsSearch"
                        placeholder="Search"
                        class="w-full"
                      />
                    </PvIconField>
                  </template>
                </FormField>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <MessageNotification
                  severity="info"
                  detail="Updates to Windows policies are now available."
                />

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


export { ApplicationRestrictionPage };

const meta: Meta<typeof ApplicationRestrictionPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Application Restriction",
  component: ApplicationRestrictionPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ApplicationRestrictionPage>;

export const Default: Story = {};
