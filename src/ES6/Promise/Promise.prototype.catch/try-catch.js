const promise = new Promise((resolve, reject) => {
  try {
    throw new Error('reject test')
  } catch (e) {
    reject(e)
  }
})

promise.catch(error => console.log(1, error))

const promise2 = new Promise((resolve, reject) => {
  reject(new Error('reject test2'))
})

promise2.catch(error => console.log(2, error))