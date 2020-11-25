/*
問題
https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea/train/javascript
 */

function stringParse(string){
    //your code here
    let obj = {};
    const stringArr = string.split('');
    stringArr.forEach((value,index) => {
        if(value === stringArr[index + 1]) {
            obj[value] ? obj[value]++ : obj[value] = 1;
            console.log(obj)
        }
    })
}
stringParse("aaaabbcdefffffffg")