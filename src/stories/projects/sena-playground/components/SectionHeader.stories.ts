import type { Meta, StoryObj } from '@storybook/vue3';
import SectionHeader from './SectionHeader.vue';

const meta: Meta<typeof SectionHeader> = {
  title: 'Projects/sena-playground/Components/Section Header',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const WithIconAndFeedback: Story = {
  name: 'With icon and feedback',
  render: (args) => ({
    components: { SectionHeader },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Recent searches',
    showIcon: true,
    showFeedback: true,
  },
};

export const WithoutIcon: Story = {
  name: 'Without icon',
  render: (args) => ({
    components: { SectionHeader },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Recent searches',
    showIcon: false,
    showFeedback: true,
  },
};

export const WithIconNoFeedback: Story = {
  name: 'With icon, no feedback',
  render: (args) => ({
    components: { SectionHeader },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Recent searches',
    showIcon: true,
    showFeedback: false,
  },
};

export const NarrowWidthFeedbackWraps: Story = {
  name: 'Narrow width — feedback wraps',
  render: (args) => ({
    components: { SectionHeader },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-48 border border-neutral-default_solid rounded-sm">
        <SectionHeader v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Recent searches',
    showIcon: true,
    showFeedback: true,
  },
};
