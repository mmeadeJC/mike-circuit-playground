import { mockCampaignReviewUserRows } from './mockData';
import type { AccessReviewCampaign } from './types';

export interface PendingRemediationRevokeRemovalRow {
  userName: string;
  /** Directory groups where an approver chose revoke; user will be removed from these groups. */
  groups: string[];
}

/**
 * Users and groups affected by running remediation now (playground: derived from mock user rows).
 */
export function pendingRemediationRevokeRemovals(c: AccessReviewCampaign): PendingRemediationRevokeRemovalRow[] {
  const rows = mockCampaignReviewUserRows(c);
  const out: PendingRemediationRevokeRemovalRow[] = [];
  for (const row of rows) {
    const groups = row.groupDetails
      .filter((g) => g.groupDecision === 'revoke')
      .map((g) => g.groupName);
    if (groups.length > 0) {
      out.push({ userName: row.name, groups });
    }
  }
  return out;
}
