# Agent Instructions

## Project Overview

This repository is a static Romanian study app for Evaluare Nationala preparation, covering Romanian language and mathematics for grades 5-8.

The app has no build step and no package manager dependency flow. It runs directly from `index.html` using plain HTML, CSS, JavaScript, local data files, and vendored KaTeX assets.

## Repository Structure

- `index.html` loads the app shell, all subject data files, KaTeX, and `js/app.js`.
- `js/app.js` owns global app state, tab switching, sidebar tree rendering, chapter rendering, KaTeX rendering, and search.
- `css/style.css` contains the full visual design and responsive behavior.
- `data/*.js` files define global data objects such as `romana8Data` and `matematica7Data`.
- `vendor/katex/` contains local KaTeX runtime assets. Do not replace these with CDN links unless explicitly requested.
- `manuale/` contains reference PDFs for source material.

## Running Locally

Use the existing VS Code task `Start Server Local`, or run:

```sh
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Serving over HTTP is preferred because browsers can behave differently with local files and script loading.

## Data File Conventions

Each subject/grade data file should define one global constant matching this pattern:

```js
const romana8Data = {
  title: "...",
  subtitle: "...",
  subject: "romana",
  grade: 8,
  sections: [
    {
      id: "stable-section-id",
      title: "...",
      subtitle: "...",
      icon: "...",
      chapters: [
        {
          id: "stable-chapter-id",
          title: "...",
          content: `...HTML content...`
        }
      ]
    }
  ]
};
```

Keep `id` values stable and URL-safe style: lowercase, hyphen-separated, no spaces.

When adding a new grade file, also update `index.html` script tags and the `DATA` object in `js/app.js`.

## Content Guidelines

- The user-facing language is Romanian.
- Keep Romanian diacritics when editing files that already use them.
- Math content can use KaTeX delimiters: `$...$`, `$$...$$`, `\\(...\\)`, and `\\[...\\]`.
- Because chapter `content` is inserted with `innerHTML`, avoid untrusted input and escape any dynamic text with `esc()`.
- Prefer the existing content classes, such as `content-block`, `definitie`, `exemplu`, `rezolvat`, `atentie`, and `teoria-table`.
- Preserve the existing educational style: concise theory, worked examples, warnings/attention blocks, and recap sections.

## JavaScript Guidelines

- This is plain browser JavaScript, not a module-based app.
- Avoid introducing frameworks, bundlers, or package manager setup unless the user explicitly asks.
- Match the existing ES5-compatible style in `js/app.js` where practical: `var`, simple functions, and global function handlers used by inline `onclick`.
- Be careful when editing generated HTML strings. Escape quotes in inline handlers and user-visible dynamic text.
- After content changes, verify sidebar navigation, chapter rendering, search, and KaTeX rendering.

## CSS Guidelines

- Keep the current fixed-header plus fixed-sidebar layout unless the requested feature requires a layout change.
- Use the existing CSS variables in `:root` and `body[data-tab]` for theme colors.
- Check mobile behavior after layout or typography changes.
- Avoid decorative redesigns that make the study content harder to scan.

## Verification Checklist

For most changes, verify at least:

1. Start the local server.
2. Open `http://localhost:8000`.
3. Switch between `Limba Romana` and `Matematica`.
4. Expand available classes and sections in the sidebar.
5. Open edited chapters.
6. Search for a term from the edited content.
7. Confirm KaTeX formulas render without visible parse errors.

## Known Current Gaps

- Mathematics grade 8 is currently unavailable in `DATA`.
- There is no automated test suite.
- Data files are loaded as global scripts, so a syntax error in one data file can break app startup.
