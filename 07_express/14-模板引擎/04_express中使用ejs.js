// 導入 express
const express = require("express");
// 導入 path
const path = require("path");
// 創建應用對象
const app = express();
// 1. 設置模板引擎
app.set("view engine", "ejs"); // pug twing
// 2. 設置模板文件存放位置  模板文件：具有模板語法內容的文件
app.set("views", path.resolve(__dirname, "./views"));

// 創建路由
app.get("/home", (req, res) => {
  // 3. render 響應
  // res.render("模板的文件名", "數據");
  // 聲明變量
  let title = "尚硅谷 - 讓天下沒有難學的技術";
  res.render("home", { title });
  // 4. 創建模板文件
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
