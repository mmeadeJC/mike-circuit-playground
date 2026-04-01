import type { Meta, StoryObj } from '@storybook/vue3';
import DeviceCard from './DeviceCard.vue';

const meta: Meta<typeof DeviceCard> = {
  title: "Projects/Mustafa's Playground/Device Card Experiment V4/Device Card",
  component: DeviceCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    () => ({
      template: '<div style="width: 600px"><story /></div>',
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof DeviceCard>;

export const Healthy: Story = {
  args: {
    device: {
      hostname: 'mustafa-mbp.local',
      os: 'macOS 15.4',
      serial: 'C02F93XKMD6R',
      lastContact: '2 minutes ago',
      agent: '1.24.0',
      mdm: true,
      compliant: true,
      user: 'mustafa@jumpcloud.com',
    },
  },
};

export const NonCompliant: Story = {
  args: {
    device: {
      hostname: 'dev-linux-01',
      os: 'Ubuntu 24.04',
      serial: 'SN-LNX-882A',
      lastContact: '3 hours ago',
      agent: '1.22.1',
      mdm: false,
      compliant: false,
      user: 'ops-team@jumpcloud.com',
    },
  },
};

export const Windows: Story = {
  args: {
    device: {
      hostname: 'DESKTOP-JC4F9X2',
      os: 'Windows 11 Pro',
      serial: 'PF3N9KHT',
      lastContact: '15 minutes ago',
      agent: '1.24.0',
      mdm: true,
      compliant: false,
      user: 'sarah.chen@jumpcloud.com',
    },
  },
};

export const Stale: Story = {
  args: {
    device: {
      hostname: 'old-macbook.local',
      os: 'macOS 13.6',
      serial: 'C02X1234ABCD',
      lastContact: '14 days ago',
      agent: '1.19.3',
      mdm: false,
      compliant: false,
      user: 'former-employee@jumpcloud.com',
    },
  },
};
