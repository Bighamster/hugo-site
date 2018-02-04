---
title: "Useful Codes"
date: 2018-02-23T23:03:26+03:00
draft: false
categories: ["useful"]
---

```bash
#
# Удаление ремоутной ветки
#
git push origin :dev3
#
# Конвертим erb2slim
#
gem install html2slim
find . -name '*html.erb' | xargs ruby -e 'ARGV.each { |i| puts "erb2slim #{i} #{i.sub(/erb$/,"slim")} --delete"}' | bash
#
# Красивый лог-аналайзер
#
gem install log_analyzer
log_analyzer --filter=all --sort=time log/development.log
#
# Поиск в логе
#
grep -A 2 /locations/autocomplete  development.log | grep -o -P '{"q"=>"\d+' | grep -o -P '\d+' | less -N
#
# Рисовалка схемы базы данных
#
sudo java -jar ~/Downloads/schemaSpy_5.0.0.jar -t pgsql -db xoma_development -host localhost -dp ~/Downloads/postgresql-42.2.0.jre7.jar -noschema -u bighamster -p Outlawer248 -o ~/Downloads/xoma-db
```
<!--more-->
