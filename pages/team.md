---
layout: page
title: Team
permalink: /team/
---

We're a partially distributed team, with an office in Copenhagen ([Spilhuset](http://spilhuset.com)). We all work on our game [The Tideshell Keeper]({{ site.baseurl }}{% link pages/games/the_tideshell_keeper.md %}), some full-time and some part-time.

The current team consists of three people, but many more have worked on the game and contributed in various ways. 

The following is an incomplete list.

### Current Team

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


### Contributors

<div class="member-list">
  {%- assign members = site.contributors | where: "active", true -%}
  {%- for member in members  -%}
    <div class="item">
      <img src="/assets/images/team/{{member.image}}" alt="{{member.name}}, {{member.role}}"/>
      <h2>{{member.name}}</h2>
      <h5>{{member.role}}</h5>
    </div>
  {%- endfor -%}
</div>
