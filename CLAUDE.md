# CSS (Cheshire Spraying Specialists) — Project Conventions

## Project Context

Client website for Cheshire Spraying Specialists, a Cheshire/Ellesmere Port spray-painting

business. Originally scaffolded in Lovable (project "CSS 2"), now developed locally.

Design goal: the site should read as a ~£10,000 commissioned build — evaluate every

visual/UX decision against that bar, not just functional correctness.

## Package Manager

npm only. Do not use bun, yarn, or pnpm. The `packageManager` field in package.json is

pinned to npm — respect it, never regenerate bun.lockb or yarn.lock.

## Git / Source Control Discipline

- Commit at the end of every completed task — do not let changes pile up uncommitted

  across multiple tasks or sessions.

- Group commits logically. Never mix a dependency/config change with a content or

  feature change in the same commit.

- Use Conventional Commits format: `type: short description`

  (types: feat, fix, refactor, content, style, docs)

- You may stage and commit locally without asking first — this is low-risk and fully

  reversible.

- Never run `git push`, `git push --force`, or anything touching the `origin` remote

  without explicit confirmation in chat first. This repo is synced to Lovable via

  GitHub — an unreviewed push can conflict with the Lovable web editor.

- Before ending any task, run `git status --short` and report any uncommitted changes,

  including ones you didn't personally make this session.

## Build/Verify

Always run `npm run build` after any change set, before considering a task complete.
