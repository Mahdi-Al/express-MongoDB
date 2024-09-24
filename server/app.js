const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const dbConnection = require("./db/connection.js");
const memberController = require("./controllers/member.controller.js");
const router = require("./routes/member.route.js");
const app = express();
const port = process.env.APP_PORT || 3002;
// require('dotenv').config({path:__dirname+'/./../../.env'})
// * define middlewares
app.use(express.json(), express.urlencoded({ extended: true }));

// * define routes
app.use("/members", router);

async function callAwait() {
  await dbConnection();
}
callAwait();

app.listen(port, () => {
  console.log(`the server is ran in port ${port}`);
});
