---
layout: post
title: "Shiny app to monitor drought in Chile"
date: 2015-07-31
description: "Here I show an a app for the monitoring of drought usign vegetation indices usign the package **shiny** in R and package **ggplot**."
tag:
  - shiny
  - drought
  - VCI
  - vegetation
  - R
mathjax: true
comments: true
gistembed: true
published: true
---

# Drought Monitor

This application allows you to display maps by each region of Chile and compare between two dates the average at the community level of two drought indicators: (1) The Vegetation Condition Index (VCI) and (2) Standardized Vegetation Anomaly NDVI ( Anom. STD NDVI). These indicators provide information on the response of vegetation to weather conditions. Years with good weather, with high precipitation and low temperature, are favorable for the crop development (high values of the index). In contrast, years with low rainfall and high temperatures (eg. Nina),  negatively affecting  the vegetation development (low values of the index), which produce a lack on crop yields and affecting agriculture and food security.

This application was made using mainly the packages Shiny and *raster, ggplot2, MapTools, sp * and was made possible thanks to the collaboration of [Joshua Kunst] [jkunst] an outstanding [R user in Chile] [userRChile].

{::nomarkdown}
<iframe src="https://frzambra.shinyapps.io/Monitor_Sequia" width=600 height=600 frameborder="0" allowtransparency="true" scrolling=no> </iframe>
{:/nomarkdown}

[jkunst]:http://jkunst.com/
[userRChile]:http://www.meetup.com/es/useRchile/