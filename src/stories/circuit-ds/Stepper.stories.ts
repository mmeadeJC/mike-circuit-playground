import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw } from 'vue';
import { Stepper } from '@jumpcloud/circuit/components';
import type { StepDefinition } from '@jumpcloud/circuit/components';
import {
  CloudArrowUpIcon,
  CogIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline';

const meta: Meta<typeof Stepper> = {
  title: 'Circuit DS/Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean' },
    linear: { control: 'boolean' },
    showCancelButton: { control: 'boolean' },
    nextDisabled: { control: 'boolean' },
    saveLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

const defaultSteps: StepDefinition[] = [
  { value: '1', label: 'Account Setup' },
  { value: '2', label: 'Profile Details' },
  { value: '3', label: 'Confirmation' },
];

export const Default: Story = {
  render: (args) => ({
    components: { Stepper },
    setup() {
      const activeStep = ref('1');
      return { args, activeStep, defaultSteps };
    },
    template: `
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">
            Step 1 content: Configure your account settings.
          </div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">
            Step 2 content: Enter your profile details.
          </div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">
            Step 3 content: Review and confirm your information.
          </div>
        </template>
      </Stepper>
    `,
  }),
  args: {},
};

const stepsWithIcons: StepDefinition[] = [
  { value: '1', label: 'Upload', icon: markRaw(CloudArrowUpIcon) },
  { value: '2', label: 'Configure', icon: markRaw(CogIcon) },
  { value: '3', label: 'Deploy', icon: markRaw(ShieldCheckIcon) },
];

export const WithCustomIcons: Story = {
  render: (args) => ({
    components: { Stepper },
    setup() {
      const activeStep = ref('1');
      return { args, activeStep, stepsWithIcons };
    },
    template: `
      <Stepper
        :steps="stepsWithIcons"
        v-model:value="activeStep"
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Upload your files here.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Configure deployment options.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Deploy when ready.</div>
        </template>
      </Stepper>
    `,
  }),
  args: {},
};

export const Linear: Story = {
  render: (args) => ({
    components: { Stepper },
    setup() {
      const activeStep = ref('1');
      return { args, activeStep, defaultSteps };
    },
    template: `
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        linear
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Step 1 content.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Step 2 content.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Step 3 content.</div>
        </template>
      </Stepper>
    `,
  }),
  args: {
    linear: true,
  },
};

export const Vertical: Story = {
  render: (args) => ({
    components: { Stepper },
    setup() {
      const activeStep = ref('1');
      return { args, activeStep, defaultSteps };
    },
    template: `
      <Stepper
        :steps="defaultSteps"
        v-model:value="activeStep"
        vertical
        v-bind="args"
        @cancel="() => {}"
        @save="() => {}"
      >
        <template #step-1>
          <div class="text-body-md text-neutral-base">Step 1 content.</div>
        </template>
        <template #step-2>
          <div class="text-body-md text-neutral-base">Step 2 content.</div>
        </template>
        <template #step-3>
          <div class="text-body-md text-neutral-base">Step 3 content.</div>
        </template>
      </Stepper>
    `,
  }),
  args: {
    vertical: true,
  },
};
