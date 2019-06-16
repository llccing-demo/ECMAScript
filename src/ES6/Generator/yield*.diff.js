function* inner() {
  yield 'hello';
}

function* outer1() {
  yield 'open';
  yield inner()
  yield 'close';
}

var it1 = outer1();
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())


console.log(`\n outer2 `)
function* outer2() {
  yield 'open';
  yield* inner()
  yield 'close'
}

var it2 = outer2();
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())