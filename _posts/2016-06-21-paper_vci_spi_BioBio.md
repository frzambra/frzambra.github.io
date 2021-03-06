---
layout: post
title: "My first research article, the story"
date: 2016-06-21
description: "The story about what have meant to me, my first research article and what I've learnt in the process. "
tag:
  - NDVI
  - drought
  - VCI
  - vegetation
  - R
mathjax: true
comments: true
gistembed: true
published: true
---

On April 2012, I started to work with the National Institute of Agricultural Research (INIA) in the city of Chillan in Chile. My boss in that moment and the person who brought me to INIA was Isaac Maldonado who in that moment was the leader of the Agroclimatic Risk Reports made from INIA to the Ministry of Agriculture of Chile. He gave me the task to work in agricultural drought monitoring to improve the Agroclimatic Risk Reports.

<!--more-->

Before to continue with the story, I'm going to share the link to the article entitled [Sixteen years of Agricultural Drought Assessment of the BioBi­o Region in Chile using a 250m Resolution Vegetation Condition Index (VCI)](https://www.researchgate.net/publication/304012881_Sixteen_years_of_Agricultural_Drought_Assessment_of_the_BioBio_Region_in_Chile_using_a_250m_Resolution_Vegetation_Condition_Index_VCI). Also, I'm going to share the link to a Web mapping app that I've developed with the data used in this article [Webmapping VCI/SPI BioBio](https://frzambra.shinyapps.io/shinyapp/). Just click on the highlights sentences. Now, I continue with the story.

In that time INIA was working with the Vegetation Temperature Condition Index (VTCI) [(Sandhol et al., 2002)](http://dx.doi.org/10.1016/S0034-4257(01)00274-7) which is calculated from Land Surface Temperature (LST) and the Normalized Difference Vegetation index (NDVI). The VTCI was an index site specific and time dependent and not so easy to interpret even more when you need to present it to Government Institutions which are not in the Academia. Having worked in differents government institution in my past years at that moment I had a good knowledge about them. For that, I knew that I needed to work with something not too complex to made the link between science and politics usually a very complex matter. Also, the Agroclimatic Risk Reports are made for the whole Chile, for each region and there are fifteen from North to South. I needed to figure it out how to work with such big scale which I had never made before. But, I liked challenges and at that time I had been working with Matlab and a little bit with [R](www.r-project.org), also I thought if someone is working in somewhere that way, Why not me?

Thus, my research began. I started to work with VTCI index using MATLAB and in a little time, I had all set to obtained automatically for each region. Then, my brother Mauricio which at that time was finishing his Ph.D. in Italy and had been working with **R** developing some packages for hydrology analysis gave me a very good tip, he told me why you don't use **raster** package [Hijmans et al., 2016](https://cran.r-project.org/web/packages/raster/index.html) in R?. What it's that? But, I'm working in Matlab!, I have all set in it. And that means I needed to change all my script to **R**, in which I worked a little but never with remote sensing data. But, in informatic and science my brother always he has given me very good advice and if he told me that I knew was better to follow that advice. That was a key part of this story I changed at that moment to **R** and that made all the difference.

First, I started to work with the **raster** package and soon I realize that is very useful and **R** had a lot of advantages in comparison with Matlab. Then I changed all the VTCI index script to **R**. But until that point, I thought I not had made very much because INIA was working with VTCI but they had been calculated from a different way and with 10 times more on time and using two or three people. Only, I improved the process of calculation in time and person consumption. Then, I needed to make my major contribution.

Searching and researching I found one of the first drought index based on remote sensing data developed by NOAA in the 90s, the Vegetation Condition Index (VCI). That was made by [Kogan (1990)](http://www.tandfonline.com/doi/abs/10.1080/01431169008955102) and was very simple in its formulation and to be explained. When NDVI is used you have the seasonality effect depending on vegetation development. Then, how you considerate the climate variation? one way is using anomalies, but in that case, you have the deviation from the normal value or measures of standard deviation if you standardized the anomaly. However, with VCI you first calculate the minimum seasonality (lowest historical vegetation development) curve associated with low precipitation and high-temperature seasons. Then, you calculate how close the NDVI is at one-time respect to its minimum (worst condition), related with the range between maximum and minimum. With this, you get a percentage which indicates how close are from the worse condition (probably extreme drought). This allows to eliminate the seasonality of the time series of NDVI and only consider the weather impact on vegetation. That made sense to me.

In 2012, I worked with VTCI to get it for fifteen regions of Chile and the year finished working with **R** in deriving the VCI index. Then, considering this a very interesting topic, I sent to my Master thesis advisor as a topic for my dissertation. Which I had left unfinished a couple of years ago, mainly because I started to work. But, I wanted to finish it. My advisor Dr. Mario Lillo and Dr. Diego Rivera then have seen my proposal offer my not to finish my Master instead they offer me to start a Ph.D. program at the University of Concepcion. 

Well, during 2013 I need to improve my knowledge about *R* always I've been a self-learner, but I know a very good course alway worth it. Then I got with [coursera](www.coursera.org) and I found the **Computing for Data Analysis** course made by the Johns Hopkins University which was mainly an introduction to *R*, but a very good material. I was very surprised at the quality of the course. Time after that John Hopkins University start to offer the [Data Science Specialization](https://www.coursera.org/specializations/jhu-data-science) a set of 9 courses, highly recommended. So, during 2013 I improve my R skills. I was working in the derivation of VCI index and simultaneously I started to work my first research article about VCI in Bio-Bio region. Also, I automatize all the process to get the VTCI index and worked in a report to present the VCI index to the Agriculture Ministry of Chile to be included in the Agroclimatic Risk Report. I forgot, another thing I started to learn was [Knitr](http://yihui.name/knitr/), which is for Reproducible Research, a combination of **LaTex** and **R** to made reproducible documents all writing and code in the same document which highly increases researcher productivity. 

The first version of the manuscript was worked only with my advisor Dr. Mario Lillo who always has trusted in my work and has the view to look beyond. His support has been a key even in most part of the path the only support. This version of the article was presented to the [Remote Sensing of Environment](http://www.journals.elsevier.com/remote-sensing-of-environment) journal on February 2014, which corresponds at one of the top remote sensing journals which impact factor now is 5.9. On April 2014 we received the journal reply and was not recommended for publication that was fine for me because I knew it was very difficult to be considered for publication, but totally worth the shot. The comments that the reviewer made were of great help to future improvements of the article.

During 2014 I presented topics related to the article in several conferences in Chile and one in Mexico. 

Another key point in the development of the article was that at the end of 2014 I invited to Dr. Koen Verbist from the International Hydrological Program (IHP) from UNESCO who was working in Chile advising to the Agriculture Ministry of Chile about drought risk to collaborate in the manuscript. His international experience about drought and the many suggestions and corrections that he made to the article were key to improve it.

Working with INIA I developed a template document to show the VCI drought condition for each administrative unit over each one of the 15 Regions. This template summarized the key information for the government to facilitate the decision taking when a particular region is facing drought condition. Also, I presented this template to the National Commission of Agricultural Emergency on January 22th.

{::nomarkdown}
<iframe src="{{ site.url }}/files/monitoreo_sequia.pdf" width="100%" style="height: 50vh;" frameborder="0" allowtransparency="true"></iframe>
{:/nomarkdown}

Since then, the ministry of agriculture of Chile started to include the VCI template in the Agroclimatic Risk Reports made for them through INIA. (e.g. [Reports for Bio-Bio Region, Chile](http://agroclimatico.minagri.gob.cl/informacion-nacional/region-del-biobio/))

On March 2015, INIA fired me from my position working in Agriculture Risk (that is material for another post). But, this helps me to focus on my Ph.D. and made the final improves to the manuscript. Finally, it was submitted to Remote Sensing journal (MDPI) on March 7th, 2016. It was hardly reviewed for four reviewers and two editors. And on June 12th, 2016, was accepted for publication.

Beyond all, this article helps me to improve my skills about **R**, to work with large datasets of remote sensing and I learned to much about drought and **agricultural drought** in particular. This is the floor of my research now I have the skills to work from here, working at bigger scale and with a huge amount of data. That will be shown in my second article.

P.S: Excuse me for my bad English, but I used this blog to improve it.