const getTurkishNumber = (num) => {
  const arr_1 = ["sıfır","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"]

  const arr_10 =["","on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"]

//   const parent = Math.floor((num/10)) * 10;
//   const child = num - parent;
  const parent = num.toString().split("")[0]
  const child = num.toString().split("")[1]
//     console.log(parent)
//     console.log(child)

  if( child === undefined ){
    return arr_1.find((value,index) => index === Number(parent))
  }else{
    const ans_parent = arr_10.find((value,index) => index === Number(parent))
    const ans_child = arr_1.find((value,index) => index === Number(child))
//     console.log(ans_parent)
//     console.log(ans_child)

    return [ans_parent].concat([ans_child]).join(" ")

  }

}

/*
testで70が "yetmiş sıfır" でなく、"yetmiş"　と表示されてしまうが、Run jsでは "yetmiş sıfır"　と回答できている
 */