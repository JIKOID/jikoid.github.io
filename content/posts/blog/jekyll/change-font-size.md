---
date: "2024-05-15 10:00"
title: "Github 블로그 폰트 사이즈 변경하기 (Minimal Mistakes)"
description: "Github jekyll 블로그에서 폰트 사이즈 변경한 내용입니다."
categories: blog/jekyll
tags: ["github", "minimal_mistakes"]
---


이번에는 Github 블로그에 폰트 사이즈를 변경해보려고 한다.


## Font 사이즈 변경
추가로 Font 사이즈를 변경하려고 한다.

Font 사이즈는 `_sass/minimal-mistakes/_reset.scss` 에서 변경할 수 있다.

```html
html {
  /* apply a natural box layout model to all elements */
  box-sizing: border-box;
  background-color: $background-color;
  font-size: 14px;                    # font size 변경

  @include breakpoint($medium) {
    font-size: 16px;
  }

  @include breakpoint($large) {
    font-size: 18px;
  }

  @include breakpoint($x-large) {
    font-size: 20px;
  }

  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
```