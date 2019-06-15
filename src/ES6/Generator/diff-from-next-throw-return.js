function* foo() {
  let res =  yield 1;
  return res
}

var it = foo()
console.log(it.next())
console.log(it.next(123123))

