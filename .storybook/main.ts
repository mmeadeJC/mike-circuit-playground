// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from '@storybook/vue3-vite';
import { loadEnv } from 'vite';
import { resolve, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  viteFinal: (config) => {
    config.base = './';

    const projectRoot = resolve(__dirname, '..');
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
