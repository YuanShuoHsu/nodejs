const ejs = require("ejs");
// 西遊記
const xiyou = ["唐僧", "孫悟空", "豬八戒", "沙僧"];

// 原生 JS
// let str = "<ul>";

// xiyou.forEach((item) => {
//   str += `<li>${item}</li>`;
// });

// 閉合 ul
// str += "</ul>";

// console.log(str);

// EJS 實現
const fs = require("fs");
let html = fs.readFileSync("./02_西遊.html").toString();
let result = ejs.render(html, { xiyou: xiyou });

console.log(result);
