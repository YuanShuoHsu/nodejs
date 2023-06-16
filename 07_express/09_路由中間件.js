// 針對 /admin /setting 的請求後，要求 URL 攜帶 code=521 參數，如未攜帶提示「暗號錯誤」

// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 創建路由
app.get("/home", (req, res) => {
  res.send("前台首頁");
});

// 聲明中間件
let checkCodeMiddleware = (req, res, next) => {
  // 判斷 URL 中 code 參數等於 521
  if (req.query.code === "521") {
    next();
  } else {
    res.send("案號錯誤");
  }
};

// 後台
app.get("/admin", checkCodeMiddleware, (req, res) => {
  res.send("後台首頁");
});

// 後台設置
app.get("/setting", checkCodeMiddleware, (req, res) => {
  res.send("設置頁面");
});

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
