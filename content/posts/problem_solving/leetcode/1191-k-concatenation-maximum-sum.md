---
date: "2024-07-18"
title: "[Leetcode] 1191. K-Concatenation Maximum Sum"
description: "😤 Leetcode 1191. K-Concatenation Maximum Sum 문제 풀이"
categories: leetcode
tags: problem_solving leetcode
---

## 문제 링크
https://leetcode.com/problems/k-concatenation-maximum-sum/description/

## 문제 요약

정수 배열인 `arr` 과 정수 `k` 가 주어진다.  
`arr` 을 `k` 만큼 반복해서 배열을 수정한다.  

예를 들어, `arr = [1, 2]` 이고 `k = 3` 일 경우 수정된 배열은 `[1, 2, 1, 2, 1, 2]` 이 된다.  

<br>  

다음으로 이렇게 만들어진 배열 안에서 sub-array 를 구한다.  

예를 들어, `[1, 2, 1, 2, 1, 2]` 이 있다고 할 경우 sub-array 는 `[1, 2, 1]`, `[2, 1, 2]` 등 여러 경우가 있다.  

따라서, 만들 수 있는 sub-array 의 배열 중에서 원소의 합이 최대가 되는 값을 구하면 된다.  
위의 예시에서 sub-array 의 원소의 합이 최대가 되는 경우는 `[1, 2, 1, 2, 1, 2]` 가 되어 최대가 되는 sub-array 의 합은 `9` 가 된다.  

이렇게 주어진 배열과 k 값을 통해 sub-array 를 만들 수 있는 경우 중 원소의 합이 가장 큰 경우를 찾으면 된다.  

<br>

조건을 보면 arr 의 길이는 최대 `10^5` 그리고 k 는 최대 `10^5` 의 값을 가지기 때문에 최대 arr 의 길이가 `10^10` 이 된다.  

따라서 합이 너무 클 경우 모듈러 연산을 통해 `(10**9)+7` 로 나눈 나머지를 반환해준다.  

<br>

한 가지 유의하면서 풀어야 할 부분은 마이너스인 정수가 온다고 해도 제외하면 안된다는 점이다.  

예를 들어, `[-1, -1, 1, 2, 3, -1, -1, 1, 2, 3]` 일 경우 원소의 합이 최대가 되는 sub-array 는 전체가 되어 모든 원소를 더한 `10` 이 된다.  

<br>

## 문제 풀이

### 첫 번째 시도 `실패`

첫 번째 시도에서는 k 만큼 반복된 배열을 만들어서 배열의 길이만큼 합계를 구해주면서 최대가 되는 합계를 반환하려고 했었다.  
테스트 코드에서는 다 통과했지만 정답으로 제출하니 배열을 만드는 과정에서 메모리가 부족해 Runtime Error 가 발생했다.  

- 실패한 코드 
    ```python
    class Solution:
        def kConcatenationMaxSum(self, arr: List[int], k: int) -> int:
            modulo = (10 ** 9) + 7
            k_arr = arr * k
            
            sum = 0
            max_sum = 0

            for i in range(len(k_arr)):
                sum += k_arr[i]

                if sum < 0:
                    sum = 0

                max_sum = max(max_sum, sum)

            return max_sum % modulo
    ```

- Runtime Error

    <img width="600" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/d505f6fe-fa3e-4562-ac3c-26d8e48958d1">

<br>

그래서 다음과 같이 이중 배열로 변경해주었지만 여전히 Time Limit Exceeded 가 발생했다.  

- Time Limit Exceeded

    <img width="600" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/778ffefa-8c30-4eda-b769-4781097868aa">

<br>

배열의 길이만큼 계산을 하다보니 시간 복잡도가 `O(N)` 이고 배열의 최대 길이로 인해서 시간 초과라 발생하는 것 같다.  
제출 결과를 확인해봐도 k 가 57011 인 경우의 케이스에 대해서 시간 초과가 발생했다고 나온다.  
결국에는 시간 복잡도를 줄이기 위한 방법을 찾아봐야할 것 같다.  

<br>

### 두 번째 시도




<br>

## 제출 답안