---
title: Publications
permalink: /publications/
---

# Papers

{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% assign current_year = "" %}

{% for p in pubs %}
{% if p.year != current_year %}
## {{ p.year }}
{% assign current_year = p.year %}
{% endif %}

- {% for a in p.authors %}{% if a == "Yuto Yokoyama" %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}, {% if p.url and p.url != "" %}[**{{ p.title }}**]({{ p.url }}){% else %}**{{ p.title }}**{% endif %}, {{ p.journal }}, {% if p.volume != "" %}{{ p.volume }}, {% endif %}{% if p.number != "" %}{{ p.number }}, {% endif %}{% if p.pages != "" %}{{ p.pages }}, {% endif %}{{ p.year }}{% if p.open_access %}<br>[Open Access]{% endif %}
{% endfor %}

<br>

# Japanese Articles

{% assign japubs = site.data.japanese_articles | sort: "year" | reverse %}
{% assign current_year = "" %}

{% for p in japubs %}
{% if p.year != current_year %}
## {{ p.year }}
{% assign current_year = p.year %}
{% endif %}

- {% for a in p.authors %}{% if a == "横山 裕杜" %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}，{% if p.url and p.url != "" %}[**{{ p.title }}**]({{ p.url }}){% else %}**{{ p.title }}**{% endif %}，{{ p.journal }}{% if p.volume != "" %}，{{ p.volume }}{% endif %}{% if p.number != "" %}({{ p.number }}){% endif %}{% if p.pages != "" %}，{{ p.pages }}{% endif %}，{{ p.year }}{% if p.open_access %}，[Open Access]{% endif %}

{% endfor %}

<br>

# Books

{% assign books = site.data.books | sort: "year" | reverse %}
{% assign current_year = "" %}

{% for b in books %}
{% if b.year != current_year %}
## {{ b.year }}
{% assign current_year = b.year %}
{% endif %}

- {% for a in b.authors %}{% if a == "Yuto Yokoyama" or a == "横山 裕杜" %}**{{ a }}**{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}, {% if b.url and b.url != "" %}[**{{ b.title }}**]({{ b.url }}){% else %}**{{ b.title }}**{% endif %}, {{ b.book_title }}{% if b.publisher != "" %}, {{ b.publisher }}{% endif %}{% if b.volume != "" %}, {{ b.volume }}{% endif %}{% if b.number != "" %}({{ b.number }}){% endif %}{% if b.pages != "" %}, {{ b.pages }}{% endif %}, {{ b.year }}{% if b.open_access %}, [Open Access]{% endif %}

{% endfor %}
