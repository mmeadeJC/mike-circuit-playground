import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, reactive, ref } from 'vue';
import AddServerDialog from './AddServerDialog.vue';
import { authStyleOptions } from '../shared/data';

const meta: Meta<typeof AddServerDialog> = {
  title: 'Projects/Burak - AI Connector/Parts/Server',
  component: AddServerDialog,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AddServerDialog>;

export const AddServer: Story = {
  name: 'Add Server',
  render: () =>
    defineComponent({
      components: { AddServerDialog },
      setup() {
        const visible = ref(true);
        const serverForm = reactive({
          targetId: '',
          name: '',
          url: '',
          authStyle: 'OAuth',
          authConfig: '',
        });
        return { visible, serverForm, authStyleOptions };
      },
      template: `
        <div class="h-screen bg-neutral-surface_alt">
          <AddServerDialog
            :visible="visible"
            :serverForm="serverForm"
            :authStyleOptions="authStyleOptions"
            @update:visible="visible = $event"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      `,
    }),
};
