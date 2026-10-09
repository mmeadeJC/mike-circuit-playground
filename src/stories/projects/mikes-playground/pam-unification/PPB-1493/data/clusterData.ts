/**
 * Mock data + domain helpers for PPB-1493 — Jump Server Clusters (PPB-110).
 * Replace with API data when wired.
 */

export type ServerStatus = 'Online' | 'Offline' | 'Not Installed';
export type ClusterPolicy = 'round-robin' | 'least-sessions' | 'primary-failover';
export type ClusterHealth = 'Healthy' | 'Degraded' | 'Unavailable';
export type ResourceType = 'Server' | 'Website' | 'Database';

export interface JumpServer {
  id: string;
  name: string;
  ip: string;
  webPort: number;
  shellPort: number;
  status: ServerStatus;
  version: number | null;
  lastPing: string | null;
  lastBackup: string | null;
  activeSessions: number;
  /** A Jump Server can belong to only one cluster. */
  clusterId: string | null;
}

export interface Cluster {
  id: string;
  name: string;
  description: string;
  policy: ClusterPolicy;
  /** Ordered. For `primary-failover` the order is the priority order (first = primary). */
  memberIds: string[];
  /** Single stable endpoint users / local clients connect to — never a specific Jump Server. */
  entryPoint: string;
  entryPort: number;
}

export interface PamResource {
  id: string;
  name: string;
  type: ResourceType;
  address: string;
  clusterId: string | null;
  jumpServerId: string | null;
}

export interface SessionRow {
  id: string;
  user: string;
  resource: string;
  resourceType: ResourceType;
  protocol: 'SSH' | 'RDP' | 'HTTPS' | 'Database';
  startedAt: string;
  duration: string;
  status: 'Active' | 'Ended' | 'Failed';
  jumpServer: string | null;
  cluster: string | null;
}

export interface ClusterAlert {
  id: string;
  severity: 'error' | 'warn' | 'info';
  title: string;
  detail: string;
  time: string;
  clusterId: string;
}

export const policyOptions: {
  value: ClusterPolicy;
  label: string;
  description: string;
}[] = [
  {
    value: 'round-robin',
    label: 'Round Robin',
    description:
      'Each new connection goes to the next eligible Jump Server in sequence. Every server gets the same share of connections over time. Does not consider how busy a server is.',
  },
  {
    value: 'least-sessions',
    label: 'Least Sessions',
    description:
      'Each new connection goes to the eligible Jump Server with the fewest active sessions at that moment.',
  },
  {
    value: 'primary-failover',
    label: 'Primary with Failover',
    description:
      'Connections use the primary Jump Server. If the primary is not eligible, the next server in priority order is used.',
  },
];

export const policyLabel = (p: ClusterPolicy) =>
  policyOptions.find((o) => o.value === p)?.label ?? p;

export const initialJumpServers = (): JumpServer[] => [
  { id: 'js-1', name: 'prod-jump-01', ip: '10.0.1.10', webPort: 443, shellPort: 2222, status: 'Online', version: 27, lastPing: '2026-09-30T16:25:06Z', lastBackup: '2026-09-30T05:50:01Z', activeSessions: 6, clusterId: 'cl-1' },
  { id: 'js-2', name: 'prod-jump-02', ip: '10.0.1.11', webPort: 443, shellPort: 2222, status: 'Online', version: 27, lastPing: '2026-09-30T16:25:31Z', lastBackup: '2026-09-30T05:50:14Z', activeSessions: 3, clusterId: 'cl-1' },
  { id: 'js-3', name: 'prod-jump-03', ip: '10.0.1.12', webPort: 443, shellPort: 2222, status: 'Offline', version: 26, lastPing: '2026-09-30T14:02:44Z', lastBackup: '2026-09-30T05:51:02Z', activeSessions: 0, clusterId: 'cl-1' },
  { id: 'js-4', name: 'eu-jump-01', ip: '10.20.1.10', webPort: 443, shellPort: 2222, status: 'Offline', version: 27, lastPing: '2026-09-30T13:40:12Z', lastBackup: '2026-09-30T04:10:09Z', activeSessions: 0, clusterId: 'cl-2' },
  { id: 'js-5', name: 'eu-jump-02', ip: '10.20.1.11', webPort: 443, shellPort: 2222, status: 'Offline', version: 27, lastPing: '2026-09-30T13:41:50Z', lastBackup: '2026-09-30T04:10:41Z', activeSessions: 0, clusterId: 'cl-2' },
  { id: 'js-6', name: 'staging-jump-01', ip: '10.91.65.174', webPort: 443, shellPort: 2222, status: 'Online', version: 27, lastPing: '2026-09-30T16:25:06Z', lastBackup: '2026-09-30T05:50:01Z', activeSessions: 2, clusterId: 'cl-3' },
  { id: 'js-7', name: 'staging-jump-02', ip: '10.91.65.175', webPort: 443, shellPort: 2222, status: 'Online', version: 27, lastPing: '2026-09-30T16:24:58Z', lastBackup: '2026-09-30T05:52:20Z', activeSessions: 1, clusterId: 'cl-3' },
  { id: 'js-8', name: 'abc', ip: '1.1.1.1', webPort: 443, shellPort: 2222, status: 'Not Installed', version: null, lastPing: null, lastBackup: null, activeSessions: 0, clusterId: null },
  { id: 'js-9', name: '123', ip: '128.0.0.1', webPort: 443, shellPort: 2222, status: 'Not Installed', version: null, lastPing: null, lastBackup: null, activeSessions: 0, clusterId: null },
  { id: 'js-10', name: 'apac-jump-01', ip: '10.30.1.10', webPort: 443, shellPort: 2222, status: 'Online', version: 27, lastPing: '2026-09-30T16:25:20Z', lastBackup: '2026-09-30T05:49:30Z', activeSessions: 4, clusterId: null },
  { id: 'js-11', name: 'dr-jump-01', ip: '10.40.1.10', webPort: 443, shellPort: 2222, status: 'Online', version: 26, lastPing: '2026-09-30T16:25:02Z', lastBackup: '2026-09-30T05:55:12Z', activeSessions: 0, clusterId: null },
];

export const initialClusters = (): Cluster[] => [
  { id: 'cl-1', name: 'US Production', description: 'Production jump servers, US network segment.', policy: 'least-sessions', memberIds: ['js-1', 'js-2', 'js-3'], entryPoint: 'us-production.cluster.pam.jumpcloud.com', entryPort: 2222 },
  { id: 'cl-2', name: 'EU Production', description: 'Production jump servers in Frankfurt.', policy: 'primary-failover', memberIds: ['js-4', 'js-5'], entryPoint: 'eu-production.cluster.pam.jumpcloud.com', entryPort: 2222 },
  { id: 'cl-3', name: 'Staging', description: 'Pre-production validation environment.', policy: 'round-robin', memberIds: ['js-6', 'js-7'], entryPoint: 'staging.cluster.pam.jumpcloud.com', entryPort: 2222 },
  { id: 'cl-4', name: 'Unused Cluster', description: 'No resources associated yet.', policy: 'round-robin', memberIds: [], entryPoint: 'unused-cluster.cluster.pam.jumpcloud.com', entryPort: 2222 },
];

export const initialResources = (): PamResource[] => [
  { id: 'r-1', name: 'prod-db-primary', type: 'Database', address: 'db-primary.corp.internal', clusterId: 'cl-1', jumpServerId: null },
  { id: 'r-2', name: 'prod-api-01', type: 'Server', address: '10.0.5.21', clusterId: 'cl-1', jumpServerId: null },
  { id: 'r-3', name: 'billing-portal', type: 'Website', address: 'billing.corp.internal', clusterId: 'cl-1', jumpServerId: null },
  { id: 'r-4', name: 'frankfurt-bastion-app', type: 'Server', address: '10.20.5.7', clusterId: 'cl-2', jumpServerId: null },
  { id: 'r-5', name: 'eu-customer-db', type: 'Database', address: 'eu-db.corp.internal', clusterId: 'cl-2', jumpServerId: null },
  { id: 'r-6', name: 'staging-web-01', type: 'Server', address: '10.91.7.4', clusterId: 'cl-3', jumpServerId: null },
  { id: 'r-7', name: 'legacy-erp', type: 'Server', address: '10.0.9.9', clusterId: null, jumpServerId: 'js-11' },
  { id: 'r-8', name: 'apac-file-share', type: 'Server', address: '10.30.5.12', clusterId: null, jumpServerId: 'js-10' },
  { id: 'r-9', name: 'apac-wiki', type: 'Website', address: 'wiki.apac.corp.internal', clusterId: null, jumpServerId: 'js-10' },
];

export const sessionRows: SessionRow[] = [
  { id: 's-1', user: 'Gabriel Ramos', resource: 'prod-db-primary', resourceType: 'Database', protocol: 'Database', startedAt: '2026-09-30 09:12', duration: '42m', status: 'Active', jumpServer: 'prod-jump-01', cluster: 'US Production' },
  { id: 's-2', user: 'Ana Ortiz', resource: 'prod-api-01', resourceType: 'Server', protocol: 'SSH', startedAt: '2026-09-30 09:04', duration: '50m', status: 'Active', jumpServer: 'prod-jump-02', cluster: 'US Production' },
  { id: 's-3', user: 'Priya Nair', resource: 'billing-portal', resourceType: 'Website', protocol: 'HTTPS', startedAt: '2026-09-30 08:31', duration: '1h 12m', status: 'Ended', jumpServer: 'prod-jump-01', cluster: 'US Production' },
  { id: 's-4', user: 'Tom Becker', resource: 'frankfurt-bastion-app', resourceType: 'Server', protocol: 'SSH', startedAt: '2026-09-30 06:47', duration: '18m', status: 'Failed', jumpServer: null, cluster: 'EU Production' },
  { id: 's-5', user: 'Mike Meade', resource: 'staging-web-01', resourceType: 'Server', protocol: 'SSH', startedAt: '2026-09-30 08:02', duration: '25m', status: 'Ended', jumpServer: 'staging-jump-02', cluster: 'Staging' },
  { id: 's-6', user: 'Lena Fischer', resource: 'legacy-erp', resourceType: 'Server', protocol: 'RDP', startedAt: '2026-09-29 17:20', duration: '2h 3m', status: 'Ended', jumpServer: 'dr-jump-01', cluster: null },
  { id: 's-7', user: 'Sam Okafor', resource: 'prod-db-primary', resourceType: 'Database', protocol: 'Database', startedAt: '2026-09-29 15:55', duration: '31m', status: 'Ended', jumpServer: 'prod-jump-02', cluster: 'US Production' },
  { id: 's-8', user: 'Gabriel Ramos', resource: 'staging-web-01', resourceType: 'Server', protocol: 'SSH', startedAt: '2026-09-29 14:10', duration: '9m', status: 'Ended', jumpServer: 'staging-jump-01', cluster: 'Staging' },
];

export const initialAlerts = (): ClusterAlert[] => [
  { id: 'a-1', severity: 'error', title: 'No eligible Jump Servers in "EU Production"', detail: 'Both members are Offline. New connections to 2 resources will fail until a server comes back online.', time: '12 min ago', clusterId: 'cl-2' },
  { id: 'a-2', severity: 'warn', title: 'prod-jump-03 went Offline in "US Production"', detail: 'Connections are being routed to prod-jump-01 and prod-jump-02.', time: '2 h ago', clusterId: 'cl-1' },
];

// ---------- derived helpers ----------

export function membersOf(cluster: Cluster, servers: JumpServer[]): JumpServer[] {
  return cluster.memberIds
    .map((id) => servers.find((s) => s.id === id))
    .filter((s): s is JumpServer => !!s);
}

export function clusterHealth(cluster: Cluster, servers: JumpServer[]): ClusterHealth {
  const members = membersOf(cluster, servers);
  const online = members.filter((m) => m.status === 'Online').length;
  if (online === 0) return 'Unavailable';
  if (online < members.length) return 'Degraded';
  return 'Healthy';
}

export const resourcesInCluster = (clusterId: string, resources: PamResource[]) =>
  resources.filter((r) => r.clusterId === clusterId);

/** Mirrors the ticket: only Online servers are eligible to serve a new connection. */
export function pickJumpServer(cluster: Cluster, servers: JumpServer[], rrCursor = 0): JumpServer | null {
  const eligible = membersOf(cluster, servers).filter((m) => m.status === 'Online');
  if (eligible.length === 0) return null;
  if (cluster.policy === 'round-robin') return eligible[rrCursor % eligible.length];
  if (cluster.policy === 'least-sessions')
    return [...eligible].sort((a, b) => a.activeSessions - b.activeSessions)[0];
  return eligible[0]; // primary-failover: members are already in priority order
}

export const slugify = (name: string) =>
  name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'new-cluster';

export const entryPointFor = (name: string) => `${slugify(name)}.cluster.pam.jumpcloud.com`;

export const formatTimestamp = (iso: string | null) =>
  iso ? iso.replace('T', ' ').replace('Z', ' UTC').slice(0, 20) : '—';
