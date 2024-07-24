---
date: "2024-07-04"
title: "Leetcode 1497. Check If Array Pairs Are Divisible by k (Python3)"
description: "😤 Leetcode 1497. Check If Array Pairs Are Divisible by k 문제 풀이"
categories: 알고리즘/leetcode
tags: ["problem_solving", "leetcode", "python"]
---

## 문제 링크
https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/


## 문제 요약
원자가 숫자인 배열 `arr` 이 있고 배열의 길이인 `n` 은 `짝수`이고 `k` 가 주어진다.  
이때, 배열을 정확하게 `n/2` 의 pair 가 되어야 하고 <U>pair 가 된 숫자의 합</U> 이 `k` 로 나누어져야 한다.  

따라서, 배열에서 두 개의 숫자를 골라 그 합이 `k` 로 나누어지면 `pair` 가 되고  
배열의 모든 원소가 pair 가 되면 `True`, 아니면 `False` 를 출력하면 된다.  

<br>

```python
( arr[a] + arr[b] ) // k == True
( arr[a] + arr[b] ) // k != False
```

<br>

## 문제 풀이

처음에는 하나의 원소를 가져와 다른 원소와 비교해가며 두 수의 합이 k 로 나누어진다면 True, 그렇지 않다면 False 로 풀려고 했었다.  
하지만 이렇게 풀게 되면 시간 복잡도가 `O(n^2)` 이 되어 시간 제한 초과로 실패하게 되었다.  
  
<br>

* 잘못된 제출 코드  

    ```python
    class Solution:
        def canArrange(self, arr: List[int], k: int) -> bool:
            for i in range(len(arr)):
                check = False

                for j in range(len(arr)):
                    sum_args = arr[i] + arr[j]

                    if sum_args % k == 0:
                        arr[i] = 0
                        arr[j] = 0

                        check = True

                if check is False:
                    return False

            return True
    ```
<br>

* 제출 결과  
  
    ![](image.png)

<br><br>

그래서 처음부터 다시 접근하게 되었다.  

`두 수의 합이 k 로 나누어져야 한다.`  
  
위의 말을 조금 더 풀어서 설명하자면 <U>각 숫자의 나머지의 합이 0 또는 k</U> 가 된다면 k 로 나누어진다고 말할 수 있게 된다.  

그래서 2가지의 케이스로 구분해볼 수 있었다.  

1. `나머지의 합이 0 인 경우`  
    나머지의 합이 0 이라는 말은 두 수의 합이 k 로 나누어진다는 말이 되어 pair 가 된다.  
2. `나머지의 합이 k 인 경우`  
    나머지의 합을 다시 k 로 나누게 되어 0 이 된다면 k 로 나누어질 수 있다면 pair 가 된다.

<br>
  
이 말을 식으로 나타내보자면 다음과 같다.  

```python
(a % k) + ( b % k ) % k == 0
```
<br>

예를 들어 설명해보면 더 이해가 쉬울 것 같아서 예를 들어보았다.  
만약 k 의 값이 `5` 이고 배열 `[1, 3, 5, 7, 9]` 가 있다고 할 때 두 개의 숫자 `3` 과 `7` 을 가져와서 pair 가 되는지 확인해본다고 가정하자.  
  
  
먼저 두 수의 나머지를 구한다.

```python
3 % 5 = 3
7 % 5 = 2
```
  
다음으로 두 수의 나머지 합을 구한다.  

```python
3 + 2 = 5
```
  
두 수의 나머지의 합이 `5 == k` 이므로 `3` 과 `7` 은 k 인 `5` 로 나누어지는 pair 가 될 수 있다.  
  
하나의 예를 더 들자면, `5` 와 `10` 이 존재한다고 할 경우 두 수의 나머지는 `0`, `0` 이 되고  
나머지의 합이 0이기 때문에 k 로 나누어지는 pair 라고 할 수 있다.  


그래서 결론은 어떤 숫자의 나머지 `remain` 이 있을 때 `k - remain` 의 합이 `0` 또는 `k` 라면 `pair` 가 된다고 가정할 수 있다.  

그리고 여기서 한 가지 더 중요한 점은 pair 라는 말은 <U>짝수</U>이기 때문에 짝수 만큼의 숫자가 없다면 pair 가 될 수 없다는 점도 유의해야 한다.  
  
<br><br>
  
이러한 과정을 코드로 풀어서 적어보았다.  
  
먼저, 배열 안에 있는 숫자들의 나머지의 갯수를 세어주었다.  
  
```python
remain_count = {i:0 for i in range(k)}

for num in arr:
    k_remain = num % k
    remain_count[k_remain] += 1
```
  

이때, key 의 값은 `k` 의 나머지 값의 범위인 `0 ~ k-1` 이 된다.  
<br>

이제 위에서 말한 2가지 경우에 대해서 코드로 작성해주면 된다.

```python
for remain in remain_count.keys():
# k 로 나누어지는 수인 경우(나머지가 0인 경우)
# pair 를 만들기 위해서 짝수 개가 필요하다.
if remain == 0:
    if remain_count[remain] % 2 != 0:
        return False
else:
    # 나머지의 합이 k 가 되어야 하기 때문에 (나머지) 의 개수와 (k - 나머지) 의 개수가 같아야 pair 가 된다.
    if remain_count[remain] != remain_count[k - remain]:
        return False
```

<br>


## 제출 답안
```python
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        remain_count = {i:0 for i in range(k)}

        for num in arr:
            k_remain = num % k
            remain_count[k_remain] += 1

        for remain in remain_count.keys():
            # k 로 나누어지는 수인 경우(나머지가 0인 경우)
            # pair 를 만들기 위해서 짝수 개가 필요하다.
            if remain == 0:
                if remain_count[remain] % 2 != 0:
                    return False
            else:
                # 나머지의 합이 k 가 되어야 하기 때문에 (나머지) 의 개수와 (k - 나머지) 의 개수가 같아야 pair 가 된다.
                if remain_count[remain] != remain_count[k - remain]:
                    return False

        return True
```