// 1. 安裝 mongoose
// 2. 導入 mongoose
const mongoose = require("mongoose");

// 設置 strictQuery 為 true
mongoose.set("strictQuery", true);

// 3. 連接 mongodb 服務                     數據庫的名稱
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 4. 設置回調
// 設置連接成功的回調   once 一次   事件回調函數只執行一次
mongoose.connection.once("open", async () => {
  // console.log("連接成功");
  // 5. 創建文檔的結構對象
  // 設置集合中文檔的屬性以及屬性值的類型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  });

  // 6. 創建模型對象    對文檔操作的封裝對象
  let BookModel = mongoose.model("books", BookSchema);

  // 7. 新增
  //   BookModel.create(
  //     {
  //       name: "西遊記",
  //       author: "吳承恩",
  //       price: 19.9,
  //     },
  //     (err, data) => {
  //       // 判斷是否有錯誤
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       // 如果沒有出錯，則輸出插入後的文檔對象
  //       console.log(data);
  //       // 8. 關閉數據庫連接
  //       mongoose.disconnect();
  //     }
  //   );

  try {
    const data = await BookModel.create({
      name: "西遊記",
      author: "吳承恩",
      price: 19.9,
    });
    // 如果沒有出錯，則輸出插入後的文檔對象
    console.log(data);
    // 8. 關閉數據庫連接 (項目運行過程中，不會添加該代碼)
    mongoose.disconnect();
  } catch (error) {
    // 判斷是否有錯誤
    console.error(error);
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
