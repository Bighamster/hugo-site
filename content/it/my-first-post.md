---
title: "My First Post"
date: 2017-10-07T18:01:52+03:00
draft: true
categories: ["development","ruby"]
---

Моя первая страница! )))

{{< vimeo 146022717 >}}

{{< tweet 877500564405444608 >}}

{{< speakerdeck 4e8126e72d853c0060001f97 >}}

[Neat]({{< ref "my-first-post.md" >}})
[Who]({{< relref "#who" >}})

{{< highlight ruby "linenos=inline,hl_lines=2,linenostart=1" >}}
  def header(left, center, right)
    pdf.repeat(:all) do
      pdf.text_box( left,   at: [10,  540], width: 300)
      pdf.text_box( center, at: [360, 540], width: 300)
      pdf.text_box( right,  at: [600, 540], width: 300)
    end
  end
{{< / highlight >}}

{{< gist spf13 7896402 "img.html" >}}

{{< gist spf13 7896402 >}}

{{< figure src="/img/pig.jpg" title="Steve Francia" >}}

{{< highlight go >}} A bunch of code here {{< /highlight >}}

{{< youtube k3SkkRilxrY >}}
