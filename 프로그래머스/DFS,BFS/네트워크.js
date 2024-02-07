function solution(n, computers) {
  var answer = 0;
  const visited = new Array(n).fill(false);
  while (visited.includes(false)) {
    answer++;
    const stack = [visited.indexOf(false)];
    while (stack.length > 0) {
      const idx = stack.pop();
      visited[idx] = true;
      computers[idx]?.forEach((com, compIdx) => {
        if (com === 1 && !visited[compIdx]) {
          stack.push(compIdx);
        }
      });
    }
  }
  return answer;
}

/**
 * 00:29:59
 * DFS문제.. 이거 Lv.3라던데 그건 아닌 것 같다.
 * 방문했는지 확인하는 배열을 생성하고..
 * 그게 모두 방문할 때까지 스택을 계속 돌렸다
 */
