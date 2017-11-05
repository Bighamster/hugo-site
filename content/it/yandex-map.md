---
title: "API Яндекс.Карт"
date: 2017-11-01T12:33:14+03:00
draft: false
categories: ["it-other"]
source_url: https://tech.yandex.ru/maps/
source_name: "Yandex"
---
Простой пример подключения yandex-map на сайт
<!--more-->

<head>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
</head>

**Подключаем яндексовское API**

```html
<head>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
</head>
```

**Добавляем карту**

```js
;(function($) { 'use strict';

  ymaps.ready(function () {

    var map = new ymaps.Map("map", {
        center: [55.753215, 37.622504], // [latitude, longitude]
          zoom: 12,
      controls: ["zoomControl","typeSelector","trafficControl","fullscreenControl","rulerControl"]
    });

    map.behaviors.disable(['scrollZoom']);
    map.copyrights.add('Компания "Рога и Копыта"');

    var loc = new ymaps.Placemark(gon.coord,
        {
          iconCaption: gon.loctitle
        },
        {
          preset: 'islands#orangeDotIconWithCaption',
        });

    map.geoObjects.add(loc); // Размещение геообъекта на карте.
  });
})(jQuery);
```

<div id="map" style="height: 400px">

<script>
  ;(function($) { 'use strict';

    ymaps.ready(function () {

      var map = new ymaps.Map("map", {
          center: [55.753215, 37.622504], // [latitude, longitude]
            zoom: 12,
        controls: ["zoomControl","typeSelector","trafficControl","fullscreenControl","rulerControl"]
      });

      map.behaviors.disable(['scrollZoom']);
      map.copyrights.add('Компания "Рога и Копыта"');

      var loc = new ymaps.Placemark(gon.coord,
          {
            iconCaption: gon.loctitle
          },
          {
            preset: 'islands#orangeDotIconWithCaption',
          });

      map.geoObjects.add(loc); // Размещение геообъекта на карте.
    });
  })(jQuery);
</script>
