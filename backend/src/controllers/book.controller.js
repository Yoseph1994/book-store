const { default: mongoose } = require("mongoose");
const Book = require("../models/book.model");
async function addBook(req, res) {
  console.log(req.body);
  const {
    title,
    description,
    newPrice,
    oldPrice,
    category,
    trending,
    coverImage,
  } = req.body;

  try {
    const book = new Book({
      title,
      description,
      newPrice,
      oldPrice,
      category,
      trending,
      coverImage,
    });
    await book.save();
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    const msg = error.errors.category.message;
    res.status(500).json({ message: msg });
  }
}

async function getAllBooks(req, res) {
  console.log("Hiit");
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Fetching Books" });
  }
}

async function getBook(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Book not found" });
    }
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Fetching Book" });
  }
}

async function updateBook(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Book not found" });
    }

    const book = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Updating Book" });
  }
}

async function deleteAllBooks(req, res) {
  try {
    await Book.deleteMany();
    res.status(200).json({ message: "All Books Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Deleting Books" });
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Book not found" });
    }

    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Deleting Book" });
  }
}

module.exports = {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteAllBooks,
  deleteBook,
};
