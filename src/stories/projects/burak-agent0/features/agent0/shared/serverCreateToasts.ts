import type { ToastMessageOptions } from 'primevue/toast';

/** Server toast copy for ToastNotification + useToast. */

export const serverCreatedToast: ToastMessageOptions = {
  severity: 'success',
  summary: 'Server created',
  detail: 'Your server has been created successfully.',
  life: 5000,
};

export const serverSavedToast: ToastMessageOptions = {
  severity: 'success',
  summary: 'Server saved',
  detail: 'The server was saved successfully.',
  life: 5000,
};

export const serverDeletedToast: ToastMessageOptions = {
  severity: 'success',
  summary: 'Server deleted',
  detail: 'The server was deleted successfully.',
  life: 5000,
};

export const serverCreateFailedToast: ToastMessageOptions = {
  severity: 'error',
  summary: 'Something went wrong',
  detail: "We couldn't create the server. Please try again.",
  life: 5000,
};

export type ToastAdd = (message: ToastMessageOptions) => void;

export function pushServerCreatedToast(add: ToastAdd) {
  add({ ...serverCreatedToast });
}

export function pushServerSavedToast(add: ToastAdd) {
  add({ ...serverSavedToast });
}

export function pushServerDeletedToast(add: ToastAdd) {
  add({ ...serverDeletedToast });
}

export function pushServerCreateFailedToast(add: ToastAdd) {
  add({ ...serverCreateFailedToast });
}
