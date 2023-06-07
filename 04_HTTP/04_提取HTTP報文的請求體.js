// 1. 導入 http 模塊
const http = require("http");

// 2. 創建服務對象
const server = http.createServer((request, response) => {
  // 1. 聲明一個變量
  let body = "";
  // 2. 綁定事件
  request.on("data", (chunk) => {
    body += chunk;
  });
  // 3. 綁定 end 事件
  request.on("end", () => {
    console.log(body);
    // 響應
    response.end("Hello HTTP");
  });
});

// 3. 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
