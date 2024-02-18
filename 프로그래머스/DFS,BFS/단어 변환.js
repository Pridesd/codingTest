function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }
  const search = (now, used) => {
    if (now === target) {
      return used.length;
    }
    if (used.length === words.length) {
      return used.length + 1;
    }
    const result = words.filter((word) => {
      let sameCount = 0;
      if (used.includes(word)) {
        return false;
      }
      word.split("").forEach((c, idx) => {
        if (c === now[idx]) sameCount++;
      });
      return sameCount === word.length - 1;
    });
    if (result.length === 0) {
      return words.length + 1;
    }
    return Math.min(...result.map((word) => search(word, [...used, word])));
  };
  const filtered = words.filter((word) => {
    let sameCount = 0;
    word.split("").forEach((c, idx) => {
      if (c === begin[idx]) sameCount++;
    });
    return sameCount === word.length - 1;
  });
  if (filtered.length === 0) return 0;
  const answer = Math.min(...filtered.map((word) => search(word, [word])));
  return answer > words.length ? 0 : answer;
}

/**
 * 01:10:35
 * 진짜 더럽게 풀었네 ㅋㅋㅋ
 * 풀었다는 것에 다행이다. 기존의 값에서 변경되는 게 하나 뿐인 것만 필터링 한 후 작업을 진행했다.
 * 다른 사람들 보니까 Queue와 visit을 사용해서 했더라, 왜냐면 words에 한 번씩만 접근하면 되고
 * 이미 접근한 word에서 가능한 경로는 이미 queue에 저장되었으니까 다시 접근할 필요가 없고..
 * 나도 저런 접근 방식을 바로 생각해내고 싶다..
 */
