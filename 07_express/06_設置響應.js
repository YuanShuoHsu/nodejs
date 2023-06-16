// 導入 express
const express = require("express");

// 創建應用對象
const app = express();

// 創建路由
app.get("/response", (req, res) => {
  // 原生響應
  // res.statusCode = 404;
  // res.statusMessage = "love";
  // res.setHeader("xxx", "yyy");
  // res.write("hello express ");
  // res.end("response");

  // express 響應
  // res.status(500);
  // res.set("aaa", "bbb");
  // res.send("你好 Express");
  res.status(500).set("abc", "def").send("這都是 OK 的");
});

// 監聽端口，啟動服務
app.listen(3000, () => {
  console.log("服務已經啟動，端口 3000 正在監聽中...");
});
