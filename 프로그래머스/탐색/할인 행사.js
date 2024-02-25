function solution(want, number, discount) {
  var answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const selected = discount.slice(i, i + 10);
    const count = {};
    selected.forEach((menu) => {
      if (!count[menu]) {
        count[menu] = 1;
      } else {
        count[menu]++;
      }
    });
    let status = true;
    for (let j = 0; j < want.length; j++) {
      if (!count[want[j]]) {
        status = false;
        break;
      }
      if (count[want[j]] !== number[j]) {
        status = false;
        break;
      }
    }
    if (status) {
      answer++;
    }
  }
  return answer;
}

/**
 * 00:43:33
 * 이거도 뭐 탐색 쉬운 문제
 * 10개씩 잘라서 탐색했다..
 */
