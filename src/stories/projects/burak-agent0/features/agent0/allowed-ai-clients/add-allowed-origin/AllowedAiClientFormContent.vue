<script setup lang="ts">
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import { FormField } from '@jumpcloud/circuit/components';
import type { AllowedAiClientDialogSnapshot } from '../../shared/types';
import { localPresetOptions, modeOptions, protocolOptions } from './allowedAiClientFormOptions';

const snapshot = defineModel<AllowedAiClientDialogSnapshot>('snapshot', { required: true });
</script>

<template>
  <div class="flex flex-col gap-md">
    <FormField label="Match type">
      <template #default="{ inputId }">
        <Select
          :id="inputId"
          v-model="snapshot.mode"
          :options="modeOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Select match type"
          :allowEmpty="false"
          class="w-full!"
        />
      </template>
    </FormField>

    <template v-if="snapshot.mode === 'single_domain'">
      <div class="grid grid-cols-2 gap-x-6 gap-y-4">
        <FormField label="Protocol">
          <template #default="{ inputId }">
            <Select
              :id="inputId"
              v-model="snapshot.protocol"
              :options="protocolOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full!"
            />
          </template>
        </FormField>
        <FormField label="Domain / host">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="snapshot.singleHost" class="w-full" placeholder="e.g. ai.company.com" />
          </template>
        </FormField>
        <FormField label="Port (optional)" class="col-span-2">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="snapshot.singlePort" class="w-full" placeholder="e.g. 8443" />
          </template>
        </FormField>
        <FormField label="Note (optional)" class="col-span-2">
          <template #default="{ inputId }">
            <Textarea :id="inputId" v-model="snapshot.note" class="w-full" :rows="2" />
          </template>
        </FormField>
      </div>
    </template>

    <template v-else-if="snapshot.mode === 'pattern'">
      <div class="flex flex-col gap-md">
        <div class="grid grid-cols-2 gap-x-6 gap-y-4">
          <FormField label="Protocol">
            <template #default="{ inputId }">
              <Select
                :id="inputId"
                v-model="snapshot.protocol"
                :options="protocolOptions"
                optionLabel="label"
                optionValue="value"
                class="w-full!"
              />
            </template>
          </FormField>
          <FormField label="Pattern value" class="col-span-2">
            <template #default="{ inputId }">
              <Textarea
                :id="inputId"
                v-model="snapshot.patternValue"
                class="w-full"
                :rows="3"
                placeholder="{dev,staging,prod}.company.com/**"
              />
            </template>
          </FormField>
          <FormField label="Note (optional)" class="col-span-2">
            <template #default="{ inputId }">
              <Textarea :id="inputId" v-model="snapshot.note" class="w-full" :rows="2" />
            </template>
          </FormField>
        </div>
        <ul class="text-body-sm text-neutral-subtle list-disc pl-md flex flex-col gap-xs">
          <li>Supports * for wildcard</li>
          <li>Supports {dev,staging,prod} for environment matching</li>
          <li>Add /** to cover all paths</li>
        </ul>
      </div>
    </template>

    <template v-else-if="snapshot.mode === 'local_dev'">
      <div class="flex flex-col gap-md">
        <FormField label="Preset">
          <template #default="{ inputId }">
            <SelectButton
              :id="inputId"
              v-model="snapshot.localPreset"
              :options="localPresetOptions"
              optionLabel="label"
              optionValue="value"
              :allowEmpty="false"
            />
          </template>
        </FormField>
        <FormField v-if="snapshot.localPreset === 'custom'" label="Custom localhost pattern">
          <template #default="{ inputId }">
            <InputText
              :id="inputId"
              v-model="snapshot.localCustom"
              class="w-full"
              placeholder="http://localhost:3000"
            />
          </template>
        </FormField>
        <FormField label="Note (optional)">
          <template #default="{ inputId }">
            <Textarea :id="inputId" v-model="snapshot.note" class="w-full" :rows="2" />
          </template>
        </FormField>
      </div>
    </template>

    <template v-else-if="snapshot.mode === 'custom_protocol'">
      <div class="grid grid-cols-2 gap-x-6 gap-y-4">
        <FormField label="Protocol name">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="snapshot.customProtocolName" class="w-full" placeholder="e.g. vscode" />
          </template>
        </FormField>
        <FormField label="Domain / value">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="snapshot.customDomainValue" class="w-full" placeholder="e.g. file/workspace" />
          </template>
        </FormField>
        <FormField label="Note (optional)" class="col-span-2">
          <template #default="{ inputId }">
            <Textarea :id="inputId" v-model="snapshot.note" class="w-full" :rows="2" />
          </template>
        </FormField>
      </div>
    </template>
  </div>
</template>
