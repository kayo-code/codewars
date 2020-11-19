/*
問題
https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5
 */

//回答
function solve(str){
    const arr = str.split(/\(|\)/);
    console.log(arr)
    console.log(str.lastIndexOf('('))
    console.log(str.indexOf(')'))
    const arrMatch = str.match(/\(.\)/)
    console.log(arrMatch)
}

//全くわかりませんでした。

//ベスプラ
function solve(str){
    while (str.indexOf('(') !== -1) {
        const i1 = str.lastIndexOf('(');
        const i2 = str.indexOf(')', i1);
        const prefix = str[i1 - 1];
        str = str.replace(
            //(から)までを取り除く　//(の前が数字か、文字列か判断する　//()内の文字列のみ取り出す　//(の前が文字列であれば、1回リピート でなければ、その回数分リピート
            prefix + str.slice(i1, i2 + 1),(Number(prefix) ? '' : prefix) + str.slice(i1 + 1, i2).repeat(Number(prefix) || 1),);
    }
    return str;
}
solve("2(a3(b))")
