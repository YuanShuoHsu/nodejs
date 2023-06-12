// 導入 http 模塊
const http = require("http");

// 創建服務對象
const server = http.createServer((request, response) => {
  // 1. 設定響應狀態碼
  // response.statusCode = 203;
  // response.statusCode = 404;
  // 2. 響應狀態的描述
  // response.statusMessage = "iloveyou";
  // 3. 響應頭
  // response.setHeader("content-type", "text/html;charset=utf-8");
  // response.setHeader("Server", "Node.js");
  // response.setHeader("myHeader", "test test test");
  // response.setHeader("test", ["a", "b", "c"]);
  // 4. 響應體的設置
  response.write("love");
  response.write("love");
  response.write("love");
  response.write("love");
  response.end(); // 設置響應體
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
