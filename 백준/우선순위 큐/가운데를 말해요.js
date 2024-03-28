const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
class MinHeap extends Heap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  //bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }
  //add
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }
  //poll
  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}
class MaxHeap extends MinHeap {
  //bubbleUp
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  //bubbleDown
  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) > this.items[index] ||
        this.rightChild(index) > this.items[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }
}

let n = 0;
let count = -1;
const result = [];
const max = new MaxHeap();
const min = new MinHeap();

rl.on("line", function (line) {
  if (count === -1) {
    count = parseInt(line);
    n = count;
    return;
  }

  if (max.size() > min.size()) {
    min.add(parseInt(line));
  } else {
    max.add(parseInt(line));
  }
  if (min.size() === 0) result.push(max.peek());
  else {
    if (max.peek() > min.peek()) {
      const tmp = max.poll();
      max.add(min.poll());
      min.add(tmp);
    }
    result.push(max.peek());
  }
  count--;
  if (count === 0) rl.close();
}).on("close", function () {
  console.log(result.join("\n"));
  process.exit();
});

/**
 * 우선순위 큐 문제.
 * 시간 제한이 있어 sort함수로는 풀지 못한다..
 * 방법을 찾지 못해 헤매다가 결국 해설을 봤다..
 * 최소힙과 최대힙을 두개를 사용한다.
 * 최소힙에는 절반에서 큰 수를 최대힙에는 절반에서 작은 수를 저장한다.
 * 그래서 최대힙의 top값을 계속해서 peek하면 그 수의 중간값을 찾아낼 수 있다.
 * 값이 입력될 때 최대힙에 값을 입력하다가. 최대힙의 개수가 최소힙의 개수보다 많은 경우 최소힙에 push한다.
 * 만약 최대힙의 top 값이 최소힙의 top 값보다 큰 경우 두 값을 swap한다(최소힙에는 절반에서 큰 수를 최대힙에는 절반에서 작은 수를 저장하기 때문)
 *
 * JS에서는 heap을 제공해주지 않기 때문에 이런 문제에서 쉽게 막힌다. heap 사용법에 대해 익혀야겠다.
 */
