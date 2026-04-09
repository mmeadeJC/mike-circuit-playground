<script setup lang="ts">
import { reactive, computed } from 'vue';
import UserAuthTopBar from '../../../features/user-portal/phase-01-parts/UserAuthTopBar.vue';
import UserAuthPageFooter from '../../../features/user-portal/phase-01-parts/UserAuthPageFooter.vue';
import UserAuthPageHeader from '../../../features/user-portal/phase-01-parts/UserAuthPageHeader.vue';
import UserAuthCard from '../../../features/user-portal/phase-01-parts/UserAuthCard.vue';
import {
  createDefaultMcpToolsStack,
  type McpToolDemoRow,
} from '../../../features/user-portal/phase-01-parts/mcpToolsDemo';

withDefaults(
  defineProps<{
    /** Shown in the page header title (e.g. Cursor) */
    toolName?: string;
    /** Intro copy under the page title */
    introBody?: string;
    /** Small line next to the Authorize tools button in the action bar */
    authorizeBarHint?: string;
    /** Passed to `UserAuthTopBar` */
    userDisplayName?: string;
    userInitials?: string;
  }>(),
  {
    toolName: 'Cursor',
    introBody:
      'Review the tool connections below and authorize which ones Cursor can access through JumpCloud.',
    authorizeBarHint:
      'Only the selected tools will be available to Cursor through JumpCloud.',
    userDisplayName: 'Burak Başcı',
    userInitials: 'BB',
  }
);

const emit = defineEmits<{
  authorize: [];
  logout: [];
}>();

const tools = reactive(createDefaultMcpToolsStack());

/** Any enabled tool that is not `connected` blocks authorize (all selected must be connected). */
const authorizeDisabled = computed(() => {
  const enabledRows = tools.filter((t) => t.enabled);
  if (enabledRows.length === 0) return false;
  return enabledRows.some((t) => t.status !== 'connected');
});

function handleToolSave(row: McpToolDemoRow, value: string) {
  if (value.trim().length > 0) {
    row.status = 'connected';
  }
}

function handleToolConnect(row: McpToolDemoRow) {
  row.status = 'connected';
}

function handleToolReconnect(row: McpToolDemoRow) {
  row.status = 'connected';
}

function onAuthorize() {
  emit('authorize');
}

function onLogout() {
  emit('logout');
}
</script>

<template>
  <div
    class="user-auth-page flex h-screen min-h-0 flex-col bg-neutral-surface"
    aria-label="User auth page"
  >
    <UserAuthTopBar
      :user-display-name="userDisplayName"
      :user-initials="userInitials"
      @logout="onLogout"
    />
    <div
      class="min-h-0 flex-1 overflow-y-auto overflow-x-hidden"
    >
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-md p-lg">
        <header class="w-full shrink-0 bg-neutral-surface pt-md pb-md">
          <UserAuthPageHeader
            :tool-name="toolName"
            :description="introBody"
          />
        </header>

        <div class="flex flex-col gap-md flex-1 min-h-0">
          <UserAuthCard
            v-for="t in tools"
            :key="t.title"
            v-model:enabled="t.enabled"
            v-model:api-key="t.apiKey"
            :title="t.title"
            :favicon-domain="t.faviconDomain"
            :status="t.status"
            :auth-method="t.authMethod"
            @save="(value: string) => handleToolSave(t, value)"
            @connect="handleToolConnect(t)"
            @reconnect="handleToolReconnect(t)"
          />
        </div>

        <div class="sticky bottom-0 z-10 pt-md pb-lg shrink-0">
          <UserAuthPageFooter
            :hint="authorizeBarHint"
            :disabled="authorizeDisabled"
            @authorize="onAuthorize"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-auth-page :deep(a[href]) {
  cursor: pointer;
}

.user-auth-page :deep(button:not(:disabled)) {
  cursor: pointer;
}

.user-auth-page :deep(button:disabled) {
  cursor: not-allowed;
}
</style>
