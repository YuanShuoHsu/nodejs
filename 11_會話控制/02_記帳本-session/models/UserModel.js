// 導入 mongoose
const mongoose = require("mongoose");

// 5. 創建文檔的結構對象
// 設置集合中文檔的屬性以及屬性值的類型
let UserSchema = new mongoose.Schema({
  // 標題
  username: String,
  password: String,
});

// 6. 創建模型對象    對文檔操作的封裝對象
let UserModel = mongoose.model("users", UserSchema);

// 暴露模型對象
module.exports = UserModel;
