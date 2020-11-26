/*
問題
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions
 */

function persistence(num) {
    let count = 0
    if(num.toString().length === 1) return count;
    while(num > 9){
        count++
        const numArr = num.toString().split('');
        console.log(numArr)
        num = numArr.reduce((acc,curr,index) => {
            return acc = curr * acc;
        },1)
        // console.log(count)
    }
    return count
}
persistence(39)



//ベスプラ
function persistence(num) {
    let count = 0
    if(num.toString().length === 1) return count;
    while(num > 9){
        count++
        const numArr = num.toString().split('');
        console.log(numArr)
        num = numArr.reduce((acc,curr,index) => {
            return acc = curr * acc;
        },1)
        // console.log(count)
    }
    return count
}
persistence(39)

