let obj = {
  *myGeneratorMethods() {
    yield 3
    yield 4
    return 5
  }
}

for (let value of obj.myGeneratorMethods()) {
  console.log(value)
}

console.log(`\n 另一种方式声明对象方法`)

// 上面的写法等同于下面
let obj2 = {
  myGeneratorMethods: function* () {
    yield 1;
    return 2;
  }
}

for (let value of obj2.myGeneratorMethods()) {
  console.log(value)
}

