#!/usr/bin/env bash
# Rebuilds the landing page static export served by the shared nginx at
# numblop.gutcloud.cz/. Content-only rebuilds need no nginx reload; nginx
# serves out/ straight from disk.

set -Eeuo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"
git_remote="${NUMBLOP_LANDING_GIT_REMOTE:-origin}"
deploy_branch="${NUMBLOP_LANDING_DEPLOY_BRANCH:-main}"

cd "$repo_root"

if [[ "$(git branch --show-current)" != "$deploy_branch" ]]; then
    printf 'Refusing to deploy branch %s; expected %s.\n' "$(git branch --show-current)" "$deploy_branch" >&2
    exit 1
fi
if ! git diff --quiet || ! git diff --cached --quiet; then
    printf 'Refusing to deploy with tracked local changes. Commit or stash them first.\n' >&2
    exit 1
fi

if git remote get-url "$git_remote" >/dev/null 2>&1; then
    git fetch "$git_remote" "$deploy_branch"
    git merge --ff-only "$git_remote/$deploy_branch"
fi

corepack pnpm install --frozen-lockfile
corepack pnpm build

printf '\nPublished landing page: https://numblop.gutcloud.cz/\n'
