/*
問題
https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8
 */

function removeParentheses(s){
  const sArray = s.split('');
  const reverseSArray = s.split('').reverse();
  const firstParentheses =  s.search(/\(/);
  const lastParentheses = reverseSArray.join('').search(/\)/);

  sArray.splice(firstParentheses)
  reverseSArray.splice(lastParentheses)
  return sArray.join('').concat(reverseSArray.reverse().join(''));
}

//bespra
function removeParentheses(s){
  let count = s.replace(/[^(]/g, "");

  for (let i = 0; i < count; i++) {
    let last_one_start = s.lastIndexOf("(");
    let end_of_remove = s.indexOf(")", last_one_start);
    s = s.replace(s.substring(last_one_start, end_of_remove + 1), "");
  }
  return s;
}

removeParentheses("example (unwanted thing) example")
removeParentheses("a(b(c))a(e)")
