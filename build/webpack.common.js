const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/main.js')],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    // 打包前清除dist目录下的资源文件
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '手动创建vue3项目',
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),
  ],
};
