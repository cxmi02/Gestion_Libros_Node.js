const mongoose = require('mongoose');
let Book;

const connectDatabase = async () => {
    try {
        
        if(!Book){
            Book = mongoose.model('Book', require('../models/BookModel').schema);
        }

        await mongoose.connect('mongodb+srv://sepulvedagiraldocamila:IAw9xmtt7wXcTtIL@db-1.idpnodb.mongodb.net/')
        .then(() => console.log('MongoDB Connected'))
        .catch((err)=> console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        // await Libro.deleteMany();

        const books = [
            {
                name: 'Maravilloso Desastre',
                gender: 'Romance',
                reference: 1
            },
            {
                nombre: 'Amigo Imaginario',
                gender: 'Ficticio',
                reference: 2
            }

        ];

        await Book.insertMany(books);
        console.log('Data successfully initialized');

    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
