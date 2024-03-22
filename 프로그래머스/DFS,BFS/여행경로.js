function solution(tickets) {
  var answer = [];
  const result = [];
  const visit = [];
  const len = tickets.length;
  tickets.sort();

  const dfs = (now, count) => {
    result.push(now);
    if (count === len) {
      answer = result;
      return true;
    }
    for (let i = 0; i < len; i++) {
      if (!visit[i] && tickets[i][0] === now) {
        visit[i] = true;
        if (dfs(tickets[i][1], count + 1)) return true;
        visit[i] = false;
      }
    }

    result.pop();
    return false;
  };
  dfs("ICN", 0);
  return answer;
}

/**
 * 01:42:32
 * DFS 문제..
 * 풀다가 도저히 풀리지 않아 답을 봤다..
 * DFS는 재귀적으로 푸는 방법이랑 stack을 사용하는 방법 두 가지가 있는데 이 문제는 공항의 수가 최대 10000개이기 때문에 재귀적 풀이가 가능하다.
 * dfs에서 return되는 true false는 탐색 성공 여부이다. 그래서 탐색이 전부 된 경우에만 result를 answer로 옮겨서 대입한다..
 * 답만 봤을땐 그렇게 쉬워보이는데 참.. 알 수 없다
 */
