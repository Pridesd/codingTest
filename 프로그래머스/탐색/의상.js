function solution(clothes) {
  let answer = 1;
  let hashMap = new Map();

  clothes.forEach((e) => {
    if (hashMap.has(e[1])) {
      hashMap.set(e[1], hashMap.get(e[1]) + 1);
    } else {
      hashMap.set(e[1], 1);
    }
  });

  for (let [key, value] of hashMap) {
    answer *= value + 1;
  }
  answer -= 1;

  return answer;
}

/**
 * 36:09:22
 * 자꾸 1번 테스트에 런타임 에러가 나서 답을 봤다.
 * map을 사용한 것은 비슷했지만, 선택하지 않은 경우의 수를 추가해(그러니까 empty라는 의류가 각 종류에 추가된거다)
 * 다 곱해주고 모든 옷을 입지 않은 경우를 빼서 계산했다..
 */
