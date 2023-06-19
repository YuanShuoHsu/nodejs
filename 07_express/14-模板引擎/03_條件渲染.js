// 通過 isLogin 決定最終的輸出內容
// true 輸出「<span>歡迎回來</span>」
// false 輸出「<button>登入</button>    <button>註冊</button>」

// 導入 ejs
const ejs = require("ejs");
const fs = require("fs");
// 變量
let isLogin = true;

// 原生 JS
// if (isLogin) {
//   console.log("<span>歡迎回來</span>");
// } else {
//   console.log("<button>登入</button>    <button>註冊</button>");
// }

// EJS 實踐
// 讀取 HTML 內容
let html = fs.readFileSync("./03_home.html").toString();
let result = ejs.render(html, { isLogin: isLogin });

console.log(result);
