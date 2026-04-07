import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, reactive, ref } from 'vue';
import Agent0ProfilesView from './Agent0ProfilesView.vue';
import Agent0ProfileDialog from './Agent0ProfileDialog.vue';
import { profilesData, serversData, serverOptions, userGroupsData, userGroupOptions, profileUserGroups, profileDashboardStats } from '../shared/data';
import { getProfileColumns } from '../shared/columns';
import { useProfileFilters } from '../shared/composables';

const meta: Meta<typeof Agent0ProfilesView> = {
  title: 'Projects/Burak - AI Connector/Concept Parts/Profile',
  component: Agent0ProfilesView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ProfilesView>;

export const List: Story = {
  name: 'List',
  render: () =>
    defineComponent({
      components: { Agent0ProfilesView },
      setup() {
        const filters = useProfileFilters(profilesData, serversData, userGroupsData, profileUserGroups);
        return {
          profileColumns: getProfileColumns(serversData, userGroupsData, profileUserGroups, profileDashboardStats),
          ...filters,
        };
      },
      template: `
        <Agent0ProfilesView
          :filteredProfilesData="filteredData"
          :profileColumns="profileColumns"
          :showFilterDialog="showFilterDialog"
          :draftServers="draftServers"
          :draftUserGroups="draftUserGroups"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleSearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftServers="draftServers = $event"
          @update:draftUserGroups="draftUserGroups = $event"
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
          name: 'Engineering',
          serverIds: ['github', 'jira'],
          userGroupIds: [],
        });
        return {
          visible,
          profileForm,
          serverOptions,
          userGroupOptions,
        };
      },
      template: `
        <Agent0ProfileDialog
          :visible="visible"
          :editingProfile="{ id: 1 }"
          :profileForm="profileForm"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          @update:visible="visible = $event"
        />
      `,
    }),
};
