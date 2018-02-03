---
title: Конфигурируем Ruby модуль
date: 2017-11-06T16:37:27+03:00
draft: false
categories: ["it-javascript"]
source_url: https://habrahabr.ru/post/242729/
source_name: Хабрахабр
---

Пример собственного конфигуратора, если вдруг нужен

<!--more-->

```ruby
module Sample
  DefaultConfig = Struct.new(:a, :b) do
    def initialize
      self.a = 10
      self.b = 'test'
    end
  end

  def self.configure
    @config = DefaultConfig.new
    yield(@config) if block_given?
    @config
  end

  def self.config
    @config || configure
  end
end
```
