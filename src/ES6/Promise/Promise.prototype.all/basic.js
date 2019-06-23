const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  resolve(3)
})

const p4 = new Promise((resolve, reject) => {
  reject(4)
})

const p = Promise.all([p1, p2, p3, p4])
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))
