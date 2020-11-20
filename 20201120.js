/*
問題
https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/solutions
 */

function waveSort(arr) {
    arr.forEach((value,index) => {
        if(!arr[index + 1]) return ;
        if(index%2 === 0) {
            arr.splice(index,2,...[value,arr[index+1]].sort((a,b) => b-a))
        }
        if(index%2 !== 0) {
            arr.splice(index,2,...[value,arr[index+1]].sort((a,b) => a-b))
        }
    })
    return arr
}

waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4])

//ベスプラ
function ascending(a, b) {
    return a - b;
}

function waveSort(arr) {
    arr.sort(ascending);
    for (var i = 0; i < arr.length - 1; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
    return arr
}
