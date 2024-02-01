function solution(board) {
  const move = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];
  var answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] % 2 === 1) {
        move.forEach(([x, y]) => {
          const newX = i + x;
          const newY = j + y;
          if (
            newX >= 0 &&
            newX < board.length &&
            newY >= 0 &&
            newY < board.length
          ) {
            board[newX][newY] += 2;
          }
        });
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        answer++;
      }
    }
  }
  return answer;
}

/**
 * 처음에 볼 때 익숙한 문항이었기 때문에
 * 빨리 풀 줄 알았다
 * 근데 8개의 공간을 어떻게 체크해야할지, 지뢰는 어떻게 체크해야할지 어려움이 있었다.
 * 그래서 지뢰는 홀수, 위험지대는 짝수로 놓아 구별했다.
 */
