---
layout: post
title: "Dynamic time-series of drought indices"
date: 2015-07-02
description: "En este primer post voy a mostrar series temporales en forma dinámica, esto se hizo utilizando el paquete **dygraphs** de 'R'."
tag:
  - Time-series
  - html widget
  - dygraphs
  - Dynamic
  - VCI
  - SPI
show_meta: true
comments: true
mathjax: true
gistembed: true
published: true
noindex: false
nofollow: false
---

In this first post I'm going to show dynamic time-series using the htmlwidget **dygraph** in R.

The first dynamic plot show values for the standardized drought index (SPI), calculated from monthly precipitation data (mm) from the University of Concepcion weather station, located in the city of Chillan, Chile. These values represent monthly rainfall deficit for one-month (SPI-1), three-month (SPI-3), six-month (SPI-6) and twelve-month (SPI-12). Below the dynamic plot there is a box panel which allows adjusting the time range to zoom in and zoom out according to your interest.

It is possible to observe that the lowest values in all time-scales (1 to 12) are from the year 1998 to 1999, period in which a [severe drought][sequia_wiki] event occurred over Chile.

## Standarized Precipitation Index(SPI) for UdeC weather station.

{::nomarkdown}
<iframe src="/../htmlwidgets/dygraphs_spi.html" width=800 height=400 frameborder="0" allowtransparency="true"> </iframe>
{:/nomarkdown}

La segunda figura que se presenta a continuación muestra los valores del índice de sequía de condición de la vegetación (VCI), el que representa una medida del estado de la vegetación con respecto a su comportamiento histórico para igual periodo dede el año 2000. Además, junto al VCI se muestran las curvas del índice de vegetación de diferencia normalizada (NDVI), máximo, mínimo y medido. Los valores más bajos del VCI se encuentran para este caso a fines del 2008 y principios del 2009.

La ecuación que refleja el calculo del índice VCI a partir de los valores de NDVI es la siguiente:

$$
VCI = \frac{NDVI-NDVI_{min}}{NDVI_{max}-NDVI_{min}}
$$

Esto se puede ver y corroborar con los datos de la figura siguiente:

### VCI en un punto de la región del Bío-Bío

{::nomarkdown}
<iframe src="/../htmlwidgets/dygraphs_vci.html" width=100% height=400 allowtransparency="true"> </iframe>
{:/nomarkdown}

[sequia_wiki]: https://es.wikipedia.org/wiki/Sequ%C3%ADa_en_Chile_de_1998-1999
