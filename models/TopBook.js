const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topSchema = new Schema({
    books: {
        type: Array,
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})

const Top = mongoose.model("Top", topSchema);
module.exports = Top;