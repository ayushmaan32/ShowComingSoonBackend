/**
 * @type {string}
 */
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const db = require("./config/mySql");
const cors = require("cors");
// console.log(process.env);
app.use(cors());

app.use(express.json());

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) console.log(`error in starting server`);
  console.log(`server is up and running on port : ${port}`);
});
