function evenChars(string) {
  const arrString = string.split('')
  if(arrString.length < 2 || 100 < arrString.length) return 'invalid string';
  const arrStringEventNumber = arrString.filter((value,index) => index%2 !== 0);
  return arrStringEventNumber
}

evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwu")
evenChars ("a")
evenChars ('0')
evenChars("HgQzF%)iQnIv$NsSbgIGbjtuAV ^)gbNKundefinedUEytafWEUZIDFqFQzRW*yLnIZIqJ*scbyp%Aj$%OXkBSO$uTYeBlPH%mgsDNhJXX)bs)jHuALv")


/*
問題
https://www.codewars.com/kata/566044325f8fddc1c000002c/solutions/javascript
 */

