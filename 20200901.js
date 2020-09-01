/*
問題
https://www.codewars.com/kata/5eb34624fec7d10016de426e/train/javascript
 */
function martingale(bank, outcomes){
  let roundBet = 100;
  outcomes.forEach((value,i) => {
    if(value === 1){
      // console.log(roundBet)
      bank = bank + roundBet;
      //ここでroundBetを100に戻している
      roundBet = 100;

    }else {
      bank = bank - roundBet
      roundBet *=2;
      // console.log(roundBet)
    }
  })
  return bank
}

martingale(1000, [1, 1, 0, 0, 1]);

