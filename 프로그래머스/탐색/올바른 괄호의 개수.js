// function solution(n) {
//     const count = new Array(n+1).fill(0).map(() => [])
//     count[1].push('()')
//     for(let i = 2; i <= n; i++){
//         const countSet = new Set();
//         count[i-1].forEach((d) => {
//             countSet.add(`(${d})`);
//             countSet.add(`()${d}`);
//             countSet.add(`${d}()`);
//         })
//         for(let j = 1; j < i-1; j++){
//             count[j].forEach((d1) => {
//                 count[i-j].forEach((d2) => {
//                     countSet.add(`${d1}${d2}`)
//                     countSet.add(`${d2}${d1}`)
//                 })
//             })
//         }
//         count[i] = [...countSet]

//     }
//     return count[n].length
// }
// 시간 초과

//카탈랑 수열
function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}

/**
 * 01:25:35
 * DP인줄 알고 풀려고 했다가 시간 초과가 나서 결국 답지를 봤다..
 * 카탈랑 수열이라고는 한데
 * 그냥 7일 때 [1, 6], [2, 5], [3, 4]일때의 경우의 수를 다 더하는 방식 같다..
 * 후 나 왤캐 못할까
 */
