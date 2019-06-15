function* g() {
  try {
    yield;
  } catch (e) {
    console.log('函数内部捕获错误', e)
  }
  return 123123
}

var it = g();
console.log(it.next()) 

try {
  it.throw('a');
  it.throw('b');

  it.throw(new Error('记住，这么抛错误！'))
} catch (e) {
  console.log('函数体外捕获错误', e)
}

