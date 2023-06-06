// 1. 導入 fs 模塊
const fs = require("fs");

// 2. stat 方法 status 縮寫 狀態
fs.stat("../資料/笑看風雲.mp4", (err, data) => {
  if (err) {
    console.log("操作失敗");
    return;
  }
  // console.log(data);
  // isFile
  console.log(data.isFile());
  // isDirectory
  console.log(data.isDirectory());
});
