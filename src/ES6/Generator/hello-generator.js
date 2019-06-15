function*helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}

var it = helloWorldGenerator()

console.log(it.next())
console.log(it.next())
console.log(it.next())


// 星号位置，都可以
function* generator() { }
function *generator() { }
function * generator() { }
function*generator() { }
