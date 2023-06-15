const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');


const context = [
  "/",
];

module.exports = function (app) {
    app.use(createProxyMiddleware('/proxypath', { target: '<target path>' }));
};



