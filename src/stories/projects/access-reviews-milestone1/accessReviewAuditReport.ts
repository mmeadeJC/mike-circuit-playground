import type { AccessReviewCampaign } from './types';
import { mockCampaignReviewUserRows } from './mockData';

export interface AuditReportReviewerLine {
  name: string;
  role: string;
  decisionRecordedUtc: string;
  directoryInsightsLogId: string;
  comment: string | null;
}

export interface AuditReportGroupOutcome {
  accessTarget: string;
  decision: 'keep' | 'revoke';
  status: 'completed';
  reviewers: AuditReportReviewerLine[];
  finalExecutedUtc: string;
  finalLogId: string;
}

export interface AuditReportUserSection {
  name: string;
  email: string;
  company: string;
  department: string;
  title: string;
  manager: string;
  subjectDecidedAtUtc: string;
  outcomes: AuditReportGroupOutcome[];
}

export interface AccessReviewAuditReportPayload {
  campaignId: string;
  campaignName: string;
  generatedAtIso: string;
  generatedAtDisplayUtc: string;
  algorithm: 'SHA-256';
  integrityDescription: string;
  outcomesDescription: string;
  users: AuditReportUserSection[];
}

function formatUtcMedium(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return (
    d.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    }) + ' UTC'
  );
}

/** Deterministic short suffix for mock Directory Insights IDs (playground). */
function diSuffix(seed: string): string {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) & 0xffff).toString(16).toUpperCase().padStart(4, '0');
}

function makeDirectoryInsightsLogId(kind: 'AUD' | 'REV', seed: string, iso: string): string {
  const d = new Date(iso);
  const y = d.getUTCFullYear();
  const mo = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  const ss = String(d.getUTCSeconds()).padStart(2, '0');
  return `DI-${kind}-${y}${mo}${day}${hh}${mm}${ss}-${diSuffix(seed)}`;
}

function parseDisplayDateToIso(display: string | null | undefined, fallbackIso: string): string {
  if (!display?.trim()) return fallbackIso;
  const tryParsed = Date.parse(display);
  if (!Number.isNaN(tryParsed)) return new Date(tryParsed).toISOString();
  return fallbackIso;
}

/**
 * Canonical string hashed as SHA-256 for the integrity row (metadata + outcome keys).
 * Excludes human-readable labels so the hash is stable for the same campaign snapshot.
 */
export function buildCanonicalReportPayloadForHash(payload: AccessReviewAuditReportPayload): string {
  const compact = {
    campaignId: payload.campaignId,
    generatedAtIso: payload.generatedAtIso,
    algorithm: payload.algorithm,
    users: payload.users.map((u) => ({
      email: u.email,
      subjectDecidedAtUtc: u.subjectDecidedAtUtc,
      outcomes: u.outcomes.map((o) => ({
        accessTarget: o.accessTarget,
        decision: o.decision,
        finalLogId: o.finalLogId,
        reviewerLogIds: o.reviewers.map((r) => r.directoryInsightsLogId),
      })),
    })),
  };
  return JSON.stringify(compact);
}

export async function sha256HexUtf8(text: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Array.from({ length: 32 }, (_, i) => {
    h = Math.imul(h ^ (i + text.length), 0x01000193);
    return ((h >>> 0) & 0xff).toString(16).padStart(2, '0');
  }).join('');
}

export function buildAccessReviewAuditReport(campaign: AccessReviewCampaign): AccessReviewAuditReportPayload {
  const generatedAtIso =
    campaign.approvalCompletedAtIso?.trim() ||
    campaign.revocationSummary?.completedAt ||
    new Date().toISOString();

  const rows = mockCampaignReviewUserRows(campaign);

  const users: AuditReportUserSection[] = rows.map((row, userIdx) => {
    const fallbackDecidedIso = parseDisplayDateToIso(row.decidedAtDisplay, generatedAtIso);
    const meta = row.expandedMeta;

    const outcomes: AuditReportGroupOutcome[] = row.groupDetails.map((g, gIdx) => {
      const decision = g.groupDecision === 'revoke' ? 'revoke' : 'keep';
      const reviewers: AuditReportReviewerLine[] = g.approvers.map((a, aIdx) => {
        const recordedIso = parseDisplayDateToIso(a.decidedAtDisplay, fallbackDecidedIso);
        const seed = `${campaign.id}|${row.id}|${g.groupName}|${a.name}|${aIdx}`;
        return {
          name: a.name,
          role: a.role,
          decisionRecordedUtc: formatUtcMedium(recordedIso),
          directoryInsightsLogId: makeDirectoryInsightsLogId('AUD', seed, recordedIso),
          comment: a.justification ?? null,
        };
      });

      const lastIso = g.approvers.length
        ? parseDisplayDateToIso(
            g.approvers[g.approvers.length - 1]?.decidedAtDisplay,
            fallbackDecidedIso,
          )
        : fallbackDecidedIso;

      const finalSeed = `${campaign.id}|${row.id}|${g.groupName}|final|${gIdx}|${userIdx}`;
      const finalLogId = makeDirectoryInsightsLogId('REV', finalSeed, lastIso);

      return {
        accessTarget: g.groupName,
        decision,
        status: 'completed' as const,
        reviewers,
        finalExecutedUtc: formatUtcMedium(lastIso),
        finalLogId,
      };
    });

    return {
      name: row.name,
      email: row.email,
      company: 'JumpCloud Demo Organization',
      department: row.department,
      title: userIdx % 2 === 0 ? 'Individual Contributor' : 'Senior Analyst',
      manager: meta?.managerName ?? '—',
      subjectDecidedAtUtc: formatUtcMedium(fallbackDecidedIso),
      outcomes,
    };
  });

  return {
    campaignId: campaign.id,
    campaignName: campaign.name,
    generatedAtIso,
    generatedAtDisplayUtc: formatUtcMedium(generatedAtIso),
    algorithm: 'SHA-256',
    integrityDescription:
      'This snapshot was generated at the time below. The document hash is computed over the canonical report payload (campaign metadata, review rows, and audit identifiers) for tamper detection.',
    outcomesDescription:
      'Each user begins with an identity row, followed by one row per access target (group or application) reviewed. Multiple reviewers may appear for the same target when your completion policy requires it.',
    users,
  };
}

export function formatAuditReportAsPlainText(payload: AccessReviewAuditReportPayload, documentHash: string): string {
  const lines: string[] = [
    'ACCESS REVIEW — AUDIT REPORT',
    `Campaign: ${payload.campaignName}`,
    `Campaign ID: ${payload.campaignId}`,
    '',
    'Report generation & integrity',
    `Generated at: ${payload.generatedAtDisplayUtc}`,
    `Algorithm: ${payload.algorithm}`,
    `Document hash: ${documentHash}`,
    '',
    'Review outcomes by user and group',
    '',
  ];

  for (const u of payload.users) {
    lines.push(`${u.name} · ${u.email}`);
    lines.push(`  Company: ${u.company}`);
    lines.push(`  Department: ${u.department}`);
    lines.push(`  Title: ${u.title}`);
    lines.push(`  Manager: ${u.manager}`);
    lines.push(`  Subject decided at: ${u.subjectDecidedAtUtc}`);
    for (const o of u.outcomes) {
      lines.push(`  — ${o.accessTarget} [${o.decision.toUpperCase()}]`);
      lines.push(`    Final execution: ${o.finalExecutedUtc}  Log: ${o.finalLogId}`);
      for (const r of o.reviewers) {
        lines.push(`    Reviewer: ${r.name} (${r.role}) @ ${r.decisionRecordedUtc}`);
        lines.push(`    Directory Insights log ID: ${r.directoryInsightsLogId}`);
        if (r.comment) lines.push(`    Comment: ${r.comment}`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}
