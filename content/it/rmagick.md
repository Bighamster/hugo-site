---
title: Установка rmagick -v '2.16.0' на Mac
date: 2018-02-03T14:39:26+03:00
draft: false
categories: ["it-rails"]
source_url: https://stackoverflow.com/questions/42250292/rails-cant-install-rmagick-2-16-0-cant-find-magickwand-h
source_name: Stackoverflow
---

```
brew unlink imagemagick
brew install imagemagick@6 && brew link imagemagick@6 --force
echo 'export PATH="/usr/local/opt/imagemagick@6/bin:$PATH"' >> ~/.bash_profile

gem install rmagick -v '2.16.0'
```

<!--more-->
