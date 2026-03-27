---
title: Presentations
permalink: /presentations/
---

# International Conferences

{% assign intl = site.data.presentations | where: "category", "international" | sort: "year" | reverse %}
{% assign current_year = "" %}

{% for p in intl %}
{% if p.year != current_year %}
## {{ p.year }}
{% assign current_year = p.year %}
{% endif %}

- {% for a in p.authors %}{% if a == "Yuto Yokoyama" or a == "Yokoyama Y." %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}, {% if p.presentation_url != "" %}[**{{ p.title }}**]({{ p.presentation_url }}){% else %}**{{ p.title }}**{% endif %}, {% if p.event_url != "" %}[{{ p.event }}]({{ p.event_url }}){% else %}{{ p.event }}{% endif %}, {{ p.location }}, {{ p.country }}{% if p.date != "" %}, {{ p.date }}{% endif %}{% if p.presentation_type == "poster" %} (poster){% endif %}{% if p.presentation_type == "invited" %} (invited){% endif %}

{% endfor %}

<br>

# Domestic Conferences

{% assign dom = site.data.presentations | where: "category", "domestic" | sort: "year" | reverse %}
{% assign current_year = "" %}

{% for p in dom %}
{% if p.year != current_year %}
## {{ p.year }}
{% assign current_year = p.year %}
{% endif %}

- {% for a in p.authors %}{% if a == "横山裕杜" or a == "横山 裕杜" %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}，{% endunless %}{% endfor %}，{% if p.presentation_url != "" %}[**{{ p.title }}**]({{ p.presentation_url }}){% else %}**{{ p.title }}**{% endif %}，{% if p.event_url != "" %}[{{ p.event }}]({{ p.event_url }}){% else %}{{ p.event }}{% endif %}，{{ p.location }}，{{ p.year }}{% if p.presentation_type == "poster" %}（poster）{% endif %}{% if p.presentation_type == "invited" %}**（招待講演）**{% endif %}

{% endfor %}
