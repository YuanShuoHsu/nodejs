// 導入 mongoose
const mongoose = require("mongoose");

// 5. 創建文檔的結構對象
// 設置集合中文檔的屬性以及屬性值的類型
let AccountSchema = new mongoose.Schema({
  // 標題
  title: {
    type: String,
    required: true,
  },
  // 時間
  time: Date,
  // 類型
  type: {
    type: Number,
    default: -1,
  },
  // 金額
  account: {
    type: Number,
    required: true,
  },
  // 備註
  remarks: {
    type: String,
  },
});

// 6. 創建模型對象    對文檔操作的封裝對象
let AccountModel = mongoose.model("accounts", AccountSchema);

// 暴露模型對象
module.exports = AccountModel;
