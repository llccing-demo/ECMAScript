// 这段代码需要通过html页面执行，node中没有XMLHttpRequest对象
const getJSON = url => {
  const promise = new Promise((resolve, reject) => {
    const handler = function() {
      if (this.readyState !== 4) {
        return
      }

      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.satusText))
      }
    }

    const client = new XMLHttpRequest()
    client.open('get', url)
    client.onreadystatechange = handler
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.send()
  })

  return promise
}

getJSON('/api/name/zhangsan')
  .then(resp => {
    console.log(resp)
  })
  .catch(error => {
    console.log(error)
  })

getJSON('./data.json')
  .then(function(json) {
    console.log(json)
    return json.data
  })
  .then(function(data) {
    console.log(data)
  })

getJSON('./data.json')
  .then(function(json) {
    console.log(json.url)
    return getJSON(json.url)
  })
  .then(
    function funcA(data) {
      console.log('resolved', data)
    },
    function funcB(err) {
      console.log('rejected', err)
    },
  )

getJSON('./data.json')
  .then(json => getJSON(json.url))
  .then(
    data => console.log('resolved by arrow function', data),
    err => console.log('rejected', err),
  )
