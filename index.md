---
title: Home
---

<div class="about-layout">
  <div class="about-main">
    <h1 class="about-name">Yuto Yokoyama</h1>

    <p class="about-affiliation">
      <strong>Postdoctoral Fellow</strong>. King Abdullah University of Science and Technology (KAUST). Saudi Arabia.
    </p>

    <p>
      I am a postdoctoral fellow in the Splash Lab (Prof. Tadd Truscott) at King Abdullah University of Science and Technology (KAUST), Saudi Arabia.
      From April 2024 to January 2026, I was a JSPS Research Fellow in the Micro/Bio/Nanofluidics Unit (Prof. Amy Shen) at the Okinawa Institute of Science and Technology (OIST).
    </p>

    <p>
      I received my Ph.D. in Mechanical Systems Engineering from Tokyo University of Agriculture and Technology in March 2024 under the supervision of Prof. Yoshiyuki Tagawa.
    </p>

    <p>
      My research focuses on multiphase flows, particularly droplet impact dynamics and flow-induced stress and birefringence in soft and complex materials.
    </p>

    <p>
      My interests include droplet impact, complex fluids, suspensions, flow birefringence, and multiphase flow phenomena.
    </p>
  </div>

  <aside class="about-sidebar">
    <img src="/assets/img/photo_yuto.jpg" alt="Yuto Yokoyama" class="about-photo">

    <div class="about-contact">
      Yuto Yokoyama<br>
      Postdoctoral Fellow<br>
      KAUST<br>
      Saudi Arabia
    </div>
  </aside>
</div>

## News

<ul class="clean-list news-list-custom">
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

## Links

- [Micro/Bio/Nanofluidics Unit at OIST](https://www.oist.jp/research/research-units/mbnu)
- [Yoshiyuki Tagawa's Lab at TUAT](https://sites.google.com/view/tagawalabjp)
- [researchmap](https://researchmap.jp/YutoYokoyama)
- [CV](/cv/)
- [Publications](/publications/)
