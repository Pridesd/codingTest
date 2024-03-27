//readline 모듈 불러오기
const readline = require("readline");
//인터페이스 객체 생성하기
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
//물품의 수
let N;
//버틸 수 있는 무게
let K;
const bags = [];
//입출력 처리하는 코드
rl.on("line", function (line) {
  if (count === 0) {
    [N, K] = line.split(" ").map((n) => Number(n));
    count++;
  } else {
    bags.push(line.split(" ").map((n) => Number(n)));
    count++;
  }
  //입력 처리하는 코드
  if (count === N + 1) {
    rl.close();
  }
}).on("close", function () {
  //입력을 받은 뒤 실행할 코드
  const dp = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));
  for (let i = 1; i < bags.length + 1; i++) {
    const [w, v] = bags[i - 1];
    for (let j = w; j <= K; j++) {
      dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j]);
    }
  }

  console.log(dp[N][K]);
  process.exit(); //종료문
});

/**
 * 01:43:00
 * DP의 대표적인 문제..
 * 이전의 값과 최신 값을 비교해서 업데이트한다.
 * 하 백준에서 JS쓰기 너무 어렵다
 */
