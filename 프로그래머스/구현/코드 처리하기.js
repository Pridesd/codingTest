function solution(code) {
  var answer = "";
  let mode = 0;
  [...code].forEach((c, idx) => {
    if (c === "1") {
      mode = (mode + 1) % 2;
      return;
    }
    if (idx % 2 === mode) {
      answer = `${answer}${c}`;
    }
  });
  return answer === "" ? "EMPTY" : answer;
}

/**
 * 시간 미측정
 */
