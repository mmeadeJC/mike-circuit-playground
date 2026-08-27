import type { Meta, StoryObj } from '@storybook/vue3';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { timezoneLabel } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof InputGroupAddon> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Group Addon",
  component: InputGroupAddon,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof InputGroupAddon>;

export const TimezoneLabel: Story = {
  name: 'Timezone label',
  render: () => ({
    components: { PvInputGroupAddon: InputGroupAddon },
    setup() {
      return { timezoneLabel };
    },
    template: `
      <PvInputGroupAddon>{{ timezoneLabel }}</PvInputGroupAddon>
    `,
  }),
};
