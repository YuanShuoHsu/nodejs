// 導入 express
const express = require("express");
// 2. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require("connect-mongo");

// 創建應用對象
const app = express();
// 3. 設置 session 的中間件
app.use(
  session({
    name: "sid", // 設置 cookie 的 name，默認值是：connect.sid
    secret: "atguigu", // 參與加密的字符串 (又稱簽名)   加鹽
    saveUninitialized: false, // 是否為每次請求都設置一個 cookie 用來存儲 session 的 id
    resave: true, // 是否在每次請求時重新保存 session   20 分鐘    4:00    4:20
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/bilibili", // 數據庫的連接配置
    }),
    cookie: {
      httpOnly: true, // 開啟後前端無法通過 JS 操作
      maxAge: 1000 * 60 * 5, // 這一條是控制 sessionID 的過期時間的!!!
    },
  })
);

// 首頁路由
app.get("/", (req, res) => {
  res.send("home");
});

// 登入 session 的設置
app.get("/login", (req, res) => {
  // username=admin&password=admin
  if (req.query.username === "admin" && req.query.password === "admin") {
    // 設置 session 信息
    req.session.username = "admin";
    req.session.uid = "258aefccc";
    // 成功響應
    res.send("登入成功");
  } else {
    res.send("登入失敗");
  }
});

// session 的讀取
app.get("/cart", (req, res) => {
  // 檢測 session 是否存在用戶數據
  if (req.session.username) {
    res.send(`購物車頁面，歡迎您 ${req.session.username}`);
  } else {
    res.send("您還沒有登入");
  }
});

// session 的銷毀
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("退出成功");
  });
});

// 啟動服務
app.listen(3000);
