function solution(n, edge) {
  var answer = 0;
  const visited = [-1, 1];
  const stack = [[1, 0]];
  const link = {};
  edge.forEach(([start, end]) => {
    if (link[start]) {
      link[start].push(end);
    } else {
      link[start] = [end];
    }
    if (link[end]) {
      link[end].push(start);
    } else {
      link[end] = [start];
    }
  });
  while (stack.length) {
    const [idx] = stack.shift();
    link[idx].forEach((i) => {
      if (!visited[i]) {
        visited[i] = visited[idx] + 1;
        stack.push([i]);
      }
    });
  }
  const max = Math.max(...visited);
  return visited.filter((v) => max === v).length;
}

/**
 * 01:02:32
 * 보자마자 BFS로 풀 수 있겠다고 생각했지만, 풀기까지 많은 시간이 걸렸다..
 * 시간초과.. 원래 visted와 distance로 분리했는데 이걸 다시 합치고 하니 시간초과가 해결되었다..
 */
