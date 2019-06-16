function* foo() {
  let res =  yield 1;
  return res
}

var it = foo()
console.log(it.next())
console.log(it.next(123123))
console.log('\n')

var it2 = foo();

console.log(it2.next())
// console.log(it2.throw(new Error('又错了！')))


console.log('\n')
var it3 = foo();
console.log(it3.next())
console.log(it3.return(666))