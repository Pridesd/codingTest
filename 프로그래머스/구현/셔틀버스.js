// 셔틀 운행 횟수 n, 셔틀 운행 간격 t, 한 셔틀에 탈 수 있는 최대 크루 수 m,
// 크루가 대기열에 도착하는 시각을 모은 배열 timetable
function getTime(time) {
  const toString = (t) => {
    if (t < 10) {
      return `0${t}`;
    }
    return `${t}`;
  };
  let [hour, min] = time.split(":").map((t) => Number(t));
  if (min < 0) {
    hour -= 1;
    min += 60;
  }
  return `${toString(hour)}:${toString(min)}`;
}

function solution(n, t, m, timetable) {
  var answer = "";
  let startHour = 9;
  let startMin = 0;
  timetable = timetable.map((t) => {
    return t.split(":").map((d) => Number(d));
  });
  timetable.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      startMin += t;
    }
    if (startMin >= 60) {
      startMin -= 60;
      startHour++;
    }
    let count = 0;
    const len = timetable.length;
    for (let j = 0; j < len; j++) {
      const [hour, min] = timetable[0];
      if (hour < startHour) {
        count++;
        timetable.shift();
      }
      if (hour === startHour && min <= startMin) {
        count++;
        timetable.shift();
      }
      if (count === m) {
        answer = `${hour}:${min - 1}`;
        break;
      }
    }
    if (count < m) {
      answer = `${startHour}:${startMin}`;
    }
  }

  return getTime(answer);
}

/**
 * 00:43:00
 * 단순 구현 문제..
 * 시간을 어떻게 구하냐가 관건이었는데
 * split으로 그냥 멍청하게 구한 것 같다.
 * 푼 게 어디야!
 */
