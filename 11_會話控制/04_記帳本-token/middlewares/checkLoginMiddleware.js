// 檢測登入的中間件
module.exports = (req, res, next) => {
  // 判斷
  if (!req.session.username) {
    return res.redirect("/login");
  }
  next();
};
