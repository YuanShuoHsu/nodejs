// 1. 導入 fs 模塊
const fs = require("fs");

// 調用 unlink 方法 unlinkSync
// fs.unlink("./觀書有感.txt", (err) => {
//   if (err) {
//     console.log("刪除失敗");
//     return;
//   }
//   console.log("刪除成功");
// });

// 調用 rm 方法 14.4 rmSync
fs.rm("./論語.txt", (err) => {
  if (err) {
    console.log("刪除失敗");
    return;
  }
  console.log("刪除成功");
});
