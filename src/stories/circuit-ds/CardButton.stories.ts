import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw } from 'vue';
import { CardButton } from '@jumpcloud/circuit/components';
import {
  ArrowRightIcon,
  KeyIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
} from '@heroicons/vue/24/outline';

const meta: Meta<typeof CardButton> = {
  title: 'Circuit DS/Components/CardButton',
  component: CardButton,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    clickable: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardButton>;

export const Default: Story = {
  render: (args) => ({
    components: { CardButton },
    setup() {
      const clicked = ref(false);
      const onClick = () => {
        clicked.value = true;
      };
      return { args, clicked, onClick };
    },
    template: `
      <div>
        <CardButton
          title="Manage Users"
          content="Add, edit, and remove users from your organization."
          @click="onClick"
        />
        <p v-if="clicked" class="mt-2 text-body-sm text-neutral-subtle">Card was clicked.</p>
      </div>
    `,
  }),
  args: {},
};

export const WithLeadingAndTrailing: Story = {
  render: (args) => ({
    components: { CardButton, KeyIcon, ArrowRightIcon },
    setup() {
      const onClick = () => {};
      return { args, onClick };
    },
    template: `
      <CardButton
        title="SSO Configuration"
        content="Configure single sign-on for your applications."
        @click="onClick"
      >
        <template #leading>
          <KeyIcon class="w-6 h-6 text-neutral-subtle" />
        </template>
        <template #trailing>
          <ArrowRightIcon class="w-5 h-5 text-neutral-subtle" />
        </template>
      </CardButton>
    `,
  }),
  args: {},
};

export const WithoutHeader: Story = {
  render: (args) => ({
    components: { CardButton },
    setup() {
      const onClick = () => {};
      return { args, onClick };
    },
    template: `
      <CardButton
        content="This card has no title, only content."
        @click="onClick"
      />
    `,
  }),
  args: {},
};

export const WithoutContent: Story = {
  render: (args) => ({
    components: { CardButton, UserGroupIcon, ComputerDesktopIcon },
    setup() {
      const onClick = () => {};
      return { args, onClick };
    },
    template: `
      <CardButton
        title="Device Groups"
        @click="onClick"
      >
        <template #leading>
          <UserGroupIcon class="w-6 h-6 text-neutral-subtle" />
        </template>
        <template #trailing>
          <ComputerDesktopIcon class="w-5 h-5 text-neutral-subtle" />
        </template>
      </CardButton>
    `,
  }),
  args: {},
};

export const WithTrailingIconProp: Story = {
  render: (args) => ({
    components: { CardButton },
    setup() {
      const ArrowRightIconRaw = markRaw(ArrowRightIcon);
      const onClick = () => {};
      return { args, ArrowRightIconRaw, onClick };
    },
    template: `
      <CardButton
        title="View Details"
        content="Click to view full details."
        :trailingIcon="ArrowRightIconRaw"
        @click="onClick"
      />
    `,
  }),
  args: {},
};

export const SmallSize: Story = {
  render: (args) => ({
    components: { CardButton },
    setup() {
      const onClick = () => {};
      return { args, onClick };
    },
    template: `
      <CardButton
        title="Compact Card"
        content="Small size variant."
        size="small"
        @click="onClick"
      />
    `,
  }),
  args: {},
};

export const NonClickable: Story = {
  render: (args) => ({
    components: { CardButton },
    setup() {
      return { args };
    },
    template: `
      <CardButton
        title="Read-only Card"
        content="This card is not clickable (clickable=false)."
        :clickable="false"
      />
    `,
  }),
  args: {},
};
