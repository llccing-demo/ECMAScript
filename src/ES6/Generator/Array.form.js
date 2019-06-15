function* foo() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
  yield 5;
}

// 扩展运算符
console.log([...foo()])

// Array.from
console.log(Array.from(foo()))

// 解构赋值
var [a, ...b] = foo()

console.log(a)
console.log(b)
