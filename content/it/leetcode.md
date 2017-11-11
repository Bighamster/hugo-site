---
title: "Задачи, которые любят давать на собеседовании"
date: 2017-11-11T14:02:03+03:00
draft: false
categories: ["task"]
source_url: www.leetcode.com
source_name: Leetcode
disqus: true
---
Решаю задачи с leetcode.com на Ruby
<!--more-->

**#171**

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
```

Solution:

```ruby
# @param {String} s
# @return {Integer}
def title_to_number(s)
  s.reverse.split('').map.with_index{|e,i| 26**i*(e.ord - 'A'.ord + 1)}.sum
end

puts title_to_number('ABC') # => 731

```
