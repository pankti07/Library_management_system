const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
   // book_id: Number,
    book_name : String,
    book_author : String,
    book_category : String
});

module.exports = mongoose.model('Book', BookSchema);