/*
問題
https://www.codewars.com/kata/5f885fa9f130ea00207c7dc8/train/javascript
 */

//両端のスペースを数えない事を理解していなかった
function loneliest(str) {
  const space = str.split(/\s*/)
  console.log(space);

  const spaceLength = space.filter((value) => {
    console.log(Math.max(value.length))

  })
  console.log(spaceLength);
}

//ベスプラ
function loneliest(str) {
  str = str.trim();
  let chars = str.split(/\s*/);
  console.log(chars)
  let spaces = str.split(/\S/).map(x => x.length);
  console.log(spaces)

  let spacesPerChar = chars.map((c, i) => spaces[i] + spaces[i + 1]);
  console.log(spacesPerChar)

  let spaceSize = spacesPerChar.reduce((t, a) => t > a ? t : a);
  console.log(spaceSize)
  return chars.filter((c, i) => spacesPerChar[i] === spaceSize);
}

loneliest('abc d   ef  g   h i j      ')
loneliest('abc  ')
loneliest('a  b  c  de  ')
// loneliest('abc')
