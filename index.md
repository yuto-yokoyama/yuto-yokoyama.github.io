---
title: Home
---

<div class="home-intro">
  <div>
    <img src="/assets/img/photo_yuto.jpg" alt="Profile photo of Yuto Yokoyama" class="profile-photo">
  </div>

  <div class="intro-text">
    <h1>Yuto Yokoyama (横山 裕杜)</h1>
    <p><strong>Postdoctoral Fellow, King Abdullah University of Science and Technology (KAUST)</strong></p>

    <p>
      I am a postdoctoral fellow in the Splash Lab (Prof. Tadd Truscott) at King Abdullah University of Science and Technology (KAUST), Saudi Arabia.
      From April 2024 to January 2026, I was a JSPS Research Fellow in the Micro/Bio/Nanofluidics Unit (Prof. Amy Shen) at the Okinawa Institute of Science and Technology (OIST).
      I received my Ph.D. in Mechanical Systems Engineering from Tokyo University of Agriculture and Technology in March 2024 under the supervision of Prof. Yoshiyuki Tagawa.
    </p>

    <p>
      My research focuses on multiphase flows, particularly droplet impact dynamics and flow-induced stress and birefringence in soft and complex materials.
    </p>
  </div>
</div>

## Research Interests

<ul class="tag-list">
  <li>Multiphase flow</li>
  <li>Droplet dynamics</li>
  <li>Non-Newtonian fluids</li>
  <li>Suspensions</li>
  <li>Biomaterials</li>
</ul>

## News

<ul class="clean-list">
{% assign items = site.data.news | sort: "date" | reverse %}
{% for n in items limit:5 %}
  <li class="news-item">
    <div class="news-date">{{ n.date }}</div>
    <div>
      {{ n.text }}{% if n.url and n.url != "" %} <a href="{{ n.url }}">{{ n.link_label }}</a>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>

[See all news](/news/)

## Links

- [Micro/Bio/Nanofluidics Unit at OIST](https://www.oist.jp/research/research-units/mbnu)
- [Yoshiyuki Tagawa's Lab at TUAT](https://sites.google.com/view/tagawalabjp)
- [researchmap](https://researchmap.jp/YutoYokoyama)
