class Heap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}

function solution(scoville, K) {
  var answer = 0;
  const heap = new Heap();
  scoville.forEach((s) => {
    heap.push(s);
  });
  while (heap.size() > 1 && heap.getMin() < K) {
    answer++;
    const food1 = heap.pop();
    const food2 = heap.pop();
    heap.push(food1 + food2 * 2);
  }
  return heap.getMin() < K ? -1 : answer;
}

/**
 * 00:20:56
 * heap만 안다면 너무나도 쉽게 풀 수 있는 문제
 * 모든 친구들을 K보다 높게 만들면 되기 때문에 가장 작은 두 친구를 꺼내면 된다.
 * JS는 heap을 제공해주지 않기 때문에 heap을 직접 구현해야한다..
 */
