import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, reactive, ref } from 'vue';
import ServerDialogPhase01 from '../ServerDialogPhase01.vue';
import { phase01AuthStyleOptions } from '../../shared/data';
import type { Phase01ServerFormState } from '../../shared/types';

const meta: Meta<typeof ServerDialogPhase01> = {
  title: 'AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server/States',
  component: ServerDialogPhase01,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ServerDialogPhase01>;

function emptyForm(): Phase01ServerFormState {
  return {
    prefix: '',
    name: '',
    url: '',
    authStyle: 'OAuth',
    apiDocumentationUrl: '',
    oauthClientId: '',
    oauthScope: '',
  };
}

export const InitialState: Story = {
  name: 'Initial state',
  render: () =>
    defineComponent({
      components: { ServerDialogPhase01 },
      setup() {
        const visible = ref(true);
        const serverForm = reactive<Phase01ServerFormState>(emptyForm());
        return {
          visible,
          serverForm,
          phase01AuthStyleOptions,
        };
      },
      template: `
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            add-flow-preset="initial"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      `,
    }),
};

export const AppSelectedState: Story = {
  name: 'App selected state',
  render: () =>
    defineComponent({
      components: { ServerDialogPhase01 },
      setup() {
        const visible = ref(true);
        const serverForm = reactive<Phase01ServerFormState>(emptyForm());
        return {
          visible,
          serverForm,
          phase01AuthStyleOptions,
        };
      },
      template: `
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            add-flow-preset="stripe"
            add-flow-seed-mcp-url="https://mcp.stripe.com/v1"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      `,
    }),
};

export const CustomAppSelectedState: Story = {
  name: 'Custom app selected state',
  render: () =>
    defineComponent({
      components: { ServerDialogPhase01 },
      setup() {
        const visible = ref(true);
        const serverForm = reactive<Phase01ServerFormState>({
          prefix: 'ACME',
          name: 'Internal tools MCP',
          url: 'https://mcp.internal.example.com/mcp',
          authStyle: 'OAuth',
          apiDocumentationUrl: '',
          oauthClientId: '',
          oauthScope: '',
        });
        return {
          visible,
          serverForm,
          phase01AuthStyleOptions,
        };
      },
      template: `
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            add-flow-preset="custom"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      `,
    }),
};
