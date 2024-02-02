function solution(quizs) {
  return quizs.map((quiz) => {
    const [expression, result] = quiz.split(" = ");
    const [value1, operator, value2] = expression.split(" ");
    switch (operator) {
      case "+":
        return Number(value1) + Number(value2) === Number(result) ? "O" : "X";
      case "-":
      default:
        return Number(value1) - Number(value2) === Number(result) ? "O" : "X";
    }
  });
}

/**
 * 굳이 answer를 쓰지 않고도 map함수와 구조 분해 할당을 이용해 쉽게 문제를 풀 수 있었다.
 */
