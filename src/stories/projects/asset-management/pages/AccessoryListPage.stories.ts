import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

// Circuit custom components
import { AppNavigation } from '@jumpcloud/circuit/components';

// PrimeVue primitives (styled by Circuit passthrough)
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';

// Heroicons
import {
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  MinusCircleIcon,
  Bars3Icon,
  UserPlusIcon,
  UsersIcon,
  UserMinusIcon,
  BanknotesIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ComputerDesktopIcon,
} from '@heroicons/vue/24/outline';

const SaaSManagementOverview = defineComponent({
  name: 'SaaSManagementOverview',
  components: {
    // Circuit
    AppNavigation,
    // PrimeVue primitives
    PvButton: Button,
    PvTag: Tag,
    PvTabs: Tabs,
    PvTabList: TabList,
    PvTab: Tab,
    // Heroicons
    MagnifyingGlassIcon,
    Cog6ToothIcon,
    BellIcon,
    QuestionMarkCircleIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    MinusCircleIcon,
    Bars3Icon,
    UserPlusIcon,
    UsersIcon,
    UserMinusIcon,
    BanknotesIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    ComputerDesktopIcon,
  },
  setup() {
    const activeTab = ref('0');

    const tabs = [
      { label: 'Overview', value: '0' },
      { label: 'Applications', value: '1' },
      { label: 'Accounts', value: '2' },
      { label: 'Licenses', value: '3' },
    ];

    const appStats = [
      { label: 'Approved Apps', count: 50, countColor: 'text-success-base', icon: 'CheckCircleIcon', iconColor: 'text-success-base' },
      { label: 'Unapproved Apps', count: 13, countColor: 'text-error-base', icon: 'ExclamationCircleIcon', iconColor: 'text-error-base' },
      { label: 'Ignored Apps', count: 4, countColor: 'text-neutral-subtle', icon: 'MinusCircleIcon', iconColor: 'text-neutral-subtle' },
      { label: 'Total SaaS Apps', count: 91, countColor: 'text-neutral-base', icon: 'Bars3Icon', iconColor: 'text-neutral-subtle' },
    ];

    const insights = [
      { number: 3, label: 'Unapproved apps used in last 7 days', accentColor: 'bg-red-600', icon: 'ExclamationCircleIcon' },
      { number: 5, label: 'Upcoming renewals in next 30 days', accentColor: 'bg-orange-600', icon: 'BanknotesIcon' },
      { number: 24, label: 'Shadow Accounts', accentColor: 'bg-red-600', icon: 'UserPlusIcon' },
      { number: 24, label: 'Shared Accounts', accentColor: 'bg-red-600', icon: 'UsersIcon' },
      { number: 12, label: 'Former Employee Accounts', accentColor: 'bg-red-600', icon: 'UserMinusIcon' },
      { number: 32, label: 'Apps with high risk OAuth permissions', accentColor: 'bg-blue-600', icon: 'ExclamationTriangleIcon' },
    ];

    return { activeTab, tabs, appStats, insights };
  },
  template: `
    <div class="flex h-screen bg-neutral-surface overflow-hidden">
      <!-- Sidebar Navigation (Circuit custom component) -->
      <div class="w-[240px] shrink-0 h-full">
        <AppNavigation />
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <!-- Top Bar -->
        <div class="h-12 border-b border-navigation-top_bar-default flex items-center px-6 gap-4 shrink-0 bg-navigation-top_bar-default">
          <!-- Search -->
          <div class="flex-1 flex items-center gap-2 h-full py-0 rounded-sm overflow-hidden">
            <MagnifyingGlassIcon class="w-5 h-5 text-field-placeholder" />
            <span class="text-body-md text-field-placeholder">Search User, Devices, Apps, etc...</span>
            <PvTag value="⌘/Ctrl + K" severity="secondary" class="ml-auto" />
          </div>
          <!-- Top Bar Icon Buttons (PrimeVue Button) -->
          <div class="flex items-center gap-2">
            <PvButton severity="secondary" variant="text" size="small" rounded>
              <template #icon>
                <Cog6ToothIcon class="w-5 h-5" />
              </template>
            </PvButton>
            <span class="relative">
              <PvButton severity="secondary" variant="text" size="small" rounded>
                <template #icon>
                  <BellIcon class="w-5 h-5" />
                </template>
              </PvButton>
              <span class="absolute top-0.5 right-0.5 w-2 h-2 bg-navigation-notification-visible border-[1.5px] border-neutral-surface rounded-full"></span>
            </span>
            <PvButton severity="secondary" variant="text" size="small" rounded>
              <template #icon>
                <QuestionMarkCircleIcon class="w-5 h-5" />
              </template>
            </PvButton>
          </div>
        </div>

        <!-- Header -->
        <div class="px-6 py-4 bg-neutral-surface shrink-0">
          <div class="flex flex-wrap items-start gap-4">
            <div class="flex-1 min-w-[460px] flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <ComputerDesktopIcon class="w-8 h-8 text-neutral-base" />
                <h1 class="text-heading-1 text-neutral-base">SaaS Management</h1>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <PvButton label="Settings" severity="secondary" variant="outlined" size="small">
                <template #icon>
                  <Cog6ToothIcon class="w-5 h-5" />
                </template>
              </PvButton>
            </div>
          </div>
        </div>

        <!-- Tab Navigation (PrimeVue Tabs) -->
        <div class="px-6 bg-neutral-surface shrink-0">
          <PvTabs :value="activeTab">
            <PvTabList>
              <PvTab v-for="tab in tabs" :key="tab.value" :value="tab.value">
                {{ tab.label }}
              </PvTab>
            </PvTabList>
          </PvTabs>
        </div>

        <!-- Page Content -->
        <div class="flex flex-1 overflow-auto bg-neutral-surface">
          <!-- Main Section -->
          <div class="flex-1 px-6 pt-6 pb-4 flex flex-col gap-4 overflow-auto">
            <!-- SaaS Applications Overview Section -->
            <div class="flex flex-col gap-4">
              <h2 class="text-heading-2 text-neutral-base">SaaS Applications Overview</h2>

              <div class="flex flex-wrap items-center gap-6">
                <!-- Newly Discovered Apps Card -->
                <div class="flex-1 min-w-[300px] h-[160px] bg-neutral-surface_alt rounded-lg shadow-e100 p-4 flex flex-col justify-between overflow-hidden">
                  <div class="flex flex-col gap-2">
                    <!-- App Icons placeholder row -->
                    <div class="flex gap-[7px]">
                      <div class="w-8 h-8 rounded bg-info-soft flex items-center justify-center">
                        <ComputerDesktopIcon class="w-5 h-5 text-info-base" />
                      </div>
                      <div class="w-8 h-8 rounded bg-warning-soft flex items-center justify-center">
                        <Cog6ToothIcon class="w-5 h-5 text-warning-base" />
                      </div>
                      <div class="w-8 h-8 rounded bg-accent-purple-soft flex items-center justify-center">
                        <UsersIcon class="w-5 h-5 text-accent-purple-base" />
                      </div>
                      <div class="w-8 h-8 rounded bg-accent-coral-soft flex items-center justify-center">
                        <BellIcon class="w-5 h-5 text-accent-coral-base" />
                      </div>
                      <div class="w-8 h-8 rounded bg-accent-aster-soft flex items-center justify-center">
                        <CheckCircleIcon class="w-5 h-5 text-accent-aster-base" />
                      </div>
                    </div>
                    <div class="flex items-center gap-1 text-heading-3">
                      <span class="text-info-base">24</span>
                      <span class="text-neutral-base">Newly Discovered Apps</span>
                    </div>
                  </div>
                  <PvButton label="Review Apps" severity="primary" variant="outlined" size="small" />
                </div>

                <!-- Stats Column -->
                <div class="flex-1 min-w-[300px] flex flex-col">
                  <div
                    v-for="(stat, index) in appStats"
                    :key="stat.label"
                    class="h-10 flex items-center justify-between px-2 border-b border-neutral-default_solid"
                    :class="{ 'border-t': index === 0 }"
                  >
                    <div class="flex items-center gap-1">
                      <component :is="stat.icon" class="w-5 h-5" :class="stat.iconColor" />
                      <span class="text-body-md-bold text-neutral-base">{{ stat.label }}</span>
                    </div>
                    <span class="text-body-md-bold" :class="stat.countColor">{{ stat.count }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Insights Section -->
            <div class="flex flex-col gap-4 mt-2">
              <h2 class="text-heading-2 text-neutral-base">Insights</h2>

              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="insight in insights"
                  :key="insight.label"
                  class="relative bg-neutral-surface rounded-sm shadow-e200 pl-6 pr-4 py-4 flex flex-col gap-2 overflow-hidden"
                >
                  <div
                    class="absolute left-0 top-0 bottom-0 w-2 rounded-sm"
                    :class="insight.accentColor"
                  ></div>
                  <div class="flex items-center justify-between">
                    <span class="text-heading-2 text-neutral-base">{{ insight.number }}</span>
                    <component :is="insight.icon" class="w-6 h-6 text-neutral-subtle" />
                  </div>
                  <span class="text-heading-4 text-neutral-base">{{ insight.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar: Discovery Methods -->
          <div class="w-[392px] shrink-0 border-l border-neutral-default_solid px-6 pt-6 pb-4 flex flex-col gap-4 overflow-auto">
            <h2 class="text-heading-2 text-neutral-base">Discovery Methods</h2>

            <!-- Connectors Section -->
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <h3 class="text-heading-3 text-neutral-base">Connectors</h3>
                <PvTag value="126 Apps" severity="secondary" />
              </div>

              <!-- Connectors Card -->
              <div class="bg-neutral-surface rounded-lg shadow-e100 p-4 flex flex-col gap-3">
                <p class="text-body-md text-neutral-base">
                  You have <span class="text-body-md-bold">2 available connectors</span> to add.
                </p>

                <div class="flex flex-col">
                  <!-- GitHub -->
                  <div class="h-10 flex items-center justify-between border-b border-neutral-default_solid">
                    <div class="flex items-center gap-2">
                      <div class="bg-neutral-surface rounded p-0.5">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      </div>
                      <span class="text-body-md-bold text-neutral-base">GitHub</span>
                    </div>
                    <PvButton label="Add" severity="secondary" size="small" variant="outlined" />
                  </div>
                  <!-- Slack -->
                  <div class="h-10 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="bg-neutral-surface rounded p-0.5">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" fill="#E01E5A"/>
                          <path d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" fill="#36C5F0"/>
                          <path d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.163 0a2.528 2.528 0 012.523 2.522v6.312z" fill="#2EB67D"/>
                          <path d="M15.163 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.163 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 01-2.52-2.523 2.527 2.527 0 012.52-2.52h6.315A2.528 2.528 0 0124 15.163a2.528 2.528 0 01-2.522 2.523h-6.315z" fill="#ECB22E"/>
                        </svg>
                      </div>
                      <span class="text-body-md-bold text-neutral-base">Slack</span>
                    </div>
                    <PvButton label="Add" severity="secondary" size="small" variant="outlined" />
                  </div>
                </div>
              </div>

              <!-- Active Connectors Card -->
              <div class="bg-neutral-surface rounded-lg shadow-e100 p-4 flex flex-col">
                <div class="flex items-center gap-1">
                  <CheckCircleIcon class="w-5 h-5 text-success-base" />
                  <p class="text-body-md text-neutral-base">
                    <span class="text-body-md-bold">2</span> Active Connectors
                  </p>
                </div>
              </div>
            </div>

            <!-- Browser Extension Section -->
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <h3 class="text-heading-3 text-neutral-base">Browser extension</h3>
                <PvTag value="143 apps" severity="secondary" />
              </div>

              <div class="bg-neutral-surface rounded-lg shadow-e100 p-4 flex flex-col">
                <div class="flex items-center gap-2">
                  <ExclamationCircleIcon class="w-5 h-5 text-error-base" />
                  <p class="text-body-md text-neutral-base">
                    <span class="text-body-md-bold">38%</span> Coverage
                  </p>
                </div>
              </div>
            </div>

            <!-- JumpCloud SSO Section -->
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <h3 class="text-heading-3 text-neutral-base">JumpCloud SSO</h3>
                <PvTag value="24 apps" severity="secondary" />
              </div>

              <div class="bg-neutral-surface rounded-lg shadow-e100 p-4 flex flex-col">
                <div class="flex items-center gap-2">
                  <InformationCircleIcon class="w-5 h-5 text-info-base" />
                  <p class="text-body-md text-neutral-base">
                    <span class="text-body-md-bold">3</span> Apps available to connect SSO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof SaaSManagementOverview> = {
  title: 'Projects/Asset Management/Pages/Accessory List',
  component: SaaSManagementOverview,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SaaSManagementOverview>;

export const Default: Story = {};
