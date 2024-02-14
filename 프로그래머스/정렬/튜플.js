function solution(s) {
  var answer = [];
  s = s
    .split("}")
    .filter((c) => c.length)
    .map((e) => {
      e = e.replace(/{/g, "");
      return e
        .split(",")
        .filter((c) => c.length)
        .map((c) => Number(c));
    });
  s.sort((a, b) => a.length - b.length);
  answer[0] = s[0][0];
  for (let i = 1; i < s.length; i++) {
    answer.forEach((a) => {
      const idx = s[i].indexOf(a);
      s[i].splice(idx, 1);
    });
    answer.push(s[i][0]);
  }

  return answer;
}

/**
 * 00:25:26
 * 맨처음에 튜플이라는 형태를 문자열로 "{{}}"이따구로 줘서 좀 당황스러웠지만
 * filter와 replace를 적절히 섞어서 문제를 풀었다.
 * 튜플을 숫자로 변환하고 length순으로 정렬한 후 차례대로 answer에 push했다
 */
