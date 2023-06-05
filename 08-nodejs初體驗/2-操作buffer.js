// buffer 與字串的轉換
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_4.toString()); // utf-8

// []
let buf = Buffer.from("hello");
console.log(buf[0].toString(2)); // 01101000
console.log(buf);
buf[0] = 95;
console.log(buf.toString());
