// 1. 導入 express
const express = require("express");

// 2. 創建路由對象
const router = express.Router();

// 3. 創建路由規則
// 創建路由
router.get("/home", (req, res) => {
  res.send("前台首頁");
});

// 創建路由
router.get("/search", (req, res) => {
  res.send("內容搜索");
});

// 4. 暴露 router
module.exports = router;
