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
            // target: 'http://192.168.0.116:8484/',
            target: 'http://bx.xykgjt.net/api',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        },
        '/cloud': {
            // target: 'http://192.168.0.116:8484/',
            target: 'https://www.xykgjt.net/',
            changeOrigin: true,
            pathRewrite: {
                '^/cloud': ''
            }
        }
    }
}
}

