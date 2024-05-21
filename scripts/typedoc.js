import { transform } from 'typedoc-better-json';
import { writeFile, readFile } from 'node:fs/promises';
import TypeDoc from 'typedoc';

async function buildTypes() {
  // init typedoc
  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ['src/index.ts'],
  });

  // build the project
  const project = await app.convert();

  // generate the json
  await app.generateJson(project, 'dist/typedoc.json');

  // read the JSON file generated by typedoc
  const fileContent = await readFile('dist/typedoc.json', 'utf8');

  // parse it
  const fileData = JSON.parse(fileContent);

  // transform it
  const transformedData = transform(fileData);

  // save it in file
  await writeFile(
    'dist/typedoc.json',
    JSON.stringify(transformedData, null, 2),
  );
}

buildTypes();