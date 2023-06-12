// 導入 http 模塊
const http = require("http");
const fs = require("fs");

// 創建服務對象
const server = http.createServer((request, response) => {
  // 讀取文件內容
  let html = fs.readFileSync(__dirname + "/10_table.html");
  response.end(html);
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
