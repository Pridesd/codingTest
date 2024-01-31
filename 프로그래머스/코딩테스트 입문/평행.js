/**
 * 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(dots) {
  if (
    (dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1]) ===
      (dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1]) ||
    (dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1]) ===
      (dots[3][0] - dots[2][0]) / (dots[3][1] - dots[2][1])
  )
    return 1;

  if (
    (dots[0][0] - dots[2][0]) / (dots[0][1] - dots[2][1]) ===
      (dots[1][0] - dots[3][0]) / (dots[1][1] - dots[3][1]) ||
    (dots[0][0] - dots[2][0]) / (dots[0][1] - dots[2][1]) ===
      (dots[3][0] - dots[1][0]) / (dots[3][1] - dots[1][1])
  )
    return 1;

  if (
    (dots[0][0] - dots[3][0]) / (dots[0][1] - dots[3][1]) ===
      (dots[1][0] - dots[2][0]) / (dots[1][1] - dots[2][1]) ||
    (dots[0][0] - dots[3][0]) / (dots[0][1] - dots[3][1]) ===
      (dots[2][0] - dots[1][0]) / (dots[2][1] - dots[1][1])
  )
    return 1;
  return 0;
}

/**
 * 진짜 멍청하게 푼 문제.
 * 저 기울기를 계산하는 함수를 따로 뺐다면, 더 간단하게 구현할 수 있었다.
 * 정답은 알지만, 더 효율적으로 짜는 방법을 고민하다가 못한 문제
 */
