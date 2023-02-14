import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss-modules';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json' assert { type: 'json' };
import postCssNested from 'postcss-nested';
import postCssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default [
  {
    input: pkg.source,
    output: [
      {
        sourcemap: true,
        file: pkg.browser,
        format: 'umd',
        name: 'reablocks'
      },
      {
        sourcemap: true,
        file: pkg.main,
        format: 'cjs',
        name: 'reablocks'
      },
      {
        sourcemap: true,
        file: pkg.module,
        format: 'esm'
      }
    ],
    plugins: [
      external({
        includeDependencies: true
      }),
      postcss.default({
        // extract: true,
        modules: true,
        // writeDefinitions: true,
        plugins: [
          postCssNested,
          postCssPresetEnv({ stage: 1 }),
          autoprefixer
        ]
      }),
      typescript({
        clean: true,
        exclude: [
          '*.scss',
          '*.css',
          '*.test.js',
          '*.test.ts',
          '*.test.tsx',
          '*.d.ts',
          '**/*.d.ts',
          '**/*.story.tsx'
        ]
      }),
      resolve(),
      commonjs(),
      sourceMaps()
    ]
  }
];
