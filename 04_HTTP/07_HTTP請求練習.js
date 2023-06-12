// 1. 導入 http 模塊
const http = require("http");

// 2. 創建服務對象
const server = http.createServer((request, response) => {
  // 獲取請求的方法
  let { method } = request;
  // 獲取請的 url 路徑
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  response.setHeader("content-type", "text/html;charset=utf-8");
  if (method === "GET" && pathname === "/login") {
    // 登入的情形
    response.end("登入頁面");
  } else if (method === "GET" && pathname === "/reg") {
    // register 註冊
    response.end("註冊頁面");
  } else {
    response.end("Not Found");
  }
});

// 3. 監聽端口 啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動... 端口 9000 監聽中...");
});
