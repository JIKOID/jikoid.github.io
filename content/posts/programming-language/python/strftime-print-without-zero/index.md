---
date: "2024-08-01 11:22"
title: "Python datetime strftime 날짜 출력할때 0 제거"
description: "Python datetime 모듈을 사용할 때 strftime 으로 날짜를 출력하는데 앞자리에 0 이 나오는 경우 제거하는 방법"
categories: programming-language/python
tags: ["python", "datetime", "strftime"]
---

## Python datetime 모듈

python 에서 datetime 모듈은 날짜와 시간을 조작하기 위한 클래스를 제공해준다.  

다음과 같이 현재 날짜를 구할 수 있다.  

- 실행 코드  

```python
from datetime import datetime

datetime.now()
```

- 출력 결과  

```python
datetime.datetime(2024, 8, 1, 11, 30, 20, 24305  7)
```

결과를 보면 year, month, day, ... 의 순서로 결과가 출력되는 것을 알 수 있고 이 날짜를 원하는 형식에 맞게 출력하고 싶을 때 `strftime(format)` 메서드를 사용할 수 있다.  

<br>

## stftime 을 사용해서 출력해보기

`strftime()` 을 사용하면 현재 날짜를 가져와서 원하는 포맷에 맞게 변경해서 출력할 수 있다.  

- 오늘 날짜 가져오기

```python
from datetime import datetime

now_date = datetime.now()
```

- 출력 결과

```python
2024-08-01 11:33:03.674754
```

오늘 날짜를 원하는 형식에 맞게 출력해보자.

출력하기 전에 어떻게 날짜와 시간을 지정해서 문자열로 출력할 수 있는지 알아야 하는데 아래의 문서를 통해 확인할 수 있다.  

[strftime() and strptime() Format Codes]("https://docs.python.org/3.8/library/datetime.html#strftime-and-strptime-format-codes")  

<br>

그 중에서 자주 사용하는 형식 코드에 대해서만 적어봤다.  


- `%Y`: 세기를 포함한 4자리 연도, 앞의 빈자리를 0으로 채우는 숫자 (0001, 0002, 0003, ..., 9999)
- `%y` : 세기가 없는 연도, 앞의 빈자리를 0으로 채우는 숫자 (01, 02, 03, ..., 99)
- `%m` : 월 출력, 앞의 빈자리에 0을 채우는 숫자 (01, 02, 03, ..., 12)
- `%d` : 해당 월의 일, 앞의 빈자리에 0을 채우는 숫자 (01, 02, 03, ..., 31)
- `%H` : 시간, 24시간으로 표기, 앞의 빈자리에 0을 채우는 숫자 (01, 02, 03, ..., 23)
- `%M` : 분, 앞의 빈자리에 0을 채우는 숫자 (00, 01, ..., 59)
- `%S` : 초, 앞의 빈자리에 0을 채우는 숫자 (00, 01, ..., 59)

<br>

이와 같은 형식 코드를 통해 날짜를 출력해주면 된다. 

<br>

### 날짜 형식 : 일/월/연도

- 날짜 변환  

```python
now_date.strftime("%d/%m/%y")
```

- 출력 결과

```python
'01/08/24'
```

<br>

### 날짜 형식 : 연도-월-일

- 날짜 변환

```python
now_date.strftime("%Y-%m-%d")
```

- 출력 결과

```
'2024-08-01'
```

<br>

### 날짜 형식 : 연도-월-일 시:분:초

- 날짜 변환

```python
now_date.strftime("%Y-%m-%d %H:%M:%S")
```

- 출력 결과

```python
'2024-08-01 11:33:03'
```

<br>

## 앞의 빈자리 0 제거하기

`strftime` 을 통해 날짜를 출력하다보면 앞의 빈자리에 0을 채워준다. 하지만 채우고싶지 않다면 다음과 같이 할 수 있다.  

형식 코드를 출력할 때 `대시(-)` 를 넣어주면 된다.  

바로 위에서 들어던 예를 가져와서 출력해보자.  

<br>

### 날짜에 앞의 빈자리 0 제거

- 날짜 변환

```python
# now_date.strftime("%Y-%m-%d")
now_date.strftime("%Y-%-m-%-d")
```

- 출력 결과

```
# '2024-08-01'
'2024-8-1'
```

월과 일의 앞의 0이 제거된 것을 확인할 수 있다.  

<br>

### 시간에 빈자리 0 제거

- 날짜 변환

```python
# now_date.strftime("%Y-%m-%d %H:%M:%S")
now_date.strftime("%Y-%m-%d %-H:%-M:%-S")
```

- 출력 결과

```python
# '2024-08-01 11:33:03'
'2024-08-01 11:33:3'
```

초 단위에서 앞의 0이 제거된 것을 확인할 수 있다.  