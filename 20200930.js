/*
問題
https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
 */
function twoOldestAges(ages){
  const ans = []
  const maxNum = ages.reduce((acc,current,index) => {
    if(acc < current) {
      return current
    } else {
      return acc
    }
  },0);
  ans.push(maxNum)

  const filterArr = ages.filter((value) => {return value !== maxNum})

  const secondHeightNum = filterArr.reduce((acc,current,index) => {
    if(acc < current) {
      return current
    } else {
      return acc
    }
  },0);
  ans.push(secondHeightNum)

  return ans.sort((a,b) => a - b)
}


//bestpractice
function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}


/*
問題
https://www.codewars.com/kata/554e4a2f232cdd87d9000038
 */

function DNAStrand(dna){
  //your code here
  const dnaPair = { A:'T',T:'A',C:'G',G:'C'}
  const ans = dna.split('').map((value) => value = dnaPair[value]);

  return ans.join('')
}
