/*
問題
https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript
 */
let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];


function recycle(array) {
  const organicArr = [];
  const glassArr = [];
  const plasticArr = [];
  const paperArr = [];

  array.forEach((obj) => {
    if(obj.material === 'paper' || obj.secondMaterial === 'paper') {
      paperArr.push(obj.type);
    }
    if(obj.material === 'glass' || obj.secondMaterial === 'glass') {
      glassArr.push(obj.type);
    }
    if(obj.material === 'organic' || obj.secondMaterial === 'organic') {
      organicArr.push(obj.type)
    }
    if(obj.material === 'plastic' || obj.secondMaterial === 'plastic'){
      plasticArr.push(obj.type)
    }
  })
  return [paperArr,glassArr,organicArr,plasticArr]
}

recycle(a)
