function solution(numbers, target) {
  let answer = 0;
  const checkNumber = (idx, total) => {
    if (idx === numbers.length - 1) {
      if (total === target) {
        answer++;
      }
      return;
    }
    checkNumber(idx + 1, total + numbers[idx + 1]);
    checkNumber(idx + 1, total - numbers[idx + 1]);
  };
  checkNumber(0, numbers[0]);
  checkNumber(0, numbers[0] * -1);
  return answer;
}

/**
 * 00:16:45
 * 각 숫자당 가능한 게 +, - 두 가지이고
 * 숫자는 최대 20개까지여서 2^20, 약 100만개의 경우의 수가 나오기 때문에
 * 재귀적으로 풀어도 무방했다.
 * 그래서 재귀 함수로 풀이한 DFS
 */
