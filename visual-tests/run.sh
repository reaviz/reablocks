#!/usr/bin/env bash
set -euo pipefail

# Visual Regression Test Runner
# Usage:
#   ./visual-tests/run.sh              # Run tests (compare against baselines)
#   ./visual-tests/run.sh --update     # Update baseline screenshots

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
UPDATE_FLAG=""

for arg in "$@"; do
  case "$arg" in
    --update) UPDATE_FLAG="--update-snapshots" ;;
  esac
done

cd "$PROJECT_DIR"

echo "==> Starting Storybook on port 6006..."
npx storybook dev -p 6006 --no-open &
SB_PID=$!

cleanup() {
  echo "==> Shutting down Storybook (pid $SB_PID)..."
  kill "$SB_PID" 2>/dev/null || true
  wait "$SB_PID" 2>/dev/null || true
}
trap cleanup EXIT

# Wait for Storybook to be ready (60 iterations x 2s = ~120s timeout)
echo "==> Waiting for Storybook..."
for i in $(seq 1 60); do
  if curl -s http://localhost:6006/index.json > /dev/null 2>&1; then
    echo "==> Storybook is ready."
    break
  fi
  if [ "$i" -eq 60 ]; then
    echo "ERROR: Storybook did not start within 120s"
    exit 1
  fi
  sleep 2
done

echo "==> Extracting story list..."
npx tsx visual-tests/extract-stories.ts http://localhost:6006

STORY_COUNT=$(node -e "console.log(require('./visual-tests/stories.json').length)")
echo "==> Found $STORY_COUNT stories"

echo "==> Running visual tests... $UPDATE_FLAG"
TEST_EXIT=0
npx playwright test $UPDATE_FLAG || TEST_EXIT=$?

echo "==> Generating report..."
npx tsx visual-tests/generate-report.ts

echo ""
echo "Done! Open visual-tests/report.html to see results."
exit $TEST_EXIT
