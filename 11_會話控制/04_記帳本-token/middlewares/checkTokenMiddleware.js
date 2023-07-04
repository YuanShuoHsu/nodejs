// 獲取配置項
const { secret } = require("../config/config");
// 聲明中間件
module.exports = (req, res, next) => {
  // 獲取 token
  let token = req.get("token");
  // 判斷
  if (!token) {
    return res.json({
      code: "2003",
      msg: "token 缺失",
      data: null,
    });
  }
  // 校驗 token
  jwt.verify(token, secret, async (err, data) => {
    // 檢測 token 是否正確
    if (err) {
      return res.json({
        code: "2004",
        msg: "token 校驗失敗",
        data: null,
      });
    }
    // 保存用戶的信息
    req.user = data; // req.session req.body
    // 如果 token 校驗成功
    next();
  });
};
