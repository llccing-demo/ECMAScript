const readFilePromise = require('fs-readfile-promise');
const fs = require('fs')

function* asyncJob() {
  var data = yield readFilePromise('data1.json', 'utf-8');
  return data
}

var job = asyncJob();
var res1 = job.next()
// res1返回{value: Promise{<pending>, done: false}}
res1.value.then(function (data) {
  console.log(data)
})

var res2 = job.next();
console.log(res1)
console.log(res2)
