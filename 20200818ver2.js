/*
問題
https://www.codewars.com/kata/56576f82ab83ee8268000059/solutions/javascript
 */
function spacey(array){
    const fix = []
    const fix2 = []

    array.forEach((value) => {
        fix.push(value)
        fix2.push(fix.join(''))
    })
    return fix2
}

spacey(['kevin', 'has','no','space'])

解けました！