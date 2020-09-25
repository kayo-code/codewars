/*
問題
https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
 */

function pairs(ar){
  let count = 0;
  if(ar.length % 2 !== 0) {
    ar.pop()
  }
  ar.forEach((value,index) => {
    if(index % 2 === 0){
      if((value + 1) === ar[index + 1] || (value - 1) === ar[index + 1]) {
        count+=1;
      } else {
      }
    }
  })
  return count;
}
pairs([1,2,5,8,-4,-3,7,6,5])
pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])
