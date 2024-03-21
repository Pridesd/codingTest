function solution(n, s) {
  if (s < n) return [-1];
  const remain = s % n;
  const answer = new Array(n).fill(0).map(() => Math.floor(s / n));
  for (let i = 0; i < remain; i++) {
    answer[i]++;
  }
  return answer.sort((a, b) => a - b);
}

/**
 * 00:10:00 대략적 시간
 * 특정 합을 만족하는 원소들 중 곱의 값이 가장 높은 건 각 원소들의 값이 가장 높은 경우이다.
 * 그 경우를 구했다.
 * 다소 쉽게 느껴졌던 문제..
 */
