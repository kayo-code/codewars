/*
問題
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript
 */
function duplicateCount(text){
    const textArr = text.toLowerCase().split("").sort();
    const obj = {};
    let count = 0;
    let ans = 0

    textArr.forEach((value,index) => {
        if(obj[value]){
            obj[value]++
        } else {
            obj[value] = 1
        }
    })
    const simpleArr = textArr.filter((value,index) => value !== textArr[index + 1])
    simpleArr.forEach(value => {
        if(obj[value] > 1) return ans++;
    })
    return ans;
}
duplicateCount("aabbcde")
duplicateCount("abcde")
duplicateCount("Indivisibilities")

//ベスプラ
function duplicateCount(text){
    const arr = text.toLowerCase().split('')
    console.log(arr)
    const arr2 = arr.filter(function(val, i, Arr){
        console.log(Arr.indexOf(val))
        return Arr.indexOf(val) !== i && Arr.lastIndexOf(val) === i;
    });
    return arr2.length
}