// 導入 jwt
const jwt = require("jsonwebtoken");

// 創建 (生成) token
// let token = jwt.sign(用戶數據, 加密字符串, 配置對象);
// let token = jwt.sign(
//   {
//     username: "zhangsan",
//   },
//   "atguigu",
//   {
//     expiresIn: 60, // 單位是秒
//   }
// );

// console.log(token);

let t =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNjg4MzYzNDAxLCJleHAiOjE2ODgzNjM0NjF9.HXadnbtFDubguA0CIdQhYTLYaQX-2aR8i5vSW76vMLw";

// 校驗 token
jwt.verify(t, "atguigu", (err, data) => {
  if (err) {
    console.log("校驗失敗");
    return;
  }
  console.log(data);
});
