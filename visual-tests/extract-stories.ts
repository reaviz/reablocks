/**
 * Extracts story metadata from a running Storybook instance.
 * Outputs a JSON file that the Playwright visual tests consume.
 *
 * Usage: npx tsx visual-tests/extract-stories.ts [storybook-url]
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STORYBOOK_URL = process.argv[2] || 'http://localhost:6006';
const OUTPUT = resolve(__dirname, 'stories.json');

interface StoryIndex {
  entries: Record<
    string,
    { id: string; title: string; name: string; type: string }
  >;
}

async function main() {
  console.log(`Connecting to Storybook at ${STORYBOOK_URL}...`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Storybook serves its story index at /index.json
  const response = await page.goto(`${STORYBOOK_URL}/index.json`);
  if (!response || !response.ok()) {
    throw new Error(
      `Failed to fetch story index: ${response?.status()} ${response?.statusText()}`
    );
  }

  const index: StoryIndex = await response.json();
  const stories = Object.values(index.entries)
    .filter(entry => entry.type === 'story')
    .map(({ id, title, name }) => ({ id, title, name }));

  writeFileSync(OUTPUT, JSON.stringify(stories, null, 2));
  console.log(`Extracted ${stories.length} stories → ${OUTPUT}`);

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
