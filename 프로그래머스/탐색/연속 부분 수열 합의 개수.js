function solution(elements) {
  var answer = [];
  const extended = [...elements, ...elements];
  for (let i = 0; i < elements.length; i++) {
    const sliced = extended.slice(i, i + elements.length);
    sliced.reduce((acc, curr) => {
      answer.push(acc + curr);
      return acc + curr;
    }, 0);
  }

  const set = new Set(answer);
  return [...set].length;
}

/**
 * 00:47:11
 * 이건 힌트를 봐버렸다..
 * elements를 확장해서 원형같이 접근 가능하도록 만들고,
 * reduce 함수가 현재 계산된 값을 저장하는 걸 이용해서 가능한 sum값을 구했다..
 * 그리고 Set을 통해 중복 제거
 * 똑똑한 사람은 참 많은 것 같다.
 */
