function solution(user_id, banned_id) {
  const banList = new Array(banned_id.length).fill(0).map(() => []);
  banned_id.forEach((banId, countIdx) => {
    user_id.forEach((userId) => {
      if (userId.length !== banId.length) return;
      let isBlock = true;
      const spread = [...userId];
      spread.forEach((c, idIdx) => {
        if (c !== banId[idIdx] && banId[idIdx] !== "*") {
          isBlock = false;
        }
      });
      if (isBlock) {
        banList[countIdx].push(userId);
      }
    });
  });
  const result = [];
  const getCombination = (currentIdx = 0, currentList = []) => {
    if (currentList.length === banned_id.length) {
      result.push(JSON.stringify(currentList.sort()));
      return;
    }
    banList[currentIdx].forEach((id) => {
      if (!currentList.includes(id)) {
        getCombination(currentIdx + 1, [...currentList, id]);
      }
    });
  };
  getCombination();
  return new Set(result).size;
}

/**
 * 01:01:04
 * 후 그래도 풀었다..
 * 나는 일단 주어진 차단 사용자 id 목록에 해당되는 친구들을 list에 저장했다..
 * 그리고 해당하는 것들에 대해 조합을 구해주고 stringify를 했다..
 * stringify를 한 이유는 배열간의 비교는 어렵기 때문에 문자열비교로 시간도 줄여줬다..
 * 그리고 Set을 사용해 중복된 요소를 모두 지우고 그 크기를 반환하면 완성!
 * 같은 조합은 하나로 친다는 점이 나에게 까다롭게 다가온 것 같다..
 */
