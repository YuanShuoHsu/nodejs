var express = require("express");
var router = express.Router();
// 導入 lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(__dirname + "/../data/db.json");
// 獲取 db 對象
const db = low(adapter);
// 導入 shortid
const shortid = require("shortid");
// 導入 moment
const moment = require("moment");
const AccountModel = require("../models/AccountModel");

// 測試
// console.log(moment("2023-02-24").toDate());
// 格式化日期對象
// console.log(moment(new Date()).format("YYYY-MM-DD"));

// 記帳本的列表
router.get("/account", async (req, res, next) => {
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
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

// 新增紀錄
router.post("/account", async (req, res) => {
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
router.get("/account/:id", (req, res) => {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  db.get("accounts").remove({ id: id }).write();
  // 提醒
  res.render("success", { msg: "刪除成功", url: "/account" });
});

module.exports = router;
