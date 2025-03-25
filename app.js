const express = require('express');
const indexRouter = require('./routers/indexRouter.js');
const newRouter = require('./routers/newRouter.js');
const path = require('node:path');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000, () => {
    console.log("server binded to port 3000");
})