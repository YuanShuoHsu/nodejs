// 1. 導入 fs 模塊
const fs = require("fs");

// 2. 調用 rename 方法
// fs.rename("./座右銘.txt", "./論語.txt", (err) => {
//   if (err) {
//     console.log("操作失敗");
//     return;
//   }
//   console.log("操作成功");
// });

// 文件的移動
fs.rename("./data.txt", "../資料/data.txt", (err) => {
  if (err) {
    console.log("操作失敗");
    return;
  }
  console.log("操作成功");
});
