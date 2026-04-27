import type { Meta, StoryObj } from '@storybook/vue3';
import AiSearchFooter from './AiSearchFooter.vue';

const meta: Meta<typeof AiSearchFooter> = {
  title: 'Projects/sena-playground/Components/AI Search Footer',
  component: AiSearchFooter,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiSearchFooter>;

function storyCanvas(inner: string, bgClass: string = 'bg-neutral-base') {
  return `
    <div class="flex min-h-[200px] justify-center ${bgClass} px-md py-xl">
      <div class="w-full max-w-[560px]">
        ${inner}
      </div>
    </div>
  `;
}

export const Default: Story = {
  name: 'Default',
  render: (args) => ({
    components: { AiSearchFooter },
    setup() {
      return { args };
    },
    template: storyCanvas(`<AiSearchFooter v-bind="args" variant="default" />`),
  }),
};

export const AiMode: Story = {
  name: 'AI-mode',
  render: (args) => ({
    components: { AiSearchFooter },
    setup() {
      return { args };
    },
    template: storyCanvas(`<AiSearchFooter v-bind="args" variant="ai-mode" />`),
  }),
};
