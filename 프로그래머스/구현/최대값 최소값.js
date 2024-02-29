function solution(s) {
  const numArr = s.split(" ").map((d) => Number(d));
  return `${Math.min(...numArr)} ${Math.max(...numArr)}`;
}
