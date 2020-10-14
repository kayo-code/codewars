/*
問題
https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript
*/

function whatCentury(year)
{
  const lastTwoNum = year.slice(2)
  const yearTwoNum = year.slice(0,2)
  let num = ''
  
  if(lastTwoNum === '00') {
    num =  yearTwoNum
  } else {
     num = (parseInt(yearTwoNum) + 1).toString()
  }
  console.log(num.slice(1))
  if(num.slice(1) === '1' && num.slice(0,1) !== '1') {
    return num + 'st';
  } else if(num.slice(1) === '2' && num.slice(0,1) !== '1') {
    return num + 'nd';
  } else if(num.slice(1) === '3' && num.slice(0,1) !== '1') {
    return num + 'rd';
  } else {
    return num + 'th'
  }
}

