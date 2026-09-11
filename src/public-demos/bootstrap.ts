import { createApp, type Component } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import circuitConfig from '@jumpcloud/circuit/primevue';
import '@/assets/main.css';

export function mountDemo(component: Component) {
  document.documentElement.setAttribute('data-theme', 'circuit-light');
  document.body.classList.add('bg-neutral-base');

  const app = createApp(component);
  app.use(PrimeVue, { ...circuitConfig, theme: 'none' });
  app.use(ToastService);
  app.directive('tooltip', Tooltip);
  app.config.globalProperties.$testId = (suffix: string) => suffix;

  // Teleport target for PageSaveBar, ToastNotification, etc. Must live on body so overlays
  // like Drawer (also portaled to body) do not cover the floating save bar.
  const uid = (app as { _uid?: number })._uid;
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('data-circuit-modal-root', '');
  modalRoot.setAttribute('data-circuit-app-uid', String(uid));
  document.body.appendChild(modalRoot);

  app.mount('#app');
}
