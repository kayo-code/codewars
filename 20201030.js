/*
問題
https://www.codewars.com/kata/58223370aef9fc03fd000071/solutions/javascript
 */

function dashatize(num) {
  //get 'em
  console.log(num)
  if(Number.isNaN(num)) return 'NaN';
  const numString = num.toString().replace(/^-/,'').split('')
  console.log(numString)
  const add = numString.map((num) => {
    if(Number(num)%2 === 0) return num;
    return '-' + Number(num) + '-'
  })
  const joinNum = add.join('').replace(/-+/g,'-').replace(/^-/,'').replace(/-$/,'')
  console.log(joinNum)
}
dashatize(274)
dashatize(5311)
dashatize(NaN)
dashatize(-1)
