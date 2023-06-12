// 導入 http 模塊
const http = require("http");

// 創建服務對象
const server = http.createServer((request, response) => {
  // 實例化 URL 的對象
  // let url = new URL("/search?a=100&b=200", "http://127.0.0.1:9000");
  let url = new URL(request.url, "http://127.0.0.1:9000");
  // 輸出路徑
  console.log(url.pathname);
  // 輸出 keyword 查詢字符串
  console.log(url.searchParams.get("keyword"));
  response.end("url new");
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
