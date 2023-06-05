// * 觀書有感.txt

// 1. 導入 fs
const fs = require("fs");

// 2. 創建寫入流對象
const ws = fs.createWriteStream("./觀書有感.txt");

// 3. write
ws.write("半畝方塘一鑒開\r\n");
ws.write("天光雲影共徘徊\r\n");
ws.write("問渠那得清如許\r\n");
ws.write("為有源頭活水來\r\n");

// 4. 關閉通道
// ws.close();
