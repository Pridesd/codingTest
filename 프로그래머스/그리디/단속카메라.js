function solution(routes) {
  var answer = [];
  routes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  routes.forEach(([start, end]) => {
    for (let i = 0; i < answer.length; i++) {
      const [s, e] = answer[i];
      if (start === s && end === e) return;
      if (start <= s && end > s && end < e) {
        answer[i] = [s, end];
        return;
      }
      if (start >= s && end <= e) {
        answer[i] = [start, end];
        return;
      }
      if (start >= s && start < e && end >= e) {
        answer[i] = [start, e];
        return;
      }
      if (end === s) {
        answer[i] = [s, s];
        return;
      }
      if (start === e) {
        answer[i] = [e, e];
        return;
      }
    }
    answer.push([start, end]);
  });
  return answer.length;
}

/**
 * 01:06:51
 * 정렬을 해서 앞에서 부터 탐색해서 겹치는 영역을 탐색한다
 * 그리고 겹치는 영역의 개수를 반환한다.
 */
