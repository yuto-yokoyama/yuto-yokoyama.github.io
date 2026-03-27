---
title: Home
---

<div style="display: flex; align-items: flex-start; gap: 24px; flex-wrap: wrap;">

  <div style="flex: 1; min-width: 280px;">
    <p>
      # **Yuto Yokoyama (横山 裕杜)**
      Postdoctoral Fellow, King Abludlah University of Science and Tehnology (KAUST)
    </p>

    <p>
      I am a postdoctoral fellow in the Splash Lab (Prof. Tadd Truscott) at King Abdullah University of Science and Technology (KAUST), Saudi Arabia. From April 2024 to January 2026, I was a JSPS Research Fellow in the Micro/Bio/Nanofluidics Unit (Prof. Amy Shen) at the Okinawa Institute of Science and Technology (OIST). I received my Ph.D. in Mechanical Systems Engineering from Tokyo University of Agriculture and Technology in March 2024 under the supervision of Prof. Yoshiyuki Tagawa.
    </p>
    
    <p>
      My research focuses on multiphase flows, particularly droplet impact dynamics and flow-induced stress and birefringence in soft and complex materials.
    </p>
  </div>

  <div style="flex: 0 0 220px;">
    <img src="/assets/img/photo_yuto.jpg" alt="Profile photo" style="width: 100%; max-width: 220px; height: auto; border: none;" />
  </div>

</div>

<br>
## Research Interests
- Multiphase flow
- Droplet
- Non-Newtonian fluids
- Suspension
- Biomaterial

<br>
## News
{% assign items = site.data.news | sort: "date" | reverse %}
{% for n in items limit:5 %}
- {{ n.text }}{% if n.url and n.url != "" %} [{{ n.link_label }}]({{ n.url }}){% endif %} ({{ n.date }})
{% endfor %}

[See all news](/news/)

<br>
## Links
- [Micro/Bio/Nanofluidics Unit at OIST](https://www.oist.jp/research/research-units/mbnu)
- [Yoshiyuki Tagawa's Lab at TUAT](https://sites.google.com/view/tagawalabjp)
- [researchmap](https://researchmap.jp/YutoYokoyama)
