// 1. 安裝 mongoose
// 2. 導入 mongoose
const mongoose = require("mongoose");

// 設置 strictQuery 為 true
mongoose.set("strictQuery", true);

// 3. 連接 mongodb 服務                      數據庫的名稱
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 4. 設置回調
// 設置連接成功的回調   once 一次   事件回調函數只執行一次
mongoose.connection.once("open", async () => {
  // 5. 創建文檔的結構對象
  // 設置集合中文檔的屬性以及屬性值的類型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
  });

  // 6. 創建模型對象    對文檔操作的封裝對象    mongoose 會使用集合名稱的複數，創建集合
  let BookModel = mongoose.model("novel", BookSchema);

  // 7. 刪除一條數據
  //   BookModel.deleteOne({ _id: "649aa3bc16800e9ebf8cb93b" }, (err, data) => {
  //     // 判斷
  //     if (err) {
  //       console.log("刪除失敗");
  //       return;
  //     }
  //     // 輸出 data
  //     console.log(data);
  //   });

  //   try {
  //     const data = await BookModel.deleteOne({ _id: "649aa3bc16800e9ebf8cb93b" });
  //     // 輸出 data
  //     console.log(data);
  //   } catch (error) {
  //     // 判斷
  //     console.error("刪除失敗");
  //   }

  // 批量刪除
  //   BookModel.deleteMany({ is_hot: false }, (err, data) => {
  //     // 判斷
  //     if (err) {
  //       console.log("刪除失敗");
  //       return;
  //     }
  //     // 輸出 data
  //     console.log(data);
  //   });

  try {
    const data = await BookModel.deleteMany({ is_hot: false });
    // 輸出 data
    console.log(data);
  } catch (error) {
    // 判斷
    console.error("刪除失敗");
  }
});

// 設置連接錯誤的回調
mongoose.connection.on("error", () => {
  console.log("連接失敗");
});

// 設置連接關閉的回調
mongoose.connection.on("close", () => {
  console.log("連接關閉");
});
