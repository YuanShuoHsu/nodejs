// * 需求
// * 複製【資料】文件夾下的「笑看風雲.mp4」

const fs = require("fs");
const process = require("process");
// 方式一 readFile
// 讀取文件內容
// let data = fs.readFileSync("./笑看風雲.mp4");
// 寫入文件
// fs.writeFileSync("./笑看風雲-2.mp4", data);
// console.log(process.memoryUsage()); // rss 110710784 字節 => 105MB

// 方式二 流式操作
// 創建讀取流對象
const rs = fs.createReadStream("./笑看風雲.mp4");
// 創建寫入流對象
const ws = fs.createWriteStream("./笑看風雲-3.mp4");

// 綁定 data 事件
// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

// rs.on("end", () => {
//   console.log(process.memoryUsage()); // rss 43106304 字節 => 41MB
// });

rs.pipe(ws);
