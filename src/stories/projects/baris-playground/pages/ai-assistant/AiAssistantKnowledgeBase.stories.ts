import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, defineComponent, ref } from 'vue';
import {
  AIAgentToolbar,
  AiSidebar,
  AiInputChat,
  FormField,
  MessageNotification,
  PageHeader,
  RichText,
  SeverityDialog,
  ToggleSwitch,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import SelectButton from 'primevue/selectbutton';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Tag from 'primevue/tag';

import { AiAgentIcon, JumpCloudIcon } from '@jumpcloud/icons';
import {
  ArrowUpTrayIcon,
  BookOpenIcon,
  DocumentTextIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

type KbDocType = 'pdf' | 'md' | 'txt';
type KbDocStatus = 'indexed' | 'processing' | 'failed';

interface KbDocument {
  id: string;
  name: string;
  type: KbDocType;
  sizeLabel: string;
  updatedAt: string;
  status: KbDocStatus;
}

/** Example thread: org runbook (RAG) + JumpCloud platform knowledge. */
const EXAMPLE_KB_CHAT_ID = 'c-kb-demo';

const AiAssistantKnowledgeBasePage = defineComponent({
  name: 'AiAssistantKnowledgeBasePage',
  components: {
    AIAgentToolbar,
    AiSidebar,
    AiInputChat,
    FormField,
    PageHeader,
    MessageNotification,
    RichText,
    SeverityDialog,
    ToggleSwitch,
    PvMenu: Menu,
    PvButton: Button,
    PvDialog: Dialog,
    PvIconField: IconField,
    PvInputIcon: InputIcon,
    PvInputText: InputText,
    PvDivider: Divider,
    PvSelectButton: SelectButton,
    PvTag: Tag,
    AiAgentIcon,
    JumpCloudIcon,
    SparklesIcon,
    ArrowUpTrayIcon,
    BookOpenIcon,
    DocumentTextIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
  },
  setup() {
    const selectedChatId = ref<string | undefined>(EXAMPLE_KB_CHAT_ID);
    const sidebarCollapsed = ref(false);
    const chatInputValue = ref('');
    const isSettingsView = ref(false);

    const exampleKbChatId = EXAMPLE_KB_CHAT_ID;
    const exampleKbUserPrompt =
      'What is our required order of operations when offboarding an employee? I need the steps from our internal policy, not just generic JumpCloud behavior.';
    const exampleKbReasoningText =
      'Matching your question to **IT_Offboarding_Runbook.pdf** (organization) and JumpCloud **Users and SSO** guidance for suspension, access removal, and documentation.';
    const exampleKbAssistantBody = [
      'Per your uploaded runbook, use this order: **(1)** disable SSO access to critical apps, **(2)** suspend the user in JumpCloud, **(3)** revoke remaining app seats and remove group memberships, **(4)** complete your ticketing / approval steps.',
      '',
      'Platform behavior comes from JumpCloud; sequencing and approvals come from your org document.',
    ].join('\n');

    const activeSettingsTab = ref<'memory' | 'rules' | 'knowledge'>('knowledge');
    const assistantSettingsTabs = [
      { label: 'Memories', value: 'memory' as const, disabled: true },
      { label: 'Rules', value: 'rules' as const, disabled: true },
      { label: 'Knowledge Base', value: 'knowledge' as const },
    ];

    const orgKbEnabled = ref(true);
    const kbSearch = ref('');
    const showUploadDialog = ref(false);
    const showDeleteKbDocDialog = ref(false);
    const deletingKbDocId = ref<string | null>(null);
    const kbActionsMenuRef = ref<{ toggle: (e: Event) => void } | null>(null);
    const kbMenuTargetId = ref<string | null>(null);

    const chats = ref([
      {
        id: EXAMPLE_KB_CHAT_ID,
        title: 'Offboarding — company runbook',
        lastModified: new Date('2026-04-03T18:00:00'),
      },
      { id: 'c-1', title: 'Device compliance checklist', lastModified: new Date('2026-04-02T10:00:00') },
    ]);

    const documents = ref<KbDocument[]>([
      {
        id: 'kb-1',
        name: 'IT_Offboarding_Runbook.pdf',
        type: 'pdf',
        sizeLabel: '1.2 MB',
        updatedAt: 'Apr 1, 2026',
        status: 'indexed',
      },
      {
        id: 'kb-2',
        name: 'MFA_reset_SOP.md',
        type: 'md',
        sizeLabel: '24 KB',
        updatedAt: 'Mar 28, 2026',
        status: 'indexed',
      },
      {
        id: 'kb-3',
        name: 'vendor_access_review.txt',
        type: 'txt',
        sizeLabel: '8 KB',
        updatedAt: 'Mar 22, 2026',
        status: 'processing',
      },
    ]);

    const attributionExample = [
      'Disable SSO first, then suspend the user, then revoke app seats—per your org runbook.',
      '',
      '**Sources:** **Organization** — IT_Offboarding_Runbook.pdf · **JumpCloud** — Users and SSO overview',
    ].join('\n');

    const filteredKbDocs = computed(() => {
      const q = kbSearch.value.trim().toLowerCase();
      let list = [...documents.value];
      if (q) {
        list = list.filter(d => d.name.toLowerCase().includes(q));
      }
      return list;
    });

    const deletingKbDoc = computed(() => {
      const id = deletingKbDocId.value;
      if (!id) return null;
      return documents.value.find(d => d.id === id) ?? null;
    });

    function typeLabel(t: KbDocType): string {
      if (t === 'pdf') return 'PDF';
      if (t === 'md') return 'Markdown';
      return 'Text';
    }

    function statusSeverity(s: KbDocStatus): 'success' | 'warn' | 'danger' {
      if (s === 'indexed') return 'success';
      if (s === 'processing') return 'warn';
      return 'danger';
    }

    function statusLabel(s: KbDocStatus): string {
      if (s === 'indexed') return 'Indexed';
      if (s === 'processing') return 'Processing';
      return 'Failed';
    }

    function handleChatClick(chatId: string) {
      selectedChatId.value = chatId;
      isSettingsView.value = false;
    }

    function handleNewChat() {
      selectedChatId.value = undefined;
      isSettingsView.value = false;
    }

    function handleChatSettings() {
      isSettingsView.value = true;
    }

    const kbMenuModel = computed(() => {
      const id = kbMenuTargetId.value;
      if (!id) return [];
      return [
        {
          label: 'Remove',
          class: 'text-danger-base',
          command: () => {
            openDeleteKbDoc(id);
          },
        },
      ];
    });

    function openKbActionsMenu(event: Event, docId: string) {
      kbMenuTargetId.value = docId;
      kbActionsMenuRef.value?.toggle(event);
    }

    function openDeleteKbDoc(id: string) {
      deletingKbDocId.value = id;
      showDeleteKbDocDialog.value = true;
    }

    function confirmDeleteKbDoc() {
      const id = deletingKbDocId.value;
      if (!id) return;
      documents.value = documents.value.filter(d => d.id !== id);
      showDeleteKbDocDialog.value = false;
      deletingKbDocId.value = null;
    }

    function applyUploadMock() {
      documents.value = [
        {
          id: `kb-${Date.now()}`,
          name: 'New_upload.pdf',
          type: 'pdf',
          sizeLabel: '320 KB',
          updatedAt: 'Apr 3, 2026',
          status: 'processing',
        },
        ...documents.value,
      ];
      showUploadDialog.value = false;
    }

    const sidebarSelectedChatId = computed(() => {
      if (isSettingsView.value) return undefined;
      const id = selectedChatId.value;
      if (id === undefined || id === null || id === '') return undefined;
      return id;
    });

    return {
      chats,
      documents,
      exampleKbChatId,
      exampleKbUserPrompt,
      exampleKbReasoningText,
      exampleKbAssistantBody,
      selectedChatId,
      sidebarSelectedChatId,
      sidebarCollapsed,
      chatInputValue,
      isSettingsView,
      handleChatClick,
      handleNewChat,
      handleChatSettings,
      activeSettingsTab,
      assistantSettingsTabs,
      orgKbEnabled,
      kbSearch,
      filteredKbDocs,
      showUploadDialog,
      applyUploadMock,
      typeLabel,
      statusSeverity,
      statusLabel,
      attributionExample,
      showDeleteKbDocDialog,
      deletingKbDoc,
      confirmDeleteKbDoc,
      openKbActionsMenu,
      kbActionsMenuRef,
      kbMenuModel,
      openDeleteKbDoc,
    };
  },
  template: `
    <div class="flex flex-col h-screen overflow-hidden bg-neutral-surface">
      <AIAgentToolbar
        v-model:isCollapsed="sidebarCollapsed"
        :isFullscreen="true"
        @close="() => {}"
      >
        <template #suffix>
          <PvTag value="Preview" severity="success" class="ml-1" />
        </template>
      </AIAgentToolbar>

      <div class="flex flex-1 min-h-0">
        <AiSidebar
          :chats="chats"
          :selectedChatId="sidebarSelectedChatId"
          :isCollapsed="sidebarCollapsed"
          :showChatSettings="true"
          @newChat="handleNewChat"
          @chatClick="handleChatClick"
          @chatSettings="handleChatSettings"
        />

        <div class="flex-1 min-h-0 min-w-0 flex flex-col">
          <template v-if="!isSettingsView">
            <template v-if="selectedChatId === exampleKbChatId">
              <div class="flex-1 min-h-0 min-w-0 flex flex-col overflow-hidden bg-neutral-surface">
                <div class="flex-1 min-h-0 overflow-y-auto">
                  <div class="mx-auto w-full max-w-3xl min-w-0 box-border px-6 pt-lg pb-md">
                    <MessageNotification
                      severity="info"
                      title="Example: organization knowledge in context"
                      detail="Illustrative transcript—retrieval blends your uploaded runbooks with JumpCloud platform knowledge; sources are labeled below."
                    />
                    <div class="mt-md flex w-full min-w-0 flex-col gap-lg">
                      <div class="w-full min-w-0 rounded-sm border border-neutral-default_solid bg-neutral-mid px-md py-sm">
                        <div class="text-body-xs text-neutral-subtle mb-1">You</div>
                        <p class="text-body-md text-neutral-base whitespace-pre-wrap">{{ exampleKbUserPrompt }}</p>
                      </div>

                      <div class="w-full min-w-0 flex flex-col gap-sm">
                        <div class="rounded-sm border border-neutral-default_solid bg-neutral-base px-md py-sm shadow-sm">
                          <div class="flex items-center gap-sm">
                            <SparklesIcon class="size-5 shrink-0 text-neutral-subtle" />
                            <span class="text-body-md-semi-bold text-neutral-base">Reasoning</span>
                          </div>
                          <div class="text-body-sm text-neutral-subtle mt-2 min-w-0">
                            <RichText tag="span" :content="exampleKbReasoningText" />
                          </div>
                        </div>

                        <div class="text-body-md text-neutral-base min-w-0">
                          <RichText tag="div" :wrapLines="true" :content="exampleKbAssistantBody" />
                        </div>

                        <div class="rounded-sm border border-neutral-default_solid bg-neutral-base shadow-sm">
                          <div class="flex items-center gap-xs px-md py-sm border-b border-neutral-default_solid bg-neutral-surface">
                            <BookOpenIcon class="size-4 shrink-0 text-neutral-subtle" />
                            <span class="text-body-sm-semi-bold text-neutral-base min-w-0">Sources</span>
                          </div>
                          <ul class="divide-y divide-neutral-default_solid px-md py-0">
                            <li class="flex min-w-0 items-center gap-xs py-sm">
                              <DocumentTextIcon class="size-4 shrink-0 text-neutral-subtle" />
                              <span class="min-w-0 flex-1 text-body-sm text-neutral-subtle break-words">IT_Offboarding_Runbook.pdf</span>
                            </li>
                            <li class="flex min-w-0 items-center gap-xs py-sm">
                              <JumpCloudIcon class="size-4 shrink-0 text-neutral-subtle" />
                              <span class="min-w-0 flex-1 text-body-sm text-neutral-subtle break-words">Users and SSO applications overview</span>
                            </li>
                          </ul>
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
              <div class="flex-1 min-h-0 flex flex-col">
                <div class="flex-1 overflow-y-auto">
                  <div class="max-w-3xl mx-auto w-full px-6 pt-xl">
                    <div class="flex items-center gap-sm mb-4">
                      <AiAgentIcon class="size-8 shrink-0" />
                      <div>
                        <h2 class="text-heading-2 text-neutral-base">AI Assistant</h2>
                        <div class="text-body-sm text-neutral-subtle mt-1">
                          <RichText
                            tag="span"
                            content="Open **Chat settings** in the sidebar to manage the organization knowledge base."
                          />
                        </div>
                      </div>
                    </div>
                    <MessageNotification
                      severity="info"
                      title="Knowledge base is organization-wide"
                      detail="Uploaded documents are available to all admins in this organization. Rules and memory under Chat settings remain per admin."
                    />
                  </div>
                </div>
                <div class="shrink-0 border-t border-neutral-default_solid px-6 pb-4 pt-sm">
                  <div class="max-w-3xl mx-auto w-full">
                    <AiInputChat
                      v-model:inputValue="chatInputValue"
                      placeholder="Ask me anything..."
                      :showDropdownButton="true"
                    />
                  </div>
                </div>
              </div>
            </template>
          </template>

          <template v-else>
            <div class="flex-1 overflow-auto bg-neutral-surface min-w-0">
              <div class="max-w-4xl mx-auto w-full min-w-0 pb-8">
                <PageHeader
                  title="Settings"
                  subtitleText="Memory and rules are per admin. Organization knowledge is shared with all admins."
                >
                  <template #actions>
                    <ToggleSwitch v-model="orgKbEnabled" />
                  </template>
                </PageHeader>

                <div class="flex flex-col gap-md px-6 min-w-0">
                  <div class="px-md py-3 border-b border-neutral-default_solid bg-neutral-base rounded-sm">
                    <PvSelectButton
                      v-model="activeSettingsTab"
                      :options="assistantSettingsTabs"
                      optionLabel="label"
                      optionValue="value"
                      optionDisabled="disabled"
                      :allowEmpty="false"
                    />
                  </div>

                  <div v-if="activeSettingsTab === 'knowledge'" class="flex flex-col gap-md min-w-0">
                  <div class="min-w-0">
                    <h2 class="text-heading-3 text-neutral-base">Documents</h2>
                    <p class="text-body-sm text-neutral-subtle mt-1 break-words">
                      Add or remove files the assistant may cite when answering admins.
                    </p>
                  </div>

                  <div class="flex flex-wrap items-center gap-sm min-w-0">
                    <PvIconField class="flex-1 min-w-0 basis-48">
                      <PvInputIcon>
                        <MagnifyingGlassIcon />
                      </PvInputIcon>
                      <PvInputText v-model="kbSearch" placeholder="Search documents..." class="w-full" />
                    </PvIconField>
                    <PvButton
                      label="Upload"
                      class="shrink-0"
                      :disabled="!orgKbEnabled"
                      @click="showUploadDialog = true"
                    >
                      <template #icon="iconProps">
                        <ArrowUpTrayIcon :class="iconProps.class" />
                      </template>
                    </PvButton>
                  </div>

                  <div class="flex flex-col gap-sm min-w-0">
                    <div
                      v-for="d in filteredKbDocs"
                      :key="d.id"
                      class="rounded-sm border border-neutral-default_solid bg-neutral-base px-md py-md flex flex-col gap-md sm:flex-row sm:items-start sm:justify-between min-w-0"
                    >
                      <div class="flex items-start gap-sm min-w-0 flex-1">
                        <DocumentTextIcon class="size-5 shrink-0 text-neutral-subtle mt-0.5" />
                        <div class="min-w-0">
                          <div class="text-body-md-semi-bold text-neutral-base break-words">{{ d.name }}</div>
                          <div class="flex flex-wrap items-center gap-sm mt-2">
                            <PvTag :value="typeLabel(d.type)" severity="secondary" />
                            <span class="text-body-sm text-neutral-subtle">{{ d.sizeLabel }}</span>
                            <span class="text-body-sm text-neutral-subtle">Updated {{ d.updatedAt }}</span>
                            <PvTag :value="statusLabel(d.status)" :severity="statusSeverity(d.status)" />
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-row flex-nowrap items-center gap-sm shrink-0 self-end sm:self-start">
                        <PvButton
                          severity="secondary"
                          variant="outlined"
                          size="small"
                          aria-label="Document actions"
                          :disabled="!orgKbEnabled"
                          @click="openKbActionsMenu($event, d.id)"
                        >
                          <template #icon="iconProps">
                            <EllipsisVerticalIcon :class="iconProps.class" />
                          </template>
                        </PvButton>
                      </div>
                    </div>

                    <div
                      v-if="documents.length === 0"
                      class="py-12 px-md text-center border border-dashed border-neutral-default_solid rounded-sm text-body-sm text-neutral-subtle"
                    >
                      No documents yet. Upload PDF, Markdown, or text to build your index.
                    </div>
                    <div
                      v-else-if="filteredKbDocs.length === 0"
                      class="py-12 px-md text-center border border-dashed border-neutral-default_solid rounded-sm text-body-sm text-neutral-subtle"
                    >
                      No documents match your search.
                    </div>
                  </div>

                  <PvDivider class="my-0" />

                  <div class="rounded-sm border border-neutral-default_solid bg-neutral-base shadow-sm overflow-hidden min-w-0">
                    <div class="flex items-center gap-sm px-md py-sm border-b border-neutral-default_solid bg-neutral-surface">
                      <SparklesIcon class="size-5 shrink-0 text-neutral-subtle" />
                      <span class="text-body-md-semi-bold text-neutral-base min-w-0">Example: source attribution</span>
                      <PvTag value="Illustrative" severity="info" class="shrink-0 ml-auto" />
                    </div>
                    <div class="px-md py-md min-w-0">
                      <div class="flex items-start gap-sm mb-sm">
                        <BookOpenIcon class="size-5 shrink-0 text-neutral-subtle mt-0.5" />
                        <p class="text-body-sm text-neutral-subtle break-words">
                          When a reply uses your uploads, the assistant can label organization vs. JumpCloud-native sources.
                        </p>
                      </div>
                      <div class="text-body-md text-neutral-base min-w-0">
                        <RichText tag="div" :wrapLines="true" :content="attributionExample" />
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <PvMenu ref="kbActionsMenuRef" :model="kbMenuModel" :popup="true" />

      <PvDialog
        v-model:visible="showUploadDialog"
        :draggable="false"
        modal
        header="Upload documents"
        :style="{ width: '560px' }"
      >
        <template #closeicon><XMarkIcon /></template>
        <p class="text-body-sm text-neutral-subtle">
          Files are parsed, chunked, and embedded into your organization’s index (mock in this preview).
        </p>
        <div class="flex flex-col gap-md mt-md">
          <FormField label="Files" required>
            <template #default="{ inputId }">
              <div class="flex flex-col gap-sm">
                <PvButton label="Choose files" severity="secondary" variant="outlined" @click="applyUploadMock" />
                <span :id="inputId" class="text-body-sm text-neutral-subtle">
                  PDF, Markdown (.md), or plain text (.txt). Max size per file applies in production.
                </span>
              </div>
            </template>
          </FormField>
        </div>
        <template #footer>
          <div class="flex items-center flex-1 min-w-0">
            <span class="text-body-sm text-neutral-subtle">Demo adds a placeholder document to the list.</span>
          </div>
          <div class="flex gap-sm shrink-0">
            <PvButton label="Cancel" severity="secondary" variant="text" @click="showUploadDialog = false" />
            <PvButton label="Done" @click="showUploadDialog = false" />
          </div>
        </template>
      </PvDialog>

      <SeverityDialog
        v-model:visible="showDeleteKbDocDialog"
        dialogTitle="Remove document"
        variant="sev2"
        messageTitle="Affects assistant retrieval"
        messageContent="Removing a document deletes it from the organization index. Answers will no longer cite this file."
        :showMessageIcon="true"
        :dialogContent="deletingKbDoc ? ('Remove **' + deletingKbDoc.name + '** from the knowledge base?') : ''"
        actionText="Remove"
        cancelText="Cancel"
        @action="confirmDeleteKbDoc"
        @cancel="showDeleteKbDocDialog = false"
      />
    </div>
  `,
});

const meta: Meta<typeof AiAssistantKnowledgeBasePage> = {
  title: "Projects/Baris' Playground/Pages/AI Assistant/Knowledge base (organization)",
  component: AiAssistantKnowledgeBasePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiAssistantKnowledgeBasePage>;

export const Default: Story = {};
