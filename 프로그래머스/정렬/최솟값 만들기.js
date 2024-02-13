function solution(A, B) {
  let first = 0;
  let second = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((_, idx) => {
    first += A[idx] * B[idx];
    second += A[A.length - idx - 1] * B[A.length - idx - 1];
  });

  return Math.min(first, second);
}

/**
 * 00:08:12
 * 비교적 쉬운 문제.
 * 아니 많이 쉬운 문제였다  ㅋㅋ
 * A, B 하나는 내림차순으로 하나는 오름차순으로 정렬하고
 * 0번부터 곱해서 더한 값과 length - 1번부터 더한 값을 비교해서 최솟값을 반환하면 되는 문제였다.
 */
