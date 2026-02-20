import type { Meta, StoryObj } from '@storybook/vue3';
import TopBar from '../../../components/TopBar.vue';

const meta: Meta<typeof TopBar> = {
  title: 'Circuit DS/Custom Components/TopBar',
  component: TopBar,
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
  },
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Default: Story = {};
