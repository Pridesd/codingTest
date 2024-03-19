function solution(sales, links) {
  const tree = {};
  const dp = {};
  links.map((link) => {
    const [leader, member] = link;
    if (tree[leader]) {
      tree[leader].push(member);
    } else {
      tree[leader] = [member];
    }
  });

  calcDp(tree, sales, dp, 1);
  return min(dp[1]);
}

const calcDp = (tree, sales, dp, idx) => {
  dp[idx] = [0, 0];
  const children = tree[idx];
  children.map((child) => {
    if (!dp[child]) {
      if (tree[child]) {
        calcDp(tree, sales, dp, child);
      } else {
        dp[child] = [0, sales[child - 1]];
      }
    }
  });

  let checkGroup = false;
  dp[idx][0] = children.reduce((acc, child) => {
    if (dp[child][0] < dp[child][1]) {
      return acc + dp[child][0];
    } else {
      checkGroup = true;
      return acc + dp[child][1];
    }
  }, 0);

  dp[idx][1] = dp[idx][0] + sales[idx - 1];

  if (!checkGroup) {
    let minOffset = Number.MAX_VALUE;
    children.map((child) => {
      const tempOffset = dp[child][1] - dp[child][0];
      if (tempOffset < minOffset) {
        minOffset = tempOffset;
      }
    });
    dp[idx][0] += minOffset;
  }
};

const min = (arr) => Math.min(...arr);

/**
 * 00:58:51
 * 이딴 문제를 왜 추천하는겨
 * Lv.4 문제였다. 당연히 못 풀었다..
 * 트리DP를 이용한 문제라고 하는데 솔직히 이해가 잘 되지 않는다
 * https://dev-note-97.tistory.com/293
 * 여기 사이트를 참고하면 좋을 듯하다..
 */
