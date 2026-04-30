import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent, reactive, ref } from 'vue';
import { ToastNotification } from '@jumpcloud/circuit/components';
import { useToast } from 'primevue/usetoast';
import ServerDialogPhase01 from '../ServerDialogPhase01.vue';
import { phase01AuthStyleOptions } from '../../shared/data';
import { pushServerCreatedToast } from '../../shared/serverCreateToasts';
import type { Phase01ServerFormState } from '../../shared/types';

const meta: Meta<typeof ServerDialogPhase01> = {
  title: 'AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server',
  component: ServerDialogPhase01,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ServerDialogPhase01>;

/** Interactive add-server flow (catalog app, custom app, OAuth advanced). */
export const AddServer: Story = {
  name: 'Add Server',
  render: () =>
    defineComponent({
      components: { ServerDialogPhase01, ToastNotification },
      setup() {
        const visible = ref(true);
        const toast = useToast();
        const serverForm = reactive<Phase01ServerFormState>({
          prefix: '',
          name: '',
          url: '',
          authStyle: 'OAuth',
          apiDocumentationUrl: '',
          oauthClientId: '',
          oauthScope: '',
        });
        function onCreate() {
          visible.value = false;
          pushServerCreatedToast((m) => toast.add(m));
        }
        return { visible, serverForm, phase01AuthStyleOptions, onCreate };
      },
      template: `
        <div class="h-screen bg-neutral-surface_alt">
          <ToastNotification />
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="onCreate"
          />
        </div>
      `,
    }),
};
