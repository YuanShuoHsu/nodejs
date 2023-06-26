// 1. 安裝 EJS
// 2. 導入 EJS
const ejs = require("ejs");
const fs = require("fs");

// 字符串
let taiwan = "台灣";
// let str = `我愛你 ${taiwan}`;
let weather = "今天天氣不錯";

// 聲明變量
let str = fs.readFileSync("./01_html.html").toString();
// 使用 ejs 渲染
let result = ejs.render(str, { taiwan: taiwan,weather });

console.log(result);
