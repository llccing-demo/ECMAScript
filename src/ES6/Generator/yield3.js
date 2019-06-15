function* dataConsumer() {
  console.log('started');
  console.log(`1. ${yield}`)
  console.log(`2. ${yield}`)
  return 'result'
}

var it = dataConsumer();

// started
console.log(it.next())

// 1. a
console.log(it.next('a'))
// 1. b
console.log(it.next('b'))