function solution(n, t, m, p) {
  let totalNum = "";
  let answer = "";
  for (let i = 0; i < m * t; i++) {
    totalNum += i.toString(n);
  }
  for (let i = p - 1; i < m * t; i += m) {
    answer += totalNum[i];
  }
  return answer.toUpperCase();
}

/**
 * 00:19:29
 * n잔수로 변환하는게 조금 도전적인 부분일 수도 있었겠지만,
 * 자바스크립트에선 toString에 숫자 n값을 넣으면 n진수로 변환한 string을 변환하기 때문에 무리없이 풀었다.
 * 단지 0부터 시작하는 걸 깜빡하고 1부터 계산해서 문제가 발생한 거 빼고..
 */
