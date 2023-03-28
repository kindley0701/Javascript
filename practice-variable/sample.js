// varによる再宣言
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

// letによる再宣言
let nick = "taro"
console.log(nickname)
nick = "ichiro"
console.log(nickname)

// constによる再宣言
const name = "taro"
console.log(nickname)
name = "ichiro"
console.log(nickname)

var str = "webcamp" //グローバルスコープ
function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}
foo()
console.log(y)

function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}
foo()

for (let i = 0; i < 10; i++) {     
  console.log(i) 
}
console.log(i)

var str = "webcamp"
function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}
foo()