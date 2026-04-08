<script setup lang="ts">
import { computed, useId } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Tag from 'primevue/tag';

export type UserAuthCardStatus = 'notConnected' | 'connected' | 'error';
export type UserAuthCardAuthMethod = 'apiKey' | 'oauth';

const props = withDefaults(
  defineProps<{
    /** Tool name (e.g. MCP provider) shown as the card title */
    title: string;
    /** Domain or MCP endpoint URL shown under the title */
    description?: string;
    /** Connection status shown in the header tag */
    status: UserAuthCardStatus;
    authMethod: UserAuthCardAuthMethod;
    apiKeyPlaceholder?: string;
    /** URL for the “documentation” link in the API key hint */
    apiKeyDocumentationHref?: string;
  }>(),
  {
    description: '',
    apiKeyPlaceholder: 'Enter API key',
    apiKeyDocumentationHref: '#',
  }
);

/** When true, the card body is expanded (checkbox checked). */
const enabled = defineModel<boolean>('enabled', { default: false });
const apiKey = defineModel<string>('apiKey', { default: '' });

const emit = defineEmits<{
  save: [value: string];
  connect: [];
  reconnect: [];
}>();

const headingId = useId();
const regionId = useId();
const checkboxId = useId();

const tagDisplay = computed(() => {
  switch (props.status) {
    case 'connected':
      return { value: 'Connected', severity: 'success' as const };
    case 'error':
      return { value: 'Error', severity: 'danger' as const };
    default:
      // Circuit Tag PT uses `warning` (not PrimeVue’s `warn`) for tag warning colors
      return { value: 'Authentication Required', severity: 'warning' as const };
  }
});

const oauthHelperWhenDisconnected =
  'You’ll be redirected to sign in, then returned here to continue.';
const oauthHelperWhenConnected =
  'Use reconnect if your access expired or you need to refresh permissions.';
const docLinkAttrs = computed(() => {
  const href = props.apiKeyDocumentationHref ?? '#';
  if (href.startsWith('http')) {
    return { target: '_blank' as const, rel: 'noopener noreferrer' };
  }
  return {};
});

function onSave() {
  emit('save', apiKey.value);
}
</script>

<template>
  <section
    class="rounded-md shadow-e100 bg-neutral-base overflow-hidden"
    :aria-label="title"
  >
    <div
      class="flex items-start gap-sm p-md min-h-0 border-b transition-colors duration-168 ease-out"
      :class="enabled ? 'border-neutral-default_solid' : 'border-transparent'"
    >
      <div class="user-auth-card__checkbox-wrap shrink-0">
        <Checkbox
          v-model="enabled"
          binary
          :input-id="checkboxId"
          :aria-label="`Show connection options for ${title}`"
          :aria-controls="regionId"
          :aria-expanded="enabled"
        />
      </div>
      <div class="flex-1 min-w-0 flex flex-col gap-xs">
        <h3 :id="headingId" class="text-heading-3 text-neutral-base m-0 min-w-0 truncate">
          {{ title }}
        </h3>
        <p
          v-if="description"
          class="text-body-sm text-neutral-subtle m-0 min-w-0 truncate"
        >
          {{ description }}
        </p>
      </div>
      <Tag
        v-if="enabled"
        :value="tagDisplay.value"
        :severity="tagDisplay.severity"
        class="shrink-0 mt-px"
      />
    </div>

    <div
      :id="regionId"
      class="grid min-h-0 overflow-hidden transition-[grid-template-rows] duration-168 ease-out"
      :class="enabled ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      role="region"
      :aria-labelledby="headingId"
      :aria-hidden="!enabled"
    >
      <div class="min-h-0 overflow-hidden" :inert="!enabled">
        <div class="px-md pb-md pt-md flex flex-col gap-md">
          <template v-if="authMethod === 'apiKey'">
            <div class="flex flex-col gap-xs">
              <div class="flex flex-row flex-nowrap gap-sm items-end min-w-0">
                <FormField label="API key" class="flex-1 min-w-0">
                  <template #default="{ inputId }">
                    <InputText
                      :id="inputId"
                      v-model="apiKey"
                      class="w-full"
                      :placeholder="apiKeyPlaceholder"
                      autocomplete="off"
                    />
                  </template>
                </FormField>
                <Button
                  label="Save"
                  severity="secondary"
                  class="shrink-0"
                  @click="onSave"
                />
              </div>
              <p class="text-sm text-neutral-subtle m-0">
                See the
                <a
                  :href="apiKeyDocumentationHref"
                  v-bind="docLinkAttrs"
                  class="text-sm font-semibold text-link-base hover:text-link-hover active:text-link-active"
                >
                  documentation
                </a>
                for help finding the API key.
              </p>
            </div>
          </template>
          <template v-else>
            <div class="flex flex-row flex-nowrap gap-sm items-center min-w-0">
              <Button
                v-if="status !== 'connected'"
                label="Connect via OAuth"
                variant="outlined"
                class="shrink-0"
                @click="emit('connect')"
              />
              <Button
                v-else
                label="Reconnect"
                severity="secondary"
                variant="outlined"
                class="shrink-0"
                @click="emit('reconnect')"
              />
              <p class="text-body-sm text-neutral-subtle mx-0 mb-0 mt-px flex-1 min-w-0">
                {{
                  status === 'connected' ? oauthHelperWhenConnected : oauthHelperWhenDisconnected
                }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optical alignment with heading; arbitrary Tailwind mt-[3px] was not emitted in the build */
.user-auth-card__checkbox-wrap {
  margin-top: 3px;
}
</style>
