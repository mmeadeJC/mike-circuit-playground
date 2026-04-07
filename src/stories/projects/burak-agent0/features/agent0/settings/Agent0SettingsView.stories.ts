import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import Agent0SettingsView from './Agent0SettingsView.vue';
import { llmProviders, defaultInstructions } from '../shared/data';

const meta: Meta<typeof Agent0SettingsView> = {
  title: 'AI Connector - Burak/Admin Portal/Concept Parts',
  component: Agent0SettingsView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0SettingsView>;

export const Settings: Story = {
  name: 'Settings',
  render: () =>
    defineComponent({
      components: { Agent0SettingsView },
      setup() {
        const selectedProvider = ref('bedrock');
        const apiKey = ref('');
        const apiKeyVisible = ref(false);
        const modelId = ref('anthropic.claude-sonnet-4-5-20250929-v1:0');
        const instructions = ref([...defaultInstructions]);
        return {
          selectedProvider,
          apiKey,
          apiKeyVisible,
          modelId,
          instructions,
          llmProviders,
        };
      },
      template: `
        <Agent0SettingsView
          :selectedProvider="selectedProvider"
          :apiKey="apiKey"
          :apiKeyVisible="apiKeyVisible"
          :modelId="modelId"
          :instructions="instructions"
          :llmProviders="llmProviders"
          @update:selectedProvider="selectedProvider = $event"
          @update:apiKey="apiKey = $event"
          @update:apiKeyVisible="apiKeyVisible = $event"
          @update:modelId="modelId = $event"
          @update:instructions="instructions = $event"
        />
      `,
    }),
};
