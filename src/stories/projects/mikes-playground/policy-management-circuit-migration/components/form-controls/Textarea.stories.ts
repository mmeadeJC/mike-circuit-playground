import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Textarea from 'primevue/textarea';

const meta: Meta<typeof Textarea> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Textarea",
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => ({
    components: { PvTextarea: Textarea },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <PvTextarea
        v-model="value"
        rows="3"
        autoResize
        class="w-full max-w-3xl"
        placeholder="Add notes about this policy"
      />
    `,
  }),
};
