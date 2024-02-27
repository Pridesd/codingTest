function solution(n) {
  let answer = 0;
  for (let i = n; i > 0; ) {
    if (i % 2 === 1) {
      answer++;
      i -= 1;
    }
    i /= 2;
  }

  return answer;
}

/**
 * 0부터 시작하는 게 아니라 n부터 0으로 접근하면 쉽게 풀 수 있는 문제
 * 2로 나눌 때 나머지가 존재하지 않으면 나누고 없으면 빼고 나눈다
 * 그게 최단 경로
 */
