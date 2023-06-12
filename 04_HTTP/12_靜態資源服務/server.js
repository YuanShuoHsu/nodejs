// 創建一個 HTTP 服務，端口為 9000，滿足如下需求
// GET /index.html          響應 page/index.html 的文件內容
// GET /css/app.css         響應 page/css/app.css 的文件內容
// GET /images/logo.png     響應 page/images/logo.png 的文件內容

// 導入 http 模塊
const http = require("http");
const fs = require("fs");

// 創建服務對象
const server = http.createServer((request, response) => {
  // 獲取請求 url 的路徑
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  // 聲明一個變量
  // let root = __dirname + "/page";
  let root = __dirname + "/../";
  // 拼接文件路徑
  let filePath = root + pathname;
  // 讀取文件 fs 異步 API
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader("content-type", "text/html;charset=utf-8");
      response.statusCode = 500;
      response.end("文件讀取失敗");
      return;
    }
    // 響應文件內容
    response.end(data);
  });
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
