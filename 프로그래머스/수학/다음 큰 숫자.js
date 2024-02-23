function solution(n) {
  const leng1 = [...n.toString(2)].filter((c) => c === "1").length;
  for (let i = n + 1; i <= 1000000; i++) {
    if (leng1 === [...i.toString(2)].filter((c) => c === "1").length) {
      return i;
    }
  }
}

/**
 * 00:05:28
 * 이거더 toString 덕에 쉽게 풀었다..
 */
