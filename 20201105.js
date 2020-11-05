/*
問題
https://www.codewars.com/kata/59aa6567485a4d03ff0000ca/solutions
*/

function solve(a,b) {
  const primeItems = loopNumber(a,b)
//数値を文字列配列にする
  const stringNum = primeItems.map((num) => num.toString().split(''))
  console.log(stringNum)
//要素を二乗する
  const test = stringNum.map((arr) => {
    return cycle(arr)
  })
  console.log(test)
}

//数値を分割して二乗し、足す　(want:返し値をループさせたい)
function cycle(arr) {
  // console.log(arr)
  const test = arr.reduce((num,curr,index) => {
    const currNum = Number(curr)
    return num =+ Math.pow(currNum,2)
    // console.log(num)
  },0)
  console.log(test.toString().split(''))
  // test.toString().split('')
}
//素数判定
function primeNumber(n){
  if(n === 1) return false;
  if(n === 2) return true;
  if(n === 3) return true;
  for(let i = 2; i < n; i++) {
    if(n%i === 0) return false;
  }
  return true;
}

//引数の範囲をループして素数判定さっせる
function loopNumber(x,y){
  const primeArr = [];
  for(let i = x; x <= y; x++){
    primeNumber(x)
    if(primeNumber(x)) {
      primeArr.push(x)
    }
  }
  return primeArr
}
solve(1,25)
