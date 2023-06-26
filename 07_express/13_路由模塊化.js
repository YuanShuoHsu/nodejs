// 針對 /admin /setting 的請求後，要求 URL 攜帶 code=521 參數，如未攜帶提示「暗號錯誤」

// 導入 express
const express = require("express");
const homeRouter = require("./routes/homeRouter");
const adminRouter = require("./routes/adminRouter");

// 創建應用對象
const app = express();

// 設置
app.use(homeRouter);
app.use(adminRouter);

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
