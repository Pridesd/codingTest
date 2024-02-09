function solution(s) {
  var answer = true;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      continue;
    }
    if (stack.length > 0) {
      stack.pop();
      continue;
    }
    return false;
  }

  return stack.length === 0 ? true : false;
}

/**
 * 00:07:38
 * 스택의 기본적인 문제.
 * 근데 마지막 return 부분에 stack.length > 0로 처리할 때는 효율성 테스트에 자꾸 문제가 생겨서 뭐지 했다.
 */
