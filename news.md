---
title: News
permalink: /news/
---

{% assign items = site.data.news | sort: "date" | reverse %}
{% assign current_year = "" %}

{% for n in items %}
{% assign y = n.date | slice: 0, 4 %}
{% if y != current_year %}
## {{ y }}
{% assign current_year = y %}
{% endif %}

- {{ n.text }}{% if n.url and n.url != "" %}[{{ n.link_label }}]({{ n.url }}){% endif %} ({{ n.date }})

{% endfor %}
