//Libraries are imported
const express = require("express");
const path = require("path");
const app = express();
const mainRoute = require("./routes/mainRoute");
const aboutUsRoute = require("./routes/aboutUsRoute");

//Template engine is set
app.set("view engine", "ejs");

//Public folder is open to everybody
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//Local host is been ran in 3000 port
app.listen(3000, () => console.log("Local host is being ran in 3000 port"));

//main Route is set
app.use("/", mainRoute);

//aboutUs Route is set
app.use("/aboutUs", aboutUsRoute);
