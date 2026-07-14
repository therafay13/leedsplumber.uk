## Goal
Resolve the GitHub sync mismatch so the live preview shows the 38 commits you pushed to `origin/main`.

## Current state
- Sandbox is on Lovable's editing branch `edit/edt-aad16bdf-09a7-49b4-b5f7-3ebfaed6deec` at commit `73f735f`.
- `origin/main` is at commit `1598911`, 38 commits ahead of local `main` and the edit branch.
- Your pushed changes are already on `origin/main`; the preview is simply pointing at the older edit branch.

## Plan
1. **Checkout `main`**  
   `git checkout main`
2. **Fast-forward to `origin/main`**  
   `git pull origin main`
3. **Verify branch state**  
   Confirm HEAD now matches `origin/main` and there are no uncommitted changes.
4. **Build check**  
   Run `npm run build` to ensure the pulled code compiles cleanly.
5. **Preview confirmation**  
   Flush HMR and check the preview to confirm your latest changes are visible.

## Notes
- This will move the sandbox off the Lovable edit branch. If you later edit in Lovable, it may recreate the edit branch.
- No code changes are made; this is purely a git sync operation.
