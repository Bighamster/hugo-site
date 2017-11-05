---
title: "Про Meta-тэги"
date: 2017-10-31T11:54:30+03:00
draft: true
categories: ["it-other"]
---
Здесь собрано описание разных полезных meta-тэгов
<!--more-->

1.

```html
<meta name="referrer" content="always">
```

1. В iOS есть опция сохранять веб сайты на рабочем столе в виде приложений, но для адаптации сайта нужно знать несколько моментов. Во первых для возможности отображения сайта в полноэкранном режиме, необходимо в добавить метатег **mobile-web-app-capable** иначе наш сайт-приложение при клике на иконку будет открываться в сафари как обычный сайт. Так же можем поменять цвет статусбара.

```html
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="UI / UX">
```
