// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 創建路由
app.get("/home", (req, res) => {
  res.end("hello express");
});

app.get("/", (req, res) => {
  res.end("home");
});

// post
app.post("/login", (req, res) => {
  res.end("login login");
});

// 匹配所有的方法
app.all("/test", (req, res) => {
  res.end("test test");
});

// 404 響應
app.all("*", (req, res) => {
    res.end("404 not Found")
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
