import { markRaw } from 'vue';
import {
  SsoIcon,
  CheckListIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';
import { TicketIcon } from '@heroicons/vue/24/outline';

export interface UserPortalServerTile {
  id: string;
  label: string;
  logoSrc?: string;
  favorite: boolean;
  pinned?: boolean;
}

export const welcomeGabrielNavMenuItems = [
  { label: 'All Applications', leftIcon: markRaw(SsoIcon) },
  { label: 'Requests', leftIcon: markRaw(TicketIcon) },
  { label: 'Tasks', leftIcon: markRaw(CheckListIcon) },
  { label: 'Security', leftIcon: markRaw(PasswordManagerIcon) },
];

export const welcomeGabrielTabs = [
  { label: 'All Resources (143)', value: 'all' },
  { label: 'Applications (35)', value: 'applications' },
  { label: 'Privileged Websites (32)', value: 'privileged-websites' },
  { label: 'Servers (32)', value: 'servers' },
  { label: 'Databases (32)', value: 'databases' },
  { label: 'Favorites (46)', value: 'favorites' },
];

/** Server tiles from `public/user-portal-replica.html` — production Welcome Gabriel grid. */
export const welcomeGabrielServerTiles: UserPortalServerTile[] = [
  { id: '1', label: 'Amazon Linux Bastion 23', logoSrc: '/logos/aws.png', favorite: true },
  { id: '2', label: 'Red Hat Enterprise Linux Prod', logoSrc: '/logos/os/redhat.png', favorite: true },
  { id: '3', label: 'CentOS Monitoring 7', logoSrc: '/logos/os/centos.png', favorite: true },
  { id: '4', label: 'Debian Apt Mirror 6', logoSrc: '/logos/os/debian.png', favorite: true },
  { id: '5', label: 'Fedora Workstation 2', logoSrc: '/logos/os/fedora.png', favorite: true },
  { id: '6', label: 'Kubernetes EKS Cluster 5', logoSrc: '/logos/os/kubernetes.png', favorite: true },
  { id: '7', label: 'Linux Prod', logoSrc: '/logos/apple.png', favorite: true },
  { id: '8', label: 'Custom Appliance 1', favorite: false },
  { id: '9', label: 'Oracle Linux Database 8', logoSrc: '/logos/os/oracle.png', favorite: true },
  { id: '10', label: 'Red Hat Enterprise Linux Dev 9', logoSrc: '/logos/os/redhat.png', favorite: true },
  { id: '11', label: 'SUSE SAP App Server 11', logoSrc: '/logos/os/suse.png', favorite: true },
  { id: '12', label: 'Amazon Linux Web 21', logoSrc: '/logos/aws.png', favorite: true },
  { id: '13', label: 'Analytics GPU Node 14', logoSrc: '/logos/aws.png', favorite: true },
  { id: '14', label: 'Amazon Linux Analytics 7', logoSrc: '/logos/aws.png', favorite: true },
  { id: '15', label: 'Amazon Linux Dev 12', logoSrc: '/logos/aws.png', favorite: true },
  { id: '16', label: 'Ubuntu Prod Jump Host 2', logoSrc: '/logos/os/ubuntu.png', favorite: true },
  { id: '17', label: 'Ubuntu QA Sandbox 13', logoSrc: '/logos/os/ubuntu.png', favorite: true },
  { id: '18', label: 'Amazon Linux QA 17', logoSrc: '/logos/aws.png', favorite: true },
  { id: '19', label: 'Analytics Prod DB 1', logoSrc: '/logos/aws.png', favorite: true },
  { id: '20', label: 'Analytics Sandbox 9', logoSrc: '/logos/aws.png', favorite: true },
];
