// 聲明一個函數
function tiemo() {
  console.log("貼膜...");
}

// 捏腳
function niejiao() {
  console.log("捏腳...");
}

// 暴露數據
// module.exports = {
//   tiemo,
//   niejiao,
// };

// exports 暴露數據
// exports.tiemo = tiemo;
// exports.niejiao = niejiao;

// 1. module.exports 可以暴露`任意`數據
// module.exports = "iloveyou";
// module.exports = 521;

// 2. 不能使用`exports = value`的形式暴露數據
// exprots = "iloveyou"; // X

// exports = module.exports = {};
// console.log(module.exports);
// console.log(module.exports === exports);

exports = module.exports = { tiemo: tiemo };
exports.tiemo = tiemo;
// exprots = "iloveyou"; // X