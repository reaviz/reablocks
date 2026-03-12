import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface StoryEntry {
  id: string;
  title: string;
  name: string;
}

const stories: StoryEntry[] = JSON.parse(
  readFileSync(resolve(__dirname, 'stories.json'), 'utf-8')
);

for (const story of stories) {
  test(`${story.title} / ${story.name}`, async ({ page }) => {
    const storyUrl = `/iframe.html?id=${story.id}&viewMode=story`;
    await page.goto(storyUrl);

    // Wait for the story to render — Storybook sets #storybook-root
    const root = page.locator('#storybook-root');
    await root.waitFor({ state: 'visible', timeout: 10_000 });

    // Give animations/fonts a moment to settle
    await page.waitForTimeout(500);

    // Disable animations for deterministic screenshots
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
      `
    });

    await expect(page).toHaveScreenshot(`${story.id}.png`, {
      fullPage: true
    });
  });
}
