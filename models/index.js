const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleID: {
        type: String
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: [String],
        require: true
    },
    description: {
        type: String,
        require: true
    },
    cover: {
        type: String,
        require: true,
        trim: true
    },
    link: {
        type: String,
        require: true,
        trim: true
    },
    pages: {
        type: Number,
        require: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;