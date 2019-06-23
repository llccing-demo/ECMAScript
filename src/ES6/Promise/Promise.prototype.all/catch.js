const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  reject(new Error('test error'))
}).catch(error => error)

const p = Promise.all([p1, p2])
  .then(data => console.log(data))
  .catch(error => {
    console.log(2, error)
  })
