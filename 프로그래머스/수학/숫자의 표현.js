function solution(n) {
  let count = 0;
  const numbers = [];
  let sum = 0;
  let first = 1;
  for (let i = 1; i <= n; i++) {
    sum += i;
    if (sum === n) {
      count++;
      continue;
    }
    if (sum > n) {
      while (sum > n) {
        sum -= first;
        first++;
      }
      if (sum === n) {
        count++;
      }
    }
  }
  return count;
}

/**
 * 00:10:46
 * 연속된 숫자의 합이 n과 같으면 count를 세는 문제
 * 다른 사람들은 신박한 방법을 많이 썼는데 어찌 그렇게 했는지 신기하기만 하다
 * 나는 맨처음에 push 썼다가 효율성에서 걸려서
 * 그냥 배열 말고 count 값을 사용했다.
 */
