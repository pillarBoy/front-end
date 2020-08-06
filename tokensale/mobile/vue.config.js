module.exports= {
  productionSourceMap: false,
  publicPath: process.env.APP_VUE_ASSET,
  devServer: {
    port: 10010,
  },
  configureWebpack: {
    output: {
      library: 'defiluodiyepc',
      libraryTarget: 'umd'
    }
  }
}