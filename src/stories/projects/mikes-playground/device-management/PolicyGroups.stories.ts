import type { Meta, StoryObj } from '@storybook/vue3';
import './PolicyGroups.stories.css';
import { computed, defineComponent, h, markRaw, ref, watch } from 'vue';
import {
  ActionsToolbar,
  AppNavigation,
  CheckboxWithLabel,
  CollapsiblePanel,
  DataTable,
  DataTableCellAction,
  DataTableCellLink,
  DataTableCellText,
  DataTableToolbar,
  FormField,
  ListPageLayout,
  PageHeader,
  PageSection,
  PageSaveBar,
  ToastNotification,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import InputText from 'primevue/inputtext';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Textarea from 'primevue/textarea';
import { useToast } from 'primevue/usetoast';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RectangleGroupIcon,
  ShieldCheckIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '@/components/AdminTopBar.vue';
import PolicyGroupAddDropdown from './PolicyGroupAddDropdown.vue';
import {
  menuItems,
  profileMenuItems,
} from '../policy-management-circuit-migration/demo/policyMigrationMenuItems';

type PolicyGroup = {
  id: string;
  type: string;
  group: string;
  description: string;
};

type PolicyAssignment = {
  id: string;
  type: string;
  name: string;
  description: string;
  requirements: string;
};

type DeviceGroupAssignment = {
  id: string;
  type: string;
  group: string;
  description: string;
  numberOfDevices: number;
  membershipControl: string;
  defaultGroup: string;
  bound: boolean;
};

type PolicyGroupTemplate = {
  id: string;
  name: string;
  description: string;
  policyCount: number;
};

const INITIAL_POLICY_GROUPS: PolicyGroup[] = [
  { id: '1', type: 'Policy group', group: 'Automated Devices', description: 'Group of Policies' },
  { id: '2', type: 'Policy group', group: 'CIS Benchmark Policy', description: 'Group of Policies' },
  { id: '3', type: 'Policy group', group: 'Early Adoption Ring', description: 'Group of Policies' },
  { id: '4', type: 'Policy group', group: 'Fonts', description: 'Group of Policies' },
  { id: '5', type: 'Policy group', group: 'General Adoption Ring', description: 'Group of Policies' },
  { id: '6', type: 'Policy group', group: 'IM - SOC2', description: 'Group of Policies' },
  { id: '7', type: 'Policy group', group: 'iOS Test', description: 'Group of Policies' },
  { id: '8', type: 'Policy group', group: 'JumpCloud Enhanced Security - Apple', description: 'Group of Policies' },
  { id: '9', type: 'Policy group', group: 'JumpCloud Enhanced Security - Linux', description: 'Group of Policies' },
  { id: '10', type: 'Policy group', group: 'JumpCloud Light Security - Apple', description: 'Group of Policies' },
  { id: '11', type: 'Policy group', group: 'JumpCloud Light Security - Windows', description: 'Group of Policies' },
  { id: '12', type: 'Policy group', group: 'MacOS Baseline', description: 'Group of Policies' },
  { id: '13', type: 'Policy group', group: 'Mobile Device Security', description: 'Group of Policies' },
  { id: '14', type: 'Policy group', group: 'New Device Enrollment', description: 'Group of Policies' },
  { id: '15', type: 'Policy group', group: 'Password Standards', description: 'Group of Policies' },
  { id: '16', type: 'Policy group', group: 'Production Devices', description: 'Group of Policies' },
  { id: '17', type: 'Policy group', group: 'Remote Workforce', description: 'Group of Policies' },
  { id: '18', type: 'Policy group', group: 'Security Defaults', description: 'Group of Policies' },
  { id: '19', type: 'Policy group', group: 'Server Hardening', description: 'Group of Policies' },
  { id: '20', type: 'Policy group', group: 'Software Update Ring', description: 'Group of Policies' },
  { id: '21', type: 'Policy group', group: 'Test Devices', description: 'Group of Policies' },
  { id: '22', type: 'Policy group', group: 'Windows Baseline', description: 'Group of Policies' },
  { id: '23', type: 'Policy group', group: 'Windows Defender', description: 'Group of Policies' },
  { id: '24', type: 'Policy group', group: 'Windows Firewall', description: 'Group of Policies' },
  { id: '25', type: 'Policy group', group: 'Zero Trust Pilot', description: 'Group of Policies' },
];

const POLICY_ASSIGNMENTS: PolicyAssignment[] = [
  { id: 'policy-1', type: 'MDM', name: '[Air] Test Wifi Configuration', description: 'WiFi Configuration', requirements: 'JumpCloud MDM enrollment' },
  { id: 'policy-2', type: 'MDM', name: '[TEST] Install Certificate', description: 'Install Certificate', requirements: 'JumpCloud MDM enrollment — macOS 11.0+' },
  { id: 'policy-3', type: 'MDM', name: '5_wifi Configuration (Bridge)', description: 'WiFi Configuration', requirements: 'JumpCloud MDM enrollment' },
  { id: 'policy-4', type: 'MDM', name: '2022 RADIUS Profile', description: 'WiFi Custom Configuration Profile', requirements: 'JumpCloud MDM enrollment' },
  { id: 'policy-5', type: 'MDM', name: 'ACME Cert', description: 'Install Certificate with ACME Profile', requirements: 'JumpCloud MDM enrollment' },
  { id: 'policy-6', type: 'Agent', name: 'Advanced: Custom Registry Keys', description: 'Advanced: Custom Registry Keys', requirements: 'JumpCloud Agent' },
  { id: 'policy-7', type: 'Agent', name: 'Advanced: Custom Registry Keys - Shaliv Test', description: 'Advanced: Custom Registry Keys', requirements: 'JumpCloud Agent' },
  { id: 'policy-8', type: 'Agent', name: 'Advanced: Custom Registry Keys - Urvashi Test', description: 'Advanced: Custom Registry Keys', requirements: 'JumpCloud Agent' },
  { id: 'policy-9', type: 'Agent', name: 'Advanced: Custom Registry Keys - test', description: 'Advanced: Custom Registry Keys', requirements: 'JumpCloud Agent' },
  { id: 'policy-10', type: 'MDM', name: 'AFC Gratianus Login Window Text - Kathrick', description: 'Login Window Text', requirements: 'JumpCloud MDM enrollment — macOS 11.0+' },
  { id: 'policy-11', type: 'MDM', name: 'Allow Activation Lock', description: 'Activation Lock', requirements: 'JumpCloud MDM enrollment' },
  { id: 'policy-12', type: 'Agent', name: 'Application Restriction', description: 'Application Restriction', requirements: 'JumpCloud Agent' },
];

const DEVICE_GROUP_ASSIGNMENTS: DeviceGroupAssignment[] = [
  { id: 'device-group-1', type: 'Device group', group: 'ADE iOS Devices', description: 'Group of Devices', numberOfDevices: 4, membershipControl: 'Static', defaultGroup: '', bound: false },
  { id: 'device-group-2', type: 'Device group', group: 'ADE iOS Devices', description: 'Group of Devices', numberOfDevices: 1, membershipControl: 'Static', defaultGroup: '', bound: false },
  { id: 'device-group-3', type: 'Device group', group: 'Admin Sudo Device Group', description: 'Group of Devices', numberOfDevices: 0, membershipControl: 'Dynamic', defaultGroup: '', bound: false },
  { id: 'device-group-4', type: 'Device group', group: 'Adobe Hybrid - Workflow-Test', description: 'Group of Devices', numberOfDevices: 0, membershipControl: 'Static', defaultGroup: '', bound: false },
  { id: 'device-group-5', type: 'Device group', group: 'All Android Devices', description: 'Group of Devices', numberOfDevices: 8, membershipControl: 'Dynamic', defaultGroup: '', bound: false },
  { id: 'device-group-6', type: 'Device group', group: 'All Devices', description: 'Group of Devices', numberOfDevices: 15, membershipControl: 'Static', defaultGroup: 'Default', bound: true },
  { id: 'device-group-7', type: 'Device group', group: 'All macOS', description: 'Group of Devices', numberOfDevices: 40, membershipControl: 'Dynamic', defaultGroup: '', bound: false },
  { id: 'device-group-8', type: 'Device group', group: 'Automated Device Enrollment', description: 'Group of Devices', numberOfDevices: 1, membershipControl: 'Static', defaultGroup: '', bound: true },
  { id: 'device-group-9', type: 'Device group', group: 'BYOD iOS Devices', description: 'Group of Devices', numberOfDevices: 0, membershipControl: 'Static', defaultGroup: '', bound: false },
  { id: 'device-group-10', type: 'Device group', group: 'Docker Test', description: 'Group of Devices', numberOfDevices: 0, membershipControl: 'Static', defaultGroup: '', bound: false },
  { id: 'device-group-11', type: 'Device group', group: 'Engineering Macs', description: 'Group of Devices', numberOfDevices: 12, membershipControl: 'Dynamic', defaultGroup: '', bound: false },
  { id: 'device-group-12', type: 'Device group', group: 'Windows Pilot Devices', description: 'Group of Devices', numberOfDevices: 6, membershipControl: 'Static', defaultGroup: '', bound: false },
];

const LIGHT_TEMPLATE_DESCRIPTION =
  'The Light Security Policy Group is for Admins looking to provide users with a minimally restrictive experience while enforcing critical security against everyday threats with targeted security policies like firewall controls, sign-in requirements, disk encryption, device storage, and configuring account statuses.';
const STANDARD_TEMPLATE_DESCRIPTION =
  'The Standard Security Policy Group is for Admins looking to provide users with a moderately restrictive experience while enforcing critical security measures. This group contains hardening policies such as firewall and sign-in restrictions, secure account settings, SSH access and security, file ownership, permissions, and storage management.';
const ENHANCED_TEMPLATE_DESCRIPTION =
  'The Enhanced Security Policy Group is for Admins looking to provide significant device protections with maximum restrictions for the end user. The group contains everything in the Light and Standard tiers, plus features like system hardening, app and software restrictions, remote assistance, blocked profile installation, control panel access, and notification settings.';

const POLICY_GROUP_TEMPLATES: PolicyGroupTemplate[] = [
  { id: 'template-light-apple', name: 'JumpCloud Light Security - Apple', description: LIGHT_TEMPLATE_DESCRIPTION, policyCount: 8 },
  { id: 'template-light-windows', name: 'JumpCloud Light Security - Windows', description: LIGHT_TEMPLATE_DESCRIPTION, policyCount: 9 },
  { id: 'template-light-linux', name: 'JumpCloud Light Security - Linux', description: LIGHT_TEMPLATE_DESCRIPTION, policyCount: 7 },
  { id: 'template-standard-apple', name: 'JumpCloud Standard Security - Apple', description: STANDARD_TEMPLATE_DESCRIPTION, policyCount: 12 },
  { id: 'template-standard-windows', name: 'JumpCloud Standard Security - Windows', description: STANDARD_TEMPLATE_DESCRIPTION, policyCount: 13 },
  { id: 'template-standard-linux', name: 'JumpCloud Standard Security - Linux', description: STANDARD_TEMPLATE_DESCRIPTION, policyCount: 11 },
  { id: 'template-enhanced-apple', name: 'JumpCloud Enhanced Security - Apple', description: ENHANCED_TEMPLATE_DESCRIPTION, policyCount: 16 },
  { id: 'template-enhanced-windows', name: 'JumpCloud Enhanced Security - Windows', description: ENHANCED_TEMPLATE_DESCRIPTION, policyCount: 17 },
  { id: 'template-enhanced-linux', name: 'JumpCloud Enhanced Security - Linux', description: ENHANCED_TEMPLATE_DESCRIPTION, policyCount: 15 },
];

/** DataTableCellText clamps to a single line, so templates use a wrapping cell instead. */
const TemplateDescriptionCell = markRaw(defineComponent({
  name: 'TemplateDescriptionCell',
  props: {
    description: { type: String, default: '' },
    detail: { type: String, default: '' },
    expanded: { type: Boolean, default: false },
  },
  setup(props) {
    return () => h('div', { class: 'flex flex-col justify-center gap-0.5 px-2 py-1.5 min-h-12 max-w-[800px]' }, [
      h(
        'span',
        {
          class: [
            'text-body-md text-neutral-base',
            props.expanded ? 'whitespace-normal' : 'line-clamp-2',
          ],
          title: props.description,
        },
        props.description,
      ),
      props.detail
        ? h('span', { class: 'text-body-xs text-neutral-muted' }, props.detail)
        : null,
    ]);
  },
}));

/** Circuit header cells use flex; headerStyle textAlign does not center the title — override PT instead. */
const TYPE_COLUMN_PT = {
  columnHeaderContent: {
    class: 'justify-center! w-full!',
  },
};

const PolicyGroupTypeIcon = markRaw(defineComponent({
  name: 'PolicyGroupTypeIcon',
  components: { RectangleGroupIcon },
  template: `
    <div class="flex items-center justify-center w-full">
      <RectangleGroupIcon class="size-5 shrink-0 text-neutral-base" aria-label="Policy group" />
    </div>
  `,
}));

const PolicyGroupsPage = defineComponent({
  name: 'PolicyGroupsPage',
  components: {
    ActionsToolbar,
    AppNavigation,
    CheckboxWithLabel,
    CollapsiblePanel,
    DataTable,
    DataTableToolbar,
    FormField,
    ListPageLayout,
    PageHeader,
    PageSection,
    PageSaveBar,
    PolicyGroupAddDropdown,
    ToastNotification,
    TopBar,
    PvButton: Button,
    PvDrawer: Drawer,
    PvInputText: InputText,
    PvTab: Tab,
    PvTabList: TabList,
    PvTabPanel: TabPanel,
    PvTabPanels: TabPanels,
    PvTabs: Tabs,
    PvTextarea: Textarea,
    RectangleGroupIcon,
    ShieldCheckIcon,
    XMarkIcon,
  },
  setup() {
    const toast = useToast();
    const groups = ref<PolicyGroup[]>(INITIAL_POLICY_GROUPS.map((group) => ({ ...group })));
    const selectedGroups = ref<PolicyGroup[]>([]);
    const searchQuery = ref('');
    const first = ref(0);
    const rows = ref(10);
    let nextId = INITIAL_POLICY_GROUPS.length + 1;

    const addOptions = [
      { label: 'Policy Group', value: 'policy-group' },
      { label: 'Policy Group From Template', value: 'policy-group-template' },
    ];
    const pageView = ref<'groups' | 'templates'>('groups');
    const templateSearch = ref('');
    const templateFirst = ref(0);
    const templateRows = ref(10);
    const expandedTemplateIds = ref<string[]>([]);
    const createDrawerVisible = ref(false);
    const createTab = ref('details');
    const groupConfigCollapsed = ref(false);
    const groupName = ref('');
    const groupDescription = ref('');
    const selectedPolicies = ref<PolicyAssignment[]>([]);
    const selectedDeviceGroups = ref<DeviceGroupAssignment[]>([]);
    const policySearch = ref('');
    const deviceGroupSearch = ref('');
    const showBoundDeviceGroups = ref(false);
    const policyFirst = ref(0);
    const policyRows = ref(10);
    const deviceGroupFirst = ref(0);
    const deviceGroupRows = ref(10);
    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);
    const createBaseline = ref({
      groupName: '',
      groupDescription: '',
      policyIds: [] as string[],
      deviceGroupIds: [] as string[],
    });

    const columns = [
      {
        field: 'type',
        header: 'Type',
        width: '80px',
        pt: TYPE_COLUMN_PT,
        component: PolicyGroupTypeIcon,
        componentProps: () => ({}),
      },
      {
        field: 'group',
        header: 'Group',
        sortable: true,
        component: markRaw(DataTableCellLink),
        componentProps: (slotProps: { data: PolicyGroup }) => ({
          label: slotProps.data.group,
          description: slotProps.data.description,
          href: '#',
        }),
      },
    ];

    const policyColumns = [
      {
        field: 'type',
        header: 'Type',
        width: '96px',
        component: markRaw(DataTableCellText),
        componentProps: (slotProps: { data: PolicyAssignment }) => ({
          label: slotProps.data.type,
          icon: markRaw(ShieldCheckIcon),
        }),
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        component: markRaw(DataTableCellLink),
        componentProps: (slotProps: { data: PolicyAssignment }) => ({
          label: slotProps.data.name,
          description: slotProps.data.description,
          href: '#',
        }),
      },
      {
        field: 'requirements',
        header: 'Requirements',
        sortable: true,
        component: markRaw(DataTableCellText),
        componentProps: (slotProps: { data: PolicyAssignment }) => ({
          label: slotProps.data.requirements,
        }),
      },
    ];

    const deviceGroupColumns = [
      {
        field: 'group',
        header: 'Group',
        sortable: true,
        component: markRaw(DataTableCellLink),
        componentProps: (slotProps: { data: DeviceGroupAssignment }) => ({
          label: slotProps.data.group,
          description: slotProps.data.description,
          href: '#',
        }),
      },
      {
        field: 'numberOfDevices',
        header: 'Number of Devices',
        sortable: true,
        component: markRaw(DataTableCellText),
        componentProps: (slotProps: { data: DeviceGroupAssignment }) => ({
          label: slotProps.data.numberOfDevices,
        }),
      },
      {
        field: 'membershipControl',
        header: 'Device Membership Controls',
        component: markRaw(DataTableCellText),
        componentProps: (slotProps: { data: DeviceGroupAssignment }) => ({
          label: slotProps.data.membershipControl,
        }),
      },
      {
        field: 'defaultGroup',
        header: 'Default Group',
        component: markRaw(DataTableCellText),
        componentProps: (slotProps: { data: DeviceGroupAssignment }) => ({
          label: slotProps.data.defaultGroup,
        }),
      },
    ];

    const templateColumns = computed(() => [
      {
        field: 'expand',
        header: '',
        width: '48px',
        component: markRaw(DataTableCellAction),
        componentProps: (slotProps: { data: PolicyGroupTemplate }) => ({
          type: 'Button Group' as const,
          iconButtons: [
            {
              icon: markRaw(
                expandedTemplateIds.value.includes(slotProps.data.id)
                  ? ChevronDownIcon
                  : ChevronRightIcon,
              ),
              ariaLabel: expandedTemplateIds.value.includes(slotProps.data.id)
                ? `Collapse ${slotProps.data.name}`
                : `Expand ${slotProps.data.name}`,
              onClick: () => toggleTemplateExpanded(slotProps.data.id),
            },
          ],
        }),
      },
      {
        field: 'name',
        header: 'Template Name',
        sortable: true,
        width: '320px',
        component: markRaw(DataTableCellText),
        componentProps: (slotProps: { data: PolicyGroupTemplate }) => ({
          label: slotProps.data.name,
        }),
      },
      {
        field: 'description',
        header: 'Description',
        component: TemplateDescriptionCell,
        componentProps: (slotProps: { data: PolicyGroupTemplate }) => ({
          description: slotProps.data.description,
          expanded: expandedTemplateIds.value.includes(slotProps.data.id),
          detail: expandedTemplateIds.value.includes(slotProps.data.id)
            ? `Includes ${slotProps.data.policyCount} recommended policies.`
            : '',
        }),
      },
      {
        field: 'actions',
        header: '',
        width: '96px',
        frozen: true,
        alignFrozen: 'right',
        component: markRaw(DataTableCellAction),
        componentProps: (slotProps: { data: PolicyGroupTemplate }) => ({
          type: 'Button' as const,
          actionButtons: [
            {
              label: 'Create',
              onClick: () => handleTemplateCreate(slotProps.data),
            },
          ],
        }),
      },
    ]);

    const filteredTemplates = computed(() => {
      const query = templateSearch.value.trim().toLowerCase();
      if (!query) return POLICY_GROUP_TEMPLATES;
      return POLICY_GROUP_TEMPLATES.filter((template) =>
        `${template.name} ${template.description}`.toLowerCase().includes(query),
      );
    });

    const currentPageTemplates = computed(() =>
      filteredTemplates.value.slice(
        templateFirst.value,
        templateFirst.value + templateRows.value,
      ),
    );

    const filteredGroups = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      if (!query) return groups.value;
      return groups.value.filter((group) =>
        `${group.group} ${group.description}`.toLowerCase().includes(query),
      );
    });

    const currentPageGroups = computed(() =>
      filteredGroups.value.slice(first.value, first.value + rows.value),
    );

    const filteredPolicies = computed(() => {
      const query = policySearch.value.trim().toLowerCase();
      if (!query) return POLICY_ASSIGNMENTS;
      return POLICY_ASSIGNMENTS.filter((policy) =>
        `${policy.name} ${policy.description} ${policy.requirements}`
          .toLowerCase()
          .includes(query),
      );
    });

    const currentPagePolicies = computed(() =>
      filteredPolicies.value.slice(policyFirst.value, policyFirst.value + policyRows.value),
    );

    const availableDeviceGroups = computed(() => {
      const source = showBoundDeviceGroups.value
        ? DEVICE_GROUP_ASSIGNMENTS.filter((group) => group.bound)
        : DEVICE_GROUP_ASSIGNMENTS;
      const query = deviceGroupSearch.value.trim().toLowerCase();
      if (!query) return source;
      return source.filter((group) =>
        `${group.group} ${group.description} ${group.membershipControl}`
          .toLowerCase()
          .includes(query),
      );
    });

    const currentPageDeviceGroups = computed(() =>
      availableDeviceGroups.value.slice(
        deviceGroupFirst.value,
        deviceGroupFirst.value + deviceGroupRows.value,
      ),
    );

    const boundDeviceGroupCount = computed(
      () => DEVICE_GROUP_ASSIGNMENTS.filter((group) => group.bound).length,
    );

    const isCreateDirty = computed(() => {
      if (!createDrawerVisible.value) return false;
      if (groupName.value !== createBaseline.value.groupName) return true;
      if (groupDescription.value !== createBaseline.value.groupDescription) return true;

      const policyIds = selectedPolicies.value.map((policy) => policy.id).sort();
      const deviceGroupIds = selectedDeviceGroups.value.map((group) => group.id).sort();
      return (
        JSON.stringify(policyIds) !== JSON.stringify(createBaseline.value.policyIds)
        || JSON.stringify(deviceGroupIds) !== JSON.stringify(createBaseline.value.deviceGroupIds)
      );
    });

    const createSaveBarMessage = computed(() => 'You have unsaved changes');

    const createTabModel = computed({
      get: () => createTab.value,
      set: (value: string) => {
        createTab.value = value;
      },
    });

    const groupNameModel = computed({
      get: () => groupName.value,
      set: (value: string) => {
        groupName.value = value;
      },
    });

    const groupDescriptionModel = computed({
      get: () => groupDescription.value,
      set: (value: string) => {
        groupDescription.value = value;
      },
    });

    const groupConfigCollapsedModel = computed({
      get: () => groupConfigCollapsed.value,
      set: (value: boolean) => {
        groupConfigCollapsed.value = value;
      },
    });

    const selectedPoliciesModel = computed({
      get: () => selectedPolicies.value,
      set: (value: PolicyAssignment[]) => {
        selectedPolicies.value = value;
      },
    });

    const selectedDeviceGroupsModel = computed({
      get: () => selectedDeviceGroups.value,
      set: (value: DeviceGroupAssignment[]) => {
        selectedDeviceGroups.value = value;
      },
    });

    const showBoundDeviceGroupsModel = computed({
      get: () => showBoundDeviceGroups.value,
      set: (value: boolean) => {
        showBoundDeviceGroups.value = value;
      },
    });

    watch(isCreateDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const selectedItems = computed(() =>
      selectedGroups.value.map((group) => ({
        id: group.id,
        label: group.group,
        description: group.description,
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

    /** Snapshot the form as-is so pre-filled defaults don't count as user edits. */
    function captureCreateBaseline() {
      createBaseline.value = {
        groupName: groupName.value,
        groupDescription: groupDescription.value,
        policyIds: selectedPolicies.value.map((policy) => policy.id).sort(),
        deviceGroupIds: selectedDeviceGroups.value.map((group) => group.id).sort(),
      };
    }

    function handleAddOption(option?: { value: string | number }) {
      if (option?.value === 'policy-group-template') {
        pageView.value = 'templates';
        templateSearch.value = '';
        templateFirst.value = 0;
        expandedTemplateIds.value = [];
        return;
      }
      if (option?.value !== 'policy-group') return;

      createTab.value = 'details';
      groupName.value = 'New Policy Group';
      groupDescription.value = '';
      selectedPolicies.value = [];
      selectedDeviceGroups.value = [];
      policySearch.value = '';
      deviceGroupSearch.value = '';
      showBoundDeviceGroups.value = false;
      policyFirst.value = 0;
      deviceGroupFirst.value = 0;
      showSavedConfirmation.value = false;
      captureCreateBaseline();
      createDrawerVisible.value = true;
      groupConfigCollapsed.value = false;
    }

    function returnToPolicyGroups() {
      pageView.value = 'groups';
      templateSearch.value = '';
      templateFirst.value = 0;
      expandedTemplateIds.value = [];
    }

    function handleTemplateSearch(query: string) {
      templateSearch.value = query;
      templateFirst.value = 0;
    }

    function handleTemplatePageChange(event: { first: number; rows: number }) {
      templateFirst.value = event.first;
      templateRows.value = event.rows;
    }

    function toggleTemplateExpanded(templateId: string) {
      expandedTemplateIds.value = expandedTemplateIds.value.includes(templateId)
        ? expandedTemplateIds.value.filter((id) => id !== templateId)
        : [...expandedTemplateIds.value, templateId];
    }

    function handleTemplateCreate(template: PolicyGroupTemplate) {
      groups.value = [
        {
          id: String(nextId++),
          type: 'Policy group',
          group: template.name,
          description: 'Group of Policies',
        },
        ...groups.value,
      ];
      first.value = 0;
      searchQuery.value = '';
      returnToPolicyGroups();
      toast.add({
        severity: 'success',
        summary: 'Policy Group Created',
        detail: `"${template.name}" has been created from the template.`,
        life: 3000,
      });
    }

    function handlePolicySearch(query: string) {
      policySearch.value = query;
      policyFirst.value = 0;
    }

    function handleDeviceGroupSearch(query: string) {
      deviceGroupSearch.value = query;
      deviceGroupFirst.value = 0;
    }

    function handlePolicyPageChange(event: { first: number; rows: number }) {
      policyFirst.value = event.first;
      policyRows.value = event.rows;
    }

    function handlePolicyFirstUpdate(value: number) {
      policyFirst.value = value;
    }

    function handlePolicyRowsUpdate(value: number) {
      policyRows.value = value;
    }

    function handleDeviceGroupPageChange(event: { first: number; rows: number }) {
      deviceGroupFirst.value = event.first;
      deviceGroupRows.value = event.rows;
    }

    function handleDeviceGroupFirstUpdate(value: number) {
      deviceGroupFirst.value = value;
    }

    function handleDeviceGroupRowsUpdate(value: number) {
      deviceGroupRows.value = value;
    }

    function resetCreateFlow() {
      groupName.value = '';
      groupDescription.value = '';
      selectedPolicies.value = [];
      selectedDeviceGroups.value = [];
      showSavedConfirmation.value = false;
    }

    function closeCreateFlow() {
      createDrawerVisible.value = false;
      resetCreateFlow();
    }

    function handleCreateDiscard() {
      groupName.value = createBaseline.value.groupName;
      groupDescription.value = createBaseline.value.groupDescription;
      selectedPolicies.value = POLICY_ASSIGNMENTS.filter((policy) =>
        createBaseline.value.policyIds.includes(policy.id),
      );
      selectedDeviceGroups.value = DEVICE_GROUP_ASSIGNMENTS.filter((group) =>
        createBaseline.value.deviceGroupIds.includes(group.id),
      );
      showSavedConfirmation.value = false;
    }

    async function handleCreateSave() {
      if (!groupName.value.trim()) return;

      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      groups.value = [
        {
          id: String(nextId++),
          type: 'Policy group',
          group: groupName.value.trim(),
          description: 'Group of Policies',
        },
        ...groups.value,
      ];
      captureCreateBaseline();
      first.value = 0;
      isSaving.value = false;
      showSavedConfirmation.value = true;
      setTimeout(() => {
        createDrawerVisible.value = false;
        pageView.value = 'groups';
        resetCreateFlow();
      }, 900);
    }

    function deleteSelectedGroups() {
      const selectedIds = new Set(selectedGroups.value.map((group) => group.id));
      groups.value = groups.value.filter((group) => !selectedIds.has(group.id));
      selectedGroups.value = [];
      if (first.value >= filteredGroups.value.length) {
        first.value = Math.max(0, first.value - rows.value);
      }
    }

    function handleBulkAction(action: { id: string }) {
      if (action.id === 'delete') deleteSelectedGroups();
    }

    return {
      addOptions,
      availableDeviceGroups,
      boundDeviceGroupCount,
      bulkActions,
      closeCreateFlow,
      columns,
      createDrawerVisible,
      createSaveBarMessage,
      createTab,
      createTabModel,
      currentPageDeviceGroups,
      currentPageGroups,
      currentPagePolicies,
      currentPageTemplates,
      deviceGroupColumns,
      deviceGroupFirst,
      deviceGroupRows,
      filteredGroups,
      filteredPolicies,
      filteredTemplates,
      first,
      groupConfigCollapsed,
      groupConfigCollapsedModel,
      groupDescription,
      groupDescriptionModel,
      groupName,
      groupNameModel,
      groups,
      handleAddOption,
      handleBulkAction,
      handleCreateDiscard,
      handleCreateSave,
      handleDeviceGroupFirstUpdate,
      handleDeviceGroupPageChange,
      handleDeviceGroupRowsUpdate,
      handleDeviceGroupSearch,
      handlePageChange,
      handlePolicyFirstUpdate,
      handlePolicyPageChange,
      handlePolicyRowsUpdate,
      handlePolicySearch,
      handleSearch,
      handleTemplateCreate,
      handleTemplatePageChange,
      handleTemplateSearch,
      isCreateDirty,
      isSaving,
      menuItems,
      pageView,
      policyColumns,
      policyFirst,
      policyRows,
      profileMenuItems,
      rows,
      selectedDeviceGroups,
      selectedDeviceGroupsModel,
      selectedGroups,
      selectedItems,
      selectedPolicies,
      selectedPoliciesModel,
      showBoundDeviceGroups,
      showBoundDeviceGroupsModel,
      showSavedConfirmation,
      shieldIcon: markRaw(ShieldCheckIcon),
      templateColumns,
      templateFirst,
      templateRows,
      returnToPolicyGroups,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <ToastNotification />
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
        :topNavToggle="true"
      />

      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar
          :showBackButton="pageView === 'templates'"
          backButtonLabel="Policy Groups"
          @back="returnToPolicyGroups"
        />
        <PageHeader
          :title="pageView === 'templates' ? 'Policy Group Templates' : 'Policy Groups'"
          :icon="pageView === 'groups' ? shieldIcon : undefined"
        />

        <ListPageLayout
          v-if="pageView === 'groups'"
          class="w-full! h-full! flex-1 min-h-0"
        >
          <div class="flex flex-col h-full relative">
            <DataTable
              class="policy-groups-table flex-1 min-h-0"
              :data="currentPageGroups"
              :columns="columns"
              selectionMode="multiple"
              v-model:selection="selectedGroups"
              dataKey="id"
              :paginator="true"
              :rows="rows"
              :first="first"
              :totalRecords="filteredGroups.length"
              :lazy="true"
              :initialEmpty="groups.length === 0 && filteredGroups.length === 0"
              :showRowsPerPageOptions="true"
              :showPageReport="true"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '25 Items per page', value: 25 },
                { label: '50 Items per page', value: 50 },
              ]"
              scrollable
              scrollHeight="flex"
              @update:first="first = $event"
              @update:rows="rows = $event"
              @page-change="handlePageChange"
            >
              <template #toolbar>
                <div class="flex items-start gap-x-4 w-full pb-4">
                  <PolicyGroupAddDropdown
                    class="flex shrink-0 items-center h-8"
                    :options="addOptions"
                    @select="handleAddOption"
                  />
                  <DataTableToolbar
                    class="min-w-0 flex-1"
                    searchPlaceholder="Search policy groups..."
                    :showAddButton="false"
                    :showFilterButton="false"
                    :showRefreshButton="true"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                    :showSaveViewButton="false"
                    @search="handleSearch"
                  >
                    <template #saved-views>
                      <span class="text-body-md text-neutral-subtle">
                        {{ filteredGroups.length }} policy groups
                      </span>
                    </template>
                  </DataTableToolbar>
                </div>
              </template>

              <template #empty>
                <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                  <span class="text-body-md">No policy groups match your search</span>
                  <span class="text-body-sm mt-1">Try adjusting your search criteria</span>
                </div>
              </template>

              <template #initialEmpty>
                <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                  <span class="text-body-md">No policy groups yet</span>
                  <span class="text-body-sm mt-1">Add your first policy group to get started</span>
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
                  :selectionLabel="selectedItems.length === 1 ? 'Policy group selected' : 'Policy groups selected'"
                  @action="handleBulkAction"
                  @close="selectedGroups = []"
                />
              </div>
            </Transition>
          </div>
        </ListPageLayout>

        <ListPageLayout
          v-else
          class="w-full! h-full! flex-1 min-h-0"
        >
          <div class="flex flex-col h-full min-h-0 gap-md">
            <PageSection title="Recommended Templates">
              <template #subtitle>
                <span class="text-body-sm text-neutral-subtle">
                  Start with a JumpCloud-recommended policy group configuration.
                </span>
              </template>
            </PageSection>

            <div class="flex flex-col h-full relative">
              <DataTable
                class="flex-1 min-h-0"
                :data="currentPageTemplates"
                :columns="templateColumns"
                dataKey="id"
                :paginator="true"
                :rows="templateRows"
                :first="templateFirst"
                :totalRecords="filteredTemplates.length"
                :lazy="true"
                :showRowsPerPageOptions="false"
                :showPageReport="true"
                scrollable
                scrollHeight="flex"
                @update:first="templateFirst = $event"
                @update:rows="templateRows = $event"
                @page-change="handleTemplatePageChange"
              >
                <template #toolbar>
                  <DataTableToolbar
                    :showAddButton="false"
                    searchPlaceholder="Search templates..."
                    :showFilterButton="false"
                    :showRefreshButton="false"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                    :showSaveViewButton="false"
                    @search="handleTemplateSearch"
                  >
                    <template #saved-views>
                      <span class="text-body-md text-neutral-subtle">
                        {{ filteredTemplates.length }} groups
                      </span>
                    </template>
                  </DataTableToolbar>
                </template>

                <template #empty>
                  <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                    <span class="text-body-md">No templates match your search</span>
                    <span class="text-body-sm mt-1">Try adjusting your search criteria</span>
                  </div>
                </template>

                <template #initialEmpty>
                  <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                    <span class="text-body-md">No templates available</span>
                  </div>
                </template>
              </DataTable>
            </div>
          </div>
        </ListPageLayout>

        <PvDrawer
          v-model:visible="createDrawerVisible"
          class="policy-group-create-drawer"
          header="New Policy Group"
          position="full"
          modal
          :dismissable="false"
          :autoZIndex="false"
          :baseZIndex="40"
          @hide="closeCreateFlow"
        >
          <template #header>
            <div class="flex items-center gap-sm">
              <div class="flex size-10 items-center justify-center rounded-full border border-neutral-default_solid">
                <RectangleGroupIcon class="size-5 text-neutral-base" />
              </div>
              <div class="flex flex-col">
                <span class="text-heading-3 text-neutral-base">New Policy Group</span>
                <span class="text-body-sm text-neutral-subtle">
                  Configure the group, then select policies and device groups.
                </span>
              </div>
            </div>
          </template>
          <template #closebutton="btnProps">
            <PvButton
              severity="secondary"
              variant="text"
              size="small"
              aria-label="Close new policy group"
              @click="btnProps.closeCallback"
            >
              <template #icon="iconProps">
                <XMarkIcon :class="iconProps.class" />
              </template>
            </PvButton>
          </template>

          <div class="policy-group-create-shell flex h-full min-h-0 flex-col">
            <PvTabs v-model:value="createTabModel" class="policy-group-create-tabs flex min-h-0 flex-1 flex-col">
              <PvTabList withPadding>
                <PvTab value="details">Details</PvTab>
                <PvTab value="policies">Policies</PvTab>
                <PvTab value="device-groups">Device Groups</PvTab>
              </PvTabList>

              <PvTabPanels class="policy-group-create-tabpanels flex-1 min-h-0 px-sm">
              <PvTabPanel value="details" class="policy-group-create-tabpanel policy-group-create-tabpanel--details pt-md">
                <CollapsiblePanel v-model:collapsed="groupConfigCollapsedModel" toggleable header="Group Configuration">
                  <template #titleicon="iconProps">
                    <RectangleGroupIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>

                  <div class="flex flex-col gap-md">
                    <FormField label="Name" required>
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="groupNameModel"
                          class="w-full"
                          placeholder="Group name"
                        />
                      </template>
                    </FormField>

                    <FormField label="Description">
                      <template #default="{ inputId }">
                        <PvTextarea
                          :id="inputId"
                          v-model="groupDescriptionModel"
                          class="w-full"
                          :rows="5"
                          placeholder="Description"
                        />
                      </template>
                    </FormField>
                  </div>
                </CollapsiblePanel>
              </PvTabPanel>

              <PvTabPanel value="policies" class="policy-group-create-tabpanel policy-group-create-tabpanel--table pt-md">
                <p class="text-body-md text-neutral-subtle mb-md shrink-0">
                  New policy group has the following policies applied:
                </p>
                <div class="policy-group-create-table flex flex-col flex-1 min-h-0 relative">
                  <DataTable
                    class="flex-1 min-h-0"
                    :data="currentPagePolicies"
                    :columns="policyColumns"
                    selectionMode="multiple"
                    v-model:selection="selectedPoliciesModel"
                    dataKey="id"
                    :paginator="true"
                    :rows="policyRows"
                    :first="policyFirst"
                    :totalRecords="filteredPolicies.length"
                    :lazy="true"
                    :showRowsPerPageOptions="true"
                    :showPageReport="true"
                    :rowsPerPageOptions="[
                      { label: '10 Items per page', value: 10 },
                      { label: '25 Items per page', value: 25 },
                    ]"
                    scrollable
                    scrollHeight="flex"
                    @update:first="handlePolicyFirstUpdate"
                    @update:rows="handlePolicyRowsUpdate"
                    @page-change="handlePolicyPageChange"
                  >
                    <template #toolbar>
                      <DataTableToolbar
                        :showAddButton="false"
                        searchPlaceholder="Search policies..."
                        :showFilterButton="false"
                        :showRefreshButton="true"
                        :showColumnsButton="false"
                        :showDownloadButton="false"
                        :showSaveViewButton="false"
                        @search="handlePolicySearch"
                      >
                        <template #saved-views>
                          <span class="text-body-md text-neutral-subtle">
                            {{ selectedPolicies.length }} policies selected
                          </span>
                        </template>
                      </DataTableToolbar>
                    </template>

                    <template #empty>
                      <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                        <span class="text-body-md">No policies match your search</span>
                        <span class="text-body-sm mt-1">Try adjusting your search criteria</span>
                      </div>
                    </template>
                    <template #initialEmpty>
                      <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                        <span class="text-body-md">No policies available</span>
                      </div>
                    </template>
                  </DataTable>
                </div>
              </PvTabPanel>

              <PvTabPanel value="device-groups" class="policy-group-create-tabpanel policy-group-create-tabpanel--table pt-md">
                <div class="policy-group-create-table flex flex-col flex-1 min-h-0 relative">
                  <DataTable
                    class="flex-1 min-h-0"
                    :data="currentPageDeviceGroups"
                    :columns="deviceGroupColumns"
                    selectionMode="multiple"
                    v-model:selection="selectedDeviceGroupsModel"
                    dataKey="id"
                    :paginator="true"
                    :rows="deviceGroupRows"
                    :first="deviceGroupFirst"
                    :totalRecords="availableDeviceGroups.length"
                    :lazy="true"
                    :showRowsPerPageOptions="true"
                    :showPageReport="true"
                    :rowsPerPageOptions="[
                      { label: '10 Items per page', value: 10 },
                      { label: '25 Items per page', value: 25 },
                    ]"
                    scrollable
                    scrollHeight="flex"
                    @update:first="handleDeviceGroupFirstUpdate"
                    @update:rows="handleDeviceGroupRowsUpdate"
                    @page-change="handleDeviceGroupPageChange"
                  >
                    <template #toolbar>
                      <DataTableToolbar
                        :showAddButton="false"
                        searchPlaceholder="Search device groups..."
                        :showFilterButton="false"
                        :showRefreshButton="true"
                        :showColumnsButton="false"
                        :showDownloadButton="false"
                        :showSaveViewButton="false"
                        @search="handleDeviceGroupSearch"
                      >
                        <template #saved-views>
                          <CheckboxWithLabel
                            v-model="showBoundDeviceGroupsModel"
                            :binary="true"
                            inputId="show-bound-device-groups"
                          >
                            <template #label>
                              Show bound device groups ({{ boundDeviceGroupCount }})
                            </template>
                          </CheckboxWithLabel>
                        </template>
                      </DataTableToolbar>
                    </template>

                    <template #empty>
                      <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                        <span class="text-body-md">No device groups match your search</span>
                        <span class="text-body-sm mt-1">Try adjusting your search criteria</span>
                      </div>
                    </template>
                    <template #initialEmpty>
                      <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                        <span class="text-body-md">No device groups available</span>
                      </div>
                    </template>
                  </DataTable>
                </div>
              </PvTabPanel>
            </PvTabPanels>
            </PvTabs>
          </div>
        </PvDrawer>

        <PageSaveBar
          :visible="createDrawerVisible && isCreateDirty"
          :saving="isSaving"
          :saved="showSavedConfirmation"
          :message="createSaveBarMessage"
          saveLabel="Save Policy Group"
          discardLabel="Cancel"
          savedLabel="Policy group saved"
          @save="handleCreateSave"
          @discard="handleCreateDiscard"
        />
      </div>
    </div>
  `,
});

export { PolicyGroupsPage };

const meta: Meta<typeof PolicyGroupsPage> = {
  title: "Projects/Mike's Playground/Device Management/Policy Groups",
  component: PolicyGroupsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PolicyGroupsPage>;

export const Default: Story = {};
