// 按照要求搭建 HTTP 服務

// GET      /login      顯示表單網頁
// POST     /login      獲取表單中的「用戶名」和「密碼」

// 導入 express
const express = require("express");
const bodyParser = require("body-parser");

// 創建應用對象
const app = express();

// 解析 JSON 格式的請求體的中間件
// const jsonParser = bodyParser.json();

// 解析 querystring 格式請求體的中間件
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// 創建路由規則
app.get("/login", (req, res) => {
  // res.send("表單頁面");
  // 響應 HTML 文件內容
  res.sendFile(__dirname + "/11_form.html");
});

// post 規則
app.post("/login", urlencodedParser, (req, res) => {
  // 獲取 用戶名 和 密碼
  console.log(req.body);
  res.send("獲取用戶的數據");
});

// 啟動服務
app.listen(3000, () => {
  console.log("server is runngin...");
});
