var express = require("express");
var router = express.Router();
let bookModel = require("../db/book");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/add-book", async function (req, res, next) {
  const { title, category, description, price } = req.body;

  await bookModel.create({
    title,
    category,
    description,
    price,
  });

  res.status(200).json({ msg: "Book added successfully" });
});
router.get("/get-books", async function (req, res, next) {
  const books = await bookModel.find();

  if (books.length < 1) {
    res.status(404).json({ msg: "Book not found" });
  } else {
    res.status(200).json(books);
  }
});
router.delete("/delete/:id", async function (req, res, next) {
  const id = req.params.id;

  const book = await bookModel.findById(id);

  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }

  await bookModel.findByIdAndDelete(id);
  const books = await bookModel.find();
  res.status(200).json({ books, msg: "Book deleted successfully" });
});

module.exports = router;
