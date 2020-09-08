/*
問題
https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
 */
var number=function(array){
  //your awesome code here
  const arrans = array.map((value,index) => {
    const num = index + 1;
    const numStr = (num + ":" ).toString();
    return numStr.concat(' ',value);
  })
  return arrans
}
number(["a", "b", "c"])
