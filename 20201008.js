/*
問題
https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6
 */
function addArrays(array1, array2) {
  console.log(array1);
  console.log(array2);

  let arrayToNumber1 = parseInt(array1.join('')) || 0;
  let arrayToNumber2 = parseInt(array2.join('')) || 0;
  console.log(arrayToNumber1);
  console.log(arrayToNumber2);
  const sumNum = arrayToNumber1 + arrayToNumber2;
  const arrNum = sumNum.toString().split('')
  const minusIndex = arrNum.indexOf('-');

  if(arrNum[0] === '-') {
    arrNum.splice(minusIndex,1,'-' + arrNum[minusIndex+1])
    arrNum.splice(minusIndex + 1,1)
  }
  if(arrNum.length === 0) return arrNum;
  console.log(arrNum)
  const ans = arrNum.map((value) => Number(value));
  if(ans.length === 1 && ans[0] === 0) return [];
  return ans
}
