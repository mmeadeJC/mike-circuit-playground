import { markRaw } from 'vue';
import { DataTableCellText } from '@jumpcloud/circuit/components';
import JumpServerStatusCell, {
  type JumpServerStatus,
} from '../components/JumpServerStatusCell.vue';

export type JumpServerHealthRow = {
  id: number;
  name: string;
  status: JumpServerStatus;
  associatedResources: number;
};

/** Mock jump server list — replace with API data when wired. */
export const jumpServersListData: JumpServerHealthRow[] = [
  { id: 1, name: 'prod-jump-01', status: 'Online', associatedResources: 18 },
  { id: 2, name: 'prod-jump-02', status: 'Online', associatedResources: 12 },
  { id: 3, name: 'staging-jump-01', status: 'Offline', associatedResources: 5 },
  { id: 4, name: 'dev-jump-01', status: 'Not Installed', associatedResources: 0 },
  { id: 5, name: 'legacy-jump-01', status: 'Offline', associatedResources: 2 },
  { id: 6, name: 'prod-jump-03', status: 'Online', associatedResources: 24 },
  { id: 7, name: 'prod-jump-04', status: 'Online', associatedResources: 15 },
  { id: 8, name: 'eu-prod-jump-01', status: 'Online', associatedResources: 21 },
  { id: 9, name: 'eu-prod-jump-02', status: 'Offline', associatedResources: 8 },
  { id: 10, name: 'staging-jump-02', status: 'Online', associatedResources: 9 },
  { id: 11, name: 'staging-jump-03', status: 'Not Installed', associatedResources: 0 },
  { id: 12, name: 'dev-jump-02', status: 'Online', associatedResources: 4 },
  { id: 13, name: 'dev-jump-03', status: 'Offline', associatedResources: 1 },
  { id: 14, name: 'qa-jump-01', status: 'Online', associatedResources: 6 },
  { id: 15, name: 'qa-jump-02', status: 'Online', associatedResources: 7 },
  { id: 16, name: 'dr-jump-01', status: 'Offline', associatedResources: 11 },
  { id: 17, name: 'dr-jump-02', status: 'Not Installed', associatedResources: 0 },
  { id: 18, name: 'legacy-jump-02', status: 'Offline', associatedResources: 3 },
  { id: 19, name: 'apac-prod-jump-01', status: 'Online', associatedResources: 19 },
  { id: 20, name: 'apac-prod-jump-02', status: 'Online', associatedResources: 14 },
  { id: 21, name: 'vendor-jump-01', status: 'Offline', associatedResources: 2 },
  { id: 22, name: 'vendor-jump-02', status: 'Not Installed', associatedResources: 0 },
  { id: 23, name: 'sandbox-jump-01', status: 'Online', associatedResources: 5 },
  { id: 24, name: 'sandbox-jump-02', status: 'Online', associatedResources: 3 },
];

export const jumpServerHealthColumns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: JumpServerHealthRow }) => ({ label: sp.data.name }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    component: markRaw(JumpServerStatusCell),
    componentProps: (sp: { data: JumpServerHealthRow }) => ({
      status: sp.data.status,
    }),
  },
  {
    field: 'associatedResources',
    header: 'Associated Resources',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: JumpServerHealthRow }) => ({
      label: sp.data.associatedResources.toLocaleString(),
    }),
  },
];
