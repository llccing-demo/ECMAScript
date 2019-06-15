function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

let it = foo();

for (let key of it) {
  console.log(key)
}