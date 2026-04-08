/** MCP tools from design reference: title = tool name, description = domain / URL */
export const MCP_TOOL_URLS = {
  figma: 'https://mcp.figma.com/mcp',
  github: 'https://api.githubcopilot.com/mcp/',
  jumpcloudLabsAdmin: 'https://mcp.jumpcloud.com/v1',
  atlassian: 'https://mcp.atlassian.com/v1/sse',
  salesforce:
    'https://api.salesforce.com/platform/mcp/v1-beta.2/sandbox/platform/sobject-all',
  slack: 'https://mcp.slack.com/mcp',
} as const;

export type McpToolDemoStatus = 'notConnected' | 'connected' | 'error';
export type McpToolDemoAuthMethod = 'apiKey' | 'oauth';

export type McpToolDemoRow = {
  title: string;
  description: string;
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
      description: MCP_TOOL_URLS.figma,
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'apiKey',
    },
    {
      title: 'Github',
      description: MCP_TOOL_URLS.github,
      enabled: true,
      apiKey: '',
      status: 'connected',
      authMethod: 'oauth',
    },
    {
      title: 'JumpCloud Labs Admin',
      description: MCP_TOOL_URLS.jumpcloudLabsAdmin,
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'apiKey',
    },
    {
      title: 'Atlassian',
      description: MCP_TOOL_URLS.atlassian,
      enabled: true,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'oauth',
    },
    {
      title: 'Salesforce',
      description: MCP_TOOL_URLS.salesforce,
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'apiKey',
    },
    {
      title: 'Slack',
      description: MCP_TOOL_URLS.slack,
      enabled: false,
      apiKey: '',
      status: 'notConnected',
      authMethod: 'oauth',
    },
  ];
}
