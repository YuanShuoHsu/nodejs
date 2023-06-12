// 1. 導入 fs 模塊
const fs = require("fs");

// 2. 創建文件夾 mk make 製作 dir directory 文件夾
// fs.mkdir("./html", (err) => {
//   if (err) {
//     console.log("創建失敗");
//     return;
//   }
//   console.log("創建成功");
// });

// 2-2 遞歸創建
// fs.mkdir("./a/b/c", { recursive: true }, (err) => {
//   if (err) {
//     console.log("創建失敗");
//     return;
//   }
//   console.log("創建成功");
// });

// 2-3 讀取文件夾 read 讀取 dir directory 文件夾
// fs.readdir("../資料", (err, data) => {
//   if (err) {
//     console.log("讀取失敗");
//     return;
//   }
//   console.log(data);
// });

fs.readdir("./", (err, data) => {
  if (err) {
    console.log("讀取失敗");
    return;
  }
  console.log(data);
});

// 2-4 刪除文件夾 rm remove 移除
// fs.rmdir("./html", (err) => {
//   if (err) {
//     console.log("刪除失敗");
//     return;
//   }
//   console.log("刪除成功");
// });

// 遞歸刪除 不推薦使用
// fs.rmdir("./a", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("刪除成功");
// });

// 建議使用
fs.rm("./a", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("刪除成功");
});
