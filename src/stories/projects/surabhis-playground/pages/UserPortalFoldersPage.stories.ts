import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, computed, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellLink,
  DataTableCellText,
  FormField,
  SeverityDialog,
  ToastNotification,
  CardButton,
  ActionsToolbar,
  CollapsiblePanel,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import { useToast } from 'primevue/usetoast';

import {
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  FolderIcon,
  FolderOpenIcon,
  ArrowLeftIcon,
  XMarkIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  CubeIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CodeBracketIcon,
  ClipboardDocumentListIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline';

import {
  SsoIcon,
  AccessIcon,
  CheckListIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

// ─── User Portal Navigation ───

const userMenuItems = [
  { label: 'All Applications', leftIcon: markRaw(SsoIcon) },
  { label: 'Folders', leftIcon: markRaw(FolderIcon), isNew: true },
  { label: 'Requests', leftIcon: markRaw(AccessIcon) },
  { label: 'Tasks', leftIcon: markRaw(CheckListIcon) },
  { label: 'My Assets', leftIcon: markRaw(CubeIcon) },
  { label: 'Security', leftIcon: markRaw(PasswordManagerIcon) },
];

const profileMenuItems = [
  {
    label: 'Surbhi Jain',
    itemType: 'profile_compact',
    initials: 'SJ',
    name: 'Surbhi Jain',
    items: [
      {
        label: 'Surbhi Jain',
        itemType: 'profile_large',
        name: 'Surbhi Jain',
        email: 'surbhi.jain@company.com',
        initials: 'SJ',
      },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      { label: 'Go to Admin Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
    ],
  },
];

// ─── Types ───

interface AppItem {
  id: number;
  name: string;
  category: string;
  lastUsed: string;
  ssoType: string;
}

interface Folder {
  id: number;
  name: string;
  description: string;
  apps: AppItem[];
  createdAt: string;
}

interface CategoryGroup {
  category: string;
  apps: AppItem[];
}

// ─── All apps flat list (used for auto-grouping) ───

const allUserApps: AppItem[] = [
  { id: 1,  name: 'Google Workspace',   category: 'Productivity',        lastUsed: 'Today',       ssoType: 'SAML' },
  { id: 2,  name: 'Microsoft 365',      category: 'Productivity',        lastUsed: 'Yesterday',   ssoType: 'OIDC' },
  { id: 3,  name: 'Asana',              category: 'Productivity',        lastUsed: '2 days ago',  ssoType: 'SAML' },
  { id: 4,  name: 'Slack',              category: 'Communication',       lastUsed: 'Today',       ssoType: 'SAML' },
  { id: 5,  name: 'Microsoft Teams',    category: 'Communication',       lastUsed: 'Today',       ssoType: 'OIDC' },
  { id: 6,  name: 'Zoom',               category: 'Communication',       lastUsed: 'Today',       ssoType: 'SAML' },
  { id: 7,  name: 'Loom',               category: 'Communication',       lastUsed: '1 week ago',  ssoType: 'SAML' },
  { id: 8,  name: 'GitHub',             category: 'Engineering',         lastUsed: 'Today',       ssoType: 'OIDC' },
  { id: 9,  name: 'GitLab',             category: 'Engineering',         lastUsed: '3 days ago',  ssoType: 'SAML' },
  { id: 10, name: 'Datadog',            category: 'Engineering',         lastUsed: '3 days ago',  ssoType: 'SAML' },
  { id: 11, name: 'AWS Console',        category: 'Engineering',         lastUsed: 'Today',       ssoType: 'SAML' },
  { id: 12, name: 'Jira',               category: 'Project Management',  lastUsed: 'Yesterday',   ssoType: 'OIDC' },
  { id: 13, name: 'Confluence',         category: 'Project Management',  lastUsed: '2 days ago',  ssoType: 'SAML' },
  { id: 14, name: 'Notion',             category: 'Project Management',  lastUsed: 'Yesterday',   ssoType: 'SAML' },
  { id: 15, name: 'Miro',               category: 'Project Management',  lastUsed: '2 days ago',  ssoType: 'OIDC' },
  { id: 16, name: 'Workday',            category: 'HR & Finance',        lastUsed: '1 week ago',  ssoType: 'SAML' },
  { id: 17, name: 'Expensify',          category: 'HR & Finance',        lastUsed: '3 days ago',  ssoType: 'SAML' },
  { id: 18, name: 'Greenhouse',         category: 'HR & Finance',        lastUsed: '2 weeks ago', ssoType: 'SAML' },
  { id: 19, name: 'Okta',               category: 'Security',            lastUsed: '5 days ago',  ssoType: 'SAML' },
  { id: 20, name: 'CrowdStrike',        category: 'Security',            lastUsed: '1 week ago',  ssoType: 'SAML' },
];

// ─── Category icon map ───

const categoryIconMap: Record<string, unknown> = {
  'Productivity':       markRaw(BriefcaseIcon),
  'Communication':      markRaw(ChatBubbleOvalLeftEllipsisIcon),
  'Engineering':        markRaw(CodeBracketIcon),
  'Project Management': markRaw(ClipboardDocumentListIcon),
  'HR & Finance':       markRaw(BuildingOffice2Icon),
  'Security':           markRaw(ShieldCheckIcon),
};

function getCategoryIcon(category: string) {
  return categoryIconMap[category] ?? markRaw(FolderIcon);
}

// ─── Manual folder mock data ───

const initialFolders: Folder[] = [
  {
    id: 1,
    name: 'Work Apps',
    description: 'Everyday productivity tools',
    apps: [
      { id: 1, name: 'Google Workspace', category: 'Productivity',  lastUsed: 'Today',       ssoType: 'SAML' },
      { id: 2, name: 'Slack',            category: 'Communication', lastUsed: 'Today',       ssoType: 'SAML' },
      { id: 3, name: 'Jira',             category: 'Engineering',   lastUsed: 'Yesterday',   ssoType: 'OIDC' },
      { id: 4, name: 'Confluence',       category: 'Engineering',   lastUsed: '2 days ago',  ssoType: 'SAML' },
      { id: 5, name: 'Zoom',             category: 'Communication', lastUsed: 'Today',       ssoType: 'SAML' },
    ],
    createdAt: 'Jan 10, 2026',
  },
  {
    id: 2,
    name: 'Dev Tools',
    description: 'Engineering and development tools',
    apps: [
      { id: 8,  name: 'GitHub',    category: 'Engineering', lastUsed: 'Today',       ssoType: 'OIDC' },
      { id: 10, name: 'Datadog',   category: 'Engineering', lastUsed: '3 days ago',  ssoType: 'SAML' },
      { id: 11, name: 'AWS Console', category: 'Engineering', lastUsed: 'Today',     ssoType: 'SAML' },
    ],
    createdAt: 'Jan 15, 2026',
  },
  {
    id: 3,
    name: 'Communication',
    description: 'Team communication and messaging',
    apps: [
      { id: 5,  name: 'Microsoft Teams', category: 'Communication', lastUsed: 'Today',      ssoType: 'OIDC' },
      { id: 7,  name: 'Loom',            category: 'Communication', lastUsed: '1 week ago', ssoType: 'SAML' },
      { id: 14, name: 'Notion',          category: 'Engineering',   lastUsed: 'Yesterday',  ssoType: 'SAML' },
      { id: 15, name: 'Miro',            category: 'Engineering',   lastUsed: '2 days ago', ssoType: 'OIDC' },
    ],
    createdAt: 'Feb 02, 2026',
  },
  {
    id: 4,
    name: 'HR & Finance',
    description: 'HR and financial applications',
    apps: [
      { id: 16, name: 'Workday',    category: 'HR & Finance', lastUsed: '1 week ago',  ssoType: 'SAML' },
      { id: 17, name: 'Expensify',  category: 'HR & Finance', lastUsed: '3 days ago',  ssoType: 'SAML' },
    ],
    createdAt: 'Feb 20, 2026',
  },
];

// ─── App columns for folder detail DataTable ───

const appColumns = [
  {
    field: 'name',
    header: 'Application',
    sortable: true,
    width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      href: '#',
    }),
  },
  {
    field: 'category',
    header: 'Category',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.category,
    }),
  },
  {
    field: 'ssoType',
    header: 'SSO Type',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.ssoType,
    }),
  },
  {
    field: 'lastUsed',
    header: 'Last Used',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.lastUsed,
    }),
  },
];

// ─── View mode options ───

const viewModeOptions = [
  { label: 'My Folders', value: 'folders' },
  { label: 'By Category', value: 'categories' },
];

// ─── Component ───

const UserPortalFoldersPage = defineComponent({
  name: 'UserPortalFoldersPage',
  props: {
    initialView: {
      type: String as () => 'list' | 'detail' | 'empty',
      default: 'list',
    },
    initialMode: {
      type: String as () => 'folders' | 'categories',
      default: 'folders',
    },
  },
  components: {
    AppNavigation,
    PageHeader,
    CircuitDataTable,
    DataTableToolbar,
    SeverityDialog,
    FormField,
    ToastNotification,
    CardButton,
    ActionsToolbar,
    CollapsiblePanel,
    PvButton: Button,
    PvDialog: Dialog,
    PvInputText: InputText,
    PvMenu: Menu,
    PvSelectButton: SelectButton,
    PvTag: Tag,
    FolderIcon,
    FolderOpenIcon,
    ArrowLeftIcon,
    XMarkIcon,
    PlusIcon,
    EllipsisVerticalIcon,
    ChevronRightIcon,
  },
  setup(props) {
    const toast = useToast();

    // ── View mode toggle ──
    const viewMode = ref<'folders' | 'categories'>(props.initialMode);

    // ── Manual folders state ──
    const baseFolders = props.initialView === 'empty' ? [] : JSON.parse(JSON.stringify(initialFolders));
    const folders = ref<Folder[]>(baseFolders);
    const currentView = ref<'list' | 'detail'>(
      props.initialView === 'detail' ? 'detail' : 'list'
    );
    const selectedFolder = ref<Folder | null>(
      props.initialView === 'detail' ? JSON.parse(JSON.stringify(initialFolders[0])) : null
    );
    const selection = ref<AppItem[]>([]);

    // ── Folder action menu ──
    const folderMenuRef = ref<InstanceType<typeof Menu> | null>(null);
    const activeMenuFolder = ref<Folder | null>(null);

    // ── Dialogs ──
    const showCreateDialog = ref(false);
    const showRenameDialog = ref(false);
    const showDeleteDialog = ref(false);
    const newFolderName = ref('');
    const newFolderDescription = ref('');
    const renameFolderName = ref('');

    // ── Folder list search ──
    const searchQuery = ref('');

    // ── Auto-grouped categories state ──
    const collapsedCategories = ref<Record<string, boolean>>({});
    const categorySearch = ref('');

    // ── Computed ──

    const filteredFolders = computed(() =>
      folders.value.filter(f =>
        f.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    const groupedCategories = computed((): CategoryGroup[] => {
      const query = categorySearch.value.toLowerCase();
      const groups: Record<string, AppItem[]> = {};
      allUserApps.forEach(app => {
        if (query && !app.name.toLowerCase().includes(query) && !app.category.toLowerCase().includes(query)) return;
        if (!groups[app.category]) groups[app.category] = [];
        groups[app.category].push(app);
      });
      return Object.entries(groups)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([category, apps]) => ({ category, apps }));
    });

    const deleteDialogContent = computed(() => {
      if (!activeMenuFolder.value) return '';
      const count = activeMenuFolder.value.apps.length;
      const appsNote = count > 0
        ? `This folder contains **${count} app${count === 1 ? '' : 's'}**. The apps will not be deleted — they remain accessible in **All Applications**.`
        : 'This folder is empty.';
      return `You are about to delete the folder **${activeMenuFolder.value.name}**. ${appsNote}`;
    });

    const folderMenuItems = computed(() => [
      {
        label: 'Rename',
        command: () => {
          if (activeMenuFolder.value) {
            renameFolderName.value = activeMenuFolder.value.name;
            showRenameDialog.value = true;
          }
        },
      },
      {
        label: 'Delete',
        class: 'text-danger-base',
        command: () => {
          if (activeMenuFolder.value) {
            showDeleteDialog.value = true;
          }
        },
      },
    ]);

    const bulkActions = [
      { label: 'Remove from Folder', severity: 'danger' as const },
    ];

    // ── Methods ──

    function openFolder(folder: Folder) {
      selectedFolder.value = folder;
      selection.value = [];
      currentView.value = 'detail';
    }

    function backToFolders() {
      currentView.value = 'list';
      selectedFolder.value = null;
      selection.value = [];
    }

    function openFolderMenu(event: Event, folder: Folder) {
      event.stopPropagation();
      activeMenuFolder.value = folder;
      folderMenuRef.value?.toggle(event);
    }

    function toggleCategory(category: string, collapsed: boolean) {
      collapsedCategories.value = { ...collapsedCategories.value, [category]: collapsed };
    }

    function isCategoryCollapsed(category: string): boolean {
      return collapsedCategories.value[category] ?? false;
    }

    function createFolder() {
      if (!newFolderName.value.trim()) return;
      const newFolder: Folder = {
        id: Date.now(),
        name: newFolderName.value.trim(),
        description: newFolderDescription.value.trim(),
        apps: [],
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };
      folders.value.unshift(newFolder);
      showCreateDialog.value = false;
      const createdName = newFolder.name;
      newFolderName.value = '';
      newFolderDescription.value = '';
      toast.add({ severity: 'success', summary: 'Folder Created', detail: `"${createdName}" has been created.`, life: 3000 });
    }

    function renameFolder() {
      if (!activeMenuFolder.value || !renameFolderName.value.trim()) return;
      const folder = folders.value.find(f => f.id === activeMenuFolder.value!.id);
      if (folder) {
        folder.name = renameFolderName.value.trim();
        if (selectedFolder.value?.id === folder.id) {
          selectedFolder.value = { ...folder };
        }
      }
      const savedName = renameFolderName.value.trim();
      showRenameDialog.value = false;
      renameFolderName.value = '';
      toast.add({ severity: 'success', summary: 'Folder Renamed', detail: `Folder renamed to "${savedName}".`, life: 3000 });
    }

    function deleteFolder() {
      if (!activeMenuFolder.value) return;
      const folderName = activeMenuFolder.value.name;
      const deletedId = activeMenuFolder.value.id;
      folders.value = folders.value.filter(f => f.id !== deletedId);
      if (currentView.value === 'detail' && selectedFolder.value?.id === deletedId) {
        currentView.value = 'list';
        selectedFolder.value = null;
      }
      showDeleteDialog.value = false;
      toast.add({ severity: 'success', summary: 'Folder Deleted', detail: `"${folderName}" has been deleted.`, life: 3000 });
    }

    function handleBulkAction(action: { label: string }) {
      if (action.label === 'Remove from Folder') removeSelectedApps();
    }

    function removeSelectedApps() {
      if (!selectedFolder.value || selection.value.length === 0) return;
      const count = selection.value.length;
      const selectedIds = new Set(selection.value.map(a => a.id));
      const folder = folders.value.find(f => f.id === selectedFolder.value!.id);
      if (folder) {
        folder.apps = folder.apps.filter(a => !selectedIds.has(a.id));
        selectedFolder.value = { ...folder };
      }
      selection.value = [];
      toast.add({ severity: 'success', summary: 'Apps Removed', detail: `${count} app${count === 1 ? '' : 's'} removed from folder.`, life: 3000 });
    }

    return {
      viewMode,
      viewModeOptions,
      userMenuItems,
      profileMenuItems,
      // folders
      folders,
      filteredFolders,
      currentView,
      selectedFolder,
      selection,
      folderMenuRef,
      searchQuery,
      showCreateDialog,
      showRenameDialog,
      showDeleteDialog,
      newFolderName,
      newFolderDescription,
      renameFolderName,
      deleteDialogContent,
      folderMenuItems,
      bulkActions,
      appColumns,
      // categories
      groupedCategories,
      categorySearch,
      getCategoryIcon,
      isCategoryCollapsed,
      toggleCategory,
      // methods
      openFolder,
      backToFolders,
      openFolderMenu,
      createFolder,
      renameFolder,
      deleteFolder,
      handleBulkAction,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <ToastNotification />
      <AppNavigation
        :menuItems="userMenuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="folders"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

        <!-- Back button bar (folder detail only) -->
        <div
          v-if="currentView === 'detail'"
          class="shrink-0 flex items-center h-12 px-4 border-b border-navigation-top_bar-default bg-navigation-top_bar-default"
        >
          <PvButton label="Folders" severity="secondary" variant="text" size="small" @click="backToFolders">
            <template #icon><ArrowLeftIcon class="size-4" /></template>
          </PvButton>
        </div>

        <PageHeader
          :title="currentView === 'detail' ? (selectedFolder?.name ?? 'Folder') : 'Folders'"
        >
          <template v-if="currentView !== 'detail'" #icon>
            <FolderIcon class="size-7 text-neutral-base" />
          </template>
          <template v-if="currentView === 'detail'" #icon>
            <FolderOpenIcon class="size-7 text-neutral-base" />
          </template>
          <template v-if="currentView === 'detail' && selectedFolder" #subtitle>
            <span class="text-body-md text-neutral-subtle">
              {{ selectedFolder.apps.length }} {{ selectedFolder.apps.length === 1 ? 'app' : 'apps' }}<template v-if="selectedFolder.description"> &middot; {{ selectedFolder.description }}</template>
            </span>
          </template>
          <template #actions>
            <PvButton v-if="currentView === 'list' && viewMode === 'folders'" label="New Folder" @click="showCreateDialog = true">
              <template #icon><PlusIcon class="size-4" /></template>
            </PvButton>
          </template>
        </PageHeader>

        <!-- View mode toggle bar (list views only) -->
        <div v-if="currentView !== 'detail'" class="shrink-0 flex items-center px-6 py-3 border-b border-neutral-default_solid">
          <PvSelectButton
            v-model="viewMode"
            :options="viewModeOptions"
            option-label="label"
            option-value="value"
          />
        </div>

        <!-- ============================================================ -->
        <!-- MY FOLDERS VIEW                                               -->
        <!-- ============================================================ -->
        <div v-if="currentView === 'list' && viewMode === 'folders'" class="flex-1 overflow-auto bg-neutral-surface">
          <div class="w-full max-w-5xl mx-auto px-6 py-6 flex flex-col gap-6">

            <div class="max-w-sm">
              <PvInputText v-model="searchQuery" placeholder="Search folders..." class="w-full" />
            </div>

            <div v-if="filteredFolders.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <CardButton
                v-for="folder in filteredFolders"
                :key="folder.id"
                @click="openFolder(folder)"
              >
                <template #leading>
                  <FolderIcon class="size-8 text-neutral-base shrink-0" />
                </template>
                <div class="flex flex-col min-w-0">
                  <span class="text-body-md-semi-bold text-neutral-base truncate">{{ folder.name }}</span>
                  <span class="text-body-sm text-neutral-subtle">{{ folder.apps.length }} {{ folder.apps.length === 1 ? 'app' : 'apps' }}</span>
                  <span v-if="folder.description" class="text-body-sm text-neutral-subtle truncate">{{ folder.description }}</span>
                </div>
                <template #trailing>
                  <PvButton severity="secondary" variant="text" size="small" aria-label="Folder options" @click="openFolderMenu($event, folder)">
                    <template #icon><EllipsisVerticalIcon class="size-4" /></template>
                  </PvButton>
                </template>
              </CardButton>
            </div>

            <div v-else-if="searchQuery" class="flex flex-col items-center gap-3 py-16">
              <FolderIcon class="size-14 text-neutral-subtle" />
              <p class="text-body-md text-neutral-base">No folders match your search</p>
              <p class="text-body-sm text-neutral-subtle">Try a different search term.</p>
            </div>

            <div v-else class="flex flex-col items-center gap-4 py-16">
              <FolderIcon class="size-14 text-neutral-subtle" />
              <div class="text-center">
                <p class="text-body-md text-neutral-base">No folders yet</p>
                <p class="text-body-sm text-neutral-subtle mt-1">Create a folder to organize your applications for quick access.</p>
              </div>
              <PvButton label="Create Folder" @click="showCreateDialog = true">
                <template #icon><PlusIcon class="size-4" /></template>
              </PvButton>
            </div>

          </div>
        </div>

        <!-- ============================================================ -->
        <!-- BY CATEGORY VIEW (auto-generated)                            -->
        <!-- ============================================================ -->
        <div v-if="currentView === 'list' && viewMode === 'categories'" class="flex-1 overflow-auto bg-neutral-surface">
          <div class="w-full max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4">

            <!-- Category search -->
            <div class="max-w-sm">
              <PvInputText v-model="categorySearch" placeholder="Search apps..." class="w-full" />
            </div>

            <!-- Category sections -->
            <CollapsiblePanel
              v-for="group in groupedCategories"
              :key="group.category"
              toggleable
              :collapsed="isCategoryCollapsed(group.category)"
              @update:collapsed="toggleCategory(group.category, $event)"
              :header="group.category"
            >
              <template #titleicon="iconProps">
                <component :is="getCategoryIcon(group.category)" :class="iconProps.class" />
              </template>
              <template #actions>
                <PvTag :value="group.apps.length + (group.apps.length === 1 ? ' app' : ' apps')" severity="secondary" />
              </template>
              <template #toggleicon="iconProps">
                <ChevronRightIcon :class="iconProps.class" />
              </template>

              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <CardButton
                  v-for="app in group.apps"
                  :key="app.id"
                  @click="() => {}"
                >
                  <div class="flex flex-col gap-1 min-w-0">
                    <span class="text-body-sm-semi-bold text-neutral-base truncate">{{ app.name }}</span>
                    <span class="text-body-xs text-neutral-subtle">{{ app.lastUsed }}</span>
                  </div>
                  <template #trailing>
                    <PvTag :value="app.ssoType" severity="secondary" />
                  </template>
                </CardButton>
              </div>
            </CollapsiblePanel>

            <!-- Empty state when nothing matches category search -->
            <div v-if="groupedCategories.length === 0" class="flex flex-col items-center gap-3 py-16">
              <FolderIcon class="size-14 text-neutral-subtle" />
              <p class="text-body-md text-neutral-base">No apps match your search</p>
              <p class="text-body-sm text-neutral-subtle">Try a different search term.</p>
            </div>

          </div>
        </div>

        <!-- ============================================================ -->
        <!-- FOLDER DETAIL VIEW                                            -->
        <!-- ============================================================ -->
        <div v-if="currentView === 'detail' && selectedFolder" class="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div class="flex-1 flex flex-col min-h-0 w-full max-w-5xl mx-auto px-6 pt-6 relative">
            <CircuitDataTable
              :columns="appColumns"
              :data="selectedFolder.apps"
              selection-mode="multiple"
              v-model:selection="selection"
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
              :pt="{
                root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
              }"
              :ptOptions="{ mergeSections: true, mergeProps: true }"
            >
              <template #toolbar>
                <DataTableToolbar
                  searchPlaceholder="Search apps..."
                  add-button-label="Add Apps"
                  :showAddButton="true"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showFilterButton="false"
                />
              </template>
              <template #empty>
                <div class="flex flex-col items-center justify-center py-16 gap-3">
                  <FolderOpenIcon class="size-12 text-neutral-subtle" />
                  <p class="text-body-md text-neutral-base">This folder is empty</p>
                  <p class="text-body-sm text-neutral-subtle">Add applications from your All Applications list.</p>
                </div>
              </template>
            </CircuitDataTable>

            <!-- ActionsToolbar — floating bulk remove -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-4"
            >
              <div v-if="selection.length > 0" class="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
                <ActionsToolbar
                  :actions="bulkActions"
                  :selected-items="selection"
                  :selection-label="selection.length === 1 ? 'App selected' : 'Apps selected'"
                  @action="handleBulkAction"
                  @close="selection = []"
                />
              </div>
            </Transition>
          </div>
        </div>

        <!-- ============================================================ -->
        <!-- FOLDER ACTION MENU                                            -->
        <!-- ============================================================ -->
        <PvMenu ref="folderMenuRef" :model="folderMenuItems" popup />

        <!-- ============================================================ -->
        <!-- CREATE FOLDER DIALOG                                          -->
        <!-- ============================================================ -->
        <PvDialog v-model:visible="showCreateDialog" :draggable="false" modal header="Create Folder" :style="{ width: '480px' }">
          <template #closeicon><XMarkIcon class="size-5" /></template>
          <div class="flex flex-col gap-4">
            <FormField label="Folder Name" required>
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="newFolderName" class="w-full" placeholder="e.g. Work Apps, Dev Tools..." />
              </template>
            </FormField>
            <FormField label="Description">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="newFolderDescription" class="w-full" placeholder="Optional description" />
              </template>
            </FormField>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showCreateDialog = false; newFolderName = ''; newFolderDescription = ''" />
              <PvButton label="Create Folder" :disabled="!newFolderName.trim()" @click="createFolder" />
            </div>
          </template>
        </PvDialog>

        <!-- ============================================================ -->
        <!-- RENAME FOLDER DIALOG                                          -->
        <!-- ============================================================ -->
        <PvDialog v-model:visible="showRenameDialog" :draggable="false" modal header="Rename Folder" :style="{ width: '480px' }">
          <template #closeicon><XMarkIcon class="size-5" /></template>
          <div class="flex flex-col gap-4">
            <FormField label="Folder Name" required>
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="renameFolderName" class="w-full" />
              </template>
            </FormField>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showRenameDialog = false" />
              <PvButton label="Save" :disabled="!renameFolderName.trim()" @click="renameFolder" />
            </div>
          </template>
        </PvDialog>

        <!-- ============================================================ -->
        <!-- DELETE FOLDER DIALOG                                          -->
        <!-- ============================================================ -->
        <SeverityDialog
          v-model:visible="showDeleteDialog"
          dialogTitle="Delete Folder"
          variant="sev2"
          messageTitle="Apps will not be deleted"
          messageContent="All applications inside this folder will remain accessible in All Applications."
          :showMessageIcon="true"
          :dialogContent="deleteDialogContent"
          actionText="Delete Folder"
          cancelText="Cancel"
          @action="deleteFolder"
          @cancel="showDeleteDialog = false"
        />

      </div>
    </div>
  `,
});

// ─── Storybook Meta ───

const meta: Meta<typeof UserPortalFoldersPage> = {
  title: "Projects/Surbhi's Playground/Pages/User Portal - Folders",
  component: UserPortalFoldersPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof UserPortalFoldersPage>;

export const Default: Story = {
  name: 'My Folders (Manual)',
};

export const AutoGroupedCategories: Story = {
  name: 'By Category (Auto-generated)',
  args: { initialMode: 'categories' },
};

export const FolderDetail: Story = {
  name: 'Folder Detail — Work Apps',
  args: { initialView: 'detail' },
};

export const EmptyState: Story = {
  name: 'Empty State — No Folders',
  args: { initialView: 'empty' },
};
