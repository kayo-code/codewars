/*
問題
https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/train/javascript
 */
function vowelStart(str){
  const lower = str.toLowerCase()
  console.log(lower)
  const word = lower.match(/[a-z0-9]/gi)
  console.log(word)
  const ans = word.join("").replace(/[aiueo]/g,' $&').trim()
  return ans;
}
vowelStart('It is beautiful weather today!')

//replaceの使い方とtrim()の使い方がわかりませんでした。
