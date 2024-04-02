const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let time;
let drink;

rl.on("line", function (line) {
  [time, drink] = line.split(" ").map((d) => Number(d));

  rl.close();
}).on("close", function () {
  if (time >= 12 && time <= 16 && drink === 0) {
    console.log(320);
  } else {
    if (drink === 1 || time < 12 || time > 16) {
      console.log(280);
    }
  }
});

/**
 * 00:08:10
 * 쉬운 문제
 */
