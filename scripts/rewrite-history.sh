#!/usr/bin/env bash
#
# scripts/rewrite-history.sh
# ---------------------------------------------------------------------------
# Re-attributes EVERY commit in this repository to a single identity:
#
#     tauseefbrh11 <tauseefbrh11@gmail.com>
#
# Why: the repo previously carried a different author identity ("Tauseef Khan").
# This script rewrites author + committer name/email across the whole history.
#
# ⚠️  IMPORTANT — READ BEFORE RUNNING
#   • Rewriting history CHANGES every commit hash. Collaborators must re-clone.
#   • Push requires --force. Make sure nobody else is depending on old refs.
#   • ALWAYS work on a fresh clone or a backup branch first:
#
#       git clone https://github.com/Tauseef666-ctrl/2nd-year-lateral.git rewrite-tmp
#       cd rewrite-tmp && bash ../scripts/rewrite-history.sh
#       git push --force origin main
#
#   • Keep .mailmap in the repo root so FUTURE pulls map old names correctly.
# ---------------------------------------------------------------------------

set -euo pipefail

NEW_NAME="tauseefbrh11"
NEW_EMAIL="tauseefbrh11@gmail.com"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: run this inside a git working copy." >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Warning: working tree is dirty. Commit or stash first." >&2
  exit 1
fi

echo "==> Commits before rewrite:"
git log --format='%h %an <%ae>' | head -n 5

if command -v git-filter-repo >/dev/null 2>&1; then
  # ── Preferred path: git-filter-repo (fast, safe) ──────────────────────────
  echo "==> Rewriting with git-filter-repo…"
  git filter-repo \
    --force \
    --name-callback 'return b"tauseefbrh11"' \
    --email-callback 'return b"tauseefbrh11@gmail.com"'
elif [ "$(git rev-list --all --count)" -le 0 ]; then
  echo "Nothing to rewrite (no commits)."
else
  # ── Fallback path: env-vars filter-branch (available in every git) ────────
  echo "==> git-filter-repo not found; falling back to git filter-branch…"
  FILTER_BRANCH_SQUELCH_WARNING=1 git filter-branch -f \
    --env-filter '
      export GIT_AUTHOR_NAME="tauseefbrh11"
      export GIT_AUTHOR_EMAIL="tauseefbrh11@gmail.com"
      export GIT_COMMITTER_NAME="tauseefbrh11"
      export GIT_COMMITTER_EMAIL="tauseefbrh11@gmail.com"
    ' \
    --tag-name-filter cat \
    -- --branches --tags
fi

echo "==> Commits after rewrite:"
git log --format='%h %an <%ae>' | head -n 5

cat <<EOF

Done ✅  All commits are now attributed to ${NEW_NAME} <${NEW_EMAIL}>.

Next steps (run manually):
  1. Force-push the rewritten history:
       git push --force origin main
     and, if other branches exist:
       git push --force --all origin
  2. If you use GitHub Pages Actions, re-run the deploy workflow once.
  3. Teammates: re-clone (their old clones reference unreachable hashes).
EOF