/*
問題
https://www.codewars.com/kata/5aa39ba75084d7cf45000008/train/javascript

フィボナッチ数列については一度考え方をみたことがあったので解けました。
*/

function solve(n){
    //..
    if( n === 0){
        return '0'
    }
    if( n === 1){
        return '01'
    }
    return solve(n-1) + solve(n-2)

}