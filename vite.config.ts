import { defineConfig, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import dts from 'vite-plugin-dts';

import { name } from './package.json';

const devConfig: UserConfig = {
  plugins: [vue(), vueJsx()],
  root: './playground',
};

const buildConfig: UserConfig = {
  plugins: [
    vue(), //
    vueJsx(),
    dts({
      include: ['src'],
      exclude: ['playground', 'node_modules', 'dist'],
      outputDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'lib.ts'),
      name: 'Lister',
      formats: ['es', 'umd', 'iife'],
      fileName: name,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};

export default defineConfig((config) => (config.mode === 'production' ? buildConfig : devConfig));
