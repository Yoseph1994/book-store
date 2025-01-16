const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use("/api/books", require("./src/routes/book.routes"));

main()
  .then(() => console.log("Mongo Connedted Succesfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
