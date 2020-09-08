/*
問題
https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc/train/javascript
 */

function splitByValue(k, elements){
  const arrsmall = elements.filter((value) => value < k );
  // console.log(arrsmall);
  const arrbig = elements.filter((value) => k <= value);
  // console.log(arrbig);
  const arrsum = arrsmall.concat(arrbig);
  // console.log(arrsum);
  return arrsum;
}

splitByValue(5,[1, 3, 5, 7, 6, 4, 2])
splitByValue(0, [5, 2, 7, 3, 2])
splitByValue(6, [6, 4, 10, 10, 6])

