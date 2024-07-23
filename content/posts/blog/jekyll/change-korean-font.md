---
date: "2024-05-15"
title: "Github 블로그 한글 폰트 적용하기 (Minimal Mistakes)"
description: "Github Jekyll 블로그에서 한글 폰트를 적용하는 방법입니다."
categories: blog/jekyll
tags: ["github", "minimal_mistakes"]
---


이번에는 Github 블로그에 한글 폰트를 적용해보려고 한다.  
  
  

##  구글 웹 폰트 import 하기

먼저 구글에서 사용할 font 를 찾아서 improt 해야 한다.  
아래의 사이트에서 폰트를 검색할 수 있다.

https://fonts.google.com/?subset=korean&noto.script=Kore


원하는 폰트를 위의 사이트에서 검색하고나서 클릭해서 상세 정보를 확인해보면 아래의 사진과 같이 상단에 `Get font` 가 보인다.

<img width="600" alt="image1" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/33fef9d8-ece0-4ba8-b8f6-6952891702dc" />  
<br><Br>

`Get font` 를 클릭해서 들어가서 `Get embed code` 를 누른다.

<img width="600" alt="image2" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/6d37baff-e409-4d61-8979-163e5ebdabee" />  
<br><br>

다음으로 Web Tab 에서 Web 과 @import 선택을 할 수 있는데 @import 를 선택한다.  

<img width="600" alt="image3" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/30fdf1bb-79a5-434a-9aea-65cf70c3505e">  
<br><br>

그럼 @import 할 수 있는 코드를 제공해주는데 해당 코드를 복사한다.

```
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
```

이렇게 복사한 코드를 `assets/css/main.scss` 파일에 복사해준다. 


```
---
# Only the main Sass file needs front matter (the dashes are enough)
search: false
---

@charset "utf-8";

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // skin
@import "minimal-mistakes"; // main partials

// Font 변경
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
```

마지막으로 블로그의 font 가 변경되었는지 확인한다.
