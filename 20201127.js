/*
問題
https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript
 */

function alphabetPosition(text) {
    const alpObj = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};
    const text2 = text.toLowerCase().replace(/[^a-z]/g, '');
    const textArr = text2.split('');
    const ansArr = textArr.map((word) => {
        return alpObj[word]
    })
    return ansArr.join(' ')
}

alphabetPosition("z2$e<p")

//ベスプラ
