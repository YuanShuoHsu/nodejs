// 1. 導入 express
const express = require("express");

// 2. 創建路由對象
const router = express.Router();

// router.use();

// 後台
router.get("/admin", (req, res) => {
  res.send("後台首頁");
});

// 後台設置
router.get("/setting", (req, res) => {
  res.send("設置頁面");
});

module.exports = router;
