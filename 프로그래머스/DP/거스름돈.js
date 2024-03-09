function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)];

  for (let i = 0; i < money.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= money[i]) dp[j] += dp[j - money[i]];
    }
  }

  return dp[n] % 1000000007;
}

/**
 * Lv.3의 문제
 * 솔직히 이해가 잘 되지 않는다..
 * 나의 수학적 지식이 부족한 것도 있고,,
 */
