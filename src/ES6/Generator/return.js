function* foo() {
  yield 1
  yield 2
  yield 3
  return 4
}

var it = foo()

console.log(it.next())
console.log(it.return(666))



// 即使return 也会先执行finally 
function* foo2() {
  yield 1
  try {
    yield 2
    yield 3
  } finally {
    yield 4;
    yield 5;
  }
}


var it2 = foo2();

console.log(it2.next())
// 此处注意，要是没有执行到try内部，则finally不会执行。
// console.log(it2.next())
console.log(it2.return(555))
console.log(it2.next())
