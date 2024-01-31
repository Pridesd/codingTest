// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요./

function solution(babbling) {
  const langs = ["aya", "ye", "woo", "ma"];
  var answer = 0;

  babbling.forEach((bab) => {
    let len = 0;
    langs.forEach((lang) => {
      if (bab.includes(lang)) {
        len += lang.length;
      }
    });
    if (bab.length === len) {
      answer++;
    }
  });
  return answer;
}

/**
 * 이상적인 답
 * 
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })

  return answer;
}
* regex로 풀이하면 쉽게 풀 수 있었음
 */
