/*
問題
https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/
 */

function triangle(row) {
// Return the answer
  const colorset = {GG:'G',BB:'B',RR:'R',BG:'R',RG:'B',BR:'G',GB:'R',GR:'B',RB:'G'}
  while (row.length > 1) {
    row = [...row].reduce((accumulator,currentValue,index) => {
      if(index !== (row.length - 1)) {
        return accumulator + colorset[row[index] + row[index + 1]]
      } else {
        return accumulator
      }
    },'')
  }

  return row;
}
