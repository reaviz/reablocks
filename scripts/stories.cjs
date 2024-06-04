const fs = require('fs');
const fg = require('fast-glob');
const { rewritePaths } = require('typescript-rewrite-paths');
const path = require('path');

/**
 * Replace all the paths in the stories from `./Block` to `reablocks`
 */
function replacePaths() {
  // Grep all the stories
  const files = fg.sync(['dist/stories/*.tsx', 'dist/blocks/*.tsx']);

  files.forEach((file) => {
    const code = fs.readFileSync(file, { encoding: 'utf-8' });

    const output = rewritePaths(code, path => {
      if (path.startsWith('./') || path.startsWith('../') || path.startsWith('@/')) {
        console.info(`Replacing ${path} with reablocks`);
        return 'reablocks';
      }

      return path;
    });

    fs.writeFileSync(file, output);
  });
}

replacePaths();
