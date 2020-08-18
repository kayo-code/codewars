/*
問題
https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/solutions/javascript
 */

function solution(nums){
    if(nums === null){
        return []
    }else{
        return nums.sort((a,b) =>{
            return a - b
        })
    }
}

solution([1,2,10,5,50])

sortの問題がちょうど出て解けました。