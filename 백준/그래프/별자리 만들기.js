const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let len = -1;

function getLength(a, b) {
  const x = Math.pow(a[0] - b[0], 2);
  const y = Math.pow(a[1] - b[1], 2);
  return Math.pow(x + y, 0.5);
}

rl.on("line", function (line) {
  if (len === -1) {
    len = Number(line);
  } else {
    input.push(line.split(" ").map((d) => Number(d)));
  }
  if (input.length === len) rl.close();
}).on("close", function () {
  let answer = 0;
  if (input.length === 1) {
    console.log(0);
    return;
  }
  const len = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      len.push([i, j, getLength(input[i], input[j])]);
    }
  }
  len.sort((a, b) => a[2] - b[2]);
  const parent = new Array(input.length).fill(0).map((_, idx) => idx);

  const getParent = (n) => {
    if (parent[n] === n) return n;
    parent[n] = getParent(parent[n]);
    return parent[n];
  };

  const union = (a, b) => {
    const n1 = getParent(a);
    const n2 = getParent(b);
    if (n1 < n2) {
      parent[n2] = n1;
    } else parent[n1] = n2;
    return;
  };

  const isCycle = (a, b) => {
    return getParent(a) === getParent(b);
  };

  for (const node of len) {
    if (!isCycle(node[0], node[1])) {
      answer += node[2];
      union(node[0], node[1]);
    }
  }
  console.log(answer.toFixed(2));
});

/**
 * 최소신장트리를 이용한 문제 풀이..
 * 각 별간의 거리를 담은 배열을 저장하고 그 배열의 트리의 최소값을 구하면 된다..
 * 간만에 최소 신장 트리를 접해서 반가웠던 문제
 */
