function solution(priorities, location) {
  let answer = 0;
  while (priorities.find((p) => p > 0)) {
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] === 0) continue;
      answer++;
      if (priorities[i] >= Math.max(...priorities)) {
        if (i === location) {
          return answer;
        }
        priorities[i] = 0;
        continue;
      }
      const newIndex =
        i !== priorities.length - 1 &&
        Math.max(...priorities.slice(i + 1)) === Math.max(...priorities)
          ? priorities
              .slice(i + 1)
              .indexOf(Math.max(...priorities.slice(i + 1))) +
            i +
            1
          : priorities.indexOf(Math.max(...priorities));
      if (newIndex === location) {
        return answer;
      }
      priorities[newIndex] = 0;
      i = newIndex;
    }
  }
}

/**
 * 1:23:51
 * 큐 문제를 큐 없이 풀려고 하니 한참을 해멨다.
 * JS에서는 shift 연산을 통해 쉽게 queue를 사용할 수 있다고 한다.
 * 그라고 다른 사람들을 보니 인덱스 정보를 가지는 배열을 생성해서 작업하드라
 * 하나 또 배운다..
 */
