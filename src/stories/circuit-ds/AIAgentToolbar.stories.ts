import type { Meta, StoryObj } from '@storybook/vue3';
import { AIAgentToolbar } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AIAgentToolbar> = {
  title: 'Circuit DS/Components/AIAgentToolbar',
  component: AIAgentToolbar,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: { control: 'boolean' },
    isFullscreen: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof AIAgentToolbar>;

export const Default: Story = {
  render: (args) => ({
    components: { AIAgentToolbar },
    setup() {
      return { args };
    },
    template: `
      <AIAgentToolbar v-bind="args">
        <template #default="{ contentClasses, baseContentClasses }">
          <div :class="[baseContentClasses]" class="p-md">
            <p class="text-body-md text-neutral-base">AI Agent content area</p>
          </div>
        </template>
      </AIAgentToolbar>
    `,
  }),
  args: {
    isCollapsed: false,
    isFullscreen: false,
  },
};

export const Collapsed: Story = {
  render: (args) => ({
    components: { AIAgentToolbar },
    setup() {
      return { args };
    },
    template: `
      <AIAgentToolbar v-bind="args">
        <template #default="{ contentClasses, baseContentClasses }">
          <div :class="[baseContentClasses]" class="p-md">
            <p class="text-body-md text-neutral-base">AI Agent content area</p>
          </div>
        </template>
      </AIAgentToolbar>
    `,
  }),
  args: {
    isCollapsed: true,
    isFullscreen: false,
  },
};

export const Fullscreen: Story = {
  render: (args) => ({
    components: { AIAgentToolbar },
    setup() {
      return { args };
    },
    template: `
      <AIAgentToolbar v-bind="args">
        <template #default="{ contentClasses, baseContentClasses }">
          <div :class="[baseContentClasses]" class="p-md">
            <p class="text-body-md text-neutral-base">AI Agent content area (fullscreen)</p>
          </div>
        </template>
      </AIAgentToolbar>
    `,
  }),
  args: {
    isCollapsed: false,
    isFullscreen: true,
  },
};

export const WithSuffix: Story = {
  render: (args) => ({
    components: { AIAgentToolbar },
    setup() {
      return { args };
    },
    template: `
      <AIAgentToolbar v-bind="args">
        <template #default="{ contentClasses, baseContentClasses }">
          <div :class="[baseContentClasses]" class="p-md">
            <p class="text-body-md text-neutral-base">AI Agent content area</p>
          </div>
        </template>
        <template #suffix>
          <span class="text-body-sm text-neutral-subtle">Powered by AI</span>
        </template>
      </AIAgentToolbar>
    `,
  }),
  args: {
    isCollapsed: false,
    isFullscreen: false,
  },
};
