<script setup lang="ts">
import { computed, markRaw, ref, watch } from 'vue';
import {
  CopyButton,
  DataTable,
  DataTableCellAction,
  DataTableCellText,
  DataTableToolbar,
  FormField,
  KeyValue,
  ListPageLayout,
  MessageNotification,
  PageSection,
  RadioButtonWithLabel,
  SeverityDialog,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Menu from 'primevue/menu';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import Textarea from 'primevue/textarea';
import {
  ChevronDownIcon,
  ChartBarIcon,
  ArrowDownOnSquareIcon,
  ChevronUpIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import JumpServerStatusCell from '../components/JumpServerStatusCell.vue';
import ClusterNameCell from './components/ClusterNameCell.vue';
import ClusterHealthCell from './components/ClusterHealthCell.vue';
import {
  clusterHealth,
  entryPointFor,
  formatTimestamp,
  initialAlerts,
  initialClusters,
  initialJumpServers,
  initialResources,
  membersOf,
  policyLabel,
  policyOptions,
  resourcesInCluster,
  type Cluster,
  type ClusterPolicy,
  type JumpServer,
} from './data/clusterData';

type View = 'servers' | 'clusters';
type DialogPreset = 'create' | 'edit' | 'delete' | 'delete-blocked' | null;

const props = withDefaults(
  defineProps<{
    initialView?: View;
    /** Open directly on a cluster detail page. */
    initialDetailId?: string | null;
    /** Open a dialog on mount (used by the individual stories). */
    initialDialog?: DialogPreset;
    /** Cluster the preset edit / delete dialog targets. */
    dialogClusterId?: string | null;
    /** Show the admin alert banners above the cluster list. */
    showAlerts?: boolean;
  }>(),
  { initialView: 'servers', initialDetailId: null, initialDialog: null, dialogClusterId: null, showAlerts: true }
);

// ---------- state ----------
const servers = ref<JumpServer[]>(initialJumpServers());
const clusters = ref<Cluster[]>(initialClusters());
const resources = ref(initialResources());
const alerts = ref(initialAlerts());

const view = ref<View>(props.initialView);
const detailId = ref<string | null>(props.initialDetailId);
const search = ref('');
const notice = ref<{ title: string; detail: string } | null>(null);

const viewOptions = [
  { label: 'All Jump Servers', value: 'servers' },
  { label: 'Clusters', value: 'clusters' },
];

const emit = defineEmits<{ (e: 'detail-change', open: boolean): void }>();
function closeDetail() {
  detailId.value = null;
  view.value = 'clusters';
}
defineExpose({ closeDetail });

const detail = computed(() => clusters.value.find((c) => c.id === detailId.value) ?? null);

// ---------- cluster dialog (create / edit) ----------
interface Draft {
  id: string | null;
  name: string;
  description: string;
  policy: ClusterPolicy;
  memberIds: string[];
}
const showClusterDialog = ref(false);
const draft = ref<Draft>({ id: null, name: '', description: '', policy: 'round-robin', memberIds: [] });
const submitted = ref(false);

function openCreate() {
  draft.value = { id: null, name: '', description: '', policy: 'round-robin', memberIds: [] };
  submitted.value = false;
  showClusterDialog.value = true;
}
function openEdit(cluster: Cluster) {
  draft.value = {
    id: cluster.id,
    name: cluster.name,
    description: cluster.description,
    policy: cluster.policy,
    memberIds: [...cluster.memberIds],
  };
  submitted.value = false;
  showClusterDialog.value = true;
}

/** A Jump Server can belong to only one cluster → only offer unassigned servers + this cluster's members. */
const selectableServers = computed(() =>
  servers.value
    .filter((s) => s.clusterId === null || s.clusterId === draft.value.id)
    .map((s) => ({ value: s.id, label: s.name, status: s.status }))
);
const takenElsewhereCount = computed(
  () => servers.value.filter((s) => s.clusterId !== null && s.clusterId !== draft.value.id).length
);

const nameError = computed(() => {
  const n = draft.value.name.trim();
  if (!n) return 'Cluster name is required.';
  const dup = clusters.value.some(
    (c) => c.id !== draft.value.id && c.name.toLowerCase() === n.toLowerCase()
  );
  return dup ? 'A cluster with this name already exists.' : '';
});

function serverById(id: string) {
  return servers.value.find((s) => s.id === id);
}
function moveMember(index: number, delta: -1 | 1) {
  const list = draft.value.memberIds;
  const target = index + delta;
  if (target < 0 || target >= list.length) return;
  [list[index], list[target]] = [list[target], list[index]];
}
function removeDraftMember(id: string) {
  draft.value.memberIds = draft.value.memberIds.filter((m) => m !== id);
}

function saveCluster() {
  submitted.value = true;
  if (nameError.value) return;
  const d = draft.value;
  let id = d.id;
  if (id) {
    const c = clusters.value.find((x) => x.id === id)!;
    Object.assign(c, {
      name: d.name.trim(),
      description: d.description.trim(),
      policy: d.policy,
      memberIds: [...d.memberIds],
      entryPoint: entryPointFor(d.name),
    });
  } else {
    id = `cl-${Date.now()}`;
    clusters.value.push({
      id,
      name: d.name.trim(),
      description: d.description.trim(),
      policy: d.policy,
      memberIds: [...d.memberIds],
      entryPoint: entryPointFor(d.name),
      entryPort: 2222,
    });
  }
  const finalId = id;
  servers.value.forEach((s) => {
    if (d.memberIds.includes(s.id)) s.clusterId = finalId;
    else if (s.clusterId === finalId) s.clusterId = null;
  });
  showClusterDialog.value = false;
  notice.value = {
    title: d.id ? 'Cluster updated' : 'Cluster created',
    detail: d.id
      ? `"${d.name.trim()}" was saved. Existing sessions are not affected; new connections use the updated settings.`
      : `"${d.name.trim()}" is ready. Associate resources with it from the Jump Server dropdown when creating or editing a Server, Website or Database.`,
  };
}

// ---------- delete ----------
const deleteTarget = ref<Cluster | null>(null);
const showDeleteDialog = ref(false);
const showBlockedDialog = ref(false);

function requestDelete(cluster: Cluster) {
  deleteTarget.value = cluster;
  if (resourcesInCluster(cluster.id, resources.value).length > 0) showBlockedDialog.value = true;
  else showDeleteDialog.value = true;
}
function confirmDelete() {
  const c = deleteTarget.value;
  if (!c) return;
  servers.value.forEach((s) => {
    if (s.clusterId === c.id) s.clusterId = null;
  });
  clusters.value = clusters.value.filter((x) => x.id !== c.id);
  alerts.value = alerts.value.filter((a) => a.clusterId !== c.id);
  showDeleteDialog.value = false;
  if (detailId.value === c.id) detailId.value = null;
  notice.value = {
    title: 'Cluster deleted',
    detail: `"${c.name}" was deleted. Its Jump Servers are available again in the All Jump Servers list.`,
  };
}

// ---------- tables ----------
const summarize = (c: Cluster) => {
  const m = membersOf(c, servers.value);
  return `${m.filter((x) => x.status === 'Online').length} of ${m.length} online`;
};

const serverRows = computed(() => {
  const q = search.value.trim().toLowerCase();
  return servers.value
    .filter((s) => !q || s.name.toLowerCase().includes(q) || s.ip.includes(q))
    .map((s) => ({
      ...s,
      clusterName: clusters.value.find((c) => c.id === s.clusterId)?.name ?? '—',
    }));
});

const clusterRows = computed(() => {
  const q = search.value.trim().toLowerCase();
  return clusters.value
    .filter((c) => !q || c.name.toLowerCase().includes(q))
    .map((c) => ({
      ...c,
      health: clusterHealth(c, servers.value),
      resourceCount: resourcesInCluster(c.id, resources.value).length,
    }));
});

const text = (label: string) => ({ label });

const serverColumns = [
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.name) },
  { field: 'ip', header: 'IP Address', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.ip) },
  { field: 'webPort', header: 'Web Port', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(String(sp.data.webPort)) },
  { field: 'shellPort', header: 'Shell Port', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(String(sp.data.shellPort)) },
  { field: 'status', header: 'Status', sortable: true, component: markRaw(JumpServerStatusCell), componentProps: (sp: any) => ({ status: sp.data.status }) },
  { field: 'clusterName', header: 'Cluster', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.clusterName) },
  { field: 'activeSessions', header: 'Active Sessions', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: any) => text(String(sp.data.activeSessions)) },
  { field: 'version', header: 'Version', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.version ? String(sp.data.version) : '—') },
  { field: 'lastPing', header: 'Last Ping', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(formatTimestamp(sp.data.lastPing)) },
  { field: 'lastBackup', header: 'Last Backup', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(formatTimestamp(sp.data.lastBackup)) },
  // Pinned to the right edge: other columns scroll horizontally underneath it, with a divider on its left.
  {
    field: 'actions',
    header: 'Actions',
    width: '9rem',
    frozen: true,
    alignFrozen: 'right',
    component: markRaw(DataTableCellAction),
    componentProps: (sp: any) => ({
      type: 'Button Group',
      iconButtons: [
        { icon: markRaw(EyeIcon), tooltip: 'View details', ariaLabel: `View ${sp.data.name}` },
        { icon: markRaw(ChartBarIcon), tooltip: 'View metrics', ariaLabel: `View ${sp.data.name} metrics` },
        { icon: markRaw(ArrowDownOnSquareIcon), tooltip: 'Install Jump Server', ariaLabel: `Install ${sp.data.name}` },
        // 4th item only exists so Circuit renders the "⋯" overflow button; the menu below is what opens.
        { icon: markRaw(EyeIcon), tooltip: 'More actions', ariaLabel: 'More actions' },
      ],
      maxVisibleIconButtons: 3,
      onMoreIconButtonsClick: (e: Event) => openServerMenu(e, sp.data),
    }),
  },
];

const clusterColumns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    width: '24rem',
    component: markRaw(ClusterNameCell),
    componentProps: (sp: any) => ({
      label: sp.data.name,
      description: sp.data.description,
      onClick: (e?: Event) => {
        e?.preventDefault?.();
        openDetail(sp.data.id);
      },
    }),
  },
  { field: 'health', header: 'Health', sortable: true, component: markRaw(ClusterHealthCell), componentProps: (sp: any) => ({ health: sp.data.health }) },
  { field: 'policy', header: 'Selection Policy', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: any) => text(policyLabel(sp.data.policy)) },
  { field: 'memberIds', header: 'Jump Servers', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(summarize(sp.data)) },
  { field: 'resourceCount', header: 'Resources', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: any) => text(String(sp.data.resourceCount)) },
  {
    field: 'actions',
    header: 'Actions',
    width: '9rem',
    frozen: true,
    alignFrozen: 'right',
    component: markRaw(DataTableCellAction),
    componentProps: (sp: any) => ({
      type: 'Button Group',
      iconButtons: [
        { icon: markRaw(PencilSquareIcon), ariaLabel: 'Edit cluster', onClick: () => openEdit(sp.data) },
        { icon: markRaw(TrashIcon), ariaLabel: 'Delete cluster', onClick: () => requestDelete(sp.data) },
      ],
      maxVisibleIconButtons: 2,
    }),
  },
];

// ---------- per-row "more actions" menu on the Jump Servers table: Migrate Resources / Delete ----------
const serverMenu = ref<InstanceType<typeof Menu> | null>(null);
const menuServer = ref<JumpServer | null>(null);
const boundResources = (id: string) => resources.value.filter((r) => r.jumpServerId === id);

const serverMenuItems = computed(() => [
  { label: 'Migrate Resources', command: () => menuServer.value && openMigrate(menuServer.value) },
  { label: 'Delete', danger: true, command: () => menuServer.value && requestDeleteServer(menuServer.value) },
]);
function openServerMenu(event: Event, row: JumpServer) {
  menuServer.value = servers.value.find((s) => s.id === row.id) ?? null;
  serverMenu.value?.toggle(event);
}

// Migrate Resources: move resources tied directly to this Jump Server onto another Jump Server or a cluster
const showMigrate = ref(false);
const migrateSource = ref<JumpServer | null>(null);
const migrateTarget = ref<string | null>(null);
const migrateOptions = computed(() => [
  ...clusters.value.map((c) => ({ value: c.id, label: `${c.name} (Cluster)`, kind: 'cluster' as const })),
  ...servers.value
    .filter((s) => s.id !== migrateSource.value?.id && s.status !== 'Not Installed')
    .map((s) => ({ value: s.id, label: s.name, kind: 'server' as const })),
]);
function openMigrate(server: JumpServer) {
  migrateSource.value = server;
  migrateTarget.value = null;
  showMigrate.value = true;
}
function confirmMigrate() {
  const src = migrateSource.value;
  const target = migrateOptions.value.find((o) => o.value === migrateTarget.value);
  if (!src || !target) return;
  const moved = boundResources(src.id);
  moved.forEach((r) => {
    r.jumpServerId = target.kind === 'server' ? target.value : null;
    r.clusterId = target.kind === 'cluster' ? target.value : null;
  });
  showMigrate.value = false;
  notice.value = {
    title: 'Resources migrated',
    detail: `${moved.length} resource${moved.length === 1 ? '' : 's'} moved from ${src.name} to ${target.label}. Existing sessions are not affected.`,
  };
}

// Delete a Jump Server: blocked while resources are still tied to it
const serverToDelete = ref<JumpServer | null>(null);
const showDeleteServer = ref(false);
const showDeleteServerBlocked = ref(false);
function requestDeleteServer(server: JumpServer) {
  serverToDelete.value = server;
  if (boundResources(server.id).length > 0) showDeleteServerBlocked.value = true;
  else showDeleteServer.value = true;
}
function confirmDeleteServer() {
  const srv = serverToDelete.value;
  if (!srv) return;
  clusters.value.forEach((c) => (c.memberIds = c.memberIds.filter((m) => m !== srv.id)));
  servers.value = servers.value.filter((s) => s.id !== srv.id);
  showDeleteServer.value = false;
  notice.value = {
    title: 'Jump Server deleted',
    detail: srv.clusterId
      ? `${srv.name} was deleted and removed from its cluster.`
      : `${srv.name} was deleted.`,
  };
}

const detailMemberRows = computed(() =>
  detail.value
    ? membersOf(detail.value, servers.value).map((s, i) => ({
        ...s,
        role:
          detail.value!.policy === 'primary-failover'
            ? i === 0
              ? 'Primary'
              : `Failover ${i}`
            : '—',
      }))
    : []
);
const detailMemberColumns = computed(() => {
  const cols: any[] = [];
  if (detail.value?.policy === 'primary-failover')
    cols.push({ field: 'role', header: 'Priority', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.role) });
  cols.push(
    { field: 'name', header: 'Name', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.name) },
    { field: 'status', header: 'Status', component: markRaw(JumpServerStatusCell), componentProps: (sp: any) => ({ status: sp.data.status }) },
    { field: 'activeSessions', header: 'Active Sessions', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(String(sp.data.activeSessions)) },
    { field: 'lastPing', header: 'Last Ping', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(formatTimestamp(sp.data.lastPing)) }
  );
  return cols;
});
const detailResourceRows = computed(() =>
  detail.value ? resourcesInCluster(detail.value.id, resources.value) : []
);
const detailResourceColumns = [
  { field: 'name', header: 'Name', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.name) },
  { field: 'type', header: 'Type', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.type) },
  { field: 'address', header: 'Address', component: markRaw(DataTableCellText), componentProps: (sp: any) => text(sp.data.address) },
];
const detailAlerts = computed(() =>
  detail.value ? alerts.value.filter((a) => a.clusterId === detail.value!.id) : []
);
watch(detail, (d) => emit('detail-change', !!d), { immediate: true });

const detailHealth = computed(() => (detail.value ? clusterHealth(detail.value, servers.value) : null));

function openDetail(id: string) {
  detailId.value = id;
  notice.value = null;
}
function dismissAlert(id: string) {
  alerts.value = alerts.value.filter((a) => a.id !== id);
}

const tablePt = {
  root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
  tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
};

// ---------- presets for stories ----------
if (props.initialDialog) {
  const target = clusters.value.find((c) => c.id === props.dialogClusterId) ?? clusters.value[0];
  if (props.initialDialog === 'create') openCreate();
  else if (props.initialDialog === 'edit') openEdit(target);
  else if (props.initialDialog === 'delete') requestDelete(clusters.value.find((c) => c.id === 'cl-4')!);
  else if (props.initialDialog === 'delete-blocked') requestDelete(target);
}
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
    <Menu ref="serverMenu" :model="serverMenuItems" :popup="true">
      <template #item="{ item, props: itemProps }">
        <a v-bind="itemProps.action">
          <span :class="item.danger ? 'text-button-text-danger-base' : ''">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
    <!-- ================= CLUSTER DETAIL ================= -->
    <template v-if="detail">
      <div class="flex items-center justify-between gap-md px-6 pt-4">
        <div class="flex flex-col gap-xs min-w-0">
          <div class="flex items-center gap-sm">
            <h2 class="text-heading-3 text-neutral-base truncate">{{ detail.name }}</h2>
            <ClusterHealthCell v-if="detailHealth" :health="detailHealth" />
          </div>
          <p class="text-body-sm text-neutral-subtle">{{ detail.description }}</p>
        </div>
        <div class="flex gap-sm shrink-0">
          <Button label="Edit" severity="secondary" variant="outlined" @click="openEdit(detail)">
            <template #icon="iconProps"><PencilSquareIcon :class="iconProps.class" /></template>
          </Button>
          <Button label="Delete" severity="danger" variant="outlined" @click="requestDelete(detail)">
            <template #icon="iconProps"><TrashIcon :class="iconProps.class" /></template>
          </Button>
        </div>
      </div>

      <div v-if="notice" class="px-6 pt-4">
        <MessageNotification severity="success" :title="notice.title" :detail="notice.detail" closable @close="notice = null" />
      </div>

      <div class="flex-1 min-h-0 overflow-auto">
        <!-- ListPageLayout (not DetailPageLayout): Detail centers its content in a max-width column on wide screens; List stays flush-left (24px) with the page header. -->
        <ListPageLayout class="w-full! h-full!" show-sidebar>
          <div class="flex flex-col gap-lg">
            <MessageNotification
              v-for="a in detailAlerts"
              :key="a.id"
              :severity="a.severity"
              :title="a.title"
              :detail="`${a.detail} · ${a.time}`"
              closable
              @close="dismissAlert(a.id)"
            />
            <PageSection
              title="Jump Servers"
              :subtitle-text="`Only Online servers can serve a connection. ${summarize(detail)}.`"
            >
              <template #actions>
                <Button label="Manage members" severity="secondary" variant="outlined" size="small" @click="openEdit(detail)" />
              </template>
            </PageSection>
            <div class="h-[240px] flex flex-col">
              <DataTable
                :columns="detailMemberColumns"
                :data="detailMemberRows"
                :card="true"
                size="default"
                :pt="tablePt"
                :pt-options="{ mergeSections: true, mergeProps: true }"
              >
                <template #empty>
                  <p class="text-body-md text-neutral-subtle p-md">No Jump Servers in this cluster yet.</p>
                </template>
              </DataTable>
            </div>
            <PageSection
              title="Associated resources"
              :subtitle-text="detailResourceRows.length ? `${detailResourceRows.length} resources connect through this cluster.` : 'No resources use this cluster.'"
            />
            <div class="h-[240px] flex flex-col">
              <DataTable
                :columns="detailResourceColumns"
                :data="detailResourceRows"
                :card="true"
                size="default"
                :pt="tablePt"
                :pt-options="{ mergeSections: true, mergeProps: true }"
              >
                <template #empty>
                  <p class="text-body-md text-neutral-subtle p-md">This cluster can be deleted because no resources are associated with it.</p>
                </template>
              </DataTable>
            </div>
          </div>
          <template #sidebar>
            <div class="flex flex-col gap-md min-w-0">
              <h3 class="text-body-md-semi-bold text-neutral-base font-bold">Details</h3>
              <KeyValue class="sidebar-kv" label="Selection policy" :value="policyLabel(detail.policy)" />
              <KeyValue class="sidebar-kv" label="Entry point" :value="`${detail.entryPoint}:${detail.entryPort}`">
                <div class="min-w-0 flex-1 flex items-start gap-xs">
                  <span class="text-body-md text-neutral-base py-0.5 min-w-0 break-all">{{ detail.entryPoint }}:{{ detail.entryPort }}</span>
                  <CopyButton :text="`ssh -p ${detail.entryPort} <user>@${detail.entryPoint}`" size="small" class="shrink-0" />
                </div>
              </KeyValue>
              <KeyValue class="sidebar-kv" label="Jump Servers" :value="String(detail.memberIds.length)" />
              <KeyValue class="sidebar-kv" label="Resources" :value="String(detailResourceRows.length)" />
              <p class="text-body-xs text-neutral-subtle">
                Users and local clients connect to the entry point. The cluster picks a healthy Jump Server using the selection policy; users never choose one.
              </p>
            </div>
          </template>
        </ListPageLayout>
      </div>
    </template>

    <!-- ================= LIST VIEWS ================= -->
    <template v-else>
      <!-- Secondary toggle: sits directly below the primary tab group -->
      <div class="flex items-center justify-between gap-md px-6 pt-4">
        <SelectButton v-model="view" :options="viewOptions" option-label="label" option-value="value" :allow-empty="false" aria-label="Jump Servers view" @update:model-value="search = ''" />
        <span class="text-body-xs text-neutral-subtle truncate min-w-0">Health checks run every 60 seconds · only Online Jump Servers receive connections</span>
      </div>

      <div v-if="notice" class="px-6 pt-4">
        <MessageNotification severity="success" :title="notice.title" :detail="notice.detail" closable @close="notice = null" />
      </div>
      <div v-if="view === 'clusters' && showAlerts && alerts.length" class="flex flex-col gap-sm px-6 pt-4">
        <MessageNotification
          v-for="a in alerts"
          :key="a.id"
          :severity="a.severity"
          :title="a.title"
          :detail="`${a.detail} · ${a.time}`"
          closable
          @close="dismissAlert(a.id)"
        />
      </div>

      <!-- ListPageLayout contributes 24px of padding on all sides → toolbar sits 24px below and flush-left with the toggle -->
      <div class="flex-1 flex flex-col min-h-0 overflow-hidden">
        <ListPageLayout class="w-full! h-full!">
          <div class="flex flex-col h-full relative jc-pinned-actions">
            <DataTable
              v-if="view === 'servers'"
              :key="'servers'"
              :columns="serverColumns"
              :data="serverRows"
              :card="true"
              size="default"
              scrollable
              scroll-height="flex"
              :paginator="true"
              :rows="10"
              :rows-per-page-options="[{ label: '10 Items per page', value: 10 }, { label: '20 Items per page', value: 20 }]"
              :show-rows-per-page-options="true"
              :show-page-report="true"
              :pt="tablePt"
              :pt-options="{ mergeSections: true, mergeProps: true }"
            >
              <template #toolbar>
                <DataTableToolbar
                  add-button-label="Add Jump Server"
                  search-placeholder="Search jump servers..."
                  :show-filter-button="true"
                  :show-refresh-button="true"
                  :show-columns-button="true"
                  :show-save-view-button="false"
                  @search="(q: string) => (search = q)"
                />
              </template>
            </DataTable>

            <DataTable
              v-else
              :key="'clusters'"
              :columns="clusterColumns"
              :data="clusterRows"
              data-key="id"
              @row-click="(e: { data: { id: string } }) => openDetail(e.data.id)"
              :card="true"
              size="default"
              scrollable
              scroll-height="flex"
              :paginator="true"
              :rows="10"
              :rows-per-page-options="[{ label: '10 Items per page', value: 10 }, { label: '20 Items per page', value: 20 }]"
              :show-rows-per-page-options="true"
              :show-page-report="true"
              :pt="tablePt"
              :pt-options="{ mergeSections: true, mergeProps: true }"
            >
              <template #toolbar>
                <DataTableToolbar
                  add-button-label="Add Cluster"
                  search-placeholder="Search"
                  :show-filter-button="true"
                  :show-refresh-button="true"
                  :show-columns-button="false"
                  :show-download-button="false"
                  :show-save-view-button="false"
                  @add="openCreate"
                  @search="(q: string) => (search = q)"
                />
              </template>
              <template #empty>
                <p class="text-body-md text-neutral-subtle p-md">No clusters match your search.</p>
              </template>
              <template #initialEmpty>
                <div class="flex flex-col items-center gap-sm p-lg">
                  <p class="text-body-md-semi-bold text-neutral-base">No clusters yet</p>
                  <p class="text-body-sm text-neutral-subtle">Group Jump Servers so connections keep working when one goes offline.</p>
                  <Button label="Add Cluster" @click="openCreate" />
                </div>
              </template>
            </DataTable>
          </div>
        </ListPageLayout>
      </div>
    </template>

    <!-- ================= CREATE / EDIT DIALOG ================= -->
    <Dialog
      v-model:visible="showClusterDialog"
      :draggable="false"
      modal
      :header="draft.id ? 'Edit cluster' : 'Create cluster'"
      :style="{ width: '640px' }"
    >
      <template #closeicon><XMarkIcon /></template>
      <div class="flex flex-col gap-md">
        <FormField label="Cluster name" required :help-text="submitted && nameError ? nameError : 'Use a name that reflects the network segment or region, e.g. “US Production”.'" :help-text-severity="submitted && nameError ? 'error' : undefined">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="draft.name" class="w-full" :invalid="submitted && !!nameError" placeholder="US Production" />
          </template>
        </FormField>
        <FormField label="Description">
          <template #default="{ inputId }">
            <Textarea :id="inputId" v-model="draft.description" class="w-full" rows="2" />
          </template>
        </FormField>

        <div class="flex flex-col gap-sm">
          <span class="text-body-md-semi-bold text-neutral-base">Selection policy</span>
          <p class="text-body-sm text-neutral-subtle">Applied when a connection starts. Once a session is established it stays on the same Jump Server.</p>
          <div class="flex flex-col gap-sm">
            <div
              v-for="o in policyOptions"
              :key="o.value"
              class="rounded-md border p-sm"
              :class="draft.policy === o.value ? 'border-primary-base bg-neutral-surface_raised' : 'border-neutral-default_solid'"
            >
              <RadioButtonWithLabel v-model="draft.policy" :value="o.value" name="policy">
                <template #label>{{ o.label }}</template>
                <template #description>{{ o.description }}</template>
              </RadioButtonWithLabel>
            </div>
          </div>
        </div>

        <FormField label="Jump Servers" :help-text="takenElsewhereCount ? `${takenElsewhereCount} Jump Servers are hidden because they already belong to another cluster.` : 'A Jump Server can belong to only one cluster.'">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              v-model="draft.memberIds"
              :options="selectableServers"
              option-label="label"
              option-value="value"
              placeholder="Select Jump Servers"
              display="comma"
              class="w-full!"
            >
              <template #option="{ option }">
                <div class="flex items-center justify-between gap-md w-full">
                  <span class="text-body-md">{{ option.label }}</span>
                  <JumpServerStatusCell :status="option.status" />
                </div>
              </template>
            </MultiSelect>
          </template>
        </FormField>

        <div v-if="draft.memberIds.length" class="flex flex-col gap-xs">
          <span class="text-body-sm-semi-bold text-neutral-base">
            {{ draft.policy === 'primary-failover' ? 'Priority order' : 'Selected members' }}
          </span>
          <ul class="flex flex-col rounded-md border border-neutral-default_solid divide-y divide-neutral-default_solid">
            <li v-for="(id, i) in draft.memberIds" :key="id" class="flex items-center justify-between gap-sm px-sm py-xs">
              <div class="flex items-center gap-sm min-w-0">
                <span v-if="draft.policy === 'primary-failover'" class="text-body-xs text-neutral-subtle w-16 shrink-0">
                  {{ i === 0 ? 'Primary' : `Failover ${i}` }}
                </span>
                <span class="text-body-md text-neutral-base truncate">{{ serverById(id)?.name }}</span>
                <JumpServerStatusCell v-if="serverById(id)" :status="serverById(id)!.status" />
              </div>
              <div class="flex gap-xs shrink-0">
                <template v-if="draft.policy === 'primary-failover'">
                  <Button severity="secondary" variant="text" size="small" aria-label="Move up" :disabled="i === 0" @click="moveMember(i, -1)">
                    <template #icon="iconProps"><ChevronUpIcon :class="iconProps.class" /></template>
                  </Button>
                  <Button severity="secondary" variant="text" size="small" aria-label="Move down" :disabled="i === draft.memberIds.length - 1" @click="moveMember(i, 1)">
                    <template #icon="iconProps"><ChevronDownIcon :class="iconProps.class" /></template>
                  </Button>
                </template>
                <Button severity="secondary" variant="text" size="small" aria-label="Remove from cluster" @click="removeDraftMember(id)">
                  <template #icon="iconProps"><XMarkIcon :class="iconProps.class" /></template>
                </Button>
              </div>
            </li>
          </ul>
        </div>

        <MessageNotification
          v-if="draft.memberIds.length < 2"
          severity="warn"
          title="No redundancy yet"
          detail="A cluster needs at least two Jump Servers to keep connections available when one goes offline."
        />
        <MessageNotification
          v-else-if="!draft.memberIds.some((id) => serverById(id)?.status === 'Online')"
          severity="error"
          title="No eligible Jump Servers"
          detail="None of the selected servers are Online. Connections will fail until at least one comes online."
        />
      </div>
      <template #footer>
        <div class="flex items-center flex-1 min-w-0">
          <span class="text-body-sm text-neutral-subtle">{{ draft.memberIds.length }} Jump Servers selected</span>
        </div>
        <div class="flex gap-sm shrink-0">
          <Button label="Cancel" severity="secondary" variant="text" @click="showClusterDialog = false" />
          <Button :label="draft.id ? 'Save changes' : 'Create cluster'" @click="saveCluster" />
        </div>
      </template>
    </Dialog>

    <!-- ================= DELETE (allowed) ================= -->
    <SeverityDialog
      v-model:visible="showDeleteDialog"
      dialogTitle="Delete cluster"
      variant="sev3"
      messageTitle="This can't be undone"
      messageContent="The cluster and its selection policy will be permanently deleted."
      :dialogContent="`Deleting **${deleteTarget?.name}** returns its Jump Servers to the All Jump Servers list. No resources use this cluster, so no connections are affected.`"
      :confirmationValue="deleteTarget?.name"
      confirmationText="To proceed, enter <value>."
      actionText="Delete cluster"
      cancelText="Cancel"
      @action="confirmDelete"
      @cancel="showDeleteDialog = false"
    />

    <!-- ================= DELETE (blocked: resources associated) ================= -->
    <Dialog v-model:visible="showBlockedDialog" :draggable="false" modal header="Can't delete this cluster" :style="{ width: '560px' }">
      <template #closeicon><XMarkIcon /></template>
      <div class="flex flex-col gap-md">
        <MessageNotification
          severity="error"
          title="Resources are still associated"
          :detail="`${deleteTarget ? resourcesInCluster(deleteTarget.id, resources).length : 0} resources connect through “${deleteTarget?.name}”. Move them to another cluster or Jump Server first.`"
        />
        <ul v-if="deleteTarget" class="flex flex-col rounded-md border border-neutral-default_solid divide-y divide-neutral-default_solid">
          <li v-for="r in resourcesInCluster(deleteTarget.id, resources)" :key="r.id" class="flex items-center justify-between px-sm py-xs">
            <span class="text-body-md text-neutral-base">{{ r.name }}</span>
            <span class="text-body-sm text-neutral-subtle">{{ r.type }}</span>
          </li>
        </ul>
      </div>
      <template #footer>
        <div class="flex gap-sm shrink-0 ml-auto">
          <Button label="Close" severity="secondary" variant="outlined" @click="showBlockedDialog = false" />
        </div>
      </template>
    </Dialog>

    <!-- ================= MIGRATE RESOURCES ================= -->
    <Dialog v-model:visible="showMigrate" :draggable="false" modal header="Migrate resources" :style="{ width: '560px' }">
      <template #closeicon><XMarkIcon /></template>
      <div class="flex flex-col gap-md">
        <p class="text-body-sm text-neutral-subtle">
          Move the resources that connect through <strong>{{ migrateSource?.name }}</strong> to another Jump Server or to a cluster.
        </p>
        <template v-if="migrateSource && boundResources(migrateSource.id).length">
          <ul class="flex flex-col rounded-md border border-neutral-default_solid divide-y divide-neutral-default_solid">
            <li v-for="r in boundResources(migrateSource.id)" :key="r.id" class="flex items-center justify-between px-sm py-xs">
              <span class="text-body-md text-neutral-base">{{ r.name }}</span>
              <span class="text-body-sm text-neutral-subtle">{{ r.type }}</span>
            </li>
          </ul>
          <FormField label="Move to" required help-text="Choosing a cluster routes these resources to a healthy Jump Server automatically.">
            <template #default="{ inputId }">
              <Select :input-id="inputId" v-model="migrateTarget" :options="migrateOptions" option-label="label" option-value="value" placeholder="Select a Jump Server or cluster" class="w-full!" />
            </template>
          </FormField>
        </template>
        <MessageNotification v-else severity="info" title="Nothing to migrate" detail="No resources connect through this Jump Server." />
      </div>
      <template #footer>
        <div class="flex gap-sm shrink-0 ml-auto">
          <Button label="Cancel" severity="secondary" variant="text" @click="showMigrate = false" />
          <Button label="Migrate resources" :disabled="!migrateTarget" @click="confirmMigrate" />
        </div>
      </template>
    </Dialog>

    <!-- ================= DELETE JUMP SERVER ================= -->
    <SeverityDialog
      v-model:visible="showDeleteServer"
      dialogTitle="Delete Jump Server"
      variant="sev3"
      messageTitle="This can't be undone"
      messageContent="The Jump Server will be permanently deleted."
      :dialogContent="`Deleting **${serverToDelete?.name}** removes it${serverToDelete?.clusterId ? ' and takes it out of its cluster' : ''}. No resources connect through it.`"
      :confirmationValue="serverToDelete?.name"
      confirmationText="To proceed, enter <value>."
      actionText="Delete Jump Server"
      cancelText="Cancel"
      @action="confirmDeleteServer"
      @cancel="showDeleteServer = false"
    />
    <Dialog v-model:visible="showDeleteServerBlocked" :draggable="false" modal header="Can't delete this Jump Server" :style="{ width: '560px' }">
      <template #closeicon><XMarkIcon /></template>
      <div class="flex flex-col gap-md">
        <MessageNotification
          severity="error"
          title="Resources still connect through it"
          :detail="`${serverToDelete ? boundResources(serverToDelete.id).length : 0} resources use ${serverToDelete?.name}. Migrate them to another Jump Server or a cluster first.`"
        />
      </div>
      <template #footer>
        <div class="flex gap-sm shrink-0 ml-auto">
          <Button label="Close" severity="secondary" variant="text" @click="showDeleteServerBlocked = false" />
          <Button label="Migrate Resources" @click="showDeleteServerBlocked = false; serverToDelete && openMigrate(serverToDelete)" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<style>
/*
 * Circuit's .jc-frozen-column-border only draws a divider on the last LEFT-frozen cell.
 * For a right-pinned Actions column nothing follows it, so draw the divider on its left edge.
 */
.jc-pinned-actions th.jc-frozen-column-border:last-child,
.jc-pinned-actions td.jc-frozen-column-border:last-child {
  border-left: 1px solid var(--jc-color-border-neutral-default_alpha);
}

/*
 * Sidebar KeyValue rows: stack label above value. KeyValue's side-by-side layout reserves a fixed 12rem label
 * column (and collapses to a 0-width value below 400px), which is too wide for the detail sidebar.
 */
.sidebar-kv {
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}
.sidebar-kv > div:first-child {
  width: 100%;
  min-height: 0;
  font-weight: 700;
}
</style>
