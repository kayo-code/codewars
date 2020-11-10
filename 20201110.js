/*
問題
https://www.codewars.com/kata/59f08f89a5e129c543000069/solutions/javascript
 */

function dup(s) {
  return s.map((value) => wordReplace(value))
};

function wordReplace(n) {
  const wordSplit = n.split('')
  console.log(wordSplit)
  wordSplit.forEach((value) => {
    const word = new RegExp(`${value}+`,'g')
    console.log(word)
    console.log(value)
    n = n.replace(word,`${value}`)
    console.log(n)
  })
  return n
}

dup(["hubbubbubboo"])

//ベスプラ
function dup(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};
