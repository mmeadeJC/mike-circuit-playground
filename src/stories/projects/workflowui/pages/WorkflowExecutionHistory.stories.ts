import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent, h } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable,
  DataTableCellText,
  CollapsiblePanel,
  LinkText,
  MessageNotification,
  ProgressSpinner,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ClockIcon,
  XCircleIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';

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

// ── TypeScript interfaces ────────────────────────────────────────────────────
type WorkflowRunStatus = 'running' | 'execution_error' | 'failed' | 'completed';

interface WorkflowRun {
  id: string;
  runId: string;
  timestamp: string;
  status: WorkflowRunStatus;
}

interface ExecutionStepVariable {
  name: string;
  value: string | number | boolean;
}

interface ExecutionStep {
  id: string;
  label: string;
  status: 'completed' | 'waiting' | 'error';
  errorMessage?: string;
  content?: string;
  variables?: ExecutionStepVariable[];
  resultJson?: string;
}

interface ExecutionDetail {
  runId: string;
  timestamp: string;
  status: WorkflowRunStatus;
  inputJson: string;
  steps: ExecutionStep[];
  errorDetails?: string;
}

// ── Navigation items ──────────────────────────────────────────────────────────
const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Alerts', leftIcon: markRaw(BellIcon) },
  {
    label: 'User Management',
    leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
    ],
  },
  {
    label: 'Workflows',
    leftIcon: markRaw(WorkflowIcon),
    items: [
      { label: 'All Workflows' },
      { label: 'Triggers' },
    ],
  },
  {
    label: 'Device Management',
    leftIcon: markRaw(DeviceManagementIcon),
    items: [
      { label: 'Devices', leftIcon: markRaw(DeviceListsIcon) },
      { label: 'Device Groups', leftIcon: markRaw(DeviceGroupsIcon) },
    ],
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      { label: 'SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
    ],
  },
  { label: 'Security', leftIcon: markRaw(ShieldCheckIcon) },
  { label: 'Insights', leftIcon: markRaw(ChartBarSquareIcon) },
  { label: 'Settings', leftIcon: markRaw(Cog6ToothIcon) },
];

const profileMenuItems = [
  {
    label: 'User',
    itemType: 'profile_compact',
    initials: 'U',
    name: 'User',
    items: [
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
    ],
  },
];

// ── Mock workflow runs data ──────────────────────────────────────────────────
const workflowRuns: WorkflowRun[] = [
  { id: '1', runId: 'run-001', timestamp: '2024-01-01 09:00', status: 'completed' },
  { id: '2', runId: 'run-002', timestamp: '2024-01-01 08:45', status: 'running' },
  { id: '3', runId: 'run-003', timestamp: '2024-01-01 08:30', status: 'execution_error' },
  { id: '4', runId: 'run-004', timestamp: '2024-01-01 08:15', status: 'failed' },
  { id: '5', runId: 'run-005', timestamp: '2024-01-01 08:00', status: 'completed' },
];

// ── Mock execution detail (selected run) ──────────────────────────────────────
const defaultExecutionDetail: ExecutionDetail = {
  runId: 'run-001',
  timestamp: '2024-01-01 09:00',
  status: 'completed',
  inputJson: JSON.stringify(
    {
      event_type: 'user_suspended',
      event_time: '2025-12-08T12:00:00.000Z',
      actor: { id: 'usr_001', type: 'admin' },
      resource: {
        id: '60b0c04a7e3d4b5c6d7e8f01',
        type: 'user',
        username: 'jdoe',
        email: 'jane.doe@example.com',
      },
    },
    null,
    2,
  ),
  steps: [
    {
      id: '1',
      label: 'User suspended',
      status: 'completed',
      content: 'Event received successfully.',
      variables: [
        { name: 'event_type', value: 'user_suspended' },
        { name: 'resource_id', value: '60b0c04a7e3d4b5c6d7e8f01' },
        { name: 'actor_id', value: 'usr_001' },
      ],
      resultJson: '{\n  "event_type": "user_suspended",\n  "resource": { "id": "60b0c04a7e3d4b5c6d7e8f01", "type": "user" },\n  "received_at": "2025-12-08T12:00:00.000Z"\n}',
    },
    {
      id: '2',
      label: 'Flow',
      status: 'completed',
      content: 'Flow executed.',
      variables: [
        { name: 'branch_taken', value: 'main' },
        { name: 'condition_met', value: true },
      ],
      resultJson: '{\n  "path": "main",\n  "evaluated": ["user.state === \'suspended\'"],\n  "result": true\n}',
    },
    {
      id: '3',
      label: 'Get Systems',
      status: 'completed',
      content: 'Retrieved 3 systems.',
      variables: [
        { name: 'systems_count', value: 3 },
        { name: 'user_id', value: '60b0c04a7e3d4b5c6d7e8f01' },
      ],
      resultJson: '{\n  "systems": [\n    { "id": "sys-001", "hostname": "DESKTOP-ABC", "os": "Windows" },\n    { "id": "sys-002", "hostname": "mbp-jdoe", "os": "macOS" },\n    { "id": "sys-003", "hostname": "ubuntu-dev", "os": "Linux" }\n  ],\n  "total": 3\n}',
    },
    {
      id: '4',
      label: 'Loop',
      status: 'completed',
      content: 'Iterated over systems.',
      variables: [
        { name: 'iterations', value: 3 },
        { name: 'current_index', value: 3 },
      ],
      resultJson: '{\n  "items": ["sys-001", "sys-002", "sys-003"],\n  "processed": 3,\n  "status": "complete"\n}',
    },
    { id: '5', label: 'Remove device', status: 'waiting', content: 'Waiting for user input.' },
    { id: '6', label: 'Send notification', status: 'waiting', content: 'Pending completion of previous step.' },
  ],
};

const failedExecutionDetail: ExecutionDetail = {
  ...defaultExecutionDetail,
  runId: 'run-004',
  status: 'failed',
  errorDetails: 'Error: Failed to connect to device management API. Status code: 503. Retry after 60 seconds.',
  steps: [
    { id: '1', label: 'User suspended', status: 'completed' },
    { id: '2', label: 'Flow', status: 'completed' },
    { id: '3', label: 'Get Systems', status: 'error', errorMessage: 'Connection timeout after 30s.' },
    { id: '4', label: 'Loop', status: 'waiting' },
    { id: '5', label: 'Remove device', status: 'waiting' },
    { id: '6', label: 'Send notification', status: 'waiting' },
  ],
};

function getExecutionDetailForRun(runId: string): ExecutionDetail {
  if (runId === 'run-004') return failedExecutionDetail;
  return { ...defaultExecutionDetail, runId, timestamp: workflowRuns.find(r => r.runId === runId)?.timestamp ?? defaultExecutionDetail.timestamp };
}

// ── Custom cell: Workflow Run (runId + timestamp) ──────────────────────────────
const WorkflowRunCell = markRaw(
  defineComponent({
    name: 'WorkflowRunCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () =>
        h('div', { class: 'flex flex-col gap-px p-2 min-h-12' }, [
          h('span', { class: 'text-body-md-semi-bold text-neutral-base' }, props.data.runId),
          h('span', { class: 'text-body-sm text-neutral-subtle' }, props.data.timestamp),
        ]);
    },
  }),
);

// ── Custom cell: Status with semantic tokens ───────────────────────────────────
const StatusCell = markRaw(
  defineComponent({
    name: 'StatusCell',
    props: { data: { type: Object, default: () => ({}) } },
    components: { Tag, ProgressSpinner },
    setup(props) {
      const status = props.data?.status as WorkflowRunStatus;
      const config = {
        running: { label: 'Running', severity: 'info' as const, showSpinner: true },
        execution_error: { label: 'Execution error', severity: 'warn' as const, showSpinner: false },
        failed: { label: 'Failed', severity: 'danger' as const, showSpinner: false },
        completed: { label: 'Completed', severity: 'success' as const, showSpinner: false },
      }[status] ?? { label: status, severity: 'secondary' as const, showSpinner: false };
      return () =>
        h('div', { class: 'flex items-center gap-xs p-2 min-h-12' }, [
          config.showSpinner ? h(ProgressSpinner, { size: 16, ariaLabel: 'Loading', class: 'shrink-0' }) : null,
          h(Tag, { value: config.label, severity: config.severity, class: 'shrink-0' }),
        ]);
    },
  }),
);

// ── Column definitions ────────────────────────────────────────────────────────
const columns = [
  {
    field: 'runId',
    header: 'Workflow Run',
    width: '240px',
    component: WorkflowRunCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
  {
    field: 'status',
    header: 'Status',
    width: '180px',
    component: StatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const WorkflowExecutionHistory = defineComponent({
  name: 'WorkflowExecutionHistory',
  components: {
    AppNavigation,
    PageHeader,
    DataTable,
    DataTableCellText,
    CollapsiblePanel,
    LinkText,
    MessageNotification,
    TopBar,
    PvButton: Button,
    PvDivider: Divider,
    PvTag: Tag,
    PvTabs: Tabs,
    PvTabList: TabList,
    PvTab: Tab,
    PvTabPanels: TabPanels,
    PvTabPanel: TabPanel,
    CheckIcon,
    ClockIcon,
    XCircleIcon,
    ChevronRightIcon,
    ClipboardDocumentListIcon,
  },
  setup() {
    const selectedRun = ref<WorkflowRun | null>(workflowRuns[0]);
    const executionDetail = ref<ExecutionDetail>(defaultExecutionDetail);
    const inputJsonTab = ref('text');
    const expandedSteps = ref<Record<string, boolean>>({});

    const breadcrumbs = [
      { label: 'Workflows', href: '#' },
      { label: 'Remove device of suspended users', href: '#' },
      { label: 'Execution history', href: undefined },
    ];

    function onRowSelect(run: WorkflowRun) {
      selectedRun.value = run;
      executionDetail.value = getExecutionDetailForRun(run.runId);
    }

    function copyError() {
      if (executionDetail.value?.errorDetails) {
        navigator.clipboard.writeText(executionDetail.value.errorDetails);
      }
      const errStep = executionDetail.value?.steps.find(s => s.status === 'error');
      if (errStep?.errorMessage) {
        navigator.clipboard.writeText(errStep.errorMessage);
      }
    }

    return {
      menuItems,
      profileMenuItems,
      workflowRuns,
      selectedRun,
      executionDetail,
      inputJsonTab,
      expandedSteps,
      breadcrumbs,
      columns,
      onRowSelect,
      copyError,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="workflows"
        :collapsible="true"
      />

      <div class="flex-[1_1_0] flex flex-col min-w-0 w-full h-full">
        <TopBar
          showBackButton
          backButtonLabel="Back"
          searchPlaceholder="Search"
          shortcutLabel="⌘/Ctrl + K"
        />

        <!-- Sticky header: breadcrumbs ───────────────────────────────────────── -->
        <div class="shrink-0 px-6 py-3 border-b border-neutral-default_solid bg-neutral-base">
          <nav class="flex items-center gap-xs text-body-sm flex-wrap">
            <template v-for="(crumb, idx) in breadcrumbs" :key="idx">
              <ChevronRightIcon v-if="idx > 0" class="size-4 text-neutral-ghost shrink-0" aria-hidden="true" />
              <LinkText
                v-if="crumb.href"
                :href="crumb.href"
                class="text-neutral-subtle hover:text-neutral-base"
              >
                {{ crumb.label }}
              </LinkText>
              <span v-else class="text-neutral-base font-medium">{{ crumb.label }}</span>
            </template>
          </nav>
        </div>

        <!-- Dual-pane content ────────────────────────────────────────────────── -->
        <div class="flex-[1_1_0] flex min-h-0 overflow-hidden">
          <!-- Left: Workflow runs table ─────────────────────────────────────── -->
          <div class="w-[360px] shrink-0 border-r border-neutral-default_solid bg-neutral-base flex flex-col overflow-hidden">
            <div class="shrink-0 px-4 py-3 border-b border-neutral-default_solid">
              <h2 class="text-heading-4 text-neutral-base">Workflow Runs</h2>
            </div>
            <div class="flex-1 min-h-0 overflow-auto">
              <DataTable
                :columns="columns"
                :data="workflowRuns"
                dataKey="id"
                selectionMode="single"
                :selection="selectedRun ? [selectedRun] : []"
                @update:selection="v => onRowSelect((Array.isArray(v) ? v[0] : v) ?? workflowRuns[0])"
                :scrollable="true"
                scrollHeight="100%"
                :pt="{ bodyRow: ({ data }) => data?.id === selectedRun?.id ? 'bg-neutral-subtle_soft' : '' }"
                :ptOptions="{ mergeSections: true, mergeProps: true }"
              />
            </div>
          </div>

          <!-- Right: Execution detail ───────────────────────────────────────── -->
          <div class="flex-[1_1_0] flex flex-col min-w-0 overflow-auto bg-neutral-surface">
            <div v-if="executionDetail" class="p-6 flex flex-col gap-lg">
              <!-- Header: timestamp + status badge ────────────────────────────── -->
              <div class="flex items-center gap-md">
                <span class="text-body-lg text-neutral-base">{{ executionDetail.timestamp }}</span>
                <PvTag
                  :value="executionDetail.status === 'running' ? 'Running' : executionDetail.status === 'execution_error' ? 'Execution error' : executionDetail.status === 'failed' ? 'Failed' : 'Completed'"
                  :severity="executionDetail.status === 'running' ? 'info' : executionDetail.status === 'execution_error' ? 'warn' : executionDetail.status === 'failed' ? 'danger' : 'success'"
                  class="text-body-md font-medium"
                />
              </div>

              <PvDivider class="my-0" />

              <!-- Input JSON: Text / Upload tabs ───────────────────────────────── -->
              <div class="flex flex-col gap-sm">
                <span class="text-body-md-semi-bold text-neutral-base">Input JSON</span>
                <PvTabs v-model:value="inputJsonTab">
                  <PvTabList>
                    <PvTab value="text">Text</PvTab>
                    <PvTab value="upload">Upload</PvTab>
                  </PvTabList>
                  <PvTabPanels>
                    <PvTabPanel value="text">
                      <pre class="rounded-md border border-neutral-default_solid bg-neutral-base p-4 text-body-sm font-mono text-neutral-base overflow-x-auto">{{ executionDetail.inputJson }}</pre>
                    </PvTabPanel>
                    <PvTabPanel value="upload">
                      <div class="rounded-md border border-neutral-default_solid bg-neutral-base p-6 text-center">
                        <p class="text-body-md text-neutral-subtle">Drag and drop a JSON file, or click to browse.</p>
                        <PvButton label="Browse" severity="secondary" variant="outlined" class="mt-sm" />
                      </div>
                    </PvTabPanel>
                  </PvTabPanels>
                </PvTabs>
              </div>

              <PvDivider class="my-0" />

              <!-- Execution Results Timeline (vertical stepper with collapsibles) ─ -->
              <div class="flex flex-col gap-sm">
                <span class="text-body-md-semi-bold text-neutral-base">Execution Results</span>
                <div class="flex flex-col">
                  <div
                    v-for="(step, idx) in executionDetail.steps"
                    :key="step.id"
                    class="flex"
                  >
                    <!-- Step indicator line ──────────────────────────────────── -->
                    <div class="flex flex-col items-center shrink-0 w-6">
                      <div
                        class="size-5 rounded-full flex items-center justify-center shrink-0"
                        :class="step.status === 'completed' ? 'bg-feedback-success-base text-neutral-inverted-base' : step.status === 'error' ? 'bg-feedback-error-base text-neutral-inverted-base' : 'bg-neutral-ghost text-neutral-subtle'"
                      >
                        <CheckIcon v-if="step.status === 'completed'" class="size-3" />
                        <XCircleIcon v-else-if="step.status === 'error'" class="size-3" />
                        <ClockIcon v-else class="size-3" />
                      </div>
                      <div
                        v-if="idx < executionDetail.steps.length - 1"
                        class="w-px flex-1 min-h-4 mt-1 bg-neutral-ghost"
                      />
                    </div>

                    <!-- Collapsible step content ───────────────────────────────── -->
                    <div class="flex-1 min-w-0 pb-4">
                      <CollapsiblePanel
                        :header="step.label"
                        toggleable
                        v-model:collapsed="expandedSteps[step.id]"
                      >
                        <template #toggleicon="iconProps">
                          <ChevronRightIcon :class="iconProps.class" />
                        </template>
                        <template #titleicon="iconProps">
                          <PvTag
                            :value="step.status === 'completed' ? 'Completed' : step.status === 'error' ? 'Error' : 'Waiting for Input'"
                            :severity="step.status === 'completed' ? 'success' : step.status === 'error' ? 'danger' : 'secondary'"
                            size="small"
                            :class="iconProps.class"
                          />
                        </template>
                        <div class="flex flex-col gap-md">
                          <p v-if="step.content" class="text-body-sm text-neutral-subtle">{{ step.content }}</p>
                          <!-- Variables (key-value) ──────────────────────────────────────────────── -->
                          <div v-if="step.variables && step.variables.length" class="flex flex-col gap-xs">
                            <span class="text-body-sm-semi-bold text-neutral-base">Variables</span>
                            <div class="rounded-md border border-neutral-default_solid bg-neutral-surface p-sm flex flex-col gap-xs">
                              <div
                                v-for="v in step.variables"
                                :key="v.name"
                                class="flex gap-sm text-body-sm"
                              >
                                <span class="text-neutral-subtle shrink-0 min-w-[120px]">{{ v.name }}</span>
                                <span class="text-brand-primary-base font-mono break-all">{{ typeof v.value === 'string' ? v.value : String(v.value) }}</span>
                              </div>
                            </div>
                          </div>
                          <!-- Result JSON ─────────────────────────────────────────────────────────── -->
                          <div v-if="step.resultJson" class="flex flex-col gap-xs">
                            <span class="text-body-sm-semi-bold text-neutral-base">Result JSON</span>
                            <pre class="rounded-md border border-neutral-default_solid bg-neutral-base p-4 text-body-sm font-mono text-neutral-base overflow-x-auto whitespace-pre-wrap break-words">{{ step.resultJson }}</pre>
                          </div>
                          <!-- Error state ────────────────────────────────────────────────────────── -->
                          <div v-if="step.status === 'error' && step.errorMessage" class="flex flex-col gap-xs">
                            <MessageNotification
                              severity="error"
                              title="Step failed"
                              :detail="step.errorMessage"
                            />
                            <PvButton label="Copy Error" severity="secondary" variant="outlined" size="small" @click="copyError" />
                          </div>
                        </div>
                      </CollapsiblePanel>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Error state: global error log ─────────────────────────────────── -->
              <div v-if="executionDetail.status === 'failed' && executionDetail.errorDetails" class="flex flex-col gap-sm">
                <MessageNotification
                  severity="error"
                  title="Execution failed"
                  :detail="executionDetail.errorDetails"
                />
                <PvButton label="Copy Error" severity="secondary" variant="outlined" @click="copyError">
                  <template #icon><ClipboardDocumentListIcon class="size-4" /></template>
                </PvButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof WorkflowExecutionHistory> = {
  title: 'Projects/Workflow UI/Pages/Workflow Execution History',
  component: WorkflowExecutionHistory,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof WorkflowExecutionHistory>;

export const Default: Story = {};
