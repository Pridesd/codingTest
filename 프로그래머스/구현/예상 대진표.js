function solution(n, a, b) {
  var answer = 1;
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }

  while (true) {
    if (b === a + 1 && a % 2 === 1) {
      return answer;
    }
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

/**
 * 00:07:42
 * 쉽게 푼 문제..
 * 매칭이 되는 경우는 작은 놈이 홀수 큰 놈이 짝수에 작은 놈 +1이기 때문이기 때문에 이거를 이용해서 쉽게 풀었다
 */
