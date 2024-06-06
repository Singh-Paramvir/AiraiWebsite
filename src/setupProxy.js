const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://89.116.34.245:6000',
      changeOrigin: true,
    })
  );
};
