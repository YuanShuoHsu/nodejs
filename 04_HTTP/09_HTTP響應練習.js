// 導入 http 模塊
const http = require("http");

// 創建服務對象
const server = http.createServer((request, response) => {
  response.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          td {
              padding: 20px 40px;
          }
  
          table tr:nth-child(odd) {
              background: #aef;
          }
  
          table tr:nth-child(even) {
              background: #fcb;
          }
  
          table,
          td {
              border-collapse: collapse;
          }
      </style>
  </head>
  
  <body>
      <table border="1">
          <tr>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
          </tr>
      </table>
      <script>
          // 獲取所有的td
          let tds = document.querySelectorAll("td")
          tds.forEach(item => {
              item.onclick = function () {
                  this.style.background = "#222"
              }
          })
      </script>
  </body>
  
  </html>`);
});

// 監聽端口，啟動服務
server.listen(9000, () => {
  console.log("服務已經啟動...");
});
