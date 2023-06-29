// 導入 express
const express = require("express");
const cookieParser = require("cookie-parser");

// 創建應用對象
const app = express();
app.use(cookieParser());

// 創建路由規則
app.get("/set-cookie", (req, res) => {
  // res.cookie("name", "zhangsan"); // 會在瀏覽器關閉的時候，銷毀
  res.cookie("name", "lisi", { maxAge: 60 * 1000 }); // max 最大 age 年齡
  res.cookie("theme", "blue");
  res.send("home");
});

// 刪除 cookie
app.get("/remove-cookie", (req, res) => {
  // 調用方法
  res.clearCookie("name");
  res.send("刪除成功");
});

// 獲取 cookie
app.get("/get-cookie", (req, res) => {
  // 獲取 cookie
  console.log(req.cookies);
  res.send(`歡迎您 ${req.cookies.name}`);
});

// 啟動服務
app.listen(3000);
