function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = citations[0]; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) {
        count++;
      }
    }
    if (count >= i) {
      return i;
    }
  }
}

/**
 * 00:24:56
 * 내림차순으로 정렬한 후 최고값부터 0까지 순회하며
 * count가 현재 i값 이상인 경우 return하도록 했다.
 * 숫자의 개수가 10000개까지라 최악의 경우에도 1억번 수행하기 때문에 이 방법을 선택
 */
