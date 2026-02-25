import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { CollapsiblePanel } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import {
  FolderIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  ArrowLongRightIcon,
} from '@heroicons/vue/24/outline';

const meta: Meta<typeof CollapsiblePanel> = {
  title: 'Circuit DS/Components/CollapsiblePanel',
  component: CollapsiblePanel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CollapsiblePanel>;

export const Simple: Story = {
  render: (args) => ({
    components: { CollapsiblePanel },
    setup() {
      return { args };
    },
    template: `
      <CollapsiblePanel header="Panel Header" v-bind="args">
        <p class="text-body-md text-neutral-base">
          This is the panel content. You can place any content here.
        </p>
      </CollapsiblePanel>
    `,
  }),
  args: {},
};

export const WithTitleIcon: Story = {
  render: (args) => ({
    components: { CollapsiblePanel, FolderIcon },
    setup() {
      return { args };
    },
    template: `
      <CollapsiblePanel header="Documents" v-bind="args">
        <template #titleicon="iconProps">
          <FolderIcon :class="iconProps.class" />
        </template>
        <p class="text-body-md text-neutral-base">
          Panel with a folder icon in the title area.
        </p>
      </CollapsiblePanel>
    `,
  }),
  args: {},
};

export const WithActions: Story = {
  render: (args) => ({
    components: { CollapsiblePanel, Button, FolderIcon, EllipsisHorizontalIcon },
    setup() {
      return { args };
    },
    template: `
      <CollapsiblePanel header="Section with Actions" v-bind="args">
        <template #titleicon="iconProps">
          <FolderIcon :class="iconProps.class" />
        </template>
        <template #actions>
          <Button label="Edit" size="small" variant="outlined" severity="secondary" />
          <Button size="small" variant="outlined" severity="secondary" aria-label="More options">
            <template #icon>
              <EllipsisHorizontalIcon class="w-4 h-4" />
            </template>
          </Button>
        </template>
        <p class="text-body-md text-neutral-base">
          Panel with header icon and action buttons.
        </p>
      </CollapsiblePanel>
    `,
  }),
  args: {},
};

export const Toggleable: Story = {
  render: (args) => ({
    components: { CollapsiblePanel, Button, FolderIcon, ChevronRightIcon },
    setup() {
      const collapsed = ref(false);
      return { args, collapsed };
    },
    template: `
      <CollapsiblePanel
        v-model:collapsed="collapsed"
        toggleable
        header="Toggleable Panel"
        v-bind="args"
      >
        <template #titleicon="iconProps">
          <FolderIcon :class="iconProps.class" />
        </template>
        <template #actions>
          <Button label="Action" size="small" variant="outlined" severity="secondary" />
        </template>
        <template #toggleicon="iconProps">
          <ChevronRightIcon :class="iconProps.class" />
        </template>
        <p class="text-body-md text-neutral-base">
          Click the header or chevron to expand and collapse this panel.
        </p>
      </CollapsiblePanel>
    `,
  }),
  args: {},
};

export const InitiallyCollapsed: Story = {
  render: (args) => ({
    components: { CollapsiblePanel, ChevronRightIcon },
    setup() {
      const collapsed = ref(true);
      return { args, collapsed };
    },
    template: `
      <CollapsiblePanel
        v-model:collapsed="collapsed"
        toggleable
        header="Initially Collapsed"
        v-bind="args"
      >
        <template #toggleicon="iconProps">
          <ChevronRightIcon :class="iconProps.class" />
        </template>
        <p class="text-body-md text-neutral-base">
          This panel starts in a collapsed state.
        </p>
      </CollapsiblePanel>
    `,
  }),
  args: {},
};

export const Clickable: Story = {
  render: (args) => ({
    components: { CollapsiblePanel, ArrowLongRightIcon },
    setup() {
      const onPanelClick = () => {
        console.log('Panel clicked');
      };
      return { args, onPanelClick };
    },
    template: `
      <CollapsiblePanel
        clickable
        header="Clickable Panel"
        @click="onPanelClick"
        v-bind="args"
      >
        <template #actions>
          <ArrowLongRightIcon class="w-5 h-5 text-neutral-subtle" />
        </template>
        <p class="text-body-md text-neutral-base">
          The entire panel is clickable with hover styling.
        </p>
      </CollapsiblePanel>
    `,
  }),
  args: {},
};

export const LongHeader: Story = {
  render: (args) => ({
    components: { CollapsiblePanel },
    setup() {
      return { args };
    },
    template: `
      <CollapsiblePanel
        header="This is a very long panel header that will overflow onto the next line when the container width is constrained"
        v-bind="args"
      >
        <p class="text-body-md text-neutral-base">
          Panel content with a long header that wraps to multiple lines.
        </p>
      </CollapsiblePanel>
    `,
  }),
  args: {},
};
