<script setup lang="ts">
import { CollapsiblePanel, CardButton, MessageNotification, LinkText } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import {
  UserPlusIcon,
  ComputerDesktopIcon,
  Squares2X2Icon,
  BellAlertIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronRightIcon,
  UserIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline';
import DashboardPageLayout from '@/components/layout/page-layouts/DashboardPageLayout.vue';

const stats = [
  { label: 'Total Users', value: '1,847', change: '-3%', changeLabel: 'vs last month', trend: 'down' },
  { label: 'Managed Devices', value: '2,641', change: '12%', changeLabel: 'vs last month', trend: 'up' },
  { label: 'Open Alerts', value: '7', change: '2 new', changeLabel: 'today', trend: 'neutral' },
  { label: 'SSO Apps', value: '48', change: '5%', changeLabel: 'vs last month', trend: 'up' },
];

const quickActions = [
  { title: 'Add User', description: 'Create a new user and assign groups and applications.', icon: UserPlusIcon },
  { title: 'Add Device', description: 'Enroll a new device to your organization.', icon: ComputerDesktopIcon },
  { title: 'Manage SSO', description: 'Configure and manage single sign-on applications.', icon: Squares2X2Icon },
  { title: 'View Alerts', description: 'Review and resolve open security and system alerts.', icon: BellAlertIcon },
];

const recentAlerts = [
  { id: 1, title: 'Failed login attempts', severity: 'high', time: '5 min ago' },
  { id: 2, title: 'New device enrolled', severity: 'info', time: '12 min ago' },
  { id: 3, title: 'Password expiring soon', severity: 'medium', time: '1 hour ago' },
];

const getStartedSteps = [
  { label: 'Connect your directory', done: true },
  { label: 'Enroll your first devices', done: true },
  { label: 'Configure SSO applications', done: false },
  { label: 'Set up conditional access', done: false },
];
</script>

<template>
  <div class="flex-1 overflow-hidden bg-neutral-surface">
    <DashboardPageLayout class="w-full! h-full!" max-width="1280">
      <div class="flex flex-col gap-6">
        <!-- Welcome banner -->
        <MessageNotification
          severity="info"
          title="Welcome back"
          detail="Your organization has 1,847 users and 2,641 managed devices. Everything looks healthy."
        />

        <!-- Stats row -->
        <div class="grid grid-cols-2 gap-6 min-[560px]:grid-cols-4">
          <CollapsiblePanel v-for="stat in stats" :key="stat.label" :header="stat.label">
            <div class="flex flex-col gap-2">
              <div class="flex items-baseline gap-2">
                <span class="text-heading-1 text-neutral-base">{{ stat.value }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <template v-if="stat.trend === 'up'">
                  <ArrowUpIcon class="w-4 h-4 text-success-base shrink-0" />
                  <span class="text-body-sm-bold text-success-base">{{ stat.change }}</span>
                </template>
                <template v-else-if="stat.trend === 'down'">
                  <ArrowDownIcon class="w-4 h-4 text-error-base shrink-0" />
                  <span class="text-body-sm-bold text-error-base">{{ stat.change }}</span>
                </template>
                <template v-else>
                  <span class="text-body-sm-bold text-neutral-base">{{ stat.change }}</span>
                </template>
                <span class="text-body-sm text-neutral-subtle">{{ stat.changeLabel }}</span>
              </div>
            </div>
          </CollapsiblePanel>
        </div>

        <!-- Quick actions -->
        <CollapsiblePanel header="Quick actions">
          <div class="grid grid-cols-1 gap-6 min-[560px]:grid-cols-2">
            <CardButton
              v-for="action in quickActions"
              :key="action.title"
              :title="action.title"
              :content="action.description"
              :trailing-icon="ChevronRightIcon"
            >
              <template #leading>
                <component
                  :is="action.icon"
                  class="w-5 h-5 text-neutral-base shrink-0"
                />
              </template>
            </CardButton>
          </div>
        </CollapsiblePanel>

        <!-- Two-column: Alerts + Get started -->
        <div class="grid grid-cols-1 gap-6 min-[900px]:grid-cols-2">
          <CollapsiblePanel header="Recent Alerts">
            <template #actions>
              <Button label="See all" severity="secondary" variant="outlined" size="small" />
            </template>
            <div class="flex flex-col divide-y divide-neutral-default_solid">
              <div
                v-for="alert in recentAlerts"
                :key="alert.id"
                class="flex items-center justify-between py-3 first:pt-0"
              >
                <div class="flex items-center gap-2 min-w-0">
                  <span
                    class="w-2 h-2 rounded-full shrink-0"
                    :class="{
                      'bg-error-base': alert.severity === 'high',
                      'bg-warning-base': alert.severity === 'medium',
                      'bg-info-base': alert.severity === 'info',
                    }"
                  />
                  <span class="text-body-md text-neutral-base truncate">{{ alert.title }}</span>
                </div>
                <span class="text-body-sm text-neutral-subtle shrink-0 ml-2">{{ alert.time }}</span>
              </div>
            </div>
          </CollapsiblePanel>

          <CollapsiblePanel header="Get Started">
            <template #actions>
              <Button label="Get Started" severity="secondary" variant="outlined" size="small" />
            </template>
            <div class="flex flex-col gap-3">
              <div
                v-for="(step, index) in getStartedSteps"
                :key="step.label"
                class="flex items-center gap-3 py-2"
              >
                <span
                  class="flex h-6 w-6 items-center justify-center rounded-full text-body-sm-bold shrink-0"
                  :class="step.done ? 'bg-success-base text-neutral-base' : 'bg-neutral-surface_deep text-neutral-subtle'"
                >
                  {{ step.done ? '✓' : index + 1 }}
                </span>
                <span
                  class="text-body-md"
                  :class="step.done ? 'text-neutral-subtle' : 'text-neutral-base'"
                >
                  {{ step.label }}
                </span>
              </div>
            </div>
          </CollapsiblePanel>
        </div>
      </div>

      <template #sidebar>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col">
            <div class="flex items-center justify-between pb-3 border-b border-neutral-default_solid">
              <span class="text-heading-3 text-neutral-base">Shortcuts</span>
            </div>
            <div class="flex flex-col pt-3 gap-2">
              <div class="flex items-center gap-2 py-2">
                <UserIcon class="w-4 h-4 text-neutral-subtle shrink-0" />
                <LinkText label="Users" href="#" />
              </div>
              <div class="flex items-center gap-2 py-2">
                <ComputerDesktopIcon class="w-4 h-4 text-neutral-subtle shrink-0" />
                <LinkText label="Devices" href="#" />
              </div>
              <div class="flex items-center gap-2 py-2">
                <ShieldCheckIcon class="w-4 h-4 text-neutral-subtle shrink-0" />
                <LinkText label="Policies" href="#" />
              </div>
              <div class="flex items-center gap-2 py-2">
                <ChartBarIcon class="w-4 h-4 text-neutral-subtle shrink-0" />
                <LinkText label="Reports" href="#" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </DashboardPageLayout>
  </div>
</template>
