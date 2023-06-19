// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 創建路由
app.get("/", (req, res) => {
  res.send("我才是首頁");
});

// 靜態資源中間件設置
app.use(express.static(__dirname + "/public"));

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
