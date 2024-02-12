function solution(n, wires) {
  var answer = n;
  const connect = Array.from(Array(n + 1), () => []);
  wires.forEach((element) => {
    let [a, b] = element;

    connect[a].push(b);
    connect[b].push(a);
  });

  const search = (start, except) => {
    const visited = new Array(n + 1).fill(false);
    const stack = [start];
    visited[start] = true;
    while (stack.length) {
      const idx = stack.pop();
      connect[idx].forEach((i) => {
        if (!visited[i] && i !== except) {
          stack.push(i);
          visited[i] = true;
        }
      });
    }
    return visited.filter((v) => v).length;
  };

  wires.forEach((w) => {
    answer = Math.min(
      answer,
      Math.abs(search(w[0], w[1]) - search(w[1], w[0]))
    );
  });

  return answer === n ? n - 1 : answer;
}

/**
 * 풀이는 이해했으나 from과 fill의 차이를 알아야겠다.
 * fill일땐 작동을 안 하고 from일 때 작동하는 이유는 뭘까?
 */
