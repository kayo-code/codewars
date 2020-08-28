//問題　https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript
const wordPattern = (word)=>{
  word=word.toLowerCase() //文字を全て小文字になおしている
  const set = [...new Set(word)] //小文字にしたwordを配列にいれている？
  const wo = new Set(word)
  console.log(wo)
  console.log(set)
  console.log(word.split('').map(e=>set.indexOf(e)))
  return word.split('').map(e=>set.indexOf(e)).join('.')
}
wordPattern("hello")
wordPattern("helLo")
wordPattern("heLlo")
