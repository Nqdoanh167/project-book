/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
   name: {
      type: String,
   },
   age: {
      type: Number,
   },
});

const Author = mongoose.model('authors', AuthorSchema);
module.exports = Author;
