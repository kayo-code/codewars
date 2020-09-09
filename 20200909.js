function wordValue(a) {
  const arrAlphabet = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let arrNum = [];
  a.forEach(value => {
    let sum = 0;
    const valueSplit = value.split('');
    valueSplit.forEach(alpha => {
      let num = arrAlphabet.indexOf(alpha);
      sum += (num + 1)
    });
    arrNum.push(sum);
  })
  const ans = arrNum.map((value,index) => value * (index + 1))
  return ans;
}

/*
問題
https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript
 */
