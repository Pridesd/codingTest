function solution(orders, course) {
  var answer = [];
  const combination = (order, selectedNumber) => {
    const result = [];

    if (selectedNumber === 1) {
      return order.map((el) => el);
    }
    order.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = combination(rest, selectedNumber - 1);
      const attached = combinations.map((el) =>
        [...`${fixed}${el}`].sort().join("")
      );
      result.push(...attached);
    });
    return result;
  };

  course.forEach((c) => {
    const combinations = [];
    const foodCount = {};
    orders.forEach((order) => {
      if (order.length >= c) {
        combinations.push(...combination([...order], c));
      }
    });
    if (combinations.length > 1) {
      combinations.forEach((c) => {
        if (foodCount[c]) {
          foodCount[c]++;
        } else {
          foodCount[c] = 1;
        }
      });
      let recommend = [];
      let max = 1;
      for (const [name, count] of Object.entries(foodCount)) {
        if (count === max && count !== 1) {
          recommend.push(name);
        } else if (count > max) {
          max = count;
          recommend = [name];
        }
      }
      answer.push(...recommend);
    }
  });
  return answer.sort();
}

/**
 * 00:52:41
 * 조합을 이용해서 풀이했다.
 * Python에는 조합을 구해주는 함수가 있는데 자바스크립트에는 존재하지 않는다.
 * 그래서 조합 구하는 법을 찾아봤다. 그리고 이번 문제에 맞춰서 배열이 아닌 문자열을 반환하도록 했다.
 * 그리고 entries를 통해 키 값 value값을 뽑아서 count값이 2이상이고 최댓값인 것만 뽑았다.
 * 간만에 재밌게 풀었네
 */
