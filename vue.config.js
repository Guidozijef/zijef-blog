const webpack = require('webpack')
const path = require('path')
const chalk = require('chalk')
const chokidar = require('chokidar')
const getData = require('./build/datagen.js')

function resolve (dir){
  return path.join(__dirname, '.', dir)
}

getData();
//加上对post目录的监测，文件发生修改时自动更新页面
const postDir = './src/posts'
const update = () => {
  console.log("222222222222")
  getData().catch(err => {
    console.error(logger.error(chalk.red(err.stack), false))
  })
}
const postWatcher = chokidar.watch([
  'post/*.md'
], {
  cwd: postDir,
  ignoreInitial: true
})
postWatcher.on('change', update)


module.exports = {




  chainWebpack: config => {
    // config.module
    //   .rule('md')
    //   .test(/\.md$/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('markdown')
    //   .loader(require.resolve('./build/markdown'))
    //   .end()
    //   // .tap(options => {
    //   //   return {
    //   //     compilerOptions: {
    //   //       preserveWhitespace: false
    //   //     }
    //   //   }
    //   // })
  },

  configureWebpack: config => {
    config.module.rules.push({
      test:/\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: require.resolve('./build/markdown')
        }
      ]
    })
  }

}