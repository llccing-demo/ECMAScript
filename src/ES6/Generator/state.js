var ticking = true;

var clock = function () {
  if (ticking) {
    console.log('tick')
  } else {
    console.log('tock')
  }
  ticking = !ticking
}

clock()
clock()
clock()

// Generator版本
function* clock2() {
  while (true) {
    console.log('tick')
    yield
    console.log('tock')
    yield
  }
}

var it = clock2();
console.log(it.next())
console.log(it.next())
console.log(it.next())