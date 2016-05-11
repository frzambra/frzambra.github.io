---
layout: post
title: "Landcover IGBP dynamic map of Chile"
date: 2015-07-06
description: "Here I show a dynamic map of landcover type using the htmlwidget **leaflet** in R."
tag:
  - Leaflet
  - htmlwidget
  - dygraphs
  - Dynamic
  - Landcover
  - Chile
mathjax: true
comments: true
gistembed: true
published: true
---

In this post, a classification map of landcover type is showed, the product classification of landcover from sensor MODIS of  NASA/USGS [MCD12Q1] [link_MCD12Q1] and the classification scheme of the International Geosphere Biosphere Programme (IGBP) was used, which considers 17 classes.
<!--more-->

A grouping of classes according to the type of vegetation was done. Finally, the map shows 10 classes: water, forest, scrubland, savannas, grasslands, wetlands, crops, urban, snow/ice and little vegetation.

The map considers a geographical extension from 30° and 40° of South Latitude for the Chilean territory. This extension ranges from the Coquimbo Region to the Region of  Los Rios.

This scheme presents a good agreement with what is on land. It can be seen that identifies urban areas, which is mainly reflected in the cities of Santiago, Rancagua, Talca. Chillán; among the main ones.
 
In addition, from Santiago to the north a larger area covered by the  class (shrubland) which is characteristic of this area with less vegetation. In the case of the valleys (near to rivers areas) can be seen croplands areas is observed. The central area is dominated by the classes crops, grassland, and forest. From the Bio-Bio region to the South, the classification presented is mainly forest, with less proportion of croplands and other classes.

# Landcover of Chile year 2013 30°S-40°S                                    

{::nomarkdown}
<iframe src="/../htmlwidgets/landcover_2013.html" width=600 height=600 frameborder="0" allowtransparency="true" scrolling=no> </iframe>
{:/nomarkdown}

[link_MCD12Q1]: https://lpdaac.usgs.gov/dataset_discovery/modis/modi_products_table/mcd12q1
[openstreetmap]: http://www.openstreetmap.org/