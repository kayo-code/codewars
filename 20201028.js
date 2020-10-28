/*
問題
https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
 */


function digPow(n, p){
  // ...
  const arr = n.toString().split('');
  const arrNum = arr.map((value) => Number(value));
  // console.log(arrNum)
  const sumNum = arrNum.reduce((sum,current,index) => {
    return sum + Math.pow(current,p + index)
  },0)
  if(sumNum < n) return -1;
  if(sumNum%n) return -1;
  return sumNum/n;
}

digPow(89, 1)
digPow(92, 1)
digPow(46288, 3)

//ベスプラ
//文字列のまま計算しているので、Number()で数値に変換したほうが良いと思う。
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
