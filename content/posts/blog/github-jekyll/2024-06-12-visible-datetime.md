---
title: "Github 블로그 시간 표시하기 (Minimal Mistakes)"
tags: github minimal_mistakes datetime
categories: blog github_jekyll
layout: single
author_profile: true
toc: true
toc_sticky: true
show_date: true
---
  
이번에는 Github 블로그에 시간을 표시해보려고 한다.
<br>

## 현재 상태 확인하기

기본 minimal mistakes 테마에서는 읽는 시간만 표시되고 날짜는 표시되지 않는다.  

<br>

<img width="494" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/42a24a6c-add6-4ca5-9315-e6535fe008c9">

<br><br>

그래서 시간이 표시되도록 수정해보려고 한다.

<br>

## 읽는 시간을 표시해주는 소스 찾기

먼저 읽는 시간을 표시하고 있는 페이지의 html 소스 파일을 찾아보면 `_includes/archive-single.html` 에서 확인할 수 있다.

```
{% raw %}{% include page__meta.html type=include.type %}{% endraw %}
```

<br>

바로 위의 코드와 같이 `page__meta.html` 파일을 include 해서 읽는 시간을 보여주고 있는 것을 확인할 수 있다.
<br>

그럼 `page__meta.html` 파일로 가서 시간을 표시하는 부분을 찾아보았다.
<br>

해당 페이지를 살펴보니 이 부분을 통해 시간을 보여줄 수 있을 것이라고 생각이 되었다.

```html
{% raw %}{% if document.show_date and document.date %}
  {% assign date = document.date %}
  <span class="page__meta-date">
    <i class="far {% if include.type == 'grid' and document.read_time and document.show_date %}fa-fw {% endif %}fa-calendar-alt" aria-hidden="true"></i>
    {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
    <time datetime="{{ date | date_to_xmlschema }}">{{ date | date: date_format }}</time>
  </span>
{% endif %}{% endraw %}
```

<br>

## 시간을 보여주는 옵션 적용하기

document, 즉 포스트 안에 show_date 옵션이 true 이면 날짜를 보여주는 조건을 확인할 수 있었고 현재 사이트의 날짜 기준으로 `%B %-d, %Y` 으로 보여주고 있어서 바로 `show_date` 옵션을 적용해보았다.
<br>

```yaml
---
title: "Github 블로그 시간 표시하기 (Minimal Mistakes)"
tags: github minimal_mistakes datetime
categories: github_jekyll
layout: single
author_profile: true
toc: true
toc_sticky: true
show_date: true
---
```

<br>

그랬더니 다음과 같이 시간이 표시되었다.
<br>
  
<img width="471" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/aded0167-44c8-4d97-9ccd-a5c36062fa3a">
<br>

하지만 나는 `2024-06-12` 의 날짜 형태로 보여주고 싶었기 때문에 해당 부분의 날짜 포맷을 변경해주었다.
<br>

- 변경 전

```
{% raw %}{% assign date_format = site.date_format | default: "%B %-d, %Y" %}{% endraw %}
```

- 변경 후

```
{% raw %}{% assign date_format = site.date_format | default: "%Y-%m-%d" %}{% endraw %}
```

<br>

그리고 다시 확인해보니 잘 적용된 것을 확인할 수 있었다.
<br>

<img width="475" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/8880adf5-7bed-4e43-84a1-0708aeb37979">

<br><br>

날짜 보여주기 완료!