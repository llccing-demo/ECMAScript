new Promise((resolve, reject) => {
  resolve(1)
  console.log(2)  
}).then(res => {
  console.log(res)
})

console.log(`------\n`)

// 这样直接return
new Promise((resolve, reject) => {
  return resolve(1)
  console.log(2)  
}).then(res => {
  console.log(res)
})
