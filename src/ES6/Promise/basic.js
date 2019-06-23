const promise = new Promise(function(resolve, reject) {
  if (false) {
    setTimeout(function() {
      resolve(666)
    }, 500)
  } else {
    setTimeout(function() {
      reject(555)
    }, 2000)
  }
})

promise.then(
  function(data) {
    console.log(666)
  },
  function(error) {
    console.log(error)
  },
)

console.log('---split---')

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(2000).then(data => {
  console.log(data)
})

