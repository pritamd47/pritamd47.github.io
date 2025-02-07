---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order.
nav: true
social: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

## peer-reviewed articles
<div class="publications">

{% bibliography --query @article[type!=magazine] %}
</div>
---
---

## conference presentations
<div class="publications">

{% bibliography --query @inproceedings %}

</div>
---
---

## magazine articles
<div class="publications">

{% bibliography --query @article[type=magazine] %}

</div>
