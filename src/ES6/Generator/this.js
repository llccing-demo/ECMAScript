function* foo() {
  
}

foo.prototype.hello = function () {
  return 'hello'
}

let obj = foo();
console.log(obj instanceof foo)

console.log(obj.hello())
