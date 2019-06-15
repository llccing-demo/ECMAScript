
function* gen(x) {
  var y = yield x + 2;
  return y;
}
 
var g = gen(1)
console.log(g.next())
console.log(g.next())

// 数据交换
function* genV2(x) {
  var y = yield x + 2;
  return y;
}

var g2 = genV2(1);
console.log(g2.next())
console.log(g2.next(20000))

// 错误处理
function* genV3(x) {
    try {
    // throw new Error()
    var y = yield x + 2;
  } catch (e) {
    console.log(1, e)
  }
}

var g3 = genV3(1)
console.log(g3.next())
console.log(g3.throw('出错了！！'))