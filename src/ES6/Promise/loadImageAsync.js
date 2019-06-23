const loadingImageAsync = url => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }

    image.onerror = error => {
      reject(new Error('图片打不开，小主！' + url))
    }

    image.src = url;
  })
}

loadingImageAsync('http://frontend.llccing.cn/poweredby.png')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

  loadingImageAsync('http://frontend.llccing.cn/errr.png')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
