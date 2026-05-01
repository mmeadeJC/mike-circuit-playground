import { reactive, readonly } from 'vue';
import type {
  AccessReviewCampaign,
  CampaignReviewResultsBreakdown,
  DirectoryInsightsAccessReviewEvent,
  GlobalAccessReviewSettings,
  ReviewDecision,
  ReviewQueueItem,
} from './types';
import { defaultGlobalSettings, seedCampaigns, seedDiEvents, seedReviewQueue } from './mockData';

export const ACCESS_REVIEW_M1_STORE_KEY = Symbol('accessReviewM1Store');

export interface AccessReviewM1Store {
  globalSettings: GlobalAccessReviewSettings;
  campaigns: AccessReviewCampaign[];
  diEvents: DirectoryInsightsAccessReviewEvent[];
  reviewQueue: ReviewQueueItem[];
  updateGlobalSettings: (patch: Partial<GlobalAccessReviewSettings>) => void;
  addCampaign: (c: AccessReviewCampaign) => void;
  /** Replace an existing campaign by id (playground edit flow). */
  updateCampaign: (c: AccessReviewCampaign) => void;
  getCampaign: (id: string) => AccessReviewCampaign | undefined;
  endCampaign: (id: string) => void;
  /** Mock: record remediation batch for a completed campaign still missing `revocationSummary`. */
  runRemediation: (id: string) => void;
  removeCampaign: (id: string) => void;
  appendDiEvent: (e: Omit<DirectoryInsightsAccessReviewEvent, 'event_id' | 'timestamp_iso' | 'org_id'>) => void;
  setReviewDecision: (itemId: string, decision: ReviewDecision, justification: string) => void;
}

export function createAccessReviewM1Store(): AccessReviewM1Store {
  const state = reactive({
    globalSettings: { ...defaultGlobalSettings },
    campaigns: [...seedCampaigns] as AccessReviewCampaign[],
    diEvents: [...seedDiEvents] as DirectoryInsightsAccessReviewEvent[],
    reviewQueue: [...seedReviewQueue] as ReviewQueueItem[],
  });

  function updateGlobalSettings(patch: Partial<GlobalAccessReviewSettings>) {
    Object.assign(state.globalSettings, patch);
  }

  function addCampaign(c: AccessReviewCampaign) {
    state.campaigns.unshift(c);
    appendDiEvent({
      category: 'access_review.campaign_created',
      actor: { type: 'admin', id: 'admin_1', display_name: 'Admin IT' },
      resource: { type: 'campaign', id: c.id, name: c.name },
      payload: {
        scope_type: c.scopeType,
        schedule: c.scheduleMode,
      },
    });
  }

  function updateCampaign(c: AccessReviewCampaign) {
    const idx = state.campaigns.findIndex((x) => x.id === c.id);
    if (idx === -1) return;
    state.campaigns.splice(idx, 1, c);
  }

  function getCampaign(id: string) {
    return state.campaigns.find((c) => c.id === id);
  }

  function removeCampaign(id: string) {
    const idx = state.campaigns.findIndex((c) => c.id === id);
    if (idx === -1) return;
    state.campaigns.splice(idx, 1);
    state.reviewQueue = state.reviewQueue.filter((r) => r.campaignId !== id);
  }

  function runRemediation(id: string) {
    const c = getCampaign(id);
    if (!c || c.status !== 'completed' || c.revocationSummary) return;
    const revokedCount = Math.floor(Math.random() * 3) + 1;
    c.revocationSummary = {
      usersRemovedFromApp: c.scopeType === 'application' ? revokedCount : 0,
      usersRemovedFromGroups: c.scopeType === 'group' ? revokedCount : 0,
      completedAt: new Date().toISOString(),
    };
    appendDiEvent({
      category: 'access_review.remediation_executed',
      actor: { type: 'system', id: 'system', display_name: 'Access Reviews' },
      resource: { type: 'campaign', id: c.id, name: c.name },
      payload: {
        removed_app: c.revocationSummary.usersRemovedFromApp,
        removed_group: c.revocationSummary.usersRemovedFromGroups,
      },
    });
  }

  function mockReviewResultsBreakdownForCampaign(c: AccessReviewCampaign): CampaignReviewResultsBreakdown {
    const queueTotal = Math.max(
      1,
      c.reviewers.reduce((max, r) => Math.max(max, r.total), 0),
    );
    const revoked = Math.min(queueTotal, Math.floor(Math.random() * 5) + 1);
    const kept = queueTotal - revoked;
    return { kept, revoked, delegated: 0, pending: 0 };
  }

  function endCampaign(id: string) {
    const c = getCampaign(id);
    if (!c || c.status !== 'in_progress') return;
    c.status = 'completed';
    c.completionPercent = 100;
    c.approvalCompletedAtIso = new Date().toISOString();
    c.reviewResultsBreakdown = mockReviewResultsBreakdownForCampaign(c);
    const revokedCount = Math.floor(Math.random() * 3) + 1;
    c.revocationSummary = {
      usersRemovedFromApp: c.scopeType === 'application' ? revokedCount : 0,
      usersRemovedFromGroups: c.scopeType === 'group' ? revokedCount : 0,
      completedAt: new Date().toISOString(),
    };
    appendDiEvent({
      category: 'access_review.campaign_ended',
      actor: { type: 'admin', id: 'admin_1', display_name: 'Admin IT' },
      resource: { type: 'campaign', id: c.id, name: c.name },
      payload: { manual_termination: true },
    });
    appendDiEvent({
      category: 'access_review.remediation_executed',
      actor: { type: 'system', id: 'system', display_name: 'Access Reviews' },
      resource: { type: 'campaign', id: c.id, name: c.name },
      payload: {
        removed_app: c.revocationSummary.usersRemovedFromApp,
        removed_group: c.revocationSummary.usersRemovedFromGroups,
      },
    });
  }

  function appendDiEvent(
    e: Omit<DirectoryInsightsAccessReviewEvent, 'event_id' | 'timestamp_iso' | 'org_id'>,
  ) {
    const full: DirectoryInsightsAccessReviewEvent = {
      ...e,
      event_id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      timestamp_iso: new Date().toISOString(),
      org_id: 'org_mock_001',
    };
    state.diEvents.unshift(full);
  }

  function setReviewDecision(itemId: string, decision: ReviewDecision, justification: string) {
    const item = state.reviewQueue.find((r) => r.id === itemId);
    if (!item) return;
    item.decision = decision;
    item.justification = justification;
    item.status = 'complete';
    appendDiEvent({
      category: 'access_review.reviewer_decision',
      actor: { type: 'reviewer', id: 'rev_self', display_name: 'You (reviewer)' },
      resource: { type: 'user', id: item.subjectUser.id, name: item.subjectUser.name },
      payload: {
        campaign_id: item.campaignId,
        decision: decision ?? 'none',
        queue_item: itemId,
      },
    });
  }

  return {
    get globalSettings() {
      return readonly(state.globalSettings) as unknown as GlobalAccessReviewSettings;
    },
    get campaigns() {
      return state.campaigns;
    },
    get diEvents() {
      return state.diEvents;
    },
    get reviewQueue() {
      return state.reviewQueue;
    },
    updateGlobalSettings,
    addCampaign,
    updateCampaign,
    getCampaign,
    endCampaign,
    runRemediation,
    removeCampaign,
    appendDiEvent,
    setReviewDecision,
  };
}
