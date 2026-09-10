import type { Meta, StoryObj } from '@storybook/vue3';
import './PatchManagement.stories.css';
import { computed, defineComponent, markRaw, ref, watch } from 'vue';
import {
  ActionsToolbar,
  AppNavigation,
  DataTable,
  DataTableCellLink,
  DataTableCellText,
  DataTableToolbar,
  LinkText,
  ListPageLayout,
  MessageNotification,
  PageHeader,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import Tabs from 'primevue/tabs';
import { ArrowPathIcon, DocumentTextIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { DeviceManagementIcon } from '@jumpcloud/icons';

import TopBar from '@/components/AdminTopBar.vue';
import PatchPolicyAddDropdown, {
  type PatchPolicyAddOption,
} from './PatchPolicyAddDropdown.vue';
import UnifiedPatchDashboard from './UnifiedPatchDashboard.vue';
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

const WindowsIcon = defineComponent({
  name: 'WindowsIcon',
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3 5.548l7.065-0.966v6.822H3V5.548zm0 12.904l7.065 0.966v-6.822H3v5.856zm7.937 1.085L21 21v-7.596H10.937v-0.001 8.133zm0-15.074v8.133H21V3L10.937 4.463z"/></svg>`,
});

const AppleIcon = defineComponent({
  name: 'AppleIcon',
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
});

const IosIcon = defineComponent({
  name: 'IosIcon',
  template: `<div class="flex items-center justify-center size-4"><div class="rounded-full flex items-center justify-center size-3.5 bg-neutral-base"><span class="text-[5px] font-semibold leading-none text-neutral-surface">iOS</span></div></div>`,
});

const LinuxLogoIcon = markRaw(defineComponent({
  name: 'LinuxLogoIcon',
  template: '<img src="/logos/os/linux.svg" alt="" class="size-4" />',
}));

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
    ActionsToolbar,
    AppNavigation,
    DataTable,
    DataTableToolbar,
    LinkText,
    ListPageLayout,
    MessageNotification,
    PageHeader,
    PatchPolicyAddDropdown,
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

    const patchReportLabel = computed(() =>
      policyScopeTab.value === 'browser'
        ? 'Run Browser Patch Management Policy Report'
        : 'Run OS Patch Management Policy Report',
    );

    watch(policyScopeTab, () => {
      selectedPolicies.value = [];
      first.value = 0;
      searchQuery.value = '';
      filterBy.value = 'all';
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

    const selectedItems = computed(() =>
      selectedPolicies.value.map((policy) => ({
        id: policy.id,
        label: policy.name,
        description: policy.description,
      })),
    );

    const bulkActions = [
      { id: 'delete', label: 'Delete', icon: markRaw(TrashIcon), class: 'text-danger-base' },
    ];

    function handleSearch(query: string) {
      searchQuery.value = query;
      first.value = 0;
    }

    function handlePageChange(event: { first: number; rows: number }) {
      first.value = event.first;
      rows.value = event.rows;
    }

    function handleBulkAction(actionId: string) {
      if (actionId !== 'delete') return;
      const selectedIds = new Set(selectedPolicies.value.map((policy) => policy.id));
      policies.value = policies.value.filter((policy) => !selectedIds.has(policy.id));
      selectedPolicies.value = [];
      first.value = 0;
    }

    function handleDeleteSelected() {
      if (selectedPolicies.value.length === 0) return;
      handleBulkAction('delete');
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
      bulkActions,
      columns,
      currentPagePolicies,
      eventTypeFilter,
      eventTypeOptions,
      filterBy,
      filterByOptions,
      filteredPolicies,
      first,
      handleAddBrowserPolicy,
      handleAddPatchPolicyOption,
      handleBulkAction,
      handleDeleteSelected,
      handlePageChange,
      handleSearch,
      menuItems,
      osHistoryFilter,
      osHistoryOptions,
      pageTabs,
      patchReportLabel,
      policies,
      policyScopeOptions,
      policyScopeTab,
      profileMenuItems,
      releaseTrainTab,
      releaseTrainTabs,
      releaseTrains,
      rows,
      searchQuery,
      selectedItems,
      selectedPolicies,
      showLegacyBanner,
      timeRangeFilter,
      timeRangeOptions,
      initialDashboardScopeTab: props.initialDashboardScopeTab,
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

      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />
        <PageHeader
          title="Patch Management"
          :tabs="pageTabs"
          :activeTab="activePageTab"
          @update:activeTab="activePageTab = $event"
        />

        <UnifiedPatchDashboard
          v-if="activePageTab === 'dashboard'"
          :initial-scope-tab="initialDashboardScopeTab"
        />

        <ListPageLayout
          v-else
          class="w-full! h-full! flex-1 min-h-0 [&_.layout-main]:!pt-md"
        >
          <div class="flex flex-col gap-md h-full min-h-0 overflow-auto px-md pb-md">
            <div class="shrink-0 overflow-visible border-b border-neutral-default_solid pb-md">
              <div class="p-px overflow-visible">
                <PvSelectButton
                  v-model="policyScopeTab"
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
                      <div class="flex items-center gap-md">
                        <LinkText href="#" target="_blank" :showIcon="false">
                          <DocumentTextIcon class="size-5 shrink-0" />
                          {{ patchReportLabel }}
                        </LinkText>
                        <PvButton
                          label="Delete"
                          severity="secondary"
                          @click="handleDeleteSelected"
                        />
                      </div>
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

              <Transition
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
              >
                <div
                  v-if="selectedItems.length > 0"
                  class="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
                >
                  <ActionsToolbar
                    :actions="bulkActions"
                    :selectedItems="selectedItems"
                    :selectionLabel="selectedItems.length === 1 ? 'Policy selected' : 'Policies selected'"
                    @action="handleBulkAction"
                    @close="selectedPolicies = []"
                  />
                </div>
              </Transition>
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
