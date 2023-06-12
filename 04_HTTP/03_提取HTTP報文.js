// 1. 導入 http 模塊
const http = require("http");

// 2. 創建服務對象
const server = http.createServer((request, response) => {
  // 獲取請求的方法
  console.log(request.method);
  // 獲取請求的 url
  console.log(request.url); // 只包含 url 中的路徑與查詢字符串
  // 獲取 HTTP 協議的版本號
  console.log(request.httpVersion);
  // 獲取 HTTP 的請求頭
  console.log(request.headers.host);
  response.end("http"); // 設置響應體
});

// 3. 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
