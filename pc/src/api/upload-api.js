import axios from 'axios'

export function upload (file) {
  return new Promise((resolve,reject) => {
    let url = '/api/v1/query/upload/url'
    // 避免文件名重复
    let name = (new Date()).getTime() + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
    axios.get(url, {
      params: {
        name,
        type: '1',
      }
    }).then((res) => {
      // console.log('获取上传地址res:',res)
      let upload_url = (res.data.data.url).split("https://ceph.xgeeklab.com")[1];
      if (process.env.NODE_ENV === 'development') {
        upload_url = (res.data.data.url).split("https://ceph.xgeeklab.com")[1];
      }  else {
        upload_url = res.data.data.url;
      }
      axios.put(upload_url, file).then(re => {
        // console.log(re)
        if (re.status === 200) {
          resolve({code: 0, data: {visitUrl: res.data.data.visitUrl}})
        } else {
          resolve({code: -1, message: 'error'})
        }
      }).catch(err=>{
        // console.log(err)
        reject(err)
      })
    }).catch(error=>{
      // console.log(error)
      reject(error)
    })
  })
}
