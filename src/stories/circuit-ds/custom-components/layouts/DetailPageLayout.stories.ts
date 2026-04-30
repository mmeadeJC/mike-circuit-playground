import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import { DetailPageLayout } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DetailPageLayout> = {
  title: 'Circuit DS/Layouts/DetailPageLayout',
  component: DetailPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['1024', '1280', '1440'],
      description: 'Max content width when no sidebar is present (default 1280)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DetailPageLayout>;

const ScrollableMainContent = defineComponent({
  name: 'ScrollableMainContent',
  template: `
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Detail — Main Content (scrollable)</p>
      <div class="flex flex-col gap-4">
        <div v-for="i in 20" :key="i" class="rounded-lg border border-neutral-default_solid p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="h-4 rounded bg-neutral-surface_deep w-32"></div>
            <div class="h-4 rounded bg-neutral-surface_deep w-16"></div>
          </div>
          <div class="space-y-2">
            <div class="h-3 rounded bg-neutral-surface_deep w-3/4"></div>
            <div class="h-3 rounded bg-neutral-surface_deep w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const ScrollableSidebarContent = defineComponent({
  name: 'ScrollableSidebarContent',
  template: `
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Sidebar (scrollable)</p>
      <div class="flex flex-col gap-3">
        <div v-for="i in 25" :key="i" class="rounded border border-neutral-default_solid p-3">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-2"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-full"></div>
        </div>
      </div>
    </div>
  `,
});

export const WithSidebar: Story = {
  render: () => ({
    components: { DetailPageLayout, ScrollableMainContent, ScrollableSidebarContent },
    template: `
      <DetailPageLayout>
        <ScrollableMainContent />
        <template #sidebar>
          <ScrollableSidebarContent />
        </template>
      </DetailPageLayout>
    `,
  }),
};

export const WithoutSidebar: Story = {
  args: {
    maxWidth: '1280',
  },
  render: (args) => ({
    components: { DetailPageLayout, ScrollableMainContent },
    setup: () => ({ args }),
    template: `
      <DetailPageLayout v-bind="args">
        <ScrollableMainContent />
      </DetailPageLayout>
    `,
  }),
};

export const WithoutSidebarNarrow: Story = {
  args: {
    maxWidth: '1024',
  },
  render: (args) => ({
    components: { DetailPageLayout, ScrollableMainContent },
    setup: () => ({ args }),
    template: `
      <DetailPageLayout v-bind="args">
        <ScrollableMainContent />
      </DetailPageLayout>
    `,
  }),
};
