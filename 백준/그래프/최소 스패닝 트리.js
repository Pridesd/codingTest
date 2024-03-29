const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let l = -1;
let input = [];

rl.on("line", function (line) {
  if (l === -1) {
    [n, l] = line.split(" ").map((d) => Number(d));
  } else {
    input.push(
      line.split(" ").map((d, idx) => {
        if (idx === 2) {
          return Number(d);
        }
        return Number(d) - 1;
      })
    );
  }
  if (input.length === l) rl.close();
}).on("close", function () {
  let answer = 0;
  input.sort((a, b) => a[2] - b[2]);
  const parent = new Array(n).fill(0).map((_, idx) => Number(idx));

  const getParent = (n) => {
    if (parent[n] === n) return n;
    return (parent[n] = getParent(parent[n]));
  };

  const isCycle = (a, b) => {
    return getParent(a) === getParent(b);
  };

  const union = (a, b) => {
    const n1 = getParent(a);
    const n2 = getParent(b);

    if (n1 < n2) parent[n2] = n1;
    else parent[n1] = n2;
    return;
  };

  for (const node of input) {
    if (node !== null && !isCycle(node[0], node[1])) {
      answer += node[2];
      union(node[0], node[1]);
    }
  }
  console.log(answer);
});

/**
 * 00:42:30
 * 별자리 만들기 문제의 연장선으로 최소 신장 거리를 구하는 문제였다.
 * 별거 아닌 오류로 시간을 너무 많이 쏟았다
 */
