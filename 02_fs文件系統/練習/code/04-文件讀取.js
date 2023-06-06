// 1. 引入 fs 模塊
const fs = require("fs");

// 2. 異步讀取
fs.readFile("./觀書有感.txt", (err, data) => {
  if (err) {
    console.log("讀取失敗");
    return;
  }
  console.log(data.toString());
});

// 3. 同步讀取
let data = fs.readFileSync("./觀書有感.txt");
console.log(data.toString());
