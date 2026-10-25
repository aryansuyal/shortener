const express = require("express");
const {connectToMongo} = require("./connection")
const urlRoute = require("./routes/url");
const { log } = require("node:console");
const app = express();
const PORT = 8001;


connectToMongo("mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDB connected"));

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));