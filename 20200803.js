/*
問題
https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript
*/

//自分の回答
function solve(str){
    return str.split("").reverse().join("");
}
//↑解けませんでした。

//模範回答
function solve(str){
    var result = str.split(' ').join('').split('').reverse();
    str.split('').map((c, index) => {
        if(c===' ')
            result.splice(index, 0, ' ');
    });
    return result.join('');
}


//map関数の第一引数＝要素の値、第二引数＝配列ないのインデックス（キー）
.map((c,index) ={

})
    /*splice関数の第一引数＝配列を変更する開始位置を表すインデックス、第二引数＝第一引数から何番目の要素を変更
    するか、第三引数＝どう変換するかの値
    */
    .splice(index,0,'');


