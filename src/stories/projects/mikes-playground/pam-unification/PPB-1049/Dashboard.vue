<script setup lang="ts">
import { markRaw, type Component } from 'vue';
import {
  CollapsiblePanel,
  DashboardPageLayout,
  DataTable,
  DataTableCellText,
} from '@jumpcloud/circuit/components';
import {
  UserGroupIcon,
  ShieldCheckIcon,
  ServerIcon,
  CircleStackIcon,
  ArrowPathRoundedSquareIcon,
  NoSymbolIcon,
} from '@heroicons/vue/24/outline';
import Button from 'primevue/button';
import PamDashboardStatCard from '../components/PamDashboardStatCard.vue';
import PamResourceTypeCell, {
  type PamResourceType,
} from '../components/PamResourceTypeCell.vue';
import {
  jumpServerHealthColumns,
  jumpServersListData,
} from '../data/jumpServersListData';
import {
  sessionHistoryColumns,
  sessionHistoryListData,
} from '../data/recordingsListData';

const emit = defineEmits<{
  'view-all-jump-servers': [];
  'view-all-session-history': [];
}>();

/** Dashboard preview — first 5 rows of full jump server list. */
const jumpServersHealth = jumpServersListData.slice(0, 5);

/** Dashboard preview — first 5 rows of session history list. */
const pamResources = sessionHistoryListData.slice(0, 5);

type PrivilegedResourceRow = {
  id: number;
  resourceName: string;
  type: PamResourceType;
  sessions: number;
  lastSession: Date;
};

function formatLastSession(date: Date): string {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

/** Mock privileged resource rows — replace with API data when wired. */
const privilegedResources: PrivilegedResourceRow[] = [
  {
    id: 1,
    resourceName: 'AWS Production Console',
    type: 'Web Shield',
    sessions: 342,
    lastSession: new Date('2026-05-18T14:22:00'),
  },
  {
    id: 2,
    resourceName: 'prod-db-postgres-01',
    type: 'Database',
    sessions: 218,
    lastSession: new Date('2026-05-18T11:05:00'),
  },
  {
    id: 3,
    resourceName: 'jump-prod-ssh-01',
    type: 'Server',
    sessions: 176,
    lastSession: new Date('2026-05-17T16:48:00'),
  },
  {
    id: 4,
    resourceName: 'Okta Admin Portal',
    type: 'Web Shield',
    sessions: 94,
    lastSession: new Date('2026-05-16T09:30:00'),
  },
  {
    id: 5,
    resourceName: 'staging-mysql-02',
    type: 'Database',
    sessions: 61,
    lastSession: new Date('2026-05-15T13:12:00'),
  },
];

/** Mock least-connected privileged resource rows — replace with API data when wired. */
const leastConnectedPrivilegedResources: PrivilegedResourceRow[] = [
  {
    id: 1,
    resourceName: 'legacy-ftp-archive',
    type: 'Server',
    sessions: 3,
    lastSession: new Date('2026-02-10T08:15:00'),
  },
  {
    id: 2,
    resourceName: 'dev-kubernetes-dashboard',
    type: 'Web Shield',
    sessions: 7,
    lastSession: new Date('2026-03-22T15:40:00'),
  },
  {
    id: 3,
    resourceName: 'qa-redis-cache-01',
    type: 'Database',
    sessions: 12,
    lastSession: new Date('2026-04-05T10:02:00'),
  },
  {
    id: 4,
    resourceName: 'vendor-vpn-gateway',
    type: 'Server',
    sessions: 18,
    lastSession: new Date('2026-04-28T17:55:00'),
  },
  {
    id: 5,
    resourceName: 'internal-wiki-admin',
    type: 'Web Shield',
    sessions: 24,
    lastSession: new Date('2026-05-02T12:18:00'),
  },
];

const privilegedResourceColumns = [
  {
    field: 'resourceName',
    header: 'Resource Name',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: PrivilegedResourceRow }) => ({
      label: sp.data.resourceName,
    }),
  },
  {
    field: 'type',
    header: 'Type',
    sortable: true,
    component: markRaw(PamResourceTypeCell),
    componentProps: (sp: { data: PrivilegedResourceRow }) => ({
      type: sp.data.type,
    }),
  },
  {
    field: 'sessions',
    header: 'Sessions',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: PrivilegedResourceRow }) => ({
      label: sp.data.sessions.toLocaleString(),
    }),
  },
  {
    field: 'lastSession',
    header: 'Last Session',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: PrivilegedResourceRow }) => ({
      label: formatLastSession(sp.data.lastSession),
    }),
  },
];

type PamWidget = {
  header: string;
  value: string;
  subtitle?: string;
  changeValue: string;
  changeLabel: string;
  trendDirection: 'up' | 'down';
  icon: Component;
};

/** Mock dashboard metrics — replace with API data when wired. */
const widgets: PamWidget[] = [
  {
    header: 'PAM Users',
    value: '1,247',
    subtitle: 'Users',
    changeValue: '2.1%',
    changeLabel: 'vs last month',
    trendDirection: 'down',
    icon: UserGroupIcon,
  },
  {
    header: 'Web Shield',
    value: '8',
    subtitle: 'Policies',
    changeValue: '12%',
    changeLabel: 'vs last month',
    trendDirection: 'up',
    icon: ShieldCheckIcon,
  },
  {
    header: 'Servers',
    value: '24',
    subtitle: 'Servers',
    changeValue: '5%',
    changeLabel: 'vs last month',
    trendDirection: 'up',
    icon: ServerIcon,
  },
  {
    header: 'Databases',
    value: '6',
    subtitle: 'Databases',
    changeValue: '1',
    changeLabel: 'vs last month',
    trendDirection: 'down',
    icon: CircleStackIcon,
  },
  {
    header: 'Jump Servers',
    value: '4',
    subtitle: 'Servers',
    changeValue: '1',
    changeLabel: 'new this month',
    trendDirection: 'up',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    header: 'Blocking Rules',
    value: '31',
    subtitle: 'Rules',
    changeValue: '8%',
    changeLabel: 'vs last month',
    trendDirection: 'up',
    icon: NoSymbolIcon,
  },
];
</script>

<template>
  <div class="flex-1 overflow-hidden bg-neutral-mid min-h-0">
    <DashboardPageLayout class="w-full! h-full!" max-width="1280">
      <div class="flex flex-col gap-md">
        <div class="grid grid-cols-4 gap-md min-w-0">
          <PamDashboardStatCard
            v-for="widget in widgets"
            :key="widget.header"
            :header="widget.header"
            :value="widget.value"
            :subtitle="widget.subtitle"
            :change-value="widget.changeValue"
            :change-label="widget.changeLabel"
            :trend-direction="widget.trendDirection"
            :icon="widget.icon"
          />
        </div>

        <CollapsiblePanel header="Jump Servers Health">
          <template #titleicon="iconProps">
            <ArrowPathRoundedSquareIcon :class="iconProps.class" />
          </template>
          <template #actions>
            <Button
              label="View All"
              severity="secondary"
              size="small"
              @click="emit('view-all-jump-servers')"
            />
          </template>
          <DataTable
            :columns="jumpServerHealthColumns"
            :data="jumpServersHealth"
            :card="false"
            size="small"
            :paginator="false"
          />
        </CollapsiblePanel>

        <CollapsiblePanel header="Recordings">
          <template #actions>
            <Button
              label="View All"
              severity="secondary"
              size="small"
              @click="emit('view-all-session-history')"
            />
          </template>
          <DataTable
            :columns="sessionHistoryColumns"
            :data="pamResources"
            :card="false"
            size="small"
            :paginator="false"
          />
        </CollapsiblePanel>

        <CollapsiblePanel header="(Most Connected) Privileged Resources">
          <template #actions>
            <Button label="View All" severity="secondary" size="small" />
          </template>
          <DataTable
            :columns="privilegedResourceColumns"
            :data="privilegedResources"
            :card="false"
            size="small"
            :paginator="false"
          />
        </CollapsiblePanel>

        <CollapsiblePanel header="(Least Connected) Privileged Resources">
          <template #actions>
            <Button label="View All" severity="secondary" size="small" />
          </template>
          <DataTable
            :columns="privilegedResourceColumns"
            :data="leastConnectedPrivilegedResources"
            :card="false"
            size="small"
            :paginator="false"
          />
        </CollapsiblePanel>
      </div>
    </DashboardPageLayout>
  </div>
</template>
