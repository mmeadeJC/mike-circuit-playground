<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Popover from 'primevue/popover';
import Textarea from 'primevue/textarea';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { POLICY_VARIABLES, VARIABLE_CONTEXT_OPTIONS } from './policyVariablesCatalog';

const model = defineModel<string>({ default: '' });

withDefaults(
  defineProps<{
    id?: string;
    multiline?: boolean;
    rows?: number;
    placeholder?: string;
  }>(),
  { multiline: false, rows: 2 },
);

const field = ref<{ $el: HTMLInputElement | HTMLTextAreaElement } | null>(null);
const popover = ref<InstanceType<typeof Popover> | null>(null);
const search = ref('');

const groups = computed(() => {
  const query = search.value.trim().toLowerCase();
  return VARIABLE_CONTEXT_OPTIONS.filter((option) => option.value !== 'all')
    .map((option) => ({
      label: option.label,
      variables: POLICY_VARIABLES.filter(
        (variable) =>
          variable.context === option.value &&
          (!query ||
            variable.token.toLowerCase().includes(query) ||
            variable.description.toLowerCase().includes(query)),
      ),
    }))
    .filter((group) => group.variables.length > 0);
});

function togglePicker(event: Event) {
  search.value = '';
  popover.value?.toggle(event);
}

function insertVariable(token: string) {
  const el = field.value?.$el;
  const current = model.value ?? '';
  const start = el?.selectionStart ?? current.length;
  const end = el?.selectionEnd ?? current.length;
  model.value = current.slice(0, start) + token + current.slice(end);
  popover.value?.hide();
  nextTick(() => {
    const caret = start + token.length;
    el?.focus();
    el?.setSelectionRange(caret, caret);
  });
}
</script>

<template>
  <div class="flex items-start gap-xs">
    <Textarea
      v-if="multiline"
      :id="id"
      ref="field"
      v-model="model"
      :rows="rows"
      :placeholder="placeholder"
      class="flex-1 min-w-0"
    />
    <InputText
      v-else
      :id="id"
      ref="field"
      v-model="model"
      :placeholder="placeholder"
      class="flex-1 min-w-0"
    />

    <Button
      label="{...}"
      severity="secondary"
      variant="outlined"
      aria-label="Insert variable"
      aria-haspopup="true"
      @click="togglePicker"
    />

    <Popover ref="popover">
      <div class="flex w-80 flex-col gap-sm">
        <IconField>
          <InputIcon><MagnifyingGlassIcon /></InputIcon>
          <InputText v-model="search" placeholder="Search variables" class="w-full" />
        </IconField>

        <div class="flex max-h-72 flex-col gap-sm overflow-auto">
          <div v-for="group in groups" :key="group.label" class="flex flex-col">
            <span class="px-xs pb-xs text-body-sm text-neutral-subtle">{{ group.label }}</span>
            <button
              v-for="variable in group.variables"
              :key="variable.token"
              type="button"
              class="flex flex-col items-start rounded-sm px-xs py-xs text-left hover:bg-neutral-surface"
              @click="insertVariable(variable.token)"
            >
              <code class="font-mono text-body-sm text-neutral-base">{{ variable.token }}</code>
              <span class="text-body-xs text-neutral-subtle">{{ variable.description }}</span>
            </button>
          </div>
          <p v-if="groups.length === 0" class="text-body-md text-neutral-subtle m-0 p-sm text-center">
            No variables match your search.
          </p>
        </div>
      </div>
    </Popover>
  </div>
</template>
