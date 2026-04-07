import type { ToastMessageOptions } from 'primevue/toast';

export type ToastAdd = (message: ToastMessageOptions) => void;

export function pushAllowedAiClientAddedToast(add: ToastAdd) {
  add({
    severity: 'success',
    summary: 'AI client added',
    detail: 'The allowed AI client was added.',
    life: 5000,
  });
}

export function pushAllowedAiClientUpdatedToast(add: ToastAdd) {
  add({
    severity: 'success',
    summary: 'AI client updated',
    detail: 'The allowed AI client was saved.',
    life: 5000,
  });
}

export function pushAllowedAiClientRemovedToast(add: ToastAdd) {
  add({
    severity: 'success',
    summary: 'AI client removed',
    detail: 'The selected allowed AI client(s) were removed.',
    life: 5000,
  });
}
