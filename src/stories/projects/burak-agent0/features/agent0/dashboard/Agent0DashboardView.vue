<script setup lang="ts">
import { ref } from 'vue';
import { CollapsiblePanel } from '@jumpcloud/circuit/components';
import Chart from 'primevue/chart';
import { ChartBarSquareIcon } from '@heroicons/vue/24/outline';
import DashboardPageLayout from '@/components/layout/page-layouts/DashboardPageLayout.vue';
import DashboardStatCard from './DashboardStatCard.vue';
import DashboardTopList from './DashboardTopList.vue';
import DashboardRecentActivity from './DashboardRecentActivity.vue';
import DashboardGovernanceWidget from './DashboardGovernanceWidget.vue';

type Policy = { name: string; profiles?: string[]; servers?: string[] };

const props = defineProps<{
  topServerUsage: { name: string; requests: number }[];
  topUsers: { name: string; toolCalls: number }[];
  recentActivity: { user: string; server: string; time: string; event: string }[];
  monthlyChartData: Record<string, unknown>;
  monthlyChartOptions: Record<string, unknown>;
  governancePolicies?: Policy[];
  governanceScopeType?: 'profiles' | 'servers';
}>();

const emit = defineEmits<{
  'navigate-tab': [string];
}>();

const activePolicies = ref<Policy[]>(props.governancePolicies ?? []);

const defaultPolicies: Record<string, Policy[]> = {
  profiles: [
    { name: 'Require managed devices' },
    { name: 'Contractor access restriction', profiles: ['Engineering Profile'] },
    { name: 'Trusted network only', profiles: ['Engineering Profile', 'Sales Profile'] },
  ],
  servers: [
    { name: 'Require managed devices' },
    { name: 'Contractor access restriction', servers: ['Engineering Server'] },
    { name: 'Trusted network only', servers: ['Engineering Server', 'Sales Server'] },
  ],
};

function handleCreatePolicy() {
  const scopeType = props.governanceScopeType ?? 'profiles';
  activePolicies.value = defaultPolicies[scopeType];
}
</script>

<template>
  <div class="flex-1 overflow-hidden bg-neutral-surface">
    <DashboardPageLayout class="w-full! h-full!">
      <div class="flex flex-col gap-6">
        <DashboardGovernanceWidget
          :policies="activePolicies"
          :scope-type="governanceScopeType"
          @create-policy="handleCreatePolicy"
        />
        <div class="grid grid-cols-3 gap-6">
          <DashboardStatCard header="Total Users" value="142" subtitle="Users" changeValue="12%" changeLabel="vs last month" showArrow />
          <DashboardStatCard header="Active Servers" value="4 / 6" subtitle="Servers" changeValue="66%" changeLabel="active" />
          <DashboardStatCard header="Profiles" value="3" subtitle="Profiles" changeLabel="Configured" />
          <DashboardStatCard header="Total Requests (24h)" value="12,847" subtitle="Requests" changeValue="8.3%" changeLabel="vs last month" showArrow />
          <DashboardStatCard header="Avg Response Time" value="245ms" changeValue="-12ms" changeLabel="vs last month" showArrow />
          <DashboardStatCard header="Error Rate" value="0.8%" valueClass="text-success-base" changeValue="-0.2%" changeLabel="vs last month" showArrow />
        </div>

        <CollapsiblePanel header="Monthly Usage by Server">
          <template #titleicon="iconProps">
            <ChartBarSquareIcon :class="iconProps.class" />
          </template>
          <Chart type="line" :data="monthlyChartData" :options="monthlyChartOptions" />
        </CollapsiblePanel>

        <div class="grid grid-cols-2 gap-6">
          <DashboardTopList
            header="Top Servers"
            :items="topServerUsage.map(s => ({ name: s.name, value: s.requests, valueSuffix: 'requests' }))"
            summaryLabel="Active servers"
            trendValue="12%"
            trendLabel="vs last month"
            @see-all="emit('navigate-tab', 'servers')"
          />
          <DashboardTopList
            header="Top Users"
            :items="topUsers.map(u => ({ name: u.name, value: u.toolCalls, valueSuffix: 'tool calls' }))"
            summaryLabel="Active users"
            trendValue="8%"
            trendLabel="vs last month"
            @see-all="emit('navigate-tab', 'profiles')"
          />
        </div>
      </div>

      <template #sidebar>
        <DashboardRecentActivity
          :activities="recentActivity"
          @see-all="emit('navigate-tab', 'activity')"
        />
      </template>
    </DashboardPageLayout>
  </div>
</template>
