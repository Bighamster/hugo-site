---
title: Visualize Database Schema – PostgreSQL DB – Rails 5
date: 2018-01-24T22:09:30+03:00
draft: false
categories: ["db"]
source_url: https://blog.kodius.io/2017/01/26/visualize-database-schema-postgresql-db-rails-5/
source_name: SchemaSpy and Graphviz
---

{{< figure src="/pics/db-visualize.png" link="" target="_blank">}}

<!--more-->

```
#
# Генерим схему
#
sudo java -jar ~/Downloads/schemaSpy_5.0.0.jar -t pgsql -db xoma_development -host localhost -dp ~/Downloads/postgresql-42.2.0.jre7.jar -noschema -u bighamster -p password -o ~/Downloads/xoma-db
```
