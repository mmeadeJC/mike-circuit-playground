import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, defineComponent, ref } from 'vue';
import {
  AIAgentToolbar,
  AiSidebar,
  AiInputChat,
  CardButton,
  FormField,
  MessageNotification,
  PageHeader,
  RichText,
  SeverityDialog,
  ToggleSwitch,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Menu from 'primevue/menu';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';

import {
  TrashIcon,
  UserGroupIcon,
  UsersIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  XMarkIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline';

type MemoryCategory = 'Preference' | 'Workflow' | 'Context';
type MemorySource = 'Conversation' | 'Admin edit' | 'System';

interface MemoryItem {
  id: string;
  category: MemoryCategory;
  key: string;
  value: string;
  source: MemorySource;
  updatedAt: string;
}

interface AssistantRule {
  id: string;
  name: string;
  enabled: boolean;
  ruleText: string;
  updatedAt: string;
}

/** Sidebar + transcript demo: shows a rule (confirm bulk targets) and a memory (Pacific Time), similar to Cursor rules + ChatGPT “reference saved memories.” */
const EXAMPLE_MEMORY_RULE_CHAT_ID = 'c-memory-rule-demo';

const AiAssistantMemoryAndRulesPage = defineComponent({
  name: 'AiAssistantMemoryAndRulesPage',
  components: {
    AIAgentToolbar,
    AiSidebar,
    AiInputChat,
    CardButton,
    FormField,
    PageHeader,
    ToggleSwitch,
    MessageNotification,
    RichText,
    SeverityDialog,
    PvMenu: Menu,
    PvButton: Button,
    PvDialog: Dialog,
    PvIconField: IconField,
    PvInputIcon: InputIcon,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelectButton: SelectButton,
    PvDivider: Divider,
    PvTag: Tag,
    TrashIcon,
    XMarkIcon,
    UserGroupIcon,
    UsersIcon,
    ComputerDesktopIcon,
    ShieldCheckIcon,
    ArrowRightIcon,
    MagnifyingGlassIcon,
    EllipsisVerticalIcon,
    SparklesIcon,
  },
  setup() {
    const isSettingsView = ref(false);
    /** No default selection — avoid first row always matching `selectedChatId` and showing selected styling. */
    const selectedChatId = ref<string | undefined>(undefined);
    const sidebarCollapsed = ref(false);
    const chatInputValue = ref('');

    const activeSettingsTab = ref<'memory' | 'rules'>('memory');

    const memoryEnabled = ref(true);
    const memorySaveNewFromChats = ref(true);
    const memoryUseSavedWhenResponding = ref(true);
    const memoryReferenceRecentChats = ref(true);
    const rulesEnabled = ref(true);

    const showSavedMemoriesDialog = ref(false);
    const savedMemoriesSearchQuery = ref('');

    const chats = ref([
      {
        id: EXAMPLE_MEMORY_RULE_CHAT_ID,
        title: 'Bulk suspend — confirm targets',
        lastModified: new Date('2026-04-03T18:00:00'),
      },
      { id: 'c-1', title: 'Unregistered Users for JumpCloud...', lastModified: new Date('2026-03-31T10:00:00') },
      { id: 'c-2', title: 'Add User to User Group', lastModified: new Date('2026-03-30T15:30:00') },
      { id: 'c-3', title: 'Unapproved SaaS Apps Count', lastModified: new Date('2026-03-29T09:00:00') },
      { id: 'c-4', title: 'which users are not registered to jc go', lastModified: new Date('2026-03-28T14:00:00') },
      { id: 'c-5', title: 'can you bind baris user to a mac d...', lastModified: new Date('2026-03-27T11:00:00') },
      { id: 'c-6', title: 'can you create a new user for ...', lastModified: new Date('2026-03-26T09:00:00') },
      { id: 'c-7', title: 'do you have access to the director...', lastModified: new Date('2026-03-25T16:00:00') },
      { id: 'c-8', title: 'show me the user named Baris', lastModified: new Date('2026-03-24T10:00:00') },
      { id: 'c-9', title: 'Which users are bound to a device', lastModified: new Date('2026-03-23T14:00:00') },
      { id: 'c-10', title: 'How many of my devices are not e...', lastModified: new Date('2026-03-22T11:00:00') },
      { id: 'c-11', title: 'list me all the users', lastModified: new Date('2026-03-21T09:00:00') },
    ]);

    const memories = ref<MemoryItem[]>([
      {
        id: 'm-1',
        category: 'Preference',
        key: 'Default time zone',
        value: 'Use Pacific Time when interpreting dates and times.',
        source: 'Conversation',
        updatedAt: 'Mar 28, 2026',
      },
      {
        id: 'm-2',
        category: 'Workflow',
        key: 'User suspension checks',
        value: 'Always check group membership and active directory bindings before suspending a user.',
        source: 'Admin edit',
        updatedAt: 'Mar 30, 2026',
      },
      {
        id: 'm-3',
        category: 'Context',
        key: 'Preferred device naming',
        value: 'Match devices by serial number first; device name can be stale.',
        source: 'Conversation',
        updatedAt: 'Mar 21, 2026',
      },
      {
        id: 'm-4',
        category: 'Workflow',
        key: 'Bulk action confirmation',
        value: 'Always confirm targets before running any bulk action and summarize impact.',
        source: 'System',
        updatedAt: 'Mar 12, 2026',
      },
    ]);

    const rules = ref<AssistantRule[]>([
      {
        id: 'r-1',
        name: 'Confirm targets for bulk actions',
        enabled: true,
        ruleText: 'Before any bulk action, list the exact targets and ask for confirmation.',
        updatedAt: 'Mar 30, 2026',
      },
      {
        id: 'r-2',
        name: 'Check group membership before suspension',
        enabled: true,
        ruleText: 'Before suspending a user, check group membership and relevant bindings, then summarize impact.',
        updatedAt: 'Mar 30, 2026',
      },
      {
        id: 'r-3',
        name: 'Prefer least-privilege suggestions',
        enabled: false,
        ruleText: 'When suggesting changes, prefer least-privilege options and call out riskier alternatives.',
        updatedAt: 'Mar 18, 2026',
      },
    ]);

    const ruleSearch = ref('');

    const exampleChatId = EXAMPLE_MEMORY_RULE_CHAT_ID;
    const exampleUserPrompt1 = 'Suspend inactive users in the Sales SSO group: a.lee@company.com, b.patel@company.com, c.kim@company.com.';
    const exampleUserConfirm = 'confirm';
    const exampleAssistantRuleIntro = 'Before any **bulk** suspend, here are the exact targets (per your rule *Confirm targets for bulk actions*).';
    const exampleRuleCardFooter = 'All belong to Sales SSO. Reply **confirm** to proceed, or tell me to change the list.';
    const exampleAssistantAfterConfirm = 'Suspensions recorded for the three accounts.';
    const exampleUserMemoryUpdate = 'Remember: use Pacific Time for audit timestamps when I run bulk admin actions.';
    const exampleAssistantMemoryUpdatedReply = [
      '**Memory updated.** I\'ve saved that you want **Pacific Time** used for audit timestamps on bulk admin actions.',
    ].join('\n');

    // ─── Memory Edit/Delete ───

    const showDeleteMemoryDialog = ref(false);
    const activeMemoryId = ref<string | null>(null);

    const activeMemory = computed(() => {
      const id = activeMemoryId.value;
      if (!id) return null;
      return memories.value.find(m => m.id === id) ?? null;
    });

    function openDeleteMemory(id: string) {
      activeMemoryId.value = id;
      showDeleteMemoryDialog.value = true;
    }

    function confirmDeleteMemory() {
      const id = activeMemoryId.value;
      if (!id) return;
      memories.value = memories.value.filter(m => m.id !== id);
      showDeleteMemoryDialog.value = false;
      activeMemoryId.value = null;
    }

    // ─── Rule Add/Edit/Delete ───

    const showEditRuleDialog = ref(false);
    const showDeleteRuleDialog = ref(false);
    const editingRuleId = ref<string | null>(null);
    const editRuleName = ref('');
    const editRuleEnabled = ref(true);
    const editRuleText = ref('');

    const editingRule = computed(() => {
      const id = editingRuleId.value;
      if (!id) return null;
      return rules.value.find(r => r.id === id) ?? null;
    });

    function openCreateRule() {
      editingRuleId.value = null;
      editRuleName.value = '';
      editRuleEnabled.value = true;
      editRuleText.value = '';
      showEditRuleDialog.value = true;
    }

    function openEditRule(id: string) {
      editingRuleId.value = id;
      editRuleName.value = editingRule.value?.name ?? '';
      editRuleEnabled.value = editingRule.value?.enabled ?? true;
      editRuleText.value = editingRule.value?.ruleText ?? '';
      showEditRuleDialog.value = true;
    }

    function saveRuleEdits() {
      if (!editRuleName.value.trim() || !editRuleText.value.trim()) return;
      const now = 'Apr 01, 2026';
      const id = editingRuleId.value;

      if (!id) {
        const newId = `r-${Math.floor(Math.random() * 10000)}`;
        rules.value = [
          {
            id: newId,
            name: editRuleName.value.trim(),
            enabled: editRuleEnabled.value,
            ruleText: editRuleText.value.trim(),
            updatedAt: now,
          },
          ...rules.value,
        ];
        showEditRuleDialog.value = false;
        return;
      }

      rules.value = rules.value.map(r => (r.id === id
        ? {
          ...r,
          name: editRuleName.value.trim(),
          enabled: editRuleEnabled.value,
          ruleText: editRuleText.value.trim(),
          updatedAt: now,
        }
        : r));
      showEditRuleDialog.value = false;
    }

    function openDeleteRule(id: string) {
      editingRuleId.value = id;
      showDeleteRuleDialog.value = true;
    }

    function confirmDeleteRule() {
      const id = editingRuleId.value;
      if (!id) return;
      rules.value = rules.value.filter(r => r.id !== id);
      showDeleteRuleDialog.value = false;
      editingRuleId.value = null;
    }

    const savedMemoriesFiltered = computed(() => {
      let list = [...memories.value];
      const q = savedMemoriesSearchQuery.value.trim().toLowerCase();
      if (q) {
        list = list.filter(m =>
          m.key.toLowerCase().includes(q)
          || m.value.toLowerCase().includes(q),
        );
      }
      return list;
    });

    const filteredRules = computed(() => {
      let list = [...rules.value];
      if (ruleSearch.value.trim()) {
        const q = ruleSearch.value.trim().toLowerCase();
        list = list.filter(r =>
          r.name.toLowerCase().includes(q)
          || r.ruleText.toLowerCase().includes(q),
        );
      }
      return list;
    });

    function patchMemoryValue(id: string, value: string | undefined) {
      const v = value ?? '';
      memories.value = memories.value.map(m =>
        m.id === id
          ? { ...m, value: v, source: 'Admin edit', updatedAt: 'Apr 03, 2026' }
          : m,
      );
    }

    function toggleRuleEnabled(id: string, enabled: boolean) {
      rules.value = rules.value.map(r => (r.id === id ? { ...r, enabled } : r));
    }

    const ruleActionsMenuRef = ref<{ toggle: (e: Event) => void } | null>(null);
    const ruleMenuTargetId = ref<string | null>(null);

    const ruleMenuModel = computed(() => {
      const id = ruleMenuTargetId.value;
      if (!id) return [];
      return [
        {
          label: 'Edit',
          command: () => {
            openEditRule(id);
          },
        },
        {
          label: 'Delete',
          class: 'text-danger-base',
          command: () => {
            openDeleteRule(id);
          },
        },
      ];
    });

    function openRuleActionsMenu(event: Event, ruleId: string) {
      ruleMenuTargetId.value = ruleId;
      ruleActionsMenuRef.value?.toggle(event);
    }

    const tabs = [
      { label: 'Memory', value: 'memory' },
      { label: 'Rules', value: 'rules' },
    ];

    function handleChatClick(chatId: string) {
      selectedChatId.value = chatId;
      isSettingsView.value = false;
    }

    function handleNewChat() {
      isSettingsView.value = false;
      selectedChatId.value = undefined;
    }

    function handleChatSettings() {
      isSettingsView.value = true;
    }

    /** While Assistant settings is open, do not show a chat as selected in the sidebar (matches main content). */
    const sidebarSelectedChatId = computed(() => {
      if (isSettingsView.value) return undefined;
      const id = selectedChatId.value;
      if (id === undefined || id === null || id === '') return undefined;
      return id;
    });

    return {
      chats,
      selectedChatId,
      sidebarSelectedChatId,
      isSettingsView,
      sidebarCollapsed,
      chatInputValue,
      handleChatClick,
      handleNewChat,
      handleChatSettings,
      tabs,
      activeSettingsTab,
      memoryEnabled,
      memorySaveNewFromChats,
      memoryUseSavedWhenResponding,
      memoryReferenceRecentChats,
      rulesEnabled,
      memories,
      rules,
      ruleSearch,
      savedMemoriesFiltered,
      filteredRules,
      showSavedMemoriesDialog,
      savedMemoriesSearchQuery,
      patchMemoryValue,
      toggleRuleEnabled,
      ruleActionsMenuRef,
      ruleMenuModel,
      openRuleActionsMenu,
      showDeleteMemoryDialog,
      activeMemory,
      confirmDeleteMemory,
      openDeleteMemory,
      showEditRuleDialog,
      editRuleName,
      editRuleEnabled,
      editRuleText,
      openCreateRule,
      openEditRule,
      openDeleteRule,
      saveRuleEdits,
      showDeleteRuleDialog,
      editingRule,
      confirmDeleteRule,
      exampleChatId,
      exampleUserPrompt1,
      exampleUserConfirm,
      exampleAssistantRuleIntro,
      exampleRuleCardFooter,
      exampleAssistantAfterConfirm,
      exampleUserMemoryUpdate,
      exampleAssistantMemoryUpdatedReply,
    };
  },
  template: `
    <div class="flex flex-col h-screen overflow-hidden bg-neutral-surface">
      <!-- Circuit DS chrome: collapse, branding, Preview tag, fullscreen, close -->
      <AIAgentToolbar
        v-model:isCollapsed="sidebarCollapsed"
        :isFullscreen="true"
        @close="() => {}"
      >
        <template #suffix>
          <PvTag value="Preview" severity="success" class="ml-1" />
        </template>
      </AIAgentToolbar>

      <!-- Body: sidebar + main -->
      <div class="flex flex-1 min-h-0">
        <!-- AiSidebar (real Circuit DS component) -->
        <AiSidebar
          :chats="chats"
          :selectedChatId="sidebarSelectedChatId"
          :isCollapsed="sidebarCollapsed"
          :showChatSettings="true"
          @newChat="handleNewChat"
          @chatClick="handleChatClick"
          @chatSettings="handleChatSettings"
        />

        <!-- Main panel -->
        <div class="flex-1 min-w-0 flex flex-col">
          <!-- Main assistant: example transcript (memory + rules) or landing -->
          <div v-if="!isSettingsView" class="flex-1 min-h-0 flex flex-col">
            <template v-if="selectedChatId === exampleChatId">
              <div class="flex-1 min-h-0 min-w-0 flex flex-col overflow-hidden bg-neutral-surface">
                <div class="flex-1 min-h-0 overflow-y-auto">
                  <!-- Single centered thread (matches AiInputChat ~768px rail) so user bubbles are not flush to the viewport edge -->
                  <div class="mx-auto w-full max-w-3xl min-w-0 box-border px-6 pt-lg pb-md">
                    <MessageNotification
                      severity="info"
                      title="Example: memory and rules in context"
                      detail="Illustrative transcript—rules shape behavior; saving a preference updates memory for future chats."
                    />
                    <div class="mt-md flex w-full min-w-0 flex-col gap-lg">
                      <!-- User: full-width row (no flex justify-end — avoids min-width collapse / vertical glyphs) -->
                      <div class="w-full min-w-0 rounded-sm border border-neutral-default_solid bg-neutral-mid px-md py-sm">
                        <div class="text-body-xs text-neutral-subtle mb-1">You</div>
                        <p class="text-body-md text-neutral-base whitespace-pre-wrap">{{ exampleUserPrompt1 }}</p>
                      </div>

                      <!-- Assistant -->
                      <div class="w-full min-w-0 flex flex-col gap-sm">
                        <div class="rounded-sm border border-neutral-default_solid bg-neutral-base px-md py-sm shadow-sm">
                          <div class="flex items-center gap-sm">
                            <SparklesIcon class="size-5 shrink-0 text-neutral-subtle" />
                            <span class="text-body-md-semi-bold text-neutral-base">Reasoning</span>
                          </div>
                          <p class="text-body-sm text-neutral-subtle mt-2">
                            Interpreting a bulk suspend in Sales SSO; listing exact targets next and asking for confirmation per your assistant rule.
                          </p>
                        </div>

                        <div class="text-body-md text-neutral-base min-w-0">
                          <RichText tag="div" :wrapLines="true" :content="exampleAssistantRuleIntro" />
                        </div>

                        <div class="rounded-sm border border-neutral-default_solid bg-neutral-base shadow-sm overflow-hidden">
                          <div class="flex items-center gap-sm px-md py-sm border-b border-neutral-default_solid bg-neutral-surface">
                            <ShieldCheckIcon class="size-5 shrink-0 text-neutral-subtle" />
                            <span class="text-body-md-semi-bold text-neutral-base min-w-0">Confirm targets</span>
                            <PvTag value="Rule applied" severity="info" class="shrink-0 ml-auto" />
                          </div>
                          <div class="px-md py-sm">
                            <p class="text-body-sm text-neutral-subtle">Bulk suspend · Sales SSO group</p>
                            <ul class="mt-sm divide-y divide-neutral-default_solid rounded-sm border border-neutral-default_solid bg-neutral-surface">
                              <li class="px-md py-sm text-body-md text-neutral-base">a.lee@company.com</li>
                              <li class="px-md py-sm text-body-md text-neutral-base">b.patel@company.com</li>
                              <li class="px-md py-sm text-body-md text-neutral-base">c.kim@company.com</li>
                            </ul>
                            <div class="mt-3 text-body-sm text-neutral-subtle min-w-0">
                              <RichText tag="div" :wrapLines="true" :content="exampleRuleCardFooter" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <PvDivider class="my-0" />

                      <div class="w-full min-w-0 rounded-sm border border-neutral-default_solid bg-neutral-mid px-md py-sm">
                        <div class="text-body-xs text-neutral-subtle mb-1">You</div>
                        <p class="text-body-md text-neutral-base">{{ exampleUserConfirm }}</p>
                      </div>

                      <div class="w-full min-w-0 rounded-sm border border-neutral-default_solid bg-neutral-base px-md py-sm">
                        <div class="text-body-xs text-neutral-subtle mb-1">Assistant</div>
                        <p class="text-body-md text-neutral-base">{{ exampleAssistantAfterConfirm }}</p>
                      </div>

                      <div class="w-full min-w-0 rounded-sm border border-neutral-default_solid bg-neutral-mid px-md py-sm">
                        <div class="text-body-xs text-neutral-subtle mb-1">You</div>
                        <p class="text-body-md text-neutral-base whitespace-pre-wrap">{{ exampleUserMemoryUpdate }}</p>
                      </div>

                      <div class="w-full min-w-0 rounded-sm border border-neutral-default_solid bg-neutral-base shadow-sm overflow-hidden">
                        <div class="flex items-center gap-sm px-md py-sm border-b border-neutral-default_solid bg-neutral-surface">
                          <span class="text-body-md-semi-bold text-neutral-base">Memory</span>
                          <PvTag value="Updated" severity="success" class="shrink-0 ml-auto" />
                        </div>
                        <div class="px-md py-md min-w-0">
                          <div class="text-body-md text-neutral-base min-w-0">
                            <RichText tag="div" :wrapLines="true" :content="exampleAssistantMemoryUpdatedReply" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shrink-0 w-full min-w-0 border-t border-neutral-default_solid bg-neutral-surface px-6 pb-4 pt-sm">
                  <div class="mx-auto w-full max-w-3xl min-w-0">
                    <AiInputChat
                      v-model:inputValue="chatInputValue"
                      placeholder="Ask me anything..."
                      :showDropdownButton="true"
                    />
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="max-w-3xl w-full mx-auto px-6 pt-xl">
                <h2 class="text-heading-2 text-neutral-base">What do you need help with today?</h2>
                <p class="text-body-md text-neutral-subtle mt-2">
                  Select a topic to get started, or ask me a question directly. I can help manage users, devices, groups, and SSO applications.
                </p>

                <div class="grid grid-cols-2 gap-4 mt-8">
                  <CardButton>
                    <template #leading><UserGroupIcon class="size-5 text-neutral-base" /></template>
                    <template #default>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-body-md-semi-bold text-neutral-base">Manage Users</span>
                        <span class="text-body-sm text-neutral-subtle">View and edit users and user groups, manage access, reset MFA, and change device bindings.</span>
                      </div>
                    </template>
                    <template #trailing><ArrowRightIcon class="size-5 text-neutral-subtle" /></template>
                  </CardButton>

                  <CardButton>
                    <template #leading><ComputerDesktopIcon class="size-5 text-neutral-base" /></template>
                    <template #default>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-body-md-semi-bold text-neutral-base">Manage Devices</span>
                        <span class="text-body-sm text-neutral-subtle">View and manage devices, modify bound users, and run commands.</span>
                      </div>
                    </template>
                    <template #trailing><ArrowRightIcon class="size-5 text-neutral-subtle" /></template>
                  </CardButton>

                  <CardButton>
                    <template #leading><UsersIcon class="size-5 text-neutral-base" /></template>
                    <template #default>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-body-md-semi-bold text-neutral-base">Manage Applications & Policies</span>
                        <span class="text-body-sm text-neutral-subtle">View SSO applications, deployed software, and policies.</span>
                      </div>
                    </template>
                    <template #trailing><ArrowRightIcon class="size-5 text-neutral-subtle" /></template>
                  </CardButton>

                  <CardButton>
                    <template #leading><ShieldCheckIcon class="size-5 text-neutral-base" /></template>
                    <template #default>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-body-md-semi-bold text-neutral-base">View Audits & System Events</span>
                        <span class="text-body-sm text-neutral-subtle">Review Directory Insights and see a log of recent system and user events.</span>
                      </div>
                    </template>
                    <template #trailing><ArrowRightIcon class="size-5 text-neutral-subtle" /></template>
                  </CardButton>
                </div>
              </div>

              <div class="flex-1"></div>

              <div class="shrink-0 max-w-3xl w-full mx-auto px-6 pb-4">
                <AiInputChat
                  v-model:inputValue="chatInputValue"
                  placeholder="Ask me anything..."
                  :showDropdownButton="true"
                />
              </div>
            </template>
          </div>

          <!-- Settings view: one horizontal gutter (px-6) matches PageHeader inner padding; no stacked padding on cards -->
          <div v-else class="flex-1 overflow-auto bg-neutral-surface min-w-0">
            <div class="max-w-4xl mx-auto w-full min-w-0 pb-8">
              <PageHeader
                title="Assistant settings"
                subtitleText="Memory and rules apply only to your admin account. Nothing is shared with other admins."
              />

              <div class="flex flex-col gap-md px-6 min-w-0">
                <div class="px-md py-3 border-b border-neutral-default_solid bg-neutral-base rounded-sm">
                  <PvSelectButton
                    v-model="activeSettingsTab"
                    :options="tabs"
                    optionLabel="label"
                    optionValue="value"
                    :allowEmpty="false"
                  />
                </div>

                <!-- Memory tab — same header pattern as Rules (title, description, labeled switch) -->
                <div v-if="activeSettingsTab === 'memory'" class="flex flex-col gap-md min-w-0">
                  <div class="flex flex-col gap-sm sm:flex-row sm:items-start sm:justify-between min-w-0">
                    <div class="min-w-0 flex-1">
                      <h2 class="text-heading-3 text-neutral-base">Memory</h2>
                      <p class="text-body-sm text-neutral-subtle mt-1 break-words">
                        Control whether the assistant can retain and reuse context from your chats.
                      </p>
                    </div>
                    <div class="flex items-center gap-sm shrink-0">
                      <span class="text-body-sm text-neutral-subtle">Memory on</span>
                      <ToggleSwitch v-model="memoryEnabled" />
                    </div>
                  </div>

                  <div v-if="memoryEnabled" class="rounded-sm border border-neutral-default_solid bg-neutral-base overflow-hidden min-w-0">
                    <div class="flex items-start gap-md justify-between px-md py-md border-b border-neutral-default_solid">
                      <div class="min-w-0 flex-1 pr-sm">
                        <div class="text-body-md-semi-bold text-neutral-base">Save new memories from conversations</div>
                        <p class="text-body-sm text-neutral-subtle mt-1 break-words">
                          Allow the assistant to learn stable preferences and facts from what you say in chat.
                        </p>
                      </div>
                      <div class="shrink-0 pt-0.5">
                        <ToggleSwitch v-model="memorySaveNewFromChats" />
                      </div>
                    </div>
                    <div class="flex items-start gap-md justify-between px-md py-md border-b border-neutral-default_solid">
                      <div class="min-w-0 flex-1 pr-sm">
                        <div class="text-body-md-semi-bold text-neutral-base">Use saved memories when responding</div>
                        <p class="text-body-sm text-neutral-subtle mt-1 break-words">
                          Let the assistant recall saved facts and preferences in new sessions.
                        </p>
                      </div>
                      <div class="shrink-0 pt-0.5">
                        <ToggleSwitch v-model="memoryUseSavedWhenResponding" />
                      </div>
                    </div>
                    <div class="flex items-start gap-md justify-between px-md py-md">
                      <div class="min-w-0 flex-1 pr-sm">
                        <div class="text-body-md-semi-bold text-neutral-base">Reference recent chat context</div>
                        <p class="text-body-sm text-neutral-subtle mt-1 break-words">
                          Allow the assistant to use context from your recent conversations when relevant.
                        </p>
                      </div>
                      <div class="shrink-0 pt-0.5">
                        <ToggleSwitch v-model="memoryReferenceRecentChats" />
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-sm sm:flex-row sm:items-center sm:justify-between px-md py-md border border-neutral-default_solid rounded-sm bg-neutral-base min-w-0">
                    <div class="min-w-0 flex-1">
                      <span class="text-body-md-semi-bold text-neutral-base">Saved memories</span>
                      <p class="text-body-sm text-neutral-subtle mt-1 break-words">
                        Review everything the assistant keeps and edit the text in place.
                      </p>
                    </div>
                    <div class="shrink-0">
                      <PvButton label="Manage" @click="showSavedMemoriesDialog = true" :disabled="!memoryEnabled" />
                    </div>
                  </div>
                </div>

                <!-- Rules tab (Cursor / Claude Skills–style list) -->
                <div v-if="activeSettingsTab === 'rules'" class="flex flex-col gap-md min-w-0">
                  <div class="flex flex-col gap-sm sm:flex-row sm:items-start sm:justify-between min-w-0">
                    <div class="min-w-0 flex-1">
                      <h2 class="text-heading-3 text-neutral-base">Rules</h2>
                      <p class="text-body-sm text-neutral-subtle mt-1 break-words">
                        Rules guide how the assistant behaves—like confirming targets before bulk actions or checking group membership before suspensions. They are injected at inference time and do not change JumpCloud data.
                      </p>
                    </div>
                    <div class="flex items-center gap-sm shrink-0">
                      <span class="text-body-sm text-neutral-subtle">Rules on</span>
                      <ToggleSwitch v-model="rulesEnabled" />
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center gap-sm min-w-0">
                    <PvIconField class="flex-1 min-w-0 basis-48">
                      <PvInputIcon>
                        <MagnifyingGlassIcon />
                      </PvInputIcon>
                      <PvInputText v-model="ruleSearch" placeholder="Search rules..." class="w-full" />
                    </PvIconField>
                    <PvButton label="New rule" class="shrink-0" @click="openCreateRule" :disabled="!rulesEnabled" />
                  </div>

                  <div class="flex flex-col gap-sm min-w-0">
                    <div
                      v-for="r in filteredRules"
                      :key="r.id"
                      class="rounded-sm border border-neutral-default_solid bg-neutral-base px-md py-md flex flex-col gap-md sm:flex-row sm:items-start sm:justify-between min-w-0"
                    >
                      <div class="min-w-0 flex-1">
                        <div class="text-body-md-semi-bold text-neutral-base break-words">{{ r.name }}</div>
                        <p class="text-body-sm text-neutral-subtle mt-2 break-words">{{ r.ruleText }}</p>
                      </div>
                      <div class="flex flex-row flex-nowrap items-center gap-sm shrink-0">
                        <ToggleSwitch
                          :modelValue="r.enabled"
                          :disabled="!rulesEnabled"
                          @update:modelValue="(v) => toggleRuleEnabled(r.id, v)"
                        />
                        <PvButton
                          severity="secondary"
                          variant="outlined"
                          size="small"
                          :disabled="!rulesEnabled"
                          aria-label="Rule actions"
                          @click="openRuleActionsMenu($event, r.id)"
                        >
                          <template #icon="iconProps">
                            <EllipsisVerticalIcon :class="iconProps.class" />
                          </template>
                        </PvButton>
                      </div>
                    </div>

                    <div
                      v-if="rules.length === 0"
                      class="py-12 px-md text-center border border-dashed border-neutral-default_solid rounded-sm text-body-sm text-neutral-subtle"
                    >
                      No rules yet. Use New rule to add instructions for the assistant.
                    </div>
                    <div
                      v-else-if="filteredRules.length === 0"
                      class="py-12 px-md text-center border border-dashed border-neutral-default_solid rounded-sm text-body-sm text-neutral-subtle"
                    >
                      No rules match your search.
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>

        <PvMenu ref="ruleActionsMenuRef" :model="ruleMenuModel" :popup="true" />

        <!-- ================= Saved memories (ChatGPT-style manager) ================= -->
        <PvDialog
          v-model:visible="showSavedMemoriesDialog"
          :draggable="false"
          modal
          header="Saved memories"
          :style="{ width: '640px' }"
        >
          <template #closeicon><XMarkIcon /></template>

          <p class="text-body-sm text-neutral-subtle">
            Memories are kept until you remove them. Edit the text in place, or delete an entry you no longer want the assistant to use.
          </p>

          <div class="mt-md">
            <PvIconField>
              <PvInputIcon>
                <MagnifyingGlassIcon />
              </PvInputIcon>
              <PvInputText v-model="savedMemoriesSearchQuery" placeholder="Search memories" class="w-full" />
            </PvIconField>
          </div>

          <div class="mt-md max-h-96 overflow-y-auto border border-neutral-default_solid rounded-sm divide-y divide-neutral-default_solid">
            <div
              v-for="(m, idx) in savedMemoriesFiltered"
              :key="m.id"
              class="p-md flex items-start gap-sm min-w-0"
            >
              <PvTextarea
                :id="'saved-mem-' + m.id"
                :modelValue="m.value"
                class="w-full min-w-0 flex-1"
                rows="2"
                :disabled="!memoryEnabled"
                :aria-label="'Saved memory ' + (idx + 1)"
                @update:modelValue="patchMemoryValue(m.id, $event)"
              />
              <PvButton
                label="Delete"
                severity="danger"
                variant="text"
                size="small"
                class="shrink-0 mt-0.5"
                @click="openDeleteMemory(m.id)"
                :disabled="!memoryEnabled"
              >
                <template #icon="iconProps">
                  <TrashIcon :class="iconProps.class" />
                </template>
              </PvButton>
            </div>
            <div v-if="memories.length === 0" class="p-md text-body-sm text-neutral-subtle text-center">
              No saved memories yet. They will appear here as the assistant learns from your chats.
            </div>
            <div v-else-if="savedMemoriesFiltered.length === 0" class="p-md text-body-sm text-neutral-subtle text-center">
              No memories match your search.
            </div>
          </div>

          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Done" @click="showSavedMemoriesDialog = false" />
            </div>
          </template>
        </PvDialog>

        <SeverityDialog
          v-model:visible="showDeleteMemoryDialog"
          dialogTitle="Delete memory item"
          variant="sev2"
          messageTitle="This removes retained context"
          messageContent="Deleting a memory item may change how the assistant responds in future sessions."
          :showMessageIcon="true"
          :dialogContent="activeMemory ? ('You are about to delete **' + activeMemory.key + '**. This cannot be undone.') : ''"
          actionText="Delete"
          cancelText="Cancel"
          @action="confirmDeleteMemory"
          @cancel="showDeleteMemoryDialog = false"
        />

        <!-- ================= Add/Edit Rule Dialog ================= -->
        <PvDialog
          v-model:visible="showEditRuleDialog"
          :draggable="false"
          modal
          :header="editingRule ? 'Edit rule' : 'Add rule'"
          :style="{ width: '560px' }"
        >
          <template #closeicon><XMarkIcon /></template>

          <div class="flex flex-col gap-md">
            <MessageNotification
              severity="info"
              title="Rules apply at inference time"
              detail="Rules are injected into your assistant context when enabled. They do not change JumpCloud data by themselves."
            />

            <div class="flex flex-col gap-md">
              <FormField label="Rule name" required>
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="editRuleName" class="w-full" placeholder="e.g. Confirm targets before bulk action" />
                </template>
              </FormField>

              <FormField label="Enabled">
                <template #default>
                  <div class="flex items-center gap-sm">
                    <ToggleSwitch v-model="editRuleEnabled" :disabled="!rulesEnabled" />
                    <span class="text-body-sm text-neutral-subtle">
                      {{ editRuleEnabled ? 'Enabled' : 'Disabled' }}
                    </span>
                  </div>
                </template>
              </FormField>

              <FormField label="Behavior (instruction)" required>
                <template #default="{ inputId }">
                  <PvTextarea
                    :id="inputId"
                    v-model="editRuleText"
                    class="w-full"
                    rows="5"
                    placeholder="Write a clear instruction for how the assistant should behave..."
                  />
                </template>
              </FormField>
            </div>
          </div>

          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showEditRuleDialog = false" />
              <PvButton
                :label="editingRule ? 'Save' : 'Add rule'"
                :disabled="!rulesEnabled || !editRuleName.trim() || !editRuleText.trim()"
                @click="saveRuleEdits"
              />
            </div>
          </template>
        </PvDialog>

        <SeverityDialog
          v-model:visible="showDeleteRuleDialog"
          dialogTitle="Delete rule"
          variant="sev2"
          messageTitle="This changes assistant behavior"
          messageContent="Deleting a rule removes it from your assistant context immediately."
          :showMessageIcon="true"
          :dialogContent="editingRule ? ('You are about to delete **' + editingRule.name + '**. This cannot be undone.') : ''"
          actionText="Delete"
          cancelText="Cancel"
          @action="confirmDeleteRule"
          @cancel="showDeleteRuleDialog = false"
        />
      </div>
    </div>
    </div>
  `,
});

const meta: Meta<typeof AiAssistantMemoryAndRulesPage> = {
  title: "Projects/Baris' Playground/Pages/AI Assistant/Settings (Memory & Rules)",
  component: AiAssistantMemoryAndRulesPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiAssistantMemoryAndRulesPage>;

export const Default: Story = {};
