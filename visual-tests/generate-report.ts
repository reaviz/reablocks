/**
 * Generates an HTML visual regression report from Playwright test results.
 *
 * Usage: npx tsx visual-tests/generate-report.ts
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { resolve, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const RESULTS_FILE = resolve(__dirname, 'results.json');
const SCREENSHOTS_DIR = resolve(__dirname, 'screenshots');
const TEST_RESULTS_DIR = resolve(__dirname, 'test-results');
const OUTPUT = resolve(__dirname, 'report.html');

interface TestRun {
  status: 'passed' | 'failed' | 'skipped' | 'timedOut';
  duration: number;
  errors: Array<{ message?: string }>;
}

interface Spec {
  title: string;
  ok: boolean;
  tests: Array<{
    projectName: string;
    expectedStatus: string;
    results: TestRun[];
  }>;
}

interface Suite {
  title: string;
  file: string;
  specs: Spec[];
  suites?: Suite[];
}

interface PlaywrightResults {
  suites: Suite[];
  stats: {
    startTime: string;
    duration: number;
    expected: number;
    unexpected: number;
    flaky: number;
    skipped: number;
  };
}

interface FlatResult {
  title: string;
  status: 'passed' | 'failed' | 'skipped' | 'timedOut';
  duration: number;
  error?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toPosixPath(p: string): string {
  return p.split('\\').join('/');
}

function collectResults(suites: Suite[]): FlatResult[] {
  const results: FlatResult[] = [];
  for (const suite of suites) {
    for (const spec of suite.specs) {
      for (const test of spec.tests) {
        const lastResult = test.results[test.results.length - 1];
        if (lastResult) {
          results.push({
            title: spec.title,
            status: lastResult.status,
            duration: lastResult.duration,
            error: lastResult.errors?.[0]?.message
          });
        }
      }
    }
    if (suite.suites) {
      results.push(...collectResults(suite.suites));
    }
  }
  return results;
}

function findDiffImages(): Map<
  string,
  { actual: string; expected: string; diff: string }
> {
  const diffs = new Map<
    string,
    { actual: string; expected: string; diff: string }
  >();

  if (!existsSync(TEST_RESULTS_DIR)) return diffs;

  function walk(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = resolve(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('-actual.png')) {
        const key = entry.name.replace('-actual.png', '');
        const relPath = toPosixPath(relative(__dirname, dir));
        if (!diffs.has(key))
          diffs.set(key, { actual: '', expected: '', diff: '' });
        diffs.get(key)!.actual = `${relPath}/${entry.name}`;
      } else if (entry.name.endsWith('-expected.png')) {
        const key = entry.name.replace('-expected.png', '');
        const relPath = toPosixPath(relative(__dirname, dir));
        if (!diffs.has(key))
          diffs.set(key, { actual: '', expected: '', diff: '' });
        diffs.get(key)!.expected = `${relPath}/${entry.name}`;
      } else if (entry.name.endsWith('-diff.png')) {
        const key = entry.name.replace('-diff.png', '');
        const relPath = toPosixPath(relative(__dirname, dir));
        if (!diffs.has(key))
          diffs.set(key, { actual: '', expected: '', diff: '' });
        diffs.get(key)!.diff = `${relPath}/${entry.name}`;
      }
    }
  }

  walk(TEST_RESULTS_DIR);
  return diffs;
}

function countScreenshots(): number {
  if (!existsSync(SCREENSHOTS_DIR)) return 0;
  let count = 0;
  function walk(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(resolve(dir, entry.name));
      else if (entry.name.endsWith('.png')) count++;
    }
  }
  walk(SCREENSHOTS_DIR);
  return count;
}

function main() {
  if (!existsSync(RESULTS_FILE)) {
    console.log('No results.json found. Run visual tests first.');
    console.log('  npm run test:visual');
    process.exit(1);
  }

  const raw = JSON.parse(
    readFileSync(RESULTS_FILE, 'utf-8')
  ) as PlaywrightResults;
  const allResults = collectResults(raw.suites);
  const diffs = findDiffImages();
  const baselineCount = countScreenshots();

  const passed = allResults.filter(s => s.status === 'passed').length;
  const failed = allResults.filter(s => s.status === 'failed').length;
  const skipped = allResults.filter(s => s.status === 'skipped').length;
  const total = allResults.length;
  const duration = (raw.stats.duration / 1000).toFixed(1);

  const diffRows = Array.from(diffs.entries())
    .map(
      ([key, imgs]) => `
      <tr class="diff-row">
        <td>${escapeHtml(key)}</td>
        <td>${imgs.expected ? `<img src="${escapeHtml(imgs.expected)}" class="thumb" onclick="showModal(this.src)">` : '&mdash;'}</td>
        <td>${imgs.actual ? `<img src="${escapeHtml(imgs.actual)}" class="thumb" onclick="showModal(this.src)">` : '&mdash;'}</td>
        <td>${imgs.diff ? `<img src="${escapeHtml(imgs.diff)}" class="thumb" onclick="showModal(this.src)">` : '&mdash;'}</td>
      </tr>`
    )
    .join('\n');

  const failedRows = allResults
    .filter(s => s.status === 'failed')
    .map(
      s => `
      <tr>
        <td class="fail-name">${escapeHtml(s.title)}</td>
        <td><code>${escapeHtml(s.error?.slice(0, 200) || 'Unknown error')}</code></td>
      </tr>`
    )
    .join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Regression Report</title>
  <style>
    :root {
      --bg: #0f1117; --surface: #1a1d27; --border: #2a2d3a;
      --text: #e1e4ed; --text-muted: #8b8fa3;
      --green: #22c55e; --red: #ef4444; --yellow: #eab308; --blue: #3b82f6;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: var(--text); padding: 2rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }
    .subtitle { color: var(--text-muted); margin-bottom: 2rem; font-size: 0.875rem; }
    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
    .stat { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 1.25rem; }
    .stat-value { font-size: 2rem; font-weight: 700; }
    .stat-label { color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0.25rem; }
    .stat-value.green { color: var(--green); }
    .stat-value.red { color: var(--red); }
    .stat-value.yellow { color: var(--yellow); }
    .stat-value.blue { color: var(--blue); }
    .section { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; }
    .section h2 { font-size: 1.1rem; margin-bottom: 1rem; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid var(--border); }
    th { color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .thumb { height: 80px; border-radius: 4px; cursor: pointer; border: 1px solid var(--border); transition: transform 0.15s; }
    .thumb:hover { transform: scale(1.05); }
    .fail-name { color: var(--red); }
    code { background: #252833; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.8rem; color: var(--text-muted); word-break: break-all; }
    .badge { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 100px; font-size: 0.75rem; font-weight: 600; }
    .badge-pass { background: rgba(34,197,94,0.15); color: var(--green); }
    .badge-fail { background: rgba(239,68,68,0.15); color: var(--red); }
    .badge-new { background: rgba(59,130,246,0.15); color: var(--blue); }
    .modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 100; justify-content: center; align-items: center; cursor: zoom-out; }
    .modal.active { display: flex; }
    .modal img { max-width: 90vw; max-height: 90vh; border-radius: 8px; }
    .empty { color: var(--text-muted); text-align: center; padding: 2rem; }
  </style>
</head>
<body>
  <h1>Visual Regression Report</h1>
  <p class="subtitle">Generated ${escapeHtml(new Date().toLocaleString())} &mdash; ${duration}s total</p>

  <div class="stats">
    <div class="stat">
      <div class="stat-value">${total}</div>
      <div class="stat-label">Total Stories</div>
    </div>
    <div class="stat">
      <div class="stat-value green">${passed}</div>
      <div class="stat-label">Passed</div>
    </div>
    <div class="stat">
      <div class="stat-value red">${failed}</div>
      <div class="stat-label">Failed</div>
    </div>
    <div class="stat">
      <div class="stat-value yellow">${skipped}</div>
      <div class="stat-label">Skipped</div>
    </div>
    <div class="stat">
      <div class="stat-value blue">${baselineCount}</div>
      <div class="stat-label">Baseline Screenshots</div>
    </div>
  </div>

  ${
    failed > 0
      ? `<div class="section">
    <h2>Failed Tests <span class="badge badge-fail">${failed}</span></h2>
    <table>
      <thead><tr><th>Story</th><th>Error</th></tr></thead>
      <tbody>${failedRows}</tbody>
    </table>
  </div>`
      : ''
  }

  ${
    diffs.size > 0
      ? `<div class="section">
    <h2>Visual Diffs <span class="badge badge-fail">${diffs.size}</span></h2>
    <table>
      <thead><tr><th>Story</th><th>Expected</th><th>Actual</th><th>Diff</th></tr></thead>
      <tbody>${diffRows}</tbody>
    </table>
  </div>`
      : ''
  }

  ${
    failed === 0 && diffs.size === 0
      ? `<div class="section">
    <h2>Status</h2>
    <p class="empty">
      ${baselineCount > 0 ? '&#10003; All stories match their baselines. No visual regressions detected.' : '&#10003; Baseline screenshots captured. Run tests again to compare against these baselines.'}
    </p>
  </div>`
      : ''
  }

  <div id="modal" class="modal" onclick="this.classList.remove('active')">
    <img id="modal-img" src="">
  </div>
  <script>
    function showModal(src) {
      document.getElementById('modal-img').src = src;
      document.getElementById('modal').classList.add('active');
    }
  </script>
</body>
</html>`;

  writeFileSync(OUTPUT, html);
  console.log(`\nReport written to ${OUTPUT}`);
  console.log(`\n  Total:   ${total}`);
  console.log(`  Passed:  ${passed}`);
  console.log(`  Failed:  ${failed}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Baselines: ${baselineCount}`);
  if (diffs.size > 0) {
    console.log(`  Diffs:   ${diffs.size}`);
  }
}

main();
