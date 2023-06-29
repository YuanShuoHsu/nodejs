// 導入 db
const db = require("./db/db");
// 導入 MovieModel
const MovieModel = require("./models/MovieModel");
// 調用函數
db(async () => {
  // 電影的模型對象
  // MovieModel.create({ title: "讓子彈飛", director: "姜文" }, (err, data) => {
  //   if (err) {
  //     console.log("插入失敗");
  //     return;
  //   }
  //   console.log("插入成功");
  // });

  try {
    await MovieModel.create({ title: "讓子彈飛", director: "姜文" });
    console.log("插入成功");
  } catch (err) {
    console.log("插入失敗");
  }
});
