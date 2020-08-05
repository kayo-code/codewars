
/*問題
https://www.codewars.com/kata/5b180e9fedaa564a7000009a
*/

function solve(s){
    //小文字配列
    const arr1 = [];
    //大文字配列
    const arr2 = [];
    const sAfter = s.split("");
    sAfter.forEach((value,index) =>{
        if(/[a-z]/.test(value)){
            arr1.push(value);
        }else{
            arr2.push(value);
        }
    });

    if(arr1.length < arr2.length ){
        return s.toUpperCase();
    }else if(arr2.length < arr1.length || arr1.length === arr2.length ){
        return s.toLowerCase();
    }
}
console.log(solve("AaaA"))
