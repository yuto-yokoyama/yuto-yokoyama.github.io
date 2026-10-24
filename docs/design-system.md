# Shared design system

Academic Minimalism: content first, restrained typography, no shadows or
decorative cards. This change supplies the common foundation and a compact Home profile/About
introduction. Other page content, publication data, URLs, images, ordering, and
existing Publications JavaScript are preserved.

## Integration with Minima

The configuration retains `remote_theme: jekyll/minima` and `minima.skin: auto`.
This uses upstream Minima's current default branch, not the locally installed
Minima 2.5.1 gem. The integration was inspected against upstream commit
`4de322363fca5927e6f4012cb94f6dad69ab5e6c`. The remote theme remains unpinned.

Minima's official `custom-variables`, `custom-styles` and `custom-head` hooks
load the design system. Local header/footer/navigation includes replace only
shared chrome. The shared base layout retains the upstream head, content,
footer and sub-footer includes, adding a focusable main landmark for the skip
link. The head include retains upstream SEO/feed/analytics hooks and versions
the main stylesheet URL to avoid stale cached design tokens after deployment.
SEO and the standard page/home/post layouts remain supplied by Minima.

| Files | Responsibility |
| --- | --- |
| `_sass/site/_tokens.scss` | Effective colors, font scale, weights, spacing, content width, radii and focus/interactive tokens; Minima color-variable adapter |
| `_sass/site/_base.scss` | Shared typography, links, container, vertical rhythm, reduced motion and narrow-screen reflow |
| `_sass/site/_chrome.scss` | Header, navigation, footer, skip link and mobile states |
| `_sass/minima/custom-styles.scss` | Official hook importing the three shared partials |
| `_sass/minima/custom-variables.scss` | Sass compatibility defaults required by Minima's arithmetic; body font delegates to the CSS token |
| `_includes/custom-head.html` | Regular-font preload, font-face stylesheet and small navigation script |
| `_includes/head.html` | Upstream metadata/hooks with a versioned main stylesheet URL |
| `_includes/header.html`, `_includes/nav-items.html` | Existing configured page links, native menu button and `aria-current` |
| `_includes/footer.html`, `_data/site_links.yml` | Minimal copyright and existing Google Scholar/ORCID profiles |
| `_layouts/base.html` | Standard Minima layout with the skip-link target |
| `assets/css/site-fonts.css`, `assets/fonts/noto-sans/` | Self-hosted Noto Sans, license and source/hash record |
| `assets/css/home.css` | Home-only profile/portrait and About layout, inheriting shared tokens |
| `assets/js/site-navigation.js` | Mobile expansion, Escape and breakpoint/focus handling; no library |
| `assets/css/publication-filter.css`, `assets/css/publication-gallery.css` | Existing page components now consume shared tokens; thumbnail geometry stays local |

## Changing the design

Edit `_sass/site/_tokens.scss` for effective site-wide design settings:

- Colors: the light palette is in `:root`; the dark palette is in
  `@media (prefers-color-scheme: dark)`. OS changes update the site and existing
  Minima/Publications components together. Decorative borders use the subtle
  border token; interactive borders use a stronger, contrasting token.
- Typography: `--font-family-body`, `--font-size-*`, `--font-weight-*` and
  `--line-height-*`. H1 is 40 px on desktop and 36 px on mobile, H2 26 px,
  H3 20 px, body 16 px/1.65, navigation 15 px, metadata 13–14 px. These use
  rem units and respect browser zoom. Publication titles remain body-sized.
- Layout: `--container-width` (1100 px maximum including gutters),
  `--page-gutter` (32–200 px responsively / 20 px mobile), `--section-spacing` (64 px),
  the spacing scale and `--radius` (6 px). Tag pills retain their existing shape.
- Interaction: `--control-min-height` (44 px), `--focus-ring`,
  `--focus-offset`, and the shared color tokens. There are no decorative shadows
  or new animations. Reduced-motion preferences disable any inherited motion.

The Minima Sass compatibility values are not additional runtime design controls;
effective styles are overridden by the CSS tokens. Keep them sensible if
upstream Minima adds new components that rely on its compiled arithmetic.

Noto Sans is self-hosted from the official Google Fonts repository under SIL
OFL 1.1. The normal and italic variable WOFF2 files total about 490 KiB;
400/500/600 weights share these files. Files retain Latin/Greek/Cyrillic and
common punctuation/math glyphs at the default width; other scripts use fallback. Only normal is preloaded; both use
font-display: swap. Source revision, conversion details and hashes are recorded
with the fonts. There is no font CDN or runtime font-building dependency.
Japanese characters use the device sans-serif fallback. To change fonts, update
the family token and the font-face declarations/assets/license together.

## Adding a page

Use the normal Minima page layout, for example:

```yaml
---
layout: page
title: Research
permalink: /research/
---
```

Write the page's Markdown content after its front matter. It inherits the
common font, colors, header/footer and spacing without additional CSS imports.
Add its actual filename to `minima.nav_pages` only when the page exists and a
navigation link is wanted. This change does not create a Research page/link.
Preserve the current permalink when updating existing pages.

Existing page-specific styles belong in `assets/css/` and should use the shared
tokens. Publications keeps its 160 × 120 px image frames, 20 px gap, responsive
list structure, filters, DOI/publisher links and lightbox. Only its presentation
values were integrated with the design system. Home uses `layout: page`, matching the standard page heading and divider. Its
profile places the name and affiliation beside the existing portrait (224 px
on desktop, 112/96 px on mobile), followed by the requested About text. About
stacks vertically on mobile. Research Interests is removed; the News and Links
sections remain; profile-account links now appear in the shared footer. Home-only styling lives in `assets/css/home.css`; CV's
inline grid retains its narrow-screen reflow without content edits.

Home's fine adjustments follow HIG's clarity, consistency and accessibility
principles: align related content, use the shared spacing rhythm, keep related
`@ KAUST` text together, retain a subordinate affiliation style, and reduce the
portrait on narrow screens so text remains readable. Component dimensions are
local tokens (224/112/96 px portraits and a 176 px About label column). These
values are implementation choices, not sizes mandated by Apple HIG. Web controls
retain 44 CSS px minimum targets, visible focus and WCAG contrast checks; CSS px
are not being equated to native iOS points. The reference is
[Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines).

Add future profile links to `_data/site_links.yml` using verified existing
accounts. Google Scholar, ORCID, Researchmap and ResearchGate now live in the
footer. Home retains its two laboratory links. The rounded Menu button is
aligned to the right gutter; publication-card separators are disabled.

Wide-screen gutters retain the selected 200 px maximum. Between 600 and 1100 px
the gutter shrinks with the viewport, down to 32 px, to avoid squeezing content;
small screens retain 20 px gutters. The 350 px value in the clamp expression is
half the desired 700 px reading width before the gutter reaches its maximum.

## Validation and limits

- Built with Jekyll/remote Minima and GitHub Pages' default-layout plugin.
- Compared unchanged main content, links, images and publication ordering on
  Publications, archived Publications, Presentations, News and CV. Home has the
  requested profile/About introduction and removal of Research Interests; its
  News and laboratory links remain, with account links moved to the footer. Bibliography data and source
  image files are unchanged.
- Chromium checks cover both themes at 1440, 768, 390 and 320 px widths;
  200% text-size emulation at 320 px; current-page navigation; shared footer;
  keyboard menu/Tab/Escape, skip link and visible focus; no-JavaScript navigation;
  and blocked-font fallback. The actual rendered Latin header font was verified
  as the self-hosted Noto Sans.
- Palette contrast was calculated against both backgrounds: primary/secondary
  text and links meet WCAG AA 4.5:1; interactive borders exceed 3:1. Placeholder
  text also meets 4.5:1 against its subtle background. This is not a full manual
  screen-reader or WCAG certification audit.
- Publications AND filtering, order, counts, empty/reset, 160 × 120 px thumbnails,
  20 px gap and image lightbox remain functional. Existing JavaScript is unchanged.
- Home/Publications/CV before/after screenshots were inspected locally. Temporary
  screenshots and generated HTML are deleted after verification, per the user's
  request; no preview artifacts are committed.
- Actual Safari/iOS, Android and Windows devices, and manual screen-reader
  testing are not available here. GitHub Pages publication is not claimed until
  this PR is merged and its deployment succeeds. Upstream Minima is unpinned, so
  future upstream changes to the overridden includes/layout should be reviewed.
