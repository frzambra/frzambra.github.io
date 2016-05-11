---
layout: page
permalink: /contact/
title: Contact
show_meta: false
published: true
description: "Contact example.com"
comments: false
mathjax: false
noindex: false
sitemap:
    priority: 0.5
    changefreq: 'monthly'
    lastmod: 2016-02-13
tags:
  - "foo boo"
  - "driving directions"
  - address
---

| <i class="fa fa-twitter"></i> | [@{{ site.owner.twitter }}](https://twitter.com/{{ site.owner.twitter }})  | 
| - | :- |
| <i class="fa fa-envelope"></i> | Francisco Zambrano<br>3310 Holdrege ST.<br>Lincoln, NE| 
| - | :- |
| <i class="fa fa-car"></i>  | [Driving directions]({{ site.url }}/directions) | 
| - | :- |
| <i class="fa fa-paper-plane">  | frzambra@gmail.com | 
| - | :- |

<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12075.314295420001!2d-96.66915809999999!3d40.8317289!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sus!4v1462995383467" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

<a href="https://twitter.com/share" class="twitter-share-button" data-via="{{ site.owner.twitter }}" data-size="small" data-dnt="true">Tweet</a> <a href="javascript:window.print()" class="social-icons" title="Printer friendly format"><i class="fa fa-print"></i></a>

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

{% if site.twitter_widget_id %}
<div class="text-tweets">
<div class="tweets">
<a class="twitter-timeline"
  data-dnt="true"
  width="600"
  height="250"
  href="https://twitter.com/{{ site.owner.twitter }}"
  data-widget-id="{{ site.twitter_widget_id }}"
  data-tweet-limit="2"
  data-chrome="noheader nofooter noborders noscrollbar transparent">
  Recent Tweets</a>
 </div>
<script>
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
</script>
</div>
{% else %}
Twitter stream will show up here if `twitter_widget_id` is present is `_config.yml`
{% endif %}
