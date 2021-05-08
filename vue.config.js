module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'router': '@/router',
            }
        }
    },
    devServer:{
    proxy: {
        '/api': {
          target: 'http://192.168.0.102:8484/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
    }


    
}
}

