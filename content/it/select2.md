---
title: "Обманываем мультиселект Select2"
date: 2017-12-02T15:11:38+03:00
draft: false
categories: ["it-javascript"]
disqus: true
---
Известно, что Select2 в режиме **multiple: true**, во время сабмита формы отдаст только первое выбранное значение.
Чтобы вернуть все значения (разделенные например запятой) можно воспользоваться хуком jQuery:

{{< highlight javascript "linenos=table,linenostart=1" >}}

$.valHooks[ 'select-multiple' ] = {
  get:  function( elem ) {
          var $this = $( elem );

          if ($this.hasClass("select2-hidden-accessible")) {

            return $.map($this.select2('data'), function(e){ return e.id;}).join(',');
          } else {

            return $.valHooks['select'].get( elem );
          }
        },
  set:  function(elem, value) {

          return $.valHooks['select'].set( elem, value);
        }
  };
{{< / highlight >}}

* Обязательно проксировать оба метода get/set

<!--more-->
