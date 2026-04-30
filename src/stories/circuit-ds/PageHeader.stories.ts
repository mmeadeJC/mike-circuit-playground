import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, markRaw } from 'vue';
import { PageHeader } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { ServerIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof PageHeader> = {
  title: 'Circuit DS/Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitleText: { control: 'text' },
    tabsScrollable: { control: 'boolean' },
    tabsWithPadding: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

const sampleTabs = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Tab 3', value: 'tab3' },
];

export const Default: Story = {
  args: {
    title: 'Page Title',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Page Title',
    subtitleText: 'Page description',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Page Title',
    icon: markRaw(ServerIcon),
  },
};

export const WithActions: Story = {
  render: (args) => ({
    components: { PageHeader, Button },
    setup() {
      return { args };
    },
    template: `
      <PageHeader v-bind="args">
        <template #actions>
          <Button label="Secondary" severity="secondary" variant="outlined" />
          <Button label="Primary" />
        </template>
      </PageHeader>
    `,
  }),
  args: {
    title: 'Page Title',
  },
};

export const WithTabs: Story = {
  render: (args) => ({
    components: { PageHeader },
    setup() {
      const activeTab = ref('tab1');
      return { args, activeTab, sampleTabs };
    },
    template: `
      <PageHeader
        v-bind="args"
        :tabs="sampleTabs"
        v-model:activeTab="activeTab"
      />
    `,
  }),
  args: {
    title: 'Page Title',
  },
};
