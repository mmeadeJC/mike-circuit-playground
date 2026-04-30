import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { reactive, ref, watch } from 'vue';
import UserAuthCard from '../../../features/user-portal/phase-01-parts/UserAuthCard.vue';
import {
  createDefaultMcpToolsStack,
  type McpToolDemoRow,
} from '../../../features/user-portal/phase-01-parts/mcpToolsDemo';

const meta: Meta<typeof UserAuthCard> = {
  title: 'AI Gateway - Burak/User Portal/Phase 01 Parts/User Auth Card',
  component: UserAuthCard,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
  decorators: [
    story => ({
      components: { story },
      template:
        '<div class="min-h-screen bg-neutral-surface p-md max-w-2xl"><story /></div>',
    }),
  ],
  argTypes: {
    authMethod: { control: 'select', options: ['apiKey', 'oauth'] },
    status: { control: 'select', options: ['notConnected', 'connected', 'error'] },
    enabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof UserAuthCard>;

export const Playground: Story = {
  args: {
    title: 'Figma',
    faviconDomain: 'figma.com',
    status: 'notConnected',
    authMethod: 'apiKey',
    enabled: true,
    apiKey: '',
    apiKeyPlaceholder: 'Enter API key',
  },
  render: args => ({
    components: { UserAuthCard },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref(args.apiKey ?? '');
      watch(
        () => args.enabled,
        v => {
          enabled.value = v;
        }
      );
      watch(
        () => args.apiKey,
        v => {
          if (v !== undefined) apiKey.value = v;
        }
      );
      return { args, enabled, apiKey };
    },
    template: `
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
        :api-key-placeholder="args.apiKeyPlaceholder"
        @save="() => {}"
        @connect="() => {}"
        @reconnect="() => {}"
      />
    `,
  }),
};

export const Collapsed: Story = {
  name: 'Collapsed (unchecked)',
  args: {
    title: 'Figma',
    faviconDomain: 'figma.com',
    status: 'notConnected',
    authMethod: 'apiKey',
    enabled: false,
  },
  render: args => ({
    components: { UserAuthCard },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return { args, enabled, apiKey };
    },
    template: `
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `,
  }),
};

export const ApiKeyExpanded: Story = {
  name: 'API key (expanded)',
  args: {
    title: 'Figma',
    faviconDomain: 'figma.com',
    status: 'notConnected',
    authMethod: 'apiKey',
    enabled: true,
  },
  render: args => ({
    components: { UserAuthCard },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return { args, enabled, apiKey };
    },
    template: `
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `,
  }),
};

export const OAuthExpanded: Story = {
  name: 'OAuth (not connected)',
  args: {
    title: 'Atlassian',
    faviconDomain: 'atlassian.com',
    status: 'notConnected',
    authMethod: 'oauth',
    enabled: true,
  },
  render: args => ({
    components: { UserAuthCard },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return { args, enabled, apiKey };
    },
    template: `
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `,
  }),
};

export const OAuthConnected: Story = {
  name: 'OAuth (connected)',
  args: {
    title: 'Github',
    faviconDomain: 'github.com',
    status: 'connected',
    authMethod: 'oauth',
    enabled: true,
  },
  render: args => ({
    components: { UserAuthCard },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return { args, enabled, apiKey };
    },
    template: `
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `,
  }),
};

export const StatusError: Story = {
  name: 'Error status',
  args: {
    title: 'Slack',
    faviconDomain: 'slack.com',
    status: 'error',
    authMethod: 'oauth',
    enabled: true,
  },
  render: args => ({
    components: { UserAuthCard },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return { args, enabled, apiKey };
    },
    template: `
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `,
  }),
};

export const McpToolsStack: Story = {
  name: 'MCP tools (stack, design reference)',
  render: () => ({
    components: { UserAuthCard },
    setup() {
      const tools = reactive<McpToolDemoRow[]>(createDefaultMcpToolsStack());
      return { tools };
    },
    template: `
      <div class="flex flex-col gap-md">
        <UserAuthCard
          v-for="t in tools"
          :key="t.title"
          v-model:enabled="t.enabled"
          v-model:api-key="t.apiKey"
          :title="t.title"
          :favicon-domain="t.faviconDomain"
          :status="t.status"
          :auth-method="t.authMethod"
        />
      </div>
    `,
  }),
};
