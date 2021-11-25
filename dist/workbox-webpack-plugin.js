/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module) => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=workbox-webpack-plugin.js.map