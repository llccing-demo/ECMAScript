const promise = new Promise((resolve, reject) => {
  resolve(x + 2)
})

promise
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log('捕获, ', error)
    console.log('捕获, ', y + 2)
  })
  .catch(error => {
    console.log('再捕获, ', error)
  })
