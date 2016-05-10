---
layout: post
title: "Dynamic time-series of Drought indices"
date: 2013-12-31
tag:
  - Time-series
  - html widget
  - dygraphs
  - Dynamic
  - VCI
  - SPI
use_math: true
---


En este primer post voy a mostrar series temporales en forma dinámica, esto se hizo utilizando el paquete **dygraphs** de "R".

El primer gráfico muestra los valores del indicador de sequía de precipitación estandarizada (SPI), los que se obtubieron a partir de datos de precipitación acumulada mensual (mm) de la estación ubicada en la Universidad de Concepción en la ciudad de Chillán.

Estos reflejan los déficit de precipitación mensual (SPI-1), de tres meses (SPI-3), seis meses (SPI-6) y de doce meses (SPI-12). Bajo la gráfica aparece un panel que permite ajustar el rango de tiempo para hacer un zoom en el periodo de interes.

Se puede observar que los valores más bajo en todos los indicadores (SPI-1 a SPI-12) se encuentran entre los años 1998-1999, periodo en que hubo una [gran sequía][sequia_wiki] en todo Chile.


### SPI Estación UdeC Chillán 

{::nomarkdown}
<iframe src="/../htmlwidgets/dygraphs_spi.html" width=500 height=400 allowtransparency="true"> </iframe>
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
