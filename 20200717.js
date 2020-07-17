2020/7/17
function findMultiples(integer, limit) {
    //your code here
    const result = []
    let x = limit / integer
    for(let i=1 ; i <= x; i++){
        let multiples = integer * i
        result.push( multiples )
    }
    return result
}
