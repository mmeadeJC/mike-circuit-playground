import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import circuitConfig from '@jumpcloud/circuit/primevue';
import '@/assets/main.css';
// @ts-expect-error — resolved by the virtual module plugin at build time
import Component from 'virtual:demo-component';

document.documentElement.setAttribute('data-theme', 'circuit-light');
document.body.classList.add('bg-neutral-base');

const app = createApp(Component);
app.use(PrimeVue, { ...circuitConfig, theme: 'none' });
app.use(ToastService);
app.directive('tooltip', Tooltip);
app.config.globalProperties.$testId = (suffix: string) => suffix;
app.mount('#app');
