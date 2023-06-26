var express = require("express");
var router = express.Router();
// 導入
const formidable = require("formidable");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 顯示網頁的 (表單)
router.get("/portrait", (req, res) => {
  res.render("portrait");
});

// 處理文件上傳
router.post("/portrait", (req, res) => {
  // 創建 form 對象
  const form = formidable({
    // 設置上傳文件的保存目錄
    uploadDir: __dirname + "/../public/images",
    // 保持文件後綴
    keepExtensions: true,
  });
  // 解析請求報文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields); // text radio checkbox select
    // console.log(files); // file

    // 服務器保存該圖片的訪問 URL
    // /images/8ad3d5e36012212ba7642c000.jpg
    let url = "/images/" + files.portrait.newFilename; // 將來將此數據保存在數據庫中
    res.send(url);
  });
});

module.exports = router;
