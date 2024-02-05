function solution(progresses, speeds) {
  const answer = [1];
  const leftProgresses = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  let now = leftProgresses[0];
  leftProgresses.forEach((progress, idx) => {
    if (idx === 0) return;
    if (progress <= now) {
      const updateValue = answer.pop() + 1;
      answer.push(updateValue);
      return;
    }
    answer.push(1);
    now = progress;
  });
  return answer;
}

/**
 * 00:21:38
 * 스택이랑 큐는 좀 쉽게 느껴지나.. Lv.2임에도 금방 풀었다.
 * 먼저 잔여 일자를 계산하고 잔여 일자가 앞에 보다 적은 경우 1을 업데이트, 큰 경우에는 1을 추가했다.
 */
