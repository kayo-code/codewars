/*
問題
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/solutions
 */
// var maxSequence = function(arr){
//   let test = 0;
//   let hoge = 0;
//   arr.reduce((acc,cur) => {
//    acc = acc + cur
//     // console.log(acc)
//     console.log(test)
//     if(test < acc){
//       test = acc
//     }
//     return acc
//   },0)
//   return test
// }

//ベスプラ
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        // console.log(maxSum)
        return Math.max(currentSum, maxSum);
    }, 0);
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
