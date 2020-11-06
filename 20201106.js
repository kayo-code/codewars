/*
問題
https://www.codewars.com/kata/5aba8546379d20b9970001e4/solutions/javascript
*/
function reserve(bookings) {
  var forTwo = { name: "table for two", seats : 2, num: 4};
  var forThree = { name: "table for three", seats : 3, num: 2};
  var forFour = { name: "table for four", seats : 4, num: 2};
  var forSix = { name: "table for six", seats : 6, num: 1};
  var forEight = { name: "table for eight", seats : 8, num: 1};
///start coding here:
  let tableArr = []
  //reservetion
  if(!bookings) return tableArr;
  tableArr = bookings.map((people) => {
    if((people === forTwo.seats || people === forTwo.seats -1) && forTwo.num) {
      forTwo.num -=1
      return forTwo.name;
    }
    if((people === forThree.seats || people === forThree.seats -1) && forThree.num) {
      forThree.num -=1
      return forThree.name;
    }
    if((people === forFour.seats || people === forFour.seats -1) && forFour.num) {
      forFour.num -=1
      return forFour.name;
    }
    if((people === forSix.seats || people === forSix.seats -1) && forSix.num) {
      forSix.num -=1
      return forSix.name;
    }
    if((people === forEight.seats || people === forEight.seats -1) && forEight.num) {
      forEight.num -=1
      return forEight.name;
    }
    return ''
  })
  console.log(tableArr)

  //空文字削除
  const reservedTable = tableArr.filter((table) => table)
  console.log(reservedTable)

  //bookingtable
  if(!bookings.length && !reservedTable.length) return [reservedTable,''];
  if(bookings.length && !reservedTable.length) return [reservedTable,'Bookings at the following indexes were not accepted: 0']
  if(bookings.length  && reservedTable.length) {
    const emptyWord = [];
    const test3 = tableArr.forEach((table,index) => {
      if(table === '') return emptyWord.push(`${index}`)
    })
    if(!emptyWord.length) return [reservedTable,''];
    return [reservedTable,"Bookings at the following indexes were not accepted: "+emptyWord.join(', ')]
  }
  //条件に当てはまる最初のインデックスを返す
  // const test3 = test.findIndex((table) => table === '')
  // console.log(test3)
}

// reserve([2, 3, 4, 5, 7, 8, 6, 2])
// reserve([5, 5])
// reserve([])
reserve([10])


//ベスプラ
function reserve(bookings) {
  const tables = [
    { name: "table for two", seats : 2, num: 4},
    { name: "table for three", seats : 3, num: 2},
    { name: "table for four", seats : 4, num: 2},
    { name: "table for six", seats : 6, num: 1},
    { name: "table for eight", seats : 8, num: 1},
  ]
  const accepted = [];
  const notAccepted = [];
  bookings.forEach((booking, key) => {
    const table = tables.find((item) => (item.seats === booking || item.seats - 1 === booking) && item.num > 0);
    if (table) {
      table.num--;
      accepted.push(table.name);
    } else {
      notAccepted.push(key);
    }
  })
  return [accepted, notAccepted.length > 0 ? `Bookings at the following indexes were not accepted: ${notAccepted.join(', ')}` : '']
}

//三項演算子使えば短くかける〜〜
