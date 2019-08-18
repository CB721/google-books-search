var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    body: String,
    description: String,
    date: { type: Date, default: Date.now },
    cover: String,
    googleID: String
});

var Book = mongoose.model("Book", bookSchema);

export default Book;