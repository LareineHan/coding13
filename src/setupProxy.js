const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://apartments-com1.p.rapidapi.com',
      changeOrigin: true,
    })
  );
};