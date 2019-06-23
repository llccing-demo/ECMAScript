const promise = new Promise((resolve, reject) => {
  console.log(123)
  throw new Error('error test')
})

promise.then(data => console.log(data)).catch(err => console.log(55, err))

promise
  .then(data => console.log(data))
  .then(null, error => {
    console.log(66, error)
  })

promise
  .then(data => console.log(data))
  .then(undefined, error => {
    console.log(77, error)
  })
