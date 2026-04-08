export type McpToolDemoStatus = 'notConnected' | 'connected' | 'error';
export type McpToolDemoAuthMethod = 'apiKey' | 'oauth';

export type McpToolDemoRow = {
  title: string;
  /** Hostname for Google favicon next to the title */
  faviconDomain: string;
  enabled: boolean;
  apiKey: string;
  status: McpToolDemoStatus;
  authMethod: McpToolDemoAuthMethod;
};

/** Default stack for User Auth Card list demos (matches Storybook McpToolsStack). */
export function createDefaultMcpToolsStack(): McpToolDemoRow[] {
  return [
    {
      title: 'Figma',
      faviconDomain: 'figma.com',
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'apiKey',
    },
    {
      title: 'Github',
      faviconDomain: 'github.com',
      enabled: true,
      apiKey: '',
      status: 'connected',
      authMethod: 'oauth',
    },
    {
      title: 'Notion',
      faviconDomain: 'notion.so',
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'apiKey',
    },
    {
      title: 'Atlassian',
      faviconDomain: 'atlassian.com',
      enabled: true,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'oauth',
    },
    {
      title: 'Salesforce',
      faviconDomain: 'salesforce.com',
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'apiKey',
    },
    {
      title: 'Slack',
      faviconDomain: 'slack.com',
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'oauth',
    },
  ];
}
