import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent, h } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellLink,
  DataTableCellText,
  FormField,
  MessageNotification,
  SeverityDialog,
  RadioButtonWithLabel,
  ToastNotification,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import { useToast } from 'primevue/usetoast';

import {
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowLeftIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  BanknotesIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  CubeIcon,
  TvIcon,
  DevicePhoneMobileIcon,
  ChevronRightIcon,
  ClockIcon,
} from '@heroicons/vue/24/outline';

import {
  SsoIcon,
  AccessIcon,
  CheckListIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

// @ts-expect-error Vue SFC import
import DetailsKeyValue from '../../../../components/DetailsKeyValue.vue';
// @ts-expect-error Vue SFC import
import DetailPageLayout from '../../../../components/layout/page-layouts/DetailPageLayout.vue';

// ─── User Portal Navigation Data (flat, no nested items) ───

const menuItems = [
  { label: 'All Applications', leftIcon: markRaw(SsoIcon) },
  { label: 'Requests', leftIcon: markRaw(AccessIcon) },
  { label: 'Tasks', leftIcon: markRaw(CheckListIcon) },
  { label: 'My Assets', leftIcon: markRaw(CubeIcon), isNew: true },
  { label: 'Security', leftIcon: markRaw(PasswordManagerIcon) },
];

const profileMenuItems = [
  {
    label: 'Barış Ermut',
    itemType: 'profile_compact',
    initials: 'BE',
    name: 'Barış Ermut',
    items: [
      {
        label: 'Barış Ermut',
        itemType: 'profile_large',
        name: 'Barış Ermut',
        email: 'baris.ermut@company.com',
        initials: 'BE',
      },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      { label: 'Go to Admin Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
    ],
  },
];

// ─── UserAsset Type Definition ───

interface UserAsset {
  id: number;
  assetTag: string;
  name: string;
  type: string;
  serialNumber: string;
  ownershipType: 'Company Owned' | 'BYOD';
  status: 'In Use' | 'Ready' | 'Retired' | 'Repair' | 'Stolen';
  acknowledged: 'Pending' | 'Yes' | 'Denied';
  acknowledgedAt: string | null;
  deniedAt: string | null;
  denialReason: string | null;
  model: string;
  os: string;
  location: string;
  processor: string;
  memory: string;
  storage: string;
  manufacturer: string;
  purchaseDate: string;
  warrantyExpiry: string;
}

// ─── Mock Data: User's Assigned Assets ───

const initialAssets: UserAsset[] = [
  {
    id: 1, assetTag: 'AST-001', name: 'MacBook Pro 16"', type: 'Laptop', serialNumber: 'C02ZW1KZMD6T',
    ownershipType: 'Company Owned', status: 'In Use', acknowledged: 'Yes', acknowledgedAt: 'Feb 10, 2026',
    deniedAt: null, denialReason: null, model: 'MacBook Pro (16-inch, 2024)', os: 'macOS 15.3',
    location: 'San Francisco HQ', processor: 'Apple M3 Max', memory: '36 GB', storage: '1 TB SSD',
    manufacturer: 'Apple', purchaseDate: 'Jan 15, 2025', warrantyExpiry: 'Jan 15, 2028',
  },
  {
    id: 2, assetTag: 'AST-014', name: 'Dell UltraSharp U2723QE', type: 'Monitor', serialNumber: 'CN-0A1B2C',
    ownershipType: 'Company Owned', status: 'Ready', acknowledged: 'Pending', acknowledgedAt: null,
    deniedAt: null, denialReason: null, model: 'U2723QE 27"', os: 'N/A',
    location: 'San Francisco HQ', processor: 'N/A', memory: 'N/A', storage: 'N/A',
    manufacturer: 'Dell', purchaseDate: 'Mar 05, 2025', warrantyExpiry: 'Mar 05, 2028',
  },
  {
    id: 3, assetTag: 'AST-027', name: 'Logitech MX Master 3S', type: 'Mouse', serialNumber: '910-006556',
    ownershipType: 'Company Owned', status: 'In Use', acknowledged: 'Yes', acknowledgedAt: 'Jan 20, 2026',
    deniedAt: null, denialReason: null, model: 'MX Master 3S', os: 'N/A',
    location: 'San Francisco HQ', processor: 'N/A', memory: 'N/A', storage: 'N/A',
    manufacturer: 'Logitech', purchaseDate: 'Dec 01, 2024', warrantyExpiry: 'Dec 01, 2026',
  },
  {
    id: 4, assetTag: 'AST-033', name: 'iPhone 15 Pro', type: 'Phone', serialNumber: 'DNQXYZ123456',
    ownershipType: 'Company Owned', status: 'Repair', acknowledged: 'Pending', acknowledgedAt: null,
    deniedAt: null, denialReason: null, model: 'iPhone 15 Pro 256GB', os: 'iOS 18.3',
    location: 'San Francisco HQ', processor: 'A17 Pro', memory: '8 GB', storage: '256 GB',
    manufacturer: 'Apple', purchaseDate: 'Sep 22, 2024', warrantyExpiry: 'Sep 22, 2026',
  },
  {
    id: 5, assetTag: 'AST-045', name: 'ThinkPad X1 Carbon', type: 'Laptop', serialNumber: 'PF3KXYZ1',
    ownershipType: 'BYOD', status: 'Retired', acknowledged: 'Denied', acknowledgedAt: null,
    deniedAt: 'Feb 18, 2026', denialReason: 'This is not my device. I believe it was assigned to me in error.',
    model: 'ThinkPad X1 Carbon Gen 11', os: 'Windows 11 Pro',
    location: 'Berlin Office', processor: 'Intel Core i7-1365U', memory: '32 GB', storage: '512 GB SSD',
    manufacturer: 'Lenovo', purchaseDate: 'Mar 22, 2025', warrantyExpiry: 'Mar 22, 2028',
  },
  {
    id: 6, assetTag: 'AST-052', name: 'CalDigit TS4 Thunderbolt Dock', type: 'Docking Station', serialNumber: 'CD-TS4-001',
    ownershipType: 'Company Owned', status: 'In Use', acknowledged: 'Yes', acknowledgedAt: 'Feb 14, 2026',
    deniedAt: null, denialReason: null, model: 'TS4 Thunderbolt 4 Dock', os: 'N/A',
    location: 'San Francisco HQ', processor: 'N/A', memory: 'N/A', storage: 'N/A',
    manufacturer: 'CalDigit', purchaseDate: 'Feb 01, 2025', warrantyExpiry: 'Feb 01, 2027',
  },
];

// ─── Custom Cell Components ───

const AcknowledgedCell = markRaw(defineComponent({
  name: 'AcknowledgedCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const ack = props.data?.acknowledged as string;
      const severityMap: Record<string, string> = { Yes: 'success', Pending: 'warn', Denied: 'danger' };
      const iconMap: Record<string, typeof CheckCircleIcon> = {
        Yes: CheckCircleIcon,
        Pending: ExclamationTriangleIcon,
        Denied: XCircleIcon,
      };
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, { severity: severityMap[ack] || 'info', class: 'shrink-0' }, {
          icon: () => h(iconMap[ack] || CheckCircleIcon, { class: 'size-4' }),
          default: () => ack,
        }),
      ]);
    };
  },
}));

const StatusCell = markRaw(defineComponent({
  name: 'StatusCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const status = props.data?.status as string;
      const severityMap: Record<string, string> = { 'In Use': 'success', 'Ready': 'info', 'Retired': 'secondary', 'Repair': 'warn', 'Stolen': 'danger' };
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, { severity: severityMap[status] || 'info', class: 'shrink-0' }, {
          default: () => status,
        }),
      ]);
    };
  },
}));

// ─── Column Definitions ───

const assetColumns = [
  {
    field: 'name',
    header: 'Asset Name',
    sortable: true,
    width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      href: '#',
    }),
  },
  {
    field: 'type',
    header: 'Type',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.type,
    }),
  },
  {
    field: 'serialNumber',
    header: 'Serial Number',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.serialNumber,
    }),
  },
  {
    field: 'ownershipType',
    header: 'Ownership Type',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.ownershipType,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '120px',
    component: StatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'acknowledged',
    header: 'Acknowledged',
    sortable: true,
    width: '140px',
    component: AcknowledgedCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
];

// ─── Component Definition ───

const UserPortalAssetsPage = defineComponent({
  name: 'UserPortalAssetsPage',
  props: {
    variant: { type: String as () => 'default' | 'optionA' | 'optionB' | 'optionD', default: 'default' },
  },
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    CircuitDataTable,
    DataTableToolbar,
    FormField,
    MessageNotification,
    SeverityDialog,
    RadioButtonWithLabel,
    PvButton: Button,
    PvTag: Tag,
    PvDialog: Dialog,
    PvTextarea: Textarea,
    PvDivider: Divider,
    PvAvatar: Avatar,
    ToastNotification,
    DetailPageLayout,
    DetailsKeyValue,
    ArrowLeftIcon,
    CubeIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    BanknotesIcon,
    CheckCircleIcon,
    XCircleIcon,
    ExclamationTriangleIcon,
    XMarkIcon,
    ChevronRightIcon,
    ClockIcon,
  },
  setup(props) {
    const variant = computed(() => props.variant);
    const toast = useToast();
    const currentView = ref<'list' | 'detail' | 'tasks'>(props.variant === 'optionB' ? 'tasks' : 'list');
    const selectedAsset = ref<UserAsset | null>(null);
    const assets = ref<UserAsset[]>(JSON.parse(JSON.stringify(initialAssets)));

    const showAcknowledgeDialog = ref(false);
    const showDenyDialog = ref(false);
    const showLostStolenDialog = ref(false);
    const showEditAcknowledgmentDialog = ref(false);
    const editAcknowledgmentChoice = ref<'Yes' | 'Denied' | 'Pending'>('Pending');
    const editDenyReason = ref('');
    const denyReason = ref('');

    const navigatedFrom = ref<'list' | 'tasks'>('list');

    function openAssetDetail(asset: UserAsset) {
      selectedAsset.value = asset;
      navigatedFrom.value = 'list';
      currentView.value = 'detail';
    }

    function backToList() {
      if (navigatedFrom.value === 'tasks') {
        currentView.value = 'tasks';
      } else {
        currentView.value = 'list';
      }
      selectedAsset.value = null;
    }

    function handleRowClick(row: { data: UserAsset }) {
      openAssetDetail(row.data);
    }

    const assetColumnsWithClick = assetColumns.map(col => {
      if (col.field === 'name') {
        return {
          ...col,
          componentProps: (sp: { data: Record<string, unknown> }) => ({
            label: sp.data.name,
            onClick: (event: MouseEvent) => {
              event.preventDefault();
              openAssetDetail(sp.data as unknown as UserAsset);
            },
          }),
        };
      }
      return col;
    });

    const pageTitle = computed(() => {
      if (currentView.value === 'tasks') return 'Tasks';
      return currentView.value === 'list' ? 'My Assets' : selectedAsset.value?.name ?? '';
    });

    function confirmAcknowledge() {
      if (!selectedAsset.value) return;
      const assetName = selectedAsset.value.name;
      const asset = assets.value.find(a => a.id === selectedAsset.value!.id);
      if (asset) {
        asset.acknowledged = 'Yes';
        asset.acknowledgedAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        selectedAsset.value = { ...asset };
      }
      showAcknowledgeDialog.value = false;
      toast.add({ severity: 'success', summary: 'Asset Acknowledged', detail: `You have acknowledged ${assetName}.`, life: 4000 });
    }

    function confirmDeny() {
      if (!selectedAsset.value) return;
      const assetName = selectedAsset.value.name;
      const asset = assets.value.find(a => a.id === selectedAsset.value!.id);
      if (asset) {
        asset.acknowledged = 'Denied';
        asset.deniedAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        asset.denialReason = denyReason.value;
        selectedAsset.value = { ...asset };
      }
      showDenyDialog.value = false;
      denyReason.value = '';
      toast.add({ severity: 'success', summary: 'Asset Denied', detail: `You have denied the assignment of ${assetName}.`, life: 4000 });
    }

    function confirmLostStolen() {
      if (!selectedAsset.value) return;
      const asset = assets.value.find(a => a.id === selectedAsset.value!.id);
      if (asset) {
        asset.status = 'Stolen';
        selectedAsset.value = { ...asset };
      }
      showLostStolenDialog.value = false;
    }

    function openDenyDialog() {
      denyReason.value = '';
      showDenyDialog.value = true;
    }

    function openEditAcknowledgmentDialog() {
      editAcknowledgmentChoice.value = selectedAsset.value?.acknowledged ?? 'Pending';
      editDenyReason.value = '';
      showEditAcknowledgmentDialog.value = true;
    }

    function confirmEditAcknowledgment() {
      if (!selectedAsset.value) return;
      const asset = assets.value.find(a => a.id === selectedAsset.value!.id);
      if (!asset) return;
      const now = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      asset.acknowledged = editAcknowledgmentChoice.value;
      if (editAcknowledgmentChoice.value === 'Yes') {
        asset.acknowledgedAt = now;
        asset.deniedAt = null;
        asset.denialReason = null;
      } else if (editAcknowledgmentChoice.value === 'Denied') {
        asset.deniedAt = now;
        asset.denialReason = editDenyReason.value || null;
        asset.acknowledgedAt = null;
      } else {
        asset.acknowledgedAt = null;
        asset.deniedAt = null;
        asset.denialReason = null;
      }
      selectedAsset.value = { ...asset };
      showEditAcknowledgmentDialog.value = false;
    }

    const lostStolenDialogContent = computed(() => {
      if (!selectedAsset.value) return '';
      return `You are about to report **${selectedAsset.value.name}** (${selectedAsset.value.assetTag}) as lost or stolen. This will notify your IT administrator and the asset will be flagged for investigation.`;
    });

    const hasHardwareSpecs = computed(() => {
      if (!selectedAsset.value) return false;
      return selectedAsset.value.processor !== 'N/A' || selectedAsset.value.memory !== 'N/A' || selectedAsset.value.storage !== 'N/A';
    });

    const assetTypeIconMap: Record<string, unknown> = {
      Laptop: markRaw(ComputerDesktopIcon),
      Monitor: markRaw(TvIcon),
      Phone: markRaw(DevicePhoneMobileIcon),
      Accessory: markRaw(CubeIcon),
    };

    const assetTypeIcon = computed(() => {
      if (!selectedAsset.value) return undefined;
      return assetTypeIconMap[selectedAsset.value.type] || markRaw(CubeIcon);
    });

    // ─── Tasks (Option B) ───

    const pendingAckAssets = computed(() =>
      assets.value.filter(a => a.acknowledged === 'Pending')
    );

    const accessRequestResolved = ref(false);

    const taskCount = computed(() => {
      let count = pendingAckAssets.value.length;
      if (!accessRequestResolved.value) count += 1;
      return count;
    });

    const taskExpandedMap = ref<Record<string, boolean>>({});

    function isTaskCollapsed(key: string): boolean {
      return !taskExpandedMap.value[key];
    }

    function setTaskExpanded(key: string, expanded: boolean) {
      taskExpandedMap.value = { ...taskExpandedMap.value, [key]: expanded };
    }

    function viewAssetFromTask(asset: UserAsset) {
      selectedAsset.value = asset;
      navigatedFrom.value = 'tasks';
      currentView.value = 'detail';
    }

    function goToTasksForAsset(asset: UserAsset) {
      setTaskExpanded('task-' + asset.id, true);
      currentView.value = 'tasks';
      selectedAsset.value = null;
    }

    const computedMenuItems = computed(() =>
      menuItems.map(item => ({
        ...item,
        ...(item.label === 'Tasks' && props.variant === 'optionB' && taskCount.value > 0
          ? { label: `Tasks (${taskCount.value})`, command: () => { currentView.value = 'tasks'; selectedAsset.value = null; } }
          : item.label === 'Tasks' && props.variant === 'optionB'
            ? { command: () => { currentView.value = 'tasks'; selectedAsset.value = null; } }
            : {}),
        ...(item.label === 'My Assets' && props.variant === 'optionB'
          ? { command: () => { currentView.value = 'list'; selectedAsset.value = null; } }
          : {}),
      }))
    );

    const activeNavItem = computed(() =>
      currentView.value === 'tasks' ? computedMenuItems.value.find(i => i.label.startsWith('Tasks'))?.label.toLowerCase() ?? 'tasks' : 'my assets'
    );

    const pageTabs = computed(() => {
      if (currentView.value === 'tasks') return [{ label: `Resources (${taskCount.value})`, value: 'resources' }];
      return undefined;
    });

    const activePageTab = computed(() => {
      if (currentView.value === 'tasks') return 'resources';
      return undefined;
    });

    function acknowledgeFromTask(asset: UserAsset) {
      selectedAsset.value = asset;
      showAcknowledgeDialog.value = true;
    }

    function denyFromTask(asset: UserAsset) {
      selectedAsset.value = asset;
      denyReason.value = '';
      showDenyDialog.value = true;
    }

    function resolveAccessRequest() {
      accessRequestResolved.value = true;
    }

    return {
      variant,
      computedMenuItems,
      activeNavItem,
      profileMenuItems,
      currentView,
      selectedAsset,
      assets,
      assetColumnsWithClick,
      showAcknowledgeDialog,
      showDenyDialog,
      showLostStolenDialog,
      showEditAcknowledgmentDialog,
      editAcknowledgmentChoice,
      editDenyReason,
      denyReason,
      pageTitle,
      pageTabs,
      activePageTab,
      pendingAckAssets,
      accessRequestResolved,
      taskCount,
      navigatedFrom,
      taskExpandedMap,
      isTaskCollapsed,
      setTaskExpanded,
      viewAssetFromTask,
      goToTasksForAsset,
      assetTypeIconMap,
      acknowledgeFromTask,
      denyFromTask,
      resolveAccessRequest,
      lostStolenDialogContent,
      hasHardwareSpecs,
      assetTypeIcon,
      backToList,
      handleRowClick,
      confirmAcknowledge,
      confirmDeny,
      confirmLostStolen,
      openDenyDialog,
      openEditAcknowledgmentDialog,
      confirmEditAcknowledgment,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <ToastNotification />
      <AppNavigation
        :menuItems="computedMenuItems"
        :profileMenuItems="profileMenuItems"
        :activeItem="activeNavItem"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

        <!-- Back button bar (detail view only) -->
        <div v-if="currentView === 'detail'" class="shrink-0 flex items-center h-12 px-4 border-b border-navigation-top_bar-default bg-navigation-top_bar-default">
          <PvButton
            :label="navigatedFrom === 'tasks' ? 'Tasks' : 'My Assets'"
            severity="secondary"
            variant="text"
            size="small"
            @click="backToList"
          >
            <template #icon>
              <ArrowLeftIcon class="size-4" />
            </template>
          </PvButton>
        </div>

        <PageHeader
          :title="pageTitle"
          :icon="currentView === 'detail' ? assetTypeIcon : undefined"
          :tabs="pageTabs"
          :activeTab="activePageTab"
        >
          <template v-if="currentView === 'detail' || currentView === 'tasks'" #subtitle>
            <div v-if="currentView === 'detail' && selectedAsset" class="flex items-center">
              <span class="text-body-sm text-neutral-subtle">Serial Number&nbsp;</span>
              <span class="text-body-sm text-neutral-base">{{ selectedAsset.serialNumber }}</span>
              <PvDivider layout="vertical" class="my-0!" />
              <PvTag :value="selectedAsset.ownershipType" severity="info" class="!normal-case" />
              <PvDivider layout="vertical" class="my-0!" />
              <PvTag :value="selectedAsset.status" :severity="{ 'In Use': 'success', 'Ready': 'info', 'Retired': 'secondary', 'Repair': 'warn', 'Stolen': 'danger' }[selectedAsset.status] || 'info'" class="!normal-case" />
            </div>
            <span v-if="currentView === 'tasks'" class="text-body-md text-neutral-subtle">Your approval is needed for the following requests.</span>
          </template>
          <template #actions>
            <template v-if="currentView === 'detail' && selectedAsset">
              <template v-if="variant !== 'optionD' && variant !== 'optionB'">
                <PvButton
                  v-if="selectedAsset.acknowledged === 'Pending'"
                  label="Acknowledge"
                  @click="showAcknowledgeDialog = true"
                />
                <PvButton
                  v-if="selectedAsset.acknowledged === 'Pending'"
                  label="Deny Asset"
                  severity="danger"
                  variant="outlined"
                  @click="openDenyDialog"
                />
                <PvButton
                  v-if="selectedAsset.acknowledged !== 'Pending'"
                  label="Edit Acknowledgment"
                  severity="secondary"
                  variant="outlined"
                  @click="openEditAcknowledgmentDialog"
                />
              </template>
              <PvButton
                v-if="selectedAsset.status !== 'Stolen'"
                label="Report Lost/Stolen"
                severity="danger"
                variant="text"
                @click="showLostStolenDialog = true"
              />
            </template>
          </template>
        </PageHeader>

        <!-- ============ LIST VIEW ============ -->
        <div v-if="currentView === 'list'" class="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div class="flex-1 flex flex-col min-h-0 w-full max-w-5xl mx-auto px-6">
            <div class="shrink-0">
              <DataTableToolbar
                searchPlaceholder="Search assets..."
                :showAddButton="false"
                :showFilterButton="true"
                :showRefreshButton="true"
                :showColumnsButton="true"
              />
            </div>
            <div class="flex-1 flex flex-col min-h-0">
              <CircuitDataTable
                :columns="assetColumnsWithClick"
                :data="assets"
                @row-click="handleRowClick"
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
              />
            </div>
          </div>
        </div>

        <!-- ============ DETAIL VIEW ============ -->
        <div v-if="currentView === 'detail' && selectedAsset" class="flex-1 min-h-0 overflow-hidden">
          <DetailPageLayout class="w-full! h-full!" maxWidth="1024">
            <div class="flex flex-col gap-6">

              <!-- Acknowledgment Section (top for optionA / optionB / optionD) -->
              <CollapsiblePanel v-if="variant === 'optionA' || variant === 'optionB' || variant === 'optionD'" header="Acknowledgment">
                <template #titleicon="iconProps">
                  <CheckCircleIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <div class="flex items-center">
                    <PvTag v-if="selectedAsset.acknowledged === 'Yes'" value="Acknowledged" severity="success" class="!normal-case">
                      <template #icon><CheckCircleIcon class="size-4" /></template>
                    </PvTag>
                    <PvTag v-else-if="selectedAsset.acknowledged === 'Denied'" value="Denied" severity="danger" class="!normal-case">
                      <template #icon><XCircleIcon class="size-4" /></template>
                    </PvTag>
                    <template v-else>
                      <PvTag value="Pending" severity="warn" class="!normal-case">
                        <template #icon><ExclamationTriangleIcon class="size-4" /></template>
                      </PvTag>
                      <template v-if="variant === 'optionB'">
                        <PvDivider layout="vertical" class="my-0!" />
                        <PvButton label="Review in Tasks" variant="outlined" severity="secondary" size="small" @click="goToTasksForAsset(selectedAsset)" />
                      </template>
                    </template>
                  </div>
                </template>

                <!-- Pending -->
                <div v-if="selectedAsset.acknowledged === 'Pending'" class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-base">
                    This asset has been assigned to you and requires acknowledgment. Please review the details below and either acknowledge or deny the assignment.
                  </p>
                  <div v-if="variant === 'optionD'" class="flex items-center gap-3">
                    <PvButton label="Acknowledge" @click="showAcknowledgeDialog = true" />
                    <PvButton label="Deny Asset" severity="danger" variant="outlined" @click="openDenyDialog" />
                  </div>
                </div>

                <!-- Acknowledged -->
                <div v-if="selectedAsset.acknowledged === 'Yes'" class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-base">
                    You acknowledged this asset on <strong>{{ selectedAsset.acknowledgedAt }}</strong>.
                  </p>
                  <div v-if="variant === 'optionD'" class="flex items-center gap-3">
                    <PvButton label="Edit Acknowledgment" severity="secondary" variant="outlined" @click="openEditAcknowledgmentDialog" />
                  </div>
                </div>

                <!-- Denied -->
                <div v-if="selectedAsset.acknowledged === 'Denied'" class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-base">
                    You denied this asset assignment<span v-if="selectedAsset.deniedAt"> on <strong>{{ selectedAsset.deniedAt }}</strong></span>.
                  </p>
                  <div v-if="selectedAsset.denialReason" class="flex flex-col gap-1">
                    <span class="text-body-md-semi-bold text-neutral-base">Reason</span>
                    <p class="text-body-md text-neutral-subtle">{{ selectedAsset.denialReason }}</p>
                  </div>
                  <div v-if="variant === 'optionD'" class="flex items-center gap-3">
                    <PvButton label="Edit Acknowledgment" severity="secondary" variant="outlined" @click="openEditAcknowledgmentDialog" />
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- Asset Information -->
              <CollapsiblePanel header="Asset Information">
                <template #titleicon="iconProps">
                  <ComputerDesktopIcon :class="iconProps.class" />
                </template>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <DetailsKeyValue label="Name" :value="selectedAsset.name" />
                  <DetailsKeyValue label="Status">
                    <PvTag :value="selectedAsset.status" :severity="{ 'In Use': 'success', 'Ready': 'info', 'Retired': 'secondary', 'Repair': 'warn', 'Stolen': 'danger' }[selectedAsset.status] || 'info'" class="!normal-case" />
                  </DetailsKeyValue>
                  <DetailsKeyValue label="Asset Tag" :value="selectedAsset.assetTag" />
                  <DetailsKeyValue label="Serial Number" :value="selectedAsset.serialNumber" />
                  <DetailsKeyValue label="Type" :value="selectedAsset.type" />
                  <DetailsKeyValue label="Ownership Type" :value="selectedAsset.ownershipType" />
                  <DetailsKeyValue label="Manufacturer" :value="selectedAsset.manufacturer" />
                  <DetailsKeyValue label="Model" :value="selectedAsset.model" />
                  <DetailsKeyValue label="Location" :value="selectedAsset.location" />
                  <DetailsKeyValue label="Operating System" :value="selectedAsset.os" />
                </div>
              </CollapsiblePanel>

              <!-- Hardware Details (only shown for devices with specs) -->
              <CollapsiblePanel v-if="hasHardwareSpecs" header="Hardware Details">
                <template #titleicon="iconProps">
                  <CpuChipIcon :class="iconProps.class" />
                </template>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <DetailsKeyValue label="Processor" :value="selectedAsset.processor" />
                  <DetailsKeyValue label="Memory" :value="selectedAsset.memory" />
                  <DetailsKeyValue label="Storage" :value="selectedAsset.storage" />
                </div>
              </CollapsiblePanel>

              <!-- Purchase Details -->
              <CollapsiblePanel header="Purchase Details">
                <template #titleicon="iconProps">
                  <BanknotesIcon :class="iconProps.class" />
                </template>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <DetailsKeyValue label="Purchase Date" :value="selectedAsset.purchaseDate" />
                  <DetailsKeyValue label="Warranty Expiry" :value="selectedAsset.warrantyExpiry" />
                </div>
              </CollapsiblePanel>

              <!-- Acknowledgment Section (bottom for default) -->
              <CollapsiblePanel v-if="variant === 'default'" header="Acknowledgment">
                <template #titleicon="iconProps">
                  <CheckCircleIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <PvTag v-if="selectedAsset.acknowledged === 'Yes'" value="Acknowledged" severity="success" class="!normal-case">
                    <template #icon><CheckCircleIcon class="size-4" /></template>
                  </PvTag>
                  <PvTag v-else-if="selectedAsset.acknowledged === 'Denied'" value="Denied" severity="danger" class="!normal-case">
                    <template #icon><XCircleIcon class="size-4" /></template>
                  </PvTag>
                  <PvTag v-else value="Pending" severity="warn" class="!normal-case">
                    <template #icon><ExclamationTriangleIcon class="size-4" /></template>
                  </PvTag>
                </template>

                <!-- Pending -->
                <div v-if="selectedAsset.acknowledged === 'Pending'" class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-base">
                    This asset has been assigned to you and requires acknowledgment. Please review the details above and either acknowledge or deny the assignment.
                  </p>
                  <div class="flex items-center gap-3">
                    <PvButton label="Acknowledge" @click="showAcknowledgeDialog = true" />
                    <PvButton label="Deny Asset" severity="danger" variant="outlined" @click="openDenyDialog" />
                  </div>
                </div>

                <!-- Acknowledged -->
                <div v-if="selectedAsset.acknowledged === 'Yes'" class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-base">
                    You acknowledged this asset on <strong>{{ selectedAsset.acknowledgedAt }}</strong>.
                  </p>
                </div>

                <!-- Denied -->
                <div v-if="selectedAsset.acknowledged === 'Denied'" class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-base">
                    You denied this asset assignment<span v-if="selectedAsset.deniedAt"> on <strong>{{ selectedAsset.deniedAt }}</strong></span>.
                  </p>
                  <div v-if="selectedAsset.denialReason" class="flex flex-col gap-1">
                    <span class="text-body-md-semi-bold text-neutral-base">Reason</span>
                    <p class="text-body-md text-neutral-subtle">{{ selectedAsset.denialReason }}</p>
                  </div>
                </div>
              </CollapsiblePanel>

            </div>
          </DetailPageLayout>
        </div>

        <!-- ============ TASKS VIEW (Option B) ============ -->
        <div v-if="currentView === 'tasks'" class="flex-1 min-h-0 overflow-auto bg-neutral-surface">
          <div class="w-full max-w-3xl mx-auto px-6 py-6">
            <div class="flex flex-col gap-4">

              <!-- Access Request Task -->
              <CollapsiblePanel
                v-if="!accessRequestResolved"
                toggleable
                :collapsed="isTaskCollapsed('access-request')"
                @update:collapsed="setTaskExpanded('access-request', !$event)"
                header="Serhat Test App"
              >
                <template #titleicon="iconProps">
                  <CubeIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <PvButton label="Deny Access" severity="danger" variant="outlined" size="small" @click="resolveAccessRequest" />
                  <PvButton label="Grant Access" variant="outlined" size="small" @click="resolveAccessRequest" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-3">
                  <PvAvatar label="S" shape="circle" size="large" class="bg-[#E87B5E]! text-white!" />
                  <div class="flex items-center gap-4 flex-wrap">
                    <span class="text-body-md text-neutral-base"><strong>Requester:</strong> Serhat Can</span>
                    <span class="text-body-md text-neutral-base"><strong>Email:</strong> serhat.can+afrc@jumpcloud.com</span>
                  </div>
                  <p class="text-body-md text-neutral-base"><strong>Request Reason:</strong> need access to serhat app please please!!!</p>
                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">Approval Flow</span>
                    <div class="flex items-center gap-2">
                      <ClockIcon class="size-4 text-warning-base" />
                      <span class="text-body-md text-neutral-base">Barış Ermut <span class="text-neutral-subtle">(Pending Required Approval)</span></span>
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- Asset Acknowledgment Tasks -->
              <CollapsiblePanel
                v-for="asset in pendingAckAssets"
                :key="'task-' + asset.id"
                toggleable
                :collapsed="isTaskCollapsed('task-' + asset.id)"
                @update:collapsed="setTaskExpanded('task-' + asset.id, !$event)"
                :header="asset.name"
              >
                <template #titleicon="iconProps">
                  <component :is="assetTypeIconMap[asset.type] || assetTypeIconMap['Accessory']" :class="iconProps.class" />
                </template>
                <template #actions>
                  <PvButton label="Deny Asset" severity="danger" variant="outlined" size="small" @click="denyFromTask(asset)" />
                  <PvButton label="Acknowledge" variant="outlined" size="small" @click="acknowledgeFromTask(asset)" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-3">
                  <span class="text-body-md text-neutral-base"><strong>Serial Number:</strong> {{ asset.serialNumber }}</span>
                  <div class="flex items-center justify-between">
                    <span class="text-body-md text-neutral-base"><strong>Requested by:</strong> Admin IT</span>
                    <PvButton label="View Details" severity="secondary" variant="text" size="small" @click="viewAssetFromTask(asset)" />
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- Empty State -->
              <div v-if="taskCount === 0" class="flex flex-col items-center gap-3 py-12">
                <CheckCircleIcon class="size-10 text-success-base" />
                <p class="text-body-md text-neutral-subtle">No pending tasks. You're all caught up!</p>
              </div>

            </div>
          </div>
        </div>

        <!-- ============ ACKNOWLEDGE DIALOG ============ -->
        <PvDialog
          v-model:visible="showAcknowledgeDialog"
          :draggable="false"
          modal
          header="Acknowledge Asset"
          :style="{ width: '480px' }"
        >
          <template #closeicon><XMarkIcon class="size-5" /></template>
          <div class="flex flex-col gap-4">
            <p class="text-body-md text-neutral-base">
              You are confirming that you have received and are in possession of <strong>{{ selectedAsset?.name }}</strong> ({{ selectedAsset?.assetTag }}).
            </p>
            <MessageNotification
              severity="info"
              title="By acknowledging, you accept responsibility for this asset."
            />
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showAcknowledgeDialog = false" />
              <PvButton label="Acknowledge" @click="confirmAcknowledge" />
            </div>
          </template>
        </PvDialog>

        <!-- ============ DENY ASSET DIALOG ============ -->
        <PvDialog
          v-model:visible="showDenyDialog"
          :draggable="false"
          modal
          header="Deny Asset"
          :style="{ width: '560px' }"
        >
          <template #closeicon><XMarkIcon class="size-5" /></template>

          <div class="flex flex-col gap-4">
            <div class="[&_.whitespace-nowrap]:whitespace-normal">
              <MessageNotification
                severity="warn"
                title="What happens when you deny an asset?"
                detail="Your IT administrator will be notified that you are denying this asset. The asset will be marked as denied in the system and may require follow-up from your IT team."
              />
            </div>
            <p class="text-body-md text-neutral-base">
              You are denying <strong>{{ selectedAsset?.name }}</strong> ({{ selectedAsset?.assetTag }}).
            </p>
            <FormField label="Reason for Denial" required>
              <template #default="{ inputId }">
                <PvTextarea
                  :id="inputId"
                  v-model="denyReason"
                  class="w-full"
                  rows="4"
                  placeholder="Describe why you are denying this asset (e.g., never received, wrong item, damaged)..."
                />
              </template>
            </FormField>
          </div>

          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm whitespace-nowrap">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showDenyDialog = false" />
              <PvButton label="Deny Asset" severity="danger" @click="confirmDeny" />
            </div>
          </template>
        </PvDialog>

        <!-- ============ LOST/STOLEN DIALOG ============ -->
        <SeverityDialog
          v-model:visible="showLostStolenDialog"
          dialogTitle="Report Asset as Lost/Stolen"
          variant="sev2"
          messageTitle="Important"
          messageContent="Reporting an asset as lost or stolen will immediately notify your IT security team."
          :showMessageIcon="true"
          :dialogContent="lostStolenDialogContent"
          actionText="Report Lost/Stolen"
          cancelText="Cancel"
          @action="confirmLostStolen"
          @cancel="showLostStolenDialog = false"
        />

        <!-- ============ EDIT ACKNOWLEDGMENT DIALOG ============ -->
        <PvDialog
          v-model:visible="showEditAcknowledgmentDialog"
          :draggable="false"
          modal
          header="Edit Acknowledgment"
          :style="{ width: '520px' }"
        >
          <template #closeicon><XMarkIcon /></template>
          <div class="flex flex-col gap-4">
            <MessageNotification
              severity="warn"
              title="Your IT administrator will be notified"
              detail="Any changes to your acknowledgment status will be visible to your IT administrator and may require follow-up."
            />
            <div class="flex flex-col gap-3">
              <span class="text-body-md-semi-bold text-neutral-base">Select new acknowledgment status</span>
              <RadioButtonWithLabel
                v-model="editAcknowledgmentChoice"
                inputId="ack-acknowledge"
                value="Yes"
              >
                <template #label>Acknowledge</template>
                <template #description>Accept responsibility for this asset.</template>
              </RadioButtonWithLabel>
              <RadioButtonWithLabel
                v-model="editAcknowledgmentChoice"
                inputId="ack-deny"
                value="Denied"
              >
                <template #label>Deny Asset</template>
                <template #description>Decline this asset assignment.</template>
              </RadioButtonWithLabel>
              <RadioButtonWithLabel
                v-model="editAcknowledgmentChoice"
                inputId="ack-pending"
                value="Pending"
              >
                <template #label>Pending</template>
                <template #description>Reset to pending for later review.</template>
              </RadioButtonWithLabel>
            </div>
            <div v-if="editAcknowledgmentChoice === 'Denied'">
              <FormField label="Reason for Denial">
                <template #default="{ inputId }">
                  <PvTextarea :id="inputId" v-model="editDenyReason" rows="3" placeholder="Explain why you are denying this asset..." class="w-full" />
                </template>
              </FormField>
            </div>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm whitespace-nowrap">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showEditAcknowledgmentDialog = false" />
              <PvButton label="Save" @click="confirmEditAcknowledgment" />
            </div>
          </template>
        </PvDialog>

      </div>
    </div>
  `,
});

// ─── Storybook Meta ───

const meta: Meta<typeof UserPortalAssetsPage> = {
  title: "Projects/Baris' Playground/Pages/User Portal - My Assets",
  component: UserPortalAssetsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof UserPortalAssetsPage>;

export const Default: Story = {};

export const OptionA: Story = {
  name: 'Option A — Panel Top, CTAs in Header',
  args: { variant: 'optionA' },
};

export const OptionB: Story = {
  name: 'Option B — Tasks Page',
  args: { variant: 'optionB' },
};

export const OptionD: Story = {
  name: 'Option C — Panel Top, CTAs in Panel',
  args: { variant: 'optionD' },
};
