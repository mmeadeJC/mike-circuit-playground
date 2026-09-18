import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import {
  DashboardPageLayout,
  PageHeader,
  Paginator,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

import UserTopBar from '@/components/UserTopBar.vue';
import UserPortalTileCard from '@/components/UserPortalTileCard.vue';
import UserDemoNav from '@/components/Nav/UserDemoNav.vue';
import { createUserPortalProfileMenuItems } from '@/components/Nav/userPortalNavData';
import {
  welcomeGabrielNavMenuItems,
  welcomeGabrielServerTiles,
  welcomeGabrielTabs,
  type UserPortalServerTile,
} from './data/welcomeGabrielServersData';

const meta: Meta = {
  title: "Mike's Playground/User Portal/Welcome Gabriel (Servers)",
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    components: {
      UserDemoNav,
      UserTopBar,
      PageHeader,
      DashboardPageLayout,
      UserPortalTileCard,
      Paginator,
      Button,
      IconField,
      InputIcon,
      InputText,
      ArrowLeftIcon,
      MagnifyingGlassIcon,
    },
    setup() {
      const activeTab = ref('servers');
      const searchQuery = ref('');
      const first = ref(0);
      const rows = ref(50);
      const tiles = ref<UserPortalServerTile[]>(
        welcomeGabrielServerTiles.map((tile) => ({ ...tile }))
      );

      const profileMenuItems = createUserPortalProfileMenuItems({
        userName: 'Gabriel Ramos',
        userEmail: 'gabriel.ramos@company.com',
        userInitials: 'GR',
      });

      const filteredTiles = computed(() => {
        const query = searchQuery.value.trim().toLowerCase();
        if (!query) return tiles.value;
        return tiles.value.filter((tile) => tile.label.toLowerCase().includes(query));
      });

      const totalRecords = computed(() => filteredTiles.value.length);

      function toggleFavorite(id: string) {
        const tile = tiles.value.find((entry) => entry.id === id);
        if (tile) tile.favorite = !tile.favorite;
      }

      return {
        activeTab,
        searchQuery,
        first,
        rows,
        filteredTiles,
        totalRecords,
        welcomeGabrielTabs,
        welcomeGabrielNavMenuItems,
        profileMenuItems,
        toggleFavorite,
      };
    },
    template: `
      <div class="flex h-screen overflow-hidden bg-neutral-surface">
        <aside class="flex w-[280px] shrink-0 flex-col border-r border-neutral-default_solid bg-neutral-surface">
          <UserDemoNav
            class="min-h-0 flex-1"
            active-item="all applications"
            :menu-items="welcomeGabrielNavMenuItems"
            :profile-menu-items="profileMenuItems"
            user-name="Gabriel Ramos"
            user-email="gabriel.ramos@company.com"
            user-initials="GR"
          />
          <div class="px-md pb-md">
            <Button
              label="Return to main menu"
              severity="secondary"
              variant="outlined"
              size="small"
              class="w-full"
            >
              <template #icon="iconProps">
                <ArrowLeftIcon :class="iconProps.class" />
              </template>
            </Button>
          </div>
        </aside>

        <div class="flex min-w-0 flex-1 flex-col overflow-auto">
          <UserTopBar />

          <PageHeader
            title="Welcome, Gabriel"
            subtitle-text="Launch your apps and privileged resources at the single click."
            :tabs="welcomeGabrielTabs"
            v-model:active-tab="activeTab"
            tabs-with-padding
          >
            <template #actions>
              <IconField>
                <InputIcon>
                  <MagnifyingGlassIcon />
                </InputIcon>
                <InputText
                  v-model="searchQuery"
                  placeholder="Search..."
                  class="w-60"
                  size="small"
                />
              </IconField>
            </template>
          </PageHeader>

          <DashboardPageLayout class="w-full! flex-1!" max-width="1280">
            <div class="flex flex-col gap-md">
              <div class="grid grid-cols-2 gap-md sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <UserPortalTileCard
                  v-for="tile in filteredTiles"
                  :key="tile.id"
                  :label="tile.label"
                  :logo-src="tile.logoSrc"
                  :favorite="tile.favorite"
                  @toggle-favorite="toggleFavorite(tile.id)"
                />
              </div>

              <Paginator
                v-model:first="first"
                v-model:rows="rows"
                :total-records="totalRecords"
                :show-rows-per-page-options="true"
                :rows-per-page-options="[
                  { label: '50 items per page', value: 50 },
                  { label: '100 items per page', value: 100 },
                ]"
              />
            </div>
          </DashboardPageLayout>
        </div>
      </div>
    `,
  }),
};
