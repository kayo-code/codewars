/*
問題
https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/javascript
 */


function dative(word) {
  const splitWord = word.split('');
  const pushnak = "nak";
  const pushnek = "nek";
  const reverseWord = splitWord.reverse().join("");
  const  itemString = /[aáoóuú]/;
  const matchBackVowel = reverseWord.match(itemString);
  if(!matchBackVowel) {
    return word + pushnek;
  } else {
    return word + pushnak;
  }
}

dative("ablak");
dative("szék");
