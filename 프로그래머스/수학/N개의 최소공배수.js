function solution(arr) {
  arr.sort((a, b) => a - b);
  var answer = arr[0];

  const gcd = (maxValue, minValue) => {
    return maxValue % minValue === 0
      ? minValue
      : gcd(minValue, maxValue % minValue);
  };

  const lcm = (maxValue, minValue) => {
    return (maxValue * minValue) / gcd(maxValue, minValue);
  };
  for (let i = 1; i < arr.length; i++) {
    answer = lcm(Math.max(answer, arr[i]), Math.min(answer, arr[i]));
  }
  return answer;
}

/**
 * 00:17:53
 * 수학 공식만 알면 나름 쉽게 풀 수 있는 문제다..
 * 최대공약수는 유클리드 호제법을, 최소공배수는 두 값을 곱한 값에 최대공약수를 나누면 된다..
 * 그리고 앞에서부터 차례로 두 수씩 계산하면 완성
 */
