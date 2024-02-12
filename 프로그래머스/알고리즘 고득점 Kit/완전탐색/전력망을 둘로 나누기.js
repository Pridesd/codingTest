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

  return answer;
}

/**
 * 풀이는 이해했으나 from과 fill의 차이를 알아야겠다.
 * fill일땐 작동을 안 하고 from일 때 작동하는 이유는 뭘까?
 * fill은 얕은 복사로 동일한 값을 배열에 적용한다. 그래서 fill을 통해 다차원 배열을 만들려고 하는 경우
 * 그 배열들이 동일한 곳을 가리키기 때문에 문제가 발생하는 것이었다
 * 그래서 다차원 배열을 만들고자 할 때는 from을 사용해야 한다.
 */
