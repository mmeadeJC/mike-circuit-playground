import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import { DashboardPageLayout } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DashboardPageLayout> = {
  title: 'Circuit DS/Layouts/DashboardPageLayout',
  component: DashboardPageLayout,
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

type Story = StoryObj<typeof DashboardPageLayout>;

const ScrollableDashboardContent = defineComponent({
  name: 'ScrollableDashboardContent',
  template: `
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Dashboard — Main Content (scrollable)</p>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="rounded-lg border border-neutral-default_solid p-4 min-h-[120px]">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-3"></div>
          <div class="h-8 rounded bg-neutral-surface_deep w-24 mb-2"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-16"></div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="i in 10" :key="i" class="rounded-lg border border-neutral-default_solid p-4 min-h-[200px]">
          <div class="h-3 rounded bg-neutral-surface_deep w-32 mb-4"></div>
          <div class="h-36 rounded bg-neutral-surface_deep"></div>
        </div>
      </div>
    </div>
  `,
});

const ScrollableWidgetSidebar = defineComponent({
  name: 'ScrollableWidgetSidebar',
  template: `
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Widgets (scrollable)</p>
      <div class="flex flex-col gap-3">
        <div v-for="i in 20" :key="i" class="rounded border border-neutral-default_solid p-3">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-2"></div>
          <div class="h-6 rounded bg-neutral-surface_deep w-16"></div>
        </div>
      </div>
    </div>
  `,
});

export const WithSidebar: Story = {
  render: () => ({
    components: { DashboardPageLayout, ScrollableDashboardContent, ScrollableWidgetSidebar },
    template: `
      <DashboardPageLayout>
        <ScrollableDashboardContent />
        <template #sidebar>
          <ScrollableWidgetSidebar />
        </template>
      </DashboardPageLayout>
    `,
  }),
};

export const WithoutSidebar: Story = {
  args: {
    maxWidth: '1280',
  },
  render: (args) => ({
    components: { DashboardPageLayout, ScrollableDashboardContent },
    setup: () => ({ args }),
    template: `
      <DashboardPageLayout v-bind="args">
        <ScrollableDashboardContent />
      </DashboardPageLayout>
    `,
  }),
};
