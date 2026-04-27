import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import AiSearchHeader from './AiSearchHeader.vue';

const meta: Meta<typeof AiSearchHeader> = {
  title: 'Projects/sena-playground/Components/AI Search Header',
  component: AiSearchHeader,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof AiSearchHeader>;

export const Default: Story = {
  name: 'Default',
  render: (args) => ({
    components: { AiSearchHeader },
    setup() {
      return { args };
    },
    template: `
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" />
        </div>
      </div>
    `,
  }),
  args: {
    placeholder: 'Search Users, Devices, Apps...',
  },
};

export const WithQuery: Story = {
  name: 'With query',
  render: (args) => ({
    components: { AiSearchHeader },
    setup() {
      const query = ref('laptop');
      return { args, query };
    },
    template: `
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" v-model="query" />
        </div>
      </div>
    `,
  }),
  args: {
    placeholder: 'Search Users, Devices, Apps...',
  },
};
