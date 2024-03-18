const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/api/new/books', bookController.createBook);
router.get('/api/all/books', bookController.getAllBooks);
router.get('/api/books/reference/:reference', bookController.getBookByReference);
router.patch('/api/books/update/:name', bookController.updateBook);
router.delete('/api/books/delete/:name', bookController.deleteBook);


module.exports = router;