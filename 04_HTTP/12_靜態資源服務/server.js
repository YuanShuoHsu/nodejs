// 創建一個 HTTP 服務，端口為 9000，滿足如下需求
// GET /index.html          響應 page/index.html 的文件內容
// GET /css/app.css         響應 page/css/app.css 的文件內容
// GET /images/logo.png     響應 page/images/logo.png 的文件內容

// 導入 http 模塊
const http = require("http");
const fs = require("fs");
const path = require("path");
// 聲明一個變量
let mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  mp3: "audio/mpeg",
  json: "application/json",
};

// 創建服務對象
const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    response.statusCode = 405;
    response.end("<h1>405 Method Not Allowed</h1>");
    return;
  }
  // 獲取請求 url 的路徑
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  // 聲明一個變量
  let root = __dirname + "/page";
  // let root = __dirname + "/../";
  // 拼接文件路徑
  let filePath = root + pathname;
  // 讀取文件 fs 異步 API
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      // 設置字符集
      response.setHeader("content-type", "text/html;charset=utf-8");
      // 判斷錯誤的代號
      switch (err.code) {
        case "ENOENT":
          response.statusCode = 404;
          response.end("<h1>404 Not Found</h1>");
        case "EPERM":
          response.statusCode = 403;
          response.end("<h1>403 Forbidden</h1>");
        default:
          response.statusCode = 500;
          response.end("<h1>Internal Server Error</h1>");
      }
      return;
    }
    // 獲取文件的後綴名
    let ext = path.extname(filePath).slice(1);
    // 獲取對應的類型
    let type = mimes[ext];
    if (type) {
      // 匹配到                             text/html;charset=utf-8
      if (ext === "html") {
        response.setHeader("content-type", type + ";charset=utf-8");
      } else {
        response.setHeader("content-type", type);
      }
    } else {
      // 沒有匹配到
      response.setHeader("content-type", "application/octet-stream");
    }
    // 響應文件內容
    response.end(data);
  });
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
