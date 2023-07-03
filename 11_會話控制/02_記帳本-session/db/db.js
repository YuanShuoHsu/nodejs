// @params {*} success 數據庫連接成功的回調
// @params {*} error 數據庫連接失敗的回調

module.exports = function (success, error) {
  // 判斷 error 為其設置默認值
  if (typeof error !== "function") {
    error = () => {
      console.log("連接失敗");
    };
  }
  // 1. 安裝 mongoose
  // 2. 導入 mongoose
  const mongoose = require("mongoose");
  // 導入配置文件
  const { DBHOST, DBPORT, DBNAME } = require("../config/config");

  // 設置 strictQuery 為 true
  mongoose.set("strictQuery", true);

  // 3. 連接 mongodb 服務                     數據庫的名稱
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  // 4. 設置回調
  // 設置連接成功的回調   once 一次   事件回調函數只執行一次
  mongoose.connection.once("open", async () => {
    success();
  });

  // 設置連接錯誤的回調
  mongoose.connection.on("error", () => {
    error();
  });

  // 設置連接關閉的回調
  mongoose.connection.on("close", () => {
    console.log("連接關閉");
  });
};
