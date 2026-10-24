---
layout: page
title: Home
---

<link rel="stylesheet" href="{{ '/assets/css/home.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<section class="home-profile" aria-labelledby="home-profile-name">
  <div class="home-profile__identity">
    <h2 class="home-profile__name" id="home-profile-name">Yuto Yokoyama</h2>
    <p class="home-profile__name-ja" lang="ja">横山 裕杜</p>
    <p class="home-profile__position">Postdoctoral Researcher <span class="home-profile__affiliation">@ KAUST</span></p>
  </div>
  <img class="home-profile__portrait" src="{{ '/assets/img/photo_yuto.JPG' | relative_url }}" width="224" height="224" alt="Portrait of Yuto Yokoyama" decoding="async">
</section>

<section class="home-about" aria-labelledby="home-about-title">
  <h2 id="home-about-title">About</h2>
  <p>I am a postdoctoral researcher at King Abdullah University of Science and Technology (KAUST). My research focuses on experimental fluid dynamics, complex fluids, and optical measurement methods.</p>
</section>

## News
{% assign items = site.data.news | sort: "date" | reverse %}
{% for n in items limit:5 %}
- {{ n.text }}{% if n.url and n.url != "" %} [{{ n.link_label }}]({{ n.url }}){% endif %} ({{ n.date }})
{% endfor %}

[See all news](/news/)

<br>
## Links
<!-- - [Google Scholar](https://scholar.google.com/citations?user=DpeS1JAAAAAJ&hl=en) -->
<!-- - [ResearchGate](https://www.researchgate.net/profile/Yuto-Yokoyama) -->
<!-- - [ORCiD](https://orcid.org/0000-0001-5205-5984) -->
<!-- - [researchmap](https://researchmap.jp/YutoYokoyama) -->
- [Micro/Bio/Nanofluidics Unit at OIST](https://www.oist.jp/research/research-units/mbnu)
- [Yoshiyuki Tagawa's Lab at TUAT](https://sites.google.com/view/tagawalabjp)
