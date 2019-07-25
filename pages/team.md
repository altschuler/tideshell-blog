---
layout: page
title: Team
permalink: /team/
---

We're a partially distributed team, with an office in Copenhagen ([Spilhuset](http://spilhuset.com)). We all work on our game [Noon's Journey]({{ site.baseurl }}{% link pages/games/noons_journey.md %}), some full-time and some part-time.

There are more members of the team who'll be added to this page shortly.

<div class="member-list">
  {%- assign members = site.team_members | where: "active", true -%}
  {%- for member in members  -%}
    <div class="item">
      <img src="/assets/images/team/{{member.image}}" alt="{{member.name}}, {{member.role}}"/>
      <h2>{{member.name}}</h2>
      <h5>{{member.role}}</h5>
    </div>
  {%- endfor -%}
</div>
