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
}