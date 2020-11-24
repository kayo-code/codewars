/*
問題
https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions
 */

function findOdd(arr) {
    arr.sort((a,b) => a - b).forEach((value,index) => {
        return oddSearch(value,index, arr)
    })

}

function oddSearch(num,inde, Arr) {
    let arrNum = [];
    let ansNum = 0;
    if(num === Arr[inde + 1]) {
        arrNum.push(num)
        // console.log(arrNum)
    } else {
        arrNum.push(num)
        // console.log(arrNum)
        if(arrNum.length % 2 !== 0) {
            ansNum = arrNum[0];
        }
        arrNum = [];
        return ansNum;
    }
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])


//ベスプラ
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for(prop in obj) {
        console.log(obj)
        if(obj[prop] % 2 !== 0) return Number(prop);
    }
}

//これがやりたかったです↓
function findOdd(arr) {
    var result, num = 0;

    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            num++;
        } else {
            num++;
            if (num % 2 != 0) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
}
