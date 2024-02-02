function solution(common) {
  if (common[1] + (common[1] - common[0]) === common[2])
    return (common[1] - common[0]) * common.length + common[0];
  return common[0] * (common[1] / common[0]) ** common.length;
}

/**
 * 이 문제는 위 식이 등차수열인지, 등비수열인지만 알면 쉽게 풀 수 있는 문제라고 생각한다.
 */
