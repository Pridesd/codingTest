// function solution(triangle) {
//   if (triangle.length === 1) {
//     return triangle[0][0];
//   }

//   const getSum = (depth, idx) => {
//     if (depth === triangle.length - 1) {
//       return triangle[depth][idx];
//     }

//     return (
//       triangle[depth][idx] +
//       Math.max(getSum(depth + 1, idx), getSum(depth + 1, idx + 1))
//     );
//   };

//   return triangle[0][0] + Math.max(getSum(1, 0), getSum(1, 1));
// }
// 시간 초과
// 2^500 = 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
// 인걸 생각하면 무식한 방법 ㅋㅋ

// function solution(triangle) {
//   for (let i = triangle.length - 1; i >= 0; i--) {
//     for (let j = 0; j < triangle[i].length - 1; j++) {
//       triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
//     }
//   }
//   return triangle[0][0];
// }
// 효율성 테스트에서 불합격

function solution(triangle) {
  for (let i = triangle.length - 1; i >= 0; i--)
    for (let j = 0; j < triangle[i].length - 1; j++) {
      const temp = Math.max(triangle[i][j], triangle[i][j + 1]);
      triangle[i - 1][j] += temp;
    }
  return triangle[0][0];
}

/**
 * 00:49:05
 * 기존의 재귀 방법으로 사용한 것은 깊이가 500까지 가능하기 때문에 성능 문제로 풀이가 불가능하다
 * 그래서 Bottom-up 방식으로 밑에서 부터 올라오면서 더하는 방식을 사용한다
 * 근데 왜 temp를 사용하니 효율성 테스트에서 합격이 되는 건지는 의문이다.
 */
