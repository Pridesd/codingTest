const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let len = -1;

rl.on("line", function (line) {
  if (len === -1) {
    len = Number(line);
  } else {
    input.push(line);
  }
  if (input.length >= len) rl.close();
}).on("close", function () {
  const result = [];
  input.forEach((s) => {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") stack.push("(");
      else {
        if (stack.length === 0) {
          result.push("NO");
          return;
        }
        stack.pop();
      }
    }
    if (stack.length) result.push("NO");
    else result.push("YES");
  });
  console.log(result.join("\n"));
});

/**
 * 00:11:02
 * 이거 어디서 풀어본 것 같은데
 * (인 경우에 stack에 저장하고 )인 경우에 스택에 저장된 (를 추출한다.
 * 만약 저장된 (가 존재하지 않는 경우에는 올바른 괄호가 아니기 때문에 NO를 출력하고
 * 모든 작업이 다 끝난 경우에 stack에 값이 남아있는 경우에도 NO를 출력한다.
 * 나머지는 YES
 */
