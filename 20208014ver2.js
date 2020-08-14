/*
問題
https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript
 全く分かりませんでした。
 */
function getStrings(city){
    city.split('').forEach( (value) => {
        const reg = new RegExp(value);
        console.log(reg)
        console.log( city.match( /${reg}/gi) );


    })
    return
}
console.log(getStrings("Chicago"))

//模範回答
function getStrings(city) {
    city = city.toLowerCase();
    let obj = {};
    let str = '';

    for (let elem of city) {
        if (!(elem in obj)) {
            obj[elem] = '*';
        } else {
            obj[elem] += '*';
        }
    }

    for (let key in obj) {
        if (key !== ' ') {
            str += key + ':' + obj[key] + ',';
        }
    }

    return str.substring(0, str.length - 1);
}