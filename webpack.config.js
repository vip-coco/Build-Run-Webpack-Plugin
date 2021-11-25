const path = require("path"); 
const BuildRunWebpackPlugin = require('./src/main')

module.exports = {
    //打包入口
    entry: "./src/main.js",
    //打包出口
    output: {
      // 输出文件名
      filename: "workbox-webpack-plugin.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [],
    },
    // plugins的配置
    plugins: [ 
      new BuildRunWebpackPlugin()
    ], 
    performance: {
      hints: false, //关闭提示
    },
    // 模式
    mode: "development", //development,production
    devtool: "source-map",
};
