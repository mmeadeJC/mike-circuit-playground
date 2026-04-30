<script setup lang="ts">
import { computed } from 'vue';
import { FormField, ConfigPageLayout, PageSection } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import SelectButton from 'primevue/selectbutton';
import { EyeIcon, EyeSlashIcon, TrashIcon } from '@heroicons/vue/24/outline';
import type { LlmProvider, AgentInstruction } from '../shared/types';

const props = defineProps<{
  selectedProvider: string;
  apiKey: string;
  apiKeyVisible: boolean;
  modelId: string;
  instructions: AgentInstruction[];
  llmProviders: LlmProvider[];
}>();

const emit = defineEmits<{
  'update:selectedProvider': [string];
  'update:apiKey': [string];
  'update:apiKeyVisible': [boolean];
  'update:modelId': [string];
  'update:instructions': [AgentInstruction[]];
}>();

const selectedProviderData = computed(() =>
  props.llmProviders.find((provider) => provider.id === props.selectedProvider),
);

const selectedProviderModel = computed({
  get: () => props.selectedProvider,
  set: (value: string) => emit('update:selectedProvider', value),
});

const apiKeyModel = computed({
  get: () => props.apiKey,
  set: (value: string) => emit('update:apiKey', value),
});

const apiKeyVisibleModel = computed({
  get: () => props.apiKeyVisible,
  set: (value: boolean) => emit('update:apiKeyVisible', value),
});

const modelIdModel = computed({
  get: () => props.modelId,
  set: (value: string) => emit('update:modelId', value),
});

function addInstruction() {
  const nextId = props.instructions.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
  emit('update:instructions', [
    ...props.instructions,
    {
      id: nextId,
      name: 'New Instruction',
      enabled: false,
      content: '',
    },
  ]);
}

function removeInstruction(id: number) {
  emit('update:instructions', props.instructions.filter((item) => item.id !== id));
}

function updateInstructionContent(id: number, content: string) {
  emit(
    'update:instructions',
    props.instructions.map((item) => (item.id === id ? { ...item, content } : item)),
  );
}
</script>

<template>
  <div class="flex-1 overflow-auto bg-neutral-surface">
    <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
      <div class="flex flex-col gap-6">
        <div>
          <PageSection title="LLM Configuration">
            <template #subtitle>
              <span class="text-body-xs text-neutral-muted">
                Configure the LLM provider used for A2A and ADK agent orchestration. The LLM selects which targets and tools to use when processing A2A and ADK requests.
              </span>
            </template>
            <template #actions><span /></template>
          </PageSection>
          <div class="rounded-lg border border-neutral-default_solid p-md">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-3">
                <SelectButton
                  v-model="selectedProviderModel"
                  :options="llmProviders"
                  optionLabel="name"
                  optionValue="id"
                />
                <div v-if="selectedProviderData" class="flex flex-col gap-1">
                  <span class="text-body-md-bold text-neutral-base">{{ selectedProviderData.name }}</span>
                  <span class="text-body-xs text-neutral-subtle">{{ selectedProviderData.subtitle }}</span>
                </div>
              </div>

              <FormField label="API Key" helpText="For Bedrock, use your AWS access key. Ensure IAM permissions for bedrock:InvokeModel.">
                <template #default="{ inputId }">
                  <div class="relative">
                    <InputText
                      :id="inputId"
                      v-model="apiKeyModel"
                      :type="apiKeyVisibleModel ? 'text' : 'password'"
                      class="w-full"
                      placeholder="API key is set (leave blank to keep current)"
                    />
                    <button
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-subtle hover:text-neutral-base"
                      @click="apiKeyVisibleModel = !apiKeyVisibleModel"
                    >
                      <component :is="apiKeyVisibleModel ? EyeSlashIcon : EyeIcon" class="size-5" />
                    </button>
                  </div>
                </template>
              </FormField>

              <FormField
                label="Model ID (optional)"
                :helpText="'Override the default model. Leave blank to use: ' + (selectedProviderData?.model || '')"
              >
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="modelIdModel" class="w-full" />
                </template>
              </FormField>

              <div class="flex gap-sm">
                <Button label="Save LLM Settings" />
                <Button label="Test Connection" severity="secondary" variant="outlined" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <PageSection title="Instructions">
            <template #subtitle>
              <span class="text-body-xs text-neutral-muted">
                Configure prompts that guide the LLM's behavior during A2A task planning and execution.
              </span>
            </template>
            <template #actions>
              <Button label="+ Add Instruction" severity="secondary" variant="outlined" @click="addInstruction" />
            </template>
          </PageSection>
          <div class="flex flex-col gap-4">
            <div
              v-for="(instruction, index) in instructions"
              :key="instruction.id"
              class="rounded-lg border border-neutral-default_solid p-md"
            >
              <div class="flex items-center gap-3 mb-3">
                <span class="text-body-md-semi-bold text-neutral-base flex-1">Instruction {{ index + 1 }}</span>
                <Button
                  severity="secondary"
                  variant="outlined"
                  rounded
                  size="small"
                  @click="removeInstruction(instruction.id)"
                  aria-label="Delete instruction"
                >
                  <template #icon>
                    <TrashIcon class="size-4" />
                  </template>
                </Button>
              </div>
              <Textarea
                :modelValue="instruction.content"
                class="w-full"
                :rows="3"
                @update:modelValue="updateInstructionContent(instruction.id, $event as string)"
              />
            </div>
          </div>
        </div>
      </div>
    </ConfigPageLayout>
  </div>
</template>
