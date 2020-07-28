/*
https://www.codewars.com/kata/5d0365accfd09600130a00c9/train/javascript
 */

/*
子配列の要素が２つだけだと思っていた時の回答　OKでした
*/
function solve([[1,2],[3,4]]){
    //..
    let total = 1;
    arr.forEach(arrNum =>{
        const num = Math.abs(arrNum[0]) < Math.abs(arrNum[1]) ? arrNum[1] : arrNum[0];
        total*=num;
    })
    return total;
}

/*
子配列の要素が決まっていないと気づいてからの回答　解けませんでした

*/
function solve(arr){
    //..
    let total = 1;
    arr.forEach(arrNum =>{
        const arrAbs = arrNum.map((value) => {
            return Math.abs(value);
        });
        const numMax = Math.max(arrAbs);

        total*=numMax;
    })
    return total;

}

