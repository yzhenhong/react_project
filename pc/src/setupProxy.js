const { createProxyMiddleware } = require('http-proxy-middleware')


module.exports = function (app) {
  app.use("/api/v1/query",
    createProxyMiddleware({
      target: 'http://hall-test.shuame.org',
      changeOrigin: true,
      // pathRewrite: {
      //   "^/v1": ""
      // }
    })
  )
  app.use("/public-commons",
    createProxyMiddleware({
      target: 'https://ceph.xgeeklab.com', // 接口的域名
      changeOrigin: true, //是否跨域
      // secure: true,  // 如果是https接口，需要配置这个参数
    })
  )
}