---
date: "2024-07-05"
title: "[Leetcode] 2771. Longest Non-decreasing Subarray From Two Arrays"
description: "😤 Leetcode 2771. Longest Non-decreasing Subarray From Two Arrays 문제 풀이"
categories: leetcode
tags: problem_solving leetcode
---

## 문제 링크

https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/

<br>

## 문제 요약

두 개의 배열 0-indexed 정수를 원소로 가지는 `nums1` 과 `nums2` 의 배열의 원소를 하나씩 가져와 `nums3` 배열을 만들려고 한다.  
  
`nums3` 라는 배열의 원소는 `nums1` 또는 `nums2` 의 원소 중 하나를 가져와 할당할 수 있다.    
  
> nums1[i] or nums2[i]  = nums3[i] 

<br>

이 문제에서 구해야하는 값은 `nums3` 배열 안에서 `length of the longest non-decreasing subarray`,   
쉽게 말해 <U>배열의 원소가 감소하지 않고 같거나 증가하는 값으로 된 가장 긴 서브배열의 길이</U>를 구해야 한다.   

<br>

> longest non-decreasing subarray = 감소하지 않는 가장 긴 서브 배열

<br>

다시 말해서 `nums3` 배열 안에서 오름차순으로 된 가장 긴 서브 배열의 길이를 구하라는 말이다.  

예를 들어, `nums3` 배열의 원소가 `[5, 1, 2, 3, 4]` 라고 한다면 가장 긴 `subarray` 는 `[1, 2, 3, 4]` 가 되므로 길이는 `4`가 된다. 

```
[ 5,   1,   2,   3,   4 ]
       |-- subarray --|
```


<br>

## 문제 풀이

솔직히 문제를 보고나서 바로 이해가 되지 않아서 예제를 보면서 이해하려고 했던 것 같다.  

예제에서 `nums1 = [2, 3, 1]` , `nums2 = [1, 2, 1]` 이 주어지고 `nums3` 를 구해야 한다.  

결과를 확인해보면 아래와 같이 나오는 것을 확인할 수 있는데 어떻게 이렇게 나오는지 해석해봤다.  

```
| 배열 | 0 | 1 | 2 |
|nums1| 2 | 3 | 1 |
|nums2| 1 | 2 | 1 |
-------------------
|nums3| 1 | 2 | 1 |
```

<br>

먼저 `nums3[0]` 을 구해야 한다.  

두 배열의 첫 번 째 원소는 `nums1[0] = 2` , `nums2[0] = 1` 이다. 오름차순이어야 하기 때문에 처음으로 오는 원소는 둘 중 아무 값이나 와도 길이는 같지만 가장 작은 값이 할당되어야 더 긴 배열을 만들 수 있다.  
따라서, `nums3[0] = nums2[0] = 1` 이 된다. 이 때 subarray 의 길이는 최초 `1` 이 된다.  

다음으로 `nums3[1]` 을 구해야 한다.  
  
오름차순이 되기 위해서는 `nums3[0]` 보다 커야한다. 그래서 `nums3[0] < nums3[1]` 이 되어야 한다.  
`nums1[1] = 3` 과 `nums2[1] = 2` 을 확인해보면 둘 다 `nums3[0]` 보다 크기 때문에 문제가 되지 않는다.  
그럼 어떤 값을 넣어주어야 하는지 봤을 때 더 작은 값을 넣어주어야 다음 값이 오름차순으로 올 값이 많아지기 때문에 더 작은 값인 `nums2[1]` 의 값을 넣어준다.  
따라서, `nums3[1] = nums2[1] = 2` 이 된다. 이 때 오름차순이 되었기 때문에 subarray 의 길이는 `2` 가 된다.
  
마지막으로 `nums3[2]` 를 구해야 한다. 
  
`nums1[1] = 1` 과 `nums2[1] = 1` 을 확인해보면 둘 다 `nums3[0]` 보다 작기 때문에 더 이상 오름차순이 되지 않는다.  
이 때, 유의해야할 점은 오름차순이 더 이상 되지 않기 때문에 <U><b>다시 subarray 의 길이가 1이 된다</b></U>는 점이다.  

따라서, `nums3` 배열의 Subarray 길이는 최대 `2` 가 된다. ( Subarray `[1, 2]` in nums3 `[1, 2, 1]` )  
이러한 과정으로 Subarray 의 길이를 구하면 되는 문제다.  

<br>

> 조건 : 오름차순이 되지 않는 경우가 생기면 Subarray 의 길이가 초기화된다.  

<br>

여기서 조건을 통해 한 가지 확인할 수 있는 점은 길이가 점점 늘어나다가 다시 1로 줄어든다는 점이다.  
이 조건을 확인하고나서 값을 비교해서 푸는 것이 아닌 길이를 비교해서 풀어야 한다는 생각이 들었던 것 같다.   
  
<br>

그래서 다음과 같이 위의 조건들에 맞는 Subarray 가 되는 모든 경우를 비교해봤다.  

예를 들어, 아래와 같이 nums1, nums2 의 배열이 주어진다고 생각해보자.  

<img width="300" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/adda6060-92f6-4548-9e84-748d408aad32" />

<br><br>

두 배열을 통해 만들어질 수 있는 nums3 의 Subarray 가 될 수 있는 모든 경우에 대해서  
<U>`nums1` 의 원소를 가져오는 경우</U>와 <U>`nums2` 의 원소를 가져오는 경우</U>로 구분해서 각각의 경우를 따져보았다.  

<br>

<img width="600" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/d777de9b-c253-4482-8548-85032d0a1908" />

<br><br>

위의 그림에 대해서 설명하자면 다음과 같다.  
  

* 첫 번째 원소를 가져오는 경우
    * `nums1[0] = 4` 의 원소를 가져온다고 할 때 첫 번째 원소의 값이 들어가기 때문에 Subarray 의 최대 길이는 `1` 이 된다.  
    * `nums2[0] = 8` 의 원소를 가져온다고 할 때 첫 번째 원소의 값이 들어가기 때문에 Subarray 의 최대 길이는 `1` 이 된다.  
  
* 두 번째 원소를 가져오는 경우
    * `nums1[1] = 16` 의 원소를 가져온다고 할 때 `num1[0] = 4` 보다 크고 `nums2[0] = 8` 보다 크기 때문에   
        `nums1`, `nums2` 의 원소를 가져올 경우 Subarray 가 성립한다.  
        따라서, Subarray 의 최대 길이가 `2` 가 된다.  
    * `nums2[1] = 4` 의 원소를 가져온다고 할 때 `num1[0] = 4` 과 같고 `nums2[0] = 8` 보다 작기 때문에   
        `nums1` 의 원소를 가져올 경우 Subarray 가 성립한다.  
        따라서, Subarray 의 최대 길이가 `2` 가 된다.  
  
* 세 번째 원소를 가져오는 경우
    * `nums1[2] = 10` 의 원소를 가져온다고 할 때 `num1[1] = 16` 보다 작지만 `nums2[1] = 4` 보다 크기 때문에  
        `nums2` 의 원소를 가져올 경우에만 Subarray 가 성립한다.  
        따라서, Subarray 의 최대 길이가 `3` 가 된다.  
    * `nums2[2] = 1` 의 원소를 가져온다고 할 때 `num1[1] = 16` 보다 작고 `nums2[1] = 4` 보다 작기 때문에  
        Subarray 가 성립하지 않는다.  
        따라서, Subarray 의 최대 길이가 `1` 가 된다.  

* 네 번째 원소를 가져오는 경우
    * `nums1[3] = 8` 의 원소를 가져온다고 할 때 `num1[2] = 10` 보다 작지만 `nums2[2] = 1` 보다 크기 때문에  
        `nums2` 의 원소를 가져올 경우에만 Subarray 가 성립한다.  
        따라서, Subarray 의 최대 길이가 `2` 가 된다.  
    * `nums1[3] = 9` 의 원소를 가져온다고 할 때 `num1[2] = 10` 보다 작지만 `nums2[2] = 1` 보다 크기 때문에  
        `nums2` 의 원소를 가져올 경우에만 Subarray 가 성립한다.  
        따라서, Subarray 의 최대 길이가 `2` 가 된다.  

<br>

이렇게 모든 경우의 수를 확인하고 나서 각 원소마다 길이가 큰 값이 그 원소 위치에서의 Subarray 의 최대 길이가 된다고 생각할 수 있다.  
따라서, 아래와 같이 Subarray 의 길이가 최대가 되는 `nums3` 배열을 확인할 수 있다.  

<img width="600" alt="image" src="https://github.com/JIKOID/jikoid.github.io/assets/48994100/360689b1-7aab-4250-abf3-1ea5c95e85b1" />

<br><br>  

이제 이와 같은 과정을 코드로 작성해주면 된다.  

동적 프로그래밍을 통해 문제를 풀 수 있었는데 다음과 같이 dp 를 정의해주었다.  
dp 의 초기값을 1 로 설정한 이유는 Subarray 는 최소 하나의 원소가 있는 경우 성립하기 때문에 기본 길이는 1 이 되어 초기값을 1로 설정해주었다.  

```
dp = [[1] * 3 for _ in range(len(nums1))]
max_length = dp[0][2]
```

각 원소의 값의 Subarray 의 길이 값을 가지는 2개의 원소와 nums1 과 nums2 의 값 중에서 어떤 값이 더 길이가 긴지 확인 후에 마지막 원소에 최대 길이를 저장해주었다.  
  
`max_length` 의 값은 첫 번째 원소의 최대 길이로 초기화 해주었다.  

이제 위에서 정리한 내용대로 각 경우에 대해서 원소를 가져와 비교 후에 최대 길이를 구해준다.

```python
for i in range(1, len(nums1)):
    # nums1 의 원소를 가져오는 경우
    if nums1[i-1] <= nums1[i] and nums2[i-1] <= nums1[i]:
        dp[i][0] = dp[i-1][2] + 1
    elif nums1[i-1] <= nums1[i]:
        dp[i][0] = dp[i-1][0] + 1
    elif nums2[i-1] <= nums1[i]:
        dp[i][0] = dp[i-1][1] + 1
    else:
        dp[i][0] = 1
    # nums2 의 원소를 가져오는 경우
    if nums1[i-1] <= nums2[i] and nums2[i-1] <= nums2[i]:
        dp[i][1] = dp[i-1][2] + 1
    elif nums1[i-1] <= nums2[i]:
        dp[i][1] = dp[i-1][0] + 1
    elif nums2[i-1] <= nums2[i]:
        dp[i][1] = dp[i-1][1] + 1
    else:
        dp[i][1] = 1

    # nums1 과 nums2 의 길이 중 더 큰 값을 구한다.
    dp[i][2] = max(dp[i][0], dp[i][1])

    # nums3 의 Subarray 의 최대 길이를 구한다.
    max_length = max(dp[i][2], max_length)
```




<br>

## 제출 답안

```python
"""
실행 시간: 882 ms
메모리 크기: 41.74 MB
시간 복잡도: O(N)
"""

class Solution:
    def maxNonDecreasingLength(self, nums1: List[int], nums2: List[int]) -> int:
        dp = [[1] * 3 for _ in range(len(nums1))]
        max_length = dp[0][2]

        # nums1 의 원소를 가져오는 경우
        for i in range(1, len(nums1)):
            if nums1[i-1] <= nums1[i] and nums2[i-1] <= nums1[i]:
                dp[i][0] = dp[i-1][2] + 1
            elif nums1[i-1] <= nums1[i]:
                dp[i][0] = dp[i-1][0] + 1
            elif nums2[i-1] <= nums1[i]:
                dp[i][0] = dp[i-1][1] + 1
            else:
                dp[i][0] = 1

            # nums2 의 원소를 가져오는 경우
            if nums1[i-1] <= nums2[i] and nums2[i-1] <= nums2[i]:
                dp[i][1] = dp[i-1][2] + 1
            elif nums1[i-1] <= nums2[i]:
                dp[i][1] = dp[i-1][0] + 1
            elif nums2[i-1] <= nums2[i]:
                dp[i][1] = dp[i-1][1] + 1
            else:
                dp[i][1] = 1

            # nums1 과 nums2 의 길이 중 더 큰 값을 구한다.
            dp[i][2] = max(dp[i][0], dp[i][1])

            # nums3 의 Subarray 의 최대 길이를 구한다.
            max_length = max(dp[i][2], max_length)

        return max_length


```