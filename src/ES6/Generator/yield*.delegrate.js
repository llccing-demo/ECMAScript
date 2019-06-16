let delegratedIterator = (function* () { 
  yield 'hello';
  yield 'bye'
}())

let delegratingIterator = (function* () {
  yield 'Greeting';
  yield* delegratedIterator;
  yield 'ok, bye'
}())

// for (let value of delegratingIterator) {
//   console.log(value)
// }

console.log(`\n 嵌套多个Generator函数，多个被代理者`)

let delegratedIterator2 = (function* () { 
  yield '666';
  yield 'delegratedIterator2'
}())

let delegratingIterator2 = (function* () { 
  yield 'Greeting';
  yield* delegratedIterator;
  yield* delegratedIterator2;
  yield 'ok, bye bye'
}())

for (let value of delegratingIterator2) {
  console.log(value)
}