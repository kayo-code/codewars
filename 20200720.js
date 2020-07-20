function solution(a, b){
    // your code here
    const aLength = a.length
    const bLength = b.length
    let result = aLength < bLength ? a + b + a : b + a + b;
    return result.toString()
}