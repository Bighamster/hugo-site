---
title: "Hugo"
date: 2017-10-23T12:15:30+03:00
draft: false
categories: ["helper"]
source_url: "https://gohugo.io/getting-started/installing/"
source_name: "gohugo.io"
---

Нужна была "площадка для игр" с разным фронтэндом и склад примеров (html/css) заботливо стыреных с просторов интернета. Ранее это все лежало кучей файлов и архивов, чаще всего в забвении. Кроме того, где-то надо было хранить многочисленные "рецепты" типа "установка определенной версии nokogiri на debian из шкуры заказчика" и т.п. Да и огромное количество ссылок на любимые ресурсы в сети тоже требуют хоть какой-то систематизации.
<!--more-->
На конец 2017.г были в разной степени опробованы Jekyll, Middleman и Hugo. Понравился только Hugo за счет быстрой работы, качественной документации и активного саппорта со стороны создателей. Ну а эффект от странностей языка Go проходит примерно за 2-3 дня. К слову сказать, Go всего лишь в два раза медленнее C, что просто офигенный результат по сравнению с Ruby/Python.

# Кое-что про Go &amp; HUGO

- почти нет операторов, за исключением оператора присваивания (:=)
- все "операторы" типа "if / else / and / or" это функции
- аргументы функции разделяются пробелом
- чтобы не запутаться, где кончаются аргументы и начинается другая функция, оборачиваем скобками ()
- скобки () это что-то вроде лямбды-функции возвращающей результат последней команды (как в Ruby)
- внутри блока if-else невозможно изменить значение переменной объявленной выше этого блока, чтобы обойти эту проблему в HUGO существует [Scratch](https://gohugo.io/functions/scratch#readout)

```
  {{ $a := 1 }}
  {{ if true }}
    {{ $a := 2 }}
  {{ end }}

  <p>$a = {{ $a }}</p> <!-- Вернет $a = 1  -->
```
# Про themes для HUGO

Любая тема не избавит от необходимости разбираться, как она устроена и как она предполагает подготовку данных. Гораздо продуктивнее потратить 2-3 дня на изучение документации + эксперименты и создать собственную, которую всегда легче и приятнее менять под растущие аппетиты). И разумеется надо изучать устройство других тем и дополнять свою удачными приемами и решениями.

# Установка HUGO на Ubuntu

Так как чаще всего apt-get пытается установить **старую версию**, забираем архив
непосредственно с [GitHub](https://github.com/gohugoio/hugo/releases/latest)

```bash
 # create the directory if needed
mkdir -p ~/bin

# make it the working directory
cd ~/bin

# extract the tarball
tar -xvzf ~/Downloads/hugo_0.30.2_Linux-64bit.tar.gz

# verify that it runs
hugo version
Hugo Static Site Generator v0.30.2 linux/amd64 BuildDate: 2017-10-19T14:34:27+03:00
```

Редкий случай, когда целый движок это просто один исполняемый файл)))
