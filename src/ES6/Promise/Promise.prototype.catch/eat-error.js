const someAsyncThing = function () {
  return new Promise((resolve, reject) => {
    // 此处会报错，因为x没有声明
    resolve(x+2)
  })
}

someAsyncThing().then(() => {
  console.log('everything is fine! ')
})

setTimeout(() => {
  console.log(666)
}, 2000);

process.on('unhandledRejection', (error, p) => {
  console.log('wow', error)
})