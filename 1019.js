/*
問題
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 */

回答
function sortArray(array) {
  const odd = array.filter((value) => value%2);

  return array.map((value) => value%2 ? odd.sort((a,b)=> a-b).shift():value);
}
