/*
問題
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 */
function domainName(url){
  console.log(url)
  //your code here
  if( /^https/.test(url)) {
    const replaceSukimuTypeHS = /^https:\/\/www./.test(url) ? url.replace(/^https:\/\/www./,'') : url.replace(/^https:\/\//,'');
    const numTypeHS = replaceSukimuTypeHS.search(/[.]/)
    return replaceSukimuTypeHS.slice(0,numTypeHS)
  } else if(/^http/.test(url)) {
    const replaceSukimuTypeH = /^http:\/\/www./.test(url) ? url.replace(/^http:\/\/www./,'') : url.replace(/^http:\/\//,'');
    const numTypeH = replaceSukimuTypeH.search(/[.]/)
    return replaceSukimuTypeH.slice(0,numTypeH)
  } else if(/www./.test(url)){
    const replaceSukimuTypeW = url.replace(/www./,'');
    const numTypeW = replaceSukimuTypeW.search(/[.]/);
    return replaceSukimuTypeW.slice(0,numTypeW)
  } else {
    const numTypeNoSikimu = url.search(/[.]/);
    return url.slice(0,numTypeNoSikimu)
  }
}
domainName("http://google.co.jp")
domainName("www.xakep.ru")
domainName("http://www.zombie-bites.com")
domainName("https://youtube.com")
