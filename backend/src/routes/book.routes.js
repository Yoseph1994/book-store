const express = require("express");
const {
  addBook,
  getAllBooks,
  getBook,
  deleteBook,
  deleteAllBooks,
  updateBook,
} = require("../controllers/book.controller");

const router = express.Router();

router.post("/", addBook);
router.get("/", getAllBooks);
router.delete("/", deleteAllBooks);

router.get("/:id", getBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
module.exports = router;
