class BuildRunWebpackPlugin{
  apply(compiler) {
    let _Date = new Date().getTime();
    compiler.hooks.run.tapAsync("run", function (compilation, callback) {
      console.log("webpack构建开始构建，请耐心等待...");
      callback();
    });
    compiler.hooks.failed.tap("failed", (compilation, callback) => {
      console.log(
        "当前耗时：" + (new Date().getTime() - _Date) / 1000 + "s" ===
          "构建失败"
      );
      callback();
    });

    compiler.hooks.done.tap("done", (stats) => {
      console.log(
        "项目构建完成当前耗时：" + (new Date().getTime() - _Date) / 1000 + "s"
      );
    });
  } 
}
// 对外提供暴露接口
module.exports = BuildRunWebpackPlugin;
