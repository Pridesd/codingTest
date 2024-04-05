const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let len = -1;
let count = 0;
let n, p1, p2;

rl.on("line", function (line) {
  if (len === -1) {
    switch (count) {
      case 0:
        n = Number(line);
        break;
      case 1:
        [p1, p2] = line.split(" ").map((d) => Number(d));
        break;
      case 2:
        len = Number(line);
    }
    count++;
  } else {
    input.push(line.split(" ").map((d) => Number(d)));
    if (input.length === len) {
      rl.close();
    }
  }
}).on("close", function () {
  const stack = [];
  const match = {};
  const visited = new Array(n + 1).fill(false);
  let result = 0;
  input.forEach(([a, b]) => {
    if (match[a]) {
      match[a].push(b);
    } else {
      match[a] = [b];
    }
    if (match[b]) {
      match[b].push(a);
    } else {
      match[b] = [a];
    }
  });
  stack.push([p1, 0]);

  while (stack.length) {
    [start, c] = stack.pop();
    visited[start] = true;
    if (start === p2) {
      result = c;
      break;
    }
    match[start].forEach((d) => {
      if (!visited[d]) stack.push([d, c + 1]);
    });
  }

  result ? console.log(result) : console.log(-1);
});

/**
 * 전형적인 DFS문제
 */
