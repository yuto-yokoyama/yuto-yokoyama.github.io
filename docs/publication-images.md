# Publication images

The image list is implemented in `publications-gallery.md` and is served at
`/publications/`, the canonical Publications URL. The site navigation points to
that source file directly; no redirect page is required. The former
`/publications-gallery/` URL is no longer served.

The original `publications.md` is retained at `/publications-legacy/`; only its
permalink has changed, and its content remains intact. Both pages read the same
YAML data. To restore the legacy layout at the canonical URL, move the gallery
to a different permalink, set `publications.md` back to `/publications/`, and
point `minima.nav_pages` back to `publications.md`. Keep each permalink unique.

Each record in `_data/publications.yml`, `_data/japanese_articles.yml`, and
`_data/books.yml` has an optional `image` field. To add a representative image:

1. Upload a JPG to `assets/img/publications/<id>.jpg`, using the record's exact ID.
2. Set its YAML field to the root-relative path:

   ```yaml
   image: "/assets/img/publications/yokoyama2026naturecomm.jpg"
   ```

Leave `image: ""` when no image is available. An omitted field is also supported.
The shared placeholder is used for empty or nonexistent paths; JavaScript also
restores it if an existing image fails to load in the browser. Nothing else in
the bibliography or tags needs to change. JPG filenames are case-sensitive.

Images and placeholders occupy the same 160 × 120 px frame, with an 8 px corner
radius. Images use `object-fit: cover` and `object-position: center`, preserving
their aspect ratio and cropping the overflow. On narrow screens the image sits
above its citation. Images are loaded lazily.

Click or tap a loaded thumbnail to view the full, uncropped image in a modal.
Close it with the Close button, the backdrop, or Escape; keyboard focus returns
to the thumbnail. Empty or failed images remain noninteractive placeholders.
Without JavaScript or native dialog support, the thumbnail links directly to
the original image. No external image-viewer dependency is required.

Optional fields customize accessibility and cropping without template changes:

```yaml
image_alt: "Experimental setup and measured stress field during droplet impact"
image_position: "50% 25%"
```

Describe the actual uploaded figure in `image_alt`; otherwise the template uses
the publication title as context. `image_position` accepts a CSS `object-position`
value and defaults to `center`. All placeholders are decorative and hidden from
assistive technology.

Both layouts share the existing AND tag filter and the Minima light/dark theme
colors and site font. Image loading behavior and list styles are scoped to the
new page. Existing bibliographic metadata (including publication status) is
displayed as supplied, without attempting to correct or infer it.
