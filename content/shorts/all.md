
Redis

```sh
# redis-server port 7770 db:0 - удаляем ключи по маске
redis-cli -p 7770 -n 0 KEYS 'cache:*' | xargs redis-cli -p 7770 -n 0 DEL
```

Отключаем Baloo

```sh
balooctl status
balooctl disable
rm -rf ~/.local/share/baloo
# System Settings -> Search -> File Search -> Disable
```

Установка Java7 (для старых программ)

 ```sh
 # How to install Java 7
# Download installer
http://www.oracle.com/technetwork/java/javaee/downloads/java-ee-sdk-7-jdk-7u21-downloads-1956231.html
# Run
chmod +x java_ee_sdk-7-jdk7-linux-x64-ml.sh
./java_ee_sdk-7-jdk7-linux-x64-ml.sh
sudo chown -R bighamster glassfish4
# Set env
export INSTALL4J_JAVA_HOME="$HOME/glassfish4/jdk7"
export JAVA_HOME="$HOME/glassfish4/jdk7"
export JRE_HOME="$HOME/glassfish4/jdk7"
export PATH=$PATH:$JRE_HOME/bin:$JAVA_HOME/bin
# Run
sudo update-alternatives --install "/usr/bin/java" "java" "/home/bighamster/glassfish4/jdk7/bin/java" 1
sudo update-alternatives --install "/usr/bin/javac" "javac" "/home/bighamster/glassfish4/jdk7/bin/javac" 1
sudo update-alternatives --install "/usr/bin/javaws" "javaws" "/home/bighamster/glassfish4/jdk7/bin/javaws" 1
sudo update-alternatives --set java /home/bighamster/glassfish4/jdk7/bin/java
sudo update-alternatives --set javac /home/bighamster/glassfish4/jdk7/bin/javac
sudo update-alternatives --set javaws /home/bighamster/glassfish4/jdk7/bin/javaws
```


[Picture stubs http://via.placeholder.com/400x200](http://via.placeholder.com/400x200)

Dump

```sh
# GNU
pg_dump --username=postgres --dbname=drtv_production  --schema=drtv  --column-inserts --no-owner --no-privileges --inserts --file=drtv_dump.sql && sed -i -e '/^SET\ .\+\;/d' drtv_dump.sql && sed -i -e '/^CREATE SCHEMA drtv\;/d' drtv_dump.sql && zip drtv_dump drtv_dump.sql && less drtv_dump.sql && du -sh drtv_dump.*
# Mac version for original sed
sed -i '' -E '/^SET\ .+;/d' drtv_dump.sql && && sed -i '' -E '/^CREATE SCHEMA drtv\;/d' drtv_dump.sql
# На маке замена дефолтного sed
brew install gnu-sed --with-default-names
hash -r
```

RVM

```sh
# Инсталяция  RVM - https://rvm.io
rvm autolibs enable       - включаем автоматическую доустановку пакетов
rvm env                   - смотрим какие переменные окружения используются
rvm version
rvm list gemsets
rvm --default use 2.5.0
# Ставим RUBY
rvm use                   - смотрим путь до текущей версии руби
rvm list known            - смотрим все доступные к инсталяции версии
rvm install 2.5.0         - ставим нужную версию руби
rvm use 2.5.0 --default   - говорим, что надо использовать новую версию и назначаем ее дефолтной
rvm list gemsets          - смотрим, что текущий гемсет изменился
bundle install            - из рута проекта, чтобы все библиотеки переустановились

# Если ошибка: ERROR: Gem bundler is not installed, run `gem install bundler` first.
rvm reload
```

Rails

```sh
# EagerLoad
Rails.application.eager_load!
# Route helper within console
app.root_path
# место определения функции
warden.method(:authenticate!).source_location
# Редактируем настройки в Rails 5.2
EDITOR='atom --wait' rails credentials:edit
# Посмотреть все пути к assets
Rails.application.config.assets.paths
```

[Простой лог-аналайзер](https://github.com/igorkasyanchuk/log_analyzer)

```sh
gem install log_analyzer
log_analyzer --filter=all --sort=time log/development.log
```

Git

```sh
# смотрим удаленные репозитории
git remote -v
# смотрим ремоунтные ветки
git branch -r
# смотрим локальные и ремоунтные ветки
git branch -a
# детальная информация по удаленной ветке
git remote show origin
# удаляем репозиторий
git remote rm origin
# подключаем репозиторий
git remote add origin git@bitbucket.org:[login]/[project].git
# если сменился удаленный репозитарий, то привязать ветки можно так:
git branch --set-upstream-to=origin/master master

# удаляем ремоутную ветку
git push origin :old_dev
git push origin --delete old_dev
# удаляем локальную ветку
git branch -D tmp
# удалить все ветки, которых нет во внешнем репозитории
git remote prune origin

# Если даже на какой-либо объект нет явной ссылки, то на протяжении 30 дней
# на все объекты сохраняется ссылка в reflog.
# По этому когда производится уборка мусора все коммиты за последний месяц всё равно остаются в репозитории.
# Чтобы избавиться от таких недоступных комитов, выполним последовательность команд:
git reflog expire --expire=1.minute refs/heads/master
git fsck –unreachable
git gc
```

Конвертим erb2slim

```sh
gem install html2slim
find . -name '*html.erb' | xargs ruby -e 'ARGV.each { |i| puts "erb2slim #{i} #{i.sub(/erb$/,"slim")} --delete"}' | bash
```

[Рисовалка схемы базы данных](http://schemaspy.sourceforge.net/) ([schemaSpy_5.0.0.jar](/lib/schemaSpy_5.0.0.jar)) ([PostgreSQL driver](https://jdbc.postgresql.org/download.html))

```sh
sudo apt install graphviz

sudo java -jar ~/Documents/lb/schemaSpy_5.0.0.jar -t pgsql -db [db_name] -u [login] -p [password] -noschema -host localhost -dp ~/Documents/lib/postgresql-42.2.0.jre7.jar -o ~/Documents/db-schema

curl file:///home/bighamster/Documents/db-schema/relationships.html
```
