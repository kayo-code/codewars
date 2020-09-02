/*
問題
https://www.codewars.com/kata/5effa412233ac3002a9e471d/solutions
 */
function add(num1, num2) {
  const num1String = num1.toString().split('')
  const num2String = num2.toString().split('')

  console.log(num1String);
  console.log(num2String);
  const arr = [];
  if(num1String <= num2String) {
    num2String.forEach((value,index) => {
      arr.push(Number(num1String[index]) + Number(num2String[index]));
    })
  }else {
    num1String.forEach((value,index) => {
      arr.push(Number(num1String[index]) + Number(num2String[index]));
      console.log(arr)
      console.log(arr.join(''))
    })
  }
  return arr.join('')
}

add(122, 81);


/*
回答
 */

function add(num1, num2) {


  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");



  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }



  var returnString = "";
  for (var i = 0; i < num1.length; i++) {
    var int1 = parseInt(num1[i]);
    var int2 = parseInt(num2[i] || 0);

    returnString = (int1+ int2).toString()+returnString;
  }

  return parseInt(returnString);
}
