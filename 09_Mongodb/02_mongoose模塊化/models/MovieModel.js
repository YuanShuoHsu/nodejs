// 導入 mongoose
const mongoose = require("mongoose");

// 創建文檔結構
const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
});

// 創建模型對象
const MovieModel = mongoose.model("movie", MovieSchema);

// 暴露
module.exports = MovieModel;
