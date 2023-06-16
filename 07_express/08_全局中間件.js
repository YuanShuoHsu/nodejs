// 記錄每個請求的 url 與 IP 地址

// 導入 express
const express = require("express");
const fs = require("fs");
const path = require("path");

// 創建應用對象
const app = express();

// 聲明中間件函數
function recordMiddleware(req, res, next) {
  // 獲取 url 和 ip
  let { url, ip } = req;
  // 將信息保存在文件中 access.log
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url} ${ip}\r\n`
  );
  // 調用 next
  next();
}

// 使用中間件函數
app.use(recordMiddleware);

// 創建路由
app.get("/home", (req, res) => {
  res.send("前台首頁");
});

app.get("/admin", (req, res) => {
  res.send("後台首頁");
});

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
