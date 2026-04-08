<script setup lang="ts">
import { reactive } from 'vue';
import Button from 'primevue/button';
import JumpCloudFullLogo from './JumpCloudFullLogo.vue';
import UserAuthCard from '../../../features/user-portal/phase-01-parts/UserAuthCard.vue';
import { createDefaultMcpToolsStack } from '../../../features/user-portal/phase-01-parts/mcpToolsDemo';

const props = withDefaults(
  defineProps<{
    /** Intro copy under the page title */
    introBody?: string;
    requestingApplicationUrl?: string;
    requestingApplicationLabel?: string;
    /** Small line next to the Authorize button in the action bar */
    authorizeBarHint?: string;
  }>(),
  {
    introBody:
      'The application below is requesting access to MCP servers on your behalf. Review each connection, then authorize when you are ready.',
    requestingApplicationUrl: 'https://claude.ai',
    requestingApplicationLabel: 'Requesting application:',
    authorizeBarHint: 'You will confirm access in a secure step before changes take effect.',
  }
);

const emit = defineEmits<{
  authorize: [];
}>();

const tools = reactive(createDefaultMcpToolsStack());

const requestingLinkAttrs =
  props.requestingApplicationUrl.startsWith('http')
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

function onAuthorize() {
  emit('authorize');
}
</script>

<template>
  <div
    class="h-screen min-h-0 overflow-y-auto overflow-x-hidden bg-neutral-surface p-lg"
    aria-label="User auth page"
  >
    <div class="max-w-3xl mx-auto flex w-full flex-col gap-md">
      <!-- Sticky shell: outer spacing + inner strip (matches footer wrapper pattern) -->
      <header
        class="sticky top-0 z-100 w-full shrink-0 self-start bg-neutral-base pb-5 pt-lg"
      >
        <div class="flex flex-col gap-md border-b border-neutral-default_solid py-lg px-0">
          <div class="shrink-0">
            <JumpCloudFullLogo />
          </div>
          <div class="flex flex-col gap-sm">
            <h1 class="text-heading-2 text-neutral-base m-0">Authorize MCP Access</h1>
            <p class="text-body-md text-neutral-base m-0">
              {{ introBody }}
            </p>
          </div>
          <p class="text-body-md text-neutral-base m-0">
            {{ requestingApplicationLabel }}
            <a
              :href="requestingApplicationUrl"
              v-bind="requestingLinkAttrs"
              class="font-semibold text-link-base hover:text-link-hover active:text-link-active"
            >
              {{ requestingApplicationUrl }}
            </a>
          </p>
        </div>
      </header>

      <div class="flex flex-col gap-md flex-1 min-h-0 pb-xl">
        <UserAuthCard
          v-for="t in tools"
          :key="t.title"
          v-model:enabled="t.enabled"
          v-model:api-key="t.apiKey"
          :title="t.title"
          :description="t.description"
          :status="t.status"
          :auth-method="t.authMethod"
          @save="() => {}"
          @connect="() => {}"
          @reconnect="() => {}"
        />
      </div>

      <div class="sticky bottom-0 z-10 pt-md pb-lg shrink-0">
        <div
          class="rounded-xl shadow-e100 border border-neutral-default_solid bg-neutral-base p-md flex flex-row flex-wrap items-center justify-between gap-md"
        >
          <Button label="Authorize" class="shrink-0" @click="onAuthorize" />
          <p class="text-body-sm text-neutral-subtle m-0 flex-1 min-w-0">
            {{ authorizeBarHint }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
