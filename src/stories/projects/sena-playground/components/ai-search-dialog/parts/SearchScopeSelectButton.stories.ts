import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import SearchScopeSelectButton from './SearchScopeSelectButton.vue';
import type { SearchScopeValue } from './searchScopeOptions';

const meta: Meta<typeof SearchScopeSelectButton> = {
  title:
    'Projects/sena-playground/AI Search Dialog/Parts/Search Scope Select',
  component: SearchScopeSelectButton,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SearchScopeSelectButton>;

export const Default: Story = {
  name: 'Default',
  render: (args) => ({
    components: { SearchScopeSelectButton },
    setup() {
      const scope = ref<SearchScopeValue>('all');
      return { args, scope };
    },
    template: `
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    `,
  }),
  args: {
    showCounts: false,
  },
};

export const WithCounts: Story = {
  name: 'With mock counts',
  render: (args) => ({
    components: { SearchScopeSelectButton },
    setup() {
      const scope = ref<SearchScopeValue>('all');
      return { args, scope };
    },
    template: `
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    `,
  }),
  args: {
    showCounts: true,
  },
};

export const WithZeroCounts: Story = {
  name: 'Empty state counts (all zero)',
  render: (args) => ({
    components: { SearchScopeSelectButton },
    setup() {
      const scope = ref<SearchScopeValue>('all');
      return { args, scope };
    },
    template: `
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    `,
  }),
  args: {
    showCounts: true,
    showZeroCounts: true,
  },
};
