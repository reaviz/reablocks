/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig(({ mode }) =>
  mode === 'library'
    ? {
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
        }),
        viteStaticCopy({
          targets: [
            {
              src: 'src/**/*.story.tsx',
              dest: 'stories/'
            },
            {
              src: 'docs/blocks/**/*.story.tsx',
              dest: 'blocks/'
            }
          ]
        })
      ],
      test: {
        globals: true,
        environment: 'jsdom'
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
      build: {
        minify: false,
        sourcemap: true,
        copyPublicDir: false,
        lib: {
          entry: resolve('src', 'index.ts'),
          name: 'reablocks',
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
    }
    : {
      plugins: [
        svgrPlugin(),
        tsconfigPaths(),
        react(),
        checker({
          typescript: true
        })
      ],
      test: {
        globals: true,
        environment: 'jsdom'
      }
    }
);
