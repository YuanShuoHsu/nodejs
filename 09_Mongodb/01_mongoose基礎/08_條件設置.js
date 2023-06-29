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

  // 價格小於 20 的圖書
  // BookModel.find({ price: { $lt: 20 } }, (err, data) => {
  //   if (err) {
  //     console.log("讀取失敗");
  //     return;
  //   }
  //   console.log(data);
  // });

  // try {
  //   const data = await BookModel.find({ price: { $lt: 20 } });
  //   console.log(data);
  // } catch (err) {
  //   console.log("讀取失敗");
  // }

  // 曹雪芹 或者 余華 的書
  // BookModel.find(
  //   { $or: [{ author: "曹雪芹" }, { author: "余華" }] },
  //   (err, data) => {
  //     if (err) {
  //       console.log("讀取失敗");
  //       return;
  //     }
  //     console.log(data);
  //   }
  // );

  // try {
  //   const data = await BookModel.find({
  //     $or: [{ author: "曹雪芹" }, { author: "余華" }],
  //   });
  //   console.log(data);
  // } catch (err) {
  //   console.log("讀取失敗");
  // }

  // 價格大於 30 且小於 70
  // BookModel.find(
  //   { $and: [{ price: { $gt: 30 } }, { price: { $lt: 70 } }] },
  //   (err, data) => {
  //     if (err) {
  //       console.log("讀取失敗");
  //       return;
  //     }
  //     console.log(data);
  //   }
  // );

  // try {
  //   const data = await BookModel.find({
  //     $and: [{ price: { $gt: 30 } }, { price: { $lt: 70 } }],
  //   });
  //   console.log(data);
  // } catch (err) {
  //   console.log("讀取失敗");
  // }

  // 正則表達式，搜索書籍名稱中帶有「三」的書籍
  // BookModel.find({ name: /三/ }, (err, data) => {
  //   if (err) {
  //     console.log("讀取失敗");
  //     return;
  //   }
  //   console.log(data);
  // });

  // try {
  //   const data = await BookModel.find({ name: /三/ });
  //   console.log(data);
  // } catch (err) {
  //   console.log("讀取失敗");
  // }

  // BookModel.find({ name: new RegExp("三") }, (err, data) => {
  //   if (err) {
  //     console.log("讀取失敗");
  //     return;
  //   }
  //   console.log(data);
  // });

  try {
    const data = await BookModel.find({ name: new RegExp("三") });
    console.log(data);
  } catch (err) {
    console.log("讀取失敗");
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
