var express = require("express");
var router = express.Router();
// 導入用戶的模型
const UserModel = require("../../models/UserModel");
const md5 = require("md5");
// 註冊
router.get("/reg", (req, res) => {
  // 響應 HTML 內容
  res.render("auth/reg");
});

// 註冊用戶
router.post("/reg", async (req, res) => {
  // 做表單驗證
  // 獲取請求體的數據
  // UserModel.create(
  //   { ...req.body, password: md5(req.body.password) },
  //   (err, data) => {
  //     if (err) {
  //       res.status(500).send("註冊失敗，請稍後再試");
  //       return;
  //     }
  //     res.render("success", { msg: "註冊成功", url: "/login" });
  //   }
  // );
  try {
    await UserModel.create({ ...req.body, password: md5(req.body.password) });
    res.render("success", { msg: "註冊成功", url: "/login" });
  } catch (err) {
    res.status(500).send("註冊失敗，請稍後再試");
  }
});

// 登入頁面
router.get("/login", (req, res) => {
  // 響應 HTML 內容
  res.render("auth/login");
});

// 登入操作
router.post("/login", async (req, res) => {
  // 獲取用戶名和密碼
  let { username, password } = req.body;
  // 查詢數據庫
  // UserModel.findOne(
  //   { username: username, password: md5(password) },
  //   (err, data) => {
  //     // 判斷
  //     if (err) {
  //       res.status(500).send("登入，請稍候再試");
  //       return;
  //     }
  //     // 判斷 data
  //     if (!data) {
  //       return res.send("帳號或密碼錯誤");
  //     }
  //     // 登入成功響應
  //     res.render("success", { msg: "登入成功", url: "/account" });
  //   }
  // );
  try {
    const data = await UserModel.findOne({
      username: username,
      password: md5(password),
    });
    // 判斷 data
    if (!data) {
      return res.send("帳號或密碼錯誤");
    }
    // 寫入 session
    req.session.username = data.username;
    req.session._id = data._id;

    // 登入成功響應
    res.render("success", { msg: "登入成功", url: "/account" });
  } catch (err) {
    res.status(500).send("登入，請稍候再試");
  }
});

// 退出登入
router.post("/logout", (req, res) => {
  // 銷毀 session
  req.session.destroy(() => {
    res.render("success", { msg: "退出成功", url: "/login" });
  });
});

module.exports = router;
