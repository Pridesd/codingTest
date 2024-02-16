function solution(operations) {
  const queue = [];
  operations.forEach((o) => {
    const [logic, number] = o.split(" ");
    switch (logic) {
      case "I":
        queue.push(Number(number));
        break;
      case "D":
        const num = Number(number);
        if (num === -1) {
          queue.shift();
        } else {
          queue.pop();
        }
        break;
    }
    queue.sort((a, b) => a - b);
  });
  return queue.length > 0 ? [queue[queue.length - 1], queue[0]] : [0, 0];
}

/**
 * 00:08:39
 * 자바스크립트에서는 너무 편하게 풀 수 있었다.
 * pop, shift, push만 적절히 활용하면 너무 쉽게 풀 수 있는 문제
 */
