---
title: "Github 블로그 toc 변경하기 (Minimal Mistakes)"
tags: github minimal_mistakes toc
categories: blog github_jekyll
layout: single
author_profile: true
toc: true
toc_sticky: true
show_date: true
---

이번에는 Github 블로그에 toc를 변경해보려고 한다.  
<br><br>

## toc background color 변경하기

<br>
먼저 toc 의 background color를 변경해보려고 한다.    
<br>
toc의 background color 가 어디에서 설정되어있는지 확인해보니 `_sass/minimal-mistakes/_navigation.scss` 에서 설정되어있는 것을 확인할 수 있다.  
<br>
아래로 내리다 보면 `.toc` 아래에 있는 `.nav__title` 부분을 볼 수 있는데 여기서 background 값을 변경하면 된다.  
<br>

```scss
.nav__title {
color: #fff;
font-size: $type-size-6;
background: $primary-color;    << 변경
border-top-left-radius: $border-radius;
border-top-right-radius: $border-radius;
}
```
<br>
<br>
따라서 확인해보면 background 의 값이 `$primary-color` 의 변수로 되어있어 확인해보니 `_sass/minimal-mistakes/_variables.scss` 에서 `$primary-color` 의 값을 확인할 수 있다.  
<br>
```scss
$primary-color: #6f777d !default;  << background 값으로 설정되어있는 color
$success-color: #3fa63f !default;
$warning-color: #d67f05 !default;
$danger-color: #ee5f5b !default;
$info-color: #3b9cba !default;
$focus-color: $primary-color !default;
$active-color: mix(#fff, $primary-color, 80%) !default;
```
<br>
<br>
그럼 `$primary-color` 의 값을 변경하면 되는데 나는 별도로 변수를 하나 생성해서 toc title 에서 쓰일 값을 생성해주었다.  
<br>
```scss
$toc-title-color: #205b2c !default;
```
<br>
<br>
그리고 `_sass/minimal-mistakes/_navigation.scss` 에서 `$primary-color` 대신 `$toc-title-color` 로 변경해주면 된다.
<br>
```scss
.nav__title {
    color: #fff;
    font-size: $type-size-6;
    background: $toc-title-color;  << 변경 완료
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
```
<br>
<br>
자 그럼 변경된 결과를 확인해보자.
<br>
- 변경 전  
<img width="301" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/3720efb4-6580-4973-965c-836b4b2e1fb1">
<br>
- 변경 후  
<img width="299" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/a63cd749-d46a-45e3-99dd-da4caf3416a9">