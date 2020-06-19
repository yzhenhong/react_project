const { createProxyMiddleware } = require('http-proxy-middleware')


module.exports = function (app) {
  app.use("/v1",
    createProxyMiddleware({
      target: 'http://10.96.153.36:8081',
      changeOrigin: true,
      pathRewrite: {
        "^/v1": ""
      }
    })
  )
}