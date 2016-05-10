---
layout: post
title: "Dynamic time-series of drought indices"
date: 2015-07-02
description: "In this first post I'm going to show dynamic time-series using the htmlwidget **dygraph** in R."
tag:
  - Time-series
  - html widget
  - dygraphs
  - Dynamic
  - VCI
  - SPI
mathjax: true
gistembed: true
published: true
---

In this first post I'm going to show dynamic time-series using the htmlwidget **dygraph** in R.
<!--more-->

The first dynamic plot show values for the standardized drought index (SPI), calculated from monthly precipitation data (mm) from the University of Concepcion weather station, located in the city of Chillan, Chile. These values represent monthly rainfall deficit for one-month (SPI-1), three-month (SPI-3), six-month (SPI-6) and twelve-month (SPI-12). Below the dynamic plot there is a box panel which allows adjusting the time range to zoom in and zoom out according to your interest.

It is possible to observe that the lowest values in all time-scales (1 to 12) are from the year 1998 to 1999, period in which a [severe drought][sequia_wiki] event occurred over Chile.

## Standarized Precipitation Index(SPI) for UdeC weather station.

{::nomarkdown}
<iframe src="/../htmlwidgets/dygraphs_spi.html" width=700 style="position:absolute;Left:-15;" frameborder="0" allowtransparency="true" scrolling=no> </iframe>
{:/nomarkdown}

The second dynamic plot below shows the values of Vegetation Condition Index (VCI). This index is a measure of the vegetation status compared to its historic behavior.  In this case, the historic data consider the period from the year 2000 to the year 2012. Also, in the same plot the curves of Normalized Difference Vegetation Index (NDVI) are presented. The NDVI index it is a measure of vegetation development.  The $NDVI_{max}$ correspond to the historical maximum values of NDVI which are associated with good weather conditions. In contrast, the  $NDVI_{min}$ correspond to the historical minimum NDVI values, associated with bad weather conditions as low rainfall and high temperature.

The equation used for the calculation of VCI is the next:

$$
VCI = \frac{NDVI-NDVI_{min}}{NDVI_{max}-NDVI_{min}}
$$

### VCI puntual value in the Bío-Bío region of Chile

{::nomarkdown}
<iframe src="/../htmlwidgets/dygraphs_vci.html" width=100% height=400 allowtransparency="true"> </iframe>
{:/nomarkdown}

[sequia_wiki]: https://es.wikipedia.org/wiki/Sequ%C3%ADa_en_Chile_de_1998-1999
