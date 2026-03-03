# Copilot instructions for this repository

Purpose: Short, actionable guidance so AI coding agents can be immediately productive.

- **Big picture:** This is a Quarto-based personal website built from source `.qmd` files in the repo root and subfolders (`posts/`, `conferences/`, `publications/`, `cv/`). The final site is rendered into the `docs/` directory and published (GitHub Pages). The site also contains pre-rendered snapshots in `_freeze/` and local libraries in `site_libs/`.

- **Where to edit (source vs output):** Edit source files (`*.qmd`, directories like `posts/`, `conferences/`, `publications/`). Do NOT edit generated files in `docs/` except for debugging — changes there will be overwritten by the next render. Example source files: `index.qmd`, `about.qmd`, `posts/` subfolders, `conferences/*.qmd`, `publications.qmd`.

- **Build / preview commands:**
  - **Render site:** `quarto render` (runs Quarto builds defined in `_quarto.yml` and writes into `docs/`).
  - **Preview locally:** `quarto preview` or `quarto preview --port 4200` to serve locally while editing.
  - **RStudio:** Open `francisco-zambrano.cl.Rproj` and use the Quarto/RStudio tooling if preferred.

- **Deployment notes:** The repo uses `docs/` for GitHub Pages (see `docs/CNAME` for the custom domain). CI or manual `quarto render` should be run before pushing changes that update `docs/`.

- **Common patterns & conventions:**
  - **Posts:** `posts/_metadata.yml` holds metadata; individual posts live under `posts/YYYY-MM-DD-title/` (see `posts/2025-08-22-ENSO_match_score_pattern/` for an example). Add a new post by creating a dated folder with a `.qmd` and updating `_metadata.yml` if needed.
  - **Quarto extensions:** Custom extensions and fonts live under `_extensions/` (e.g., `_extensions/quarto-ext/fontawesome/`). If changing icons or extension behavior, update those files and re-run `quarto render`.
  - **Local libs:** `site_libs/` contains bundled JS/CSS used by the site (e.g., `jquery-3.6.0/`, `leaflet-1.3.1/`). Prefer updating upstream packages and committing updated bundles here when necessary.
  - **Templates:** There is an `ejs/` folder (e.g., `ejs/article.ejs`) used for some HTML generation—review it when altering HTML output structure.

- **Where data/assets live:** Images in `img/`, post assets in `posts/.../`, and generated listings in `index_files/` or `docs/`. Keep large binary assets out of history if possible.

- **Testing & debugging tips:**
  - Rebuild a single page with `quarto render path/to/page.qmd` to iterate faster.
  - If output differs from expectations, compare `docs/` and source `.qmd` to find transformation issues. `_freeze/` contains previously frozen outputs (useful as reference).
  - JavaScript behaviors: inspect `card-collapse.js` and `language-toggle.js` in the repo root and `docs/` — these are small site scripts affecting UI.

- **PR and editing guidelines for agents:**
  - Make changes to source `.qmd` files and related assets only. If you must change `docs/` (for a one-off hotfix), note it in the PR description and include the `quarto render` command used.
  - Keep commits focused: content edits (posts/papers) separate from layout or dependency updates.
  - When adding new dependencies (libraries, fonts), update `site_libs/` and mention the source/version in the PR.

- **Files to review when doing layout work:** `/_quarto.yml`, `index.qmd`, `header.html`, `abbrv_toc.html`, `rjh.scss`, `styles.css`, and templates in `ejs/`.

If anything in this summary is unclear or you want more detail (examples of creating a post, or a checklist for releases), tell me which section to expand and I'll iterate.
