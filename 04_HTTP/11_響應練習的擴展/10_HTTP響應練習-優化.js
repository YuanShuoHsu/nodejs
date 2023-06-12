// 導入 http 模塊
const http = require("http");
const fs = require("fs");

// 創建服務對象
const server = http.createServer((request, response) => {
  // 獲取請求 url 的路徑
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  if (pathname === "/") {
    // 讀取文件內容
    let html = fs.readFileSync(__dirname + "/10_table.html");
    response.end(html); // 設置響應體
  } else if (pathname === "/index.css") {
    let css = fs.readFileSync(__dirname + "/index.css");
    response.end(css); // 設置響應體
  } else if (pathname === "/index.js") {
    let js = fs.readFileSync(__dirname + "/index.js");
    response.end(js); // 設置響應體
  } else {
    response.statusCode = 404;
    response.end("<h1>404 Not Found</h1>");
  }
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
