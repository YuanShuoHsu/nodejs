// 導入 mongoose
const mongoose = require("mongoose");

// 5. 創建文檔的結構對象
// 設置集合中文檔的屬性以及屬性值的類型
let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
});

// 6. 創建模型對象    對文檔操作的封裝對象
let BookModel = mongoose.model("books", BookSchema);

// 暴露模型對象
module.exports = BookModel;
