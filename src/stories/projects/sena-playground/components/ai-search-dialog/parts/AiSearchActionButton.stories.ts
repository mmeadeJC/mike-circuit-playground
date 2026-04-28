import type { Meta, StoryObj } from '@storybook/vue3';
import AiSearchActionButton from './AiSearchActionButton.vue';

const meta: Meta<typeof AiSearchActionButton> = {
  title: 'Projects/sena-playground/AI Search Dialog/Parts/AI Search Action Button',
  component: AiSearchActionButton,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiSearchActionButton>;

function storyCanvas(inner: string, bgClass = 'bg-neutral-surface') {
  return `
    <div class="flex min-h-[120px] items-center justify-center ${bgClass} px-md py-xl">
      <div class="w-full max-w-[560px] flex justify-center">
        ${inner}
      </div>
    </div>
  `;
}

export const Default: Story = {
  name: 'Default',
  render: (args) => ({
    components: { AiSearchActionButton },
    setup() {
      return { args };
    },
    template: storyCanvas(`<AiSearchActionButton v-bind="args" />`),
  }),
  args: {},
};

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => ({
    components: { AiSearchActionButton },
    setup() {
      return { args };
    },
    template: storyCanvas(`<AiSearchActionButton v-bind="args" />`),
  }),
  args: {
    disabled: true,
  },
};

export const LongLabel: Story = {
  name: 'Long label',
  render: (args) => ({
    components: { AiSearchActionButton },
    setup() {
      return { args };
    },
    template: storyCanvas(`<AiSearchActionButton v-bind="args" />`),
  }),
  args: {
    label: 'Open in AI Assistant with a longer label to test layout',
  },
};
