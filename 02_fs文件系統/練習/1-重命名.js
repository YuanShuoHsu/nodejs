// 導入 fs 模塊
const fs = require("fs");

// 讀取 code 文件夾
const files = fs.readdirSync("./code");

// 遍歷數組
files.forEach((item) => {
  // 拆分文件名
  let data = item.split("-");
  let [num, name] = data;
  // 判斷
  if (Number(num) < 10) {
    num = "0" + num;
  }
  // 創建新的文件名
  let newName = num + "-" + name;
  // 重命名
  fs.renameSync(`./code/${item}`, `./code/${newName}`);
});
