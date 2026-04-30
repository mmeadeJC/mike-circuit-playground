import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';

const meta: Meta<typeof FormField> = {
  title: 'Circuit DS/Components/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: (args) => ({
    components: { FormField, InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <FormField label="Field Label" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const WithTooltip: Story = {
  render: (args) => ({
    components: { FormField, InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <FormField label="Field Label" labelTooltip="Tooltip content" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const WithHelpText: Story = {
  render: (args) => ({
    components: { FormField, InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <FormField label="Field Label" helpText="Help text content" helpTextSeverity="default" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const WithErrorHelpText: Story = {
  render: (args) => ({
    components: { FormField, InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <FormField label="Field Label" helpText="Error!" helpTextSeverity="error" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const Required: Story = {
  render: (args) => ({
    components: { FormField, InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <FormField label="Field Label" required v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const AllSeverities: Story = {
  render: (args) => ({
    components: { FormField, InputText },
    setup() {
      const valDefault = ref('');
      const valInfo = ref('');
      const valWarning = ref('');
      const valSuccess = ref('');
      const valError = ref('');
      return { args, valDefault, valInfo, valWarning, valSuccess, valError };
    },
    template: `
      <div class="flex flex-wrap gap-6">
        <FormField label="Default" helpText="Default help text" helpTextSeverity="default" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valDefault" class="w-full" />
          </template>
        </FormField>
        <FormField label="Info" helpText="Info help text" helpTextSeverity="info" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valInfo" class="w-full" />
          </template>
        </FormField>
        <FormField label="Warning" helpText="Warning help text" helpTextSeverity="warning" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valWarning" class="w-full" />
          </template>
        </FormField>
        <FormField label="Success" helpText="Success help text" helpTextSeverity="success" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valSuccess" class="w-full" />
          </template>
        </FormField>
        <FormField label="Error" helpText="Error help text" helpTextSeverity="error" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valError" class="w-full" />
          </template>
        </FormField>
      </div>
    `,
  }),
  args: {},
};
