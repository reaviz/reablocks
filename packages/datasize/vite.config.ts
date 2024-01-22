import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    svgrPlugin(),
    tsconfigPaths(),
    cssInjectedByJsPlugin(),
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src']
    }),
    checker({
      typescript: true
    })
  ],
  build: {
    minify: false,
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'reablocks_datasize',
      fileName: 'index'
    },
    rollupOptions: {
      plugins: [
        external({
          includeDependencies: true
        })
      ]
    }
  }
});
