// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 設置靜態資源中間件
app.use(express.static(__dirname + "/尚品匯"));

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
