// 導入 fs
const fs = require("fs");
const path = require("path");
// 寫入文件
// fs.writeFileSync(__dirname + "/index.html", "love");
// console.log(__dirname + "/index.html");

// resolve 解決
// console.log(path.resolve(__dirname, "./index.html"));
// console.log(path.resolve(__dirname, "index.html"));
// console.log(path.resolve(__dirname, "/index.html", "./test"));

// sep 分隔符
// console.log(path.sep); // windows \ linux /

// parse 方法 __dirname "全局變量"
// console.log(__filename); // 文件的絕對路徑
let str = "/nodeJS/13-path/代碼/path.js";
// console.log(path.parse(str));

// basename
// console.log(path.basename(str));

// dirname
// console.log(path.dirname(str));

// extname
console.log(path.extname(str));
