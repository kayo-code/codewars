/*
問題
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/solutions

 */

function partsSums(ls) {
  const ans = [];
  while(ls.length) {
    const num = ls.reduce((sum,current) => {
      return sum+current
    },0);
    ls = ls.slice(1);
    ans.push(num);
  }
  ans.push(0)
  return ans
}

//ベスプラ
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map(v => sum = sum - v);
}
