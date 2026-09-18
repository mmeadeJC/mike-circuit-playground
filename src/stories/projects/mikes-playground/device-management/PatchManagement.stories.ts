import type { Meta, StoryObj } from '@storybook/vue3';
import './PatchManagement.stories.css';
import { computed, defineComponent, markRaw, ref, watch, type Component } from 'vue';
import {
  AppNavigation,
  DataTable,
  DataTableCellLink,
  DataTableCellText,
  DataTableToolbar,
  LinkText,
  ListPageLayout,
  MessageNotification,
  PageHeader,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import Tabs from 'primevue/tabs';
import { ArrowPathIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
import { DeviceManagementIcon } from '@jumpcloud/icons';

import TopBar from '@/components/AdminTopBar.vue';
import PatchPolicyAddDropdown, {
  type PatchPolicyAddOption,
} from './PatchPolicyAddDropdown.vue';
import PatchPolicyEditPage from './PatchPolicyEditPage.vue';
import ConfigureAdvancedWindowsUpdatesEditor from './policy-editors/ConfigureAdvancedWindowsUpdatesEditor.vue';
import MacOsDdmUpdatePolicyEditor from './policy-editors/MacOsDdmUpdatePolicyEditor.vue';
import { createMacOsLegacyEditor } from './policy-editors/createMacOsLegacyEditor';
import { createWindowsLegacyEditor } from './policy-editors/createWindowsLegacyEditor';
import UnifiedPatchDashboard from './UnifiedPatchDashboard.vue';
import { AppleIcon, IosIcon, LinuxLogoIcon, WindowsIcon } from './patchPolicyIcons';
import {
  menuItems,
  profileMenuItems,
} from '../policy-management-circuit-migration/demo/policyMigrationMenuItems';

type PatchPolicy = {
  id: string;
  scope: 'os' | 'browser';
  os?: 'windows' | 'mac' | 'ios';
  browser?: 'chrome';
  name: string;
  description: string;
  requirements: string;
  delayDays?: number;
};

type ReleaseTrain = {
  id: string;
  name: string;
  latestVersion: string;
  released: string;
};

const ADD_PATCH_POLICY_OPTIONS: PatchPolicyAddOption[] = [
  { label: 'iOS', value: 'ios', icon: markRaw(IosIcon), isNew: true },
  { label: 'macOS', value: 'macos', icon: markRaw(AppleIcon), isNew: true },
  { label: 'macOS - Legacy', value: 'macos-legacy', icon: markRaw(ArrowPathIcon) },
  { label: 'Windows', value: 'windows', icon: markRaw(WindowsIcon) },
  { label: 'Load Default Linux Policies', value: 'linux-default', icon: LinuxLogoIcon },
];

const OsTypeIcon = markRaw(defineComponent({
  name: 'OsTypeIcon',
  props: {
    os: { type: String, default: 'windows' },
  },
  components: { WindowsIcon, AppleIcon, IosIcon },
  template: `
    <div class="flex items-center justify-center w-full">
      <WindowsIcon v-if="os === 'windows'" />
      <IosIcon v-else-if="os === 'ios'" />
      <AppleIcon v-else />
    </div>
  `,
}));

const BrowserTypeIcon = markRaw(defineComponent({
  name: 'BrowserTypeIcon',
  components: { DeviceManagementIcon },
  template: `
    <div class="flex items-center justify-center w-full">
      <DeviceManagementIcon class="size-4 shrink-0 text-neutral-base" aria-hidden="true" />
    </div>
  `,
}));

/** Circuit header cells use flex; headerStyle textAlign does not center the title — override PT instead. */
const TYPE_COLUMN_PT = {
  columnHeaderContent: {
    class: 'justify-center! w-full!',
  },
};

/**
 * Each patch policy type has its own set of settings panels, so Details content is
 * registered per policy name. Policies without an entry open the drawer with a
 * placeholder until their screen is migrated.
 */
const POLICY_EDITORS: Record<string, Component> = {
  'Configure Advanced Windows Updates': markRaw(ConfigureAdvancedWindowsUpdatesEditor),
  'macOS Vanguard Ring': markRaw(createMacOsLegacyEditor('macOS Vanguard Ring')),
  'macOS Early Adoption Ring': markRaw(createMacOsLegacyEditor('macOS Early Adoption Ring')),
  'macOS General Adoption Ring': markRaw(MacOsDdmUpdatePolicyEditor),
  'Windows Early Adoption Ring': markRaw(createWindowsLegacyEditor('Windows Early Adoption Ring')),
  'Windows General Adoption Ring': markRaw(createWindowsLegacyEditor('Windows General Adoption Ring')),
};

const PATCH_POLICIES: PatchPolicy[] = [
  { id: '1', scope: 'os', os: 'windows', name: 'Configure Advanced Windows Updates', description: 'Configure Advanced Windows Updates', requirements: 'JumpCloud MDM enrollment', delayDays: 0 },
  { id: '2', scope: 'os', os: 'mac', name: 'macOS Vanguard Ring', description: 'Automatic macOS Updates - Legacy', requirements: 'JumpCloud MDM enrollment for macOS 11.0+', delayDays: 0 },
  { id: '3', scope: 'os', os: 'mac', name: 'macOS Early Adoption Ring', description: 'Automatic macOS Updates - Legacy', requirements: 'JumpCloud MDM enrollment for macOS 11.0+', delayDays: 1 },
  { id: '4', scope: 'os', os: 'mac', name: 'macOS General Adoption Ring', description: 'Automatic macOS Updates - Legacy', requirements: 'JumpCloud MDM enrollment for macOS 11.0+', delayDays: 7 },
  { id: '5', scope: 'os', os: 'windows', name: 'Windows Early Adoption Ring', description: 'Automatic Windows Updates - Legacy', requirements: 'JumpCloud MDM enrollment', delayDays: 1 },
  { id: '6', scope: 'os', os: 'windows', name: 'Windows General Adoption Ring', description: 'Automatic Windows Updates - Legacy', requirements: 'JumpCloud MDM enrollment', delayDays: 7 },
  { id: '7', scope: 'os', os: 'windows', name: 'Windows Vanguard Ring', description: 'Automatic Windows Updates - Legacy', requirements: 'JumpCloud MDM enrollment', delayDays: 0 },
  { id: '8', scope: 'os', os: 'windows', name: 'Windows Semi-Annual Channel Targeted Ring', description: 'Automatic Windows Updates - Legacy', requirements: 'JumpCloud MDM enrollment', delayDays: 15 },
  { id: '9', scope: 'os', os: 'windows', name: 'Windows Semi-Annual Channel Ring', description: 'Automatic Windows Updates - Legacy', requirements: 'JumpCloud MDM enrollment', delayDays: 2 },
  { id: '10', scope: 'os', os: 'ios', name: 'iOS Semi-Annual Channel Targeted Ring', description: 'iOS Supervised Update Policy', requirements: 'Require Supervision', delayDays: 15 },
  { id: '11', scope: 'os', os: 'mac', name: 'macOS Semi-Annual Channel Targeted Ring', description: 'Automatic macOS Updates - Legacy', requirements: 'JumpCloud MDM enrollment for macOS 11.0+', delayDays: 15 },
  { id: '12', scope: 'os', os: 'mac', name: 'macOS Semi-Annual Channel Ring', description: 'Automatic macOS Updates - Legacy', requirements: 'JumpCloud MDM enrollment for macOS 11.0+', delayDays: 2 },
  { id: '13', scope: 'os', os: 'ios', name: 'iOS Early Adoption Ring', description: 'iOS Supervised Update Policy', requirements: 'Require Supervision', delayDays: 1 },
  { id: '14', scope: 'os', os: 'ios', name: 'iOS General Adoption Ring', description: 'iOS Supervised Update Policy', requirements: 'Require Supervision', delayDays: 7 },
  { id: '15', scope: 'os', os: 'ios', name: 'iOS Vanguard Ring', description: 'iOS Supervised Update Policy', requirements: 'Require Supervision', delayDays: 0 },
  { id: '16', scope: 'os', os: 'windows', name: 'Windows Pilot Ring', description: 'Automatic Windows Updates - Legacy', requirements: 'JumpCloud MDM enrollment', delayDays: 0 },
  { id: '17', scope: 'os', os: 'mac', name: 'macOS Pilot Ring', description: 'Automatic macOS Updates - Legacy', requirements: 'JumpCloud MDM enrollment for macOS 11.0+', delayDays: 0 },
  { id: '18', scope: 'os', os: 'windows', name: 'Windows Long-Term Servicing Ring', description: 'Automatic Windows Updates - Legacy', requirements: 'JumpCloud MDM enrollment', delayDays: 30 },
  { id: '19', scope: 'os', os: 'mac', name: 'macOS Long-Term Servicing Ring', description: 'Automatic macOS Updates - Legacy', requirements: 'JumpCloud MDM enrollment for macOS 11.0+', delayDays: 30 },
  { id: 'b1', scope: 'browser', browser: 'chrome', name: 'Chrome Day Zero', description: 'Chrome Browser Management', requirements: '' },
  { id: 'b2', scope: 'browser', browser: 'chrome', name: 'Chrome Early Adoption Ring', description: 'Chrome Browser Management', requirements: '' },
  { id: 'b3', scope: 'browser', browser: 'chrome', name: 'Chrome General Adoption Ring', description: 'Chrome Browser Management', requirements: '' },
  { id: 'b4', scope: 'browser', browser: 'chrome', name: 'Chrome Late Adoption Ring', description: 'Chrome Browser Management', requirements: '' },
];

const MACOS_RELEASE_TRAINS: ReleaseTrain[] = [
  { id: 'sequoia', name: 'macOS Sequoia', latestVersion: '15.0.0', released: '29 days ago' },
  { id: 'sonoma', name: 'macOS Sonoma', latestVersion: '14.7.0', released: '31 days ago' },
  { id: 'ventura', name: 'macOS Ventura', latestVersion: '13.7.0', released: '34 days ago' },
];

const IOS_RELEASE_TRAINS: ReleaseTrain[] = [
  { id: 'ios-18', name: 'iOS 18', latestVersion: '18.0.1', released: '21 days ago' },
  { id: 'ios-17', name: 'iOS 17', latestVersion: '17.7.0', released: '28 days ago' },
];

const WINDOWS_RELEASE_TRAINS: ReleaseTrain[] = [
  { id: 'win-11', name: 'Windows 11', latestVersion: '24H2', released: '18 days ago' },
  { id: 'win-10', name: 'Windows 10', latestVersion: '22H2', released: '42 days ago' },
];

const UBUNTU_RELEASE_TRAINS: ReleaseTrain[] = [
  { id: 'ubuntu-24', name: 'Ubuntu 24.04 LTS', latestVersion: '24.04.1', released: '26 days ago' },
  { id: 'ubuntu-22', name: 'Ubuntu 22.04 LTS', latestVersion: '22.04.5', released: '33 days ago' },
];

const PatchManagementPage = defineComponent({
  name: 'PatchManagementPage',
  props: {
    initialPageTab: {
      type: String as () => 'policies' | 'dashboard',
      default: 'policies',
    },
    initialPolicyScopeTab: {
      type: String as () => 'os' | 'browser',
      default: 'os',
    },
    initialDashboardScopeTab: {
      type: String as () => 'overview' | 'apple' | 'windows',
      default: 'overview',
    },
  },
  components: {
    AppNavigation,
    DataTable,
    DataTableToolbar,
    LinkText,
    ListPageLayout,
    MessageNotification,
    PageHeader,
    PageSaveBar,
    PatchPolicyAddDropdown,
    PatchPolicyEditPage,
    TopBar,
    UnifiedPatchDashboard,
    PvButton: Button,
    PvSelect: Select,
    PvSelectButton: SelectButton,
    PvTab: Tab,
    PvTabList: TabList,
    PvTabs: Tabs,
    DocumentTextIcon,
  },
  setup(props) {
    const policies = ref<PatchPolicy[]>(PATCH_POLICIES.map((policy) => ({ ...policy })));
    const selectedPolicies = ref<PatchPolicy[]>([]);
    const searchQuery = ref('');
    const first = ref(0);
    const rows = ref(10);
    const activePageTab = ref(props.initialPageTab);
    const policyScopeTab = ref(props.initialPolicyScopeTab);
    const releaseTrainTab = ref('macos');
    const showLegacyBanner = ref(true);
    const eventTypeFilter = ref('all');
    const osHistoryFilter = ref('all');
    const timeRangeFilter = ref('7-days');
    const filterBy = ref('all');
    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);
    const editingPolicy = ref<PatchPolicy | null>(null);
    const activeView = ref<'list' | 'edit'>('list');

    const pageTabs = [
      { label: 'Patch Policies', value: 'policies' },
      { label: 'Unified Patch Dashboard', value: 'dashboard' },
    ];
    const policyScopeOptions = [
      { label: 'OS', value: 'os' },
      { label: 'Browser', value: 'browser' },
    ];
    const releaseTrainTabs = [
      { label: 'macOS', value: 'macos' },
      { label: 'iOS', value: 'ios' },
      { label: 'Windows', value: 'windows' },
      { label: 'Ubuntu', value: 'ubuntu' },
    ];
    const eventTypeOptions = [
      { label: 'Event Type: All', value: 'all' },
      { label: 'Installed', value: 'installed' },
      { label: 'Failed', value: 'failed' },
    ];
    const osHistoryOptions = [
      { label: 'OS: All', value: 'all' },
      { label: 'macOS', value: 'mac' },
      { label: 'Windows', value: 'windows' },
      { label: 'iOS', value: 'ios' },
    ];
    const timeRangeOptions = [
      { label: 'Last 7 Days', value: '7-days' },
      { label: 'Last 30 Days', value: '30-days' },
      { label: 'Last 90 Days', value: '90-days' },
    ];
    const filterByOptions = computed(() => {
      if (policyScopeTab.value === 'browser') {
        return [
          { label: 'Filter by', value: 'all' },
          { label: 'Chrome', value: 'chrome' },
        ];
      }
      return [
        { label: 'Filter by', value: 'all' },
        { label: 'Windows', value: 'windows' },
        { label: 'macOS', value: 'mac' },
        { label: 'iOS', value: 'ios' },
      ];
    });

    const columns = computed(() => {
      const typeColumn = policyScopeTab.value === 'os'
        ? {
            field: 'os',
            header: 'Type',
            width: '80px',
            pt: TYPE_COLUMN_PT,
            component: OsTypeIcon,
            componentProps: (slotProps: { data: PatchPolicy }) => ({
              os: slotProps.data.os,
            }),
          }
        : {
            field: 'browser',
            header: 'Type',
            width: '80px',
            pt: TYPE_COLUMN_PT,
            component: BrowserTypeIcon,
            componentProps: () => ({}),
          };

      const baseColumns = [
        typeColumn,
        {
          field: 'name',
          header: 'Name',
          sortable: true,
          component: markRaw(DataTableCellLink),
          componentProps: (slotProps: { data: PatchPolicy }) => ({
            label: slotProps.data.name,
            description: slotProps.data.description,
            href: '#',
            onClick: (event: MouseEvent) => {
              event.preventDefault();
              openPolicyEditor(slotProps.data);
            },
          }),
        },
        {
          field: 'requirements',
          header: 'Requirements',
          component: markRaw(DataTableCellText),
          componentProps: (slotProps: { data: PatchPolicy }) => ({
            label: slotProps.data.requirements || undefined,
          }),
        },
      ];

      if (policyScopeTab.value === 'os') {
        baseColumns.push({
          field: 'delayDays',
          header: 'Delay For (days)',
          sortable: true,
          width: '160px',
          component: markRaw(DataTableCellText),
          componentProps: (slotProps: { data: PatchPolicy }) => ({
            label: String(slotProps.data.delayDays ?? 0),
          }),
        });
      }

      return baseColumns;
    });

    const patchReportLabel = 'Run Policy Report';

    const activePageTabModel = computed({
      get: () => activePageTab.value,
      set: (tab: 'policies' | 'dashboard') => {
        activePageTab.value = tab;
      },
    });

    const policyScopeTabModel = computed({
      get: () => policyScopeTab.value,
      set: (scope: 'os' | 'browser') => {
        policyScopeTab.value = scope;
      },
    });

    watch(activePageTab, () => {
      selectedPolicies.value = [];
      showSavedConfirmation.value = false;
      isSaving.value = false;
    });

    watch(policyScopeTab, () => {
      selectedPolicies.value = [];
      first.value = 0;
      searchQuery.value = '';
      filterBy.value = 'all';
      showSavedConfirmation.value = false;
      isSaving.value = false;
    });

    const filteredPolicies = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      return policies.value.filter((policy) => {
        const matchesSearch =
          !query
          || policy.name.toLowerCase().includes(query)
          || policy.description.toLowerCase().includes(query)
          || policy.requirements.toLowerCase().includes(query);
        const matchesFilter =
          filterBy.value === 'all'
          || (policyScopeTab.value === 'os' && policy.os === filterBy.value)
          || (policyScopeTab.value === 'browser' && policy.browser === filterBy.value);
        const matchesScope = policy.scope === policyScopeTab.value;
        return matchesSearch && matchesFilter && matchesScope;
      });
    });

    const currentPagePolicies = computed(() =>
      filteredPolicies.value.slice(first.value, first.value + rows.value),
    );

    const releaseTrains = computed(() => {
      if (releaseTrainTab.value === 'ios') return IOS_RELEASE_TRAINS;
      if (releaseTrainTab.value === 'windows') return WINDOWS_RELEASE_TRAINS;
      if (releaseTrainTab.value === 'ubuntu') return UBUNTU_RELEASE_TRAINS;
      return MACOS_RELEASE_TRAINS;
    });

    const hasPendingTableActions = computed(() => selectedPolicies.value.length > 0);

    const editingPolicyEditor = computed(() =>
      editingPolicy.value ? POLICY_EDITORS[editingPolicy.value.name] ?? null : null,
    );

    const tableSaveBarMessage = computed(() => {
      const count = selectedPolicies.value.length;
      if (policyScopeTab.value === 'browser') {
        if (count === 1) return '1 browser policy selected';
        return `${count} browser policies selected`;
      }
      if (count === 1) return '1 policy selected';
      return `${count} policies selected`;
    });

    const tableSaveBarSavedLabel = computed(() =>
      policyScopeTab.value === 'browser' ? 'Browser policies deleted' : 'Policies deleted',
    );

    watch(hasPendingTableActions, (pending) => {
      if (pending) showSavedConfirmation.value = false;
    });

    function handleSearch(query: string) {
      searchQuery.value = query;
      first.value = 0;
    }

    function handlePageChange(event: { first: number; rows: number }) {
      first.value = event.first;
      rows.value = event.rows;
    }

    async function handleTableSave() {
      if (selectedPolicies.value.length === 0) return;

      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      const selectedIds = new Set(selectedPolicies.value.map((policy) => policy.id));
      policies.value = policies.value.filter((policy) => !selectedIds.has(policy.id));
      selectedPolicies.value = [];
      first.value = 0;
      isSaving.value = false;
      showSavedConfirmation.value = true;
      setTimeout(() => {
        showSavedConfirmation.value = false;
      }, 2000);
    }

    function handleTableDiscard() {
      selectedPolicies.value = [];
      showSavedConfirmation.value = false;
    }

    function openPolicyEditor(policy: PatchPolicy) {
      editingPolicy.value = policy;
      activeView.value = 'edit';
    }

    function closePolicyEditor() {
      activeView.value = 'list';
      editingPolicy.value = null;
    }

    function handleAddPatchPolicyOption(_option?: PatchPolicyAddOption) {
      // Prototype only — creation flows are not built yet.
    }

    function handleAddBrowserPolicy() {
      // Prototype only — browser policy creation is not built yet.
    }

    return {
      ADD_PATCH_POLICY_OPTIONS,
      activePageTab,
      activePageTabModel,
      activeView,
      closePolicyEditor,
      columns,
      currentPagePolicies,
      editingPolicy,
      editingPolicyEditor,
      eventTypeFilter,
      eventTypeOptions,
      filterBy,
      filterByOptions,
      filteredPolicies,
      first,
      handleAddBrowserPolicy,
      handleAddPatchPolicyOption,
      handlePageChange,
      handleSearch,
      handleTableDiscard,
      handleTableSave,
      hasPendingTableActions,
      isSaving,
      menuItems,
      osHistoryFilter,
      osHistoryOptions,
      pageTabs,
      patchReportLabel,
      policies,
      policyScopeOptions,
      policyScopeTab,
      policyScopeTabModel,
      profileMenuItems,
      releaseTrainTab,
      releaseTrainTabs,
      releaseTrains,
      rows,
      searchQuery,
      selectedPolicies,
      showLegacyBanner,
      showSavedConfirmation,
      tableSaveBarMessage,
      tableSaveBarSavedLabel,
      timeRangeFilter,
      timeRangeOptions,
      initialDashboardScopeTab: props.initialDashboardScopeTab,
    };
  },
  template: `
    <PatchPolicyEditPage
      v-if="activeView === 'edit' && editingPolicy"
      :policy="editingPolicy"
      :editor="editingPolicyEditor"
      @back="closePolicyEditor"
    />

    <div v-else class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
        :topNavToggle="true"
      />

      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />
        <PageHeader
          title="Patch Management"
          :tabs="pageTabs"
          v-model:activeTab="activePageTabModel"
        />

        <UnifiedPatchDashboard
          v-show="activePageTab === 'dashboard'"
          :initial-scope-tab="initialDashboardScopeTab"
        />

        <ListPageLayout
          v-show="activePageTab === 'policies'"
          class="w-full! h-full! flex-1 min-h-0 [&_.layout-main]:!pt-md"
        >
          <div class="flex flex-col gap-md h-full min-h-0 overflow-auto px-md pb-md">
            <div class="shrink-0 overflow-visible border-b border-neutral-default_solid pb-md">
              <div class="p-px overflow-visible">
                <PvSelectButton
                  v-model="policyScopeTabModel"
                  :options="policyScopeOptions"
                  optionLabel="label"
                  optionValue="value"
                  :allowEmpty="false"
                />
              </div>
            </div>

            <MessageNotification
              v-if="policyScopeTab === 'os' && showLegacyBanner"
              class="[&_.text-body-sm]:block [&_.text-body-sm]:max-w-[1200px]"
              severity="warn"
              title="Prepare for Legacy macOS Patch Policy Retirement"
              detail="Legacy macOS patch policies will transition to Declarative Device Management (DDM) policies on December 31, 2024. Ensure you are prepared to migrate to DDM-based software update policies to continue managing macOS updates after this date."
              closable
              @close="showLegacyBanner = false"
            >
              <template #button>
                <!-- Opaque secondary-base backing so Circuit's semi-transparent hover token composites correctly on the warn banner. -->
                <div class="shrink-0 self-start rounded-sm bg-button-secondary-base">
                  <PvButton label="Learn About DDM Policies" severity="secondary" size="small" />
                </div>
              </template>
            </MessageNotification>

            <div v-if="policyScopeTab === 'os'" class="grid grid-cols-2 gap-md shrink-0">
              <div class="rounded-sm border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md min-h-72">
                <div class="flex items-center justify-between gap-sm">
                  <span class="text-heading-4 text-neutral-base">Update History</span>
                  <LinkText label="View Activity Log" href="#" />
                </div>

                <div class="grid grid-cols-3 gap-sm">
                  <PvSelect
                    v-model="eventTypeFilter"
                    :options="eventTypeOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full!"
                  />
                  <PvSelect
                    v-model="osHistoryFilter"
                    :options="osHistoryOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full!"
                  />
                  <PvSelect
                    v-model="timeRangeFilter"
                    :options="timeRangeOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full!"
                  />
                </div>

                <div class="flex flex-1 flex-col items-center justify-center gap-sm rounded-sm border border-neutral-default_solid bg-neutral-base px-md py-xl text-center">
                  <span class="text-body-md text-neutral-subtle">No recent activity for this time frame</span>
                  <span class="text-body-xs text-neutral-muted">Time Range by Day</span>
                </div>
              </div>

              <div class="rounded-sm border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md min-h-72">
                <span class="text-heading-4 text-neutral-base">Release Trains</span>

                <PvTabs v-model:value="releaseTrainTab">
                  <PvTabList>
                    <PvTab v-for="tab in releaseTrainTabs" :key="tab.value" :value="tab.value">
                      {{ tab.label }}
                    </PvTab>
                  </PvTabList>
                </PvTabs>

                <div class="grid grid-cols-[1fr_auto_auto] gap-x-md gap-y-sm text-body-xs text-neutral-muted px-xs">
                  <span>Name</span>
                  <span>Latest Version</span>
                  <span>Released</span>
                </div>

                <div class="flex flex-col gap-sm">
                  <div
                    v-for="train in releaseTrains"
                    :key="train.id"
                    class="grid grid-cols-[1fr_auto_auto] gap-x-md gap-y-0 items-center border-b border-neutral-default_solid pb-sm last:border-b-0"
                  >
                    <span class="text-body-md text-neutral-base">{{ train.name }}</span>
                    <span class="text-body-md text-neutral-base">{{ train.latestVersion }}</span>
                    <span class="text-body-md text-neutral-subtle">{{ train.released }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="patch-management-policies-table flex flex-col flex-1 min-h-96 relative">
              <DataTable
                class="flex-1 min-h-0"
                :data="currentPagePolicies"
                :columns="columns"
                selectionMode="multiple"
                v-model:selection="selectedPolicies"
                dataKey="id"
                :paginator="true"
                :rows="rows"
                :first="first"
                :totalRecords="filteredPolicies.length"
                :lazy="true"
                :showRowsPerPageOptions="false"
                :showPageReport="true"
                scrollable
                scrollHeight="flex"
                @update:first="first = $event"
                @update:rows="rows = $event"
                @page-change="handlePageChange"
              >
                <template #toolbar>
                  <div class="flex items-start gap-x-4 w-full pb-4">
                    <PatchPolicyAddDropdown
                      v-if="policyScopeTab === 'os'"
                      class="flex shrink-0 items-center h-8"
                      :options="ADD_PATCH_POLICY_OPTIONS"
                      @select="handleAddPatchPolicyOption"
                    />
                    <DataTableToolbar
                      class="min-w-0 flex-1"
                      searchPlaceholder="Search"
                      :showAddButton="policyScopeTab === 'browser'"
                      add-button-label="Add Browser"
                      :showFilterButton="false"
                      :showRefreshButton="false"
                      :showColumnsButton="false"
                      :showDownloadButton="false"
                      :showSaveViewButton="false"
                      @add="handleAddBrowserPolicy"
                      @search="handleSearch"
                    >
                    <template #saved-views>
                      <div class="flex items-center gap-sm">
                        <PvSelect
                          v-model="filterBy"
                          :options="filterByOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-40!"
                        />
                        <span class="text-body-md text-neutral-subtle">
                          {{ filteredPolicies.length }} policies
                        </span>
                      </div>
                    </template>

                    <template #column-config>
                      <LinkText href="#" target="_blank" :showIcon="false">
                        <DocumentTextIcon class="size-5 shrink-0" />
                        {{ patchReportLabel }}
                      </LinkText>
                    </template>
                    </DataTableToolbar>
                  </div>
                </template>

                <template #empty>
                  <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                    <span class="text-body-md">No patch policies match your search</span>
                    <span class="text-body-sm mt-1">Try adjusting your search or filter criteria</span>
                  </div>
                </template>

                <template #initialEmpty>
                  <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                    <span class="text-body-md">No patch policies yet</span>
                    <span class="text-body-sm mt-1">Add your first patch policy to get started</span>
                  </div>
                </template>
              </DataTable>

              <PageSaveBar
                :visible="hasPendingTableActions"
                :saving="isSaving"
                :saved="showSavedConfirmation"
                :message="tableSaveBarMessage"
                saveLabel="Delete"
                discardLabel="Cancel"
                :savedLabel="tableSaveBarSavedLabel"
                @save="handleTableSave"
                @discard="handleTableDiscard"
              />
            </div>
          </div>
        </ListPageLayout>
      </div>
    </div>
  `,
});

export { PatchManagementPage };

const meta: Meta<typeof PatchManagementPage> = {
  title: "Projects/Mike's Playground/Device Management/Patch Management",
  component: PatchManagementPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<typeof PatchManagementPage> = {};

export const BrowserPolicies: StoryObj<typeof PatchManagementPage> = {
  render: () => ({
    components: { PatchManagementPage },
    template: '<PatchManagementPage initial-policy-scope-tab="browser" />',
  }),
};

export const UnifiedPatchDashboardTab: StoryObj<typeof PatchManagementPage> = {
  render: () => ({
    components: { PatchManagementPage },
    template: '<PatchManagementPage initial-page-tab="dashboard" />',
  }),
};

export const UnifiedPatchDashboardAppleTab: StoryObj<typeof PatchManagementPage> = {
  render: () => ({
    components: { PatchManagementPage },
    template: '<PatchManagementPage initial-page-tab="dashboard" initial-dashboard-scope-tab="apple" />',
  }),
};

export const UnifiedPatchDashboardWindowsTab: StoryObj<typeof PatchManagementPage> = {
  render: () => ({
    components: { PatchManagementPage },
    template: '<PatchManagementPage initial-page-tab="dashboard" initial-dashboard-scope-tab="windows" />',
  }),
};
