// 導入 fs 模塊
const fs = require("fs");

// 相對路徑參照物：命令行的工作目錄
// fs.writeFileSync("./index.html", "love");

// 絕對路徑 "全局變量" 保存的是：所在文件的所在目錄的絕對路徑
// console.log(__dirname);
fs.writeFileSync(__dirname + "/index.html", "love");
