/*
問題
https://www.codewars.com/kata/550f22f4d758534c1100025a/solutions
 */
function dirReduc(arr){
    const obj = {
        NORTH: 'SOURTH',
        EAST: 'WEST'
    }
    arr.map((value) => {
        if(value === obj['NORTH']) return;
    })
}
//わかりませんでした、、
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

function dirReduc(arr){
    var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
    return arr.reduce(function (a, b, i) {
        opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
        return a
    }, [])
}

