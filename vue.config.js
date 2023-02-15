const path = require('path')

module.exports = {
  publicPath:'./',
  configureWebpack: {
    resolve: {
      alias: {
        // "assets": "@/assets",
        // "common": '@/common',
        // "components": "@/components",
        // "network": '@/network',
        // "views": '@/views',
        'assets':path.resolve('./src/assets'),
        'common':path.resolve('./src/common'),
        'components':path.resolve('./src/components'),
        'network':path.resolve('./src/network'),
        'views':path.resolve('./src/views'),
      }
    }
  }
}