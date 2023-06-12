// 偽代碼

function require(file) {
  // 1. 將相對路徑轉為絕對路徑，定位目標文件
  let absolutePath = path.resolve(__dirname, file);
  // 2. 緩存檢測
  if (caches[absolutePath]) {
    return caches[absolutePath];
  }
  // 3. 讀取文件的代碼
  let code = fs.readFileSync(absolutePath).toString();
  // 4. 包裹為一個函數 然後執行
  let module = {};
  let exports = (module.exports = {});
  (function (exports, require, module, __filename, __dirname) {
    const test = {
      name: "尚硅谷",
    };

    module.exports = test;

    // 輸出
    console.log(arguments.callee.toString());
  })(exports, require, module, __filename, __dirname);
  // 5. 緩存結果
  caches[absolutePath] = module.exports;
  // 6. 返回 module.exports 的值
  return module.exports;
}

const m = require("./me.js");
