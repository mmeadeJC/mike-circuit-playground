import type { Meta, StoryObj } from '@storybook/vue3-vite';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

const meta: Meta<typeof IconField> = {
  title: 'Circuit DS/Components/IconField',
  component: IconField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconField>;

export const LeadingIcon: Story = {
  render: (args) => ({
    components: { IconField, InputIcon, InputText },
    setup() {
      return { args };
    },
    template: `
      <IconField v-bind="args">
        <InputIcon class="pi pi-search" aria-hidden="true" />
        <InputText placeholder="Search..." aria-label="Search" />
      </IconField>
    `,
  }),
};

export const TrailingIcon: Story = {
  render: (args) => ({
    components: { IconField, InputIcon, InputText },
    setup() {
      return { args };
    },
    template: `
      <IconField v-bind="args" iconPosition="right">
        <InputText placeholder="Enter value..." aria-label="Enter value" />
        <InputIcon class="pi pi-spin pi-spinner" aria-hidden="true" />
      </IconField>
    `,
  }),
};
