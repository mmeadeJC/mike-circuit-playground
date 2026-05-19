import { markRaw } from 'vue';
import { DataTableCellLink, DataTableCellText } from '@jumpcloud/circuit/components';
import PamResourceTypeCell, {
  type PamResourceType,
} from '../components/PamResourceTypeCell.vue';

export type SessionHistoryRow = {
  id: number;
  resourceName: string;
  type: PamResourceType;
  credential: string;
  user: string;
};

/** Mock session history rows — replace with API data when wired. */
export const sessionHistoryListData: SessionHistoryRow[] = [
  {
    id: 1,
    resourceName: 'AWS Production Console',
    type: 'Web Shield',
    credential: 'aws-prod-admin',
    user: 'jane.doe@acme.com',
  },
  {
    id: 2,
    resourceName: 'prod-db-postgres-01',
    type: 'Database',
    credential: 'db-readonly',
    user: 'alex.chen@acme.com',
  },
  {
    id: 3,
    resourceName: 'jump-prod-ssh-01',
    type: 'Server',
    credential: 'ssh-elevated',
    user: 'maria.garcia@acme.com',
  },
  {
    id: 4,
    resourceName: 'Okta Admin Portal',
    type: 'Web Shield',
    credential: 'okta-breakglass',
    user: 'sam.patel@acme.com',
  },
  {
    id: 5,
    resourceName: 'staging-mysql-02',
    type: 'Database',
    credential: 'mysql-staging',
    user: 'taylor.kim@acme.com',
  },
  {
    id: 6,
    resourceName: 'GitHub Enterprise',
    type: 'Web Shield',
    credential: 'github-admin',
    user: 'jordan.lee@acme.com',
  },
  {
    id: 7,
    resourceName: 'prod-redis-01',
    type: 'Database',
    credential: 'redis-readwrite',
    user: 'casey.nguyen@acme.com',
  },
  {
    id: 8,
    resourceName: 'eu-west-jump-02',
    type: 'Server',
    credential: 'ssh-operator',
    user: 'riley.morgan@acme.com',
  },
  {
    id: 9,
    resourceName: 'Salesforce Admin',
    type: 'Web Shield',
    credential: 'sf-breakglass',
    user: 'avery.brooks@acme.com',
  },
  {
    id: 10,
    resourceName: 'analytics-warehouse',
    type: 'Database',
    credential: 'snowflake-analyst',
    user: 'quinn.adams@acme.com',
  },
  {
    id: 11,
    resourceName: 'k8s-prod-control-plane',
    type: 'Server',
    credential: 'k8s-admin',
    user: 'drew.hall@acme.com',
  },
  {
    id: 12,
    resourceName: 'Azure Portal',
    type: 'Web Shield',
    credential: 'azure-global-admin',
    user: 'jamie.wright@acme.com',
  },
  {
    id: 13,
    resourceName: 'hr-postgres-replica',
    type: 'Database',
    credential: 'hr-db-read',
    user: 'morgan.blake@acme.com',
  },
  {
    id: 14,
    resourceName: 'legacy-win-jump-01',
    type: 'Server',
    credential: 'rdp-elevated',
    user: 'skyler.reed@acme.com',
  },
  {
    id: 15,
    resourceName: 'Datadog Admin',
    type: 'Web Shield',
    credential: 'datadog-admin',
    user: 'reese.cole@acme.com',
  },
  {
    id: 16,
    resourceName: 'finance-mysql-primary',
    type: 'Database',
    credential: 'finance-db',
    user: 'blake.foster@acme.com',
  },
  {
    id: 17,
    resourceName: 'apac-jump-01',
    type: 'Server',
    credential: 'ssh-prod',
    user: 'cameron.ross@acme.com',
  },
  {
    id: 18,
    resourceName: 'ServiceNow Console',
    type: 'Web Shield',
    credential: 'snow-admin',
    user: 'dana.price@acme.com',
  },
  {
    id: 19,
    resourceName: 'logs-elasticsearch',
    type: 'Database',
    credential: 'es-readonly',
    user: 'ellis.grant@acme.com',
  },
  {
    id: 20,
    resourceName: 'vendor-vpn-jump',
    type: 'Server',
    credential: 'vpn-elevated',
    user: 'finley.hayes@acme.com',
  },
  {
    id: 21,
    resourceName: 'Jira Cloud Admin',
    type: 'Web Shield',
    credential: 'jira-site-admin',
    user: 'harper.long@acme.com',
  },
  {
    id: 22,
    resourceName: 'qa-mongo-01',
    type: 'Database',
    credential: 'mongo-qa',
    user: 'indigo.park@acme.com',
  },
  {
    id: 23,
    resourceName: 'sandbox-jump-02',
    type: 'Server',
    credential: 'ssh-sandbox',
    user: 'jules.turner@acme.com',
  },
  {
    id: 24,
    resourceName: 'internal-grafana',
    type: 'Web Shield',
    credential: 'grafana-admin',
    user: 'kai.sullivan@acme.com',
  },
];

export const sessionHistoryColumns = [
  {
    field: 'resourceName',
    header: 'Resource Name',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: SessionHistoryRow }) => ({
      label: sp.data.resourceName,
    }),
  },
  {
    field: 'type',
    header: 'Type',
    sortable: true,
    component: markRaw(PamResourceTypeCell),
    componentProps: (sp: { data: SessionHistoryRow }) => ({
      type: sp.data.type,
    }),
  },
  {
    field: 'credential',
    header: 'Credential',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: SessionHistoryRow }) => ({
      label: sp.data.credential,
    }),
  },
  {
    field: 'user',
    header: 'User',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: SessionHistoryRow }) => ({
      label: sp.data.user,
    }),
  },
  {
    field: 'recording',
    header: 'Recording',
    sortable: false,
    component: markRaw(DataTableCellLink),
    componentProps: () => ({
      label: 'View Session',
      href: '#',
      size: 'small',
    }),
  },
];
