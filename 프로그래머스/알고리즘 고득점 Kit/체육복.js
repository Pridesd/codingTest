function solution(n, lost, reserve) {
  let answer = n - lost.length;
  reserve = reserve.filter((student) => {
    if (lost.includes(student)) {
      lost.splice(lost.indexOf(student), 1);
      answer += 1;
      return false;
    }
    return true;
  });

  reserve.sort((a, b) => a - b);
  lost.sort((a, b) => a - b);

  lost.forEach((student) => {
    if (reserve.includes(student - 1) || reserve.includes(student + 1)) {
      answer += 1;
      if (reserve.includes(student - 1)) {
        reserve.splice(reserve.indexOf(student - 1), 1);
        return;
      }
      reserve.splice(reserve.indexOf(student + 1), 1);
    }
  });

  return answer;
}

/**
 * 1:13:15
 * 앞에 친구부터 차례대로 옆 친구의 체육복을 빌려 입는 방법을 사용했다.
 * 오래 걸린 이유는 멍청하게 filter가 반환되는 걸 깜빡하고 값을 받지 않았다.
 * 엄한 것만 건드렸네..
 * 반성하자 진짜
 */
