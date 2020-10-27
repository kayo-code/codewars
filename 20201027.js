/*
問題
https://www.codewars.com/kata/515f51d438015969f7000013/solutions
 */

function pyramid(n) {
  const arr = [];
  const ans = [];
  if(n === 0) return [];
  // console.log(arr)
  for(let i=0;i < n;i++){
    arr.push(1)
    console.log(arr)
    console.log(ans)
    ans.push([...arr])
    console.log(ans)
  }
  // console.log(arr)
  // console.log(ans)
  return ans
}

pyramid(3)
// pyramid(2)
// pyramid(1)
// pyramid(0)


