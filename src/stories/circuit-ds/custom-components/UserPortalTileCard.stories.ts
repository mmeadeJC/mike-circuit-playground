import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import UserPortalTileCard from '@/components/UserPortalTileCard.vue';

const meta: Meta<typeof UserPortalTileCard> = {
  title: 'Circuit DS/Custom Components/UserPortalTileCard',
  component: UserPortalTileCard,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: { control: 'text' },
    logoSrc: { control: 'text' },
    favorite: { control: 'boolean' },
    pinned: { control: 'boolean' },
    showPin: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof UserPortalTileCard>;

export const Default: Story = {
  args: {
    label: 'Kubernetes EKS Cluster 5',
    logoSrc: '/logos/os/kubernetes.png',
    favorite: false,
    pinned: false,
  },
  render: (args) => ({
    components: { UserPortalTileCard },
    setup() {
      return { args };
    },
    template: `
      <div class="w-48">
        <UserPortalTileCard v-bind="args" />
      </div>
    `,
  }),
};

export const Favorited: Story = {
  args: {
    label: 'Amazon Linux Bastion 23',
    logoSrc: '/logos/aws.png',
    favorite: true,
  },
  render: Default.render,
};

export const NoLogo: Story = {
  args: {
    label: 'Custom Appliance 1',
    favorite: false,
  },
  render: Default.render,
};

export const GridPreview: Story = {
  render: () => ({
    components: { UserPortalTileCard },
    setup() {
      const tiles = ref([
        { id: '1', label: 'Amazon Linux Bastion 23', logoSrc: '/logos/aws.png', favorite: true },
        { id: '2', label: 'Red Hat Enterprise Linux Prod', logoSrc: '/logos/os/redhat.png', favorite: true },
        { id: '3', label: 'Debian Apt Mirror 6', logoSrc: '/logos/os/debian.png', favorite: true },
        { id: '4', label: 'Kubernetes EKS Cluster 5', logoSrc: '/logos/os/kubernetes.png', favorite: true },
        { id: '5', label: 'Custom Appliance 1', favorite: false },
      ]);

      function toggleFavorite(id: string) {
        const tile = tiles.value.find((entry) => entry.id === id);
        if (tile) tile.favorite = !tile.favorite;
      }

      return { tiles, toggleFavorite };
    },
    template: `
      <div class="grid grid-cols-2 gap-md sm:grid-cols-3 md:grid-cols-5 max-w-[1280px]">
        <UserPortalTileCard
          v-for="tile in tiles"
          :key="tile.id"
          :label="tile.label"
          :logo-src="tile.logoSrc"
          :favorite="tile.favorite"
          @toggle-favorite="toggleFavorite(tile.id)"
        />
      </div>
    `,
  }),
};
