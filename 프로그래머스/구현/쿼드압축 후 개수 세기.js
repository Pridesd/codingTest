function solution(arr) {
  var answer = [0, 0];

  const check = (x, y, len) => {
    if (len === 1) {
      answer[arr[x][y]] += 1;
      return;
    }

    let isSame = true;

    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (arr[i][j] !== arr[x][y]) {
          isSame = false;
        }
      }
    }

    if (isSame) {
      answer[arr[x][y]] += 1;
      return;
    }

    len /= 2;

    check(x, y, len);
    check(x + len, y, len);
    check(x, y + len, len);
    check(x + len, y + len, len);
  };

  check(0, 0, arr.length);

  return answer;
}

/**
 * 01:25:16
 * 단순 구현 문제..
 * 맨날 이런 다차원 배열에서 어려움을 자꾸 느낀다..
 * 재귀함수를 통해 푼다면 쉽게 풀 수 있는 문제였다..
 */
