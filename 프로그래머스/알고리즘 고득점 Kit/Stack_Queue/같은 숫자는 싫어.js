function solution(arr) {
  const answer = [arr[0]];
  let now = arr[0];

  arr.forEach((el, idx) => {
    if (idx === 0) {
      return;
    }
    if (now !== el) {
      answer.push(el);
      now = el;
    }
  });

  return answer;
}

/**
 * 00:06:39
 * 이거는 lv 1이 아니라 lv 0아닌가 너무 쉬웠다.
 */
