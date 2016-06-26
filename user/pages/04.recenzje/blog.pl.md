---
title: Recenzje
published: true
process:
    markdown: true
    twig: false
routable: true
cache_enable: true
visible: true
content:
    items: '@self.children'
    limit: 5
    pagination: true
    url_taxonomy_filters: true
    order:
        dir: desc
        by: date
child_type: default
---

