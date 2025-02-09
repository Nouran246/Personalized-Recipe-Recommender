const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://func-api-4zrqw4pw37sga.azurewebsites.net',
            changeOrigin: true,
            secure: false,
        })
    );
};
