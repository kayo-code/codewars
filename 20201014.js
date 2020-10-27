/*
問題
https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript
 */

function matrixAddition(a, b){
  //TODO
  const ansArr = [];
//   console.log(a)
//   console.log(b)
  a.forEach((value,index) => {
    const mapValue = value.map((num,numIndex) => {
      return num + b[index][numIndex];
    })
    ansArr.push(mapValue)
  })
  return ansArr
}
