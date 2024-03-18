const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    gender: String,
    reference: Number
});

const Book = mongoose.model('Libreria', bookSchema);

module.exports = Book;