import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';

const meta: Meta<typeof ListPageLayout> = {
  title: 'Circuit DS/Custom Components/Layouts/ListPageLayout',
  component: ListPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ListPageLayout>;

const ScrollableTableContent = defineComponent({
  name: 'ScrollableTableContent',
  template: `
    <div class="flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <p class="text-body-md-semi-bold text-neutral-base">Items (256)</p>
        <div class="flex gap-2">
          <div class="h-8 w-20 rounded bg-neutral-surface_deep"></div>
          <div class="h-8 w-20 rounded bg-neutral-surface_deep"></div>
        </div>
      </div>
      <div class="border border-neutral-default_solid rounded-lg overflow-hidden">
        <div class="grid grid-cols-5 gap-4 p-3 border-b border-neutral-default_solid bg-neutral-surface_deep">
          <div class="h-3 rounded bg-neutral-surface w-16"></div>
          <div class="h-3 rounded bg-neutral-surface w-20"></div>
          <div class="h-3 rounded bg-neutral-surface w-14"></div>
          <div class="h-3 rounded bg-neutral-surface w-18"></div>
          <div class="h-3 rounded bg-neutral-surface w-12"></div>
        </div>
        <div v-for="i in 30" :key="i" class="grid grid-cols-5 gap-4 p-3 border-b border-neutral-default_solid last:border-b-0">
          <div class="h-3 rounded bg-neutral-surface_deep w-24"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-28"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-16"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-20"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-14"></div>
        </div>
      </div>
    </div>
  `,
});

const ScrollableFilterSidebar = defineComponent({
  name: 'ScrollableFilterSidebar',
  template: `
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Filters</p>
      <div class="flex flex-col gap-5">
        <div v-for="i in 15" :key="i">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-2"></div>
          <div class="h-8 rounded border border-neutral-default_solid bg-neutral-surface"></div>
        </div>
      </div>
    </div>
  `,
});

export const WithSidebar: Story = {
  render: () => ({
    components: { ListPageLayout, ScrollableTableContent, ScrollableFilterSidebar },
    template: `
      <ListPageLayout>
        <ScrollableTableContent />
        <template #sidebar>
          <ScrollableFilterSidebar />
        </template>
      </ListPageLayout>
    `,
  }),
};

export const WithoutSidebar: Story = {
  render: () => ({
    components: { ListPageLayout, ScrollableTableContent },
    template: `
      <ListPageLayout>
        <ScrollableTableContent />
      </ListPageLayout>
    `,
  }),
};
