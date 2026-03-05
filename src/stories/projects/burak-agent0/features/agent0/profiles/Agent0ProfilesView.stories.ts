import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, reactive, ref } from 'vue';
import Agent0ProfilesView from './Agent0ProfilesView.vue';
import Agent0ProfileDialog from './Agent0ProfileDialog.vue';
import { profilesData, serversData, serverOptions } from '../shared/data';
import { getProfileColumns } from '../shared/columns';

const meta: Meta<typeof Agent0ProfilesView> = {
  title: 'Projects/Burak - Agent0/Profiles',
  component: Agent0ProfilesView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ProfilesView>;

export const Table: Story = {
  render: () =>
    defineComponent({
      components: { Agent0ProfilesView },
      setup() {
        return {
          profilesData,
          profileColumns: getProfileColumns(serversData),
        };
      },
      template: `
        <Agent0ProfilesView
          :profilesData="profilesData"
          :profileColumns="profileColumns"
        />
      `,
    }),
};

export const Dialog: Story = {
  render: () =>
    defineComponent({
      components: { Agent0ProfileDialog },
      setup() {
        const visible = ref(true);
        const profileForm = reactive({
          profileId: 'engineering',
          label: 'engineering',
          serverIds: ['github', 'jira'],
        });
        return {
          visible,
          profileForm,
          serverOptions,
          serversData,
        };
      },
      template: `
        <Agent0ProfileDialog
          :visible="visible"
          :editingProfile="{ id: 1 }"
          :profileForm="profileForm"
          :serverOptions="serverOptions"
          :serversData="serversData"
          @update:visible="visible = $event"
        />
      `,
    }),
};
