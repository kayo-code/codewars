function evenChars(string) {
  const arrString = string.split('')
  if(arrString.length === 1) return 'invalid string';
  const arrStringEventNumber = arrString.filter((value,index) => index%2 !== 0);
  return arrStringEventNumber
}

evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwu")
evenChars ("a")
evenChars ('0')
evenChars("HgQzF%)iQnIv$NsSbgIGbjtuAV ^)gbNKundefinedUEytafWEUZIDFqFQzRW*yLnIZIqJ*scbyp%Aj$%OXkBSO$uTYeBlPH%mgsDNhJXX)bs)jHuALv")
