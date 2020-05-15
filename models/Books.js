const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Book title please"
  },
  authors: {
    type: Array,
    trim: true,
    required: "Book author(s) please"
  },
  description: {
    type: String,
    trim: true,
    required: "Book description please"
  },
  image: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
