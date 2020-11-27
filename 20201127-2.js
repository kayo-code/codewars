/*
問題
https://www.codewars.com/kata/54e6533c92449cc251001667
 */
var uniqueInOrder=function(ite){
    let arr = [];
    const indexArr = [];
    if(typeof(ite) === 'string'){
        arr = ite.split('');
    } else {
        arr = ite;
    }
    arr.forEach((value,index) => {
        if(value !== arr[index + 1]) return indexArr.push(index)
    })
    const ansArr = indexArr.map((value,index) => {
        return arr[value]
    })
    return ansArr
}

uniqueInOrder('AAAABBBCCDAABBBc')
// uniqueInOrder('ABBCcAD')
uniqueInOrder([1,2,2,3,3])

//ベスプラ
var uniqueInOrder=function(iterable){
    return [...iterable].filter((v, i, a) => v !==  a[i+1]);
}