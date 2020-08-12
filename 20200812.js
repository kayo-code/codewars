/*
問題
https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript
 */
function alternateCase(s) {
    const ss = s.split('')
    let ans = []
    ss.forEach( (value) => {
        if(/[A-Z]/.test(value)){
            ans.push(value.toLowerCase())
//           console.log(value.toLoewerCase())

        }else{
            ans.push(value.toUpperCase())
//     console.log(value.toUpperCase())
        }
    })
    return ans.join('')
}

/*
使ったもの
.push()
.join()

.map() 使った回答が多い
 */
