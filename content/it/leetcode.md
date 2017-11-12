---
title: "Задачи, которые любят давать на собеседовании"
date: 2017-11-11T14:02:03+03:00
draft: false
categories: ["task"]
source_url: http://www.leetcode.com
source_name: Leetcode
disqus: true
---
Решам задачи с leetcode.com на Ruby
<!--more-->

{{% hider id="leet1" title="#1 Найти в массиве два числа в сумме дающее некое число" %}}

<span class="badge badge-pill badge-success">Easy</span>

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. [отсюда...](https://leetcode.com/problems/two-sum/description/)

**Example:**

```ruby
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1]
```

**Solution:**

```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

def two_sum(nums, target)
  map = {}
  nums.each_with_index do |num,i|
    return [map[num], i] if map[num]
    complement = target - num
    return [map[complement], i] if map[complement]
    map[complement] = i
  end
  puts map
  puts"Not found"
end

arr = [3, 18, 1, 11, 9, 17, 5, 20, 7, 2, 8, 19, 16, 0, 22, 6, 15, 14, 4, 13, 12]
target = 21
i,j = two_sum(arr, target)
puts "#{ arr[i] } + #{ arr[j] } = #{ target }" unless i.nil?
```
{{% /hider %}}

{{% hider id="leet7" title="#7 Вывести в обратном порядке цифры целого 32-битного числа" %}}

<span class="badge badge-pill badge-success">Easy</span>

Given a 32-bit signed integer, reverse digits of an integer [отсюда...](https://leetcode.com/problems/reverse-integer/description/)

Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

**Example:**

```
Input: 123
Output:  321

Input: -123
Output: -321
```

**Solution:**

```ruby
# @param {Integer} x
# @return {Integer}
def reverse(x)
    v = x.abs
    rev = 0
    while(v !=0 ) do
        rev = rev*10 + v % 10
        v = v/10
    end
    x < 0 ? -rev : rev
end
```
{{% /hider %}}

{{% hider id="leet171" title="#171 Написать функцию перевода абревиатуры экселевских колонок в число (AA -> 27)" %}}

<span class="badge badge-pill badge-success">Easy</span>

Given a column title as appear in an Excel sheet, return its corresponding column number. [отсюда...](https://leetcode.com/problems/excel-sheet-column-number/description/)

**Example:**

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
```

**Solution:**

```ruby
# @param {String} s
# @return {Integer}
def title_to_number(s)
  s.reverse.split('').map.with_index{|e,i| 26**i*(e.ord - 'A'.ord + 1)}.sum
end

puts title_to_number('ABC') # => 731
```
{{% /hider %}}
