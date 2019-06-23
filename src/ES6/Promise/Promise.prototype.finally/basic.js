const promise = new Promise((resolve, reject) => {
  resolve(666)
})

// 注意，finally 在node环境中，提示没有该方法，可能与node版本有关系，但是Chrome浏览器下正常。
promise
  .then(data => console.log(data))
  .finally(() => {
    console.log('always do things')
  })
