// buffer 與字串的轉換
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf.toString()); // utf-8

// []
let buf_2 = Buffer.from("hello");
console.log(buf_2[0].toString(2)); // 01101000
console.log(buf_2);
buf_2[0] = 95;
console.log(buf_2.toString());

// 溢出
let buf_3 = Buffer.from("hello");
buf_3[0] = 361; // 捨棄高位的數字 0001 0110 1001 => 0110 1001
console.log(buf_3);

// 中文
let buf_4 = Buffer.from("你好");
console.log(buf_4);
