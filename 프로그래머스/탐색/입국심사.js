function solution(n, times) {
  let start = 0;
  let end = n * 1000000000;
  let mid = Math.floor((start + end) / 2);
  let answer = mid;

  while (start <= end) {
    let count = 0;
    times.forEach((t) => {
      count += Math.floor(mid / t);
      if (count >= n) {
        answer = Math.min(answer, mid);
        return;
      }
    });
    if (count >= n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return answer;
}

/**
 * 00:36:05
 * 대표적인 이분탐색 문제..
 * mid가 걸리는 시간이다.
 * mid시간이 걸릴 때, 각 심사관들이 심사할 수 있는 인원이 n보다 크거나 같으면
 * answer를 mid로 업데이트하고 탐색의 범위를 start부터 mid-1로 줄인다.
 * 그리고 n보다 작은 경우에는 mid+1부터 end까지의 탐색범위를 줄인다..
 */
