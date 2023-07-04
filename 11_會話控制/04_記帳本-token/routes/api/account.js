// 導入 express
const express = require("express");
// 導入 jwt
const jwt = require("jsonwebtoken");
// 導入中間件
let checkTokenMiddleware = require("../../middlewares/checkTokenMiddleware");

const router = express.Router();
// 導入 moment
const moment = require("moment");
const AccountModel = require("../../models/AccountModel");

// 記帳本的列表
router.get("/account", checkTokenMiddleware, async (req, res, next) => {
  // 獲取所有的帳單信息
  // let accounts = db.get("accounts").value();
  // 讀取集合信息;
  // AccountModel.find()
  //   .sort({ time: -1 })
  //   .exec((err, data) => {
  //     if (err) {
  //       res.json({
  //         code: "1001",
  //         msg: "讀取失敗",
  //         data: null,
  //       });
  //       return;
  //     }
  //     // 響應成功的提示
  //     res.json({
  //       // 響應編號
  //       code: "0000",
  //       // 響應的信息
  //       msg: "讀取成功",
  //       // 響應的數據
  //       data: data,
  //     });
  //   });
  try {
    const data = await AccountModel.find().sort({ time: -1 });
    // 響應成功的提示
    res.json({
      // 響應編號
      code: "0000",
      // 響應的信息
      msg: "讀取成功",
      // 響應的數據
      data: data,
    });
  } catch (err) {
    res.json({
      code: "1001",
      msg: "讀取失敗",
      data: null,
    });
  }
});

// 新增紀錄
router.post("/account", checkTokenMiddleware, async (req, res) => {
  // 查看表單數據   2023-02-24 => new Date()
  // 2023-02-24 => moment => new Date()
  // console.log(req.body);
  // 修改 req.body.time 值
  // req.body.time = moment(req.body.time).toDate();
  // 表單驗證
  // 插入數據庫
  // AccountModel.create(
  //   {
  //     ...req.body,
  //     // 修改 time 屬性的值
  //     time: moment(req.body.time).toDate(),
  //   },
  //   (err, data) => {
  //     if (err) {
  //       res.json({
  //         code: "1002",
  //         msg: "創建失敗",
  //         data: null,
  //       });
  //       return;
  //     }
  //     // 成功提醒
  //     res.json({ code: "0000", msg: "創建成功", data: data });
  //   }
  // );
  try {
    const data = await AccountModel.create({
      ...req.body,
      // 修改 time 屬性的值
      time: moment(req.body.time).toDate(),
    });
    // 成功提醒
    res.json({ code: "0000", msg: "創建成功", data: data });
  } catch (err) {
    res.json({
      code: "1002",
      msg: "創建失敗",
      data: null,
    });
  }
});

// 刪除紀錄
router.delete("/account/:id", checkTokenMiddleware, async (req, res) => {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  //刪除
  // AccountModel.deleteOne({ _id: id }, (err, data) => {
  //   if (err) {
  //     res.json({
  //       code: "1003",
  //       msg: "刪除帳單失敗",
  //       data: null,
  //     });
  //     return;
  //   }
  //   // 提醒
  //   res.json({ code: "0000", msg: "刪除成功", data: {} });
  // });
  try {
    await AccountModel.deleteOne({ _id: id });
    // 提醒
    res.json({ code: "0000", msg: "刪除成功", data: {} });
  } catch (err) {
    res.json({
      code: "1003",
      msg: "刪除帳單失敗",
      data: null,
    });
  }
});

// 獲取單個帳單信息
router.get("/account/:id", checkTokenMiddleware, async (req, res) => {
  // 獲取 id 參數
  let { id } = req.params;
  // 查詢數據庫
  // AccountModel.findById(id, (err, data) => {
  //   if (err) {
  //     return res.json({
  //       code: "1004",
  //       msg: "讀取失敗",
  //       data: null,
  //     });
  //   }
  //   // 成功響應
  //   res.json({
  //     code: "0000",
  //     msg: "讀取成功",
  //     data: data,
  //   });
  // });
  try {
    const data = await AccountModel.findById(id);
    // 成功響應
    res.json({
      code: "0000",
      msg: "讀取成功",
      data: data,
    });
  } catch (err) {
    res.json({
      code: "1004",
      msg: "讀取失敗",
      data: null,
    });
  }
});

// 更新單個帳單信息
router.patch("/account/:id", checkTokenMiddleware, async (req, res) => {
  // 獲取 id 參數值
  let { id } = req.params;
  // 更新數據庫
  // AccountModel.updateOne({ _id: id }, req.body, (err, data) => {
  //   if (err) {
  //     return res.json({
  //       code: "1005",
  //       msg: "更新失敗",
  //       data: null,
  //     });
  //   }
  //   // 再次查詢數據庫   獲取單條數據
  //   AccountModel.findById(id, (err, data) => {
  //     if (err) {
  //       return res.json({
  //         code: "1004",
  //         msg: "更新失敗",
  //         data: null,
  //       });
  //     }
  //     // 成功響應
  //     res.json({
  //       code: "0000",
  //       msg: "更新成功",
  //       data: data,
  //     });
  //   });
  // });
  try {
    const data = await AccountModel.updateOne({ _id: id }, req.body);
    try {
      // 再次查詢數據庫   獲取單條數據
      const data = await AccountModel.findById(id);
      // 成功響應
      res.json({
        code: "0000",
        msg: "更新成功",
        data: data,
      });
    } catch (err) {
      res.json({
        code: "1004",
        msg: "更新失敗",
        data: null,
      });
    }
    // 成功響應
    res.json({
      code: "0000",
      msg: "更新成功",
      data: data,
    });
  } catch (err) {
    return res.json({
      code: "1005",
      msg: "更新失敗",
      data: null,
    });
  }
});

module.exports = router;
