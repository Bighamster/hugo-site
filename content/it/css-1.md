---
title: Дивчик с "летающими" краями
date: 2017-12-24T14:00:58+03:00
draft: false
categories: ["css"]
---

<style>
  .fly-edge {
    background-color: #40AFE8;
    width: 330px;
  }

  .fly-edge-msg {
    font: normal normal normal 15px/1.4em Basic,sans-serif;
    color: #FFFFFF;
    text-align: center;
  }

  .fly-edge-shadow {
    height: 16px;
    width: 330px;
    background-image: url('/images/shadow-1.png');
    background-repeat: no-repeat;
  }
</style>

<div class="fly-edge">
  <div style="min-height: 16px;"></div>
  <div class="fly-edge-msg">
    Дивчик с "летающими" краями!
  </div>
  <div style="min-height: 16px;"></div>
</div>
<div class="fly-edge-shadow"></div>
<!--more-->

```html
<style>
  .fly-edge {
    background-color: #40AFE8;
    width: 330px;
  }

  .fly-edge-msg {
    font: normal normal normal 15px/1.4em Basic,sans-serif;
    color: #FFFFFF;
    text-align: center;
  }

  .fly-edge-shadow {
    height: 16px;
    width: 330px;
    background-image: url('/images/shadow-1.png');
    background-repeat: no-repeat;
  }
</style>

<div class="fly-edge">
  <div style="min-height: 16px;"></div>
  <div class="fly-edge-msg">
    Дивчик с "летающими" краями!
  </div>
  <div style="min-height: 16px;"></div>
</div>
<div class="fly-edge-shadow"></div>
```
