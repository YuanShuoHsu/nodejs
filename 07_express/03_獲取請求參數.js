// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 創建路由
app.get("/request", (req, res) => {
  // 原生操作
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);

  // express 操作
  console.log(req.path);
  console.log(req.query);

  // 獲取 ip
  console.log(req.ip);

  // 獲取請求頭
  console.log(req.get("host"));

  res.end("hello express");
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
