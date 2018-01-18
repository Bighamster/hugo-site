---
title: "Полупозрачная рамка"
date: 2018-01-17T19:49:57+03:00
draft: false
categories: ["css"]
source_url: https://habrahabr.ru/company/raiffeisenbank/blog/346770/
source_name: Недокументированные приемы CSS
---
<style>
  .inline {
    display: flex;
  }
  .parent {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    background-image: url('/pics/brick-wall.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .frame {
    width: 50%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .block-v1 {
    padding: 30px;
    background-color: white;
  }
  .block-v2 {
    width: 50%;
    padding: 30px;
    border: 20px solid hsla(0,0%, 100%, 0.5);
    background-color: white;
    background-clip: padding-box;
  }
</style>


<div class="inline">
  <div class="parent">
    <div class="frame">
      <div class="block-v1">
        Version-1: Lorem ipsum dolor sit amet ...
      </div>
    </div>
  </div>

  <div class="parent">
    <div class="block-v2">
      Version-2: Lorem ipsum dolor sit amet ...
    </div>
  </div>
</div>

<!--more-->

{{< highlight html "linenos=table,linenostart=1" >}}
<style>
  .inline {
    display: flex;
  }
  .parent {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    background-image: url('/pics/brick-wall.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .frame {
    width: 50%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .block-v1 {
    padding: 30px;
    background-color: white;
  }
  .block-v2 {
    width: 50%;
    padding: 30px;
    border: 20px solid hsla(0,0%, 100%, 0.5);
    background-color: white;
    background-clip: padding-box;
  }
</style>


<div class="inline">
  <div class="parent">
    <div class="frame">
      <div class="block-v1">
        Version-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>

  <div class="parent">
    <div class="block-v2">
      Version-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

{{< / highlight >}}
