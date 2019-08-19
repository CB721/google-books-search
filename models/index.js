const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: {type: String, require: true},
    title: {type: String, require: true},
    author: {type: Array, require: true},
    description: {type: String, require: true},
    cover: {type: String, require: true},
    link: {type: String, require: true},
    pages: {type: Number, require: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;