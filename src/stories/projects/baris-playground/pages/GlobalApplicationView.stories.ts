import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, computed, markRaw, defineComponent, watch } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  CardButton,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellLink,
  DataTableCellText,
  DataTableCellStatus,
  MessageNotification,
  FormField,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import SelectButton from 'primevue/selectbutton';
import Menu from 'primevue/menu';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

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
  ChevronRightIcon,
  Squares2X2Icon,
  MagnifyingGlassCircleIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  KeyIcon,
  EyeIcon,
  LinkIcon,
  ArrowsRightLeftIcon,
  XMarkIcon,
  CpuChipIcon,
} from '@heroicons/vue/24/outline';

// @ts-expect-error Vue SFC import
import AdminTopBar from '@/components/AdminTopBar.vue';
// @ts-expect-error Vue SFC import
import DetailPageLayout from '@/components/layout/page-layouts/DetailPageLayout.vue';
// @ts-expect-error Vue SFC import
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';
// @ts-expect-error Vue SFC import
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
  WorkflowIcon,
} from '@jumpcloud/icons';

// ─── Static nav: Applications & Services is its own top-level item with 3 sub-items ───

const applicationsAndServicesSubItems = [
  { label: 'All Applications', leftIcon: markRaw(Squares2X2Icon) },
  { label: 'Discovered', leftIcon: markRaw(MagnifyingGlassCircleIcon) },
  { label: 'Connectors & Config', leftIcon: markRaw(SsoIcon) },
];

const accessMenuBlock = [
  { label: 'Access Requests', leftIcon: markRaw(ClipboardDocumentCheckIcon) },
  { label: 'Vault', leftIcon: markRaw(PasswordManagerIcon), isNew: true },
  { separator: true },
  { label: 'LDAP' },
  { label: 'RADIUS' },
];

const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Alerts', leftIcon: markRaw(BellIcon), count: 31 },
  {
    label: 'User Management',
    leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
      { separator: true },
      { label: 'Active Directories' },
      { label: 'Cloud Directories' },
      { label: 'HR Directories' },
      { label: 'Identity Providers' },
    ],
  },
  {
    label: 'Device Management',
    leftIcon: markRaw(DeviceManagementIcon),
    items: [
      { label: 'Devices', leftIcon: markRaw(DeviceListsIcon) },
      { label: 'Device Groups', leftIcon: markRaw(DeviceGroupsIcon) },
      { label: 'Commands', leftIcon: markRaw(CommandLineIcon) },
      { label: 'Asset Management', leftIcon: markRaw(ClipboardDocumentListIcon), isNew: true },
      { separator: true },
      { label: 'Policy Management' },
      { label: 'Patch Management' },
      { label: 'Policy Groups' },
      { label: 'Software Management' },
      { label: 'MDM' },
    ],
  },
  {
    label: 'Applications & Services',
    leftIcon: markRaw(SaasManagementIcon),
    items: applicationsAndServicesSubItems,
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    items: accessMenuBlock,
  },
  { label: 'Workflows', leftIcon: markRaw(WorkflowIcon) },
  {
    label: 'Security',
    leftIcon: markRaw(ShieldCheckIcon),
    items: [
      { label: 'Conditional Access Policies' },
      { label: 'Conditional Lists' },
      { label: 'Certificate Authority', isNew: true },
      { label: 'MFA Configurations' },
      { label: 'Device Trust' },
      { label: 'Password Policies' },
    ],
  },
  {
    label: 'Insights',
    leftIcon: markRaw(ChartBarSquareIcon),
    items: [{ label: 'Reports' }, { label: 'Directory Insights' }],
  },
  { label: 'Settings', leftIcon: markRaw(Cog6ToothIcon) },
];

const profileMenuItems = [
  {
    label: 'Barış Ermut',
    itemType: 'profile_compact',
    initials: 'BE',
    name: 'Barış Ermut',
    items: [
      {
        label: 'Admin IT',
        itemType: 'profile_large',
        name: 'Admin IT',
        email: 'admin_it@company.com',
        initials: 'AT',
      },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
      { separator: true },
      { label: 'Billing' },
      { label: 'My API Key' },
      { separator: true },
      { label: 'Use Old Navigation', itemType: 'button' },
    ],
  },
];

// ─── Table data & column types ───

/** Discovered-view segmented control: Newly Discovered / Approved / All. */
type DiscoveryFilterId = 'new' | 'approved' | 'all';

interface UnifiedAppRow {
  id: string;
  name: string;
  category: string;
  type: string;
  management: string;
  ssoLabel: string;
  saasLabel: string;
  deviceSource: string;
  accounts: number;
  detailProfile: 'full' | 'governance';
  /** Discovered list only: whether the app is still newly discovered or already approved. */
  discoveryWorkflow?: 'new' | 'approved';
}

/** Stat card filter for the Applications & Services catalog table (All + Discovered views). */
type CatalogStatId = 'total' | 'discovered' | 'sso' | 'mcp' | 'saas_tracked';

function filterUnifiedRowsByStat(rows: UnifiedAppRow[], id: CatalogStatId): UnifiedAppRow[] {
  if (id === 'total') return [...rows];
  if (id === 'discovered') return rows.filter((r) => r.saasLabel === 'Discovered');
  if (id === 'sso') return rows.filter((r) => r.ssoLabel === 'Connected');
  if (id === 'mcp') return rows.filter((r) => r.type === 'MCP');
  if (id === 'saas_tracked') return rows.filter((r) => r.saasLabel === 'Tracked');
  return rows;
}

function discoveryWorkflowForRow(r: UnifiedAppRow): 'new' | 'approved' {
  return r.discoveryWorkflow ?? 'new';
}

function filterDiscoveredRowsByWorkflow(
  rows: UnifiedAppRow[],
  id: DiscoveryFilterId,
): UnifiedAppRow[] {
  if (id === 'all') return [...rows];
  if (id === 'new') return rows.filter((r) => discoveryWorkflowForRow(r) === 'new');
  return rows.filter((r) => discoveryWorkflowForRow(r) === 'approved');
}

const unifiedAppsData: UnifiedAppRow[] = [
  {
    id: '1',
    name: 'Figma',
    category: 'Design',
    type: 'SaaS',
    management: 'Active',
    ssoLabel: 'Connected',
    saasLabel: 'Tracked',
    deviceSource: 'Win · mac',
    accounts: 52,
    detailProfile: 'full',
  },
  {
    id: '2',
    name: 'Slack',
    category: 'Chat',
    type: 'SaaS',
    management: 'Active',
    ssoLabel: 'Connected',
    saasLabel: 'Tracked',
    deviceSource: '—',
    accounts: 87,
    detailProfile: 'full',
  },
  {
    id: '3',
    name: 'Notion',
    category: 'Productivity',
    type: 'SaaS',
    management: 'Active',
    ssoLabel: 'Available',
    saasLabel: 'Discovered',
    deviceSource: '—',
    accounts: 6,
    detailProfile: 'governance',
    discoveryWorkflow: 'new',
  },
  {
    id: '4',
    name: 'Internal MCP — billing',
    category: 'MCP server',
    type: 'MCP',
    management: 'Active',
    ssoLabel: '—',
    saasLabel: 'Discovered',
    deviceSource: '—',
    accounts: 0,
    detailProfile: 'governance',
    discoveryWorkflow: 'new',
  },
  {
    id: '5',
    name: 'Asana',
    category: 'Productivity',
    type: 'SaaS',
    management: 'Active',
    ssoLabel: 'Available',
    saasLabel: 'Discovered',
    deviceSource: '—',
    accounts: 12,
    detailProfile: 'governance',
    discoveryWorkflow: 'approved',
  },
];

const discoveredAppsData = unifiedAppsData.filter((r) => r.saasLabel === 'Discovered');

interface ConnectorRow {
  id: string;
  name: string;
  inPortal: string;
  functionality: string;
  certExpires: string;
  status: string;
  detailTitle: string;
}

const connectorsData: ConnectorRow[] = [
  {
    id: 'c1',
    name: 'Google Workspace',
    inPortal: 'Yes',
    functionality: 'Identity Management',
    certExpires: 'Expires 10-07-2029',
    status: 'Active',
    detailTitle: 'Google Workspace',
  },
  {
    id: 'c2',
    name: 'Slack',
    inPortal: 'Yes',
    functionality: 'Identity Management',
    certExpires: 'Expires 06-01-2027',
    status: 'Active',
    detailTitle: 'Slack',
  },
  {
    id: 'c3',
    name: 'Figma',
    inPortal: 'Yes',
    functionality: 'Identity Management',
    certExpires: 'Expires 03-22-2028',
    status: 'Active',
    detailTitle: 'Figma',
  },
];

type ListVariant = 'all' | 'discovered' | 'connectors';
type MainShell = 'global-app' | 'external';
type AppPage = 'list' | 'detail';

// ─── Single interactive page (list ↔ detail, nav, add) ───

const GlobalApplicationViewPage = defineComponent({
  name: 'GlobalApplicationViewPage',
  components: {
    AppNavigation,
    AdminTopBar,
    PageHeader,
    ListPageLayout,
    DetailPageLayout,
    CardButton,
    CircuitDataTable,
    DataTableToolbar,
    SelectButton,
    CollapsiblePanel,
    MessageNotification,
    Tag,
    Button,
    Menu,
    Dialog,
    FormField,
    InputText,
    DetailsKeyValue,
    XMarkIcon,
  },
  setup() {
    const mainShell = ref<MainShell>('global-app');
    const externalTitle = ref('');

    const page = ref<AppPage>('list');
    const listVariant = ref<ListVariant>('all');
    const listVariantAtDetail = ref<ListVariant>('all');
    const selectedApp = ref<UnifiedAppRow | null>(null);

    const activeNavItem = ref('all applications');
    const navScopeNote = ref('');

    const showAddDialog = ref(false);
    const addFormName = ref('');

    const catalogStatFilter = ref<CatalogStatId>('total');
    const discoveryFilter = ref<DiscoveryFilterId>('new');
    const discoveryFilterOptions = computed(() => {
      const newlyDiscoveredCount = discoveredAppsData.filter(
        (r) => discoveryWorkflowForRow(r) === 'new',
      ).length;
      return [
        { label: `Newly Discovered (${newlyDiscoveredCount})`, value: 'new' as const },
        { label: 'Approved', value: 'approved' as const },
        { label: 'All Apps', value: 'all' as const },
      ];
    });

    const activeDetailTab = ref<string | number>('overview');
    const actionsMenu = ref<InstanceType<typeof Menu> | null>(null);
    const actionMenuModel = ref([
      { label: 'Export summary' },
      { label: 'Open in AI & SaaS Management (legacy)' },
      { separator: true },
      { label: 'Remove from catalog' },
    ]);
    const overviewSsoCollapsed = ref(false);
    const overviewSaasCollapsed = ref(false);
    const overviewSoftwareCollapsed = ref(false);

    function listKeyToActiveNav(k: ListVariant) {
      if (k === 'all') return 'all applications';
      if (k === 'discovered') return 'discovered';
      return 'connectors & config';
    }

    function goList(variant: ListVariant) {
      mainShell.value = 'global-app';
      page.value = 'list';
      listVariant.value = variant;
      selectedApp.value = null;
      activeNavItem.value = listKeyToActiveNav(variant);
      navScopeNote.value = '';
      catalogStatFilter.value = 'total';
    }

    function goExternal(title: string) {
      mainShell.value = 'external';
      externalTitle.value = title;
    }

    function returnFromExternal() {
      goList('all');
    }

    // AppNavigation emits PrimeVue's processedItem; label lives on .item (same as UserDemoNav / AdminDemoNav).
    type ProcessedNavItem = {
      item?: { label?: string; separator?: boolean };
      items?: unknown[];
    };

    function onNavClick(processedItem: ProcessedNavItem) {
      if (Array.isArray(processedItem?.items) && processedItem.items.length > 0) return;
      const raw = processedItem?.item;
      if (raw?.separator) return;
      const label = (raw?.label || '').trim();
      if (!label) return;
      const key = label.toLowerCase();

      if (key === 'applications & services') {
        goList('all');
        return;
      }
      if (key === 'all applications') {
        goList('all');
        return;
      }
      if (key === 'discovered') {
        goList('discovered');
        return;
      }
      if (key === 'connectors & config') {
        goList('connectors');
        return;
      }

      if (['access requests', 'vault', 'ldap', 'radius'].includes(key)) {
        navScopeNote.value = `${label} is not implemented in this prototype.`;
        activeNavItem.value = key;
        return;
      }

      goExternal(label);
    }

    function backToList() {
      page.value = 'list';
      selectedApp.value = null;
      listVariant.value = listVariantAtDetail.value;
      activeNavItem.value = listKeyToActiveNav(listVariantAtDetail.value);
    }

    function openRowDetail(row: UnifiedAppRow) {
      listVariantAtDetail.value = listVariant.value;
      selectedApp.value = row;
      page.value = 'detail';
      activeNavItem.value = listKeyToActiveNav(listVariantAtDetail.value);
      activeDetailTab.value = 'overview';
    }

    function openConnectorDetail(row: ConnectorRow) {
      listVariantAtDetail.value = 'connectors';
      const match = unifiedAppsData.find(
        (a) => a.name.toLowerCase() === row.name.toLowerCase(),
      );
      selectedApp.value = match ?? {
        id: row.id,
        name: row.detailTitle,
        category: 'Connector',
        type: 'SaaS',
        management: 'Active',
        ssoLabel: 'Connected',
        saasLabel: 'Tracked',
        deviceSource: '—',
        accounts: 0,
        detailProfile: 'full',
      };
      page.value = 'detail';
      activeNavItem.value = 'connectors & config';
      activeDetailTab.value = 'overview';
    }

    const unifiedColumns = [
      {
        field: 'name',
        header: 'Application',
        sortable: true,
        width: '240px',
        component: markRaw(DataTableCellLink),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.name as string,
          description: sp.data.category as string,
          href: '#',
        }),
      },
      {
        field: 'type',
        header: 'Type',
        sortable: true,
        width: '100px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.type as string,
        }),
      },
      {
        field: 'management',
        header: 'Management',
        sortable: true,
        width: '120px',
        component: markRaw(DataTableCellStatus),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          type: 'Status',
          statusLabel: sp.data.management as string,
        }),
      },
      {
        field: 'ssoLabel',
        header: 'SSO',
        sortable: false,
        width: '120px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.ssoLabel as string,
        }),
      },
      {
        field: 'saasLabel',
        header: 'SaaS visibility',
        sortable: false,
        width: '140px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.saasLabel as string,
        }),
      },
      {
        field: 'deviceSource',
        header: 'Device source',
        sortable: false,
        width: '140px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.deviceSource as string,
        }),
      },
      {
        field: 'accounts',
        header: 'Accounts',
        sortable: true,
        width: '100px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: String(sp.data.accounts),
        }),
      },
    ];

    const connectorColumns = [
      {
        field: 'name',
        header: 'Application',
        sortable: true,
        width: '240px',
        component: markRaw(DataTableCellLink),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.name as string,
          description: 'SSO / SCIM connector',
          href: '#',
        }),
      },
      {
        field: 'status',
        header: 'Status',
        sortable: true,
        width: '120px',
        component: markRaw(DataTableCellStatus),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          type: 'Status',
          statusLabel: sp.data.status as string,
        }),
      },
      {
        field: 'inPortal',
        header: 'Show in User Portal',
        sortable: false,
        width: '140px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.inPortal as string,
        }),
      },
      {
        field: 'functionality',
        header: 'Supported Functionality',
        sortable: false,
        width: '200px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.functionality as string,
        }),
      },
      {
        field: 'certExpires',
        header: 'IdP Certificate',
        sortable: false,
        width: '180px',
        component: markRaw(DataTableCellText),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          label: sp.data.certExpires as string,
        }),
      },
    ];

    const showCatalogOverview = computed(() => listVariant.value === 'all');

    const catalogStatSnapshot = computed(() => {
      const rows = unifiedAppsData;
      return {
        total: rows.length,
        discovered: rows.filter((r) => r.saasLabel === 'Discovered').length,
        sso: rows.filter((r) => r.ssoLabel === 'Connected').length,
        mcp: rows.filter((r) => r.type === 'MCP').length,
        saas_tracked: rows.filter((r) => r.saasLabel === 'Tracked').length,
      };
    });

    const catalogStatCards = computed(() => {
      const s = catalogStatSnapshot.value;
      return [
        {
          id: 'total' as CatalogStatId,
          title: 'All applications',
          content: `${s.total} in this view`,
          icon: markRaw(Squares2X2Icon),
        },
        {
          id: 'discovered' as CatalogStatId,
          title: 'Discovered apps',
          content: `${s.discovered} with Discovered visibility`,
          icon: markRaw(MagnifyingGlassCircleIcon),
        },
        {
          id: 'sso' as CatalogStatId,
          title: 'SSO connected',
          content: `${s.sso} with JumpCloud SSO`,
          icon: markRaw(ArrowsRightLeftIcon),
        },
        {
          id: 'mcp' as CatalogStatId,
          title: 'MCPs discovered',
          content: `${s.mcp} MCP servers in catalog`,
          icon: markRaw(CpuChipIcon),
        },
        {
          id: 'saas_tracked' as CatalogStatId,
          title: 'SaaS tracked',
          content: `${s.saas_tracked} with agent tracking`,
          icon: markRaw(EyeIcon),
        },
      ];
    });

    function selectCatalogStat(id: CatalogStatId) {
      if (catalogStatFilter.value === id && id !== 'total') {
        catalogStatFilter.value = 'total';
        return;
      }
      catalogStatFilter.value = id;
    }

    const tableData = computed(() => {
      if (listVariant.value === 'connectors') return connectorsData;
      if (listVariant.value === 'discovered') {
        return filterDiscoveredRowsByWorkflow(discoveredAppsData, discoveryFilter.value);
      }
      return filterUnifiedRowsByStat(unifiedAppsData, catalogStatFilter.value);
    });

    const tableColumns = computed(() =>
      listVariant.value === 'connectors' ? connectorColumns : unifiedColumns,
    );

    const listPageTitle = computed(() => {
      if (listVariant.value === 'discovered') return 'Discovered';
      if (listVariant.value === 'connectors') return 'Connectors & Config';
      return 'All Applications';
    });

    const listSubtitle = computed(() =>
      listVariant.value === 'connectors'
        ? 'Create and manage SAML, OIDC, and SCIM connectors'
        : 'Applications & Services — unified catalog for SaaS, device software, and connectors',
    );

    const listPageIcon = computed(() =>
      listVariant.value === 'connectors' ? markRaw(SsoIcon) : markRaw(Squares2X2Icon),
    );

    const addButtonLabel = computed(() =>
      listVariant.value === 'connectors' ? 'Add Connector' : 'Add Application',
    );
    const searchPlaceholder = computed(() =>
      listVariant.value === 'connectors' ? 'Search connectors...' : 'Search applications...',
    );

    const backButtonLabel = computed(() => {
      if (listVariantAtDetail.value === 'discovered') return 'Discovered';
      if (listVariantAtDetail.value === 'connectors') return 'Connectors & Config';
      return 'All Applications';
    });

    const isFullDetail = computed(
      () => (selectedApp.value?.detailProfile ?? 'full') === 'full',
    );

    const detailPageTabs = computed(() => {
      if (isFullDetail.value) {
        return [
          { label: 'Overview', value: 'overview' },
          { label: 'Software packages', value: 'software' },
          { label: 'SSO & SCIM', value: 'sso' },
          { label: 'Accounts', value: 'accounts' },
          { label: 'Licenses', value: 'licenses' },
        ];
      }
      return [
        { label: 'Overview', value: 'overview' },
        { label: 'Accounts', value: 'accounts' },
        { label: 'Licenses', value: 'licenses' },
      ];
    });

    watch(detailPageTabs, (tabs) => {
      const allowed = new Set(tabs.map((t) => String(t.value)));
      if (!allowed.has(String(activeDetailTab.value))) {
        activeDetailTab.value = 'overview';
      }
    });

    function handleListRowClick(event: { data: Record<string, unknown> }) {
      if (listVariant.value === 'connectors') {
        openConnectorDetail(event.data as unknown as ConnectorRow);
      } else {
        openRowDetail(event.data as unknown as UnifiedAppRow);
      }
    }

    function openAddFlow() {
      addFormName.value = '';
      showAddDialog.value = true;
    }

    function saveAddDialog() {
      showAddDialog.value = false;
      navScopeNote.value = addFormName.value
        ? `“${addFormName.value}” was recorded (mock). No API call.`
        : 'Add flow completed (mock).';
    }

    return {
      menuItems,
      profileMenuItems,
      activeNavItem,
      onNavClick,
      mainShell,
      externalTitle,
      returnFromExternal,
      page,
      listVariant,
      navScopeNote,
      showCatalogOverview,
      catalogStatCards,
      catalogStatFilter,
      selectCatalogStat,
      tableData,
      tableColumns,
      listPageTitle,
      listSubtitle,
      listPageIcon,
      addButtonLabel,
      searchPlaceholder,
      discoveryFilter,
      discoveryFilterOptions,
      backToList,
      backButtonLabel,
      handleListRowClick,
      showAddDialog,
      addFormName,
      openAdd: openAddFlow,
      saveAddDialog,
      selectedApp,
      activeDetailTab,
      detailPageTabs,
      isFullDetail,
      actionsMenu,
      actionMenuModel,
      overviewSsoCollapsed,
      overviewSaasCollapsed,
      overviewSoftwareCollapsed,
      SaasManagementIcon: markRaw(SaasManagementIcon),
      KeyIcon: markRaw(KeyIcon),
      EyeIcon: markRaw(EyeIcon),
      ComputerDesktopIcon: markRaw(ComputerDesktopIcon),
      ChevronRightIcon: markRaw(ChevronRightIcon),
      ChevronDownIcon: markRaw(ChevronDownIcon),
      ArrowsRightLeftIcon: markRaw(ArrowsRightLeftIcon),
      LinkIcon: markRaw(LinkIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        :activeItem="activeNavItem"
        :collapsible="true"
        :topNavToggle="true"
        @click="onNavClick"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <template v-if="mainShell === 'external'">
          <AdminTopBar />
          <div class="flex flex-col gap-4 p-6 flex-1 overflow-auto bg-neutral-surface">
            <MessageNotification
              severity="info"
              title="Outside this demo"
              :detail="externalTitle + ' is not implemented. Use Access and All Applications to return to the Global Application View prototype.'"
            />
            <div>
              <Button label="Back to All Applications" @click="returnFromExternal" />
            </div>
          </div>
        </template>

        <template v-else>
          <AdminTopBar v-if="page === 'list'" />
          <AdminTopBar
            v-else
            showBackButton
            :backButtonLabel="backButtonLabel"
            @back="backToList"
          />

          <template v-if="page === 'list'">
            <PageHeader
              :title="listPageTitle"
              :subtitleText="listSubtitle"
              :icon="listPageIcon"
            />
            <MessageNotification
              v-if="navScopeNote"
              class="shrink-0"
              severity="info"
              :title="navScopeNote"
            />
            <ListPageLayout class="w-full! flex-1! min-h-0!">
              <div
                class="-mt-6 flex min-h-0 min-w-0 flex-1 flex-col [&>*]:px-6"
              >
              <div
                v-if="listVariant === 'discovered'"
                class="shrink-0 py-3 border-b border-neutral-default_solid bg-neutral-base"
              >
                <SelectButton
                  v-model="discoveryFilter"
                  :options="discoveryFilterOptions"
                  optionLabel="label"
                  optionValue="value"
                />
              </div>
              <div
                v-if="showCatalogOverview"
                class="shrink-0 border-b border-neutral-default_solid bg-neutral-surface pt-2 pb-4"
              >
                <div
                  class="grid grid-cols-1 min-[520px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-5 gap-3"
                >
                  <div
                    v-for="card in catalogStatCards"
                    :key="card.id"
                    class="min-w-0 overflow-hidden rounded-md"
                    :class="
                      catalogStatFilter === card.id
                        ? 'bg-state-selected ring-1 ring-inset ring-branding-base'
                        : ''
                    "
                  >
                    <CardButton
                      :title="card.title"
                      :content="card.content"
                      size="small"
                      :class="
                        catalogStatFilter === card.id
                          ? '!bg-transparent !shadow-none'
                          : ''
                      "
                      @click="selectCatalogStat(card.id)"
                    >
                      <template #leading>
                        <component :is="card.icon" class="size-5 text-neutral-subtle shrink-0" />
                      </template>
                    </CardButton>
                  </div>
                </div>
              </div>
              <div
                class="flex min-h-0 flex-1 flex-col bg-neutral-surface"
                :class="showCatalogOverview ? 'pt-3' : 'pt-6'"
              >
                <CircuitDataTable
                  :columns="tableColumns"
                  :data="tableData"
                  :card="true"
                  size="default"
                  :scrollable="true"
                  scrollHeight="flex"
                  :paginator="true"
                  :rows="10"
                  :rowsPerPageOptions="[
                    { label: '10 Items per page', value: 10 },
                    { label: '20 Items per page', value: 20 },
                    { label: '50 Items per page', value: 50 },
                  ]"
                  :showRowsPerPageOptions="true"
                  :showPageReport="true"
                  :pt="{
                    root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                    tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                  }"
                  :ptOptions="{ mergeSections: true, mergeProps: true }"
                  @row-click="handleListRowClick"
                >
                  <template #toolbar>
                    <DataTableToolbar
                      :addButtonLabel="addButtonLabel"
                      :searchPlaceholder="searchPlaceholder"
                      :showFilterButton="true"
                      :showRefreshButton="true"
                      :showColumnsButton="listVariant !== 'connectors'"
                      @add="openAdd"
                    />
                  </template>
                  <template #empty>
                    <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                      <span class="text-body-md">No applications match your filters</span>
                    </div>
                  </template>
                  <template #initialEmpty>
                    <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                      <span class="text-body-md">No applications yet</span>
                    </div>
                  </template>
                </CircuitDataTable>
              </div>
              </div>
            </ListPageLayout>
          </template>

          <template v-else-if="page === 'detail' && selectedApp">
            <PageHeader
              :title="selectedApp.name"
              :subtitleText="selectedApp.category + ' · ' + selectedApp.type"
              :icon="SaasManagementIcon"
              :tabs="detailPageTabs"
              :activeTab="activeDetailTab"
              tabsWithPadding
              @update:activeTab="activeDetailTab = $event"
            >
              <template #actions>
                <div class="flex items-center gap-sm">
                  <Button
                    v-if="!isFullDetail"
                    label="Add SSO connector"
                    size="small"
                    severity="secondary"
                    variant="outlined"
                  />
                  <Button
                    label="Actions"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    @click="(e) => actionsMenu?.toggle(e)"
                  >
                    <template #icon>
                      <component :is="ChevronDownIcon" class="size-4" />
                    </template>
                  </Button>
                  <Menu
                    ref="actionsMenu"
                    :model="actionMenuModel"
                    :popup="true"
                  />
                </div>
              </template>
            </PageHeader>
            <div
              class="shrink-0 flex flex-wrap items-center gap-2 px-6 py-3 border-b border-neutral-default_solid bg-neutral-base"
            >
              <Tag value="Approved" severity="success" class="!normal-case" />
              <Tag
                v-if="isFullDetail"
                value="SSO: connector available + connected"
                severity="success"
                class="!normal-case"
              />
              <Tag
                v-else
                value="SSO: not configured"
                severity="secondary"
                class="!normal-case"
              />
              <Tag value="SaaS: visibility tracked" severity="success" class="!normal-case" />
              <Tag
                v-if="isFullDetail"
                value="Devices: software deployed (Win · macOS)"
                severity="info"
                class="!normal-case"
              />
            </div>
            <DetailPageLayout class="w-full! flex-1! min-h-0!">
              <div class="flex flex-col gap-4">
                <MessageNotification
                  v-if="isFullDetail"
                  severity="warn"
                  title="3 unassigned accounts are using this app — review assignments."
                />
                <div v-if="activeDetailTab === 'overview'" class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle max-w-3xl">
                    One application record: connectors, SaaS discovery, and device packages when used.
                    Sections apply based on your organization.
                  </p>
                  <CollapsiblePanel
                    v-model:collapsed="overviewSaasCollapsed"
                    toggleable
                    header="SaaS & governance"
                  >
                    <template #titleicon="iconProps">
                      <component :is="EyeIcon" :class="iconProps.class" />
                    </template>
                    <template #actions>
                      <Button label="Open accounts" variant="outlined" severity="secondary" size="small" />
                    </template>
                    <template #toggleicon="iconProps">
                      <component :is="ChevronRightIcon" :class="iconProps.class" />
                    </template>
                    <div class="grid grid-cols-2 gap-x-6 gap-y-3">
                      <DetailsKeyValue label="Sources" value="Browser extension, Connector" />
                      <DetailsKeyValue label="App category" :value="selectedApp.category" />
                      <DetailsKeyValue label="SSO" :value="selectedApp.ssoLabel" />
                      <DetailsKeyValue label="Owner" value="Barış Ermut" />
                    </div>
                  </CollapsiblePanel>
                  <CollapsiblePanel
                    v-model:collapsed="overviewSsoCollapsed"
                    toggleable
                    header="SSO & connectors"
                  >
                    <template #titleicon="iconProps">
                      <component :is="KeyIcon" :class="iconProps.class" />
                    </template>
                    <template #actions>
                      <Button
                        v-if="isFullDetail"
                        label="Open connector"
                        variant="outlined"
                        severity="secondary"
                        size="small"
                      />
                      <Button v-else label="Add from catalog" size="small" />
                    </template>
                    <template #toggleicon="iconProps">
                      <component :is="ChevronRightIcon" :class="iconProps.class" />
                    </template>
                    <div v-if="isFullDetail" class="flex flex-col gap-3">
                      <div class="flex flex-wrap items-center gap-2">
                        <Tag value="SSO: connector in catalog" severity="info" class="!normal-case" />
                        <Tag value="SSO: connected" severity="success" class="!normal-case" />
                      </div>
                      <div class="flex items-center gap-2 text-body-md text-neutral-base">
                        <component :is="ArrowsRightLeftIcon" class="size-5 text-neutral-subtle" />
                        <span>Users sign in through JumpCloud SAML. SCIM is optional.</span>
                      </div>
                      <Button label="Review SSO certificate and bindings" variant="text" severity="secondary" size="small">
                        <template #icon>
                          <component :is="LinkIcon" class="size-4" />
                        </template>
                      </Button>
                    </div>
                    <p v-else class="text-body-md text-neutral-subtle">
                      A connector is available in the catalog but not connected yet. Use Connectors &amp; Config to finish setup.
                    </p>
                  </CollapsiblePanel>
                  <CollapsiblePanel
                    v-model:collapsed="overviewSoftwareCollapsed"
                    toggleable
                    header="Device software"
                  >
                    <template #titleicon="iconProps">
                      <component :is="ComputerDesktopIcon" :class="iconProps.class" />
                    </template>
                    <template #actions>
                      <Button
                        v-if="isFullDetail"
                        label="Manage in Software Management"
                        variant="outlined"
                        severity="secondary"
                        size="small"
                      />
                      <Button v-else label="Add package" size="small" />
                    </template>
                    <template #toggleicon="iconProps">
                      <component :is="ChevronRightIcon" :class="iconProps.class" />
                    </template>
                    <p v-if="isFullDetail" class="text-body-md text-neutral-base">
                      Packages link to Software Management. Device source on the catalog: {{ selectedApp.deviceSource }}.
                    </p>
                    <p v-else class="text-body-md text-neutral-subtle">
                      No device package linked in this example.
                    </p>
                  </CollapsiblePanel>
                </div>
                <p
                  v-else-if="String(activeDetailTab) === 'software' && isFullDetail"
                  class="text-body-md text-neutral-subtle pt-2"
                >
                  Software Management detail (versions, groups, auto-update) — placeholder.
                </p>
                <p
                  v-else-if="String(activeDetailTab) === 'sso' && isFullDetail"
                  class="text-body-md text-neutral-subtle pt-2"
                >
                  Full SSO / SCIM config — placeholder.
                </p>
                <p
                  v-else-if="String(activeDetailTab) === 'accounts'"
                  class="text-body-md text-neutral-subtle pt-2"
                >
                  Accounts table — placeholder.
                </p>
                <p
                  v-else-if="String(activeDetailTab) === 'licenses'"
                  class="text-body-md text-neutral-subtle pt-2"
                >
                  Licenses — placeholder.
                </p>
              </div>
            </DetailPageLayout>
          </template>
        </template>
      </div>

      <Dialog
        v-model:visible="showAddDialog"
        :draggable="false"
        modal
        :header="listVariant === 'connectors' ? 'Add connector' : 'Add application'"
        :style="{ width: '480px' }"
      >
        <template #closeicon>
          <XMarkIcon />
        </template>
        <p class="text-body-md text-neutral-base mb-4">
          Prototype only — name an app or connector to mock the add flow.
        </p>
        <FormField label="Name">
          <template #default="{ inputId }">
            <InputText
              :id="inputId"
              v-model="addFormName"
              class="w-full"
              placeholder="e.g. Acme App"
            />
          </template>
        </FormField>
        <template #footer>
          <div class="flex items-center w-full" />
          <div class="flex gap-sm">
            <Button label="Cancel" severity="secondary" variant="text" @click="showAddDialog = false" />
            <Button label="Save" @click="saveAddDialog" />
          </div>
        </template>
      </Dialog>
    </div>
  `,
});

const meta: Meta<typeof GlobalApplicationViewPage> = {
  title: "Projects/Baris' Playground/Pages/Global Application View",
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GlobalApplicationViewPage>;

export const Default: Story = {
  name: 'Interactive demo',
  render: () => ({
    components: { GlobalApplicationViewPage },
    template: '<GlobalApplicationViewPage />',
  }),
};
