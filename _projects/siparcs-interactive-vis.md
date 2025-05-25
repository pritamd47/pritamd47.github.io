---
layout: distill
title: Plotting large climate data interactively
description: Climate data can be large. Not just climate data, similar datasets – satellite remote sensing, lidar, model data - all can be large, and difficult to work with, including visualizing them performantly. In this project, I explore different ways to visualize large data, with the goal to let users interact with the underlying large dataset in a performant way.
img:
importance: 2
category: phd

# tags: distill formatting
date: 2025-05-25
featured: true
mermaid:
  enabled: true
  zoomable: false
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true
---

# So you want to let the world interact with your cool dataset?

A significant chunk of the scientific community now deals with large datasets. If you're a climate scientist, working with remote sensing datasets, or computing vision datasets, you must have come across the hurdles that go along with working with large datasets. Not only processing these datasets can be difficult, visualizing them also poses significant challenge.

When working with visualizing large datasets, it is common to wait several seconds, if not minutes, for a plot to render. Our brains used to instant feedback from our digital devices is instantly bothered by such a lag. How can we then let users interact with it - pan around, zoom, click, and all such fancy manuvers – while still ensuring performanece?

This article will demonstrate a few ways in which this can be achieved.

But first, let's define the problem statement.

## Problem statement

We want to build a dashboard for a large dataset.

- The dataset is in raster format.
- The visualization will be accessed by target users through a browser.
- The users should have the ability to pan around, zoom, and click (to perform some additional action, such a visualize in a separate dimension).

## Server and Client

The first concept required to be understood is that of the Server-Client relationship.

Server is a computer that "serves" the data, can be thought of as the "supplier". This is the computer (or a bunch of computers) that supply the data, or the visualization, or _compute_ for the visualization.

The Client computer is used by the user to "consume" the visualization. The client will access the visualization using a browser.

![client-server-diagram-wikipedia](../../assets/img/siparcs/Client-server-model.svg)
