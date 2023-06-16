// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 創建路由
app.get("/other", (req, res) => {
  // 跳轉響應
  // res.redirect("http://atguigu.com");
  // 下載響應
  // res.download(__dirname + "/package.json");
  // JSON 響應
  // res.json({
  //   name: "尚硅谷",
  //   slogon: "讓天下沒有難學的技術",
  // });
  // 響應文件內容
  res.sendFile(__dirname + "/test.html"); // path.resolve()
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
