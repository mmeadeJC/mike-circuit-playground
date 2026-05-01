import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent, computed, watch, onMounted } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableCellText,
  DataTableCellLink,
  DataTableCellToken,
  LinkText,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import SelectButton from 'primevue/selectbutton';

import {
  HomeIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  ShieldExclamationIcon,
  KeyIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  BellIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  SunIcon,
} from '@heroicons/vue/24/outline';

import {
  PasswordManagerIcon,
  JumpCloudIcon,
} from '@jumpcloud/icons';

import TopBar from '../../../../components/AdminTopBar.vue';

// ─── Stat Card Component ──────────────────────────────────────────

const StatCard = defineComponent({
  name: 'StatCard',
  props: {
    label: { type: String, required: true },
    value: { type: [String, Number], required: true },
    unit: { type: String, default: '' },
    trend: { type: String, default: '' },
    trendDirection: { type: String, default: 'up' },
  },
  template: `
    <div class="border border-neutral-default_solid rounded-md p-4 flex flex-col gap-2 bg-neutral-base">
      <span class="text-body-sm text-neutral-subtle">{{ label }}</span>
      <div class="flex items-baseline gap-1.5">
        <span class="text-heading-1 text-neutral-base">{{ value }}</span>
        <span class="text-body-md text-neutral-subtle">{{ unit }}</span>
      </div>
      <div v-if="trend" class="flex items-center gap-1">
        <svg v-if="trendDirection === 'down'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3 h-3 text-tag-danger-text">
          <path fill-rule="evenodd" d="M8 1a.75.75 0 0 1 .75.75v9.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V1.75A.75.75 0 0 1 8 1Z" clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3 h-3 text-tag-success-text">
          <path fill-rule="evenodd" d="M8 15a.75.75 0 0 0 .75-.75V4.56l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72v9.69c0 .414.336.75.75.75Z" clip-rule="evenodd" />
        </svg>
        <span :class="trendDirection === 'down' ? 'text-tag-danger-text' : 'text-tag-success-text'" class="text-body-sm">{{ trend }}</span>
      </div>
    </div>
  `,
});

// ─── Status Tag Component ─────────────────────────────────────────

const RequestStatusTag = defineComponent({
  name: 'RequestStatusTag',
  props: { statusLabel: { type: String, default: 'Approved' } },
  components: { PvTag: Tag },
  template: `
    <PvTag :severity="statusLabel === 'Denied' ? 'danger' : 'success'">
      {{ statusLabel }}
    </PvTag>
  `,
});

// ─── Credential Type Tag ──────────────────────────────────────────

const CredentialTypeTag = defineComponent({
  name: 'CredentialTypeTag',
  props: { label: { type: String, default: '' } },
  template: `<span class="text-body-sm text-tag-danger-text">{{ label }}</span>`,
});

// ─── Expiry Label Component ───────────────────────────────────────

const ExpiryLabel = defineComponent({
  name: 'ExpiryLabel',
  props: {
    type: { type: String, default: 'Key' },
    text: { type: String, default: '' },
    urgent: { type: Boolean, default: false },
  },
  template: `
    <div class="flex items-center gap-1">
      <span class="text-body-sm text-neutral-subtle">{{ type }}:</span>
      <span :class="urgent ? 'text-tag-danger-text' : 'text-tag-warn-text'" class="text-body-sm">{{ text }}</span>
    </div>
  `,
});

// ─── Last Used Label ──────────────────────────────────────────────

const LastUsedLabel = defineComponent({
  name: 'LastUsedLabel',
  props: {
    type: { type: String, default: 'Key' },
    text: { type: String, default: '' },
    severe: { type: Boolean, default: false },
  },
  template: `
    <div class="flex items-center gap-1">
      <span class="text-body-sm text-neutral-subtle">{{ type }}:</span>
      <span :class="severe ? 'text-tag-danger-text' : 'text-tag-warn-text'" class="text-body-sm">{{ text }}</span>
    </div>
  `,
});

// ─── Navigation Data ──────────────────────────────────────────────

const vaultNavItems = [
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Websites', leftIcon: markRaw(GlobeAltIcon) },
  { label: 'Computers', leftIcon: markRaw(ComputerDesktopIcon) },
  { label: 'Databases', leftIcon: markRaw(CircleStackIcon) },
  { label: 'Blocking Rules', leftIcon: markRaw(ShieldExclamationIcon), isNew: true },
  { label: 'Credentials', leftIcon: markRaw(KeyIcon) },
  { label: 'Access Requests', leftIcon: markRaw(ClipboardDocumentListIcon) },
  { label: 'Administration', leftIcon: markRaw(Cog6ToothIcon) },
];

const vaultProfileMenuItems = [
  {
    label: 'Mike Meade',
    itemType: 'profile_compact',
    initials: 'MM',
    name: 'Mike Meade',
    items: [
      { label: 'Mike Meade', itemType: 'profile_large', name: 'Mike Meade', email: 'mike.meade@company.com', initials: 'MM' },
      { separator: true },
      { label: 'Logout' },
    ],
  },
];

// ─── Most Connected Resources Data ────────────────────────────────

const connectedResourcesData = [
  { id: 1, name: 'Label Cell', type: 'Label Cell', actions: 'Label Cell' },
  { id: 2, name: 'Label Cell', type: 'Label Cell', actions: 'Label Cell' },
  { id: 3, name: 'Label Cell', type: 'Label Cell', actions: 'Label Cell' },
];

const connectedResourcesColumns = [
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'type', header: 'Type', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'actions', header: 'Actions', sortable: true, component: markRaw(DataTableCellText) },
];

// ─── Access Requests Data ─────────────────────────────────────────

const accessRequestsData = [
  { id: 1, credentialName: 'Table Link', credentialSub: 'Label Cell', requester: 'Admin Admin', requestedTime: 'Jan 9, 2026, 12:00 PM', requestedStartTime: 'Jan 9, 2026, 12:00 PM', requestedEndTime: 'Jan 9, 2026, 12:00 PM', status: 'Approved' },
  { id: 2, credentialName: 'Table Link', credentialSub: 'Label Cell', requester: 'Admin Admin', requestedTime: 'Jan 9, 2026, 12:00 PM', requestedStartTime: 'Jan 9, 2026, 12:00 PM', requestedEndTime: 'Jan 9, 2026, 12:00 PM', status: 'Approved' },
  { id: 3, credentialName: 'Table Link', credentialSub: 'Label Cell', requester: 'Admin Admin', requestedTime: 'Jan 9, 2026, 12:00 PM', requestedStartTime: 'Jan 9, 2026, 12:00 PM', requestedEndTime: 'Jan 9, 2026, 12:00 PM', status: 'Denied' },
  { id: 4, credentialName: 'Table Link', credentialSub: 'Label Cell', requester: 'Admin Admin', requestedTime: 'Jan 9, 2026, 12:00 PM', requestedStartTime: 'Jan 9, 2026, 12:00 PM', requestedEndTime: 'Jan 9, 2026, 12:00 PM', status: 'Denied' },
  { id: 5, credentialName: 'Table Link', credentialSub: 'Label Cell', requester: 'Admin Admin', requestedTime: 'Jan 9, 2026, 12:00 PM', requestedStartTime: 'Jan 9, 2026, 12:00 PM', requestedEndTime: 'Jan 9, 2026, 12:00 PM', status: 'Approved' },
  { id: 6, credentialName: 'Table Link', credentialSub: 'Label Cell', requester: 'Admin Admin', requestedTime: 'Jan 9, 2026, 12:00 PM', requestedStartTime: 'Jan 9, 2026, 12:00 PM', requestedEndTime: 'Jan 9, 2026, 12:00 PM', status: 'Approved' },
];

const BoldLabelCell = defineComponent({
  name: 'BoldLabelCell',
  props: {
    label: { type: String, default: '' },
    description: { type: String, default: '' },
  },
  template: `
    <div class="flex flex-col">
      <span class="text-body-md font-semibold text-neutral-base">{{ label }}</span>
      <span v-if="description" class="text-body-sm text-neutral-subtle">{{ description }}</span>
    </div>
  `,
});

const accessRequestsColumns = [
  { field: 'credentialName', header: 'Credential Name', sortable: true, component: markRaw(BoldLabelCell), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.credentialName, description: sp.data.credentialSub }) },
  { field: 'requester', header: 'Requester', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'requestedTime', header: 'Requested Time', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'requestedStartTime', header: 'Requested Start Time', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'requestedEndTime', header: 'Requested End Time', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'status', header: 'Status', sortable: true, component: markRaw(RequestStatusTag), componentProps: (sp: { data: Record<string, unknown> }) => ({ statusLabel: sp.data.status }) },
];

// ─── Recent Logins Data ───────────────────────────────────────────

const recentLoginsData = [
  { name: 'Sarah Chen', email: 'sarah@company.com', time: '8 minutes ago' },
  { name: 'Marcus Rodriguez', email: 'marcus@company.com', time: '36 minutes ago' },
  { name: 'Emily Johnson', email: 'emily@company.com', time: '2 hours ago' },
  { name: 'Michael Smith', email: 'michael@company.com', time: '16 hours ago' },
];

// ─── Credential Expirations Data ──────────────────────────────────

const credentialExpirationsData = [
  { name: 'Sarah Chen', email: 'sarah@company.com', type: 'Key', expiry: 'Expires 1 day', urgent: true },
  { name: 'Marcus Rodriguez', email: 'marcus@company.com', type: 'Password', expiry: 'Expires 2 days', urgent: true },
  { name: 'Emily Johnson', email: 'emily@company.com', type: 'Password', expiry: 'Expires 3 days', urgent: false },
  { name: 'Michael Smith', email: 'michael@company.com', type: 'Key', expiry: 'Expires 6 days', urgent: false },
];

// ─── Weak Credentials Data ────────────────────────────────────────

const weakCredentialsData = [
  { name: 'AWS Gabriel', type: 'Key Credential' },
  { name: 'Test 10', type: 'Password Credential' },
  { name: 'AWS Gabriel', type: 'Password Credential' },
  { name: 'MySQL Admin', type: 'Key Credential' },
];

// ─── Unused Credentials Data ──────────────────────────────────────

const unusedCredentialsData = [
  { name: 'AWS Gabriel', type: 'Key', text: 'Last Used 46 days ago', severe: false },
  { name: 'Test 10', type: 'Password', text: 'Last Used 123 days ago', severe: true },
  { name: 'AWS Gabriel', type: 'Password', text: 'Last Used 53 days ago', severe: true },
  { name: 'MySQL Admin', type: 'Key', text: 'Last Used 66 days ago', severe: true },
];

// ─── Main Dashboard Component ─────────────────────────────────────

const VaultDashboard = defineComponent({
  name: 'VaultDashboard',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    CircuitDataTable,
    TopBar,
    PvButton: Button,
    PvTag: Tag,
    PvDivider: Divider,
    StatCard,
    RequestStatusTag,
    PvSelectButton: SelectButton,
    HomeIcon,
    BellIcon,
    MoonIcon,
    SunIcon,
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    EllipsisHorizontalIcon,
  },
  setup() {
    const selectedResources = ref<typeof connectedResourcesData>([]);
    const selectedRequests = ref<typeof accessRequestsData>([]);

    const themeMode = ref(
      document.documentElement.getAttribute('data-theme') === 'circuit-dark' ? 'dark' : 'light'
    );

    const themeModeOptions = [
      { value: 'light', icon: markRaw(SunIcon) },
      { value: 'dark', icon: markRaw(MoonIcon) },
    ];

    function applyTheme(mode: string) {
      document.documentElement.setAttribute(
        'data-theme',
        mode === 'dark' ? 'circuit-dark' : 'circuit-light'
      );
    }

    const bodyTextColor = computed(() => themeMode.value === 'dark' ? '#ffffff' : '#0F202F');
    const subtleTextColor = computed(() => themeMode.value === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(15,32,47,0.74)');

    onMounted(() => applyTheme(themeMode.value));
    watch(themeMode, (val) => applyTheme(val));

    return {
      vaultNavItems,
      vaultProfileMenuItems,
      connectedResourcesData,
      connectedResourcesColumns,
      accessRequestsData,
      accessRequestsColumns,
      recentLoginsData,
      credentialExpirationsData,
      weakCredentialsData,
      unusedCredentialsData,
      selectedResources,
      selectedRequests,
      themeMode,
      themeModeOptions,
      bodyTextColor,
      subtleTextColor,
    };
  },
  template: `
    <div class="flex h-screen bg-neutral-surface overflow-hidden">
      <!-- Left Navigation -->
      <AppNavigation
        :menuItems="vaultNavItems"
        :profileMenuItems="vaultProfileMenuItems"
        :collapsible="true"
        :topNavToggle="true"
      >
        <template #logo="{ class: cls }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 109 20" :class="cls">
            <g clip-path="url(#jc-logo-a)">
              <path fill-rule="evenodd" d="M30.864 15.137a4.3 4.3 0 0 0 1.275-3.057 4.31 4.31 0 0 0-1.706-3.431 4.38 4.38 0 0 0-3.778-.743 4.58 4.58 0 0 0-1.936-3.566 4.65 4.65 0 0 0-4.025-.654 5.68 5.68 0 0 0-5.852-2.646 5.65 5.65 0 0 0-4.575 4.488 4.35 4.35 0 0 0-4.285 2.539 4.37 4.37 0 0 0-4.718.98A4.3 4.3 0 0 0 .35 13.75a4.35 4.35 0 0 0 4.014 2.653h.03l.024-.002v.002h1.144c.257-1.108 1.473-2.036 3.141-2.484a3.18 3.18 0 0 1-.714-3.49 3.22 3.22 0 0 1 2.978-1.983 3.22 3.22 0 0 1 2.978 1.983 3.18 3.18 0 0 1-.715 3.49 6.5 6.5 0 0 1 1.585.645 6.6 6.6 0 0 1 2.731-1.393 3.73 3.73 0 0 1-.838-4.093A3.78 3.78 0 0 1 20.2 6.753c1.531 0 2.91.918 3.493 2.325a3.73 3.73 0 0 1-.838 4.093c2.114.568 3.608 1.793 3.733 3.232h1.145l-.001-.002h.01l.013.001h.031a4.37 4.37 0 0 0 3.077-1.265m7.3-6.542v7.362c0 1.898-.764 3.103-2.842 3.103a5 5 0 0 1-.73-.065l.1-1.932q.262.05.531.05c.515 0 .681-.347.681-.859v-7.66zm6.713 7.808h2.21V8.578H44.81v4.358c0 .99-.599 1.667-1.562 1.667-.83 0-1.196-.544-1.196-1.353V8.578h-2.26v5.3c0 1.7.764 2.756 2.26 2.756 1.246 0 2.21-.792 2.658-2.311h.166zm7.644-6.009c-.963 0-1.578.677-1.578 1.651v4.358h-2.26V8.578h2.21v2.097h.166c.449-1.519 1.396-2.311 2.642-2.311 1.396 0 2.077.875 2.177 2.344h.182c.432-1.535 1.33-2.344 2.626-2.344 1.545 0 2.326 1.04 2.326 2.74v5.299h-2.276V11.73c0-.792-.366-1.337-1.197-1.337-.964 0-1.562.677-1.562 1.651v4.358h-2.26V11.73c0-.792-.382-1.337-1.196-1.337m17.698 2.113c0-2.69-.981-4.143-2.71-4.143-1.262 0-2.126.825-2.541 2.195h-.15V8.58h-2.26v10.333h2.26v-4.556h.133c.399 1.37 1.246 2.278 2.559 2.278 1.695 0 2.709-1.436 2.709-4.127m-5.4.33c0 1.09.63 1.816 1.594 1.816 1.097 0 1.579-.71 1.579-2.146s-.482-2.113-1.562-2.113c-.997 0-1.612.71-1.612 1.832zm11.797-1.073 2.094-.396c-.283-1.898-1.28-3.004-3.623-3.004-2.508 0-4.037 1.568-4.037 4.226 0 2.674 1.562 4.044 4.054 4.044 2.243 0 3.357-1.14 3.623-2.955l-2.077-.495c-.166.809-.55 1.486-1.563 1.486-1.162 0-1.728-.81-1.728-2.196 0-1.485.649-2.146 1.695-2.146.997 0 1.363.594 1.562 1.436m3.407-5.959h2.26v10.598h-2.26zM87.6 16.634c2.51 0 4.038-1.568 4.038-4.143 0-2.609-1.579-4.127-4.038-4.127-2.509 0-4.07 1.518-4.07 4.127 0 2.575 1.511 4.143 4.07 4.143m1.778-4.16c0-1.42-.548-2.228-1.794-2.228s-1.795.808-1.795 2.228.515 2.245 1.795 2.245c1.263 0 1.794-.825 1.794-2.245m8.525 3.929h2.21V8.578h-2.277v4.358c0 .99-.598 1.667-1.561 1.667-.831 0-1.197-.544-1.197-1.353V8.578h-2.26v5.3c0 1.7.764 2.756 2.26 2.756 1.246 0 2.21-.792 2.659-2.311h.166zm11.084 0h-2.26v-2.047h-.133c-.399 1.37-1.263 2.278-2.576 2.278-1.695 0-2.691-1.436-2.691-4.077 0-2.724.996-4.193 2.725-4.193 1.262 0 2.11.825 2.525 2.195h.15V5.805h2.26zm-3.855-1.75c-1.114 0-1.595-.693-1.595-2.096 0-1.47.498-2.163 1.578-2.163.997 0 1.612.726 1.612 1.865v.611c0 1.09-.648 1.783-1.595 1.783M35.816 6.39c0 .668.545 1.21 1.218 1.21s1.219-.542 1.219-1.21c0-.321-.129-.63-.357-.856a1.22 1.22 0 0 0-.862-.355c-.673 0-1.218.542-1.218 1.21" clip-rule="evenodd"/>
            </g>
            <defs><clipPath id="jc-logo-a"><path d="M0 .953h109v18.094H0z"/></clipPath></defs>
          </svg>
        </template>
      </AppNavigation>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Top Bar -->
        <TopBar searchPlaceholder="Search Resources, Users, Settings, etc..." shortcutLabel="⌘/Ctrl + K">
          <template #icon-buttons>
            <PvButton severity="secondary" variant="text" rounded aria-label="Notifications">
              <template #icon><BellIcon class="w-5 h-5" /></template>
            </PvButton>
            <PvButton severity="secondary" variant="text" rounded aria-label="Settings">
              <template #icon><Cog6ToothIcon class="w-5 h-5" /></template>
            </PvButton>
            <PvSelectButton
              v-model="themeMode"
              :options="themeModeOptions"
              optionValue="value"
              :allowEmpty="false"
            >
              <template #option="{ option }">
                <component :is="option.icon" class="w-4 h-4" />
              </template>
            </PvSelectButton>
          </template>
        </TopBar>

        <!-- Page Header -->
        <PageHeader title="Home">
          <template #actions>
            <PvButton label="Customize" severity="secondary" variant="outlined" />
            <PvButton label="Export" severity="secondary" variant="outlined" />
            <PvButton severity="secondary" variant="outlined" aria-label="More actions">
              <template #icon><EllipsisHorizontalIcon class="w-5 h-5" /></template>
            </PvButton>
          </template>
        </PageHeader>

        <!-- Scrollable Dashboard Content -->
        <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-6">

          <!-- Stats Row -->
          <div class="grid grid-cols-4 gap-4">
            <StatCard label="Total Users" :value="168" unit="Users" trend="8% vs last month" trendDirection="down" />
            <StatCard label="Resources" :value="122" unit="Resources" trend="2 new this month" trendDirection="up" />
            <StatCard label="Secrets" :value="86" unit="Devices" trend="23% vs last month" trendDirection="up" />
            <StatCard label="Connectors" :value="40" unit="Connectors" trend="5.3% vs last month" trendDirection="up" />
          </div>

          <!-- Most Connected Resources -->
          <CollapsiblePanel header="Most Connected Resources">
            <CircuitDataTable
              :columns="connectedResourcesColumns"
              :data="connectedResourcesData"
              v-model:selection="selectedResources"
              selectionMode="multiple"
              dataKey="id"
              :paginator="false"
            />
          </CollapsiblePanel>

          <!-- Access Requests -->
          <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
            <div class="flex items-center justify-between px-4 py-3">
              <span class="text-heading-4 text-neutral-base">Access Requests</span>
              <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
            </div>
            <CircuitDataTable
              :columns="accessRequestsColumns"
              :data="accessRequestsData"
              v-model:selection="selectedRequests"
              selectionMode="multiple"
              dataKey="id"
              :paginator="false"
            />
          </div>

          <!-- Bottom 2x2 Grid -->
          <div class="grid grid-cols-2 gap-4">

            <!-- Recent Logins -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Recent Logins</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">26</span>
                  <span :style="{ color: subtleTextColor, fontSize: '14px', lineHeight: '20px' }">Logins in the last</span>
                  <span :style="{ color: subtleTextColor, fontSize: '14px', lineHeight: '20px', fontWeight: 600 }">48 hours</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(login, idx) in recentLoginsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < recentLoginsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <div class="flex flex-col">
                      <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ login.name }}</span>
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ login.email }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">logged in: <span class="text-link-base">{{ login.time }}</span></span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Credential Expirations -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Credential Expirations</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">7</span>
                  <span :style="{ color: subtleTextColor, fontSize: '14px', lineHeight: '20px' }">Expiring Soon</span>
                  <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">Next 7 days</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(cred, idx) in credentialExpirationsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < credentialExpirationsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <div class="flex flex-col">
                      <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ cred.name }}</span>
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ cred.email }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ cred.type }}: {{ cred.expiry }}</span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Weak Credentials -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Weak Credentials</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">11</span>
                  <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">Credentials</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(weak, idx) in weakCredentialsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < weakCredentialsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ weak.name }}</span>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ weak.type }}</span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Unused Credentials -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Unused Credentials</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">14</span>
                  <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">Unused</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(unused, idx) in unusedCredentialsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < unusedCredentialsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ unused.name }}</span>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ unused.type }}: {{ unused.text }}</span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Bottom Help Link -->
          <div class="flex items-center gap-1 pb-4 text-body-sm text-neutral-subtle">
            <span>Having trouble with the new navigation?</span>
            <span class="text-link-base cursor-pointer hover:underline">Check out the guide</span>
          </div>

        </div>
      </div>
    </div>
  `,
});

// ─── Story Meta ───────────────────────────────────────────────────

const meta: Meta<typeof VaultDashboard> = {
  title: "Projects/Mike's Playground/JumpCloud Vault/Darkmode Screens",
  component: VaultDashboard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof VaultDashboard>;

export const HomePage: Story = {};
