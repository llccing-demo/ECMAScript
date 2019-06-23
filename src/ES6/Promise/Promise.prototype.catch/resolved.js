const promise = new Promise((resolve, reject) => {
  resolve(666)
  throw new Error('error test')
})

promise.then(data=>console.log(1, data)).catch(error=> console.log(2, error))