import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AdminTopBar from '@/components/AdminTopBar.vue';

const meta: Meta<typeof AdminTopBar> = {
  title: 'Circuit DS/Custom Components/AdminTopBar',
  component: AdminTopBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search field',
    },
    shortcutLabel: {
      control: 'text',
      description: 'Keyboard shortcut label shown as a tag',
    },
    showSearchIcon: {
      control: 'boolean',
      description: 'Show the AI search icon in the search area',
    },
    showBackButton: {
      control: 'boolean',
      description: 'Show a back button with divider for nested pages',
    },
    backButtonLabel: {
      control: 'text',
      description: 'Label for the back button',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AdminTopBar>;

export const Default: Story = {};

export const WithBackButton: Story = {
  args: {
    showBackButton: true,
    backButtonLabel: 'Back',
  },
};
