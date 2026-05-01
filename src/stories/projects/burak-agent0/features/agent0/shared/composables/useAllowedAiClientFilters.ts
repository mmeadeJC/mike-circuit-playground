import { computed, ref, type Ref } from 'vue';
import {
  ALLOWED_AI_CLIENT_KIND_ORDER,
  getAllowedAiClientKindLabel,
} from '../allowedAiClientOriginKindLabels';
import type { AllowedAiClient, AllowedAiClientOriginKind } from '../types';

export interface AllowedAiClientFilterChip {
  id: string;
  key: string;
  operator: string;
  value: string;
}

function formatGroupedValues(values: string[], maxVisible = 2): string {
  if (values.length <= maxVisible) return values.join(', ');
  return `${values.slice(0, maxVisible).join(', ')}, +${values.length - maxVisible}`;
}

export function useAllowedAiClientFilters(sourceDataRef: Ref<AllowedAiClient[]>) {
  const searchQuery = ref('');
  const showFilterDialog = ref(false);

  const appliedKinds = ref<AllowedAiClientOriginKind[]>([]);
  const draftKinds = ref<AllowedAiClientOriginKind[]>([]);

  const kindOptions = ALLOWED_AI_CLIENT_KIND_ORDER.map((k) => ({
    label: getAllowedAiClientKindLabel(k),
    value: k,
  }));

  const activeFilterChips = computed<AllowedAiClientFilterChip[]>(() => {
    const chips: AllowedAiClientFilterChip[] = [];
    if (appliedKinds.value.length > 0) {
      const labels = appliedKinds.value.map((k) => getAllowedAiClientKindLabel(k));
      chips.push({
        id: 'kind',
        key: 'Match type',
        operator: 'is',
        value: formatGroupedValues(labels),
      });
    }
    return chips;
  });

  const activeFilterCount = computed(() => (appliedKinds.value.length > 0 ? 1 : 0));

  const filteredAllowedAiClientsData = computed(() => {
    let data = [...sourceDataRef.value];

    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      data = data.filter(
        (entry) =>
          entry.origin.toLowerCase().includes(q) ||
          (entry.note ?? '').toLowerCase().includes(q) ||
          getAllowedAiClientKindLabel(entry.kind).toLowerCase().includes(q),
      );
    }

    if (appliedKinds.value.length > 0) {
      data = data.filter((e) => appliedKinds.value.includes(e.kind));
    }

    return data;
  });

  function handleSearch(query: string) {
    searchQuery.value = query;
  }

  function openFilterDialog() {
    draftKinds.value = [...appliedKinds.value];
    showFilterDialog.value = true;
  }

  function applyFilters() {
    appliedKinds.value = [...draftKinds.value];
    showFilterDialog.value = false;
  }

  function cancelFilterDialog() {
    showFilterDialog.value = false;
  }

  function clearDraftFilters() {
    draftKinds.value = [];
  }

  function clearAllFilters() {
    appliedKinds.value = [];
    draftKinds.value = [];
  }

  function removeFilterChip(chip: { id?: string }) {
    if (chip.id === 'kind') {
      appliedKinds.value = [];
    }
  }

  const draftFilterCount = computed(() => (draftKinds.value.length > 0 ? 1 : 0));

  return {
    searchQuery,
    showFilterDialog,
    draftKinds,
    kindOptions,
    activeFilterChips,
    activeFilterCount,
    filteredAllowedAiClientsData,
    handleSearch,
    openFilterDialog,
    applyFilters,
    cancelFilterDialog,
    clearDraftFilters,
    clearAllFilters,
    removeFilterChip,
    draftFilterCount,
  };
}
