#!/usr/bin/env bash
set -euo pipefail

# Build each demo as a standalone app.
# Reads demo IDs from the manifest via a simple grep.

DEMO_IDS=$(grep "id:" src/public-demos/demos.config.ts | sed "s/.*id: '//;s/'.*//")

echo "Building demos..."
echo ""

for id in $DEMO_IDS; do
  echo "▸ $id"
  DEMO_ID="$id" npx vite build --config vite.config.demos.ts 2>&1 | grep -E "^(✓|dist-demos)" || true
  mv "dist-demos/$id/demos.html" "dist-demos/$id/index.html"
  echo "  ✓ dist-demos/$id/"
  echo ""
done

echo "Done."
