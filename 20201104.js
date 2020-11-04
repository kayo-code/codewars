/*
問題
https://www.codewars.com/kata/523a86aa4230ebb5420001e1/
 */

function anagrams(word, words) {
  const str = word.split('')
  const wordsSplit = words.map((value, index) => {
    console.log(value)
    str.forEach((string,index) => {
      return value = value.replace(string,'')
    })
    return value
  })
  console.log(wordsSplit)
  const wordsIndex = words.filter((value,index) => {
    return wordsSplit[index] === ''
  })
  return wordsIndex
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

//ベスプラ
