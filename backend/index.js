const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

main()
  .then(() => console.log("Mongo Connedted Succesfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
