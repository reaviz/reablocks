import { readFileSync, writeFileSync } from 'fs';
import fg from 'fast-glob';
import { resolve } from 'path';
// import { parse } from 'react-docgen-typescript';
import { parse } from 'react-docgen';

/**
 * Builds the doc types.
 */
function buildDocs() {
  const files = fg.sync('src/**/!(*.story).tsx');

  const result = [];
  let count = 0;
  let fail = 0;

  files.forEach((file) => {
    console.log('Reading', file);

    try {
      const code = readFileSync(file, { encoding: 'utf-8' });
      const documentation = parse(code, { reactDocgen: 'react-docgen' });
      if (documentation) {
        result.push(...documentation);
        count++;
      }
    } catch (e) {
      fail++;
      console.error('Error reading', file, e);
    }
  });

  const fileName = resolve('dist', 'stories', 'docs.json');
  writeFileSync(fileName, JSON.stringify(result, null, 2));

  console.info('Docs created!', fileName);
  console.info('Failed:', fail);
  console.info('Total Doc:', count);
}

buildDocs();
