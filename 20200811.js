/*問題
https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/javascript
 */
function sum(matrix){
    let ans =[]
    if(matrix.length === 0){
        return 0;
    }else if(matrix.length === 1){
        return matrix[0]
    }else if(matrix.length === 2){
        let ans2 =[]
        matrix.forEach( (value,index) =>{
            ans2.push(value[0] + value[1])
        })
        return ans2[0]+ans2[1]
    }
    matrix.forEach( (value,index) => {
        if(index === 0){
            ans.push(value[0] + value[2])

        }else if(index === 1){
            ans.push(value[1] * 2)

        }else{

            ans.push(value[2] + value[0])

        }
    });
    return ans[0]+ans[1]+ans[2]
}