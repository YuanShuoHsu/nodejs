// 導入 http 模塊
const http = require("http");
// 1. 導入 url 模塊
const url = require("url");

// 創建服務對象
const server = http.createServer((request, response) => {
  // 2. 解析 request.url
  // console.log(request.url);
  let res = url.parse(request.url, true);
  // 路徑
  let pathname = res.pathname;
  // 查詢字符串
  let keyword = res.query.keyword;

  response.end("url");
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
