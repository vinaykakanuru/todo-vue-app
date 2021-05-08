// creating the config file to hit the backend endpoint URLs
// giving proxy rules to the endpoints
module.exports = {
    devServer:{
        proxy: {
            '^/api':{
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {'^/api': '/'},
            },
        }
    }
}