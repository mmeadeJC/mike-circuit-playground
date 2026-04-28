import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import AiSearchHeader from './AiSearchHeader.vue';
import PlaceholderIcon from './PlaceholderIcon.vue';

const meta: Meta<typeof AiSearchHeader> = {
  title: 'Projects/sena-playground/AI Search Dialog/Parts/AI Search Header',
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

/** Leading slot (e.g. placeholder until Circuit search icon exists). */
export const WithLeadingSlotPlaceholder: Story = {
  name: 'Leading slot (placeholder icon)',
  render: (args) => ({
    components: { AiSearchHeader, PlaceholderIcon },
    setup() {
      return { args };
    },
    template: `
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args">
            <template #leading>
              <PlaceholderIcon
                class="size-4 shrink-0 text-neutral-base"
                aria-hidden="true"
              />
            </template>
          </AiSearchHeader>
        </div>
      </div>
    `,
  }),
  args: {
    placeholder: 'Search Users, Devices, Apps...',
    enableEnterKey: false,
  },
};

export const WithAiSearchTag: Story = {
  name: 'With AI Search button',
  render: (args) => ({
    components: { AiSearchHeader },
    setup() {
      const query = ref('support');
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
    showAiSearchTag: true,
  },
};
