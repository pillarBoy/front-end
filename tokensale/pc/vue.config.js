
module.exports= {
  productionSourceMap: false,
  publicPath: process.env.VUE_APP_ASSET,
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true
  },
  configureWebpack: {
    output: {
      library: 'defiluodiyepc',
      libraryTarget: 'umd'
    }
  }
}