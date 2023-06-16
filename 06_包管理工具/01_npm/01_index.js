// 1. 導入 uniq 包
const uniq = require("uniq");

// 2. 使用函數
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

const result = uniq(arr);

console.log(result);
