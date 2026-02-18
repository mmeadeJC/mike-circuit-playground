import type { Meta, StoryObj } from '@storybook/vue3';
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
            <p class="text-body-md p-md">Overview content goes here.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md p-md">Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md p-md">Members content goes here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
};

export const WithDisabledTab: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" value="0">
        <TabList>
          <Tab value="0">Active</Tab>
          <Tab value="1">Pending</Tab>
          <Tab value="2" disabled>Archived</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md p-md">Active items content.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md p-md">Pending items content.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md p-md">Archived items content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
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
            <p class="text-body-md p-md">Overview panel content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
};
