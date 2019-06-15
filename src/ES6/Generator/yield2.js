function* foo(x) {
  var y = 2 * (yield x + 1)
  var z = yield y / 3
  return x + y + z
}

var a = foo(5)
// 6
console.log(a.next())
NaN
console.log(a.next())
NaN
console.log(a.next())

var b = foo(5)
// 6
console.log(b.next())
8
console.log(b.next(12))
// 42 y=24 z=13 x=5 
console.log(b.next(13))
