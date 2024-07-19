---
date: "2024-07-19 17:31"
title: "Monotonic Stack (단조 스택) 알고리즘 이해하기"
description: "Monotonic Stack (단조 스택) 알고리즘에 대해서 공부하고 정리한 내용입니다."
categories: algorithm 개념정리
tags: algorithm monotonic stack
---

## Monotonic Stack (단조 스택) 알고리즘이란

`Monotonic Stack` 이란 원소가 `Increasing` 또는 `Decreasing` 으로 정렬이 되어있는 배열을 의미 한다.  

이름에서 사용되는 `monotone` 의 뜻은 단조로운 모양을 말하며 배열에서 단조로운 모양이라고 하면 모든 배열의 원소가 증가 또는 감소 하는 배열을 의미하게 된다.  

예를 들어, `[1, 2, 3, 4, 5]` 또는 `[5, 4, 3, 2, 1]` 과 같은 배열을 `Monotonic Stack` 이라고 부를 수 있다.  

<br>

## Monotonic Stack 의 활용

Monotonic Stack 은 언제 활용이 될까?  

주로 `Next Greater Eelement` 또는 `Previous Greater Eelement` 와 같은 유형의 문제에서 주로 사용된다고 한다.  

쉽게 말해서 다음에 올 원소가 이전 원소보다 큰 값이 되어야 하는 경우 또는 이전의 원소가 더 큰지 확인하는 경우에 주로 사용하게 된다.  


예를 들어, `[1, 5, 2, 4, 3]` 이라는 배열이 있을 때 `Next Greater Eelement` 의 문제가 주어진다고 할 경우  

스택에 첫 번째 원소가 먼저 들어온다. 

```python
stack = [1]
```

다음 두 번째 원소인 `5` 가 들어와야 하는데 스택의 마지막 원소인 `1` 보다 `5` 가 더 크기 때문에 stack 에 넣어준다. (1 < 5)  

```python
stack = [1, 5]
```

다음 원소인 `2` 가 들어와야 하는데 stack 의 마지막 원소인 `5` 가 더 크기 때문에 `5` 를 `pop()` 하고 `2` 를 넣어준다. (5 > 2)  

```python
stack = [1, 2] # pop(5)
```

다음 원소인 `4` 가 들어와야 하는데 stack 의 마지막 원소인 `2` 보다 크기 때문에 stack 에 넣어준다. (2 < 4)  

```python
stack = [1, 2, 4]
```

마지막 원소인 `3` 이 들어와야 하는데 stack 의 마지막 원소인 `4` 가 더 크기 때문에 `4` 를 `pop()` 하고 `3` 을 넣어준다. (4 > 2)  

```python
stack = [1, 2, 3] # pop(4)
```

그 결과 Monotonic Stack 은 `[1, 2, 3]` 이 된다.  

<br>

## Monotonic Stack 구현해보기

그럼 위의 예를 아래와 같이 간단한게 구현해볼 수 있다.  

```python
arr = [1, 5, 2, 4, 3]
stack = []

for num in arr:
    while stack and stack[-1] > num:
        stack.pop()
    stack.append(num)
    
print(stack)
```

위와 같이 간단하게 구현해볼 수 있고 직접 과정을 print 해보면 다음과 같다.  

```python
stack =  []  | num =  1 # 비어있는 스택에 추가
append =  1

stack =  [1]  | num =  5 # 1 < 5 이므로 5 추가
append =  5

stack =  [1, 5]  | num =  2 # 5 > 1 이므로 5를 꺼내고 2 추가
pop =  5
append =  2

stack =  [1, 2]  | num =  4  # 2 < 4 이므로 4 추가
append =  4

stack =  [1, 2, 4]  | num =  3 # 4 > 3 이므로 4를 꺼내고 3 추가
pop =  4
append =  3

result =  [1, 2, 3]
```

<br>

## Monotoinc Stack 관련 문제 목록

- [Leetcode 402. Remove K Digits](https://leetcode.com/problems/remove-k-digits/description/)  
- [Leetcode 739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)  

<br>

## 레퍼런스 

https://velog.io/@phantom5087/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EA%B0%9C%EB%85%90%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Monotone-Stack  

