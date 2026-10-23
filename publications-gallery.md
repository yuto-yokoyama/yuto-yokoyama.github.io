---
title: Publications
permalink: /publications-gallery/
---

<link rel="stylesheet" href="{{ '/assets/css/publication-filter.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<link rel="stylesheet" href="{{ '/assets/css/publication-gallery.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<script src="{{ '/assets/js/publication-filter.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/publication-images.js' | relative_url }}" defer></script>

<div class="publication-gallery" data-publications>
  <div class="publication-filter" data-publication-controls hidden>
    <h2>Filter publications</h2>
    <div class="publication-filter__buttons">
      <button type="button" data-filter-all aria-pressed="true" aria-controls="publication-results">All</button>
    </div>
    <fieldset>
      <legend>Research topics</legend>
      <div class="publication-filter__buttons">
        {% for tag in site.data.research_tags %}
        <button type="button" data-filter-tag="{{ tag.id | escape }}" aria-pressed="false" aria-controls="publication-results">{{ tag.label | escape }}</button>
        {% endfor %}
      </div>
    </fieldset>
    <fieldset>
      <legend>Institutions</legend>
      <div class="publication-filter__buttons">
        {% for tag in site.data.institution_tags %}
        <button type="button" data-filter-tag="{{ tag.id | escape }}" aria-pressed="false" aria-controls="publication-results">{{ tag.label | escape }}</button>
        {% endfor %}
      </div>
    </fieldset>
    <p class="publication-filter__count" data-publication-count role="status" aria-live="polite" aria-atomic="true"></p>
  </div>

  <div id="publication-results">
    <div class="publication-empty" data-publication-empty hidden>
      <p>No publications match all selected tags.</p>
      <button type="button" data-clear-filters>Clear filters</button>
    </div>
    {% include publication-section.html entries=site.data.publications heading="Papers" %}
    {% include publication-section.html entries=site.data.japanese_articles heading="Japanese Articles" %}
    {% include publication-section.html entries=site.data.books heading="Books" %}
  </div>
</div>
