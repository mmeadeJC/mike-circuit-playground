import { markRaw } from 'vue';
import { DataTableCellText, DataTableCellStatus } from '@jumpcloud/circuit/components';
import AllowedAiClientActionsCell from '../../allowed-ai-clients/AllowedAiClientActionsCell.vue';
import type { AllowedAiClientOriginKind } from '../types';
import { formatListedDateTime } from '../formatListedDateTime';

const KIND_LABELS: Record<AllowedAiClientOriginKind, string> = {
  single_domain: 'Single domain',
  pattern: 'Pattern',
  local_dev: 'Local development',
  custom_protocol: 'Custom protocol',
};

/** Categorical Tag severities; custom protocol uses neutral default (secondary). */
const KIND_SEVERITY: Record<AllowedAiClientOriginKind, string> = {
  single_domain: 'accent-aster',
  pattern: 'accent-purple',
  local_dev: 'accent-coral',
  custom_protocol: 'secondary',
};

export interface AllowedAiClientColumnHandlers {
  onEdit?: (row: Record<string, unknown>) => void;
  onDelete?: (row: Record<string, unknown>) => void;
}

export function getAllowedAiClientColumns(handlers?: AllowedAiClientColumnHandlers) {
  return [
    {
      field: 'origin',
      header: 'Client origin',
      sortable: true,
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.origin,
      }),
    },
    {
      field: 'kind',
      header: 'Match type',
      sortable: true,
      width: '180px',
      component: markRaw(DataTableCellStatus),
      componentProps: (sp: { data: Record<string, unknown> }) => {
        const kind = sp.data.kind as AllowedAiClientOriginKind;
        return {
          label: KIND_LABELS[kind] ?? String(kind),
          severity: KIND_SEVERITY[kind] ?? 'secondary',
          shouldShowDefaultIcon: false,
        };
      },
    },
    {
      field: 'note',
      header: 'Note',
      sortable: true,
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: (sp.data.note as string)?.trim() ? sp.data.note : '—',
      }),
    },
    {
      field: 'createdAt',
      header: 'Created at',
      sortable: true,
      width: '200px',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => {
        const raw = String(sp.data.createdAt ?? '').trim();
        const label = raw ? formatListedDateTime(raw) : '—';
        return { label: label.trim() ? label : '—' };
      },
    },
    {
      field: 'actions',
      header: '',
      width: '112px',
      component: markRaw(AllowedAiClientActionsCell),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        onEdit: () => handlers?.onEdit?.(sp.data),
        onDelete: () => handlers?.onDelete?.(sp.data),
      }),
    },
  ];
}
