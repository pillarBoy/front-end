module.exports = {
   "plugins": {
       "autoprefixer": {},
       "postcss-px2rem-exclude":{
           "remUnit": 75, // 根大小 750px  = 750/75 = 10 rem
           "exclude":/node_modules/i, //忽略 node_modules 目录下的所有文件
           "minPixelValue": 2 //设置要替换的最小像素值(3px会被转rem)。 默认 0
       }
   }
}