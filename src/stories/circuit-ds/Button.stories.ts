import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from 'primevue/button';

const meta: Meta<typeof Button> = {
  title: 'Circuit DS/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    variant: {
      control: 'select',
      options: [undefined, 'outlined', 'text'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: [undefined, 'small', 'large'],
    },
    icon: { control: 'text' },
    iconPos: {
      control: 'select',
      options: ['left', 'right'],
    },
    loading: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// --- Solid (default) ---

export const Primary: Story = {
  args: { label: 'Primary', severity: 'primary' },
};

export const Secondary: Story = {
  args: { label: 'Secondary', severity: 'secondary' },
};

export const Danger: Story = {
  args: { label: 'Danger', severity: 'danger' },
};

// --- Outlined ---

export const OutlinedPrimary: Story = {
  name: 'Outlined / Primary',
  args: { label: 'Outlined Primary', severity: 'primary', variant: 'outlined' },
};

export const OutlinedSecondary: Story = {
  name: 'Outlined / Secondary',
  args: { label: 'Outlined Secondary', severity: 'secondary', variant: 'outlined' },
};

export const OutlinedDanger: Story = {
  name: 'Outlined / Danger',
  args: { label: 'Outlined Danger', severity: 'danger', variant: 'outlined' },
};

// --- Text ---

export const TextPrimary: Story = {
  name: 'Text / Primary',
  args: { label: 'Text Primary', severity: 'primary', variant: 'text' },
};

export const TextSecondary: Story = {
  name: 'Text / Secondary',
  args: { label: 'Text Secondary', severity: 'secondary', variant: 'text' },
};

export const TextDanger: Story = {
  name: 'Text / Danger',
  args: { label: 'Text Danger', severity: 'danger', variant: 'text' },
};

// --- Icon Only ---

export const IconOnly: Story = {
  name: 'Icon Only',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" aria-hidden="true">
            <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>
        </template>
      </Button>
    `,
  }),
  args: { severity: 'primary', ariaLabel: 'More options' },
};

export const IconOnlySmall: Story = {
  name: 'Icon Only / Small',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    `,
  }),
  args: { severity: 'primary', size: 'small', ariaLabel: 'Add item' },
};

export const IconOnlyOutlined: Story = {
  name: 'Icon Only / Outlined',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" aria-hidden="true">
            <path d="M5.433 13.917l1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
          </svg>
        </template>
      </Button>
    `,
  }),
  args: { severity: 'secondary', variant: 'outlined', ariaLabel: 'Edit' },
};

// --- Sizes ---

export const Small: Story = {
  args: { label: 'Small', severity: 'primary', size: 'small' },
};

export const Large: Story = {
  args: { label: 'Large', severity: 'primary', size: 'large' },
};

// --- States ---

export const Disabled: Story = {
  args: { label: 'Disabled', severity: 'primary', disabled: true },
};

export const Loading: Story = {
  args: { label: 'Loading', severity: 'primary', loading: true },
};

// --- With Icon ---

export const WithIconLeft: Story = {
  name: 'With Icon / Left',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    `,
  }),
  args: { label: 'Add Item', severity: 'primary' },
};

export const WithIconRight: Story = {
  name: 'With Icon / Right',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-4.158a.75.75 0 1 1 1.08-1.04l5.25 5.5a.75.75 0 0 1 0 1.04l-5.25 5.5a.75.75 0 1 1-1.08-1.04l3.96-4.158H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    `,
  }),
  args: { label: 'Next', severity: 'primary', iconPos: 'right' },
};
