const fs = require('fs');
const fg = require('fast-glob');
const { rewritePaths } = require('typescript-rewrite-paths');
const path = require('path');

/**
 * Replace all the paths in the stories from `./Block` to `reablocks`
 */
function replacePaths() {
  // Grep all the stories
  const files = fg.sync('docs/blocks/**/*.tsx');

  files.forEach((file) => {
    const code = fs.readFileSync(file, { encoding: 'utf-8' });

    const output = rewritePaths(code, path => {
      if (path.startsWith('./') || path.startsWith('../')) {
        console.info(`Replacing ${path} with reablocks`);
        return 'reablocks';
      }

      return path;
    });

    const newPath = path.resolve('dist', 'blocks', path.basename(file));
    const dir = path.dirname(newPath);

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(newPath, output);
  });
}

replacePaths();
