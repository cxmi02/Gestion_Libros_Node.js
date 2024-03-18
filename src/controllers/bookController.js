const Book = require('../models/BookModel');

const bookController = {

    // crear nuevos libros
    createBook: async (req, res) => {
        const bookData = req.body;
        try {
            const newBook = new Book(bookData);
            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error when creating the book:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Obtener todos los libros
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.json(books);

        } catch (error) {
            console.error('Error when creating the book:', error);
            res.status(500).json({ message: 'Internal Server Error'});
        }
    },

    // Consultar el libro por su referencia
    getBookByReference: async ( req, res) => {
        const {reference} = req.params;
        try {
            const bookReference = await Book.findOne({reference: reference});
            res.json(bookReference);
        } catch (error) {
            console.error('Error when creating the book:', error);
            res.status(500).json({ message: 'Internal Server Error'});
        }
    },

    // Actualizar el nombre de un libro
    updateBook: async (req, res) => {
        try {
            const { name } = req.params;
            const bookUpdate = await Book.findOneAndUpdate({ name: name }, { $set: {name: 'Amor en Verso'}});
            res.json(bookUpdate);
            
        } catch (error) {
            console.error('Error when creating the book:', error);
            res.status(500).json({ message: 'Internal Server Error'}); 
        }
    },

    deleteBook: async(req, res) => {
        try {
            const { name } = req.params;
            const bookDelete = await Book.findOneAndDelete({ name: name });
            res.json(bookDelete); 
            
        } catch (error) {
            console.error('Error when creating the book:', error);
            res.status(500).json({ message: 'Internal Server Error'});
        }
    }
};

module.exports = bookController;