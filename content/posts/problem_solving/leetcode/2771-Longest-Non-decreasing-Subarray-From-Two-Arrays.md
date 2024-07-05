---
date: "2024-07-05"
title: "[Leetcode] 2771. Longest Non-decreasing Subarray From Two Arrays"
categories: leetcode
tags: problem_solving leetcode
---

## 문제 링크

https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/

<br>

## 문제 요약

두 개의 배열 0-indexed 정수를 원소로 가지는 `nums1` 과 `nums2` 의 배열의 원소를 하나씩 가져와 `nums3` 배열을 만들려고 한다.  
  
`nums3[i]` 라는 배열의 원소는 `nums1[i]` or `nums2[i]` 의 원소 중 하나가 `nums3[i]` 가 된다.  
  
> nums1[i] or nums2[i]  = nums3[i] 

<br>

이 문제에서 구해야하는 값은 `nums3` 배열 안에서 `longest non-decreasing subarray`, 쉽게 말해 감소하지 않는 오름차순으로 된 부분 배열의 길이를 구해야 한다.  

> longest non-decreasing subarray = 증가하는 서브 배열

<br>

다시 말해서 `nums3` 배열 안에서 오름차순으로 된 서브 배열의 길이를 구하라는 말이다.  

예를 들어, `nums3` 배열의 원소가 `[5, 1, 2, 3, 4]` 라고 한다면 `subarray` 는 `[1, 2, 3, 4]` 가 되므로 길이는 `4`가 된다. 


<br>

## 문제 풀이

솔직히 문제를 보고나서 바로 이해가 되지 않아서 예제를 보면서 다시 이해하려고 했다.  

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
`nums1[0] = 2` , `nums2[0] = 1` 이다. 오름차순이어야 하기 때문에 처음으로 오는 원소는 가장 작아야 한다.  
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

> 조건 1 : 오름차순이 되지 않는 경우가 생기면 Subarray 의 길이가 초기화된다.  

<br>

여기서 조건을 통해 한 가지 확인할 수 있는 점은 길이가 점점 늘어나다가 다시 1로 줄어든다는 점이다.  

그래서 모든 경우의 수를 따져보았다.  

예를 들어, 아래와 같이 배열이 주어진다고 가정할 경우  

```
nums1 = [4, 16, 10, 8]
nums2 = [8, 4, 1, 9]

```

Subarray 의 길이를 하나씩 다 확인해보면 다음과 같이 경우의 수를 구할 수 있다.  



<br>




<br>

## 제출 답안

```
"""
실행 시간: 882 ms
메모리 크기: 41.74 MB
시간 복잡도: O(N)
"""

class Solution:
    def maxNonDecreasingLength(self, nums1: List[int], nums2: List[int]) -> int:
        dp = [[1] * 3 for _ in range(len(nums1))]
        max_length = dp[0][2]

        for i in range(1, len(nums1)):
            if nums1[i-1] <= nums1[i] and nums2[i-1] <= nums1[i]:
                dp[i][0] = dp[i-1][2] + 1
            elif nums1[i-1] <= nums1[i]:
                dp[i][0] = dp[i-1][0] + 1
            elif nums2[i-1] <= nums1[i]:
                dp[i][0] = dp[i-1][1] + 1
            else:
                dp[i][0] = 1

            if nums1[i-1] <= nums2[i] and nums2[i-1] <= nums2[i]:
                dp[i][1] = dp[i-1][2] + 1
            elif nums1[i-1] <= nums2[i]:
                dp[i][1] = dp[i-1][0] + 1
            elif nums2[i-1] <= nums2[i]:
                dp[i][1] = dp[i-1][1] + 1
            else:
                dp[i][1] = 1

            dp[i][2] = max(dp[i][0], dp[i][1])
            max_length = max(dp[i][2], max_length)

        return max_length


```