---
layout: page
title: Press
permalink: /press/
image_dir: /assets/images/press/
logos:
  - tideshell_logo_dark_top_text.jpg
  - tideshell_logo_light_no_text.png
  - tideshell_logo_light_text_right.png
  - tideshell_logo_text_right.png
covers:
  - tideshell_cover_header.jpg
  - tideshell_cover_hero.png
---

## Contact

[contact@tideshell.studio](mailto:contact@tideshell.studio)

+45 60 74 84 29

Tideshell Studio IVS<br>
Pilestræde 43, 1. sal<br>
1112 Copenhagen <br>
Denmark

## Logos


<div class="image-list">
{%- for img in page.logos -%}
<div class="item">
<a href="{{page.image_dir}}{{img}}" data-lightbox="press_media" data-title="{{img}}" style="background-image: url('{{page.image_dir}}{{img}}');"></a>
</div>
{%- endfor -%}
</div>


## Covers

<div class="image-list">
{%- for img in page.covers -%}
<div class="item">
<a href="{{page.image_dir}}{{img}}" data-lightbox="press_media" data-title="{{img}}" style="background-image: url('{{page.image_dir}}{{img}}');"></a>
</div>
{%- endfor -%}
</div>
