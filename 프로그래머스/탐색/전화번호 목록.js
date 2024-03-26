function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) return false;
  }
  return true;
}
/**
 * 00:33:04
 * 문자열 정렬을 먼저 한 후 앞에 자리가 그 이전 거인지 확인하면 되는 문제
 */
