function solution(num, total) {
  var answer = [];

  for (let i = 0; i < num; i++) {
    answer.push(i);
  }

  while (true) {
    const tempSum = answer.reduce((a, b) => a + b, 0);
    answer.sort((a, b) => a - b);
    if (tempSum === total) return answer;
    if (tempSum > total) {
      answer.push(answer[0] - 1);
      answer.splice(answer.indexOf(Math.max(...answer)), 1);
      continue;
    }
    if (tempSum < total) {
      answer.push(answer[answer.length - 1] + 1);
      answer.splice(answer.indexOf(Math.min(...answer)), 1);
    }
  }
  return answer;
}

/**
 * 숫자의 길이와 total값을 주고 해당 길이의 연속된 숫자가 total값을 만족하는 경우의 숫자를 반환하는 문제.
 * 그냥 넣었다가 뺐다가를 반복했다.
 * 길이가 길어지면 문제가 발생할 풀이
 */
