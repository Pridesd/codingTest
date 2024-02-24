function solution(n, words) {
  const called = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (
      called.includes(words[i]) ||
      words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    called.push(words[i]);
  }
  return [0, 0];
}

/**
 * 00:09:58
 * 쉬운 탐색 문제..
 * 낱말의 개수가 500개이기 때문에 문제없이 체크할 수 있었다.
 * 10000개 이럴 경우엔 이야기가 달라질 수도..?
 */
