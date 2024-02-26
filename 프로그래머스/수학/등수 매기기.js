function solution(score) {
  const calculate = score.map((s) => (s[0] + s[1]) / 2).sort((a, b) => b - a);
  return score.map((s) => calculate.indexOf((s[0] + s[1]) / 2) + 1);
}

/**
 * 5분 미만..
 * 시간 없어서 그냥 쉬운거..
 */
