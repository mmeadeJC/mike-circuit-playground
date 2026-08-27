import type { Meta, StoryObj } from '@storybook/vue3';
import { LinkText, MessageNotification } from '@jumpcloud/circuit/components';
import {
  sampleSidebarMessageDetail,
  sampleSidebarMessageTitle,
} from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof MessageNotification> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Message Notification",
  component: MessageNotification,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MessageNotification>;

export const SidebarInfo: Story = {
  name: 'Sidebar info banner',
  render: () => ({
    components: { MessageNotification, LinkText },
    template: `
      <div class="w-72">
        <MessageNotification
          severity="info"
          :title="sampleSidebarMessageTitle"
          :detail="sampleSidebarMessageDetail"
        >
          <template #button>
            <LinkText label="Learn more" href="#" target="_blank" />
          </template>
        </MessageNotification>
      </div>
    `,
    setup() {
      return { sampleSidebarMessageTitle, sampleSidebarMessageDetail };
    },
  }),
};

export const EnrollmentInfo: Story = {
  name: 'MDM enrollment info',
  render: () => ({
    components: { MessageNotification, LinkText },
    template: `
      <div class="w-72">
        <MessageNotification
          severity="info"
          detail="JumpCloud MDM enrollment for macOS 11.0+"
        >
          <template #button>
            <LinkText label="Learn more" href="#" target="_blank" />
          </template>
        </MessageNotification>
      </div>
    `,
  }),
};
