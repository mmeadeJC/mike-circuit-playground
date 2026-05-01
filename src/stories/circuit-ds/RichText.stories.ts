import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { RichText } from '@jumpcloud/circuit/components';

const meta: Meta<typeof RichText> = {
  title: 'Circuit DS/Components/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    tag: { control: 'text' },
    wrapLines: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RichText>;

export const Bold: Story = {
  render: (args) => ({
    components: { RichText },
    setup() {
      return { args };
    },
    template: `
      <RichText content="This is **bold** text" v-bind="args" />
    `,
  }),
  args: {},
};

export const Italic: Story = {
  render: (args) => ({
    components: { RichText },
    setup() {
      return { args };
    },
    template: `
      <RichText content="This is *italic* text" v-bind="args" />
    `,
  }),
  args: {},
};

export const Code: Story = {
  render: (args) => ({
    components: { RichText },
    setup() {
      return { args };
    },
    template: `
      <RichText content="Use the \`markRaw()\` function" v-bind="args" />
    `,
  }),
  args: {},
};

export const Link: Story = {
  render: (args) => ({
    components: { RichText },
    setup() {
      return { args };
    },
    template: `
      <RichText content="Visit [Example](https://example.com)" v-bind="args" />
    `,
  }),
  args: {},
};

export const Combined: Story = {
  render: (args) => ({
    components: { RichText },
    setup() {
      return { args };
    },
    template: `
      <RichText content="This is **bold**, *italic*, \`code\`, and a [link](https://example.com)" v-bind="args" />
    `,
  }),
  args: {},
};

export const MultiLine: Story = {
  render: (args) => ({
    components: { RichText },
    setup() {
      const content =
        'First paragraph with **bold** text.\n\nSecond paragraph with *italic* and `code`.';
      return { args, content };
    },
    template: `
      <RichText
        tag="div"
        :wrapLines="true"
        :content="content"
        v-bind="args"
      />
    `,
  }),
  args: {},
};
