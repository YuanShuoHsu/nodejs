var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/web/index");
const authRouter = require("./routes/web/auth");
// 導入 account 接口路由文件
const accountRouter = require("./routes/api/account");

// 導入 express-session
const session = require("express-session");
const MongoStore = require("connect-mongo");
// 導入配置項
const { DBHOST, DBPORT, DBNAME } = require("./config/config");

var app = express();
// 設置 session 的中間件
app.use(
  session({
    name: "sid", // 設置 cookie 的 name，默認值是：connect.sid
    secret: "atguigu", // 參與加密的字符串 (又稱簽名)   加鹽
    saveUninitialized: false, // 是否為每次請求都設置一個 cookie 用來存儲 session 的 id
    resave: true, // 是否在每次請求時重新保存 session   20 分鐘    4:00    4:20
    store: MongoStore.create({
      mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`, // 數據庫的連接配置
    }),
    cookie: {
      httpOnly: true, // 開啟後前端無法通過 JS 操作
      maxAge: 1000 * 60 * 60 * 24 * 7, // 這一條是控制 sessionID 的過期時間的!!!
    },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/api", accountRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // 響應 404
  res.render("404")
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
