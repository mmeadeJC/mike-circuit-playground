import { computed, reactive, ref, type Ref } from 'vue';
import type { AllowedAiClient } from '../shared/types';
import { computeOriginPreview, defaultSnapshot } from '../allowed-ai-clients/allowedAiClientOrigin';
import { pushRedirectUrlsSavedToast, type ToastAdd } from '../shared/allowedAiClientToasts';

export interface RedirectURLDraftRow {
  key: string;
  url: string;
  sourceId?: number;
}

/** Rows that matter for dirty check: existing rows always (incl. cleared URL = delete intent); new rows only if they have text. */
function serializeForDirtyCheck(rows: RedirectURLDraftRow[]): string {
  const significant = rows
    .filter((r) => r.sourceId != null || r.url.trim().length > 0)
    .map((r) => ({ url: r.url.trim(), sourceId: r.sourceId ?? null }));
  return JSON.stringify(significant);
}

function cloneRows(rows: RedirectURLDraftRow[]): RedirectURLDraftRow[] {
  return rows.map((r) => ({ key: r.key, url: r.url, sourceId: r.sourceId }));
}

export function createAllowedClientFromRedirectUrl(url: string, id: number): AllowedAiClient {
  const trimmed = url.trim();
  const withProtocol = /^[a-zA-Z][a-zA-Z\d+.-]*:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const u = new URL(withProtocol);
    const protocol = u.protocol === 'http:' ? ('http' as const) : ('https' as const);
    const snapshot = {
      ...defaultSnapshot('single_domain'),
      mode: 'single_domain' as const,
      protocol,
      singleHost: u.hostname,
      singlePort: u.port || '',
      note: '',
    };
    const origin =
      trimmed.startsWith('http://') || trimmed.startsWith('https://') ? trimmed : u.href.replace(/\/$/, '') || trimmed;
    return {
      id,
      kind: 'single_domain',
      origin,
      createdAt: new Date().toISOString(),
      snapshot,
    };
  } catch {
    const snapshot = {
      ...defaultSnapshot('pattern'),
      mode: 'pattern' as const,
      protocol: 'https' as const,
      patternValue: trimmed.replace(/^https?:\/\//, ''),
      note: '',
    };
    return {
      id,
      kind: 'pattern',
      origin: computeOriginPreview(snapshot) || trimmed,
      createdAt: new Date().toISOString(),
      snapshot,
    };
  }
}

function mergeUpdatedClient(prev: AllowedAiClient, url: string): AllowedAiClient {
  const built = createAllowedClientFromRedirectUrl(url, prev.id);
  return {
    ...built,
    createdAt: prev.createdAt,
    note: prev.note,
  };
}

export function useAgent0RedirectURLSettings(allowedAiClients: Ref<AllowedAiClient[]>) {
  const draftRows = ref<RedirectURLDraftRow[]>([]);
  const baselineRows = ref<RedirectURLDraftRow[]>([]);
  const isSaving = ref(false);
  const isSaved = ref(false);

  function resetDraftFromClients() {
    draftRows.value = allowedAiClients.value.map((c) => ({
      key: crypto.randomUUID(),
      url: c.origin,
      sourceId: c.id,
    }));
    baselineRows.value = cloneRows(draftRows.value);
    isSaved.value = false;
  }

  const isDirty = computed(
    () => serializeForDirtyCheck(draftRows.value) !== serializeForDirtyCheck(baselineRows.value),
  );

  function setRowUrl(key: string, url: string) {
    const row = draftRows.value.find((r) => r.key === key);
    if (row) row.url = url;
  }

  function removeRow(key: string) {
    draftRows.value = draftRows.value.filter((r) => r.key !== key);
  }

  function addRow(): string {
    const key = crypto.randomUUID();
    draftRows.value.unshift({ key, url: '' });
    return key;
  }

  function discard() {
    draftRows.value = cloneRows(baselineRows.value);
  }

  function save(toastAdd: ToastAdd) {
    isSaving.value = true;
    setTimeout(() => {
      const nonEmpty = draftRows.value
        .map((r) => ({ ...r, url: r.url.trim() }))
        .filter((r) => r.url.length > 0);

      const prevById = new Map(allowedAiClients.value.map((c) => [c.id, c]));
      let nextId =
        allowedAiClients.value.length === 0 ? 1 : Math.max(...allowedAiClients.value.map((c) => c.id)) + 1;
      const next: AllowedAiClient[] = [];

      for (const row of nonEmpty) {
        if (row.sourceId != null && prevById.has(row.sourceId)) {
          next.push(mergeUpdatedClient(prevById.get(row.sourceId)!, row.url));
        } else {
          next.push(createAllowedClientFromRedirectUrl(row.url, nextId));
          nextId += 1;
        }
      }

      allowedAiClients.value = next;
      const newDraft = next.map((c) => ({
        key: crypto.randomUUID(),
        url: c.origin,
        sourceId: c.id,
      }));
      baselineRows.value = cloneRows(newDraft);
      draftRows.value = cloneRows(newDraft);

      isSaving.value = false;
      isSaved.value = true;
      pushRedirectUrlsSavedToast(toastAdd);
      setTimeout(() => {
        isSaved.value = false;
      }, 2000);
    }, 400);
  }

  return reactive({
    draftRows,
    isDirty,
    isSaving,
    isSaved,
    resetDraftFromClients,
    setRowUrl,
    removeRow,
    addRow,
    discard,
    save,
  });
}
