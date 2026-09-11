import type { App } from 'vue';

const MODAL_ROOT_ATTR = 'data-circuit-modal-root';

/**
 * Circuit components that teleport (PageSaveBar, ToastNotification, ...) resolve their
 * target through `useContainer()`, which looks for `[data-circuit-modal-root]` matching the
 * app uid and otherwise falls back to the string "self". "self" is not a valid selector, so
 * without this element the component silently never renders.
 *
 * Must run before `app.mount()` so the element exists during component setup.
 */
export function registerCircuitModalRoot(app: App): HTMLElement {
  removeCircuitModalRoots();

  const root = document.createElement('div');
  root.setAttribute(MODAL_ROOT_ATTR, '');
  root.setAttribute('data-circuit-app-uid', String((app as { _uid?: number })._uid));
  document.body.appendChild(root);

  return root;
}

/** Demos that remount create a new app uid, so stale roots must not linger. */
export function removeCircuitModalRoots(): void {
  document.querySelectorAll(`[${MODAL_ROOT_ATTR}]`).forEach((node) => node.remove());
}
