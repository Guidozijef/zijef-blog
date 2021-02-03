/**
 * JSONP请求工具
 * @param url 请求的地址
 * @param data 请求的参数
 * @returns {Promise<any>}
 */
export function requestGet  (url, data = {}) {
  return new Promise((resolve) => {
    // 处理传参成xx=yy&aa=bb的形式
    const handleData = (data) => {
      const keys = Object.keys(data)
      const keysLen = keys.length
      return keys.reduce((pre, cur, index) => {
        const value = data[cur]
        const flag = index !== keysLen - 1 ? '&' : ''
        return `${pre}${cur}=${value}${flag}`
      }, '')
    }
    // 动态创建script标签
    const script = document.createElement('script')
    // 接口返回的数据获取
    let funcName = 'jsonpCb' + parseInt(Math.random() * 100000,10)
    window[funcName] = (res) => {
      debugger
      document.body.removeChild(script)
      delete window.jsonpCb
      resolve(res)
    }
    script.src = `${url}?${handleData(data)}&callback=${funcName}`
    document.body.appendChild(script)
  })
}

export function loadScript(url,func){
  var head = document.head||document.getElementByTagName('head')[0];
  var script = document.createElement('script');
  script.src =  url;
  script.onload = script.onreadystatechange = function(){
  if(!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete'){
     func();
     script.onload = script.onreadystatechange = null;
   }
  }
  head.insertBefore(script,null);
}

window.baidu = {
    sug: function(data){
    console.log(data);
  }
}
// loadScript('[http://suggestion.baidu.com/su?wd](http://suggestion.baidu.com/su?wd)=w',function(){console.log('loaded')});

// 使用方式
// request({
//   url: 'http://localhost:9871/api/jsonp',
//   data: {
//     // 传参
//     msg: 'helloJsonp'
//   }
// }).then(res => {
//   console.log(res)
// })


export function requestPost ({url, data}) {
  // 首先创建一个用来发送数据的iframe.
  const iframe = document.createElement('iframe')
  iframe.name = 'iframePost'
  iframe.style.display = 'none'
  document.body.appendChild(iframe)
  const form = document.createElement('form')
  const node = document.createElement('input')
  // 注册iframe的load事件处理程序,如果你需要在响应返回时执行一些操作的话.
  iframe.addEventListener('load', function (res) {
    return Promise.resolve(res)
  })

  form.action = url
  // 在指定的iframe中执行form
  form.target = iframe.name
  form.method = 'post'
  for (let name in data) {
    node.name = name
    node.value = data[name].toString()
    form.appendChild(node.cloneNode())
  }
  // 表单元素需要添加到主文档中.
  form.style.display = 'none'
  document.body.appendChild(form)
  form.submit()

  // 表单提交后,就可以删除这个表单,不影响下次的数据发送.
  document.body.removeChild(form)
}
// 使用方式
// requestPost({
//   url: 'http://localhost:9871/api/iframePost',
//   data: {
//     msg: 'helloIframePost'
//   }
// })