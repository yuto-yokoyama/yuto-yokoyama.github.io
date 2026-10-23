---
title: Publications
permalink: /publications/
---

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="{{ '/assets/css/publication-filter.css' | relative_url }}">
<script src="{{ '/assets/js/publication-filter.js' | relative_url }}" defer></script>

<div data-publications>
  <div class="publication-filter" data-publication-controls hidden>
    <h2>Filter publications</h2>
    <p id="publication-filter-help">Select one or more tags. Results must match every selected tag, including institutions.</p>
    <div class="publication-filter__buttons">
      <button type="button" data-filter-all aria-pressed="true" aria-controls="publication-results">All</button>
    </div>
    <fieldset aria-describedby="publication-filter-help">
      <legend>Research topics</legend>
      <div class="publication-filter__buttons">
        {% for tag in site.data.research_tags %}
        <button type="button" data-filter-tag="{{ tag.id | escape }}" aria-pressed="false" aria-controls="publication-results">{{ tag.label | escape }}</button>
        {% endfor %}
      </div>
    </fieldset>
    <fieldset aria-describedby="publication-institution-note">
      <legend>Institutions</legend>
      <div class="publication-filter__buttons">
        {% for tag in site.data.institution_tags %}
        <button type="button" data-filter-tag="{{ tag.id | escape }}" aria-pressed="false" aria-controls="publication-results">{{ tag.label | escape }}</button>
        {% endfor %}
      </div>
    </fieldset>
    <p class="publication-filter__note" id="publication-institution-note">Institutions are Yuto Yokoyama's affiliations listed in each publication. Some publications have not yet been classified by institution.</p>
    <p class="publication-filter__count" data-publication-count role="status" aria-live="polite" aria-atomic="true"></p>
  </div>

  <div id="publication-results">
    <div class="publication-empty" data-publication-empty hidden>
      <p>No publications match all selected tags.</p>
      <button type="button" data-clear-filters>Clear filters</button>
    </div>

    <section data-publication-section>
      <h1>Papers</h1>
      {% assign entries = site.data.publications | sort: "year" | reverse %}
      {% assign current_year = "" %}
      {% for p in entries %}
        {% if p.year != current_year %}
          {% unless forloop.first %}</ul></div>{% endunless %}
          <div data-publication-year>
            <h2>{{ p.year }}</h2>
            <ul>
          {% assign current_year = p.year %}
        {% endif %}
        {% capture citation %}{% for a in p.authors %}{% if a == "Yuto Yokoyama" %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}, {% if p.url and p.url != "" %}[**{{ p.title }}**]({{ p.url }}){% else %}**{{ p.title }}**{% endif %}, {{ p.journal }}, {% if p.volume != "" %}{{ p.volume }}, {% endif %}{% if p.number != "" %}{{ p.number }}, {% endif %}{% if p.pages != "" %}{{ p.pages }}, {% endif %}{{ p.year }}{% if p.open_access %}<br>[Open Access]{% endif %}{% endcapture %}
        <li class="publication-item" data-publication-id="{{ p.id | escape }}" data-tags="{{ p.tags | join: ' ' | escape }}">{{ citation | markdownify }}</li>
        {% if forloop.last %}</ul></div>{% endif %}
      {% endfor %}
    </section>

    <section data-publication-section>
      <h1>Japanese Articles</h1>
      {% assign entries = site.data.japanese_articles | sort: "year" | reverse %}
      {% assign current_year = "" %}
      {% for p in entries %}
        {% if p.year != current_year %}
          {% unless forloop.first %}</ul></div>{% endunless %}
          <div data-publication-year>
            <h2>{{ p.year }}</h2>
            <ul>
          {% assign current_year = p.year %}
        {% endif %}
        {% capture citation %}{% for a in p.authors %}{% if a == "横山 裕杜" %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}，{% if p.url and p.url != "" %}[**{{ p.title }}**]({{ p.url }}){% else %}**{{ p.title }}**{% endif %}，{{ p.journal }}{% if p.volume != "" %}，{{ p.volume }}{% endif %}{% if p.number != "" %}({{ p.number }}){% endif %}{% if p.pages != "" %}，{{ p.pages }}{% endif %}，{{ p.year }}{% if p.open_access %}，[Open Access]{% endif %}{% endcapture %}
        <li class="publication-item" data-publication-id="{{ p.id | escape }}" data-tags="{{ p.tags | join: ' ' | escape }}">{{ citation | markdownify }}</li>
        {% if forloop.last %}</ul></div>{% endif %}
      {% endfor %}
    </section>

    <section data-publication-section>
      <h1>Books</h1>
      {% assign entries = site.data.books | sort: "year" | reverse %}
      {% assign current_year = "" %}
      {% for b in entries %}
        {% if b.year != current_year %}
          {% unless forloop.first %}</ul></div>{% endunless %}
          <div data-publication-year>
            <h2>{{ b.year }}</h2>
            <ul>
          {% assign current_year = b.year %}
        {% endif %}
        {% capture citation %}{% for a in b.authors %}{% if a == "Yuto Yokoyama" or a == "横山 裕杜" %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}, {% if b.url and b.url != "" %}[**{{ b.title }}**]({{ b.url }}){% else %}**{{ b.title }}**{% endif %}, {{ b.book_title }}{% if b.publisher != "" %}, {{ b.publisher }}{% endif %}{% if b.volume != "" %}, {{ b.volume }}{% endif %}{% if b.number != "" %}({{ b.number }}){% endif %}{% if b.pages != "" %}, {{ b.pages }}{% endif %}, {{ b.year }}{% if b.open_access %}, [Open Access]{% endif %}{% endcapture %}
        <li class="publication-item" data-publication-id="{{ b.id | escape }}" data-tags="{{ b.tags | join: ' ' | escape }}">{{ citation | markdownify }}</li>
        {% if forloop.last %}</ul></div>{% endif %}
      {% endfor %}
    </section>
  </div>
</div>
