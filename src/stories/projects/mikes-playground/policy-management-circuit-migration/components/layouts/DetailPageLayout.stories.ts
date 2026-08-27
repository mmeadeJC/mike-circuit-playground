import type { Meta, StoryObj } from '@storybook/vue3';
import { DetailPageLayout, MessageNotification } from '@jumpcloud/circuit/components';
import {
  sampleSidebarMessageDetail,
  sampleSidebarMessageTitle,
} from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof DetailPageLayout> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Layouts/Detail Page Layout",
  component: DetailPageLayout,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof DetailPageLayout>;

export const Default: Story = {
  render: () => ({
    components: { DetailPageLayout, MessageNotification },
    setup() {
      return { sampleSidebarMessageTitle, sampleSidebarMessageDetail };
    },
    template: `
      <DetailPageLayout class="w-full! min-h-96">
        <div class="flex flex-col gap-md p-md">
          <h3 class="text-heading-3 text-neutral-base m-0">Main column</h3>
          <p class="text-body-md text-neutral-subtle m-0">
            Policy settings and form fields render in this column on detail pages.
          </p>
        </div>

        <template #sidebar>
          <MessageNotification
            severity="info"
            :title="sampleSidebarMessageTitle"
            :detail="sampleSidebarMessageDetail"
          />
        </template>
      </DetailPageLayout>
    `,
  }),
};
