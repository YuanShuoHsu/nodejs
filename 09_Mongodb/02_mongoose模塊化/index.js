// 導入 db 文件
const db = require("./db/db");
// 導入 mongoose
const mongoose = require("mongoose");
// 導入 BookModel
const BookModel = require("./models/BookModel");

// 調用函數
db(
  async () => {
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
  },
  () => {
    console.log("連接失敗");
  }
);
