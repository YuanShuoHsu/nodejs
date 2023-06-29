// 導入 lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
// 獲取 db 對象
const db = low(adapter);

// 初始化數據
// db.defaults({ posts: [], user: {} }).write();

// 寫入數據
// db.get("posts").push({ id: 2, title: "今天天氣還不錯" }).write();
// db.get("posts").unshift({ id: 3, title: "今天天氣還不錯" }).write();
// 獲取單條數據
// let res = db.get("posts").find({ id: 1 }).value();
// console.log(res);

// 獲取數據
// console.log(db.get("posts").value());

// 刪除數據
// let res = db.get("posts").remove({ id: 2 }).write();
// console.log(res);

// 更新數據
// db.get("posts").find({ id: 1 }).assign({ title: "今天下雨啦" }).write();
