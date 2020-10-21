/*
問題
https://www.codewars.com/kata/551dc350bf4e526099000ae5/solutions/javascript
 */

function songDecoder(song){
  // ...
  const removeWUB = song.replace(/WUB/g,' ')
  return removeWUB.replace(/\s+/g,' ').replace(/^\s/,'').replace(/\s$/,'')

}

//bespra
function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim()
}
