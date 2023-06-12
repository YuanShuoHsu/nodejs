// 1. 引入 fs 模塊
const fs = require("fs");

// 2. 調用 appendFile
// fs.appendFile("./座右銘.txt", "，擇其善者而從之，則其不善者而改之", (err) => {
//   // 判斷
//   if (err) {
//     console.log("寫入失敗");
//     return;
//   }
//   console.log("追加寫入成功");
// });

// fs.appendFileSync("./座右銘.txt", "\r\n溫故而知新，可以為師矣");

// writeFile 實現追加寫入
fs.writeFile("./座右銘.txt", "love love love", { flag: "a" }, (err) => {
  if (err) {
    console.log("寫入失敗");
    return;
  }
  console.log("寫入成功");
});
