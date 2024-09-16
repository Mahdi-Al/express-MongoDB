const express = require("express");
require("dotenv").config();
const dbConnection = require("./db/connection.js");
const app = express();
const port = process.env.APP_PORT || 3002;

// * define middlewares
app.use(express.json(), express.urlencoded());
// * define routes
// app.use("/member");
async function callAwait() {
  await dbConnection();
}
callAwait();
app.listen(port, () => {
  console.log(`the server is ran in port ${port}`);
});
