function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];
  const countMap = new Array(n).fill(0).map(() => new Array(m).fill(0));
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [[0, 0]];
  countMap[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    move.forEach(([calcX, calcY]) => {
      const [newX, newY] = [x + calcX, y + calcY];
      if (
        0 <= newX &&
        newX < n &&
        0 <= newY &&
        newY < m &&
        maps[newX][newY] === 1 &&
        countMap[newX][newY] === 0
      ) {
        countMap[newX][newY] = countMap[x][y] + 1;
        queue.push([newX, newY]);
      }
    });
  }

  return countMap[n - 1][m - 1] === 0 ? -1 : countMap[n - 1][m - 1];
}

/**
 * 00:16:33
 * 전형적인 BFS문제
 */
