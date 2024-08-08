import time

def for_loop(arr, n):
    for i, num in enumerate(arr):
        if n == num:
            return i

def binary_search(arr, n):
    # 처음 범위는 첫 번째 인덱스 ~ 마지막 인덱스
    left = 0
    right = len(arr) - 1

    while left <= right:
        # 중간 값 계산
        mid = (left + right) // 2
        
        if arr[mid] == n:
            return mid
        
        # 중간 값보다 작을 경우
        if n < arr[mid]:
            right = mid - 1
        else:
            left = mid + 1

arr = [n for n in range(1, 10001)]
n = 9999

stime = time.time()
for_result = for_loop(arr, n)
etime = time.time()

for_time = etime - stime
print("For loop 소요 시간은 ", for_time, "입니다.")

stime = time.time()
bs_result = binary_search(arr, n)
etime = time.time()

bs_time = etime - stime
print("binary search 소요 시간은 ", bs_time, "입니다.")