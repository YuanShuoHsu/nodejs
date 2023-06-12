// 1. 引入 fs 模塊
const fs = require("fs");

// 2. 創建讀取流對象
const rs = fs.createReadStream("./笑看風雲.mp4");

// 3. 綁定 data 事件 chunk 塊兒 大塊兒
rs.on("data", (chunk) => {
  console.log(chunk.length); // 65536 字節 => 64KB
  //   console.log(chunk.toString()) // 65536 字節 => 64KB
});

// 4. end 可選事件
rs.on("end", () => {
  console.log("讀取完成");
});
