const fs = require('fs');

// 回调函数
fs.readFile('./data1.json', 'utf-8', function (err, data) {
  console.log(err)
  console.log(data)
})


// 回调地狱出现 callback hell
fs.readFile('./data1.json', 'utf-8', function (err, data) {
  console.log(err)
  console.log(data)

  fs.readFile('data2.json', 'utf-8', function (err2, data2) { 
    console.log(err2)
    console.log(data2)
  })
})

