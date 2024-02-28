function solution(arr1, arr2) {
  var answer = new Array(arr1.length)
    .fill(0)
    .map(() => new Array(arr2[0].length).fill(0));
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      arr1[i].forEach((v, idx) => {
        sum += v * arr2[idx][j];
      });
      answer[i][j] = sum;
    }
  }
  return answer;
}

/**
 * 대략 5분
 * 행렬의 위치만 안다면야.. 최대 1000000만회 연산
 * 시간 오류는 날 일 없음
 */
