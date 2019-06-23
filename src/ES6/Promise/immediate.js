const aPromise = new Promise((resolve, reject) => {
  console.log('Promise是立即执行，不是调用才执行，知道不！')
  resolve(666)

  console.log('其实，你虽然 resolve 了，但是我还是会执行！');
  
  return;
  console.log('这里就不会执行了，因为前面已经return了');
})


aPromise.then(data => {
  console.log('Promise执行结束了！', data)
}).catch(e => {
  console.log(e)
})

console.log('我就是一个普通的输出！')