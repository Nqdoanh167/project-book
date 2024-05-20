/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
   name: {
      type: String,
   },
   genre: {
      type: String,
   },
   authorId: {
      type: String,
   },
});
const Book = mongoose.model('books', BookSchema);
module.exports = Book;
