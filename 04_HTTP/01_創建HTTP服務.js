// 1. 導入 http 模塊
const http = require("http");

// 2. 創建服務對象
const server = http.createServer((request, response) => {
  // response.end("Hello HTTP Server"); // 設置響應體
  response.setHeader("content-type", "text/html;charset=utf-8");
  response.end("你好"); // 設置響應體
});

// 3. 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
