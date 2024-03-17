function solution(N, number) {
  var answer = 0;
  var use = Array.from(new Array(9), () => new Set());
  if (N == number) return 1;
  else {
    use.forEach((element, index) => {
      if (index !== 0) element.add(Number(String(N).repeat(index)));
    });
    for (var i = 1; i <= 8; ++i) {
      for (var j = 1; j < i; ++j) {
        for (var first of use[j]) {
          for (var second of use[i - j]) {
            use[i].add(first + second);
            use[i].add(first - second);
            use[i].add(first * second);
            use[i].add(first / second);
          }
        }
      }
      if (use[i].has(number)) return i;
    }
    return -1;
  }
  return answer;
}

/**
 * 01:14:34
 * 각 배열에 n번 연산을 했을 때 나오는 경우의 숫자를 저장하고
 * 만약 그 숫자가 number라면 해당 n값을 리턴
 */
