// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 聲明中間件
app.use((req, res, next) => {
  // 檢測請求頭中的 refer 是否為 127.0.0.1
  // 獲取 refer
  let referer = req.get("referer");
  if (referer) {
    // 實例化
    let url = new URL(referer);
    // 獲取 hostname
    let hostname = url.hostname;
    // 判斷
    if (hostname !== "127.0.0.1") {
      // 響應 404
      res.status(404).send("<h1>404 Not Found</h1>");
      return;
    }
  }
  next();
});

// 靜態資源中間件設置
app.use(express.static(__dirname + "/public"));

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
