const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let len = 3;

rl.on("line", function (line) {
  if (input.length < len) {
    input.push(line.split(" ").map((d) => Number(d)));
  } else rl.close();
}).on("close", function () {
  const [[x1, y1], [x2, y2], [x3, y3]] = input;

  const num1 = (y3 - y1) * (x2 - x1);
  const num2 = (y2 - y1) * (x3 - x1);

  if (num1 < num2) {
    console.log("-1");
    return;
  }
  if (num1 > num2) {
    console.log("1");
    return;
  }
  console.log("0");
});

/**
 * 00:56:43
 * CCW는 유명한 기하학 문제라고 한다.. 근데 도통 무슨 말인지 잘 모르겠다.. 직선의 방정식을 다시 공부해야하나..
 */
