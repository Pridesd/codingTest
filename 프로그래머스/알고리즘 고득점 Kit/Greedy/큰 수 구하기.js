function solution(number, k) {
  var answer = "";
  const stack = [];
  [...number].forEach((n) => {
    while (k > 0 && stack[stack.length - 1] < n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  });
  stack.splice(stack.length - k, k);
  return stack.join("");
}

/**
 * 답안을 봐버렸다.
 * 앞에 작은 값을 먼저 삭제하는 게 중요함.
 * stack을 사용하고 차례대로 stack에 넣는다.
 * 그리고 stack에 저장된 마지막 값이 지금 순회중인 값보다 작은 경우, pop을 함.(k의 값이 남을 때까지)
 * 그 다음 남은 k값이 존재한다면, 마지막 값을 k만큼 지움.
 * 이 생각을 왜 못했을까...
 */
