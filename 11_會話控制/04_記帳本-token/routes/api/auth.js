var express = require("express");
var router = express.Router();
// 導入 jwt
const jwt = require("jsonwebtoken");
// 導入用戶的模型
const UserModel = require("../../models/UserModel");
const md5 = require("md5");
const { token } = require("morgan");

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
  //       res.json({
  //         code: "2001",
  //         msg: "數據庫讀取失敗",
  //         data: null,
  //       });
  //       return;
  //     }
  //     // 判斷 data
  //     if (!data) {
  //       return res.json({
  //         code: "2002",
  //         msg: "用戶名或密碼錯誤",
  //         data: null,
  //       });
  //     }
  //     // 創建當前用戶的 token
  //     let token = jwt.sign(
  //       { username: data.username, _id: data._id },
  //       "atguigu",
  //       {
  //         expiresIn: 60 * 60 * 24 * 7,
  //       }
  //     );
  //     // 響應 token
  //     res.json({
  //       code: "0000",
  //       msg: "登入成功",
  //       data: token,
  //     });
  //   }
  // );
  try {
    const data = await UserModel.findOne({
      username: username,
      password: md5(password),
    });
    // 判斷 data
    if (!data) {
      return res.json({
        code: "2002",
        msg: "用戶名或密碼錯誤",
        data: null,
      });
    }
    // 創建當前用戶的 token
    let token = jwt.sign(
      { username: data.username, _id: data._id },
      "atguigu",
      {
        expiresIn: 60 * 60 * 24 * 7,
      }
    );
    // 響應 token
    res.json({
      code: "0000",
      msg: "登入成功",
      data: token,
    });
  } catch (err) {
    res.json({
      code: "2001",
      msg: "數據庫讀取失敗",
      data: null,
    });
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
