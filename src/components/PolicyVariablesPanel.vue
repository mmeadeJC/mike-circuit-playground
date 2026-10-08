<script setup lang="ts">
import { computed, ref } from 'vue';
import { CollapsiblePanel, CopyButton, FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Tag from 'primevue/tag';
import { ChevronRightIcon, CodeBracketIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import {
  POLICY_VARIABLES,
  PREVIEW_CONTEXTS,
  VARIABLE_CONTEXT_OPTIONS,
  findVariableTokens,
  isKnownVariable,
} from './policyVariablesCatalog';

const props = withDefaults(
  defineProps<{
    /** Policy field values to scan for `{object.attribute}` tokens (name, notes, settings...). */
    scanText?: string[];
  }>(),
  { scanText: () => [] },
);

const collapsed = ref(true);
const search = ref('');
const contextFilter = ref('all');
const previewId = ref(PREVIEW_CONTEXTS[0].id);

const previewValues = computed(
  () => PREVIEW_CONTEXTS.find((context) => context.id === previewId.value)?.values ?? {},
);

const usedTokens = computed(() =>
  findVariableTokens(props.scanText).map((token) => ({ token, known: isKnownVariable(token) })),
);

const filteredVariables = computed(() => {
  const query = search.value.trim().toLowerCase();
  return POLICY_VARIABLES.filter((variable) => {
    if (contextFilter.value !== 'all' && variable.context !== contextFilter.value) return false;
    if (!query) return true;
    return (
      variable.token.toLowerCase().includes(query) || variable.description.toLowerCase().includes(query)
    );
  });
});
</script>

<template>
  <CollapsiblePanel v-model:collapsed="collapsed" toggleable header="Variables">
    <template #titleicon="iconProps">
      <CodeBracketIcon :class="iconProps.class" />
    </template>
    <template #toggleicon="iconProps">
      <ChevronRightIcon :class="iconProps.class" />
    </template>

    <div class="flex flex-col gap-md">
      <p class="text-body-md text-neutral-subtle m-0">
        Variables let one policy serve many users and devices. Insert a variable in any supported
        field using the
        <code class="font-mono text-body-sm text-neutral-base">{...}</code>
        button, or type the
        <code class="font-mono text-body-sm text-neutral-base">{object.attribute}</code>
        syntax, and JumpCloud replaces it with each device's own value when the policy is applied.
      </p>

      <div class="flex flex-col gap-xs">
        <h4 class="text-body-md-bold text-neutral-base">Used in this policy</h4>
        <p v-if="usedTokens.length === 0" class="text-body-md text-neutral-subtle m-0">
          No variables are used yet. Use the {...} button on a field, or copy one from the list below.
        </p>
        <div v-else class="flex flex-wrap gap-xs">
          <Tag
            v-for="item in usedTokens"
            :key="item.token"
            :severity="item.known ? 'success' : 'danger'"
            :value="item.known ? item.token : `${item.token} — unknown variable`"
          />
        </div>
      </div>

      <div class="flex flex-col gap-sm">
        <div class="flex flex-wrap items-end gap-md">
          <FormField label="Search variables" class="flex-1 min-w-48">
            <template #default="{ inputId }">
              <IconField>
                <InputIcon><MagnifyingGlassIcon /></InputIcon>
                <InputText :id="inputId" v-model="search" placeholder="Search" class="w-full" />
              </IconField>
            </template>
          </FormField>

          <FormField label="Preview values for">
            <template #default="{ inputId }">
              <Select
                :id="inputId"
                v-model="previewId"
                :options="PREVIEW_CONTEXTS"
                option-label="label"
                option-value="id"
                class="w-full!"
              />
            </template>
          </FormField>
        </div>

        <SelectButton
          v-model="contextFilter"
          :options="VARIABLE_CONTEXT_OPTIONS"
          option-label="label"
          option-value="value"
          :allow-empty="false"
          aria-label="Filter variables by object"
        />
      </div>

      <div class="rounded-sm border border-neutral-default_solid">
        <div
          class="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_minmax(0,1.2fr)_auto] items-center gap-sm border-b border-neutral-default_solid bg-neutral-surface px-sm py-xs"
        >
          <span class="text-body-sm text-neutral-subtle">Variable</span>
          <span class="text-body-sm text-neutral-subtle">Description</span>
          <span class="text-body-sm text-neutral-subtle">Resolves to (preview)</span>
          <span class="w-8" aria-hidden="true" />
        </div>

        <div
          v-for="variable in filteredVariables"
          :key="variable.token"
          class="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_minmax(0,1.2fr)_auto] items-center gap-sm border-b border-neutral-default_solid px-sm py-xs last:border-b-0"
        >
          <code class="truncate font-mono text-body-sm text-neutral-base">{{ variable.token }}</code>
          <span class="text-body-sm text-neutral-subtle">{{ variable.description }}</span>
          <span class="truncate text-body-sm text-neutral-base">{{ previewValues[variable.token] }}</span>
          <CopyButton :text="variable.token" size="small" />
        </div>

        <p v-if="filteredVariables.length === 0" class="text-body-md text-neutral-subtle m-0 p-md text-center">
          No variables match your search.
        </p>
      </div>
    </div>
  </CollapsiblePanel>
</template>
