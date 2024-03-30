const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let len = -1;

rl.on("line", function (line) {
  rl.close();
}).on("close", function () {});
