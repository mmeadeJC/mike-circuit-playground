<script setup lang="ts">
import { nextTick, watch, type ComponentPublicInstance } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ConfigPageLayout, PageSection } from '@jumpcloud/circuit/components';
import type { RedirectURLDraftRow } from './Agent0RedirectURLSettings';

defineOptions({ name: 'Agent0RedirectURLSettingsView' });

const props = withDefaults(
  defineProps<{
    draftRows: RedirectURLDraftRow[];
    focusRowKey?: string | null;
  }>(),
  { focusRowKey: null },
);

const emit = defineEmits<{
  'update:rowUrl': [payload: { key: string; url: string }];
  removeRow: [key: string];
  addRow: [];
  focusRowHandled: [];
}>();

const redirectDocsHref = 'https://jumpcloud.com/support/oidc-overview';

const inputRefs = new Map<string, ComponentPublicInstance>();

function setInputRef(rowKey: string, el: Element | ComponentPublicInstance | null) {
  if (!el) {
    inputRefs.delete(rowKey);
    return;
  }
  inputRefs.set(rowKey, el as ComponentPublicInstance);
}

watch(
  () => props.focusRowKey,
  async (key) => {
    if (key == null || key === '') return;
    await nextTick();
    await nextTick();
    const cmp = inputRefs.get(key);
    const root = cmp?.$el as HTMLElement | undefined;
    const input =
      root instanceof HTMLInputElement
        ? root
        : (root?.querySelector?.('input') as HTMLInputElement | undefined);
    input?.focus();
    emit('focusRowHandled');
  },
);
</script>

<template>
  <div class="flex-1 min-h-0 overflow-auto bg-neutral-surface">
    <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
      <div class="flex flex-col gap-6">
        <PageSection title="Redirect URLs">
          <template #subtitle>
            <span class="text-body-sm text-neutral-muted">
              Only add redirect origins your organization trusts for AI Gateway OAuth flows.
              <a
                :href="redirectDocsHref"
                class="font-semibold text-link-base hover:text-link-hover active:text-link-active"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redirect URL documentation
              </a>
              for JumpCloud.
            </span>
          </template>
          <template #actions>
            <Button severity="secondary" variant="outlined" label="Add URL" @click="emit('addRow')">
              <template #icon="iconProps">
                <PlusIcon :class="iconProps.class" />
              </template>
            </Button>
          </template>
        </PageSection>

        <div class="rounded-md bg-neutral-base shadow-e100 overflow-hidden">
          <div
            v-for="(row, index) in draftRows"
            :key="row.key"
            class="flex items-center gap-md p-md border-b border-neutral-default_solid last:border-b-0"
          >
            <div class="flex-1 min-w-0">
              <InputText
                :ref="(el) => setInputRef(row.key, el)"
                :model-value="row.url"
                class="w-full rounded-md!"
                placeholder="Examples: https://example.com, http://localhost:2234, myapp:callback"
                :aria-label="`Redirect URL ${index + 1}`"
                @update:model-value="emit('update:rowUrl', { key: row.key, url: $event as string })"
              />
            </div>
            <Button
              severity="secondary"
              variant="text"
              class="shrink-0 rounded-md!"
              aria-label="Remove redirect URL"
              @click="emit('removeRow', row.key)"
            >
              <template #icon="iconProps">
                <XMarkIcon :class="iconProps.class" />
              </template>
            </Button>
          </div>
        </div>
      </div>
    </ConfigPageLayout>
  </div>
</template>
