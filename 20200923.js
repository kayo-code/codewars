/*
問題
https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript
 */

function solution(value){
  console.log(value)
  const stringValue = value.toString().length
  const concatValue = '00000' + value;
  console.log(concatValue)
  console.log(stringValue)
  return concatValue.slice(stringValue)
}

solution(1024)
solution(5)
