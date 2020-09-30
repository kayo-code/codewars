/*
問題
https://www.codewars.com/kata/59dd2c38f703c4ae5e000014
 */

function solve(s,g){
  let arr = []
  let arrAns = []

  for(let i = 1; i < s + 1 ; i++) {
    arr.push([i ,s-i])
  }
  arr.forEach((value,item) => {
    if((value[0] % g !== 0 ) || (value[1] % g !== 0)) {
      return;
    } else {
      arrAns.push(value);
    }
  })
  if(arrAns.length === 0) return -1;
  const ans = arrAns.find((value) => {
    return value[0] <= g
  });
  return ans;

}

/*
問題
https://www.codewars.com/kata/5dd259444228280032b1ed2a
 */

function solve(s){
//..
  let ansNum = 0;
  const numArr = s.match(/\d+/g);
  numArr.forEach((value) => {
    if(parseInt(value) < ansNum) return;
    ansNum = parseInt(value);
  })
  return ansNum
};
