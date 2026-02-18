import type { Meta, StoryObj } from '@storybook/vue3';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

const meta: Meta<typeof InputGroup> = {
  title: 'Circuit DS/Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const WithAddonText: Story = {
  render: (args) => ({
    components: { InputGroup, InputGroupAddon, InputText },
    setup() {
      return { args };
    },
    template: `
      <InputGroup v-bind="args">
        <InputGroupAddon>$</InputGroupAddon>
        <InputText placeholder="Amount" />
        <InputGroupAddon>.00</InputGroupAddon>
      </InputGroup>
    `,
  }),
};

export const WithAddonIcon: Story = {
  render: (args) => ({
    components: { InputGroup, InputGroupAddon, InputText },
    setup() {
      return { args };
    },
    template: `
      <InputGroup v-bind="args">
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Username" />
      </InputGroup>
    `,
  }),
};

export const WithPrefix: Story = {
  render: (args) => ({
    components: { InputGroup, InputGroupAddon, InputText },
    setup() {
      return { args };
    },
    template: `
      <InputGroup v-bind="args">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputText placeholder="domain.com" />
      </InputGroup>
    `,
  }),
};
