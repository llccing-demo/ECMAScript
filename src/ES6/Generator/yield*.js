function* foo() {
  yield 1;
  yield 2;
  return 3;
}

function* bar() {
  yield 'x';
  for (let i of foo()) {
    console.log(i)
  }
}

for (let i of bar()) {
  console.log(i)
}
console.log('\n')

// yield*版本
function* bar2() {
  yield 'x'
  yield* foo()
  yield 'y'
  return 'zzz';
}

let it2 = bar2();
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())


// 等同于
function* bar3() {
  yield 'x';
  yield 1;
  yield 2
  yield 'y'
  return 'zzz'
}
console.log('\n')

// 等同于
function* bar4() {
  yield 'x';
  for (let v of foo()) {
    yield v
  }

  yield 'y'
  return 'zzz'
}

for (let v of bar4()) {
  console.log(v)
}