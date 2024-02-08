function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].forEach((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let nextIdx = i + 1;

    while (nextIdx < name.length && name[nextIdx] === "A") {
      nextIdx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - nextIdx,
      i + 2 * (name.length - nextIdx)
    );
  });

  return answer + min_move;
}

/**
 * 00:59:04
 * 이건 시간 재는 게 의미가 있나 싶다.. 해답을 봤는데..
 * 먼저 charCodeAt을 통해 해당 알파벳의 위치를 구하고 min값을 더해준다.
 * 그리고 A가 연달아서 나올 때 문제가 발생하는데,
 * 이때 그냥 오른쪽으로 순회하는 방법,
 * 현재 인덱스로 순회했다가 되돌아 가는 방법,
 * 뒤에 먼저 순회했다가 현재 인덱스로 되돌아 오는 방법 중에 제일 값이 적은 거를 선정한다.
 * 어차피 그거 순회하는 도중에 다 들리게 되는 거니까..
 * 이런 걸 생각할 수 있는 머리를 키우자.
 */
