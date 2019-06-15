const readFilePromise = require('fs-readfile-promise')

// 返回promise的readFile
readFilePromise('data1.json', 'utf-8').then(function(data) {
  console.log('readFilePromise-1', data)
}).then(function () { 
  return readFilePromise('data21.json', 'utf-8')
}).then(function (data) {
  console.log(data.toString())
}).catch(function (err) {
  console.log(1, err)
})
