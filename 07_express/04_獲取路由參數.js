// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 創建路由
app.get("/:id.html", (req, res) => {
  // 獲取 URL 路由參數
  console.log(req.params.id);
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("商品詳情");
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
