// 導入 express
const express = require("express");
// 導入 moment
const moment = require("moment");
const AccountModel = require("../../models/AccountModel");
// 導入中間件檢測登入
const checkLoginMiddleware = require("../../middlewares/checkLoginMiddleware");
// 創建路由對象
const router = express.Router();

// 添加首頁的路由規則
router.get("/", (req, res) => {
  // 重定向 /account
  res.redirect("/account");
});

// 記帳本的列表
router.get("/account", checkLoginMiddleware, async (req, res, next) => {
  // 獲取所有的帳單信息
  // let accounts = db.get("accounts").value();
  // 讀取集合信息
  // AccountModel.find()
  //   .sort({ time: -1 })
  //   .exec((err, data) => {
  //     if (err) {
  //       res.status(500).send("讀取失敗");
  //       return;
  //     }
  //     // 響應成功的提示
  //     res.render("list", { accounts: accounts });
  //   });
  try {
    const data = await AccountModel.find().sort({ time: -1 });
    // 響應成功的提示
    res.render("list", { accounts: data, moment: moment });
  } catch (err) {
    res.status(500).send("讀取失敗");
  }
});

// 添加紀錄
router.get("/account/create", checkLoginMiddleware, function (req, res, next) {
  res.render("create");
});

// 新增紀錄
router.post("/account", checkLoginMiddleware, async (req, res) => {
  // 查看表單數據   2023-02-24 => new Date()
  // 2023-02-24 => moment => new Date()
  // console.log(req.body);
  // 修改 req.body.time 值
  // req.body.time = moment(req.body.time).toDate();
  // 插入數據庫
  // AccountModel.create(
  //   {
  //     ...req.body,
  //     // 修改 time 屬性的值
  //     time: moment(req.body.time).toDate(),
  //   },
  //   (err, data) => {
  //     if (err) {
  //       res.status(500).send("插入失敗");
  //       return;
  //     }
  //     // 成功提醒
  //     res.render("success", { msg: "添加成功", url: "/account" });
  //   }
  // );
  try {
    await AccountModel.create({
      ...req.body,
      // 修改 time 屬性的值
      time: moment(req.body.time).toDate(),
    });
    // 成功提醒
    res.render("success", { msg: "添加成功", url: "/account" });
  } catch (err) {
    res.status(500).send("插入失敗");
  }
});

// 刪除紀錄
router.get("/account/:id", checkLoginMiddleware, async (req, res) => {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  //刪除
  // AccountModel.deleteOne({ _id: id }, (err, data) => {
  //   if (err) {
  //     res.status(500).send("刪除失敗");
  //     return;
  //   }
  //   // 提醒
  //   res.render("success", { msg: "刪除成功", url: "/account" });
  // });
  try {
    await AccountModel.deleteOne({ _id: id });
    // 提醒
    res.render("success", { msg: "刪除成功", url: "/account" });
  } catch (err) {
    res.status(500).send("刪除失敗");
  }
});

module.exports = router;
