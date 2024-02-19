function solution(record) {
  var answer = [];
  const nameList = {};
  record.forEach((r) => {
    const [ins, id, name] = r.split(" ");
    switch (ins) {
      case "Enter":
        nameList[id] = name;
        answer.push([id, "님이 들어왔습니다."]);
        break;
      case "Change":
        nameList[id] = name;
        break;
      case "Leave":
        answer.push([id, "님이 나갔습니다."]);
    }
  });
  return answer.map((r) => {
    const [id, ins] = r;
    return `${nameList[id]}${ins}`;
  });
}

/**
 * 00:20:01
 * 조금 쉬웠던 문제. 아침이여서 그런가..
 * id랑 명령어를 저장하고 나중에 Object에 저장된 name값을 불러와서 붙인다.
 */
