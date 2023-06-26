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

// 記帳本的列表
router.get("/account", function (req, res, next) {
  // 獲取所有的帳單信息
  let accounts = db.get("accounts").value();
  console.log(accounts);
  res.render("list", { accounts: accounts });
});

// 添加紀錄
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

// 新增紀錄
router.post("/account", (req, res) => {
  // 生成 id
  let id = shortid.generate();
  // 寫入文件
  db.get("accounts")
    .unshift({ id: id, ...req.body })
    .write();
  // 成功提醒
  res.render("success", { msg: "添加成功", url: "/account" });
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
