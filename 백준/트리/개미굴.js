const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let len = -1;

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.output = "";
  }

  insert(nodeList) {
    let currNode = this.root;

    nodeList.forEach((node) => {
      if (!currNode.children[node]) {
        currNode.children[node] = new Node(node);
      }
      currNode = currNode.children[node];
    });
  }

  saveTree(length, currNode) {
    if (length === 0) {
      currNode = this.root;
    }

    for (const node of Object.keys(currNode.children).sort()) {
      this.output += `${"--".repeat(length)}${node}\n`;
      this.saveTree(length + 1, currNode.children[node]);
    }
  }

  print() {
    console.log(this.output.trim());
  }
}

rl.on("line", function (line) {
  if (len === -1) {
    len = Number(line);
  } else {
    input.push(line.split(" ").slice(1));
  }
  if (input.length === len) rl.close();
}).on("close", function () {
  const trie = new Trie();

  input.forEach((i) => {
    trie.insert(i);
  });

  trie.saveTree(0);

  trie.print();
});

/**
 * 01:29:03
 * Trie라는 트리구조를 처음 배웠다.
 * Trie를 통해 자식 노드(연결된 먹이)를 저장하고 탐색할 수 있다.
 * 이걸 하면서 배열에서도 key값 동적 할당이 가능하다는 것을 배웠다
 */
