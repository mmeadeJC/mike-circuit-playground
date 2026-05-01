import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const meta: Meta<typeof Tabs> = {
  title: 'Circuit DS/Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" value="0">
        <TabList>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Settings</Tab>
          <Tab value="2">Members</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Overview content goes here.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Members content goes here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
  args: {},
};

export const WithPadding: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" value="0">
        <TabList withPadding>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Settings</Tab>
          <Tab value="2">Members</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">TabList with withPadding prop (24px horizontal padding).</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Settings content.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Members content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
  args: {},
};

export const Scrollable: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" value="0" scrollable>
        <TabList>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Users</Tab>
          <Tab value="2">Devices</Tab>
          <Tab value="3">Policies</Tab>
          <Tab value="4">Applications</Tab>
          <Tab value="5">Groups</Tab>
          <Tab value="6">Reports</Tab>
          <Tab value="7">Audit Log</Tab>
          <Tab value="8">Integrations</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Overview panel content.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Users panel.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Devices panel.</p>
          </TabPanel>
          <TabPanel value="3">
            <p class="text-body-md text-neutral-base p-md">Policies panel.</p>
          </TabPanel>
          <TabPanel value="4">
            <p class="text-body-md text-neutral-base p-md">Applications panel.</p>
          </TabPanel>
          <TabPanel value="5">
            <p class="text-body-md text-neutral-base p-md">Groups panel.</p>
          </TabPanel>
          <TabPanel value="6">
            <p class="text-body-md text-neutral-base p-md">Reports panel.</p>
          </TabPanel>
          <TabPanel value="7">
            <p class="text-body-md text-neutral-base p-md">Audit Log panel.</p>
          </TabPanel>
          <TabPanel value="8">
            <p class="text-body-md text-neutral-base p-md">Integrations panel.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
  args: {},
};

export const Controlled: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    setup() {
      const value = ref('0');
      return { args, value };
    },
    template: `
      <Tabs v-bind="args" v-model:value="value">
        <TabList>
          <Tab value="0">Tab 1</Tab>
          <Tab value="1">Tab 2</Tab>
          <Tab value="2">Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
  args: {},
};
