module.exports = (app) => {
    const books = require('../controllers/book.controller.js');

    // Create a new book
    app.post('/createbook', books.create);

    // Retrieve all Books
    app.get('/books', books.findAll);

    // Retrieve a single Book with bookId
    app.get('/books/:bookId', books.findOne);

    // Update a book with BookId
    app.put('/books/:bookId', books.update);

    // Delete a book with bookId
    app.delete('/books/:bookId', books.delete);
}