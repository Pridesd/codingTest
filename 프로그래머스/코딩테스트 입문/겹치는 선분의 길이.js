function solution(lines) {
  var answer = 0;
  const lineBox = new Array(200).fill(0);
  lines.forEach((line) => {
    for (let i = line[0] + 100; i < line[1] + 100; i++) {
      lineBox[i] += 1;
    }
  });
  lineBox.forEach((dot) => {
    if (dot > 1) answer += 1;
  });
  return answer;
}

/**
 * 확실히 수학적인 부분에 크게 약점을 가지고 있다보니
 * 이러한 수학 문제에서 시간 소비가 심하다.
 * -100부터 100까지이기 때문에 200개의 인덱스를 가지는 배열을 선언한 후
 * 주어진 선분이 지나는 공간을 1씩 더해 값이 1 초과인 부분의 값을 체크했다.
 */
