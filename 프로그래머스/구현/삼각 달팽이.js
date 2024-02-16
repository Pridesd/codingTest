function solution(n) {
  var answer = new Array(n).fill().map((_, idx) => new Array(idx + 1).fill(0));
  let state = "d"; //d, r, u
  let curr = [0, 0];
  let count = 1;

  while (count <= (n / 2) * (n + 1)) {
    answer[curr[0]][curr[1]] = count;
    count++;
    switch (state) {
      case "d":
        if (curr[0] + 1 < answer.length && answer[curr[0] + 1][curr[1]] === 0) {
          curr[0] += 1;
        } else {
          curr[1] += 1;
          state = "r";
        }
        break;
      case "r":
        if (
          curr[1] + 1 < answer[curr[0]].length &&
          answer[curr[0]][curr[1] + 1] === 0
        ) {
          curr[1] += 1;
        } else {
          curr[0] -= 1;
          curr[1] -= 1;
          state = "u";
        }
        break;
      case "u":
        if (
          curr[0] - 1 >= 0 &&
          curr[1] - 1 >= 0 &&
          answer[curr[0] - 1][curr[1] - 1] === 0
        ) {
          curr[0] -= 1;
          curr[1] -= 1;
        } else {
          curr[0] += 1;
          state = "d";
        }
        break;
    }
  }
  let result = [];
  answer.forEach((a) => {
    result = [...result, ...a];
  });
  return result;
}

/**
 * 00:39:31
 * 단순 구현 문제
 * 배열 생성 후 등차수열 만큼 count가 오를 때까지 계속 while을 돌리고
 * state에 따라 달리 작동하도록 함
 */
