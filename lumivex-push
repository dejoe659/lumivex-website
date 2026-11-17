#!/usr/bin/env bash
# Pushes lumivex-website.zip to github.com/dejoe659/lumivex-website (main).
# Usage: put this script next to lumivex-website.zip, then run:  bash push-lumivex.sh
# Requires: git, unzip, and GitHub access (SSH key, or HTTPS login / token).
set -euo pipefail

ZIP="${1:-lumivex-website.zip}"
REPO="https://github.com/dejoe659/lumivex-website.git"   # use git@github.com:dejoe659/lumivex-website.git for SSH
WORK="$(mktemp -d)"

[ -f "$ZIP" ] || { echo "Cannot find $ZIP. Run this next to the zip, or pass its path."; exit 1; }

echo "Cloning $REPO ..."
git clone "$REPO" "$WORK/repo"

echo "Unzipping ..."
unzip -q "$ZIP" -d "$WORK/unz"
SRC="$WORK/unz/lumivex-website"
[ -d "$SRC" ] || SRC="$WORK/unz"

cd "$WORK/repo"
git checkout main

# Replace everything (including the stray root ContactForm.tsx, Peak.tsx, data.ts)
# with the zip's contents, keeping .git.
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$SRC"/. .

git add -A
if git diff --cached --quiet; then
  echo "Nothing to commit: repo already matches the zip."
  exit 0
fi
git status --short
git commit -m "Add Lumivex website (Next.js 14, TypeScript, Tailwind)"
git push origin main
echo "Done: https://github.com/dejoe659/lumivex-website"
