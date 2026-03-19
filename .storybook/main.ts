import type { StorybookConfig } from '@storybook/vue3-vite';
import { loadEnv } from 'vite';
import { resolve } from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  viteFinal: (config) => {
    config.base = './';

    const projectRoot = resolve(__dirname, '..');

    // Stub chart.js/auto so PrimeVue Chart doesn't break the build when chart.js isn't installed
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'chart.js/auto': resolve(__dirname, 'chart-stub.js'),
    };
    const env = loadEnv('', projectRoot, '');

    config.define = {
      ...config.define,
      'import.meta.env.VITE_JUMPCLOUD_API_KEY': JSON.stringify(
        env.JUMPCLOUD_API_KEY ?? '',
      ),
    };

    config.server = {
      ...config.server,
      proxy: {
        '/jcapi/v1': {
          target: 'https://console.jumpcloud.com',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/jcapi\/v1/, '/api'),
        },
        '/jcapi/v2': {
          target: 'https://console.jumpcloud.com',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/jcapi\/v2/, '/api/v2'),
        },
        '/jcapi/insights': {
          target: 'https://api.jumpcloud.com',
          changeOrigin: true,
          rewrite: (path: string) =>
            path.replace(/^\/jcapi\/insights/, '/insights/directory/v1'),
        },
      },
    };

    return config;
  },
};

export default config;
