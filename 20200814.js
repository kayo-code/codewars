/*
問題
https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript
 解けませんでした。
 */
function cost (mins) {
    if( mins <= 65){
        return 30;
    }else{
        //        const Count = Math.ceil( ( mins - 65 ) / 30  ) ; =>模範回答見てこうしたら解けました！！！
        const Count = Math.ceil(( mins / 30 ) - 2 ) ;
//     console.log(Count)
        return ( Count * 10 ) + 30
    }
}
